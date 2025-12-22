---
title: "Get-GroupMember"
description: "Get-GroupMember"
sidebar_position: 20
---

# Get-GroupMember

Use this commandlet to retrieve members of a particular group from directory. You can apply filters
to the results returned by the commandlet.

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
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Get-GroupMember -Identity "CN=Password_Expiry,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The command below retrieves all members from the Enrollment group display name of which starts with
the character S using the credentials of current user logged-on to the identity store.

```
Get-GroupMember -Identity "CN=Enrollment,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -LdapFilter "(displayname=S*)"
```
