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

The ConvertTo-StaticGroup cmdlet converts an existing Smart Group or Dynasty to a static group. It removes the Smart Group or Dynasty attributes.

## Syntax

```
ConvertTo-StaticGroup
[-GroupName <string[]>]
[-SearchContainers <string[]>]
[<CommonParameters>]
```

## Required parameter

None. However, you must specify `-GroupName`, `-SearchContainers`, or both. The cmdlet acts on the connected identity store.

:::warning
If you specify only `-SearchContainers`, the cmdlet converts every Smart Group, Dynasty, and Password Expiry group in those containers without asking for confirmation.
:::

The cmdlet reports each group it converts and the total number of converted groups.

## Examples

### Example 1

This cmdlet converts the Smart Group Smart_Training in the connected identity store to a static group.

```
ConvertTo-StaticGroup -GroupName "Smart_Training" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US"
```
