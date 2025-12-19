---
title: "Security Role Policies"
description: "Security Role Policies"
sidebar_position: 60
---

# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control
what role members can do in GroupID.

You can define the following policies for a role:

- Group Owners Policy
- Group Name Prefixes Policy
- New Object Policy
- Search Policy
- Authentication Policy
- Password Policy
- Helpdesk Policy
- Synchronize Policy
- Query Designer Policy

In this way, you can create security roles with varying degrees of policy restrictions.

NOTE: For users with multiple roles, the policies specified for the highest priority role apply (see
[Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md)). The _Search
policy_, _New Object policy_, and _Group Name Prefixes_ policy, however, apply with respect to all
assigned roles. For example, if different search containers are specified for two different roles of
a user, that user can search and view objects in both containers.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Create a Security Role](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles](/docs/directorymanager/11.0/signin/securityrole/manage.md)
- [Group Owners Policy](/docs/directorymanager/11.0/signin/securityrole/policy/groupowners.md)
- [Set Group Name Prefixes](/docs/directorymanager/11.0/signin/identitystore/configure/prefixes.md)
- [New Object Policy](/docs/directorymanager/11.0/signin/securityrole/policy/newobject.md)
- [Search Policy](/docs/directorymanager/11.0/signin/securityrole/policy/search.md)
- [Authentication Policy for Security Roles](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Set a Password Policy ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
- [Helpdesk Policy](/docs/directorymanager/11.0/signin/securityrole/policy/helpdesk.md)
- [Synchronize Policy](/docs/directorymanager/11.0/signin/securityrole/policy/synchronize.md)
- [ Query Designer Policy](/docs/directorymanager/11.0/signin/securityrole/policy/querydesigner.md)
