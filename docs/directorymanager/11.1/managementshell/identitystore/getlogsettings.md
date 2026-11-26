---
title: "Get-LogSettings Cmdlet in Directory Manager"
description: "View the file and Windows logging levels of a Directory Manager client deployment with the Get-LogSettings cmdlet."
keywords:
  - Get-LogSettings
  - log settings
  - client deployment
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 80
---

# Get-LogSettings Cmdlet in Directory Manager

Use the Get-LogSettings cmdlet to view the log settings of a Directory Manager client deployment. The cmdlet returns the file logging level (FileLogging) and the Windows logging level (WindowsLogging).

## Syntax

```
Get-LogSettings
[-ClientName] <String>
[-DeploymentName] <String>
[<CommonParameters>]
```

## Required Parameters

- ClientName
- DeploymentName

To list clients and their deployments, run the [Get-Client](/docs/directorymanager/11.1/managementshell/identitystore/getclient.md) cmdlet with the LoadDeployments parameter.

## Example

This example retrieves the file and Windows logging levels of a deployment of the Admin Center client. Replace `<deployment name>` with the name of the deployment.

```
Get-LogSettings -ClientName 'Admin Center' -DeploymentName '<deployment name>'
```
