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

You can [Modify Search Directory](allgroups.md#modify-search-directory) to search password expiry
groups and add [Filter All Groups](allgroups.md#filter-all-groups) by clicking **Password Expiry
Group Grid Filters**. All the password expiry groups matching the filters appear.
