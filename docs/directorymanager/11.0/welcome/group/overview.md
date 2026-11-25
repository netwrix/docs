---
title: "Manage Groups in the Directory Manager Portal"
description: "Learn how the Directory Manager portal manages static groups, Smart Groups, and Dynasties, including ownership, expiry, and dynamic membership."
keywords:
  - group management
  - Smart Groups
  - Dynasties
  - group expiry policy
  - dynamic membership
sidebar_position: 70
---

# Manage Groups in the Directory Manager Portal

Use the Directory Manager portal to manage directory groups, which include both static groups and
Smart Groups. You can:

- Create static groups, Smart Groups and Dynasties.
- Manage the type, scope, security type, and ownerships of groups.
- Manage group membership dynamically.
- Specify an expiry policy for groups. This policy defines the period for which the group remains
  active. When the period is over, the group becomes inactive and is locked for all activities.
- Move groups between domains within a single forest.

Examples of directory groups include distribution lists and security groups.

The Directory Manager portal updates Smart Groups and Dynasties on the basis of user-defined
queries. When directory information changes, the portal automatically updates the appropriate
groups, so groups are never out of date.

This lets administrators maintain large groups without having to manually add and remove members.

:::note
You must [Sign In](/docs/directorymanager/11.0/welcome/login.md#sign-in) before you use it
for group management.
:::

:::note
When two identity stores (ID1 and ID2) are connected to the same domain (for example,
demo1.com), objects in demo1.com have a distinct state in ID1 and ID2. For example, an object's
state (such as expiry policy, Smart Group criteria, and additional owners) is different in both
identity stores.
:::

**See Also**

- [Create groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [Dynasties in Directory Manager](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
