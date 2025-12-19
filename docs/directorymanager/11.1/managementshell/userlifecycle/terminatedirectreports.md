---
title: "Terminate-DirectReports"
description: "Terminate-DirectReports"
sidebar_position: 40
---

# Terminate-DirectReports

Use the Terminate-DirectRreports command to terminate user(s). Specify manager of the user you want
to terminate.

:::note
You can perform this function in directory as per your role and permissions.
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

The following command terminates the specified users in the connected identity store. Their Manager
is also specified in the command who will receive notification as per the defined workflow.

```
Terminate-DirectReports -DirectReports "Irfan","Naeem" -Manager "Raja"
```
