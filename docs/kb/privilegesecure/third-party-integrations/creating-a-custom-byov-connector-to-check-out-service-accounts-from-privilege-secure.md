---
description: >-
  Shows how to create a custom BYOV connector so Netwrix Privilege Secure can
  check out service accounts with the "Internal" managed type, and includes an
  optional checkin script to rotate the password during checkin.
keywords:
  - BYOV
  - BYOV connector
  - Netwrix Privilege Secure
  - service account
  - checkout
  - checkin
  - password rotation
  - Vault connector
products:
  - privilege-secure-access-management
sidebar_label: Creating a Custom BYOV Connector to Check out Serv
tags: []
title: "Creating a Custom BYOV Connector to Check out Service Accounts from Privilege Secure"
knowledge_article_id: kA04u00000111AxCAI
---

# Creating a Custom BYOV Connector to Check out Service Accounts from Privilege Secure

## Summary

The standard BYOV connector for checking out credentials from Netwrix Privilege Secure will, by design, not allow service accounts with the "Internal" managed type to be checked out. If this functionality is business-critical, this article provides a means for "Internal" type service accounts to be checked out using a BYOV connector.

**Note:** As service accounts are by nature critical, we advise that the day-to-day use of these accounts for Netwrix Privilege Secure sessions be minimized.

**Note:** This connector will not rotate the account's password during the checkout script. Optional instructions are included that will rotate the password during the checkin.

## Before You Begin

Ensure that the account you wish to check out is configured in Netwrix Privilege Secure as a Service Account (**Configuration > Service Account**), and that the correct password is stored.

## Checkout Instructions

1. In the Netwrix Privilege Secure console, navigate to the **Configuration** menu, and the **Integration Connectors** submenu.
2. Click the green plus icon to add a new Activity Connector.
3. Configure it according to the following table:

| Field               | Value                                      |
|---------------------|--------------------------------------------|
| Name                | `<Anything>`                               |
| Description         | `<Anything>`                               |
| Connector Template  | BYOV                                       |
| API URL             | `https://localhost:6500`                   |
| App Id              | `SbPAM`                                    |
| Client Certificate  | `x`                                        |
| Skip Certificate Check | `True`                                  |

4. Copy and paste the following script into the **Checkout Script Block** field.

```powershell
param (
    $Options,
    $Credential
)
$Token = $Options.RestApiToken
$Uri = $Options.RestApiUri
####
## Allow service accounts to be checked out
## NOTE This is not recommended. 
##      Service accounts should not be used for interactive logins
####
$InsecureAllowServiceAccounts = $false

function Get-CredentialMatch {
    [CmdletBinding()]
    param (
        $CredentialAccount,
        $CredentialResource,
        $Token,
        $Uri,
        $CredentialType = 1
    )
    $credentials = @()
    $skip = 0
    $take = 100
    $result = $null
    if ($null -ne $CredentialAccount) {        
        $FilterText = "$($CredentialAccount)"
        $Message = "FILTERTEXT: $FilterText"
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            
        do {            
            $Params = @{
                RestApiToken = $Token;                
                Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/Search?skip=$skip&take=$take&filterText=$FilterText&credentialType=$CredentialType";
            }            
            $result = Invoke-SbPAMRest @Params          
            <#
            $Message = (ConvertTo-Json $result)
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            #>
            $result.Data | ForEach-Object { $credentials += $_ }
            $skip += $take        
        } until ($credentials.Count -ge $result.RecordsTotal)    
        $credentials | Foreach-Object { 
            $Message = "FOUND: $($_.Id) UserName: '$($_.UserName)' Resource: '$($_.Domain)'" 
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        }
        
        $Message = "Find UserName -eq '$CredentialAccount' -and Resource -eq '$CredentialResource'"
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

        if ($null -ne $CredentialResource) {
            $result = $credentials | Where-Object { $_.Username -eq $CredentialAccount -and $_.Domain -eq $CredentialResource }
        }
        else {
            $result = $credentials | Where-Object { $_.Username -eq $CredentialAccount }
        }
        
        if ($null -eq $result) {
            # Try RESOURCE\USERNAME
            $Test = "$CredentialResource\$CredentialAccount"
            $Message = "Find UserName -eq '$Test'"

            $result = $credentials | Where-Object -Property UserName -eq $Test
        }

        if ($null -eq $result) {
            $Test = "$($Options.TargetHost.DnsHostName)\$CredentialAccount"
            
            if ($null -ne $Options.TargetHost.NetBiosName) {
                $Test = "$($Options.TargetHost.NetBiosName)\$CredentialAccount"
            }
            $Message = "Find UserName -eq $Test"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            $result = $credentials | Where-Object -Property UserName -eq $Test
        }
        else {
            $Message = "FOUND Username: '$($result.Username)' Resource: '$($result.Domain)'"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        }
    }
    if ($result.Count -gt 1) {
        $Message = "Multiple matches found for Username: '$CredentialAccount' Resource: '$CredentialResource'"
        Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"
        return $null
    }
    return $result
}

### If this is an activity then use the LoginAccountName
$CredentialAccount = $null
$CredentialResource = $null
if ($null -ne $Options.ActivitySession) {
    $CredentialAccount = $Options.ActivitySession.LoginAccountName
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

### This is a service account, so the info should be in the Credential    
$IsServiceAccount = $false
if ($null -eq $CredentialAccount) {        
    $CredentialAccount = $Credential.Username
    $IsServiceAccount = $true
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

if ($CredentialAccount -match ".*@.*") {
    $Parts = $CredentialAccount.Split("@")
    $CredentialAccount = $Parts[0]
    $CredentialResource = $Parts[1]
}
elseif ($CredentialAccount -match ".*\.*") {
    $Parts = $CredentialAccount.Split("")
    $CredentialAccount = $Parts[1]
    $CredentialResource = $Parts[0]
}
else {
    if ($IsServiceAccount) {
        $CredentialResource = $Credential.Domain
    }
    else {
        $CredentialResource = $Options.TargetHost.DnsHostName
    }
}
$result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri -CredentialType 1
if ($null -eq $result) {

    if ($InsecureAllowServiceAccounts)
    {
        Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (UserAccount)"
        $result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri -CredentialType 0
        if ($null -eq $result) {
            Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (ServiceAccount)"
        }
    }
    else
    {
        Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (UserAccount)"
    }
}

if ($null -eq $result) {
    Add-SbPAMActionLog -Type Error -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource failed"
    return $null
}


if ($null -ne $result) {
    $Params = @{
        RestApiToken = $Token;                
        Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/$($result.CredentialId)?showPassword=true";    
    }

    $result = Invoke-SbPAMRest @Params
    # To support domain users in secret vaults
    if ($result.Username -contains "") {
        $Parts = $result.Username.split("")
        $Credential.Username = $Parts[1]
        $Credential.Domain = $Parts[0]
    }
    else {
        $Credential.Username = $result.Username
        $Credential.Domain = $result.Domain
    }
    $Credential.Password = $result.Password
    Add-SbPAMActionLog -Type Info -Message "Returning Username: '$($Credential.Username)' CredentialResource: '$($Credential.Domain)'"

    return $Credential
}
else {
    $Message = "Unable to find credential for $CredentialAccount $CredentialResource"
    Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"
    return $null
}
```

5. Edit line 12 of the **Checkout Script Block** such that the `InsecureAllowServiceAccounts` variable is `true`:

```powershell
$InsecureAllowServiceAccounts = $true
```

## Checkin Instructions (Optional - for Password Rotation)

1. Copy and paste the following script into the **Checkin Script Block** field:

```powershell
param (
    $Options,
    $Credential
)
$Token = $Options.RestApiToken
$Uri = $Options.RestApiUri
####
## Allow service accounts to be checked out
## NOTE This is not recommended. 
##      Service accounts should not be used for interactive logins
####
$InsecureAllowServiceAccounts = $false

function Get-CredentialMatch {
    [CmdletBinding()]
    param (
        $CredentialAccount,
        $CredentialResource,
        $Token,
        $Uri,
        $CredentialType = 1
    )
    $credentials = @()
    $skip = 0
    $take = 100
    $result = $null
    if ($null -ne $CredentialAccount) {        
        $FilterText = "$($CredentialAccount)"
        $Message = "FILTERTEXT: $FilterText"
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            
        do {            
            $Params = @{
                RestApiToken = $Token;                
                Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/Search?skip=$skip&take=$take&filterText=$FilterText&credentialType=$CredentialType";
            }            
            $result = Invoke-SbPAMRest @Params          
            <#
            $Message = (ConvertTo-Json $result)
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            #>
            $result.Data | ForEach-Object { $credentials += $_ }
            $skip += $take        
        } until ($credentials.Count -ge $result.RecordsTotal)    
        $credentials | Foreach-Object { 
            $Message = "FOUND: $($_.Id) UserName: '$($_.UserName)' Resource: '$($_.Domain)'" 
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        }
        
        $Message = "Find UserName -eq '$CredentialAccount' -and Resource -eq '$CredentialResource'"
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

        if ($null -ne $CredentialResource) {
            $result = $credentials | Where-Object { $_.Username -eq $CredentialAccount -and $_.Domain -eq $CredentialResource }
        }
        else {
            $result = $credentials | Where-Object { $_.Username -eq $CredentialAccount }
        }
        
        if ($null -eq $result) {
            # Try RESOURCE\USERNAME
            $Test = "$CredentialResource\$CredentialAccount"
            $Message = "Find UserName -eq '$Test'"

            $result = $credentials | Where-Object -Property UserName -eq $Test
        }

        if ($null -eq $result) {
            $Test = "$($Options.TargetHost.DnsHostName)\$CredentialAccount"
            
            if ($null -ne $Options.TargetHost.NetBiosName) {
                $Test = "$($Options.TargetHost.NetBiosName)\$CredentialAccount"
            }
            $Message = "Find UserName -eq $Test"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            $result = $credentials | Where-Object -Property UserName -eq $Test
        }
        else {
            $Message = "FOUND Username: '$($result.Username)' Resource: '$($result.Domain)'"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        }
    }
    if ($result.Count -gt 1) {
        $Message = "Multiple matches found for Username: '$CredentialAccount' Resource: '$CredentialResource'"
        Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"
        return $null
    }
    return $result
}

### If this is an activity then use the LoginAccountName
$CredentialAccount = $null
$CredentialResource = $null
if ($null -ne $Options.ActivitySession) {
    $CredentialAccount = $Options.ActivitySession.LoginAccountName
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

### This is a service account, so the info should be in the Credential    
$IsServiceAccount = $false
if ($null -eq $CredentialAccount) {        
    $CredentialAccount = $Credential.Username
    $IsServiceAccount = $true
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"

if ($CredentialAccount -match ".*@.*") {
    $Parts = $CredentialAccount.Split("@")
    $CredentialAccount = $Parts[0]
    $CredentialResource = $Parts[1]
}
elseif ($CredentialAccount -match ".*\.*") {
    $Parts = $CredentialAccount.Split("")
    $CredentialAccount = $Parts[1]
    $CredentialResource = $Parts[0]
}
else {
    if ($IsServiceAccount) {
        $CredentialResource = $Credential.Domain
    }
    else {
        $CredentialResource = $Options.TargetHost.DnsHostName
    }
}
$result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri -CredentialType 1
if ($null -eq $result) {

    if ($InsecureAllowServiceAccounts)
    {
        Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (UserAccount)"
        $result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri -CredentialType 0
        if ($null -eq $result) {
            Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (ServiceAccount)"
        }
    }
    else
    {
        Add-SbPAMActionLog -Type Info -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource returned null (UserAccount)"
    }
}

if ($null -eq $result) {
    Add-SbPAMActionLog -Type Error -Message "Search using CredentialAccount: $CredentialAccount and CredentialResource: $CredentialResource failed"
    return $null
}

if ($null -ne $result) {
    $Params = @{
        RestApiToken = $Token;                
        Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/$($result.CredentialId)?showPassword=false";    
    }
    $Body = @{Ids = @()}
    
    $Body.Ids += $result.Id;

    ## Rotating password
    Add-SbPAMActionLog -Type Info -Message "Rotating Username: '$($Credential.Username)' CredentialResource: '$($Credential.Domain)'"
    Invoke-SbPAMRest -Uri "$($Uri.TrimEnd("/"))/api/v1/ManagedUser/RotateAccounts" -Method Post -Body (ConvertTo-Json $Body) -RestApiToken $Token -ErrorAction Stop

    return $Credential
}
else {
    $Message = "Unable to find credential for $CredentialAccount $CredentialResource"
    Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"
}
```

2. Edit line 12 of the **Checkin Script Block** such that the `InsecureAllowServiceAccounts` variable is `true`:

```powershell
$InsecureAllowServiceAccounts = $true
```

## Configuring an Activity

1. In the Netwrix Privilege Secure console, navigate to the **Activities** menu.
2. Click the green plus icon to create a new activity.
3. Configure it with the following values:

| Field                  | Value                                            |
|------------------------|--------------------------------------------------|
| Name                   | `<anything>`                                     |
| Description            | `<anything>`                                     |
| Platform               | `None specified`                                 |
| Login Account          | `Vault`                                          |
| Activity Type          | `Interactive`                                    |
| Login Account Template | `<your account>`                                 |
| Vault Connector        | `<the BYOV vault connector configured above>`    |

4. Once the activity is properly configured, click **Save**.

You can now assign this activity to an access policy, and access it by selecting its activity card on the **My Activities** page.
