---
title: "ConvertTo-StaticGroup Cmdlet"
description: "Convert a Smart Group or Dynasty to a static group in Directory Manager by removing its Smart Group or Dynasty attributes."
keywords:
  - ConvertTo-StaticGroup
  - convert Smart Group to static group
  - convert Dynasty
  - Directory Manager cmdlet
  - Management Shell
sidebar_position: 10
---

# ConvertTo-StaticGroup Cmdlet

The ConvertTo-StaticGroup cmdlet converts an existing Smart Group or a Dynasty to a static group
by removing the attributes of the Smart Group or the Dynasty.

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

The following cmdlet converts the Smart Group Smart_Training in the AdStore9 identity store to a
static group.

```
ConvertTo-StaticGroup -IdentityStoreName AdStore9 -GroupName "Smart_Training" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US"
```
