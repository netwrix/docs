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

Use the Directory Manager portal to manage directory groups, which include both static groups and Smart Groups. Examples of directory groups include distribution lists and security groups.

You can:

- Create static groups, Smart Groups, and Dynasties.
- Manage the type, scope, security type, and ownerships of groups.
- Manage group membership dynamically.
- Specify an expiry policy for groups. The policy defines the period for which the group remains active. When the period is over, the group becomes inactive and is locked for all activities.
- Move groups between domains within a single forest.

The portal updates Smart Groups and Dynasties on the basis of user-defined queries. When directory information changes, the portal automatically updates the appropriate groups, so groups are never out of date. This lets administrators maintain large groups without manually adding and removing members.

:::note
You must [Log in](/docs/directorymanager/11.2/portal/login.md#log-in) before you use it for group management.
:::

:::note
When two identity stores (ID1 and ID2) are connected to the same domain (for example, demo1.com), objects in demo1.com have a distinct state in ID1 and ID2. For example, an object's state (such as expiry policy, Smart Group criteria, and additional owners) is different in both identity stores.
:::
