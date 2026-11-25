---
title: "Connect-IdentityStore Cmdlet in Directory Manager"
description: "Connect Directory Manager Management Shell to an identity store with a chosen authentication mode and credentials using Connect-IdentityStore."
keywords:
  - Connect-IdentityStore
  - connect to identity store
  - authentication mode
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 10
---

# Connect-IdentityStore Cmdlet in Directory Manager

If an identity store of the connected domain is available, Directory Manager Management Shell
connects to that identity store when you launch it. If one doesn't exist, the
**Connect-IdentityStore** cmdlet establishes a connection with the required identity store.

After a connection is established with the identity store, you can perform functions in the
directory according to your role and permissions.

## Syntax

```
Connect-IdentityStore
[-AuthenticationMode <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command connects you to the identity store specified by the IdentityStoreId parameter
using the specified authentication mode and credentials that you set in the $Credentials environment
variable. For information about setting credentials in an environment variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md).

```
Connect-IdentityStore -AuthenticationMode 2 -IdentityStoreId 2 -Credential $Cred
```

## See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Connection Cmdlets in Directory Manager](/docs/directorymanager/11.0/managementshell/identitystoreconnection/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
