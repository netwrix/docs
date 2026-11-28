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

Use the Get-AvailableMessagingServers cmdlet to retrieve the messaging servers available for the configured messaging provider.

## Syntax

```
Get-AvailableMessagingServers
[-IdentityStoreName <string>]
-Provider {o365 | gsuite | exchange2010 | exchange2013 | exchange2016 | exchange2019 | builtin}
-UserName <string>
[-Password <string>]
[<CommonParameters>]
Get-AvailableMessagingServers
[-IdentityStoreName <string>]
-Provider {o365 | gsuite | exchange2010 | exchange2013 | exchange2016 | exchange2019 | builtin}
-Credential <pscredential>
[<CommonParameters>]
```

## Required Parameters

- Provider
- UserName or Credential
- The provider-specific parameters for the selected provider

If you omit IdentityStoreName, the cmdlet uses the connected identity store.

## Provider-specific parameters

The following parameters become available, and are mandatory, based on the value of the Provider parameter. The `builtin` provider has no provider-specific parameters.

- Provider: o365
  - Domain
  - AppId
- Provider: exchange2010, exchange2013, exchange2016, or exchange2019
  - Domain
- Provider: gsuite
  - AdminUsername
  - P12CertificatePath

## Examples

### Example 1

This command retrieves the available messaging servers configured in the AdStore1 identity store for the Exchange 2013 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider exchange2013 -UserName administrator -Password password123 -Domain example.com
```

### Example 2

This command retrieves the available messaging servers configured in the AdStore1 identity store for the Microsoft 365 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider o365 -UserName admin@mydomain.onmicrosoft.com -Password password123 -Domain mydomain.onmicrosoft.com -AppId 'eeeeeeee-aaaa-dddd-bbbb-cccccccccccc'
```

### Example 3

This command retrieves the available messaging servers in the AdStore1 identity store for the Google Workspace (G Suite) messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider gsuite -UserName svcaccount@myproject-111222.iam.gserviceaccount.com -AdminUsername 'admin@example.com' -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```
