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

- IdentityStoreName

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
