---
title: "Restore or Delete Groups in the Directory Manager Recycle Bin"
description: "Learn how Directory Manager handles physically and logically deleted groups, and how to filter, restore, or permanently delete them."
keywords:
  - Recycle Bin
  - deleted groups
  - tombstone groups
  - restore group
  - Group Lifecycle job
sidebar_position: 60
---

# Restore or Delete Groups in the Directory Manager Recycle Bin

The Directory Manager portal handles group deletion as either physical or logical. You can filter deleted groups in the Recycle Bin, restore them, or delete them permanently.

## Deletion types

### Tombstone groups

Physically deleted groups have Tombstone as their type. Physical group deletion refers to manually deleting groups with the **Delete** option on the **Actions** menu or shortcut menu.

Directory Manager moves a physically deleted group to the Recycle Bin and strips it of most of its properties. You can delete or restore a group from the Recycle Bin. Restoring a group returns it to its original container. It also reinstates the home container for the group, if deleted.

When restored, a physically deleted group has limited attributes. Its membership isn't restored.

A Smart Group and Dynasty is restored as a static group with no members and no query.

:::note
Tombstone groups aren't available in Microsoft Entra ID.
:::

### Logically deleted groups

Groups that the Group Lifecycle job deletes are considered logically deleted. The job deletes expired groups X number of days after group expiry, as specified in Group Lifecycle policy settings.

Upon deletion, Directory Manager moves logically deleted groups to the Recycle Bin with all their attributes intact. A logically deleted group, when restored, returns to the state it had at the time of deletion. Restoring a group returns it to the container it was deleted from. It also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, which makes it physically deleted. Select the required group and select **Delete** on the shortcut menu.

### Deletion notifications

When the Group Lifecycle job deletes a group, it notifies the group owners. If there is no owner, it notifies the default approver specified in the Group Lifecycle policy.

## Modify the search directory

You can modify the search results in **Modify Search Directory**. Select the entire directory or a domain to search for deleted groups.

## Filter deleted groups

You can add filters while searching for specific deleted groups among **Tombstone** or **Logically Deleted Groups**.

1. Click **Add Filter** to specify a criterion for filtering deleted groups.
2. From the **Select a Filter** list, select the attribute to filter deleted groups.

   Two more boxes appear next to the **Select a Filter** box.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

3. Click **Apply Filter**.

   Deleted groups that match the specified criterion appear.

4. To add more filters, click **Add Filter**.
5. To undo the filters, click **Reset Filter**. This removes all the criteria set before.

## Delete a group from the Recycle Bin

To delete a group from the Recycle Bin:

1. In the Directory Manager portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Delete** on the shortcut menu.

The selected groups are permanently deleted from the Recycle Bin.

## Restore a deleted group

To restore a deleted group:

1. In the Directory Manager portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Restore** on the shortcut menu.

The selected groups are restored in the directory.

:::note
You can only restore a physically deleted group from the Recycle Bin if the service account for the connected identity store has the 'Reanimate Tombstone' permissions.
:::

:::note
While Elasticsearch handles all searches in Directory Manager, the Recycle Bin is an exception, as it fetches data from the directory.
:::

:::note
The Recycle Bin doesn't display data for a Microsoft Entra ID based identity store.
:::
