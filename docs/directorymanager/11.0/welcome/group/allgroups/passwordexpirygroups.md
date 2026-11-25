---
title: "View Password Expiry Groups in Directory Manager"
description: "Learn how Password Expiry Groups notify users of approaching password expiry, and filter the list of these groups."
keywords:
  - Password Expiry Groups
  - password expiry policy
  - Query Designer
  - PWDLASTSET
  - Password Expiry Group Grid Filters
sidebar_position: 80
---

# View Password Expiry Groups in Directory Manager

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry
policy for the group. Based on this policy and the users' **PWDLASTSET** attribute, the Directory
Manager portal creates this group with users whose passwords expire soon.

You can [Modify Search Directory](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#modify-search-directory) to search password expiry groups and
add [Filter All Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#filter-all-groups) by clicking **Password Expiry Group Grid Filters**.
All the password expiry groups matching the filters appear.

**See Also**

- [View and Manage All Groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md)
- [Create groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [How Group Expiry Works in Directory Manager](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupexpiry.md)
- [Join or Leave a Group in Directory Manager](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md)
- [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [Work with Groups in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
