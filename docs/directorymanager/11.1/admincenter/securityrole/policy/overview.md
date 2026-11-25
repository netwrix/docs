---
title: "Security Role Policies in Directory Manager"
description: "Learn which policies you can define for a security role to control what role members can do, and how policies apply to users with multiple roles."
keywords:
  - security role policies
  - role members
  - policy priority
  - multiple roles
  - Directory Manager policies
sidebar_position: 60
---

# Security Role Policies in Directory Manager

You can define policies for security roles. Along with role permissions, these policies also control
what role members can do in Directory Manager.

You can define the following policies for a role:

- [Group Owners Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/groupowners.md)
- [Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md)
- [New Object Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/newobject.md)
- [Configure a Search Policy for a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md)
- [Authentication Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md)
- [Directory Manager Password Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md)
- [Manage Password Policy Enforcer Policies in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/overview.md)
- [Helpdesk Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md)
- [Configure a Synchronize Policy for a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/policy/synchronize.md)
- [Membership Object Type Enforcement Policy in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/membershipobjecttypeenforcement.md)

:::note
For users with multiple roles, the policies specified for the highest priority role apply (see
[Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md)). The _[Configure a Search Policy for a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md)_, _[New Object Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/newobject.md)_,
and _[Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md)_ policy,
however, apply with respect to all assigned roles. For example, if different search containers are
specified for two different roles of a user, that user can search and view objects in both
containers. See the following topics for additional information on security roles:
:::


- [Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/overview.md)
- [Create a Security Role in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/create.md)
- [Manage Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/manage.md)
