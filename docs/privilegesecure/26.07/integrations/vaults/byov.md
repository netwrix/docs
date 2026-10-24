---
title: "Bring Your Own Vault connector"
description: "Create a Bring Your Own Vault connector to check out credentials from any vault, or from Privilege Secure itself, with PowerShell scripts."
sidebar_position: 20
---

# Bring Your Own Vault connector

The Bring Your Own Vault (BYOV) connector lets activities use credentials from any vault. You provide PowerShell scripts that check credentials out and in. You can also point the connector at Privilege Secure itself, to use manually managed accounts or accounts in a secret vault in an activity.

For an overview of vault connectors, see [Third-party vault connectors](vault-connectors.md).

## Create a BYOV connector

1. Select **Configuration** > **Integration Connectors**.
2. Click **+** above the list.
3. Enter a name and a description.
4. In **Connector Template**, select **BYOV**.
5. Complete the fields in the following table.
6. Click **Save**.

| Field | Description |
|---|---|
| **API Url**\* | The base address of the API of the vault. |
| **App Id**\* | The application ID for the vault. The default is `SbPAM`. |
| **Client Certificate** | A value that Privilege Secure passes to your scripts as `$Options.Connector.Options.ClientCertificate`. Privilege Secure doesn't use it itself. |
| **Skip Certificate Check** | Under **Advanced**. When selected, Privilege Secure doesn't validate the certificate of the vault. |
| **Checkout Script Block** | Under **Advanced**. Required for a BYOV connector. A PowerShell script that returns the credential. Without it, the connector supplies no credential. |
| **Checkin Script Block** | Under **Advanced**. A PowerShell script that runs when the session ends. If you leave it empty, the built-in check-in deletes the credential record that Privilege Secure created for the session. |

An asterisk (\*) marks a required field.

{/* TODO verify: which credential record the built-in BYOV check-in deletes (DELETE api/v1/Credential/<Id> in BYOV.psm1). Confirm it is the temporary session credential and never the stored account, before readers are told to leave Checkin Script Block empty. */}

{/* TODO verify: the default of API Url on a fresh BYOV form. The lab form showed http://localhost/PasswordVault, which is the CyberArk value, and may be stale. */}

{/* TODO verify: whether Skip Certificate Check is cleared by default on the BYOV form. */}

![The Add Integration Connector form with the BYOV template selected and the Advanced section expanded, showing Skip Certificate Check and the Checkout Script Block editor.](/images/privilegesecure/26.07/integrations/integration-connector-byov-advanced.webp)

### Script parameters

Both scripts receive the following parameters:

- `$Options` holds the session details. In the sample script, `$Options.RestApiToken` and `$Options.RestApiUri` hold a token and the address of the Privilege Secure API. `$Options.ActivitySession.LoginAccountName` holds the login account of the activity.
- `$Credential` holds the credential to fill. The check-out script sets `Username`, `Domain`, and `Password`, and returns the object.

{/* TODO verify: the full list of properties of $Options and the helper commands available to the scripts, such as Invoke-SbPAMRest and Add-SbPAMActionLog. The 26.03 page shows these two commands only in a sample. */}

## Use Privilege Secure as the vault

You can use Privilege Secure as the BYOV vault. This setup suits one account that several resources share, when the account must still go through Privilege Secure.

The account can be a manually managed account, or an account that a secret vault holds. Privilege Secure supplies its stored password for the activity. This setup skips the default **Enable Account** and **Disable Account** actions before and after the session.

### Prerequisites

- The account is managed by Privilege Secure, or it's in a secret vault in Privilege Secure. See [Secret vaults](../../resources/secret-vaults.md).
- For a managed account, rotate the password at least once after you start managing the account. Until then, Privilege Secure has no stored password for the account.

### Create the connector

1. Create a BYOV connector as described earlier on this page.
2. Enter these values:

   | Field | Value |
   |---|---|
   | **Connector Template** | BYOV |
   | **API Url**\* | `https://localhost:6500` |
   | **App Id**\* | `SbPAM` |
   | **Client Certificate** | Empty |
   | **Skip Certificate Check** | Leave as the default |

   :::note
   This script doesn't use **API Url** or **Skip Certificate Check**. The script reads the Privilege Secure address from the service's REST URL setting, and its own requests skip the certificate check. The form still requires an **API Url** value.
   :::

   {/* TODO verify: Product to confirm that BYOV ignores API Url and Skip Certificate Check (source: BYOV.psm1, SbPAM.psm1 RestApiUri, SbPAMFuncs.psm1 Invoke-SbPAMRest). */}

3. In **Checkout Script Block**, paste the following script. Leave **Checkin Script Block** empty. If you leave it empty, the built-in check-in deletes the credential record that Privilege Secure created for the session.

   ```powershell
   param (
       $Options,
       $Credential
   )
   $Token = $Options.RestApiToken
   $Uri = $Options.RestApiUri

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
                   Uri = "$($Uri.TrimEnd("/"))/api/v1/Credential/Search?skip=$skip&take=$take&filterText=$FilterText&credentialType=1";
               }
               $result = Invoke-SbPAMRest @Params
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
           Uri = "$($Uri.TrimEnd("/"))/api/v1/Credential/$($result[0].CredentialId)?showPassword=true";
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

4. Click **Save**.

{/* TODO verify: that this script, carried over from the 26.03 documentation, works unchanged on 26.07.3, and ask Engineering whether the `-match ".*\\.*"` branch (which matches every name and is then overwritten) should be removed. */}

### Manage the account manually

1. Select **Dashboard** in the left navigation, then select the **Credentials** tab.
2. Find the account and select its checkbox. Ensure the account isn't already managed.
3. Click **Manage** above the list, then select **Manual**.
4. Set the password of the account so that it matches the password on the resource.

For the steps and the current location of **Set Password**, see [Manage credentials](../../admin/credentials/manage-credentials.md).

{/* TODO verify: the location of Set Password for a manually managed account in 26.07.3 and the exact steps. The 26.03 page used a wrench icon on the account row. */}

### Create the activity

1. Create an activity. See [Create an activity](../../configuration/activities/create-activity.md).
2. Set **Login Account** to **Vault**.
3. Set **Activity Type** to **Interactive**.
4. In **Vault Connector**, select the BYOV connector that you created.
5. Ensure the **Login Account Template** uses the format `DOMAIN\samAccountName`, for example `EXAMPLE\jsmith`.
6. Click **Save**.

### Create the access policy

1. Create an access policy of type **Resource Based**. See [Create a resource-based access policy](../../configuration/access-policies/resource-based-policy.md).
2. Select a connection profile. **Default** is enough for most setups.
3. Add the users, the activity, and the resources.
4. Click **Save**.

Users in the policy can now start the activity on the resources in the policy with the manually managed account.

## Record SSH to a device that accepts only a local account

Some appliances accept SSH only with a local account, for example the `root` account on a hypervisor host. Privilege Secure can't manage such an account, but you can store it in a secret vault and use the BYOV connector to supply it to a recorded session.

:::note
This procedure is a workaround that Netwrix staff have shared on the Community, not a built-in feature. The account password isn't rotated automatically. Change it manually, or write rotation logic in the **Checkin Script Block**.
:::

1. Add the device as a Linux resource by its IP address. Don't configure service account management for it. {/* TODO verify: the steps to add the resource. */}
2. Store the local account in a secret vault. See [Secret vaults](../../resources/secret-vaults.md).
3. Create a BYOV connector that points to Privilege Secure, as described in [Use Privilege Secure as the vault](#use-privilege-secure-as-the-vault).
4. Create an activity with **Login Account** set to **Vault** and the BYOV connector selected.
5. Add a pre-session script that removes the domain or resource prefix from the user name. {/* TODO verify: the script and the action type for the prefix removal. */}
6. Create an access policy that grants the activity and records the session.

If the resource doesn't appear in the access policy, check the following:

- The resource has a service account. A dummy service account is enough.
- The resource has a platform selected.

{/* TODO verify: the end-to-end procedure in the lab, including whether the resource needs a service account and why. The Community report says the resource appeared in the policy only after a dummy service account was added. */}

{/* TODO add an example: a user name before and after the prefix removal. */}
