---
title: "Groups"
description: "Groups"
sidebar_position: 10
---

# Groups

Using GroupID portal, you can create:

- An unmanaged group or a static group.

    - A static group is a group you would normally create in a directory (for example, by using the
      Active Directory Users and Computers snap-in). Though such groups can be created using GroupID
      portal, GroupID does not support dynamic updates to them. Any changes to the membership have
      to be updated manually.

- A managed group or a Smart Group or a Dynasty.

    - A Smart Group (normal Smart Group and Smart Group with a password expiry condition)

        A Smart Group is one that dynamically maintains its membership based on rules. These rules
        are applied in the form of a user-defined query, such as an LDAP query. This query is
        defined once and scheduled for membership update using a Smart Group Update job. When the
        Smart Group update job runs, it applies the defined rules to update the group's memberships.

        In this way, Smart Groups are automatically updated whenever the directory information
        changes. This automated group management allows administrators to easily maintain large
        distribution lists and security groups without having to manually add or remove members.

    - A Dynasty is a Smart Group that creates and manages other Smart Groups using information in
      the directory. Dynasties help you manage large distribution lists by creating hierarchical
      group structures that represent your organization’s hierarchy.

**See Also**

- [Group Management](/docs/directorymanager/11.0/welcome/group/overview.md)
- [Create Active Directory Groups](/docs/directorymanager/11.0/welcome/group/create/group/group.md)
- [Create Microsoft Entra ID Groups](/docs/directorymanager/11.0/welcome/group/create/group/group_1.md)
- [Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
