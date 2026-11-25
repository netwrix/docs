---
title: "Get-GroupMember Cmdlet for Directory Manager"
description: "Retrieve the members of a group from the directory, optionally filtered with an LDAP filter, using the Get-GroupMember cmdlet."
keywords:
  - Get-GroupMember
  - list group members
  - LDAP filter
  - Directory Manager cmdlets
sidebar_position: 20
---

# Get-GroupMember Cmdlet for Directory Manager

Use this cmdlet to retrieve members of a particular group from the directory. You can apply filters
to the results the cmdlet returns.

## Syntax

```
Get-GroupMember
[-Identity] <string>
[[-LdapFilter] <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command retrieves all members of the Password_Expiry group using the credentials set
in the $Credentials environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Get-GroupMember -Identity "CN=Password_Expiry,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The command below retrieves all members from the Enrollment group whose display name starts with
the character S, using the credentials of the current user signed in to the identity store.

```
Get-GroupMember -Identity "CN=Enrollment,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -LdapFilter "(displayname=S*)"
```
