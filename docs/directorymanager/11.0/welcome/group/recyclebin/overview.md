---
title: "Restore or Delete Groups in the GroupID Recycle Bin"
description: "Learn how GroupID handles physically and logically deleted groups, and how to filter, restore, or permanently delete them."
keywords:
  - Recycle Bin
  - deleted groups
  - tombstone groups
  - restore group
  - Group Lifecycle job
sidebar_position: 60
---

# Restore or Delete Groups in the GroupID Recycle Bin

The GroupID portal handles group deletion as either physical or logical.

## Tombstone Groups

Physically deleted groups have Tombstone as type. Physical group deletion refers to manually
deleting groups using the **Delete** option on the **Actions** menu or shortcut menu. GroupID
moves a physically deleted group to the Recycle Bin while stripping it of most of its properties.
You can delete or restore a group from the Recycle Bin. The restoration process not only restores
the group to its original container, but it also reinstates the home container for the group, if
deleted.

When restored, a physically deleted group is restored with limited attributes; its membership isn't
restored.

A Smart Group and Dynasty is restored as a static group with no members and no query.

:::note
Tombstone groups aren't available in Microsoft Entra ID.
:::

## Logical Deletion

Groups that the Group Lifecycle job deletes are considered logically deleted. The job
deletes expired groups X number of days after group expiry, as specified in Group Lifecycle policy
settings.

Upon deletion, logically deleted groups are moved to the Recycle Bin, with all their attributes
intact. As a result, a logically deleted group, when restored, returns to the state it had at the
time of deletion. The restoration process not only restores the group to the container from where it
was deleted, but it also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, making it physically
deleted. Select the required group and select **Delete** on the shortcut menu.

## Deletion notifications

When the Group Lifecycle job deletes a group, it notifies the group owners or, if there is no owner,
the default approver specified in the Group Lifecycle policy.

## Modify Search Directory

You can modify the search results in **Modify Search Directory**. You can select the entire directory or
a domain to search for deleted groups.

## Filter Deleted Groups

You can add filters while searching for specific deleted groups among **Tombstone** or **Logically Deleted
Groups**.

1. Click **Add Filter** to specify a criterion for filtering deleted groups.
2. From the **Select a Filter** list, select the attribute to filter deleted groups.
3. After you select a filter, two more boxes appear next to the **Select a Filter** box.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

4. Click **Apply Filter**.

    Deleted groups that match the specified criterion appear.

5. You can add additional filters by clicking **Add Filter**.
6. To undo the filters, click **Reset Filter**. This removes all the criteria set before.

## Delete a group from Recycle Bin

To delete a group from the Recycle Bin:

1. In the GroupID portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Delete** on the shortcut menu.

The selected groups are permanently deleted from the Recycle Bin.

## Restore a deleted group

To restore a deleted group:

1. In the GroupID portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Restore** on the shortcut menu.

The selected groups are restored in the directory.

:::note
You can only restore a physically deleted group from the Recycle Bin if the service account
for the connected identity store has the 'Reanimate Tombstone' permissions.
:::

:::note
While Elasticsearch handles all searches in GroupID, the Recycle Bin is
an exception, as it fetches data from the directory.
:::

:::note
The Recycle Bin doesn't display data for a Microsoft Entra ID based identity store.
:::

**See Also**

- [Create Active Directory Groups in GroupID](/docs/directorymanager/11.0/welcome/group/create/group/group.md)
- [Create an Active Directory Dynasty in GroupID](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty.md)
- [View and Edit Group Properties in GroupID](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
