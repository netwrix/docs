---
title: "Clear-Notifications"
description: "Clear-Notifications"
sidebar_position: 20
---

# Clear-Notifications

The commandlet **Clear-Notifications** removes notifications settings from an identity store. The
notifications settings can be removed individually or in sets.

## Syntax

```
Clear-Notifications
-IdentityStoreName <string>
[-PrimaryRecepients]
[-CarbonCopy]
[-NotifyLoggedInUsers]
[-NotifyOwners]
[-NotifyModifiedObject]
[-NotifyPublicGroupOwner]
[-NotifyAddedMembers]
[-PasswordPortalUrl]
[-NotifyUserGroupJoinML]
[-NotifyUserGroupLeaveML]
[-XDaysBeforeLeaveNotificationML]
[-NotifyUserGroupJoinMB]
[-NotifyUserGroupLeaveMB]
[-XDaysBeforeLeaveNotificationMB]
[<CommonParameters>]
Clear-Notifications
-IdentityStoreName <string>
[-ClearSet {All | Recipients | PasswordExpiry | ML | MB}]
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example individually removes the Membership Lifecycle notification option – X days before user
is going to leave the group for the AdStore9 identity store.

```
Clear-Notifications -IdentityStoreName AdStore9 -NotifyLoggedInUsers –XdaysBeforeLeaveNotificationML 10
```

Example 2:

This example removes recipients in sets mentioned under the Recipients section on the Notification
page of AdStore9 identity store properties.

```
Clear-Notifications -IdentityStoreName AdStore9 -ClearSet Recipients
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
