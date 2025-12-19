---
title: "Get-Token"
description: "Get-Token"
sidebar_position: 20
---

# Get-Token

When Management Shell is connected to an identity store a token is passed with the commandlet
enabling user to perform the required functions in directory.

If you want to perform a function in a different identity store Management Shell is connected with
then first, you must have a valid token for the required identity store using the **Get-Token**
commandlet. This commandlet gets a token from GroupID Security Service which was assigned to the
user at the time of authentication.

**Get-Token** command is also used to get a valid token in case of token expires in a session.

## Syntax

```
Get-Token
[-AuthenticationMode <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command returns a token for the identity store specified by the **IdentityStoreId**
parameter using the specified authentication mode and credentials that you set in the
**$Credentials** environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Get-Token -AuthenticationMode 2 -IdentityStoreId 2 -Credential $Cred
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Connection Commands](/docs/directorymanager/11.0/managementshell/identitystoreconnection/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
