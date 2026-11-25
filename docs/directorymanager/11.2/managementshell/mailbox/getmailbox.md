---
title: "Get-Mailbox Cmdlet in Directory Manager"
description: "Retrieve basic information about mailboxes in an identity store that match your criteria with the Get-Mailbox cmdlet."
keywords:
  - Get-Mailbox
  - retrieve mailbox
  - mailbox information
  - PowerShell cmdlet
sidebar_position: 10
---

# Get-Mailbox Cmdlet in Directory Manager

Use the Get-Mailbox cmdlet to retrieve basic information about mailboxes that match your criteria.

## Syntax

```
Get-MailBox
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-MailBoxStore <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- None

## Example

This command retrieves the specified mailbox from the connected identity store.

```
Get-MailBox -Identity "OsamaMailBox"
```

**See Also**

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.2/managementshell/commands.md)
- [Mailbox Cmdlets in Directory Manager](/docs/directorymanager/11.2/managementshell/mailbox/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.2/managementshell/parameters.md)
