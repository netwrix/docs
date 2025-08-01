---
title: "Remove-Mailbox"
description: "Remove-Mailbox"
sidebar_position: 30
---

# Remove-Mailbox

Use the **Remove-Mailbox** commandlet to delete mailbox from the connected identifty store.

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

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Mailbox Commands](/docs/directorymanager/11.0/managementshell/mailbox/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
