---
title: "Clear-Notifications Cmdlet in Directory Manager"
description: "Remove notification settings from a Directory Manager identity store individually or in sets with the Clear-Notifications cmdlet."
keywords:
  - Clear-Notifications
  - notification settings
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 20
---

# Clear-Notifications Cmdlet in Directory Manager

The Clear-Notifications cmdlet removes notification settings from an identity store. You can remove
the notification settings individually or in sets.

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

This example individually removes the Membership Lifecycle notification option "X days before user
is going to leave the group" for the AdStore9 identity store.

```
Clear-Notifications -IdentityStoreName AdStore9 -NotifyLoggedInUsers –XdaysBeforeLeaveNotificationML 10
```

Example 2:

This example removes the recipients in the sets listed under the Recipients section on the
Notification page of the AdStore9 identity store properties.

```
Clear-Notifications -IdentityStoreName AdStore9 -ClearSet Recipients
```
