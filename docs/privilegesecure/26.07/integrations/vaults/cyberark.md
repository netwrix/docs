---
title: "CyberArk integration"
description: "Connect Netwrix Privilege Secure to the CyberArk Central Credential Provider so activities and service accounts check out credentials from a CyberArk safe."
sidebar_position: 30
---

# CyberArk integration

The CyberArk connector lets Netwrix Privilege Secure check out account passwords from a CyberArk vault. Use it for the following:

- **Service accounts**, such as the account that synchronizes Active Directory.
- **Activities** that use the **Vault** login account to sign in to a resource.

The connector calls the CyberArk Central Credential Provider (CCP). The CCP is a REST web service that applications use to check out passwords from a CyberArk vault. For how vault connectors work in general, see [Third-party vault connectors](vault-connectors.md).

## Prerequisites

- A CCP web service that Privilege Secure can reach over HTTPS.
- An application ID (App ID) registered in CyberArk for Privilege Secure, with permission to retrieve the accounts you need. See the CyberArk documentation for the CCP.
- The accounts that Privilege Secure checks out, stored in a CyberArk safe.
- If the CCP requires client certificate authentication, a client certificate installed in the **Local Computer** > **Personal** certificate store (`Cert:\LocalMachine\My`) on the server that runs the Privilege Secure Action Service. Note the certificate thumbprint.

## Add a CyberArk connector

1. Select **Configuration** > **Integration Connectors**.
2. Click **+** above the list.
3. Enter a name and an optional description.
4. For **Connector Template**, select **CyberArk**.
5. Complete the fields in the following table.
6. Click **Save**.

| Field | Description |
|---|---|
| **API Url**\* | The base URL of the CCP server, for example `https://<ccp-server>`. Privilege Secure appends `/AIMWebService/api/Accounts` to this value. Enter only the base URL. |
| **App Id**\* | The application ID that Privilege Secure sends with each request. |
| **Client Certificate** | The thumbprint of the client certificate for CCP authentication. Leave it empty if the CCP doesn't use client certificates. |
| **Skip Certificate Check** | Under **Advanced**. Skips validation of the CCP server certificate. Leave it cleared in production. |
| **Checkout Script Block** and **Checkin Script Block** | Under **Advanced**. Optional PowerShell that replaces the built-in check-out or check-in behavior. See [Customize check-out and check-in](#customize-check-out-and-check-in). |

:::note
**Client Certificate** takes a certificate thumbprint, not the base64 text of the certificate. If Privilege Secure can't find a certificate with that thumbprint in `Cert:\LocalMachine\My`, the check-out fails.
:::

{/* TODO verify: the default values of API Url and App Id on a fresh CyberArk form. The code seeds `http://localhost/PasswordVault` for API Url and `SbPAM` for App Id, but the 26.07.3 lab form showed the Bring Your Own Vault defaults after a template switch, possibly stale form state. Retest on a fresh form. */}

{/* TODO screenshot: the CyberArk connector form with the fields in the preceding table. */}

**Example:** To use a CCP server at `https://ccp.example.com` with an App ID of `PrivilegeSecure` and no client certificate:

| Field | Value |
|---|---|
| **API Url** | `https://ccp.example.com` |
| **App Id** | `PrivilegeSecure` |
| **Client Certificate** | (empty) |

## How Privilege Secure finds an account

The built-in check-out identifies a CyberArk account by its safe, address, and user name. It queries the CCP with a regular-expression match on those three values.

| Value | Where it comes from |
|---|---|
| User name | For an activity, the login account name of the session. For a service account, the **Username** of the service account. |
| Address | The text before the backslash in the user name, such as `<address>\<username>`. If the name has no backslash, the NetBIOS name of the target host. If there is no target host, the **Domain** of the credential. |
| Safe | The **Safe** value of the service account or activity. |

Privilege Secure doesn't use the **Folder** value in the built-in check-out. Use a custom script block if your CyberArk setup depends on the folder.

Each request includes a reason that contains the Privilege Secure session ID. CyberArk can show the reason in its audit records.

If CyberArk reports that a password change is in progress, Privilege Secure waits 30 seconds and tries again, up to 10 attempts in total.

The built-in check-in does nothing. Privilege Secure doesn't return the password to CyberArk when the session ends.

{/* TODO verify: whether the built-in check-in not returning the account to CyberArk is the intended 26.07 behavior. */}

## Use the connector

### In a service account

1. Select **Configuration** > **Service Accounts**.
2. Create or select a service account. For the full procedure, see [Service accounts](../../configuration/service-accounts/service-accounts.md).
3. For **Vault Connector**, select the CyberArk connector.
4. Enter the **Address**, **Safe**, and **Folder** that hold the account.
5. Click **Save**.

### In an activity

1. Create or edit an activity. See [Create an activity](../../configuration/activities/create-activity.md).
2. For **Login Account**, select **Vault**.
3. For **Vault Connector**, select the CyberArk connector.
4. Enter the safe that holds the account.
5. Click **Save**.

Privilege Secure builds the user name from the activity's login account template. The default for a Vault activity is `%targetdomain%\%samaccountname%`, so the CyberArk account for `EXAMPLE\jsmith` on the host `SERVER01` is stored under the address `EXAMPLE` and the user name `jsmith`.

{/* TODO verify: the exact field labels for the safe on a Vault activity, and whether the activity form shows Address and Folder in 26.07. */}

## Customize check-out and check-in

Use the **Checkout Script Block** and **Checkin Script Block** fields under **Advanced** to replace the built-in behavior with PowerShell. Both blocks receive two arguments, `$Options` and `$Credential`. Netwrix recommends declaring them with a `param()` block:

```powershell
param(
    [Parameter(Mandatory = $true)]
    $Options,

    [Parameter(Mandatory = $true)]
    $Credential
)
```

Each script block must return the `$Credential` object it received, updated with the account details.

### Check-out script

The check-out block sets `$Credential.Username`, `$Credential.Domain`, and `$Credential.Password` to the values of the account that it checked out. The built-in behavior sets them from the `UserName`, `Address`, and `Content` values that the CCP returns.

On check-out, `$Credential` holds a placeholder that Privilege Secure generated for the lookup. The user name, domain, and password aren't the account to check out, so overwrite all three.

### Check-in script

The check-in block receives the existing known password and must return `$Credential` updated with the information of the account that it checked in. In the built-in behavior, the check-in step does nothing.

### The $Options object

`$Options` carries the connector settings and, during a session, the details of the session and the target host. The `ActivitySession` members exist only when the script runs during an activity session.

| Variable | Description | Example |
|---|---|---|
| `$Options.Connector.Name` | The connector name. | `CyberArk` |
| `$Options.Connector.Id` | The connector GUID. | `00000000-0000-0000-0000-000000000001` |
| `$Options.Connector.Options.ApiURL` | The CCP base URL from the connector. The built-in script appends `/AIMWebService/api/Accounts`. | `https://ccp.example.com` |
| `$Options.Connector.Options.Appid` | The App ID from the connector. | `PrivilegeSecure` |
| `$Options.Connector.Options.ClientCertificate` | The client certificate thumbprint from the connector. | `64D25855C84CCDC581799B49362BA13DB66BD795` |
| `$Options.Connector.Options.SkipCertificateCheck` | Whether the connector skips the certificate check. | `True` or `False` |
| `$Options.ActivitySession.LoginAccountNameFormat` | The template that the activity uses to generate the login account name. | `%targetdomain%\%samaccountname%-a` |
| `$Options.ActivitySession.LoginAccountName` | The generated login account name. | `EXAMPLE\jsmith-a` |
| `$Options.ActivitySession.UserId` | The GUID of the requesting user. | `00000000-0000-0000-0000-000000000002` |
| `$Options.ActivitySession.TargetUserId` | The GUID of the target user. | `00000000-0000-0000-0000-000000000003` |
| `$Options.ActivitySession.TargetId` | The GUID of the target host. | `00000000-0000-0000-0000-000000000004` |
| `$Options.TargetHost.Id` | The GUID of the target host. | `00000000-0000-0000-0000-000000000004` |
| `$Options.TargetHost.DistinguishedName` | The distinguished name of the host in Active Directory. | `CN=SERVER01,CN=Computers,DC=example,DC=com` |
| `$Options.TargetHost.DnsHostName` | The fully qualified domain name of the host. | `server01.example.com` |
| `$Options.TargetHost.IPAddress` | The IPv4 address of the host. | `192.0.2.10` |
| `$Options.TargetHost.Name` | The name of the host. | `EXAMPLE\server01` |
| `$Options.TargetHost.NetBiosName` | The NetBIOS name of the host. | `SERVER01` |
| `$Options.TargetHost.ObjectSid` | The security identifier (SID) of the computer. | `S-1-5-21-1111111111-2222222222-3333333333-1143` |
| `$Options.TargetHost.Samaccountname` | The domain and SAM account name of the computer. | `EXAMPLE\SERVER01$` |

{/* TODO verify: the property names `ApiURL` and `Appid` against a live 26.07.3 script block. The 26.03 page spells them this way, and the built-in module reads `APIUrl` and `AppId`. */}

### The $Credential object

| Variable | Description | Example |
|---|---|---|
| `$Credential.Username` | The user name. On check-out, set it to the name of the account that you checked out. On check-in, it holds the name of the account to check in. | `jsmith` |
| `$Credential.Domain` | The domain of the account. On check-out, set it to the domain, or to the computer name for a local account. | `EXAMPLE`, `example.com`, or `SERVER01` |
| `$Credential.Password` | On check-out, a random value to overwrite with the password from the vault. On check-in, the existing known password. | |
| `$Credential.SudoCommand` | The command that raises privileges on a Linux or Unix host. Set a value to replace the default, `sudo`. | `sudo` |
| `$Credential.PasswordValueConnectorId` | The GUID of the vault connector for this credential. It matches `$Options.Connector.Id`. | |
| `$Credential.PasswordVaultInfo` | A JSON string with the vault-specific options of this credential. For CyberArk it holds the safe and folder. | `{ "safe": "SafeName", "folder": "Root" }` |

{/* TODO verify: that `PasswordVaultInfo` for a CyberArk credential holds `safe` and `folder` keys. The built-in module reads a `Safe` property from this JSON. */}
