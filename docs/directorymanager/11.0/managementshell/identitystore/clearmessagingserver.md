---
title: "Clear-MessagingServer"
description: "Remove the configured messaging server, and related notification and SMTP settings, from an identity store with the Clear-MessagingServer cmdlet."
keywords:
  - Clear-MessagingServer
  - messaging server
  - SMTP settings
  - identity store
  - Directory Manager PowerShell
sidebar_position: 10
---

# Clear-MessagingServer

The Clear-MessagingServer cmdlet removes the configured messaging server from the specified
identity store.

:::note
This cmdlet also clears the SMTP settings, notification settings, password expiry
settings, membership lifecycle notification settings, and managed by notification settings for the
identity store.
:::

## Syntax

```
Clear-MessagingServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example clears the configured messaging server for the AdStore8 identity store.

```
Clear-MessagingServer -IdentityStoreName AdStore8
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
