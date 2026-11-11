#Requires -Modules @{ ModuleName="Microsoft.PowerShell.LocalAccounts"; ModuleVersion="1.0.0" }
<#
.SYNOPSIS
    NPSD Management Script
.DESCRIPTION
    For automated use by NPSD
 #>
 [CmdletBinding(HelpURI = 'https://www.netwrix.com/')]
 param (
 # for all actions
     [Parameter(HelpMessage = 'The target type')] [string]$Target = 'LocalGroup', # mapped to fn "RunTarget-<Target>"
     [Parameter(HelpMessage = 'The action to perform')] [string]$Action = 'MemberList',
     [Parameter(HelpMessage = 'If set, will not encode the result to Base64')] [switch]$SimpleResult,
     [Parameter(HelpMessage = 'If set, will not include metadata with the result')] [switch]$NoMeta,
     [Parameter(HelpMessage = 'If set, will use this directory.')] [string]$TempDir = '',
 
 # target: General
     [Parameter(HelpMessage = 'For General:RemoveOldTempFiles')] [string[]]$ActiveSessionIDs = @(),
     [Parameter(HelpMessage = 'For General:RemoveOldTempFiles')] [string[]]$KnownTempFilePaths = @(),
 
 # target: LocalUser
     [Parameter(HelpMessage = 'For LocalUser:*')] [string]$PropertyKey = '',
     [Parameter(HelpMessage = 'For LocalUser:*')] [string[]]$PropertyValuesB64 = @(),
     [Parameter(HelpMessage = 'For LocalUser:(Rename,Create))')] [string]$NewNameB64 = '',
     [Parameter(HelpMessage = 'For LocalUser:(SetPassword,Create)')] [string]$EncryptedPassword = '',
 
 # target: LocalGroup
     [Parameter(HelpMessage = 'For LocalGroup:*')] [string]$GroupSID = 'S-1-5-32-544',
     [Parameter(HelpMessage = 'For LocalGroup:*')] [string]$GroupNameB64 = '',
     [Parameter(HelpMessage = 'For LocalGroup:*')] [string[]]$MemberSID = '',
 
 # mixed targets
     [Parameter(HelpMessage = 'For General:GenerateKeys, LocalUser:SetPassword')] [string]$PrivateKeyPath = ''
 )
 
 function Run-Script {
     # entrypoint (called at bottom of this script)
     [CmdletBinding()] Param(
     )
     Write-Verbose "Running script"
     try {
         Script:Run-Main -ErrorAction Stop   # ErrorAction "Stop" inside a try block interrupts entire script on first error
         $exitCode = 0
         Write-Verbose 'Got: Success'
     } catch {
         Write-Verbose 'Got: Error'
         Write-Debug 'Starting debug session'  # option to drop into interactive mode here when called with -Debug
         $exitCode = 1  # ensure non-zero return code (required for some integrations)
         Write-Verbose "Error: $_"
         # convert to parsable error details format
         $errorDetails = Script:Format-Exception -Exception $_.Exception -CategoryInfo $_.CategoryInfo
         $output = Format-Output -Result $errorDetails
         Write-Output $output | ConvertTo-JSON -Compress
 
         # Ensure stderr is non-empty (required for some integrations).
         #
         # We do not currently use this output (preferring the parsable JSON), but it might be helpful for debugging.
         #
         # NOTE: some EDRs join the stderr/ stdout into a single stream, so do not depend on this being separate.
         Write-Error $_
     }
     Write-Verbose "Exiting with code $exitCode"
     exit $exitCode
 }
 
 function Run-Main {
     [CmdletBinding()] Param(
     )
     # Set default encoding to UTF-8. By itself, this was not enough to fix all unicode issues in all EDRs. Since we
     # base64-encode the response anyways, the only thing this does now is fix the plain-text exception
     # in `stderr` in _some_ EDRS.
     $PSDefaultParameterValues['*:Encoding'] = 'utf8'
 
     Set-StrictMode -Off | Out-Null  # support PSRP for testing
 
     Add-Type -AssemblyName System.DirectoryServices.AccountManagement | Out-Null # used for Powershell 4 support
 
     # NOTE: get meta BEFORE decoding b64 command line
     $Script:Meta = @{
         PSVersion = $PSVersionTable.PSVersion;
         InitialPath = $null;
         CurrentPath = $PWD.Path;
         ComputerName = $env:COMPUTERNAME;
     }
 
     Script:Convert-CommandLineArguments | Out-Null
 
     if ($Script:TempDir) {
         # TODO: add temp file cleanup for the default working directory as well, and always use a temp dir
         Set-Location $env:TEMP | Out-Null  # ensure we are relative to the temp path
         if (-Not (Test-Path $Script:TempDir)) {
             New-Item -ItemType Directory -Force -Path $Script:TempDir | Out-Null
         }
         Set-Location $Script:TempDir | Out-Null
         $Script:Meta['InitialPath'] = $Script:Meta['CurrentPath']
         $Script:Meta['CurrentPath'] = $PWD.Path
     }
 
     $functionName = "RunTarget-$Script:Target"
     Script:Assert-True (Get-Command $functionName -errorAction SilentlyContinue) "Invalid target $Script:Target"
     Write-Verbose "Running action $Script:Action on target $Script:Target with function $functionName"
     $result = invoke-expression $functionName
     $output = Format-Output -Result $result
     if (-Not $Script:NoMeta) {
         # TODO: move to Format-Output
         $output.add('Meta', $Script:Meta) | Out-Null
     }
     Write-Output $output | ConvertTo-JSON -Depth 10 -Compress
 }
 
 function Format-Output {
     [CmdletBinding()] Param(
         [Parameter()] $Result
     )
     # TODO: support returning both simple and b64 result for debugging
     $simpleOutput = @{ RMDResultType = 'ResultSimple'; Result = $Result; }
     if ($Script:SimpleResult -or (-Not $Result)) {
         return $simpleOutput
     }
     # Default to base64-encoding the response to ensure unicode / special characters do not get mangled if the EDR
     # provider converts it to a non-utf encoding.
     try {
         $base64Result = $Result | ConvertTo-JSON -Compress | Encode-Base64String;
         $b64Output = @{ RMDResultType = 'ResultB64'; Result = $base64Result; }
         return $b64Output
     } catch {
         Write-Verbose "Error base64-encoding result: $_"
         return $simpleOutput
     }
 }
 
 function Convert-CommandLineArguments {
     [CmdletBinding()] Param(
     )
     # Base64 encoding avoids having to escape special characters
     [string] $Script:GroupName = $Script:GroupNameB64 | Script:Decode-Base64String
     [string] $Script:NewName = $Script:NewNameB64 | Script:Decode-Base64String
     [string[]] $Script:PropertyValues = $Script:PropertyValuesB64 | ForEach-Object { $_ | Script:Decode-Base64String }
 }
 
 function RunTarget-General {
     [CmdletBinding()] Param(
     )
     Switch ($Script:Action) {
         'TestPrint' {
             return 'TestResult'
         }
         'GenerateKeys' {
             Script:Assert-True $Script:PrivateKeyPath 'This action requires the PrivateKeyPath argument'
 
             # generate a new key
             $rSA = New-Object System.Security.Cryptography.RSACryptoServiceProvider -ArgumentList 2048
 
             # write encrypted private key to file for later use w/in session
             # ConvertTo-SecureString - encrypt key at rest using system credentials (prevent non-admin read access)
             $rSA.toXmlString($TRUE) | ConvertTo-SecureString -AsPlainText -Force | ConvertFrom-SecureString |
                     Out-File $Script:PrivateKeyPath
 
             # public key file - will be used to encrypt passwords on SecureONE's side
             $xmlString = $rSA.toXmlString($FALSE)
            return $xmlString
         }
         'RemoveOldTempFiles' {
             Write-Verbose "ActiveSessionIDs: $( $Script:ActiveSessionIDs | ConvertTO-JSON -Compress )"
             Write-Verbose "KnownTempFilePaths: $( $Script:KnownTempFilePaths | ConvertTO-JSON -Compress )"
             $OriginalTempFilePattern = 'remediant-*'
             $OriginalTempFileExtensions = @('.ps1', '.txt')
             $CurrentTempFilePattern = 'secureone-000-*.tmp*'
             $PrefixesToExclude = $Script:ActiveSessionIDs | ForEach-Object { "secureone-000-$_-" }
 
             # exclude pattern for temp files from active sessions
             [regex]$ExcludePattern = ('^(' + (($PrefixesToExclude | ForEach-Object {[regex]::escape($_)}) -join '|') + ')')
 
             $TempFilesToRemove = @()
 
             # optionally include specific files we know should be removed (to warn if they are missing)
             if ($Script:KnownTempFilePaths) {
                 $TempFilesToRemove += $Script:KnownTempFilePaths
             }
 
             # remove any temp files S1 may have created in previous sessions (relative to the default working directory)
             $TempFilesToRemove += Script:Find-TempFiles -Location '.' -NameFilter $CurrentTempFilePattern `
                                     | Where-Object {$_.name -notmatch $ExcludePattern} `
                                     | ForEach-Object { $_.Name }
 
             # also remove temp files from S1 versions <= 2.11.0 (relative to the default working directory)
             $TempFilesToRemove += Script:Find-TempFiles -Location '.' -NameFilter $OriginalTempFilePattern `
                 | Where-Object { $_.Extension -in $OriginalTempFileExtensions } | ForEach-Object { $_.Name }
 
             $TempFilesToRemove = $TempFilesToRemove | Sort-Object | Get-Unique
             $summary = Script:RemoveReturningSummary-SpecifiedFilePaths -Paths ($TempFilesToRemove)
             return $summary
         }
     }
     throw "Invalid $Script:Target action $Script:Action"
 }
 
 function RunTarget-LocalUser {
     [CmdletBinding()] Param(
     )
     if ($Script:Action -Eq 'List') {
         $key = $Script:PropertyKey
         $values = $Script:PropertyValues
         Write-Verbose "About to get users list"
         $users = @(Script:Get-UsersList -Key $key -Values $values)
         $formatted_users = @($users | ForEach-Object { $_ | Script:Format-LocalUser })
         return @($formatted_users);
     }
     if ($Script:Action -Eq 'Create') {
         $username = $Script:NewName
 
         try {
             $pass = $Script:EncryptedPassword | Script:Decrypt-EncryptedString
             Write-Verbose "Creating new user"
             if ($PSVersionTable.PSVersion.Major -eq 7) {
                Import-Module Microsoft.PowerShell.LocalAccounts -UseWindowsPowerShell | Out-Null
             }
             $user = New-LocalUser -Name $username -Password $pass
             if ($null -eq $user) {
                return @{ ErrorType = "EntityNotCreatedError"; Message = "Could not create local user."; Code = "0x800708B0"}
             }
             return $user | Script:Format-LocalUser
         } catch {
             return @{ ErrorType = "EntityAlreadyExistsError"; Message = $_.Exception.Message; Code = $_.Exception.HResult }
             throw
         }
     }
 
     $user = Get-SingleUser
     if ($null -Eq $user) {
         $identifier = $Script:PropertyValues[0]
         return @{ ErrorType = "EntityDoesNotExistError"; Message = "User $identifier was not found"; Code = "notfound-get" }
     }
     $username = $user.name
     Switch ($Script:Action) {
         'Show' {
             return $user | Script:Format-LocalUser
         }
         'Rename' {
             $user | Rename-LocalUser -NewName $Script:NewName
             return $user | Script:Format-LocalUser
         }
         'Enable' {
             Enable-LocalUser -InputObject $user | Out-Null
             return $user | Script:Format-LocalUser
         }
         'Disable' {
             Disable-LocalUser -InputObject $user | Out-Null
             return $user | Script:Format-LocalUser
         }
         'SetPassword' {
             $pass = ($Script:EncryptedPassword | Script:Decrypt-EncryptedString)
             $user | Set-LocalUser -Password $pass
             return $user | Script:Format-LocalUser
         }
         'Remove' {
             Remove-LocalUser -InputObject $user
             return $user | Script:Format-LocalUser
         }
     }
     throw "Invalid $Script:Target action $Script:Action"
 }
 
 function RunTarget-LocalGroup {
     [CmdletBinding()] Param(
     )
     # using ADSI because CIM will not return unresolvable SIDs in the group
     $groupName = $Script:GroupName
     $groupSID = $Script:GroupSID
     $memberSIDs = $Script:MemberSID
     if ($groupSID) {
         $securityGroup = New-Object System.Security.Principal.SecurityIdentifier($Script:GroupSID)
         try {
             $groupName = $securityGroup.Translate([System.Security.Principal.NTAccount]).Value -replace '.+\\'
         } catch {
             $errorCode = "0x{0:X}" -f ($_.Exception.InnerException.HResult)
             if ($errorCode -In @("0x80131501", "0x800708B0")) {
                 # TODO: 0x80131501 is a generic .NET error and may not be specific enough
                 return @{ ErrorType = "GroupDoesNotExistError"; Message = "Group $groupSID was not found."; Code = $errorCode }
             }
             throw
         }
     }
     $group = [ADSI] "WinNT://localhost/$groupName,group"
 
     if ($Script:Action -Eq 'MemberList') {
         $members = $group.Members()
         $memberList = $members | ForEach-Object { Format-ADSIEntity -member $_ }
         return $memberList
     }
 
     if ($Script:Action -Eq 'MemberAdd') {
         $action = 'Add'
         $resultLog = 'Added'
     } elseif ($Script:Action -Eq 'MemberRemove') {
         $action = 'Remove'
         $resultLog = 'Removed'
     } else {
         throw "Invalid $Script:Target action $Script:Action"
     }
     $result = @{ }
     foreach ($memberSID in $memberSIDs) {
         $memberPath = "WinNT://$memberSID"
         try {
             [void] $group.Invoke($action, $memberPath)
             $result[$memberSID] = $resultLog
         } catch {
             $errorMessage = $_.Exception.InnerException.Message
             $errorCode = "0x{0:X}" -f ($_.Exception.InnerException.HResult)
             if ($errorCode -Eq "0x80070562") {
                 $errorType = "EntityAlreadyInGroupError"
             } elseif ($errorCode -Eq "0x80070561") {
                 $errorType = "EntityNotInGroupError"
             } elseif ($errorCode -Eq "0x80131501") {
                 # TODO: 0x80131501 is a generic .NET error and may not be specific enough
                 $errorType = "GroupDoesNotExistError"
             } elseif ($errorCode -Eq "0x8007056B") {
                 $errorType = "MemberDoesNotExistError"
             } else {
                 throw
             }
             $result[$memberSID] = @{ ErrorType = $errorType; Message = $errorMessage; Code = $errorCode }
         }
         [void] $group.CommitChanges()
     }
     return $result
 }
 
 
 function Decrypt-EncryptedString {
     [CmdletBinding()] Param(
         [Parameter(ValueFromPipeline)] [string]$EncryptedB64String,
         [Parameter()] [switch]$PlainText
     )
     Script:Assert-True $Script:PrivateKeyPath 'This action requires the PrivateKeyPath argument'
     Script:Assert-True $EncryptedB64String 'Missing string to decrypt'
     Write-Debug "Decrypting B64 string $( $EncryptedB64String | ConvertTO-JSON -Compress)"
     $encryptedPasswordBytes = [System.Convert]::FromBase64String($EncryptedB64String)
     $privateKeySecureString = Get-Content -Path $Script:PrivateKeyPath | ConvertTo-SecureString
     $privateKeyXMLString = (New-Object System.Net.NetworkCredential('', $privateKeySecureString)).Password
     $rSA = New-Object System.Security.Cryptography.RSACryptoServiceProvider
     $rSA.FromXmlString($privateKeyXMLString)
     $decryptedBytes = $rSA.Decrypt($encryptedPasswordBytes, $TRUE)
     $decryptedString = [System.Text.Encoding]::UTF8.GetString($decryptedBytes)
     Write-Debug "Decryption finished"
     if ($PlainText) {
         return $decryptedString
     }
     $decryptedSecureString = ConvertTo-SecureString -String $decryptedString -AsPlainText -Force
     return $decryptedSecureString
 }
 
 function Get-UsersList {
     [CmdletBinding()] Param(
         [Parameter()] [string]$Key,
         [Parameter()] [string[]]$Values
     )
     Script:Assert-True $Key 'Missing user query key'
     Script:Assert-True $Values 'Missing user query values'
     try {
         if ($Key -eq 'SID') {
             $objects = Get-LocalUser -SID $Values 
         }
         if ($Key -eq 'Name') {
             $objects = Get-LocalUser -Name $Values
         }
     }
     catch [Microsoft.PowerShell.Commands.UserNotFoundException] {
        Write-Verbose "No users found"
        $objects = @()
     }
 
     Write-Verbose "Objects: $objects"
     return @($objects)
 }
 
 function Format-LocalUser {
     [CmdletBinding()] Param(
         [Parameter(ValueFromPipeline)] $user
     )
     return @{
         SID = @{ Value = $user.SID.Value; }
         ObjectClass = "User"
         Name = $env:computername + "\" + $user.Name
         Enabled = $user.Enabled
     }
 }
 
 function Get-SingleUser {
     [CmdletBinding()] Param(
         [Parameter()] [string]$key = $Script:PropertyKey,
         [Parameter()] [string[]]$values = $Script:PropertyValues
     )
     Script:Assert-True ($values.count -eq 1) 'This action only supports a single property value, expecting a single user'
     Write-Verbose "Key: $key, Values: ${ $values | convertto-json -compress }"
     $users = Get-UsersList -Key $key -Values $values
     Write-Verbose "Users: $users"
     return @($users)[0]
 }
 
 function Get-ADSILocalGroupNameBySID {
     [CmdletBinding()] Param(
         [Parameter()] [string]$SID
     )
     $groupWMIObject = Get-LocalGroup -SID $SID
     return $groupWMIObject.Name
 }
 
 function Format-ADSIEntity {
     [CmdletBinding()]
     param (
         [Parameter(Mandatory = $true)] [ADSI] $member
     )
     $objectClass = $member.Class
     $pathParts = $member.ADSPath -split "/"
     $name = $pathParts[- 1]
     $domain = $pathParts[- 2].toUpper()  # uppercase for backwards-compat
     $SID = (New-Object System.Security.Principal.SecurityIdentifier($member.ObjectSid.Value, 0))
     $SIDTable = @{ Value = $SID.Value; }  # backwards-compat
 
     if ($pathParts.Count -eq 3 -And $domain -eq "" -And $name.startsWith('S-1-')) {
         # this is an unresolvable SID
         # example ADSPath: WinNT://S-1-5-21-123456-123456-123456-123456
         return @{ SID = $SIDTable; ObjectClass = $null; Name = $null; }
     }
 
     # example local ADSPath: WinNT://ComputerDomainName/ComputerName/UserName
     # example domain ADSPath: WinNT://DomainName/UserName
     $result = @{ SID = $SIDTable; ObjectClass = $objectClass; Name = "$domain\$name"; }
     $isLocalDomain = ($domain -Eq $env:COMPUTERNAME)  # case-insensitive comparison
     if ($objectClass -Eq "User") {
         if ($isLocalDomain) {
             # Neither AccountDisabled nor UserFlags seem to be available with the ADSI members() method, so do a
             # separate user lookup to get the correct enabled/ disabled value.
             # TODO: perf: consider optimizing to fetch infos for multiple users at once
             $user = Get-SingleUser -Key SID -Value $SID.Value
             $enabled = $user.Enabled
         } else {
             # Assume domain users are enabled. This is not needed but helps simplify certain test code.
             $enabled = $true
         }
         $result.add('Enabled', $enabled)
     }
     return $result
 }
 
 function RemoveReturningSummary-SpecifiedFilePaths {
     [CmdletBinding()] Param(
         [Parameter()] [string[]]$Paths = @()
     )
     if (-Not $Paths) {
         return [PSCustomObject] @{ Removed = @(); Failed = @() }
     }
     [array] $invalidPaths = $Paths -notmatch '(remediant|secureone)'
     Script:Assert-True (-Not $invalidPaths) "Attempt to remove non-remediant/secureone files: $invalidFilePaths"
     $removed = @()
     $failed = @{}
     foreach ($filePath in $Paths) {
         if (-Not $filePath) {
             continue
         }
         Write-Verbose "Removing file $filePath"
         try {
             # NOTE: if we see a case where deletion fails due to hidden or read-only, we can add -Force to bypass
             Remove-Item -Force $filePath
             $removed += $filePath
         } catch {
             $failed[$filePath] = $_.Exception.Message
         }
     }
     return [PSCustomObject] @{ Removed = $removed; Failed = $failed }
 }
 
 function Find-TempFiles {
     [CmdletBinding()] Param(
         [Parameter()] [string]$Location,
         [Parameter()] [string]$NameFilter
     )
     Script:Assert-True $Location, 'Missing Location'
     Script:Assert-True $NameFilter, 'Missing NameFilter'
     # NOTE: do not recurse
     # -Force - include read-only and hidden files
     # -SilentlyContinue - ignore permission errors
     return Get-ChildItem $Location -File -Force -ErrorAction SilentlyContinue -Filter $NameFilter
 }
 
 
 function Format-Exception {
     [CmdletBinding()] Param(
         [Parameter()] $CategoryInfo=$null,
         [Parameter()] $Exception
     )
     if (-Not $Exception) {
         return $null;
     }
     $output = @{
         RMDResultType = 'Error';
         CategoryInfo = $CategoryInfo;
         ErrorCategory = $Exception.ErrorCategory;
         Target = $Exception.Target;
         ErrorName = $Exception.ErrorName;
         Message = $Exception.Message;
         InnerException = Script:Format-Exception -Exception $Exception.InnerException;
         StackTrace = $Exception.StackTrace;
         HelpLink = $Exception.HelpLink;
         Source = $Exception.Source;
         HResult = if ($Exception.HResult) { "0x{0:X}" -f ($Exception.HResult) } else { $null }
     }
     if (-Not $Script:NoMeta) {
         $output.add('Meta', $Script:Meta)
     }
     return $output
 }
 
 function Remove-EmptyValues {
     [CmdletBinding()] Param(
         [Parameter(ValueFromPipeline)] [hashtable]$Table
     )
     ($Table.GetEnumerator() | Where-Object { -not $_.Value }) | ForEach-Object { $Table.Remove($_.Name) }
     return $Table
 }
 
 function Assert-True {
     [CmdletBinding()]
     Param(
         [Parameter(Position = 0)] [object]$Condition,
         [Parameter(Position = 1)] [string]$Message = 'Assertion failed'
     )
     if (-not $Condition) {
         throw $Message
     }
 }
 
 function Decode-Base64String {
     [CmdletBinding()] Param(
         [Parameter(ValueFromPipeline)] [string]$B64String
     )
     if (-not $B64String) {
         return ''
     }
     Write-Debug "Decoding B64 string $B64String"
     $ValueBytes = [System.Convert]::FromBase64String($B64String)
     $DecodedValue = [System.Text.Encoding]::UTF8.GetString($ValueBytes)
     Write-Debug "Decoded B64 string $B64String to: $DecodedValue"
     return $DecodedValue
 }
 function Encode-Base64String {
     [CmdletBinding()] Param(
         [Parameter(ValueFromPipeline)] [string]$String
     )
     if (-not $String) {
         return ''
     }
     Write-Verbose "Encoding B64 string $String"
     $Bytes = [System.Text.Encoding]::Unicode.GetBytes($String)
     $EncodedValue = [Convert]::ToBase64String($Bytes)
     Write-Verbose "Encoded B64 string $B64String to: $EncodedValue"
     return $EncodedValue
 }
 
 Script:Run-Script