---
title: "Member Of Report for Entra ID Group"
description: "Member Of Report for Entra ID Group"
sidebar_position: 70
---

# Member Of Report for Entra ID Group

The Member Of report for a group object provides a list of all Entra Id (formerly Azure Active
Directory) groups of which the audited group is a member. This report includes a Membership Paths
table.

![Member Of report](/images/accessinformationcenter/11.6/resourceaudit/group/entraid/memberofentraid.webp)

This report is comprised of the following columns:

- Group Account – Account associated with the group
- Domain Name – Name of the domain
- Group Scope – Scope of the group object: Domain Local, Global, or Universal
- Group Target – Not applicable to Entra ID. The value will always be None.
- Membership – Type of membership the audited object has to the selected group

    - Direct – Object is specifically assigned to this group
    - Nested – Object is a member of a group which has membership in this group

- Description – Description of this group from Entra ID
- ManagedBy Name – Name of manager for the group from Entra ID

Since this report is a list of Entra ID groups, the Group Membership pane displays the group
membership, including nested groups.

![Membership Paths table](/images/accessinformationcenter/11.6/resourceaudit/group/entraid/memberofentraidtable.webp)

There is one table at the bottom displaying Membership Paths for the selected Entra ID group. It
contains all of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the audited object has to the selected group

    - Direct – Object is specifically assigned to this group
    - Nested – Object is a member of a group which has membership in this group

- Membership Path – Displays location for the audited object’s membership to the selected group,
  starts with this group and ends with the selected group

    - For Direct Membership – Path is [Group Name] > [Selected Group Name]
    - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Selected Group Name]

- Nested Level – Count of groups nested between the selected group and the audited object’s direct
  membership
