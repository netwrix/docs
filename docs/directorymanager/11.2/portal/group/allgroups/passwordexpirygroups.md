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

A password expiry group is a Smart Group whose members are users with identity store account passwords that are close to expiring. Directory Manager emails the members to reset their passwords. When a member resets a password, Directory Manager removes that member from the group.

On the **Password Expiry Options** tab of the Query Designer, you define the password expiry policy for the group. Based on this policy and the **PWDLASTSET** attribute of each user, the Directory Manager portal creates the group with the users whose passwords expire soon.

To search password expiry groups, [Modify Search Directory](allgroups.md#modify-search-directory). To narrow the list, click **Password Expiry Group Grid Filters** and [Filter All Groups](allgroups.md#filter-all-groups). All the password expiry groups that match the filters appear.
