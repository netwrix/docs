---
title: "Get-AvailableMessagingServers Cmdlet"
description: "List the messaging servers available for an identity store's messaging provider, such as Exchange, Microsoft 365, or Google Workspace."
keywords:
  - Get-AvailableMessagingServers
  - messaging servers
  - messaging provider
  - Exchange
  - PowerShell cmdlet
sidebar_position: 40
---

# Get-AvailableMessagingServers Cmdlet

The Get-AvailableMessagingServers cmdlet retrieves the messaging servers available for the
configured messaging provider.

## Syntax

```
Get-AvailableMessagingServers
-IdentityStoreName <string>
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}
-UserName <string>
[-Password <string>]
<CommonParameters>]
Get-AvailableMessagingServers
-IdentityStoreName <string>
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}
-Credential <pscredential>
[<CommonParameters>]
```

## Required Parameters

- IdentityStoreName
- Provider
- Credential

Example 1:

This example retrieves the available messaging servers configured in the AdStore1 identity store for
the Exchange 2013 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider exchange2013 -UserName administrator -Password password123 -Domain pucit.local
```

Example 2:

This example retrieves the available messaging servers configured in the AdStore1 identity store for
the Microsoft 365 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider o365 -UserName admin@mydomain.onmicrosoft.com -Password password123 -Domain mydomain.onmicrosoft.com -AppId 'eeeeeeee-aaaa-dddd-bbbb-cccccccccccc'
```

Example 3:

This example retrieves the available messaging servers in the AdStore1 identity store for the Google
Workspace (G Suite) messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider gsuite -UserName svcaccount@myproject-219211.iam.gserviceaccount.com -AdminUsername 'arslan@mydomain.com' -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```
