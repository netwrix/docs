---
title: "Get-ImanamiCommand cmdlet"
description: "List Directory Manager Management Shell cmdlets and command elements, filtered by name, verb, or noun."
keywords:
  - Get-ImanamiCommand
  - Management Shell commands
  - cmdlet discovery
  - PowerShell cmdlet
sidebar_position: 40
---

# Get-ImanamiCommand cmdlet

The `Get-ImanamiCommand` cmdlet retrieves basic information about Directory Manager Management Shell cmdlets and command elements.

## Syntax

```
Get-ImanamiCommand
[-Name <string[]>]
[-Verb <string>]
[-Noun <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- None

## Examples

### Example 1

The following command shows information about all cmdlets.

```
Get-ImanamiCommand
```

### Example 2

The following command gets all cmdlets and command elements with the word Set in their name.

```
Get-ImanamiCommand -Name Set*
```

### Example 3

The following command gets all cmdlets and command elements with the letter Y anywhere in the verb of their name.

```
Get-ImanamiCommand -Verb *Y*
```
