---
title: "Group Expiry and Deletion"
description: "Group Expiry and Deletion"
sidebar_position: 40
---

# Group Expiry and Deletion

Using GroupID, you can expire and delete groups in two ways:

- Manually expire and delete groups
- Automatically expire and delete groups using the Group Life Cycle schedule

## What Happens When a Group Expires

GroupID provides two ways to expire a group:

- You can manually expire a group from the GroupID portal.
- The Group Life Cycle schedule expires groups automatically based on the expiry policy specified
  for the respective group.

The following events take place when a group expires:

**In case of an Active Directory identity store with Microsoft Exchange as messaging provider:**

- The group becomes inactive and is locked for all activities.
- "EXPIRED_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled.
- For a security group, its member list is cleared. However, GroupID keeps a backup of its
  membership in the database.

**In case of an Active Directory identity store with Office 365 as messaging provider:**

The following happens when a distribution group is expired manually or via the Group Lifecycle job:

- The group’s email address is removed in Active Directory.
- "EXPIRED_" is added as a prefix to the group name.
- The group is removed from Office 365 when the AAD Sync schedule runs.

On renewing an expired distribution group, the following happens:

- The group’s email address is added in Active Directory.
- The "EXPIRED_" prefix is removed from the group’s name.
- The group is created with members in Office 365 when the AAD Sync schedule runs.

**In case of a Microsoft Entra ID identity store with Office 365 as messaging provider:**

The following happens when a distribution group is expired manually or via the Group Life Cycle
schedule:

- GroupID takes a backup of the group’s membership.
- It empties out the group’s membership in Office 365.

    NOTE: When an Office 365 group is expired, its member list is backed up in the database and
    cleared from Office 365.

On renewing an expired distribution group, the following happens:

- The group’s membership is repopulated in Microsoft Entra ID and Office 365.

### Renewal of Expired Groups

If you want an expired group back, you can renew it. On renewal, the group becomes active again and
its expiry policy is re-applied to it, starting from the date of renewal.

## What Happens When a Group is Deleted

Using GroupID, groups can be deleted physically or logically. Deleted groups can be viewed in the
GroupID portal. You can distinguish physically deleted groups from logically deleted groups as:

- Physically deleted groups are listed under _Tombstone Groups_.
- Logically deleted groups are listed under _Logically Deleted Groups_. They also have Deleted_
  prefixed to their display names. However, groups in the Recycle Bin are displayed by their names,
  not their display names.

Both types are locked for further operations until restored.

NOTE: While all searches in GroupID are catered through Elasticsearch, the Recycle Bin is an
exception; it fetches data from the directory.

NOTE: The Recycle Bin does not display data for a Microsoft Entra ID identity store.

### Physical Deletion

Physical group deletion refers to manually deleting groups from the GroupID portal. GroupID moves a
physically deleted group to the Recycle Bin while stripping it of most of its properties. You cannot
delete a group from the Recycle Bin; however, you can restore it. The restoration process not only
restores the group to its original container, but it also reinstates the home container for the
group, if deleted.

A physically deleted group is restored with limited attributes; its membership is not restored.
Smart Groups and Dynasties are restored as static groups with no members and no query.

### Logical Deletion

Groups that are deleted by the Group Life Cycle schedule are considered as logically deleted. The
schedule deletes expired groups x number of days after group expiry, as specified in the
[Auto Delete Expired Groups](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md#auto-delete-expired-groups)
topic.

On deletion, logically deleted groups are moved to the Recycle Bin with all their attributes intact.
As a result, a logically deleted group, when restored, returns to its state it had at the time of
deletion. The restoration process not only restores the group to the container from where it was
deleted but it also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, making it physically
deleted.

### Deletion Notifications

When the Group Life Cycle schedule deletes a group, it notifies the group owners or, if there is no
owner, the default approver. The job does not delete a group that neither has an owner nor a default
approver. See the
[Specify a Default Approver](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md#specify-a-default-approver)
topic.

**See Also**

- [Manage Group Lifecycle Settings](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md)
- [Group Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/grouplifecycle.md)[Specify a Default Approver](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md#specify-a-default-approver)
