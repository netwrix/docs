---
title: "Get-ConnectedUser Cmdlet"
description: "Display the logon name, lock status, identity store, roles, and ObjectGuid of the user connected to Management Shell."
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

- None

## Example

This command displays these details about the connected user:

- Logon name
- Account locked information
- Identity store name
- Role names
- ObjectGuid

```
Get-ConnectedUser
```
