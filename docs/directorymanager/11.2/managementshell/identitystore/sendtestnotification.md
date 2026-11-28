---
title: "Send-TestNotification"
description: "Use the Send-TestNotification cmdlet to send a test email through an SMTP server and confirm the settings work before you configure notifications."
keywords:
  - Send-TestNotification
  - test notification
  - SMTP settings
  - Management Shell cmdlet
sidebar_position: 150
---

# Send-TestNotification

Use the Send-TestNotification cmdlet to send a test email through the SMTP server and port that you
specify, for an identity store. The email uses the From and To email addresses you specify. The
cmdlet doesn't save the settings. Use it to validate SMTP settings before you configure
notifications or SMTP settings.

## Syntax

```
Send-TestNotification
-IdentityStorename <string>
-SmtpServer <string>
-FromEmail <string>
-ToEmail <string>
-Port <int>
[-Credential <pscredential>]
[-UseSmptUserAuthentication]
[-SslEnabled]
[<CommonParameters>]
```

## Required Parameters

- IdentityStoreName
- SmtpServer
- FromEmail
- ToEmail
- Port

## Example

This command sends a test notification to euser1@example.com through the
mail01.example.com SMTP server on port 25 for the AdStore9 identity store.

```
Send-TestNotification -IdentityStorename AdStore9 -SmtpServer mail01.example.com -Port 25 -FromEmail noreply@example.com -ToEmail euser1@example.com
```
