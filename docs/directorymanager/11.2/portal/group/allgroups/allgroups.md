---
title: "View and Manage All Groups in Directory Manager"
description: "View every group in the identity store, then update, expire, renew, join, move, or delete groups and filter the list."
keywords:
  - All Groups
  - group management
  - Set Expiration Policy
  - Transfer Ownership
  - group filters
sidebar_position: 30
---

# View and Manage All Groups in Directory Manager

This tab lists all groups defined in the identity store, including all active groups:

- [View Private Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/privategroups.md)
- [View Semi-Private Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/semiprivategroups.md)
- [View Public Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/publicgroups.md)
- [View Expired Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/allexpiredgroups.md)
- [View Expiring Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/allexpiringgroups.md)
- [View Smart Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/allsmartgroups.md)
- [View Dynasties in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/alldynasties.md)
- [View Password Expiry Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/passwordexpirygroups.md)
- [View Microsoft Teams Groups in Directory Manager](/docs/directorymanager/11.2/portal/group/allgroups/teams.md) (for Microsoft Entra ID based identity store)

Viewing all groups from the directory source may slow down the loading of groups in the view, especially when there are more than 100 groups.

## Manage groups

**You can:**

- Manually update the membership of a Smart Group using the **Update** command. You can also view update details on the **Processing Object (s)** wizard. Click **OK** when you finish.

    If you click **Background**, the update runs in the background and shows in the **Background Tasks** tab.

- View and modify the [group properties](/docs/directorymanager/11.2/portal/group/properties/overview.md) of a group.
- [Expire a group manually](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupexpiryfunction.md#expire-a-group-manually). After you expire the group, it appears in the **Expired Group** list.
- Select a Smart Group and click **Renew** on the toolbar. This re-applies the group's expiry policy starting from today, which renews the group.
- Join a group, either [temporarily](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupjoinleave.md#join-a-group-temporarily) or [permanently](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupjoinleave.md#join-a-group-permanently).

    Select **Other** to add other users to the group.

- Leave a group's membership, either [temporarily](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupjoinleave.md#leave-a-group-temporarily) or [permanently](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupjoinleave.md#leave-a-group-permanently).

    Select **Other** to remove other users from the group.

- Click **Want to write reason to group owner?** when you join or leave a group to state the reason for the group owner.
- Update the security type of a group using the **Set Security Type** option. You can select one of the following security types:

    - Public
    - Semi Private
    - Private

- Update the expiration policy of a group using the **Set Expiration Policy** option. You can select one of the following policies:

    - Never Expire
    - Expire Every 30 Days
    - Expire Every 60 Days
    - Expire Every 90 Days
    - Expire Every 120 Days
    - Expire Every 6 Months
    - Expire Every Year
    - Other

- Set the owner for a group using the **Set Owner** option. The dropdown list displays two options:

    - **Me**: You can set yourself as the owner.
    - **Other**: You can select another user as the owner.

- Physically delete a group. Select a group and click **Delete** on the toolbar.
- Click **Attest Group** to update and verify the group's attributes and memberships.
- Get a list of all groups managed by a particular group, meaning all groups for which the selected group is a primary or additional owner.

    Select a group and click **Managed By** on the toolbar to get a list of groups managed by the selected group.

- Select a group and click **Move Group** on the toolbar. In the **Select Container** box, specify the new container for the group.
- Add a group's email to your email contact list using the vCard.

    Select a group and click **Add to Contacts** on the toolbar. The portal creates the group's vCard and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list.

- Click **Add to Group** to add the group to the membership of another group. For details, see [Add a group to the membership of another group (nesting)](/docs/directorymanager/11.2/portal/group/workingwithgroups/groupmembershipfunction.md#add-a-group-to-the-membership-of-another-group-nesting).
- Select a group and click **Send Email** on the toolbar. This opens the default Windows email application to send an email to group members.
- Click **Export Results** on the toolbar to export the group list to a Microsoft Excel file.
- In the **Results** box, select the number of search results to display on a page.

Use the page numbers under the group listing to page through all groups.

You can also control the number of records displayed per page by changing the **Search results per page** setting on the [Configure Directory Manager Portal Settings](/docs/directorymanager/11.2/portal/generalfeatures/portal.md) panel.

## Modify Search Directory

You can modify the search results in **Modify Search Directory.** Select the entire directory or a domain to search active groups from.

## Transfer Ownership

The [Transfer Group Ownership in Directory Manager](/docs/directorymanager/11.2/portal/group/transferownership.md) option is in the top right corner. Transfer Ownership lets you:

- Assign owners to orphan groups.
- Transfer group ownership (including Exchange 2013/2016/2019 additional ownership) from one recipient to another.

## Filter All Groups

You can add filters in **All Group Grid Filters** while searching for specific groups.

1. Click **Add Filter** to specify a criterion for filtering groups.
2. From the **Select a Filter** list, select the attribute to filter groups. Two more boxes appear next to the **Select a Filter** box.
3. Complete the two boxes:
    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.
4. Click **Apply Filter**. All active groups that match the specified criterion appear.
5. To add more filters, click **Add Filter.**
6. To undo the filters, click **Reset Filter.** It removes all the criteria set before.
