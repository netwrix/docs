---
title: "Get-SchemaAttributes"
description: "Get-SchemaAttributes"
sidebar_position: 100
---

# Get-SchemaAttributes

The commandlet **Get-SchemaAttribute** enables you to retrieve comprehensive list of schema
attributes available for an identity store.

This cmdlet can be used to enlist the names of schema attributes required for various cmdlets like
cmdlets related to identity store roles etc.

## Syntax

```
Get-SchemaAttributes
[-IdentityStoreName] <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example:

This example retrieves a list of available schema attributes in alphabetical order for the AdStore9
identity store.

```
Get-SchemaAttributes -IdentityStoreName AdStore9
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
