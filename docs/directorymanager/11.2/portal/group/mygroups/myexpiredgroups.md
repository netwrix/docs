---
title: "View My Expired Groups in Directory Manager"
description: "Learn what happens when a group expires and how to view and filter your expired groups on the My Expired Groups tab."
keywords:
  - My Expired Groups
  - group expiry
  - Group Lifecycle job
  - expired groups
  - Directory Manager portal
sidebar_position: 20
---

# View My Expired Groups in Directory Manager

To view your expired groups in the identity store, click **Groups** on the left navigation pane and select **My Groups**. On the My Groups page, click the **My Expired Groups** tab.

When a group expires, the following events occur:

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled. Any emails sent to the group bounce back with an expiry message.
- For an Office 365 group, its member list is backed up in the database and cleared from Office 365.
- For a security group, its member list is cleared and any permissions set for that group no longer apply. Directory Manager keeps a backup of its membership in the database.

The **My Expired Groups** page lists all groups that the Group Lifecycle job expired. When you manually expire a group that has an expiry policy other than "Never expire", the group also moves to this page.

The Group Lifecycle job logically deletes expired groups, but you can also physically delete a group. See the [How Group Deletion Works in Directory Manager](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupdeletion.md) topic for more information.

## Include groups you co-own

By default, the **My Expired Groups** tab lists the groups that you are the primary owner of. To include the groups for which you are an additional owner, select the **Display additional group ownership in My Expired Groups** checkbox on the [Configure Directory Manager Portal Settings](/docs/directorymanager/11.2/portal/generalfeatures/portal.md) panel.

## Search and filter expired groups

You can [Modify Search Directory](/docs/directorymanager/11.2/portal/group/allgroups/allgroups.md#modify-search-directory) to search expired groups. You can also add [Filter All Groups](/docs/directorymanager/11.2/portal/group/allgroups/allgroups.md#filter-all-groups) by clicking **My Expired Group Grid Filters**. All the expired groups that match the filters appear.
