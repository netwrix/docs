---
title: "Transfer Ownership"
description: "Transfer Ownership"
sidebar_position: 100
---

# Transfer Ownership

The Transfer Ownership wizard provides a convenient way to:

- Assign ownership to orphan groups.
- Transfer group ownership (including Exchange 2016/2019 additional ownerships) from one recipient
  to another.

Depending on the number of groups and the amount of available bandwidth between GroupID and the
messaging system server (such as Exchange server) or directory server, this process may take several
minutes.

## Transfer the ownership of a group

1. In GroupID Portal, from the left pane, select **All Groups** or **My Groups** under **Groups**
   and select **Transfer Ownership** option on the top right corner.
2. On the **Containers** page, click **Browse** to select an organizational unit, domain, or the
   entire directory.

    Your selection determines where the wizard searches for the groups to transfer their ownership.
    The smaller the selection, the less time it takes to carry out the transfer.

    Specify whether to search for groups in sub-containers by selecting or clearing the **Include
    sub-containers** check box.

    The scope of this setting varies, depending on the container that you selected in the previous
    step. The following table explains the actual structures searched when you select the Include
    sub-containers option:

    | Selected Container  | Selecting Include sub-containers                                                         |
    | ------------------- | ---------------------------------------------------------------------------------------- |
    | Organizational Unit | Includes the Sub-organizational units in the search for required groups.                 |
    | Domain              | Includes all organizational units and their sub-trees in the search for required groups. |
    | Entire Directory    | Searches the entire forest.                                                              |

    NOTE: For Active Directory, if the search container is set to Global Catalog and Extension Data
    is not replicated to the Global Catalog, additional ownership of the groups will not be
    transferred.

3. Click **Next**.
4. On the **Existing Owner** page, select one of the following:

    1. **No Owner**: To change the ownership of groups without owner.
    2. **Selected Owner**: To change the ownership of groups managed by a owner. This option
       includes all groups for which the selected owner is the primary owner, additional owner, or
       Exchange 2013/2016/2019 additional owner. After selecting this option, click **Browse** and
       use the **Find** dialog box to select the required owner.

    Click the **Preview** button to view the list of groups that match the given criteria for
    ownership transfer.

5. Click **Next**.
6. On the **New Owner** page, click **Browse** to select a new owner using the **Find** dialog box.
7. Click **Next**.
8. The **Summary** page displays following details regarding Ownership

    1. **Existing Owner:** It will display name of the owner who owns that group. In case of the
       group has no owner, it will display **None.**
    2. **Container:** It will display the container name you selected in step 2.
    3. **Include Subcontainers:** It will say **Yes** if you have selected the **Include
       Subcontainers** checkbox and **No** otherwise.
    4. **New Owner**: It will display the name of new owner that you selected in step 6.

9. Click **Finish** to complete ownership transfer.
10. The **Transferring ownership** page displays the transfer progress. Click **Show Details** to
    view object name and status.

    The page displays the distinguished names of all groups that have been successfully processed
    and transferred to the new owner. It also displays any errors that were encountered during the
    process.

**See Also**

- [Group Ownership Functions](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupownershipfunction.md)
