---
title: "User, Group, & Application Details"
description: "User, Group, & Application Details"
sidebar_position: 20
---

# User, Group, & Application Details

The User, Group, & Application Details page shows additional information on the selected user or
group. This page is opened from the link in the user or group column within the various interfaces.

![Users and Groups Details page](/images/privilegesecure/26.03/accessmanagement/admin/policy/page/details/usersgroupsdetailspage.webp)

The page has the following features:

- Name — Name of the selected user or group
- Active Sessions — Displays the number of active sessions for the user or group
- Scheduled Sessions — Displays the number of scheduled sessions for the user or group
- Reset Password - Set a new password for this user.
- Lock Account — Indicates if the account isn't locked. Click the button to lock the account.
Accounts can also be locked from the Active Dashboard. An account can also become locked if there are five incorrect login attempts from the user.
- Unlock Account — Indicates if the account is locked. When the account is locked, the user is not able to create a session. Click the button to unlock the account.
- Reset MFA — Click the button to force the user to reset MFA for Privilege Secure login. Resetting
the user's MFA will generate a new TOTP secret for the user to register an authenticator. See
[Reset User MFA](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/resetmfa.md) topic for additional information.

:::note
The Reset MFA button will not be visible if the present user has their Authentication Connector
set to Not Required
:::


The content within the tabs change based on the type of object. See the following topics for
additional information:

- [Sessions Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/sessions.md)
- [Policies Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/policies/policies.md)
- [Local Rights Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/localrights.md)
- [History Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/history.md)
- [Authentication Connector Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/authenticationconnector.md)
- [User Roles Tab](/docs/privilegesecure/26.03/admin/usersgroups/usergroupapplication/userroles.md)
