---
title: "All Groups"
description: "All Groups"
sidebar_position: 30
---

# All Groups

This tab lists all groups defined in the identity store including all active groups:

- [Private Groups](/docs/directorymanager/11.0/welcome/group/allgroups/privategroups.md)
- [Semi Private Groups](/docs/directorymanager/11.0/welcome/group/allgroups/semiprivategroups.md)
- [Public Groups](/docs/directorymanager/11.0/welcome/group/allgroups/publicgroups.md)
- [Expired Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allexpiredgroups.md)
- [Expiring Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allexpiringgroups.md)
- [Smart Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allsmartgroups.md)
- [Dynasties](/docs/directorymanager/11.0/welcome/group/allgroups/alldynasties.md)
- [Password Expiry Groups](/docs/directorymanager/11.0/welcome/group/allgroups/passwordexpirygroups.md)
- [Teams](/docs/directorymanager/11.0/welcome/group/allgroups/teams.md) (for Microsoft Entra ID based
  identity store)

Viewing all groups from the directory source may slow down the loading of groups in the view,
especially when there are more than 100 groups.

**You can:**

- Manually update the membership of a Smart Group using the **Update** command. You can also view
  update details on **Processing Object (s)** wizard. Click **OK** once done.

    If you click **Background**, the update runs in the background and will show in the **Background
    Tasks** tab.

- View and modify the
  [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md) of a
  group.
- [Expire a group manually ](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupexpiryfunction.md#expire-a-group-manually).
  After expiring the group, it will be listed in **Expired Group** list.
- Select a smart group and click **Renew** on the toolbar; this re-applies the expiry policy of the
  group starting from today, thus renewing the group.
- Join a group as a
  [Join a group temporarily](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md#join-a-group-temporarily)
  or
  [Join a group permanently](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md#join-a-group-permanently)

    Select **Other** to add other users to the group.

- Leave a group’s membership
  [Leave a group temporarily](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md#leave-a-group-temporarily)
  or
  [Leave a group permanently](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md#leave-a-group-permanently).

    Select **Other** to remove other users from the group.

- To Join/Leave the group, you can also click on **Want to write reason to group owner?** and state
  the reason for joining or leaving the group for the group owner.
- Update the security type of a group group using **Set Security Type** option. You can select one
  of the following security types:

    - Public
    - Semi Private
    - Private

- Update the expiration policy of a group using **Set Expiration Policy** option.

    - Never Expire
    - Expire Every 30 Days
    - Expire Every 60 Days
    - Expire Every 90 Days
    - Expire Every 120 Days
    - Expire Every 6 Months
    - Expire Every Year
    - Other

- Set owner for a group using **Set Owner** option. The drop down list displays two options:

    - **Me**: You can set yourself as the Owner.
    - **Other**: You can select some other user as the Owner.

- Physically delete a group. Select a group and click **Delete** on the toolbar.
- Click **Attest Group** to update and verify group's attributes and memberships.
- Get a list of all groups managed by a particular group (i.e., all groups for which the selected
  group is a primary or additional owner).

    Select a group and click **Managed By** on the toolbar to get a list of groups managed by the
    selected group.

- Select a group and click **Move Group** from the toolbar. You can specify a new container from
  **Select Container** box where you want to move the group.
- Add a group’s email to your email contact list using the vCard.

    Select a group and click **Add to Contacts** on the toolbar. The portal creates the group's
    vCard and prompts you to save it on your machine. You can then use it to add the group's email
    address to your email contact list.

- Click **Add to Group** to add the group into the membership of another group
  ([Add a group to the membership of another group (nesting)](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupmembershipfunction.md#add-a-group-to-the-membership-of-another-group-nesting)).
- Select a group and click **Send Email** on the toolbar. This launches the default Windows email
  application for sending an email to group members.
- Click **Export Results** on the toolbar to export the group list to a Microsoft Excel file.
- In the **Results** box, select the number of search results to display on a page.

Use the page numbers under the group listing to page through all groups.

You can also control the number of records to be displayed per page by modifying the **Search
results per page** setting on the
[Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md) panel.

## Modify Search Directory

You can modify the search results in **Modify Search Directory.** You can select entire directory or
a domain to search active groups from.

## Transfer Ownership

You can find
[Transfer Ownership](/docs/directorymanager/11.0/welcome/group/transferownership.md) option
on the top right corner. Transfer Ownership enables you to:

- Assign owners to orphan groups.
- Transfer group ownership (including Exchange 2013/2016/2019 additional ownership) from one
  recipient to another.

## Filter All Groups

You can add filters in **All Group Grid Filters** while searching for specific groups.

1. Click **Add Filter** to specify a criterion for filtering groups.
2. From the **Select a Filter** list, select the attribute to filter groups.
3. Two more boxes get displayed next to **Select a Filter** box upon selecting a filter.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

4. Click **Apply Filter**.

    All active groups that match the specified criterion are displayed.

5. You can add additional filters by clicking **Add Filter.**
6. To undo the filters, click **Reset Filter.** It will remove all the criteria set before.

**See Also**

- [Groups](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [Working with Groups](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
