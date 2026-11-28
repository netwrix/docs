---
title: "Remove-Mailbox Cmdlet in GroupID"
description: "Delete a mailbox from the connected identity store with the Remove-Mailbox cmdlet."
keywords:
  - Remove-Mailbox
  - delete mailbox
  - identity store
  - PowerShell cmdlet
sidebar_position: 30
---

# Remove-Mailbox Cmdlet in GroupID

Use the **Remove-Mailbox** cmdlet to delete a mailbox from the connected identity store.

## Syntax

```
Remove-MailBox
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- Identity

Example:

The following command deletes the specified mailbox from the connected identity store.

```
Remove-MailBox -Identity "SampleMailBox"
```

**See Also**

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Mailbox Cmdlets in GroupID](/docs/directorymanager/11.0/managementshell/mailbox/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
