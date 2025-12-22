---
title: "Set-SmtpServer"
description: "Set-SmtpServer"
sidebar_position: 200
---

# Set-SmtpServer

The **Set-SmtpServer** commandlet configures an SMTP server for an identity store.

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

This example configures arsalanahmadsvm.pucit.local SMTP server for AdStore9 identity store on
port 25. Email address for sending notification is specified as noreply@pucit.local and
euser1@pucit.local as recipient email address.

```
Set-SmtpServer -IdentityStorename AdStore9 -SmtpServer arslanahmadsvm.pucit.local -FromEmail noreply@pucit.local -ToEmail euser1@pucit.local -Port 25
```

Example 2:

This example configures smtp.office365.com SMTP server that is SSL (Secured Socket Layer) enabled
for AdStore9 identity store. The SMTP server is configured on port 587 and it uses credentials
stored in the $creds variable.

```
Set-SmtpServer -IdentityStorename AdStore9 -SmtpServer smtp.office365.com -FromEmail admin@mydomain.onmicrosoft.com -ToEmail admin@mydomain.onmicrosoft.com -Port 587 -UseSmptUserAuthentication -SslEnabled -Credential $creds
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
