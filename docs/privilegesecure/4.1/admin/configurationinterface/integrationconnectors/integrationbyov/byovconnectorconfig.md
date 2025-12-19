---
title: "Bring Your Own Vault (BYOV) Connector Configuration"
description: "Bring Your Own Vault (BYOV) Connector Configuration"
sidebar_position: 20
---

# Bring Your Own Vault (BYOV) Connector Configuration

This topic walks through the steps necessary to configure Netwrix Privilege Secure as a BYOV
Integration Connector that can be used to perform activities as a specific user account. This can be
done with accounts managed by Privilege Secure, or with accounts stored inside of a Secret Vault
within Privilege Secure.

Use this workflow to bypass the default "Enable Account" and "Disable Account" pre-session and
post-session actions. In the case of a Secret Vault credential, when it is necessary to use an
unmanaged account for an activity.

## Set Up an Integration Connector

Begin by setting up an Integration Connector for using Netwrix Privilege Secure as a BYOV Connector.
Ensure that the account you wish to use for your activity is managed by Privilege Secure or is
contained within a Secret Vault resource in Privilege Secure.

:::note
For managed accounts, ensure that the account has been rotated at least once since being
managed. Otherwise, there will be no vaulted password in the Netwrix Privilege Secure database.
:::


### Configure the Activity Connector

Follow the steps to configure an Activity Connector.

**Step 1 –** In the Netwrix Privilege Secure console, navigate to the **Configuration** menu, and
the **Integration Connectors** submenu.

**Step 2 –** Click the **Plus** to add a new Activity Connector.

**Step 3 –** Configure the following activity connector fields:

- Connector Name – Enter a name to uniquely identify the connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connector Template – A selection of templates for connector configurations. Select **BYOV** from
  the drop-down list.
- API Url – The base URL for the API being used for the vault integration. Ex:
  http://localhost:6500.
- App ID – The application ID for the vault. Enter **SbPAM**.
- Client Certificate – The base 64 string from the certificate file being used to authenticate to
  the vault. Leave blank.
- Advanced – Use this section to override the default behavior of the connector by providing a
  custom PowerShell script. Click on the **Advanced** section to edit the Checkout Script Block and
  the Checkin Script Block or Skip the Certificate Check.
- Skip Certificate Check – Select the checkbox

![BYOV Connector for Privilege Secure](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovconnectornps.webp)

**Step 4 –** Copy and paste the following script into the "Checkout Script Block" field. (The
"Checkin Script Block" field may be left blank.)


**Checkout Script Block**

```
param (
    $Options,
    $Credential
)
$Token = $Options.RestApiToken
$Uri = $Options.RestApiUri
<# 
$Message = (ConvertTo-Json $Options -Depth 12)
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
#>
function Get-CredentialMatch {
    [CmdletBinding()]
    param (
        $CredentialAccount,
        $CredentialResource,
        $Token,
        $Uri
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
                Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/Search?skip=$skip&take=$take&filterText=$FilterText&credentialType=1";
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
            $Message = "FOUND: $($_.Id) UserName: $($_.UserName)" 
            Write-Host "$(ConvertTo-Json $_)"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        }        
        $Message = "Find UserName -eq $CredentialAccount"
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
        $result = $credentials | Where-Object -Property UserName -eq $CredentialAccount
        if ($null -eq $result) {
            $Test = "$($Options.TargetHost.DnsHostName)\$CredentialAccount"            
            if ($null -ne $Options.TargetHost.NetBiosName) {
                $Test = "$($Options.TargetHost.NetBiosName)\$CredentialAccount"
            }
            $Message = "Find UserName -eq $Test"
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
            $result = $credentials | Where-Object -Property UserName -eq $Test
        }
        if ($null -eq $result) {
            $result = $credentials | Where-Object { $_.Username -match $CredentialAccount -and $_.Domain -eq $CredentialResource }
        }
    }
    return $result
}
### If this is an activity then use the LoginAccountName
$TargetAccount = $Options.ActivitySession.LoginAccountName
$CredentialAccount = $null
$CredentialResource = $null
if ($null -ne $Options.ActivitySession) {
    $CredentialAccount = $Options.ActivitySession.LoginAccountName    
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
### This is a service account, so the info should be in the Credential    
if ($null -eq $CredentialAccount) {        
    $CredentialAccount = $Credential.Username
}
$Message = "CredentialAccount: $CredentialAccount"
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"
$result = Get-CredentialMatch -CredentialAccount $CredentialAccount -Token $Token -Uri $Uri
if ($null -eq $result) {
    if ($CredentialAccount -match ".*@.*") {
        $Parts = $CredentialAccount.Split("@")
        $CredentialAccount = $Parts[0]
        $CredentialResource = $Parts[1]
    }
    $result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri
}
if ($null -ne $result) {
    $Params = @{
        RestApiToken = $Token;                
        Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/$($result[0].CredentialId)?showPassword=true";    
    }    
    $result = Invoke-SbPAMRest @Params
    # To support domain users in secret vaults
    if ($result.Username -match ".*\.*") {
        $Parts = $result.Username.split("\")
        $Credential.Username = $Parts[1]
        $Credential.Domain = $Parts[0]
        $Credential.Password = $result.Password
    }
    $Credential.Username = $result.Username
    $Credential.Domain = $result.Domain
    $Credential.Password = $result.Password
    return $Credential
}
else {
    $Message = "Unable to find credential for $CredentialAccount $CredentialResource"
    Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"
}
```

**Step 5 –** Click **Save** to create the BYOV connector.

See the
[Bring Your Own Vault (BYOV) Integration](/docs/privilegesecure/4.1/admin/configurationinterface/integrationconnectors/integrationbyov/integrationbyov.md)
topic for additional information on configuring a BYOV connector.

### Create a User

Once the integration connector has been configured, create a manually-managed user.

Follow the steps to create a manually-managed user.

**Step 1 –** Navigate to **Dashboard** > **Credentials** tab.

![Select a User to manage account](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovmanageuser.webp)

**Step 2 –** Search or scroll to find the user you wish to manage. Once identified, check the box
next to the account name.

![Select Manual manage account](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovmanualmanageaccount.webp)

**Step 3 –** Click on the **Manage** button that becomes available above the list, and select
**Manual**.

:::note
Ensure the user is not already managed or added into Privilege Secure.
:::


See the
[Credentials Dashboard](/docs/privilegesecure/4.1/admin/dashboard/credentials.md)
topic for additional information on creating a managed account.

### Set the Account Password

Once the account has been manually managed, the password must be set for the account. The following
icons should be visible: Wrench (Set Password), Clipboard (Copy Password to Clipboard), and
Information (View Password).

Follow the steps to set an account password.

**Step 1 –** Navigate to **Dashboard** > **Credentials** tab and locate the manually managed
account.

![Managed User Wrench Icon](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovmanageuserwrench.webp)

**Step 2 –** Click on the **Wrench** icon to set the password.

![Set password for the credential window](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovsetpassword.webp)

**Step 3 –** Enter a password to match the AD password, then click **Save**.

:::note
For versions before Privilege Secure 4.1, a support ticket will be needed as the Set
Password feature is not available.
:::


See the
[Manage Internal Service Accounts](/docs/privilegesecure/4.1/admin/interface/credentials/manageinternalserviceaccount.md)
topic for additional information on manually managing an account.

### Create an Activity

Once the password has been set for the account, create an activity for the BYOV connector.

Follow the steps to create an activity.

**Step 1 –** Navigate to **Policy** tab > **Activities**.

**Step 2 –** Click the blue plus icon and create a new Activity using the BYOV Connector.

**Step 3 –** Configure the activity with the following values:

- Name — Displays the name of the activity
- Description — Description of the policy
- Platform — Displays the type of platform, which defines the resource
- Login Account — Displays the account used to log onto the resource. Select **Vault** from the drop
  down menu.
- Activity Type — Controls the type of actions for the activity. Select **Interactive** from the
  drop down menu.
- Vault Connector — Displays a list of previously configured vault connectors. Select the vault
  connector created from the steps above.

:::note
You may use accounts stored in a Vault and added as a resource once the integration is
created. Also, you may apply domain or other local accounts managed by Netwrix Privilege Secure, but
the password must be rotated once prior to use with an activity.
:::


![BYOV create an Activity](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovconnectoractivity.webp)

**Step 4 –** Click Save to create the Activity.

:::note
Ensure the Login Account Template uses the format DOMAIN\samAccountName (e.g.,
NWXTECH\dgrayson).
:::


See the
[Add Activity](/docs/privilegesecure/4.1/admin/interface/activities/activity/activity.md)
topic for additional information on creating an Activity.

### Configure a New Policy

Once an Activity has been created, configure a new Policy.

Follow the steps to create a Policy.

**Step 1 –** Navigate to the **Policy** tab > **Access Policy**.

![Create a new policy for the BYOV Connector](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovconnectorpolicy.webp)

**Step 2 –** Click the **Plus** icon and create a new Policy. See the
[Add Access Policy](/docs/privilegesecure/4.1/admin/interface/accesspolicy/addaccesspolicy.md)
topic for additional information.

- Set the Type as **Resource Based** and select a Connection Profile, with **Default** being
  sufficient for most setups.

**Step 3 –** Click **Save** to create the Access Policy.

**Step 4 –** Once the Access Policy is created, add the following:

- Users to the Policy. See the
  [Users Tab for Resource Based Access Policies](/docs/privilegesecure/4.1/admin/interface/accesspolicy/resourcebasedpolicytabs/users.md)
  topic for additional information.
- Activity created for the BYOV Connector. See the
  [Activities Tab for Resource Based Access Policies](/docs/privilegesecure/4.1/admin/interface/accesspolicy/resourcebasedpolicytabs/activities/activities.md)
  topic for additional information.
- Associated resources intended for this Activity. See the
  [Resources Tab for Resource Based Access Policies](/docs/privilegesecure/4.1/admin/interface/accesspolicy/resourcebasedpolicytabs/resources/resources.md)
  topic for additional information.

See the
[Add Access Policy](/docs/privilegesecure/4.1/admin/interface/accesspolicy/addaccesspolicy.md)
topic for additional information on creating an Access Policy.

After completing these steps, you can use the specified manually-managed user on the resources
outlined in the policy. This setup is ideal for scenarios where a single account is used across
multiple resources but needs to be managed through Privilege Secure for enhanced security and
management.

![My Activities BYOV Connector](/images/privilegesecure/4.1/accessmanagement/admin/configuration/add/byovconnectormyactivities.webp)

:::tip
Remember, Always verify configurations and permissions, especially when integrating with systems
like AD and using specific user accounts for critical operations.
:::
