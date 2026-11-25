---
title: "Get-Client Cmdlet in Directory Manager"
description: "Get the name, type, and enabled or disabled status of Directory Manager clients, such as Admin Center, portals, and services, with the Get-Client cmdlet."
keywords:
  - Get-Client
  - Directory Manager clients
  - client status
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 50
---

# Get-Client Cmdlet in Directory Manager

The Get-Client cmdlet gets information about Directory Manager clients, such as Admin Center,
Directory Manager portals, and Management Shell. It also covers Directory Manager services such as
the replication, scheduler, and data services. The information includes the client name and type,
and whether the client is enabled or disabled.

## Syntax

```
Get-Client
[[-ClientName] <String>]
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example retrieves information about the Admin Center client.

```
Get-Client –ClientName ‘Admin Center’
```

Example 2:

This example retrieves information about two clients (ManagementShell `<machine name>` and
GroupIDPortal1) through the pipeline operator.

```
‘ManagementShell <machine name>’, ‘GroupIDPortal1’ | Get-Client
```

Example 3:

This example lists all Directory Manager clients available on the Directory Manager machine.

```
Get-Client
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
