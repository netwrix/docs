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

When you launch Directory Manager Management Shell, it connects to an identity store of the connected domain if one is available. If none exists, use the Connect-IdentityStore cmdlet to connect to the identity store you need.

After you connect to the identity store, you can perform functions in the directory according to your role and permissions.

## Syntax

```
Connect-IdentityStore
[-AuthenticationMode <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- None

## Parameters

- **AuthenticationMode**: How the cmdlet authenticates you. If you omit it, the cmdlet uses `Web`.
  - `Integrated` or `1`: Uses the current session.
  - `Credential` or `2`: Authenticates with the IdentityStoreId and Credential parameters, which are both required in this mode.
  - `Web` or `3`: Uses interactive web sign-in.

## Output

After it connects, the cmdlet displays five lines of text with the identity store's ID, name, connection, and type, and the user's display name. For example:

```
ID                ::  2
Name              ::  AdStore1
Connection        ::  example.com
Type              ::  Active Directory
User              ::  John Smith
```

## Example

This command connects you to the identity store specified by the IdentityStoreId parameter. It uses the specified authentication mode and the credentials that you set in the $Credentials variable. To set this variable, see [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md).

```
Connect-IdentityStore -AuthenticationMode 2 -IdentityStoreId 2 -Credential $Credentials
```
