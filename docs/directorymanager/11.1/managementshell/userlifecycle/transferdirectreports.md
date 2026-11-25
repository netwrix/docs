---
title: "Transfer-DirectReports Cmdlet"
description: "Transfer direct reports to a new manager in the connected identity store with the Transfer-DirectReports cmdlet in Directory Manager."
keywords:
  - Transfer-DirectReports
  - direct reports
  - user lifecycle
  - Directory Manager Management Shell
sidebar_position: 50
---

# Transfer-DirectReports Cmdlet

Use the Transfer-DirectReports cmdlet to transfer direct reports in the connected identity
store. Specify the manager who will approve this transfer.

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

The following command transfers two direct reports to manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```
