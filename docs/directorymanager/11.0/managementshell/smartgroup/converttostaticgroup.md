---
title: "ConvertTo-StaticGroup"
description: "ConvertTo-StaticGroup"
sidebar_position: 10
---

# ConvertTo-StaticGroup

The **ConvertTo-StaticGroup** commandlet converts an existing Smart Group or a dynasty to a static
group by removing the attributes of the Smart Group or the dynasty.

## Syntax

```
ConvertTo-StaticGroup
-IdentityStoreName <string>
[-GroupName <string[]>]
[-SearchContainers <string[]>]
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

The following commandlets converts a Smart Group in AdStore9 identity store Smart_Training to a
static group.

```
ConvertTo-StaticGroup -IdentityStoreName AdStore9 -GroupName "Smart_Training" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Smart Group Commands](/docs/directorymanager/11.0/managementshell/smartgroup/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
