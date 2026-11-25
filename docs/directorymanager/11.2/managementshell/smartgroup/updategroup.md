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
results of its LDAP query. The query is associated with the group or Dynasty when you create it. You
can update it at any time with the **Set-SmartGroup** cmdlet.

When you run the Update-Group cmdlet, it searches the directory for recipients that match the
criteria in the query. It then updates the group membership list with the returned recipients, if
any.

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

## Required parameter

- Identity

## Examples

### Example 1

This command updates all Directory Manager groups in the container that the "SearchContainer"
parameter specifies. It uses the credentials of the locally logged-on user.

```
Update-Group -SearchContainer “OU=Sales,DC=Contoso,DC=com”
```

### Example 2

This command updates all Smart Groups and Dynasties in the container Training. It uses the
credentials set in the $Credentials environment variable. To set credentials in an environment
variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md).

```
Update-Group -SearchContainer "OU=Training,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```
