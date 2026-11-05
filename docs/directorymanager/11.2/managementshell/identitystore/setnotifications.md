---
title: "Set-Notifications"
description: "Set-Notifications"
sidebar_position: 190
---

# Set-Notifications

Use the Set-Notifications commandlet to modify the notification settings of an identity store.

## Syntax

```
Set-Notifications
-IdentityStoreName <string>
[-PrimaryRecepients <string[]>]
[-CarbonCopy <string[]>]
[-NotifyLoggedInUsers <bool>]
[-NotifyOwners <bool>]
[-NotifyModifiedObject <bool>]
[-NotifyPublicGroupOwner <bool>]
[-NotifyAddedMembers <bool>]
[-PasswordPortalUrl <string>]
[-NotifyUserGroupJoinML <bool>]
[-NotifyUserGroupLeaveML <bool>]
[-XDaysBeforeLeaveNotificationML <int>]
[-NotifyUserGroupJoinMB <bool>]
[-NotifyUserGroupLeaveMB <bool>]
[-XDaysBeforeLeaveNotificationMB <int>]
[<CommonParameters>]
```

## Required Parameter

- IdentitySoreName

Example 1:

This example sets the primary and carbon copy (CC) recipients of the notifications for the AdStore9
identity store. Additionally, it also sets the group owners / managers and public group owners as
the notification recipients.

```
Set-Notifications -IdentityStoreName AdStore9 -PrimaryRecepients 'euser1@pucit.local', 'euser2@pucit.local' -CarbonCopy 'exmb1@pucit.local' -NotifyOwners $true -NotifyPublicGroupOwner $true
```

Example 2:

This example configures recipients for membership lifecycle notifications i.e. it notifies the user
upon joining a group and intimates the user before 7 days it is removed as a member from the group.

```
Set-Notifications -IdentityStoreName AdStore9 -NotifyUserGroupJoinML $true -XDaysBeforeLeaveNotificationML 7
```
