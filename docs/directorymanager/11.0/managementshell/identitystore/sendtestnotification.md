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

The **Send-TestNotification** cmdlet sends a test notification using the specified From and To email
addresses through the SMTP server of the specified identity store. Use this cmdlet to validate SMTP
settings before configuring notifications or SMTP settings.

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

This example sends a test notification to euser1@example.com using the SMTP server configured on
port 25 for user arsalanahmadsvm in the AdStore1 identity store.

```
Send-TestNotification -IdentityStorename AdStore9 -SmtpServer mail01.example.com -Port 25 -FromEmail noreply@example.com -ToEmail euser1@example.com
```

**See Also**

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
