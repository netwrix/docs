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

The `-SearchContainer` parameter limits where the cmdlet looks for the group that you specify in
`-Identity`. It doesn't update other groups in the container.

The cmdlet starts the update and returns without waiting for it to finish. Membership changes appear
shortly afterward. If updates are disabled for the group, the cmdlet reports that the update isn't
enabled. If it doesn't find a matching Smart Group or Dynasty, it reports that it found no objects
to update.

## Examples

### Example 1

This command updates the Smart Group Smart_Training. It uses the credentials of the locally
logged-on user.

```
Update-Group -Identity "CN=Smart_Training,OU=Sales,DC=Contoso,DC=com"
```

### Example 2

This command looks for the Smart Group Smart_Training in the Training container and updates it. It
uses the credentials set in the $Credentials environment variable. To run the command as another
user, use the Credential parameter together with the IdentityStoreId parameter. To set credentials
in an environment variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md).

```
Update-Group -Identity "CN=Smart_Training,OU=Training,DC=HR,DC=Imanami,DC=US" -SearchContainer "OU=Training,DC=HR,DC=Imanami,DC=US" -IdentityStoreId 2 -Credential $Credentials
```
