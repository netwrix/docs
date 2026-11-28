---
title: "Security Roles in Directory Manager"
description: "Learn about the built-in Administrator, Helpdesk, and User security roles and how roles control access to Directory Manager clients."
keywords:
  - security roles
  - built-in roles
  - Helpdesk role
  - role-based access
  - Administrator role
sidebar_position: 40
---

# Security Roles in Directory Manager

Use security roles to control access to Directory Manager and the directory. An identity store in Directory Manager has the following built-in roles that you can assign to users:

- **Administrator:** By default, this role has permissions on all functions in an identity store.
- **Helpdesk:** This role is for helpdesk users, who can reset identity store account passwords and unlock identity store accounts on behalf of other users. By default, Admin Center is available to this role in Helpdesk mode only.

    :::note
    The Helpdesk role isn't available by default for a Microsoft Entra ID identity store.
    :::

- **User:** This role is for standard users, who can create new groups, manage their groups, update their directory profiles, and manage their direct reports.

You can customize these roles, including their display name, priority level, permissions, and policies. If the built-in roles don't meet your needs, you can create custom security roles. For more information, see the [Manage Security Roles in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/manage.md) and [Create a Security Role in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/create.md) topics.

**View security role info**

To view information about a security role, see the [View Security Roles](manage.md#view-security-roles) topic.

**User policies and permissions**

Settings defined for an identity store apply to all users. Role-based permissions and policies apply only to members of a role. For more information, see the [Configure an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/configure.md) topic.

## Assign distinct roles to a user in Directory Manager clients

You can assign different roles to a user in different Directory Manager clients. For example, a user can have the administrator role in Directory Manager Management Shell and the role of a standard user in a Directory Manager portal. Client-based criteria make this possible. See the [Set Security Role Criteria in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/criteria.md) topic.

Directory Manager clients include:

- Admin Center
- All Directory Manager portals created using Admin Center
- Directory Manager Management Shell

Consider the following scenario:

- For the Administrator role, you allow role members to access one Directory Manager client: Directory Manager Management Shell. User A is a member of the Administrator role, so User A gets access to Management Shell as an administrator. User A can't access any other Directory Manager client.
- For the User role, you allow role members to access the Directory Manager portal only. User A is a member of the User role, so User A gets access to the portal as a standard user.

As a result, User A has two different roles in two Directory Manager clients.

A user can also have multiple roles in a Directory Manager client. In that case, role priority determines the user's access level on that client. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md).

To view the highest priority role of a user for a Directory Manager client, see the [Check a User's Security Role in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/checkrole.md) topic.
