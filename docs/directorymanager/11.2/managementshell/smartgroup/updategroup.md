---
title: "Update-Group Cmdlet"
description: "Refresh the membership of a Smart Group or Dynasty in Directory Manager by re-running the LDAP query associated with it."
keywords:
  - Update-Group
  - update Smart Group membership
  - refresh Dynasty
  - LDAP query
  - Directory Manager cmdlet
  - Management Shell
sidebar_position: 50
---

# Update-Group Cmdlet

The Update-Group cmdlet modifies the membership of a Smart Group or Dynasty according to the
results returned by the LDAP query. This query is associated with the group or Dynasty creation and
can be updated at any time using the **Set-SmartGroup** cmdlet. When the Update-Group cmdlet is
run, it searches the directory to find recipients matching the criteria defined in the query
and modifies the group membership list with the returned recipients, if any.

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left panel.

## Syntax

```
Update-Group
-Identity <string>
[-SearchContainer <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command updates all the Directory Manager groups, by using the credentials of a
locally logged-on user, in a container specified by the "SearchContainer" parameter.

```
Update-Group -SearchContainer “OU=Sales,DC=Contoso,DC=com”
```

Example 2:

The following command updates all Smart Groups and Dynasties present in the container Training,
using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Update-Group -SearchContainer "OU=Training,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```
