---
title: "View Expiring Groups in Directory Manager"
description: "View groups that expire within 30 days, learn how Directory Manager calculates expiry dates, and filter the list."
keywords:
  - expiring groups
  - group expiry policy
  - Group Lifecycle job
  - Expiring Group Grid Filters
sidebar_position: 50
---

# View Expiring Groups in Directory Manager

This page shows only the expiring groups in the connected identity store.

Groups that expire in 30 days or less are considered expiring groups. The expiry date is
calculated from a group’s expiry policy. The Group Lifecycle job is responsible for expiring these
groups on their respective expiry dates; however, you can also manually expire a group before it
reaches the expiry date.

You can [Modify Search Directory](allgroups.md#modify-search-directory) to search expiring groups
and add [Filter All Groups](allgroups.md#filter-all-groups) by clicking **Expiring Group Grid
Filters**. All the expiring groups matching the filters appear.
