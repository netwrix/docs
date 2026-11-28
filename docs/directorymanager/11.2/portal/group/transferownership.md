---
title: "Transfer Group Ownership in Directory Manager"
description: "Use the Transfer Ownership wizard to assign owners to orphan groups or move group ownership from one recipient to another."
keywords:
  - transfer ownership
  - orphan groups
  - group owner
  - additional owner
sidebar_position: 100
---

# Transfer Group Ownership in Directory Manager

The Transfer Ownership wizard lets you:

- Assign ownership to orphan groups.
- Transfer group ownership (including Exchange 2016/2019 additional ownerships) from one recipient to another.

Depending on the number of groups and the bandwidth between Directory Manager and the messaging system server (such as Exchange server) or directory server, this process can take several minutes.

## Transfer the ownership of a group

To transfer the ownership of a group:

1. In the Directory Manager portal, select **All Groups** or **My Groups** under **Groups** in the left pane, and select the **Transfer Ownership** option in the top right corner.
2. On the **Containers** page, click **Browse** to select an organizational unit, domain, or the entire directory.

   Your selection determines where the wizard searches for the groups to transfer. The smaller the selection, the less time the transfer takes.

   Select or clear the **Include sub-containers** checkbox to specify whether to search for groups in sub-containers.

   The scope of this setting varies, depending on the container that you selected in the previous step. The following table explains the structures searched when you select the Include sub-containers option:

   | Selected Container  | Selecting Include sub-containers                                                         |
   | ------------------- | ---------------------------------------------------------------------------------------- |
   | Organizational Unit | Includes the Sub-organizational units in the search for required groups.                 |
   | Domain              | Includes all organizational units and their sub-trees in the search for required groups. |
   | Entire Directory    | Searches the entire forest.                                                              |

   :::note
   For Active Directory, if the search container is set to Global Catalog and Extension Data isn't replicated to the Global Catalog, additional ownership of the groups isn't transferred.
   :::

3. Click **Next**.
4. On the **Existing Owner** page, select one of the following:

   - **No Owner**: To change the ownership of groups without an owner.
   - **Selected Owner**: To change the ownership of groups managed by an owner. This option includes all groups for which the selected owner is the primary owner, additional owner, or Exchange 2013/2016/2019 additional owner. After selecting this option, click **Browse** and use the **Find** dialog box to select the required owner.

   Click **Preview** to view the list of groups that match the given criteria for ownership transfer.

5. Click **Next**.
6. On the **New Owner** page, click **Browse** to select a new owner with the **Find** dialog box.
7. Click **Next**.
8. On the **Summary** page, review the details about the ownership transfer:

   - **Existing Owner:** The name of the owner who owns that group. If the group has no owner, it displays **None**.
   - **Container:** The name of the container you selected on the **Containers** page.
   - **Include Subcontainers:** **Yes** if you selected the **Include
     Subcontainers** checkbox and **No** otherwise.
   - **New Owner**: The name of the new owner you selected on the **New Owner** page.

9. Click **Finish** to complete the ownership transfer.
10. On the **Transferring ownership** page, watch the transfer progress. Click **Show Details** to view the object name and status.

    The page displays the distinguished names of all groups that were successfully processed and transferred to the new owner. It also displays any errors that occurred during the process.
