---
title: "Set-SmtpServer Cmdlet in Directory Manager"
description: "Configure the SMTP server, sender and recipient addresses, port, and authentication for an identity store with the Set-SmtpServer cmdlet."
keywords:
  - Set-SmtpServer
  - SMTP server
  - email notifications
  - identity store
  - PowerShell cmdlet
sidebar_position: 200
---

# Set-SmtpServer Cmdlet in Directory Manager

The **Set-SmtpServer** cmdlet configures an SMTP server for an identity store.

## Syntax

```
Set-SmtpServer
-IdentityStorename <string>
-SmtpServer <string>
-FromEmail <string>
-ToEmail <string>
-Port <int>
[-Credential <pscredential>]
[-UseSmptUserAuthentication]
[-SslEnabled]
<CommonParameters>]
```

## Required Parameters

- IdentityStorename
- SmtpServer
- FromEmail
- ToEmail
- Port

Example 1:

This example configures the arslanahmadsvm.pucit.local SMTP server for the AdStore9 identity store
on port 25. The sender email address for notifications is noreply@pucit.local, and the recipient
email address is euser1@pucit.local.

```
Set-SmtpServer -IdentityStorename AdStore9 -SmtpServer arslanahmadsvm.pucit.local -FromEmail noreply@pucit.local -ToEmail euser1@pucit.local -Port 25
```

Example 2:

This example configures the smtp.office365.com SMTP server, which is SSL (Secure Sockets Layer) enabled,
for the AdStore9 identity store. The SMTP server is configured on port 587 and uses credentials
stored in the $creds variable.

```
Set-SmtpServer -IdentityStorename AdStore9 -SmtpServer smtp.office365.com -FromEmail admin@mydomain.onmicrosoft.com -ToEmail admin@mydomain.onmicrosoft.com -Port 587 -UseSmptUserAuthentication -SslEnabled -Credential $creds
```

## See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
