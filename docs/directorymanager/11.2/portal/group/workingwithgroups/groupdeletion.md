---
title: "How Group Deletion Works in Directory Manager"
description: "Learn how physical and logical group deletion differ in Directory Manager, and how the Group Life Cycle job deletes expired groups."
keywords:
  - group deletion
  - physical deletion
  - logical deletion
  - Group Life Cycle job
  - deleted groups
sidebar_position: 60
---

# How Group Deletion Works in Directory Manager

Directory Manager deletes groups in two ways: physical deletion and logical deletion.

## Physical deletion

A group is physically deleted when you delete it manually with the **Delete** button on the toolbar. The result depends on the group's expiry policy:

- A group with a valid expiry policy isn't deleted.
- A group without an expiry policy is physically deleted.

Directory groups that are created outside of Directory Manager don't have an expiry policy. In Directory Manager, you can't tell groups with an expiry policy from groups without one. Groups without an expiry policy are displayed with "Never Expire" set as the policy.

When you use the **Expire** button on the toolbar to expire a group with a "Never Expire" policy, the portal physically deletes it.

Physically deleted groups aren't available in the portal anymore. To renew a physically deleted group, contact your Directory Manager administrator.

## Logical deletion

The Group Life Cycle job logically deletes groups. This job deletes expired groups automatically based on the Group Life Cycle policy for the identity store.

Logically deleted groups are moved to the [View My Deleted Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/mygroups/mydeletedgroups.md) page with the "Deleted\_" prefix added to their names. These groups keep all their attributes. As a result, a logically deleted group, when renewed, returns to the state it had at the time of deletion.

For more information, see the
[What Happens When a Group is Deleted](/docs/directorymanager/11.2/admincenter/identitystore/configure/groupexpirydeletion.md#what-happens-when-a-group-is-deleted)
topic.

## Group deletion notifications

The Group Life Cycle job also notifies the owner. If there is no owner, it notifies the default approver specified in the Group Life Cycle policy for the identity store. The job doesn't delete a group that has neither an owner nor a default approver.

Deleted groups are locked for further operations until renewed.
