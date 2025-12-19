---
title: "Password Expiry Groups"
description: "Password Expiry Groups"
sidebar_position: 80
---

# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry
policy for the group. Based on this policy and the users' **PWDLASTSET** attribute, GroupID Portal
creates this group with users whose passwords will soon expire.

You can
[Modify Search Directory](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#modify-search-directory)
to search password expiry groups and add
[Filter All Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#filter-all-groups)by
clicking **Password Expiry Group Grid Filters**. All the password expiry groups matching the filters
will be displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md)
- [Groups](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [Group Expiry](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupexpiry.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md)
- [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [Working with Groups](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
