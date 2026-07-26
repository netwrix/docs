<#
.SYNOPSIS
    Provisions the Entra app registration used by the PingCastle Enterprise Entra scanner
    and grants every permission and role assignment the scanner needs.

.DESCRIPTION
    Creates (or reuses) an Entra app registration and service principal, configures
    certificate or client-secret authentication, grants the required Microsoft Graph
    application permissions, the Exchange Online RBAC role, the SharePoint Online
    application permission, the Microsoft Teams directory role, and the Azure RBAC
    roles the scanner needs.

    Requires the Microsoft.Graph, ExchangeOnlineManagement, and Az.Resources PowerShell
    modules, and an account with sufficient privileges to grant admin consent and
    directory role assignments.

.PARAMETER DisplayName
    Display name of the app registration to create or reuse.

.PARAMETER AuthMethod
    Authentication method for the app registration: Certificate (default) or ClientSecret.
    SharePoint Online risk checks require certificate authentication; the SharePoint
    grant step warns and skips if ClientSecret is selected.

.PARAMETER CertificatePath
    Path to an existing certificate (.pfx or .cer) to use for Certificate auth. If omitted,
    the script generates a self-signed certificate.

.PARAMETER UseExisting
    If an app registration with the given DisplayName already exists, reuse it without
    prompting. Use for non-interactive runs.

.PARAMETER InstallModules
    Install any missing required PowerShell modules (Microsoft.Graph.Applications,
    ExchangeOnlineManagement, Az.Resources) without prompting. Use for non-interactive runs.

.PARAMETER SubscriptionId
    Azure subscription ID to assign the Reader and Key Vault Reader RBAC roles at.

.EXAMPLE
    .\Setup-EntraScannerApp.ps1 -DisplayName "PingCastle-EntraScanner" -AuthMethod Certificate

.EXAMPLE
    .\Setup-EntraScannerApp.ps1 -DisplayName "PingCastle-EntraScanner" -AuthMethod ClientSecret -SubscriptionId "00000000-0000-0000-0000-000000000000" -UseExisting
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$DisplayName,

    [Parameter(Mandatory = $false)]
    [ValidateSet('Certificate', 'ClientSecret')]
    [string]$AuthMethod = 'Certificate',

    [Parameter(Mandatory = $false)]
    [string]$CertificatePath,

    [Parameter(Mandatory = $false)]
    [switch]$UseExisting,

    [Parameter(Mandatory = $false)]
    [switch]$InstallModules,

    [Parameter(Mandatory = $false)]
    [string]$SubscriptionId
)

$ErrorActionPreference = 'Stop'

$GraphAppId = '00000003-0000-0000-c000-000000000000'
$ExchangeAppId = '00000002-0000-0ff1-ce00-000000000000'
$SharePointAppId = '00000003-0000-0ff1-ce00-000000000000'

$GraphPermissions = @(
    'Application.Read.All',
    'AuditLog.Read.All',
    'Directory.Read.All',
    'Domain.Read.All',
    'IdentityRiskyUser.Read.All',
    'Policy.Read.All',
    'RoleManagement.Read.Directory',
    'SharePointTenantSettings.Read.All',
    'User.Read.All',
    'UserAuthenticationMethod.Read.All'
)

function Ensure-Module {
    param([string]$Name)

    if (Get-Module -ListAvailable -Name $Name) {
        Import-Module $Name
        return
    }

    if (-not $InstallModules) {
        $answer = Read-Host "Required module '$Name' isn't installed. Install it now? (y/n)"
    }

    if ($InstallModules -or $answer -match '^[Yy]') {
        Install-Module -Name $Name -Scope CurrentUser -Force -AllowClobber
        Import-Module $Name
    }
    else {
        throw "Module '$Name' is required and wasn't installed. Exiting."
    }
}

foreach ($module in @('Microsoft.Graph.Applications', 'ExchangeOnlineManagement', 'Az.Resources')) {
    Ensure-Module -Name $module
}

Connect-MgGraph -Scopes 'Application.ReadWrite.All', 'AppRoleAssignment.ReadWrite.All', 'RoleManagement.ReadWrite.Directory'

# --- App registration ---

$existingApp = Get-MgApplication -Filter "displayName eq '$DisplayName'"
$reuseExisting = $false

if ($existingApp) {
    if ($UseExisting) {
        $reuseExisting = $true
    }
    else {
        $answer = Read-Host "An app registration named '$DisplayName' already exists. Reuse it? (y/n)"
        $reuseExisting = $answer -match '^[Yy]'
    }
}

if ($reuseExisting) {
    $app = $existingApp
}
else {
    $app = New-MgApplication -DisplayName $DisplayName
}

$sp = Get-MgServicePrincipal -Filter "appId eq '$($app.AppId)'"
if (-not $sp) {
    $sp = New-MgServicePrincipal -AppId $app.AppId
}

# --- Authentication ---

$certThumbprint = $null
$clientSecret = $null

if ($AuthMethod -eq 'Certificate') {
    if ($CertificatePath) {
        $cert = Get-PfxCertificate -FilePath $CertificatePath
    }
    else {
        $cert = New-SelfSignedCertificate -Subject "CN=$DisplayName" -CertStoreLocation 'Cert:\CurrentUser\My' -KeySpec KeyExchange
    }

    $certThumbprint = $cert.Thumbprint
    $keyCredential = @{
        Type  = 'AsymmetricX509Cert'
        Usage = 'Verify'
        Key   = $cert.RawData
    }
    Update-MgApplication -ApplicationId $app.Id -KeyCredentials @($keyCredential)
}
else {
    $secret = Add-MgApplicationPassword -ApplicationId $app.Id -PasswordCredential @{ DisplayName = "$DisplayName-secret" }
    $clientSecret = $secret.SecretText
    Write-Warning 'ClientSecret authentication is selected. SharePoint Online risk checks require certificate authentication and are skipped for this app.'
}

# --- Microsoft Graph application permissions ---

$graphSp = Get-MgServicePrincipal -Filter "appId eq '$GraphAppId'"
foreach ($permission in $GraphPermissions) {
    $appRole = $graphSp.AppRoles | Where-Object Value -eq $permission
    New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $sp.Id -PrincipalId $sp.Id -ResourceId $graphSp.Id -AppRoleId $appRole.Id | Out-Null
}

# --- Exchange.ManageAsApp and Exchange Online RBAC role ---

$exchangeSp = Get-MgServicePrincipal -Filter "appId eq '$ExchangeAppId'"
$exchangeAppRole = $exchangeSp.AppRoles | Where-Object Value -eq 'Exchange.ManageAsApp'
New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $sp.Id -PrincipalId $sp.Id -ResourceId $exchangeSp.Id -AppRoleId $exchangeAppRole.Id | Out-Null

Connect-ExchangeOnline
New-ServicePrincipal -AppId $app.AppId -ObjectId $sp.Id -DisplayName $DisplayName
Add-RoleGroupMember -Identity 'View-Only Organization Management' -MemberType ServicePrincipal -Member $sp.Id
Disconnect-ExchangeOnline -Confirm:$false

# --- SharePoint Online Sites.FullControl.All ---

if ($AuthMethod -eq 'Certificate') {
    $sharePointSp = Get-MgServicePrincipal -Filter "appId eq '$SharePointAppId'"
    $sharePointAppRole = $sharePointSp.AppRoles | Where-Object Value -eq 'Sites.FullControl.All'
    New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $sp.Id -PrincipalId $sp.Id -ResourceId $sharePointSp.Id -AppRoleId $sharePointAppRole.Id | Out-Null
}
else {
    Write-Warning 'Skipping SharePoint Online Sites.FullControl.All grant because ClientSecret authentication is selected.'
}

# --- Microsoft Teams: Global Reader directory role ---

$globalReaderRole = Get-MgDirectoryRole -Filter "displayName eq 'Global Reader'"
New-MgDirectoryRoleMemberByRef -DirectoryRoleId $globalReaderRole.Id -BodyParameter @{ '@odata.id' = "https://graph.microsoft.com/v1.0/directoryObjects/$($sp.Id)" }

# --- Azure RBAC: Reader and Key Vault Reader ---

if (-not $SubscriptionId) {
    $SubscriptionId = Read-Host 'Enter the Azure subscription ID to assign Reader and Key Vault Reader roles at'
}

New-AzRoleAssignment -ApplicationId $app.AppId -RoleDefinitionName 'Reader' -Scope "/subscriptions/$SubscriptionId"
New-AzRoleAssignment -ApplicationId $app.AppId -RoleDefinitionName 'Key Vault Reader' -Scope "/subscriptions/$SubscriptionId"

# --- Summary ---

Write-Host ''
Write-Host '=== PingCastle Entra scanner app setup complete ==='
Write-Host "AppId: $($app.AppId)"
Write-Host "Object Id: $($app.Id)"
Write-Host "Service Principal Id: $($sp.Id)"
Write-Host "Auth method: $AuthMethod"
if ($certThumbprint) {
    Write-Host "Certificate thumbprint: $certThumbprint"
}
if ($clientSecret) {
    Write-Host "Client secret (record this now, it isn't shown again): $clientSecret"
}
Write-Host "Microsoft Graph permissions granted: $($GraphPermissions -join ', ')"
Write-Host 'Exchange Online: Exchange.ManageAsApp granted; added to View-Only Organization Management'
if ($AuthMethod -eq 'Certificate') {
    Write-Host 'SharePoint Online: Sites.FullControl.All granted'
}
Write-Host 'Microsoft Teams: Global Reader directory role assigned'
Write-Host "Azure RBAC: Reader and Key Vault Reader assigned at /subscriptions/$SubscriptionId"
