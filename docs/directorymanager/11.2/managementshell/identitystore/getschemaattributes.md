---
title: "Get-SchemaAttributes Cmdlet in Directory Manager"
description: "List the schema attributes available for an identity store, such as those required by identity store role cmdlets, with the Get-SchemaAttributes cmdlet."
keywords:
  - Get-SchemaAttributes
  - schema attributes
  - identity store roles
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 100
---

# Get-SchemaAttributes Cmdlet in Directory Manager

Use the Get-SchemaAttributes cmdlet to retrieve a list of the schema attributes available for an
identity store.

This cmdlet lists the names of schema attributes required for various cmdlets, including cmdlets
related to identity store roles.

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
