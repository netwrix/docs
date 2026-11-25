---
title: "Create groups in Directory Manager"
description: "Learn about the static groups, Smart Groups, and Dynasties you can create in the Directory Manager portal."
keywords:
  - create groups
  - managed vs unmanaged groups
  - static group vs Smart Group
  - Smart Group Update job
sidebar_position: 10
---

# Create groups in Directory Manager

In the Directory Manager portal, you can create these kinds of groups:

- Unmanaged groups, which are static groups.

  - A static group is a group you normally create in a directory, for example with the Active Directory Users and Computers snap-in. You can create such groups in the Directory Manager portal, but Directory Manager doesn't support dynamic updates to them. You must update membership changes manually.

- Managed groups, which are Smart Groups or Dynasties.

  - A Smart Group, either a normal Smart Group or one with a password expiry condition, dynamically maintains its membership based on rules. The rules are a user-defined query, such as an LDAP query. You define the query once and schedule membership updates with a Smart Group Update job. When the job runs, it applies the rules to update the group's memberships.

    Smart Groups update automatically whenever the directory information changes. Administrators can maintain large distribution lists and security groups without adding or removing members manually.

  - A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the directory. Dynasties help you manage large distribution lists by creating hierarchical group structures that represent your organization's hierarchy.
