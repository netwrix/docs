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

Use the Send-TestNotification cmdlet to send a test notification through the SMTP server of the
specified identity store. The notification uses the From and To email addresses you specify. Use
this cmdlet to validate SMTP settings before you configure notifications or SMTP settings.

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
- SmtpSesrver
- FromEmail
- Toemail
- Port

## Example

This command sends a test notification to euser1@pucit.local using the SMTP server configured on
port 25 for user arsalanahmadsvm in the AdStore1 identity store.

```
Send-TestNotification -IdentityStorename AdStore9 -SmtpServer arslanahmadsvm.pucit.local -Port 25 -FromEmail noreply@pucit.local -ToEmail euser1@pucit.local
```
