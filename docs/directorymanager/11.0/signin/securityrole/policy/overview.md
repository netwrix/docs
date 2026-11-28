---
title: "Security Role Policies in GroupID"
description: "Learn which policies you can define for a security role to control what role members can do, and how policies apply to users with multiple roles."
keywords:
  - security role policies
  - role members
  - policy priority
  - multiple roles
  - GroupID policies
sidebar_position: 60
---

# Security Role Policies in GroupID

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

:::note
For users with multiple roles, the policies specified for the highest priority role apply (see
[Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md)). The _Search
policy_, _New Object policy_, and _Group Name Prefixes_ policy, however, apply with respect to all
assigned roles. For example, if different search containers are specified for two different roles of
a user, that user can search and view objects in both containers.
:::

**See Also**

- [Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Create a Security Role in GroupID](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/manage.md)
- [Group Owners Policy for Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/policy/groupowners.md)
- [Configure Group Name Prefixes in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/prefixes.md)
- [New Object Policy for Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/policy/newobject.md)
- [Configure a Search Policy for a Security Role](/docs/directorymanager/11.0/signin/securityrole/policy/search.md)
- [Authentication Policy for Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Configure a Password Policy for a Security Role ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
- [Helpdesk Policy for Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/policy/helpdesk.md)
- [Configure a Synchronize Policy for a Security Role](/docs/directorymanager/11.0/signin/securityrole/policy/synchronize.md)
- [ Configure a Query Designer Policy for a Security Role](/docs/directorymanager/11.0/signin/securityrole/policy/querydesigner.md)
