---
title: "Connect-IdentityStore"
description: "Connect-IdentityStore"
sidebar_position: 10
---

# Connect-IdentityStore

If an identity store of the connected domain is available, then GroupID Management Shell gets
connected to that identity store upon its launch. In case it does not exist the
**Connect-IdentityStore** commandlet establishes a connection with the required identity store.

After a connection is established with the identity store you can then perform functions in
directory as per your role and permissions.

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
variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Connect-IdentityStore -AuthenticationMode 2 -IdentityStoreId 2 -Credential $Cred
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Connection Commands](/docs/directorymanager/11.0/managementshell/identitystoreconnection/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
