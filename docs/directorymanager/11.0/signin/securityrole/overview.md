---
title: "Security Roles"
description: "Security Roles"
sidebar_position: 40
---

# Security Roles

Security roles enable you to control access to GroupID and the directory. An identity store in
GroupID has the following built-in roles that you can assign to users:

- **Administrator:** By default, this role has permissions on all functions that can be performed in
  an identity store.
- **Helpdesk:** This role is available for helpdesk users, who can reset identity store account
  passwords and unlock identity store accounts on behalf of other users.

    NOTE: The Helpdesk role is not available by default for a Microsoft Entra ID identity store.

- **User:** This role can be assigned to standard users, who can create new groups, manage their
  groups, update their directory profiles, and manage their direct reports.

These roles are highly customizable. You can modify their display name, priority level, permissions,
policies, and more. If the built-in roles do not meet your specific needs, you can create custom
security roles.

**View security role info**

To view information about a security role, see the
[View Security Roles](/docs/directorymanager/11.0/signin/securityrole/manage.md#view-security-roles)
topic.

**User policies and permissions**

Settings defined for an identity store apply to all users while role-based permissions and policies
only apply to members of a role. See the
[Configure an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/configure.md)topic.

## Assign Distinct Roles to a User in Different GroupID Clients

You can assign different roles to a user in different GroupID clients. For example, a user can have
the administrator role in GroupID Management Shell and the role of a standard user in a GroupID
portal. This flexibility is built into security roles using client-based criteria. See the
[Security Role – Criteria](/docs/directorymanager/11.0/signin/securityrole/criteria.md)
topic.

GroupID clients include:

- Admin Center
- All GroupID portals created using Admin Center
- GroupID Management Shell
- GroupID mobile app

Consider the following scenario:

- For the Administrator role, you allow role members to access one GroupID client: GroupID
  Management Shell. User A is a member of the Administrator role, so it gets access to Management
  Shell as an admin. User A cannot access any other GroupID client.
- For the User role, you allow role members to access the GroupID portal only. User A is a member of
  the User role, so it gets access to the portal as a standard user.

As a result, User A has two different roles in two GroupID clients.

Not only that, a user can also have multiple roles in a GroupIDGroupID client, in which case role
priority is used to determine the access level of the user on the specific client. See
[Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).

To view the highest priority role of a user with respect to a GroupID client, see the
[Check the Roles of a User](/docs/directorymanager/11.0/signin/securityrole/checkrole.md)
topic.

See Also

- [Identity Stores](/docs/directorymanager/11.0/signin/identitystore/overview.md)
- [Create a Security Role](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles](/docs/directorymanager/11.0/signin/securityrole/manage.md)
