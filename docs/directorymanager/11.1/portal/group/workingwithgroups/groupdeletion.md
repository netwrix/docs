---
title: "Group Deletion"
description: "Group Deletion"
sidebar_position: 60
---

# Group Deletion

In Directory Manager, groups can be deleted in any of the following ways:

- Physical deletion
- Logical deletion

## Physical Deletion

When you manually delete a group using the **Delete** button on the toolbar, the group is said to be
physically deleted. However,

- A group with a valid expiry policy will not be deleted.
- A group without an expiry policy will be physically deleted.

    Directory groups that are created outside of Directory Manager do not have an expiry policy.

    In Directory Manager, you cannot distinguish groups with an expiry policy from groups without an
    expiry policy because groups without an expiry policy are displayed with "Never Expire' set as
    policy.

Moreover, when you use the **Expire** button on the toolbar to expire a group with a ‘Never Expire’
policy, the portal physically deletes it.

Physically deleted groups are not available in the portal anymore.

To renew a physically deleted group, contact the Directory Manager administrator.

## Logical Deletion

Groups that are deleted by the Group Life Cycle job are considered to be logically deleted. This job
deletes expired groups automatically based on the Group Life Cycle policy for the identity store.

Logically deleted groups are moved to the [My Deleted Groups](/docs/directorymanager/11.1/portal/group/mygroups/mydeletedgroups.md) page with the
'Deleted\_' prefix added to their names. Such groups have all their attributes intact. As a result,
a logically deleted group, when renewed, returns to the state it had at the time of deletion.

See the
[What Happens When a Group is Deleted](/docs/directorymanager/11.1/admincenter/identitystore/configure/groupexpirydeletion.md#what-happens-when-a-group-is-deleted)
topic for additional information on group deletion.

## Group Deletion Notifications

The Group Life Cycle job also notifies the owner or, if there is no owner, the default approver
specified in the Group Life Cycle policy for the identity store. The job does not delete a group
that neither has an owner nor a default approver.

Deleted groups are locked for further operations until renewed.
