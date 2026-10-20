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
    Installs the Netwrix Threat Prevention SI Agent remotely
    with Custom-managed certificates enabled and the AD Module (NTP agent) installed.

.DESCRIPTION
    - Copies SI Agent.exe to a remote host
    - Runs a silent install with:
        CUSTOM_CA=TRUE          -> custom-managed certificates
        AD_MONITOR_INSTALL=TRUE -> AD Module / NTP agent
        ADDFWRULES=TRUE         -> create Windows Firewall rule for agent
        STARTAGENTSERVICE=FALSE -> agent service will not auto-start (no cert yet)
    - Intended for deployment on domain controllers (per Netwrix docs for AD Module / NTP Agent).

.PARAMETER ComputerName
    One or more remote computers to install onto.

.PARAMETER LocalInstallerPath
    Full path to "SI Agent.exe" on the local machine.

.PARAMETER EnterpriseManagerHostFqdn
    DNS name / FQDN of the Threat Prevention Enterprise Manager.
    Required for custom-managed certificates (must not be just an IP).

.PARAMETER Credential
    (Optional) Alternate credentials with local admin rights on the remote host.

.PARAMETER RemoteInstallerFolder
    Folder on the remote host where the installer and log will be stored.

.EXAMPLE
    $cred = Get-Credential
    .\Install-NtpAgentRemote.ps1 `
        -ComputerName 'DC01.contoso.com' `
        -LocalInstallerPath 'C:\Installers\SI Agent.exe' `
        -EnterpriseManagerHostFqdn 'tp-em01.contoso.com' `
        -Credential $cred
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string[]]$ComputerName,

    [Parameter(Mandatory = $true)]
    [string]$LocalInstallerPath,

    [Parameter(Mandatory = $true)]
    [string]$EnterpriseManagerHostFqdn,

    [Parameter(Mandatory = $false)]
    [System.Management.Automation.PSCredential]$Credential,

    [Parameter(Mandatory = $false)]
    [string]$RemoteInstallerFolder = 'C:\Temp\NetwrixNtpAgent'
)

# ---------- Basic validation ----------

if (-not (Test-Path -LiteralPath $LocalInstallerPath)) {
    throw "Local installer not found at '$LocalInstallerPath'."
}

# Simple guardrail: SI Agent is needed
if ([IO.Path]::GetFileName($LocalInstallerPath) -notmatch 'SI Agent\.exe') {
    Write-Warning "Installer file name is not 'SI Agent.exe'. Continuing, but verify that this is the Threat Prevention Agent installer."
}

# ---------- Main loop over remote computers ----------

foreach ($computer in $ComputerName) {
    Write-Host "=== [$computer] Starting SI Agent (NTP) deployment ==="

    # Create a remoting session
    $sessionParams = @{
        ComputerName = $computer
    }
    if ($PSBoundParameters.ContainsKey('Credential')) {
        $sessionParams.Credential = $Credential
    }

    try {
        $session = New-PSSession @sessionParams

        # Ensure remote folder exists
        Invoke-Command -Session $session -ScriptBlock {
            param($folder)
            if (-not (Test-Path -LiteralPath $folder)) {
                New-Item -Path $folder -ItemType Directory -Force | Out-Null
            }
        } -ArgumentList $RemoteInstallerFolder

        # Copy installer
        $remoteInstallerPath = Join-Path $RemoteInstallerFolder 'SI Agent.exe'
        Write-Host "[$computer] Copying SI Agent installer to $remoteInstallerPath"
        Copy-Item -Path $LocalInstallerPath -Destination $remoteInstallerPath -ToSession $session -Force

        # Optional: check if target is a domain controller
        $isDc = $false
        try {
            $isDc = Invoke-Command -Session $session -ScriptBlock {
                try {
                    $p = Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\ProductOptions'
                    return ($p.ProductType -eq 'LanmanNT')  # LanmanNT = DC
                } catch {
                    return $false
                }
            }
        } catch {
            Write-Warning "[$computer] Unable to determine if host is a domain controller: $_"
        }

        if (-not $isDc) {
            Write-Warning "[$computer] Host does NOT appear to be a domain controller. The AD Module (NTP Agent) is only supported on domain controllers."
        }

        # Build installer arguments
        $remoteLogPath = Join-Path $RemoteInstallerFolder 'SIAgentInstall.log'

        # Using CUSTOM_CA=TRUE enables custom-managed certificate mode.
        # AD_MONITOR_INSTALL=TRUE installs the AD Module (NTP agent).
        # STARTAGENTSERVICE=FALSE because in custom-managed mode
        # the agent won't have a cert yet, so service must be started after cert deployment.
        $installerArgs = @(
            '/q'
            'CUSTOM_CA=TRUE'
            "ENTMGR_IPADDRESS=$EnterpriseManagerHostFqdn"
            'AD_MONITOR_INSTALL=TRUE'
            'ADDFWRULES=TRUE'
            'STARTAGENTSERVICE=FALSE'
            '/log'
            ('"{0}"' -f $remoteLogPath)  # quote the log path in case of spaces
        ) -join ' '

        Write-Host "[$computer] Running silent SI Agent install with custom-managed certificates and AD Module (NTP) enabled..."
        Invoke-Command -Session $session -ScriptBlock {
            param(
                [string]$InstallerPath,
                [string]$InstallerArgs,
                [string]$LogPath
            )

            Write-Host "    Installer: $InstallerPath"
            Write-Host "    Args     : $InstallerArgs"
            Write-Host "    Log file : $LogPath"

            $proc = Start-Process -FilePath $InstallerPath -ArgumentList $InstallerArgs -Wait -PassThru

            if ($proc.ExitCode -ne 0) {
                throw "SI Agent installer exited with code $($proc.ExitCode). Check log at $LogPath."
            }

            Write-Host "    SI Agent installer completed successfully."
        } -ArgumentList $remoteInstallerPath, $installerArgs, $remoteLogPath

        Write-Host "=== [$computer] Completed. Installer log: $remoteLogPath ==="
    }
    catch {
        Write-Error "[$computer] Installation failed: $_"
    }
    finally {
        if ($session) {
            Remove-PSSession -Session $session -ErrorAction SilentlyContinue
        }
    }
}
