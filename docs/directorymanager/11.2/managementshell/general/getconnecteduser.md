---
title: "Get-ConnectedUser Cmdlet"
description: "Show the display name, lock status, identity store, roles, and ObjectGuid of the user connected to Management Shell."
keywords:
  - Get-ConnectedUser
  - connected user
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 30
---

# Get-ConnectedUser Cmdlet

Use the Get-ConnectedUser cmdlet to retrieve general information about the user connected to the current instance of the Management Shell.

## Syntax

```
Get-ConnectedUser
[<CommonParameters>]
```

## Required Parameter

- None

## Example

This command displays these details about the connected user:

- Display name
- Account locked information
- Identity store name
- Role names
- ObjectGuid

```
Get-ConnectedUser
```
