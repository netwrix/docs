---
title: "Transfer-DirectReports"
description: "Transfer-DirectReports"
sidebar_position: 50
---

# Transfer-DirectReports

Use the **Transfer-DirectReports** commandlet to transfer direct report(s) in the connected identity
store. Specify manager who will approve this transfer.

NOTE: You can perform this function in directory as per your role and permissions.

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

Example

The following command transfers two direct reports to Manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
