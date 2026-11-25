---
title: "New-IdentityStore Cmdlet in Directory Manager"
description: "Create an Active Directory, Microsoft Entra ID, or Google Workspace identity store in Directory Manager with the New-IdentityStore cmdlet."
keywords:
  - New-IdentityStore
  - create identity store
  - Microsoft Entra ID
  - Google Workspace
  - PowerShell cmdlet
sidebar_position: 130
---

# New-IdentityStore Cmdlet in Directory Manager

The New-IdentityStore cmdlet creates a new identity store. This cmdlet requires valid
credentials and connectivity before it creates the store. However, you can override this behavior
by specifying the IgnoreConnectionFail parameter.

This cmdlet uses dynamic parameters based on the value of the _IdentityStoreType_ parameter. The
parameters that become available depending on the value of _IdentityStoreType_ are as follows:

- IdentityStoreType: ActiveDirectory

    Domain: The connection string or domain of the Active Directory.

- IdentityStoreType: MicrosoftAzure

    Domain: The domain of the Microsoft Entra ID or Office 365 store.

    AppId: The name of the Directory Manager application registered in the Microsoft Entra ID admin
    panel.

- IdentityStoreType: GoogleWorkspace

    AdminUsername: The username of the administrator of the Google Workspace account.

    P12CertificatePath: The path where the certificate file (.p12 extension) downloaded from Google
    Admin Console is placed (including the filename).

## Syntax

```
New-IdentityStore
-IdentityStoreType <IdentityStoreType>
-IdentityStoreName <String>
-Credential <PSCredential>
[-Description <String>]
[-PassThru]
[-IgnoreConnectionFail]
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-WarningAction <ActionPreference>]
[-InformationAction ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameters

- IdentityStoreType
- IdentityStoreName
- Credential

Example 1:

This example creates a new Active Directory-based identity store by explicitly specifying the
credentials for the new identity store.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore2 -Credential $cred -Domain pucit.local
```

:::note
For an Active Directory-based identity store, the Domain parameter is mandatory.
:::


Example 2:

This example creates a new Active Directory-based identity store by providing the secure
credentials. Here $cred is an object of type PSCredential that the Get-Credential cmdlet created.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore2 -Credential $cred -Domain pucit.local
```

Example 3:

This example creates a Microsoft Entra ID-based identity store.

```
New-IdentityStore -IdentityStoreType MicrosoftAzure -IdentityStoreName DemoAzStore1 -UserName admin@mydomain.onmicrosoft.com -Password password123 -Domain mydomain.onmicrosoft.com -AppId 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
```

:::note
For a Microsoft Entra ID-based identity store, the Domain and AppId parameters are mandatory.
:::


Example 4:

This example creates an identity store based on Google Apps (Google Workspace).

```
New-IdentityStore -IdentityStoreType GoogleWorkspace -IdentityStoreName DemoGStore1 -UserName svcacc@myproject-111222.iam.gserviceaccount.com -AdminUsername admin@mydomain.com -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```

:::note
For a Google Apps-based identity store, the AdminUserName and P12CertificatePath parameters are
mandatory. However, the 'Password' parameter is ignored.
:::


Example 5:

This example creates an identity store based on Google Apps (G-Suite) using secure credentials.

The $creds object (of type PSCredential) must contain the service account as the username. The
'Password' property of this object can be anything except empty.

```
New-IdentityStore -IdentityStoreType GoogleWorkspace -IdentityStoreName DemoGStore2 -Credential $creds -AdminUsername arslan@bibelotz.com -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```

Example 6:

This example creates an Active Directory-based identity store by ignoring the credential and
connection details.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore3 -UserName nouser -Password password123 -Domain nodomain.local -IgnoreConnectionFail
```
