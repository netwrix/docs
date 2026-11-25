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

Use this cmdlet to retrieve the members of a group from the directory. You can filter the results the cmdlet returns.

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

## Required parameter

- None

## Examples

### Retrieve all members of a group

This command retrieves all members of the Password_Expiry group. It uses the credentials set in the `$Credentials` environment variable. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Get-GroupMember -Identity "CN=Password_Expiry,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

### Filter members with an LDAP filter

This command retrieves all members of the Enrollment group whose display name starts with the character S. It uses the credentials of the current user signed in to the identity store.

```
Get-GroupMember -Identity "CN=Enrollment,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -LdapFilter "(displayname=S*)"
```
