---
title: "Remove-IdentityStore"
description: "Use the Remove-IdentityStore cmdlet to remove one or more identity stores from Directory Manager, including through the pipeline."
keywords:
  - Remove-IdentityStore
  - remove identity store
  - delete identity store
  - Management Shell cmdlet
sidebar_position: 140
---

# Remove-IdentityStore

Use the Remove-IdentityStore cmdlet to remove an identity store from Directory Manager.

## Syntax

```
Remove-IdentityStore
[-IdentityStoreName] <String>
[-PassThru]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

## Parameters

- **IdentityStoreName**: The name of the identity store to remove. The alias is StoreName.
- **PassThru**: Returns the removed identity store.

:::warning
The cmdlet doesn't prompt for confirmation. It removes the identity store as soon as you run it.
:::

## Examples

### Example 1

This command removes an identity store named DemoAzStore1.

```
Remove-IdentityStore -IdentityStoreName DemoAzStore1
```

### Example 2

This command removes the DemoGStore1 and DemoGStore2 identity stores through the pipeline operator.

```
'DemoGStore1', 'DemoGStore2' | Remove-IdentityStore
```
