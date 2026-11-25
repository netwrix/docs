---
title: "Clear-SmtpServer Cmdlet in Directory Manager"
description: "Remove the SMTP server configuration from a Directory Manager identity store with the Clear-SmtpServer cmdlet."
keywords:
  - Clear-SmtpServer
  - SMTP server
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 30
---

# Clear-SmtpServer Cmdlet in Directory Manager

Use the Clear-SmtpServer cmdlet to remove the SMTP server configuration from an identity store.

:::note
This cmdlet also clears these notification settings for the specified identity store:

- Identity store recipients
- Password expiry group notifications
- Membership lifecycle notifications
- Managed by notifications
:::

## Syntax

```
Clear-SmtpServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

## Example

This command clears the configured SMTP server in the AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```
