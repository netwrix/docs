---
title: "Set-Notifications Cmdlet in Directory Manager"
description: "Change the notification recipients and membership lifecycle notification settings of an identity store with the Set-Notifications cmdlet."
keywords:
  - Set-Notifications
  - notification settings
  - membership lifecycle notifications
  - identity store
  - PowerShell cmdlet
sidebar_position: 190
---

# Set-Notifications Cmdlet in Directory Manager

Use the Set-Notifications cmdlet to change the notification settings of an identity store.

Before you run this cmdlet, configure a messaging server with the [Set-MessagingServer](/docs/directorymanager/11.1/managementshell/identitystore/setmessagingserver.md) cmdlet and an SMTP server with the [Set-SmtpServer](/docs/directorymanager/11.1/managementshell/identitystore/setsmtpserver.md) cmdlet for the identity store.

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

## Required parameter

- IdentityStoreName

## Example 1

This example sets the primary and carbon copy (CC) recipients of the notifications for the AdStore9 identity store. It also sets the group owners or managers and the public group owners as notification recipients.

```
Set-Notifications -IdentityStoreName AdStore9 -PrimaryRecepients 'euser1@pucit.local', 'euser2@pucit.local' -CarbonCopy 'exmb1@pucit.local' -NotifyOwners $true -NotifyPublicGroupOwner $true
```

## Example 2

This example configures recipients for membership lifecycle notifications. It notifies the user when the user joins a group, and 7 days before the user is removed from the group.

```
Set-Notifications -IdentityStoreName AdStore9 -NotifyUserGroupJoinML $true -XDaysBeforeLeaveNotificationML 7
```
