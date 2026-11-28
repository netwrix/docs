---
title: "Group Expiry and Deletion in Directory Manager"
description: "Learn what happens when Directory Manager expires, renews, or deletes a group, and how physical and logical deletion differ."
keywords:
  - group expiry
  - group deletion
  - Recycle Bin
  - logical deletion
  - Group Life Cycle schedule
sidebar_position: 40
---

# Group Expiry and Deletion in Directory Manager

You can expire and delete groups in two ways:

- Manually, from the Directory Manager portal
- Automatically, using the Group Life Cycle schedule

## What happens when a group expires

Directory Manager expires a group in either of two ways:

- You expire the group manually from the Directory Manager portal.
- The Group Life Cycle schedule expires the group automatically, based on the expiry policy specified for that group.

What happens when a group expires depends on the identity store type and the messaging provider.

**In an Active Directory identity store with Microsoft Exchange as the messaging provider:**

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled.
- For a security group, its member list is cleared. Directory Manager keeps a backup of its membership in the database.

**In an Active Directory identity store with Office 365 as the messaging provider:**

When a distribution group is expired manually or by the Group Lifecycle job:

- The group's email address is removed in Active Directory.
- "EXPIRED\_" is added as a prefix to the group name.
- The group is removed from Office 365 when the AAD Sync schedule runs.

When you renew an expired distribution group:

- The group's email address is added in Active Directory.
- The "EXPIRED\_" prefix is removed from the group's name.
- The group is created with members in Office 365 when the AAD Sync schedule runs.

**In a Microsoft Entra ID identity store with Office 365 as the messaging provider:**

When a distribution group is expired manually or by the Group Life Cycle schedule:

- Directory Manager takes a backup of the group's membership.
- It empties the group's membership in Office 365.

  :::note
  When an Office 365 group is expired, its member list is backed up in the database and cleared from Office 365.
  :::

When you renew an expired distribution group, the group's membership is repopulated in Microsoft Entra ID and Office 365.

### Renewal of expired groups

To bring back an expired group, renew it. On renewal, the group becomes active again, and its expiry policy is re-applied to it, starting from the date of renewal.

## What happens when a group is deleted

Groups can be deleted physically or logically. Deleted groups can be viewed in the Directory Manager portal. You can distinguish physically deleted groups from logically deleted groups as follows:

- Physically deleted groups are listed under **Tombstone Groups**.
- Logically deleted groups are listed under **Logically Deleted Groups**. They also have Deleted\_ prefixed to their display names. However, groups in the Recycle Bin are displayed by their names, not their display names.

Both types are locked for further operations until restored.

:::note
Elasticsearch serves all searches in Directory Manager, except the Recycle Bin, which fetches data from the directory.
:::

:::note
The Recycle Bin doesn't display data for a Microsoft Entra ID identity store.
:::

### Physical deletion

Physical group deletion means manually deleting groups from the Directory Manager portal. Directory Manager moves a physically deleted group to the Recycle Bin and strips it of most of its properties. You can't delete a group from the Recycle Bin, but you can restore it. Restoring returns the group to its original container. It also reinstates the group's home container, if that container was deleted.

A physically deleted group is restored with limited attributes. Its membership isn't restored. Smart Groups and Dynasties are restored as static groups with no members and no query.

### Logical deletion

Groups that the Group Life Cycle schedule deletes are logically deleted. The schedule deletes expired groups a set number of days after expiry, as specified in the [Auto Delete Expired Groups](grouplifecycle.md#auto-delete-expired-groups) topic.

On deletion, Directory Manager moves logically deleted groups to the Recycle Bin with all their attributes intact. A restored logically deleted group returns to the state it had at the time of deletion. Restoring returns the group to the container it was deleted from. It also reinstates the group's home container, if that container was deleted.

You can also manually delete a logically deleted group in the Recycle Bin, which makes it physically deleted.

### Deletion notifications

When the Group Life Cycle schedule deletes a group, it notifies the group owners or, if there is no owner, the default approver. The job doesn't delete a group that has neither an owner nor a default approver. See the [Specify a Default Approver](/docs/directorymanager/11.1/admincenter/workflow/advancedsettings.md#specify-a-default-approver) topic.
