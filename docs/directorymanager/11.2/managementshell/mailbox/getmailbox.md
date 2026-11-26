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
[-SearchContainersScopeList <string[]>]
[-MailBoxStore <string>]
[-ShouldReturnCollection]
[-Resolved]
[-MaxItemsToDisplay <int>]
[-LdapFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

**Identity** accepts the name, logon name (sAMAccountName), domain and logon name (`DOMAIN\name`), distinguished name, GUID, or SID of the mailbox user.

For **SearchContainersScopeList**, enter one value to apply to all **SearchContainer** values, or one value for each container in the same order. Enter `1` to search only that container, or `2` to also search its sub-containers. The default is `2`.

For **MailBoxStore**, enter the distinguished name of the mailbox database, which is the user's `homeMDB` value.

## Required parameters

- None

## Example

This command retrieves the specified mailbox from the connected identity store.

```
Get-MailBox -Identity "SampleMailBox"
```

**See Also**

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.2/managementshell/commands.md)
- [Mailbox Cmdlets in Directory Manager](/docs/directorymanager/11.2/managementshell/mailbox/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.2/managementshell/parameters.md)
