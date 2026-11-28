---
title: "Clear-SmtpServer Cmdlet in GroupID"
description: "Remove the SMTP server configuration from a GroupID identity store with the Clear-SmtpServer cmdlet."
keywords:
  - Clear-SmtpServer
  - SMTP server
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 30
---

# Clear-SmtpServer Cmdlet in GroupID

The Clear-SmtpServer cmdlet removes the SMTP server configuration from an identity store.

:::note
This cmdlet also clears the notification settings for the identity store recipients,
password expiry group notifications, membership lifecycle notifications, and managed by notification
options for the specified identity store.
:::

## Syntax

```
Clear-SmtpServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example clears the configured SMTP server in the AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
