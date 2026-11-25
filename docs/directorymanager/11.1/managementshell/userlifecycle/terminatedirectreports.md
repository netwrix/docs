---
title: "Terminate-DirectReports Cmdlet for Directory Manager"
description: "Terminate the specified direct reports of a manager and send the manager a notification per the defined workflow with Terminate-DirectReports."
keywords:
  - Terminate-DirectReports
  - terminate users
  - direct reports
  - user lifecycle
  - Management Shell
sidebar_position: 40
---

# Terminate-DirectReports Cmdlet for Directory Manager

Use the Terminate-DirectReports cmdlet to terminate users. Specify the manager of the user you want
to terminate.

:::note
You can perform this function in the directory according to your role and permissions.
:::


## Syntax

```
Terminate-DirectReports 
  -DirectReports <string[]> 
  -Manager <string> 
  [-IdentityStoreId <int>] 
  [-SecurityToken <CustomClaimsPrincipal>] 
  [-Credential <pscredential>] 
  [<CommonParameters>]

```

## Required Parameters

- DirectReports
- Manager

Example:

The following command terminates the specified users in the connected identity store. The command also
specifies their manager, who receives a notification according to the defined workflow.

```
Terminate-DirectReports -DirectReports "Irfan","Naeem" -Manager "Raja"
```
