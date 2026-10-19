---
title: "Get-SchemaAttributes"
description: "Get-SchemaAttributes"
sidebar_position: 100
---

# Get-SchemaAttributes

Use the Get-SchemaAttribute commandlet to retrieve a comprehensive list of schema attributes
available for an identity store.

This cmdlet enlists the names of schema attributes required for various cmdlets, including
cmdlets related to identity store roles.

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
