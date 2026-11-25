---
title: "Remove-Contact Cmdlet in Directory Manager"
description: "Delete a contact from the directory by using the Remove-Contact cmdlet in the Directory Manager Management Shell."
keywords:
  - Remove-Contact
  - delete contact
  - Directory Manager Management Shell
  - contact cmdlet
sidebar_position: 30
---

# Remove-Contact Cmdlet in Directory Manager

Use the **Remove-Contact** cmdlet to delete a contact from the directory.

## Syntax

```
Remove-Contact
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes the specified contact from the identity store.

```
Remove-Contact -Identity "OsamaContact"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Contact Cmdlets](/docs/directorymanager/11.0/managementshell/contact/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
