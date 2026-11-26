---
title: "Remove-Mailbox Cmdlet in Directory Manager"
description: "Delete a mailbox-enabled user account from the connected identity store with the Remove-Mailbox cmdlet."
keywords:
  - Remove-Mailbox
  - delete mailbox
  - identity store
  - PowerShell cmdlet
sidebar_position: 30
---

# Remove-Mailbox Cmdlet in Directory Manager

Use the Remove-Mailbox cmdlet to delete a mailbox-enabled user account from the connected identity store. The cmdlet deletes the whole user account, not only the mailbox. It doesn't delete users who don't have a mailbox.

## Syntax

```
Remove-MailBox
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- Identity

## Example

This command deletes the specified mailbox-enabled user account from the connected identity store.

```
Remove-MailBox -Identity "OsamaMailBox"
```
