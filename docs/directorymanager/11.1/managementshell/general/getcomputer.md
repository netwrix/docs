---
title: "Get-Computer Cmdlet in Directory Manager"
description: "Retrieve information about a computer object, such as a domain controller or Exchange server, from the connected identity store."
keywords:
  - Get-Computer
  - computer object
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 10
---

# Get-Computer Cmdlet in Directory Manager

Use the Get-Computer cmdlet to retrieve information about a computer object from the connected identity store. The computer can be a domain controller, an Exchange server, or a simple client connected to the domain.

## Syntax

```
Get-Computer
[-Identity <string>]
[<CommonParameters>]
```

## Required Parameter

- None

## Example

This command retrieves the computer named _arslanahmadsvm_.

```
Get-computer -Identity arslanahmadsvm
```
