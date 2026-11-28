---
title: "Directory Manager Helpdesk Overview"
description: "Learn how Admin Center Helpdesk lets administrators and helpdesk users unlock accounts, reset passwords, and manage enrollment."
keywords:
  - Directory Manager
  - Helpdesk
  - helpdesk permissions
  - helpdesk policy
  - desktop notifications
  - helpdesk analytics
sidebar_position: 100
---

# Directory Manager Helpdesk Overview

The Admin Center Helpdesk section lets administrators and helpdesk users perform helpdesk-specific tasks, such as:

- Unlock user accounts and reset passwords on behalf of users in an identity store.
- Notify users to enroll their accounts.
- Unenroll user accounts from identity stores.
- View users' activities, such as enrollment, authentication, account unlock, and password-related functions. Toast notifications and history tracking are also enabled for these actions. See the [Helpdesk Operations](/docs/directorymanager/11.1/admincenter/helpdesk/operation/overview.md) topic for additional information.

:::note
The Admin Center for the helpdesk role is available in Helpdesk mode only. By default, only the Helpdesk node of Admin Center is visible to the Helpdesk role members. The administrator can also restrict access of a security role by selecting the Helpdesk Role checkbox on the Security Role page. See the [Create a Security Role in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/create.md) topic for additional information.
:::

## Helpdesk permissions

A security role must have the following permissions in an identity store to perform helpdesk-specific functions:

- Reset Any Password
- Unlock Any Account
- Unenroll

See [Password Management](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md#password-management) in the [Security Role Permissions in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md) topic.

## Helpdesk policy

The administrator can define a Helpdesk policy for a user role in an identity store. This policy mainly defines whether helpdesk role members operate under the restricted or unrestricted mode to perform the account unlock and reset password functions.

:::note
In unrestricted mode, helpdesk can unlock accounts and reset passwords of both enrolled and unenrolled users. In restricted mode, helpdesk can perform these functions for enrolled users only.
:::

See the [Helpdesk Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md) topic.

## Helpdesk analytics

The dashboard in Admin Center offers information to the administrator and helpdesk on users' activities (such as enrollment, account unlock, and password reset) in an identity store.

The dashboard displays the following helpdesk-specific cards:

- [Enrollment Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#enrollment-summary): displays the number of enrolled users in an identity store.
- [Auth Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#auth-summary): displays information about failed and successful authentication attempts for each authentication type.
- [Activity Summary](/docs/directorymanager/11.1/admincenter/general/dashboard.md#activity-summary): displays a summary of users' activities related to password change, password reset, account unlock, and enrollment.

## Desktop notifications

You can enable desktop notifications for Directory Manager in browser settings. A user who is signed in to Admin Center on the respective machine receives desktop notifications when an end user performs any of the following actions in the Directory Manager portal:

- Resets account password
- Changes account password
- Unlocks account
- Links account
- Unlinks account
- Enrolls account
- Authenticates with password, authentication types, or any other medium

These actions are also logged in helpdesk history. See the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic for additional information.
