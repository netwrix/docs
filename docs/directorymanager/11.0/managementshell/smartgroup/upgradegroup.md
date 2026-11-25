---
title: "Upgrade-Group Cmdlet in Directory Manager"
description: "Upgrade managed and non-managed groups from GroupID 9 and 10 to Directory Manager 11.0 with the Upgrade-Group cmdlet."
keywords:
  - Upgrade-Group
  - Directory Manager Management Shell
  - upgrade Smart Groups
  - upgrade Dynasties
  - upgrade non-managed groups
sidebar_position: 60
---

# Upgrade-Group Cmdlet in Directory Manager

The **Upgrade-Group** cmdlet upgrades managed (Smart Groups and Dynasties) and non-managed
groups of GroupID 9 and 10 to Directory Manager 11.0.

:::note
Directory Manager upgrades groups from the connected database to the current instance of Directory
Manager. This database can be an upgraded database or a copy of the database from a previous
version, such as GroupID 9 or 10.
:::

## Syntax

```
Upgrade-Group
-SQLServer <string>
-Database <string>
-SQLUserName <string>
-Password <string>
-GroupIDVersion <int>
[-SearchContainer <List[string]>]
[-SearchContainerScopeList <List[int]>]
[-Identity <List[string]>]
[-GroupType <List[int]>]
[-KeepUserHistory]
[-ExtensionDataAttributes <List[string]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- SQLServer
- Database
- SQLUserName
- Password
- GroupIDVersion

Example 1:

The following command upgrades a GroupID 10.0 Smart Group _GIDSmart1_ using the database _GroupID10_
that resides on SQL Server _sqlexpress_. To upgrade the Smart Group to Directory Manager 11.0, the
command uses the _sa_ user account of the specified SQL Server.

```
Upgrade-Group -Identity "GIDsmart1" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "2"
```

Example 2:

The following command upgrades all GroupID 10.0 Smart Groups in the _Jobs_ container using the
_GroupID10_ database that resides on SQL Server _sqlexpress_. To upgrade the Smart Groups to
Directory Manager 11.0, the command uses the _sa_ user account of the specified SQL Server.

```
Upgrade-Group -SearchContainer "OU=Jobs,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "2"

```

Example 3:

The following command upgrades all GroupID 10.0 Dynasties in the _Jobs_ container using the
_GroupID10_ database that resides on SQL Server _sqlexpress_. To upgrade the Dynasties to Directory
Manager 11.0, the command uses the _sa_ user account of the specified SQL Server.

```
Upgrade-Group -SearchContainer "OU=Jobs,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "3"

```

Example 4:

The following command upgrades non-managed groups in the _GID10_ container using the _GroupID10_
database that resides on SQL Server _sqlexpress_. To upgrade the non-managed groups to Directory
Manager 11.0, the command uses the _sa_ user account of the specified SQL Server.

```
Upgrade-Group -Identity "departsales" -SearchContainer "OU=GID10,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "1"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Smart Group Cmdlets in Directory Manager](/docs/directorymanager/11.0/managementshell/smartgroup/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
