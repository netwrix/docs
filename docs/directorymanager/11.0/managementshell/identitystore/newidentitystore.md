---
title: "New-IdentityStore"
description: "New-IdentityStore"
sidebar_position: 130
---

# New-IdentityStore

The commandlet **New-IdentityStore** creates a new identity store. This commandlet requires valid
credentials and connectivity before it creates the store. However, this behavior can be overridden
by specifying the IgnoreConnectionFail parameter.

This cmdlet uses dynamic parameters based on the value of _IdentityStoreType_ parameter. The
parameters that become available depending on the values of _IdentityStoreType_ are as follows:

- IdentityStoreType: ActiveDirectory

    Domain: The connection string / domain of the active directory.

- IdentityStoreType: MicrosoftAzure

    Domain: The domain of the Microsoft Entra ID / Office365 store.

    AppId: The name of GroupID application registered in the Microsoft Entra ID admin panel.

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

This example create a new Active Directory based identity store by explicitly specifying the
credentials for the new identity store.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore2 -Credential $cred -Domain pucit.local
```

NOTE: For an Active Directory based identity store, Domain parameter is mandatory.

Example 2:

This example creates a new Active Directory based identity store by providing the secure
credentials. Here $cred is an object of type PSCredential which was created by Get-Credential
commandlet.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore2 -Credential $cred -Domain pucit.local
```

Example 3:

This example creates an Microsoft Entra ID based identity store.

```
New-IdentityStore -IdentityStoreType MicrosoftAzure -IdentityStoreName DemoAzStore1 -UserName admin@mydomain.onmicrosoft.com -Password webdir123R -Domain mydomain.onmicrosoft.com -AppId 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
```

NOTE: In case of an Microsoft Entra ID based identity store, Domain and AppId parameters are
mandatory.

Example 4:

This example creates a Google Apps (Google Workspace) based identity store.

```
New-IdentityStore -IdentityStoreType GoogleWorkspace -IdentityStoreName DemoGStore1 -UserName svcacc@myproject-111222.iam.gserviceaccount.com -AdminUsername admin@mydomain.com -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```

NOTE: For Google Apps based identity store, AdminUserName and P12CertificatePath parameters are
mandatory. However, ‘Password’ parameter is ignored.

Example 5:

This example creates Google Apps (G-Suite) based identity store using secure credentials.

The $creds (an object of type PSCredential) object must contain the service account as username. The
‘Password’ property of this object can be anything but not empty.

```
New-IdentityStore -IdentityStoreType GoogleWorkspace -IdentityStoreName DemoGStore2 -Credential $creds -AdminUsername arslan@bibelotz.com -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```

Example 6:

This example creates an Active Directory based identity store by ignoring the credential and
connection details.

```
New-IdentityStore -IdentityStoreType ActiveDirectory -IdentityStoreName DemoAdStore3 -UserName nouser -Password wrongpwd -Domain nodomain.local -IgnoreConnectionFail
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
