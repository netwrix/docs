#requires -version 5.1
<#
.EXAMPLE DISCLAIMER

This script is provided as an EXAMPLE reference implementation only.

It is not a supported deployment or automation tool.
Netwrix Threat Prevention Support does not customize, validate, or troubleshoot
this script for customer environments.

You are responsible for reviewing, testing, and adapting this script
to meet your organization's security, certificate authority,
and change management requirements.
#>

<#
.SYNOPSIS
Automate CSR generation, AD CS signing, deployment, and enrollment of custom-managed certificates
for Netwrix Threat Prevention (NTP) Windows Agents using SIAgentCert.exe.

.DESCRIPTION
For each target endpoint:
  1) Stops SIWindowsAgent (optional)
  2) Runs SIAgentCert.exe to generate agent key + CSR in ...\SIWindowsAgent\CertsInfo
  3) Pulls agent-csr.pem off-host (CSR only; private key stays on endpoint)
  4) Submits CSR to Microsoft AD CS using certreq.exe (optional template)
  5) Converts issued cert to PEM and deploys as agent-crt.pem back to endpoint CertsInfo
  6) Runs SIAgentCert.exe again to enroll
  7) Starts SIWindowsAgent (optional)
  8) Writes a CSV + log to WorkDir and outputs objects

.NOTES
- Private keys remain on endpoints (agent-key.pem / key.pem). The script never copies private keys.
- Requires WinRM/PowerShell remoting to endpoints and local admin rights on endpoints.
- Requires CA enrollment rights for the account running this script (or a template allowing enrollment).

.PARAMETER CAConfig
AD CS config string in the format: "CA-SERVER\CA-NAME"

.PARAMETER TemplateName
Optional AD CS certificate template to request: "CertificateTemplate:<TemplateName>"

.EXAMPLE
.\Invoke-NtpAgentCustomManagedCert.ps1 -ComputerListPath .\agents.txt `
  -CAConfig "CA01\Contoso Issuing CA" -TemplateName "NTPAgent" -Credential (Get-Credential) -Verbose

.EXAMPLE
.\Invoke-NtpAgentCustomManagedCert.ps1 -ComputerName "SRV01","SRV02" `
  -CAConfig "CA01\Contoso Issuing CA" -TemplateName "NTPAgent" -AutoApprovePending -Verbose
#>

[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Medium')]
param(
    [Parameter(ParameterSetName = 'ByComputer', Mandatory = $true)]
    [string[]]$ComputerName,

    [Parameter(ParameterSetName = 'ByFile', Mandatory = $true)]
    [string]$ComputerListPath,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$CAConfig,

    [Parameter(Mandatory = $false)]
    [string]$TemplateName,

    [Parameter(Mandatory = $false)]
    [System.Management.Automation.PSCredential]$Credential,

    [Parameter(Mandatory = $false)]
    [ValidateNotNullOrEmpty()]
    [string]$WorkDir = (Join-Path $env:TEMP 'NTPAgentCertAutomation'),

    [switch]$AutoApprovePending,

    [ValidateRange(1, 600)]
    [int]$PollSeconds = 10,

    [ValidateRange(1, 240)]
    [int]$MaxPollMinutes = 10,

    [switch]$ForceRegenerate,

    [switch]$SkipServiceRestart
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function New-DirectoryIfMissing {
    param([Parameter(Mandatory)] [string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
    }
}

New-DirectoryIfMissing -Path $WorkDir
$script:LogPath = Join-Path $WorkDir ("NTPAgentCertAutomation_{0:yyyyMMdd_HHmmss}.log" -f (Get-Date))

function Write-Log {
    param(
        [Parameter(Mandatory)] [string]$Message,
        [ValidateSet('INFO','WARN','ERROR','DEBUG')] [string]$Level = 'INFO'
    )
    $ts = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
    $line = "$ts [$Level] $Message"
    Write-Host $line
    Add-Content -LiteralPath $script:LogPath -Value $line -Encoding UTF8
}

function Get-Targets {
    if ($PSCmdlet.ParameterSetName -eq 'ByFile') {
        if (-not (Test-Path -LiteralPath $ComputerListPath)) {
            throw "ComputerListPath not found: $ComputerListPath"
        }
        $names = Get-Content -LiteralPath $ComputerListPath |
            ForEach-Object { $_.Trim() } |
            Where-Object { $_ -and ($_ -notmatch '^\s*#') }
        return $names | Sort-Object -Unique
    }

    return $ComputerName |
        ForEach-Object { $_.Trim() } |
        Where-Object { $_ } |
        Sort-Object -Unique
}

function Test-IsIpAddress {
    param([string]$Value)
    if (-not $Value) { return $false }

    $hostname = $Value.Split(':')[0]
    $ip = $null
    return [System.Net.IPAddress]::TryParse($hostname, [ref]$ip)
}

function New-PemFromDerBytes {
    param([Parameter(Mandatory)] [byte[]]$DerBytes)

    $b64 = [Convert]::ToBase64String($DerBytes)
    $lines = for ($i = 0; $i -lt $b64.Length; $i += 64) {
        $b64.Substring($i, [Math]::Min(64, $b64.Length - $i))
    }

    $pem = @(
        '-----BEGIN CERTIFICATE-----'
        $lines
        '-----END CERTIFICATE-----'
        ''
    )
    return ($pem -join "`r`n")
}

function Convert-CertificateFileToPem {
    param([Parameter(Mandatory)] [string]$CertPath)

    if (-not (Test-Path -LiteralPath $CertPath)) {
        throw "Certificate file not found: $CertPath"
    }

    $bytes = [System.IO.File]::ReadAllBytes($CertPath)

    # Detect "text-ish" vs binary DER
    $isText = $true
    foreach ($b in $bytes) {
        if ($b -eq 9 -or $b -eq 10 -or $b -eq 13) { continue }          # whitespace
        if ($b -ge 32 -and $b -le 126) { continue }                     # printable ASCII
        $isText = $false
        break
    }

    if ($isText) {
        $text = [System.Text.Encoding]::ASCII.GetString($bytes)
        if ($text -match 'BEGIN CERTIFICATE') {
            $norm = ($text -replace "`r?`n", "`r`n")
            if (-not $norm.EndsWith("`r`n")) { $norm += "`r`n" }
            return [pscustomobject]@{ PemText = $norm; DerBytes = $null }
        }

        # Might be base64 without PEM headers
        $b64 = ($text -replace '\s', '')
        try {
            $der = [Convert]::FromBase64String($b64)
            return [pscustomobject]@{ PemText = (New-PemFromDerBytes -DerBytes $der); DerBytes = $der }
        }
        catch {
            throw "Certificate file '$CertPath' is text but not PEM and not base64-decodable."
        }
    }

    # Binary DER
    return [pscustomobject]@{ PemText = (New-PemFromDerBytes -DerBytes $bytes); DerBytes = $bytes }
}

function Get-CertInfoFromDerBytes {
    param([byte[]]$DerBytes)
    try {
        $cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2 -ArgumentList @($DerBytes)
        return [pscustomobject]@{
            Subject    = $cert.Subject
            Issuer     = $cert.Issuer
            Thumbprint = $cert.Thumbprint
            NotBefore  = $cert.NotBefore
            NotAfter   = $cert.NotAfter
        }
    }
    catch {
        return $null
    }
}

function Submit-CsrToAdcs {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)] [string]$CsrPath,
        [Parameter(Mandatory)] [string]$CAConfig,
        [Parameter()] [string]$TemplateName,
        [switch]$AutoApprovePending,
        [int]$PollSeconds = 10,
        [int]$MaxPollMinutes = 10
    )

    if (-not (Test-Path -LiteralPath $CsrPath)) { throw "CSR path not found: $CsrPath" }

    $outCerPath = [System.IO.Path]::ChangeExtension($CsrPath, '.cer')

    $submitArgs = @('-submit')
    if ($TemplateName) {
        $submitArgs += @('-attrib', "CertificateTemplate:$TemplateName")
    }
    $submitArgs += @('-config', $CAConfig, $CsrPath, $outCerPath)

    $submitOutput = & certreq.exe @submitArgs 2>&1
    $submitExit = $LASTEXITCODE
    $submitText = ($submitOutput | Out-String).Trim()

    $requestId = $null
    if ($submitText -match '(?im)RequestId\s*:\s*(\d+)') {
        $requestId = [int]$Matches[1]
    }
    elseif ($submitText -match '(?im)RequestId\s+is\s+(\d+)') {
        $requestId = [int]$Matches[1]
    }

    if ( (Test-Path -LiteralPath $outCerPath -PathType Leaf) -and ((Get-Item -LiteralPath $outCerPath).Length -gt 0) ) {
        $pemObj = Convert-CertificateFileToPem -CertPath $outCerPath
        $certInfo = if ($pemObj.DerBytes) { Get-CertInfoFromDerBytes -DerBytes $pemObj.DerBytes } else { $null }

        return [pscustomobject]@{
            RequestId     = $requestId
            CerPath       = $outCerPath
            PemText       = $pemObj.PemText
            CertInfo      = $certInfo
            SubmitExit    = $submitExit
            SubmitOutput  = $submitText
            WasPending    = $false
        }
    }

    if (-not $requestId) {
        throw "certreq did not produce a cert file and RequestId could not be parsed. Exit=$submitExit. Output:`n$submitText"
    }

    if ($AutoApprovePending) {
        # Requires Manage CA rights; ignore failures.
        & certutil.exe -config $CAConfig -resubmit $requestId 2>&1 | Out-Null
    }

    $deadline = (Get-Date).AddMinutes($MaxPollMinutes)
    $lastRetrieve = $null

    do {
        $retrieveArgs = @('-retrieve', '-config', $CAConfig, $requestId, $outCerPath)
        $retrieveOutput = & certreq.exe @retrieveArgs 2>&1
        $lastRetrieve = ($retrieveOutput | Out-String).Trim()

        if (Test-Path -LiteralPath $outCerPath -PathType Leaf -and (Get-Item -LiteralPath $outCerPath).Length -gt 0) {
            $pemObj = Convert-CertificateFileToPem -CertPath $outCerPath
            $certInfo = if ($pemObj.DerBytes) { Get-CertInfoFromDerBytes -DerBytes $pemObj.DerBytes } else { $null }

            return [pscustomobject]@{
                RequestId      = $requestId
                CerPath        = $outCerPath
                PemText        = $pemObj.PemText
                CertInfo       = $certInfo
                SubmitExit     = $submitExit
                SubmitOutput   = $submitText
                WasPending     = $true
                RetrieveOutput = $lastRetrieve
            }
        }

        Start-Sleep -Seconds $PollSeconds
    } while ((Get-Date) -lt $deadline)

    throw "RequestId $requestId was not issued within MaxPollMinutes=$MaxPollMinutes. Last retrieve output:`n$lastRetrieve"
}

function New-EndpointSession {
    param([Parameter(Mandatory)][string]$Computer)
    if ($Credential) {
        return New-PSSession -ComputerName $Computer -Credential $Credential -ErrorAction Stop
    }
    return New-PSSession -ComputerName $Computer -ErrorAction Stop
}

function Get-NtpAgentInfoRemote {
    param([Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session)

    return Invoke-Command -Session $Session -ScriptBlock {
        $candidates = New-Object System.Collections.Generic.List[string]

        $pf = $env:ProgramFiles
        $pf86 = ${env:ProgramFiles(x86)}

        if ($pf)   { $candidates.Add((Join-Path $pf   'Netwrix\Netwrix Threat Prevention\SIWindowsAgent')) }
        if ($pf86) { $candidates.Add((Join-Path $pf86 'Netwrix\Netwrix Threat Prevention\SIWindowsAgent')) }

        # Legacy (pre-rebranding)
        if ($pf)   { $candidates.Add((Join-Path $pf   'STEALTHbits\StealthINTERCEPT\SIWindowsAgent')) }
        if ($pf86) { $candidates.Add((Join-Path $pf86 'STEALTHbits\StealthINTERCEPT\SIWindowsAgent')) }

        $agentDir = $null
        foreach ($p in $candidates) {
            if (Test-Path -LiteralPath (Join-Path $p 'SIAgentCert.exe')) { $agentDir = $p; break }
        }

        if (-not $agentDir) {
            return [pscustomobject]@{ Found = $false; Message = 'SIAgentCert.exe not found under typical paths.' }
        }

        $certsDir  = Join-Path $agentDir 'CertsInfo'
        $exePath   = Join-Path $agentDir 'SIAgentCert.exe'
        $cfgPath   = Join-Path $agentDir 'SIWindowsAgent.exe.config'

        $managerAddress = $null
        if (Test-Path -LiteralPath $cfgPath) {
            try {
                [xml]$xml = Get-Content -LiteralPath $cfgPath
                $node = $xml.configuration.appSettings.add |
                    Where-Object { $_.key -eq 'managerAddress' } |
                    Select-Object -First 1
                if ($node) { $managerAddress = $node.value }
            } catch { }
        }

        $svc = Get-Service -Name 'SIWindowsAgent' -ErrorAction SilentlyContinue

        [pscustomobject]@{
            Found          = $true
            AgentDir       = $agentDir
            CertsDir       = $certsDir
            SIAgentCertExe = $exePath
            ConfigPath     = $cfgPath
            ManagerAddress = $managerAddress
            ServiceExists  = [bool]$svc
            ServiceStatus  = if ($svc) { $svc.Status.ToString() } else { $null }
        }
    }
}

function Stop-AgentServiceRemote {
    param([Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session)

    Invoke-Command -Session $Session -ScriptBlock {
        $svc = Get-Service -Name 'SIWindowsAgent' -ErrorAction SilentlyContinue
        if ($svc -and $svc.Status -ne 'Stopped') {
            Stop-Service -Name 'SIWindowsAgent' -Force -ErrorAction Stop
            (Get-Service -Name 'SIWindowsAgent').WaitForStatus('Stopped', [TimeSpan]::FromSeconds(30))
        }
    }
}

function Start-AgentServiceRemote {
    param([Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session)

    Invoke-Command -Session $Session -ScriptBlock {
        $svc = Get-Service -Name 'SIWindowsAgent' -ErrorAction SilentlyContinue
        if ($svc -and $svc.Status -ne 'Running') {
            Start-Service -Name 'SIWindowsAgent' -ErrorAction Stop
            (Get-Service -Name 'SIWindowsAgent').WaitForStatus('Running', [TimeSpan]::FromSeconds(30))
        }
    }
}

function BackupAndRemove-AgentCertFilesRemote {
    param(
        [Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session,
        [Parameter(Mandatory)][string]$CertsDir
    )

    Invoke-Command -Session $Session -ScriptBlock {
        param($CertsDir)
        if (-not (Test-Path -LiteralPath $CertsDir)) {
            New-Item -ItemType Directory -Path $CertsDir -Force | Out-Null
        }

        $timestamp = Get-Date -Format 'yyyyMMddHHmmss'
        $files = @('agent-crt.pem','agent-csr.pem','agentcsr.pem','agent-key.pem','key.pem')

        foreach ($f in $files) {
            $p = Join-Path $CertsDir $f
            if (Test-Path -LiteralPath $p) {
                Copy-Item -LiteralPath $p -Destination ($p + ".bak-$timestamp") -Force
                Remove-Item -LiteralPath $p -Force
            }
        }
    } -ArgumentList $CertsDir
}

function Run-SIAgentCertRemote {
    param(
        [Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session,
        [Parameter(Mandatory)][string]$ExePath,
        [Parameter(Mandatory)][string]$WorkingDir
    )

    Invoke-Command -Session $Session -ScriptBlock {
        param($ExePath, $WorkingDir)

        if (-not (Test-Path -LiteralPath $ExePath)) {
            throw "SIAgentCert.exe not found: $ExePath"
        }

        Push-Location $WorkingDir
        try {
            # Feed a newline to satisfy "press enter" style prompts, if any.
            $cmd = "echo.| `"$ExePath`""
            $output = & cmd.exe /c $cmd 2>&1
            $exit = $LASTEXITCODE

            [pscustomobject]@{
                ExitCode = $exit
                Output   = ($output | Out-String).Trim()
            }
        }
        finally {
            Pop-Location
        }
    } -ArgumentList $ExePath, $WorkingDir
}

function Invoke-SIAgentCertGenerateCsrRemote {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session,
        [Parameter(Mandatory)][string]$ExePath,
        [Parameter(Mandatory)][string]$AgentDir,
        [Parameter(Mandatory)][string]$CertsDir,
        [ValidateRange(10,600)][int]$TimeoutSeconds = 90
    )

    # 1) Ensure CertsInfo exists
    Invoke-Command -Session $Session -ScriptBlock {
        param($CertsDir)
        if (-not (Test-Path -LiteralPath $CertsDir)) {
            New-Item -ItemType Directory -Path $CertsDir -Force | Out-Null
        }
    } -ArgumentList $CertsDir

    # 2) Start SIAgentCert.exe WITHOUT feeding input (it will typically pause and prompt after creating CSR)
    $start = Invoke-Command -Session $Session -ScriptBlock {
        param($ExePath, $AgentDir)

        $stdout = Join-Path $env:TEMP ("SIAgentCert_{0}_out.txt" -f ([guid]::NewGuid().ToString('N')))
        $stderr = Join-Path $env:TEMP ("SIAgentCert_{0}_err.txt" -f ([guid]::NewGuid().ToString('N')))

        $p = Start-Process -FilePath $ExePath -WorkingDirectory $AgentDir -PassThru -WindowStyle Hidden `
                           -RedirectStandardOutput $stdout -RedirectStandardError $stderr

        [pscustomobject]@{
            Processid        = $p.Id
            StdOutPath = $stdout
            StdErrPath = $stderr
        }
    } -ArgumentList $ExePath, $AgentDir

    # 3) Poll CertsInfo looking for a CSR by CONTENT (covers agent-csr.pem vs agentcsr.pem or other names)
    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    $csr = $null

    do {
        $csr = Invoke-Command -Session $Session -ScriptBlock {
            param($CertsDir)

            $files = Get-ChildItem -LiteralPath $CertsDir -File -ErrorAction SilentlyContinue |
                     Sort-Object LastWriteTime -Descending

            foreach ($f in $files) {
                if ($f.Extension -in '.pem','.csr','.req') {
                    $txt = Get-Content -LiteralPath $f.FullName -Raw -ErrorAction SilentlyContinue
                    if ($txt -match '-----BEGIN (NEW )?CERTIFICATE REQUEST-----' -and
                        $txt -match '-----END (NEW )?CERTIFICATE REQUEST-----') {
                        return [pscustomobject]@{
                            Path         = $f.FullName
                            Content      = $txt
                            LastWriteTime= $f.LastWriteTime
                        }
                    }
                }
            }
            return $null
        } -ArgumentList $CertsDir

        if ($csr) { break }
        Start-Sleep -Seconds 2
    } while ((Get-Date) -lt $deadline)

    # 4) Stop SIAgentCert.exe if it is still running (prevents it from continuing past the "sign CSR" prompt)
    Invoke-Command -Session $Session -ScriptBlock {
        param($Processid)
        $p = Get-Process -Id $Processid -ErrorAction SilentlyContinue
        if ($p) { Stop-Process -Id $Processid -Force }
    } -ArgumentList $start.Processid

    if (-not $csr) {
        # Diagnostics: folder listing + captured stdout/stderr
        $diag = Invoke-Command -Session $Session -ScriptBlock {
            param($CertsDir,$o,$e)
            [pscustomobject]@{
                CertsInfoFiles = if (Test-Path -LiteralPath $CertsDir) {
                    Get-ChildItem -LiteralPath $CertsDir -File |
                        Select-Object Name,Length,LastWriteTime
                } else { @() }
                StdOut = (Get-Content -LiteralPath $o -Raw -ErrorAction SilentlyContinue)
                StdErr = (Get-Content -LiteralPath $e -Raw -ErrorAction SilentlyContinue)
            }
        } -ArgumentList $CertsDir, $start.StdOutPath, $start.StdErrPath

        $filesText = ($diag.CertsInfoFiles | Format-Table -AutoSize | Out-String)
        throw "SIAgentCert.exe did not produce a CSR in '$CertsDir' within $TimeoutSeconds seconds.`n" +
              "Files in CertsInfo:`n$filesText`nStdOut:`n$($diag.StdOut)`nStdErr:`n$($diag.StdErr)"
    }

    return $csr
}

function Get-AgentCsrRemote {
    param(
        [Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session,
        [Parameter(Mandatory)][string]$CertsDir
    )

    Invoke-Command -Session $Session -ScriptBlock {
        param($CertsDir)

        $candidates = @(
            (Join-Path $CertsDir 'agent-csr.pem'),
            (Join-Path $CertsDir 'agentcsr.pem')
        )

        foreach ($p in $candidates) {
            if (Test-Path -LiteralPath $p) {
                $content = Get-Content -LiteralPath $p -Raw
                return [pscustomobject]@{ Path = $p; Content = $content }
            }
        }

        throw "CSR file not found in $CertsDir (looked for agent-csr.pem and agentcsr.pem)."
    } -ArgumentList $CertsDir
}

function Set-AgentCertRemote {
    param(
        [Parameter(Mandatory)][System.Management.Automation.Runspaces.PSSession]$Session,
        [Parameter(Mandatory)][string]$CertsDir,
        [Parameter(Mandatory)][string]$PemText
    )

    Invoke-Command -Session $Session -ScriptBlock {
        param($CertsDir, $PemText)

        if (-not (Test-Path -LiteralPath $CertsDir)) {
            New-Item -ItemType Directory -Path $CertsDir -Force | Out-Null
        }

        $crtPath = Join-Path $CertsDir 'agent-crt.pem'
        if (Test-Path -LiteralPath $crtPath) {
            $timestamp = Get-Date -Format 'yyyyMMddHHmmss'
            Copy-Item -LiteralPath $crtPath -Destination ($crtPath + ".bak-$timestamp") -Force
        }

        # ASCII, no BOM, suitable for PEM.
        [System.IO.File]::WriteAllText($crtPath, $PemText, [System.Text.Encoding]::ASCII)
        return $crtPath
    } -ArgumentList $CertsDir, $PemText
}

# ---------------- MAIN ----------------
$targets = Get-Targets
if (-not $targets -or $targets.Count -eq 0) { throw "No target computers resolved." }

Write-Log "Starting NTP Agent custom-managed cert automation"
Write-Log "Targets: $($targets -join ', ')"
Write-Log "CAConfig: $CAConfig"
if ($TemplateName) { Write-Log "TemplateName: $TemplateName" }
Write-Log "WorkDir: $WorkDir"
Write-Log "Log: $script:LogPath"

$results = New-Object System.Collections.Generic.List[object]

foreach ($computer in $targets) {
    Write-Log "---- [$computer] ----"

    $row = [ordered]@{
        ComputerName   = $computer
        AgentDir       = $null
        CertsDir       = $null
        ManagerAddress = $null
        CSR_RemotePath = $null
        RequestId      = $null
        CertThumbprint = $null
        CertNotAfter   = $null
        Status         = 'Started'
        Error          = $null
    }

    try {
        if (-not $PSCmdlet.ShouldProcess($computer, 'Generate CSR, CA sign, deploy agent-crt.pem, enroll')) {
            $row.Status = 'WhatIfSkipped'
            $results.Add([pscustomobject]$row)
            continue
        }

        $session = $null
        try {
            $session = New-EndpointSession -Computer $computer

            $agent = Get-NtpAgentInfoRemote -Session $session
            if (-not $agent.Found) { throw $agent.Message }

            $row.AgentDir       = $agent.AgentDir
            $row.CertsDir       = $agent.CertsDir
            $row.ManagerAddress = $agent.ManagerAddress

            if ($agent.ManagerAddress -and (Test-IsIpAddress $agent.ManagerAddress)) {
                Write-Log "managerAddress appears to be an IP ($($agent.ManagerAddress)). For custom-managed certs, use DNS/hostname/FQDN." -Level WARN
            }

            if (-not $SkipServiceRestart) {
                Write-Log "Stopping SIWindowsAgent (if running)..." -Level INFO
                Stop-AgentServiceRemote -Session $session
            }

            if ($ForceRegenerate) {
                Write-Log "ForceRegenerate enabled: backing up and removing existing agent cert/key/csr in CertsInfo..." -Level WARN
                BackupAndRemove-AgentCertFilesRemote -Session $session -CertsDir $agent.CertsDir
            }

            $localHostDir = Join-Path $WorkDir $computer                                                                                                 
              New-DirectoryIfMissing -Path $localHostDir                                                                                                   
                                                                                                                                                           
              Write-Log "Running SIAgentCert.exe to generate CSR..." -Level INFO                                                                           
              $csr = Invoke-SIAgentCertGenerateCsrRemote -Session $session `                                                                               
                      -ExePath $agent.SIAgentCertExe -AgentDir $agent.AgentDir -CertsDir $agent.CertsDir -TimeoutSeconds 90                                
                                                                                                                                                           
              $row.CSR_RemotePath = $csr.Path                                                                                                              
                                                                                                                                                           
              $localCsrPath = Join-Path $localHostDir 'agent-csr.pem'                                                                                      
              if ($PSCmdlet.ShouldProcess($localCsrPath, "Write CSR to disk")) {                                                                           
                  [System.IO.File]::WriteAllText($localCsrPath, $csr.Content, [System.Text.Encoding]::ASCII)                                               
              }                                                                                                                                            
                                                                                                                                                           
              Write-Log "Submitting CSR to AD CS..." -Level INFO        

            Write-Log "Submitting CSR to AD CS..." -Level INFO
            $issued = Submit-CsrToAdcs -CsrPath $localCsrPath -CAConfig $CAConfig -TemplateName $TemplateName `
                                       -AutoApprovePending:$AutoApprovePending -PollSeconds $PollSeconds -MaxPollMinutes $MaxPollMinutes

            $row.RequestId = $issued.RequestId
            if ($issued.CertInfo) {
                $row.CertThumbprint = $issued.CertInfo.Thumbprint
                $row.CertNotAfter   = $issued.CertInfo.NotAfter
                Write-Log "Issued cert: Thumbprint=$($issued.CertInfo.Thumbprint) NotAfter=$($issued.CertInfo.NotAfter)" -Level INFO
            }

            Write-Log "Deploying agent-crt.pem to CertsInfo..." -Level INFO
            $remoteCert = Set-AgentCertRemote -Session $session -CertsDir $agent.CertsDir -PemText $issued.PemText
            Write-Log "Deployed: $remoteCert" -Level INFO

            Write-Log "Running SIAgentCert.exe again to enroll..." -Level INFO
            $run2 = Run-SIAgentCertRemote -Session $session -ExePath $agent.SIAgentCertExe -WorkingDir $agent.AgentDir
            Write-Log "SIAgentCert (enroll) exit code: $($run2.ExitCode)" -Level DEBUG
            if ($run2.Output) { Write-Log "SIAgentCert (enroll) output:`n$($run2.Output)" -Level DEBUG }

            if (-not $SkipServiceRestart) {
                Write-Log "Starting SIWindowsAgent..." -Level INFO
                Start-AgentServiceRemote -Session $session
            }

            $row.Status = 'Success'
        }
        finally {
            if ($session) { Remove-PSSession -Session $session -ErrorAction SilentlyContinue }
        }
    }
    catch {
        $row.Status = 'Failed'
        $row.Error  = $_.Exception.Message
        Write-Log "FAILED: $($row.Error)" -Level ERROR
    }

    $results.Add([pscustomobject]$row)
}

$csvPath = Join-Path $WorkDir ("NTPAgentCertAutomation_results_{0:yyyyMMdd_HHmmss}.csv" -f (Get-Date))
$results | Export-Csv -NoTypeInformation -LiteralPath $csvPath -Encoding UTF8
Write-Log "Completed. Results CSV: $csvPath"
Write-Log "Log file: $script:LogPath"

# Output results to pipeline
$results
