---
title: "Clear-SmtpServer"
description: "Clear-SmtpServer"
sidebar_position: 30
---

# Clear-SmtpServer

The commandlet **Clear-SmtpServer** removes the SMTP server configurations from an identity store.

NOTE: This cmdlet will also clear the notification settings for the identity store recipients,
password expiry group notifications, membership lifecycle notifications, and managed by notification
options for the specified identity store.

## Syntax

```
Clear-SmtpServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example clears the configured SMTP server in AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
