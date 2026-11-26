---
title: "Transfer-DirectReports Cmdlet"
description: "Start the transfer of a manager's direct reports in the connected identity store with the Transfer-DirectReports cmdlet in Directory Manager."
keywords:
  - Transfer-DirectReports
  - direct reports
  - user lifecycle
  - Directory Manager Management Shell
sidebar_position: 50
---

# Transfer-DirectReports Cmdlet

Use the Transfer-DirectReports cmdlet to start the transfer of a manager's direct reports in the connected identity store. Use the `-Manager` parameter to specify the current manager of the direct reports.

:::note
You can perform this function in the directory according to your role and permissions.
:::

## Syntax

```
Transfer-DirectReports
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

**Example**

This command starts the transfer of two direct reports of manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```
