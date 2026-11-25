---
title: "How Group Deletion Works in Directory Manager"
description: "Learn how physical and logical group deletion differ in Directory Manager, and how the Group Life Cycle job deletes expired groups and notifies owners."
keywords:
  - group deletion
  - physical deletion
  - logical deletion
  - Group Life Cycle job
  - deleted groups
sidebar_position: 60
---

# How Group Deletion Works in Directory Manager

In Directory Manager, groups can be deleted in the following ways:

- Physical deletion
- Logical deletion

## Physical Deletion

When you manually delete a group using the **Delete** button on the toolbar, the group is physically deleted. However:

- A group with a valid expiry policy isn't deleted.
- A group without an expiry policy is physically deleted.

    Directory groups that are created outside of Directory Manager don't have an expiry policy.

    In Directory Manager, you can't distinguish groups with an expiry policy from groups without an
    expiry policy because groups without an expiry policy are displayed with "Never Expire" set as
    policy.

When you use the **Expire** button on the toolbar to expire a group with a "Never Expire"
policy, the portal physically deletes it.

Physically deleted groups aren't available in the portal anymore.

To renew a physically deleted group, contact your Directory Manager administrator.

## Logical Deletion

Groups that are deleted by the Group Life Cycle job are considered to be logically deleted. This job
deletes expired groups automatically based on the Group Life Cycle policy for the identity store.

Logically deleted groups are moved to the
[View My Deleted Groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/mygroups/mydeletedgroups.md) page with
the "Deleted\_" prefix added to their names. Such groups have all their attributes intact. As a
result, a logically deleted group, when renewed, returns to the state it had at the time of
deletion.

See the
[What Happens When a Group is Deleted](/docs/directorymanager/11.0/signin/identitystore/configure/groupexpirydeletion.md#what-happens-when-a-group-is-deleted)
topic for additional information on group deletion.

## Group Deletion Notifications

The Group Life Cycle job also notifies the owner or, if there is no owner, the default approver
specified in the Group Life Cycle policy for the identity store. The job doesn't delete a group
that neither has an owner nor a default approver.

Deleted groups are locked for further operations until renewed.

**See Also**

- [Work with Groups in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
- [ Group Expiry and Deletion in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/configure/groupexpirydeletion.md)
- [Manage Group Lifecycle Settings in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md)
