---
title: "Clear-Notifications cmdlet in Directory Manager"
description: "Remove notification settings from a Directory Manager identity store individually or in sets with the Clear-Notifications cmdlet."
keywords:
  - Clear-Notifications
  - notification settings
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 20
---

# Clear-Notifications cmdlet in Directory Manager

The `Clear-Notifications` cmdlet removes notification settings from an identity store. You can remove the notification settings individually or in sets.

Before you run this cmdlet, configure a messaging server with the [Set-MessagingServer](/docs/directorymanager/11.2/managementshell/identitystore/setmessagingserver.md) cmdlet and an SMTP server with the [Set-SmtpServer](/docs/directorymanager/11.2/managementshell/identitystore/setsmtpserver.md) cmdlet for the identity store.

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
[-ClearSet {All | Recepients | PasswordExpiry | ML | MB}]
[<CommonParameters>]
```

## Required parameters

- IdentityStoreName

## Examples

### Example 1

This example individually removes the option that notifies logged-in users and the Membership Lifecycle notification option "X days before user is going to leave the group" for the AdStore9 identity store. It also resets the number of days to 0.

```
Clear-Notifications -IdentityStoreName AdStore9 -NotifyLoggedInUsers -XDaysBeforeLeaveNotificationML
```

### Example 2

This example removes the recipients in the sets listed under the Recipients section on the Notification page of the AdStore9 identity store properties.

```
Clear-Notifications -IdentityStoreName AdStore9 -ClearSet Recepients
```

:::note
Enter the ClearSet value for recipients as `Recepients`, spelled as shown.
:::
