---
title: "Set-MessagingServer"
description: "Use the Set-MessagingServer cmdlet to configure the messaging system, such as Microsoft 365, Google Workspace or Exchange, for an identity store."
keywords:
  - Set-MessagingServer
  - messaging server
  - Exchange provider
  - Management Shell cmdlet
sidebar_position: 180
---

# Set-MessagingServer

The Set-MessagingServer cmdlet configures a messaging system in an identity store. The SmtpServer
parameter requires the server name of the messaging system to be specified.
Use the [Get-AvailableMessagingServers Cmdlet](/docs/directorymanager/11.1/managementshell/identitystore/getavailablemessagingservers.md) cmdlet to retrieve
the server names of the messaging systems.

This cmdlet also has some parameters that appear depending on the value of the Provider
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

This example modifies the messaging system of the AdStore9 identity store to Microsoft 365.

```
Set-MessagingServer -IdentityStoreName AdStore9 -Provider o365 -UserName admin@mydomain.onmicrosoft.com -Password password123 -SmtpServer ps.outlook.com -Domain mydomain.onmicrosoft.com -AppId 'a1b2c3d4-e5f6-f6e5-d4c3-b2a1b2c3d4e5'
```

Example 2:

This example modifies the messaging system of the AdStore9 identity store to Exchange 2013.

```
Set-MessagingServer -IdentityStoreName AdStore9 -Provider exchange2013 -UserName administrator -Password password123 - SmtpServer arslanahmadsvm.pucit.local -Domain pucit.local
```
