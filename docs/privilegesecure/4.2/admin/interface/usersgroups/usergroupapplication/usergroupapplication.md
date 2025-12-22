---
title: "User, Group, & Application Details Page"
description: "User, Group, & Application Details Page"
sidebar_position: 20
---

# User, Group, & Application Details Page

The User, Group, & Application Details page shows additional information on the selected user or
group. This page is opened from the link in the user or group column within the various interfaces.

![Users and Groups Details page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/usersgroupsdetailspage.webp)

The page has the following features:

- Name — Name of the selected user or group
- User Name — Displays the sAMAccountName for the account
- Active Sessions — Displays the number of active sessions for the user or group
- Scheduled Sessions — Displays the number of scheduled sessions for the user or group
- Lock Account — Indicates if the account is not locked. Click the button to lock the account.
  Accounts can also be locked from the Active Dashboard. An account can also become locked if there
  are five incorrect login attempts from the user.
- Unlock Account — Indicates if the account is locked. When the account is locked, the user will not
  be able to create a session. Click the button to unlock the account.
- Reset MFA — Click the button to force the user to reset MFA for Privilege Secure login. Resetting
  the user's MFA will generate a new TOTP secret for the user to register an authenticator. See
  [Reset User MFA](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/resetmfa.md) topic for additional information.

    :::note
    This button will not be visible if the present user has their Authentication Connector
    set to Not Required
    :::


The content within the tabs change based on the type of object. See the following topics for
additional information:

- User Details:

    - [Sessions Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/sessions.md)
    - [Policies Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/policies/policies.md)
    - [Local Rights Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/localrights.md)
    - [History Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/history.md)
    - [Authentication Connector Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/authenticationconnector.md)
    - [User Roles Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/userroles.md)

- Group Details:

    - [Sessions Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/sessions.md)
    - [Members Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/members.md)
    - [Policies Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/policies/policies.md)
    - [History Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/history.md)
    - [Authentication Connector Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/authenticationconnector.md)
    - [Group Roles Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/grouproles.md)

- Application Details:

    - [Sessions Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/sessions.md)
    - [Policies Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/policies/policies.md)
    - [History Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/history.md)
    - [Authentication Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/authentication.md)
    - [Properties Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/properties.md)
