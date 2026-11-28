---
title: "Remove-IdentityStore"
description: "Use the Remove-IdentityStore cmdlet to remove one or more identity stores from GroupID, including through the pipeline."
keywords:
  - Remove-IdentityStore
  - remove identity store
  - delete identity store
  - Management Shell cmdlet
sidebar_position: 140
---

# Remove-IdentityStore

The **Remove-IdentityStore** cmdlet removes an identity store from GroupID.

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

Example 1:

This example removes an identity store named DemoAzStore1.

```
Remove-IdentityStore -IdentityStoreName DemoAzStore1
```

Example 2:

This example removes the DemoGStore1 and DemoGStore2 identity stores through the pipeline operator.

```
'DemoGStore1', 'DemoGStore2' | Remove-IdentityStore
```

**See Also**

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
