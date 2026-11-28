---
title: "Remove-Contact Cmdlet in GroupID"
description: "Delete a contact from the directory by using the Remove-Contact cmdlet in the GroupID Management Shell."
keywords:
  - Remove-Contact
  - delete contact
  - GroupID Management Shell
  - contact cmdlet
sidebar_position: 30
---

# Remove-Contact Cmdlet in GroupID

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
Remove-Contact -Identity "SampleContact"
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Contact Cmdlets](/docs/directorymanager/11.0/managementshell/contact/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
