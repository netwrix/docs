---
title: "Helpdesk"
description: "Helpdesk"
sidebar_position: 100
---

# Helpdesk

The Admin Center Helpdesk section enables administrators and helpdesk users to perform
helpdesk-specific tasks, such as:

- Unlock user accounts and reset passwords on behalf of users in an identity store.
- Notify users to enroll their accounts.
- Unenroll user accounts from identity stores.
- View users' activities, such as enrollment, authentication, account unlock, and password-related
  functions. Toast notifications and history tracking are also enabled for these actions. See the
  [Helpdesk Operations](/docs/directorymanager/11.1/admincenter/helpdesk/operation/overview.md) topic for additional information.

:::note
The Admin Center for helpdesk role is available in Helpdesk mode only. By default, only the
Helpdesk node of Admin Center is visible to the Helpdesk role members. The administrator can also
restrict access of a security role by selecting the Helpdesk Role check box on the Security Role
page. See the [Create a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/create.md) topic for additional information.
:::


## Helpdesk Permissions

A security role must have the following permissions in an identity store to perform
helpdesk-specific functions:

- Reset Any Password
- Unlock Any Account
- Unenroll

See [Password Management](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md#password-management) in the
[Security Role – Permissions](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md) topic.

## Helpdesk Policy

The administrator can define a Helpdesk policy for a user role in an identity store. This policy
mainly defines whether helpdesk role members should operate under the restricted or unrestricted
mode to perform the account unlock and reset password functions.

:::note
In unrestricted mode, helpdesk can unlock accounts and reset passwords of both enrolled and
unenrolled users. In restricted mode, helpdesk can perform these functions for enrolled users only.
:::


See the [Helpdesk Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md) topic.

## Helpdesk Analytics

The dashboard in Admin Center offers insightful information to the administrator and helpdesk on
users' activities (such as enrollment, account unlock, and password reset) in an identity store.

The dashboard displays the following helpdesk-specific cards:

- [Enrollment Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#enrollment-summary): displays the number of enrolled
  users in an identity store.
- [Auth Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#auth-summary): displays information about failed and
  successful authentication attempts for each authentication type.
- [Activity Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#activity-summary): displays a summary of users'
  activities related to password change, password reset, account unlock, and enrollment.

## Desktop Notifications

You can enable desktop notification for Directory Manager in browser settings. In this way, a user
signed into Admin Center on the respective machine will receive desktop notifications when an
end-user performs any of the following actions in the Directory Manager portal:

- Resets account password
- Changes account Password
- Unlocks Account
- Links Account
- Unlinks Account
- Enrolls account
- Authenticates with password, authentication types, or any other medium

These actions are also logged in helpdesk history. See the [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic
for additional information.
