---
title: "Get-Client"
description: "Get-Client"
sidebar_position: 50
---

# Get-Client

The commandlet **Get-Client** gets information about the GroupID clients such as Admin center,
GroupID portal(s), management shell, GroupID services such as replication service, scheduler
service, data service and so on. The information includes client name, client type, and its status
whether enabled or disabled.

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

This example retrieves information about a client Admin Center.

```
Get-Client –ClientName ‘Admin Center’
```

Example 2:

This example retrieves information about two clients – ManagementShell `<machine name>` and
GroupIDPortal1 – through the pipeline operator.

```
‘ManagementShell <machine name>’, ‘GroupIDPortal1’ | Get-Client
```

Example 3:

This example lists all GroupID clients available on the GroupID machine.

```
Get-Client
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
