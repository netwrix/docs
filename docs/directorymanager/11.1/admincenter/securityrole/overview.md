---
title: "Security Roles"
description: "Security Roles"
sidebar_position: 40
---

# Security Roles

Security roles enable you to control access to Directory Manager and the directory. An identity
store in Directory Manager has the following built-in roles that you can assign to users:

- **Administrator:** By default, this role has permissions on all functions that can be performed in
  an identity store.
- **Helpdesk:** This role is available for helpdesk users, who can reset identity store account
  passwords and unlock identity store accounts on behalf of other users. Admin Center for this role,
  by default, is available in the Helpdesk mode only.

    :::note
    The Helpdesk role is not available by default for a Microsoft Entra ID identity store.
    :::


- **User:** This role can be assigned to standard users, who can create new groups, manage their
  groups, update their directory profiles, and manage their direct reports.

These roles are highly customizable. You can modify their display name, priority level, permissions,
policies, and more. If the built-in roles do not meet your specific needs, you can create custom
security roles. See the [Manage Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/manage.md) and [Create a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/create.md)
topics for additional information.

**View security role info**

To view information about a security role, see the
[View Security Roles](manage.md#view-security-roles) topic.

**User policies and permissions**

Settings defined for an identity store apply to all users while role-based permissions and policies
only apply to members of a role. See the
[Configure an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/configure/configure.md)topic for additional information.

## Assign Distinct Roles to a User in Directory Manager Clients

You can assign different roles to a user in different Directory Manager clients. For example, a user
can have the administrator role in Directory Manager Management Shell and the role of a standard
user in a Directory Manager portal. This flexibility is built into security roles using client-based
criteria. See the [Security Role – Criteria](/docs/directorymanager/11.1/admincenter/securityrole/criteria.md) topic.

Directory Manager clients include:

- Admin Center
- All Directory Manager portals created using Admin Center
- Directory Manager Management Shell

Consider the following scenario:

- For the Administrator role, you allow role members to access one Directory Manager client:
  Directory Manager Management Shell. User A is a member of the Administrator role, so it gets
  access to Management Shell as an admin. User A cannot access any other Directory Manager client.
- For the User role, you allow role members to access the Directory Manager portal only. User A is a
  member of the User role, so it gets access to the portal as a standard user.

As a result, User A has two different roles in two Directory Manager clients.

Not only that, a user can also have multiple roles in a Directory Manager client, in which case role
priority is used to determine the access level of the user on the specific client. See
[Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).

To view the highest priority role of a user with respect to a Directory Manager client, see the
[Check the Roles of a User](/docs/directorymanager/11.1/admincenter/securityrole/checkrole.md) topic.
