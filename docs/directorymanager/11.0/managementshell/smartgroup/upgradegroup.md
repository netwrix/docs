---
title: "Upgrade-Group"
description: "Upgrade-Group"
sidebar_position: 60
---

# Upgrade-Group

The **Upgrade-Group** commandlet upgrades managed (Smart Groups and Dynasties) and non-managed
Groups of GroupID 9 and 10 to GroupID 11.0 version.

NOTE: GroupID upgrades groups from the connected database to the current instance of GroupID. This
database can be an upgraded version or copied database from the previous GroupID versions i.e.
GroupID 9 and 10.

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
which resides on SQL server _sqlexpress_. To upgrade the Smart Group to GroupID 11.0 version, the
command uses _sa_ user account of the specified SQL server.

```
Upgrade-Group -Identity "GIDsmart1" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "2"
```

Example 2:

The following command upgrades all GroupID 10.0 Smart Groups in the _Jobs_ container using the
_GroupID10_ database which resides on SQL server _sqlexpress_. To upgrade the Smart Groups to
GroupID 11.0 version, the command use the _sa_ user account of the specified SQL server.

```
Upgrade-Group -SearchContainer "OU=Jobs,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "2"

```

Example 3:

The following command upgrades all GroupID 10.0 dynasties in _Jobs_ container using the _GroupID10_
database which resides on SQL server sqlexpress. To upgrade the dynasties to GroupID 11.0 version,
the command uses the _sa_ user account of the specified SQL server.

```
Upgrade-Group -SearchContainer "OU=Jobs,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "3"

```

Example 4:

The following command upgrades non managed groups in _GID10_ container using the _GroupID10_
database which resides on SQL server sqlexpress. To upgrade the non-managed groups to GroupID 11.0
version, the command uses the _sa_ user account of the specified SQL server.

```
Upgrade-Group -Identity "departsales" -SearchContainer "OU=GID10,DC=Demo1,DC=com" -SQLServer "msvr02\sqlexpress" -SQLUserName "sa" -Database "GroupID10" -Password "support123R" -GroupIDVersion "10.0" -GroupType "1"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Smart Group Commands](/docs/directorymanager/11.0/managementshell/smartgroup/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
