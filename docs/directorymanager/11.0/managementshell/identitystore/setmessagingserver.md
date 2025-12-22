---
title: "Set-MessagingServer"
description: "Set-MessagingServer"
sidebar_position: 180
---

# Set-MessagingServer

The commandlet **Set-MessagingServer** configures a messaging system in identity store. The
SmtpServer parameter requires the server name of the messaging system to be specified.
[Get-AvailableMessagingServers](/docs/directorymanager/11.0/managementshell/identitystore/getavailablemessagingservers.md)
commandlet can be used to retrieve the server names of the messaging systems.

This commandlet also has some parameters that appear depending on the value of the Provider
parameter.

## Syntax

```
Set-MessagingServer
-IdentityStoreName <string>
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}
-Credential <pscredential>
-SmtpServer <string>
[-Priority <int>]
[-Disabled]
[<CommonParameters>]
Set-MessagingServer
-IdentityStoreName <string>
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}
-UserName <string>
-SmtpServer <string>
[-Password <string>]
[-Priority <int>]
[-Disabled]
[<CommonParameters>]
```

## Required Parameters

- IdentityStoreName
- Provider
- Credential
- SmtpServer

Example 1:

This example modifies the messaging system of the AsStore9 identity store to Microsoft Office 365.

```
Set-MessagingServer -IdentityStoreName AdStore9 -Provider o365 -UserName admin@mydomain.onmicrosoft.com -Password webdir123R -SmtpServer ps.outlook.com -Domain mydomain.onmicrosoft.com -AppId 'a1b2c3d4-e5f6-f6e5-d4c3-b2a1b2c3d4e5'
```

Example 2:

This example modifies the messaging system of the AdStore9 identity store to Exchange 2013.

```
Set-MessagingServer -IdentityStoreName AdStore9 -Provider exchange2013 -UserName administrator -Password webdir123R - SmtpServer arslanahmadsvm.pucit.local -Domain pucit.local
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
