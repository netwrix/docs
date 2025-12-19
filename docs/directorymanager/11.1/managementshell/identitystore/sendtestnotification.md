---
title: "Send-TestNotification"
description: "Send-TestNotification"
sidebar_position: 150
---

# Send-TestNotification

The commandlet Send-TestNotification sends a test notification using the email addresses (specified
From/To) through the SMTP server of the specified identity store. This cmdlet can be used to
validate SMTP settings before configuring notifications or SMTP settings.

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

Example 1:

This example sends a test notification to euser1@pucit.local using the SMTP server configured on
port 25 for user arsalanahmadsvm in AdStore1 identity store.

```
Send-TestNotification -IdentityStorename AdStore9 -SmtpServer arslanahmadsvm.pucit.local -Port 25 -FromEmail noreply@pucit.local -ToEmail euser1@pucit.local
```
