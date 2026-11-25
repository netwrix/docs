---
title: "Get-Token Cmdlet in Directory Manager"
description: "Get a valid security token for an identity store, or renew an expired token in a Management Shell session, with the Get-Token cmdlet."
keywords:
  - Get-Token
  - security token
  - expired token
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 20
---

# Get-Token Cmdlet in Directory Manager

When Management Shell is connected to an identity store, it passes a token with each cmdlet. The token lets you perform the required functions in the directory.

To perform a function in an identity store other than the one Management Shell is connected to, first get a valid token for that identity store with the Get-Token cmdlet. The cmdlet gets a token from the Directory Manager Security Service, which assigned the token to you when you authenticated.

You can also use the Get-Token cmdlet to get a valid token if your token expires during a session.

## Syntax

```
Get-Token
[-AuthenticationMode <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- None

## Example

This command returns a token for the identity store specified by the **IdentityStoreId** parameter. It uses the specified authentication mode and the credentials you set in the **$Credentials** environment variable. For information about setting credentials in an environment variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md).

```
Get-Token -AuthenticationMode 2 -IdentityStoreId 2 -Credential $Cred
```
