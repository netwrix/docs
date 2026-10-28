---
title: "Get-ImanamiCommand"
description: "Get-ImanamiCommand"
sidebar_position: 40
---

# Get-ImanamiCommand

Use the Get-ImanamiCommand cmdlet to retrieve basic information about Directory Manager Management
Shell commandlets and command elements.

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

## Required Parameter

- None

Example 1:

The following command shows information about all commandlets.

```
Get-ImanamiCommand
```

Example 2:

The following command gets all commandlets and command elements with the word Set in their name.

```
Get-ImanamiCommand -Name Set*
```

Example 3:

The following command gets all commandlets and command elements with the letter Y anywhere in the
verb of their name.

```
Get-ImanamiCommand -Verb *Y*
```
