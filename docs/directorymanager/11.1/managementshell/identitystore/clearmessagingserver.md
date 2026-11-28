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

The `Clear-MessagingServer` cmdlet removes the configured messaging server from the specified identity store.

:::note
This cmdlet also clears the SMTP settings, notification settings, password expiry settings, membership lifecycle notification settings, and managed by notification settings for the identity store.
:::

## Syntax

```
Clear-MessagingServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required parameters

- IdentityStoreName

## Examples

### Example 1

This example clears the configured messaging server for the AdStore8 identity store.

```
Clear-MessagingServer -IdentityStoreName AdStore8
```
