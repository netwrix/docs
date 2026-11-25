---
title: "Remove-Mailbox Cmdlet in Directory Manager"
description: "Delete a mailbox from the connected identity store with the Remove-Mailbox cmdlet."
keywords:
  - Remove-Mailbox
  - delete mailbox
  - identity store
  - PowerShell cmdlet
sidebar_position: 30
---

# Remove-Mailbox Cmdlet in Directory Manager

Use the Remove-Mailbox cmdlet to delete a mailbox from the connected identity store.

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
Remove-MailBox -Identity "OsamaMailBox"
```
