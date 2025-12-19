---
title: "Role Policies"
description: "Security Role Policies"
sidebar_position: 60
---

# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control
what role members can do in Directory Manager.

You can define the following policies for a role:

- [Group Owners Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/groupowners.md)
- [Group Name Prefixes](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md)
- [New Object Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/newobject.md)
- [Search Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md)
- [Authentication Policy for Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md)
- [Directory Manage Password Policy ](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md)
- [Netwrix Password Policy Enforcer Policies](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/overview.md)
- [Helpdesk Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md)
- [Synchronize Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/synchronize.md)
- [Membership Object Type Enforcement Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/membershipobjecttypeenforcement.md)

:::note
For users with multiple roles, the policies specified for the highest priority role apply (see
[Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md)). The _[Search Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md)_, _[New Object Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/newobject.md)_,
and _[Group Name Prefixes](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md)_ policy,
however, apply with respect to all assigned roles. For example, if different search containers are
specified for two different roles of a user, that user can search and view objects in both
containers. See the following topics for additional information on security roles:
:::


- [Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/overview.md)
- [Create a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/create.md)
- [Manage Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/manage.md)
