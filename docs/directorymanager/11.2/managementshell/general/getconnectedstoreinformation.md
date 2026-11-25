---
title: "Get-ConnectedStoreInformation Cmdlet"
description: "Display the connected identity store name, last Elasticsearch replication time, and configured messaging servers."
keywords:
  - Get-ConnectedStoreInformation
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 20
---

# Get-ConnectedStoreInformation Cmdlet

Use the Get-ConnectedStoreInformation cmdlet to retrieve information about the identity store connected to the current instance of the Management Shell.

## Syntax

```
Get-ConnectedStoreInformation
[<CommonParameters>]
```

## Required Parameter

- None

## Example

This command displays three items:

- The name of the connected identity store
- The last replication time to Elasticsearch
- The messaging servers configured in the connected identity store

```
Get-ConnectedStoreInformation
```
