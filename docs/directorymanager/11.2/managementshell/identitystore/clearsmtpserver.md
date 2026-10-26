---
title: "Clear-SmtpServer"
description: "Clear-SmtpServer"
sidebar_position: 30
---

# Clear-SmtpServer

The commandlet Clear-SmtpServer removes the SMTP server configurations from an identity store.

:::note
This cmdlet will also clear the notification settings for the identity store recipients,
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

This example clears the configured SMTP server in AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```
