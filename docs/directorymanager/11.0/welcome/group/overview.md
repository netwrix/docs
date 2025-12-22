---
title: "Group Management"
description: "Group Management"
sidebar_position: 70
---

# Group Management

GroupID portal enables you to manage directory groups, that includes both static groups and Smart
Groups. You can:

- Create static groups, Smart Groups and Dynasties.
- Manage the type, scope, security type, and ownerships of groups.
- Manage group membership dynamically.
- Specify an expiry policy for groups. This policy defines the period for which the group remains
  active. When the period is over, the group becomes inactive and is locked for all activities.
- Groups can also be moved between domains within a single forest.

Examples of directory groups include distribution lists and security groups.

GroupID portal updates Smart Groups and Dynasties on the basis of user-defined queries. When
directory information changes, GroupID portal automatically updates the appropriate groups, thus
ensuring that groups are never out of date.

This allows administrators to easily maintain large groups without having to manually add and remove
members.

NOTE: You must [Sign In](/docs/directorymanager/11.0/welcome/login.md#sign-in) before using
it for group management.

NOTE: When two identity stores (say, ID1 and ID2) are connected to the same domain (for example,
demo1.com), then objects in demo1.com would have a distinct state in ID1 and ID2. For example, an
object’s state (such as expiry policy, Smart Group criteria, additional owners, etc.) would be
different in both identity stores.

**See Also**

- [Groups](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
