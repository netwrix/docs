---
title: "My Groups"
description: "My Groups"
sidebar_position: 50
---

# My Groups

To view and manage the groups that you own in the identity store, click **Groups** on the left
navigation pane and select **My Groups**. This page lists all your active groups:

- [My Memberships](/docs/directorymanager/11.1/portal/group/mygroups/mymemberships.md)
- [My Expired Groups](/docs/directorymanager/11.1/portal/group/mygroups/myexpiredgroups.md)
- [My Expiring Groups](/docs/directorymanager/11.1/portal/group/mygroups/myexpiringgroups.md)
- [My Deleted Groups](/docs/directorymanager/11.1/portal/group/mygroups/mydeletedgroups.md)
- [My Smart Groups](/docs/directorymanager/11.1/portal/group/mygroups/mysmartgroups.md)
- [My Dynasties](/docs/directorymanager/11.1/portal/group/mygroups/mydynasties.md)
- [My Teams](/docs/directorymanager/11.1/portal/group/mygroups/myteams.md) (for Microsoft Entra ID based identity store)

By default, the **My Groups** tab displays the groups that you are the primary owner for. To include
the groups for which you are an additional owner, select the **Display additional group ownership in
My Groups** check box on the [Portal Settings](/docs/directorymanager/11.1/portal/generalfeatures/portal.md) panel. This tab lists active
groups only; expired and deleted groups are not displayed.

You can [Modify Search Directory](/docs/directorymanager/11.1/portal/group/allgroups/allgroups.md#modify-search-directory) to search your groups and
add [Filter All Groups](/docs/directorymanager/11.1/portal/group/allgroups/allgroups.md#filter-all-groups)by clicking **My Groups Grid Filters**. All
your groups matching the filters will be displayed.

**You can:**

- Manually update the membership of a Smart Group using the **Update** command. You can also view
  update details on **Processing Object (s)** wizard. Click **OK** once done. If you click
  **Background**, the update runs in the background and will show in the **Background Tasks** tab.
- View and modify the [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) of a group.
- Manually expire your groups. After expiring the group, it will be listed in **My Expired Groups**
  list.
- Select a smart group and click **Renew** on the toolbar; this re-applies the expiry policy of the
  group starting from today, thus renewing the group.
- Join a group as a [Join a group temporarily](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupjoinleave.md#join-a-group-temporarily) or
  [Join a group permanently](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupjoinleave.md#join-a-group-permanently)
- Leave a group’s membership
  [Leave a group temporarily](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupjoinleave.md#leave-a-group-temporarily) or
  [Leave a group permanently](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupjoinleave.md#leave-a-group-permanently).
- Join / leave a group
  [Join or leave a group on behalf of a direct report or peer](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupjoinleave.md#join-or-leave-a-group-on-behalf-of-a-direct-report-or-peer)a
  direct report or peer.
- To Join/Leave the group, you can also click on **Want to write reason to group owner?** and state
  the the reason for joining or leaving the group for the group owner.
- Update the security type of your group using **Set Security Type** option. You can select one of
  the following security types:

    - Public
    - Semi Private
    - Private

- Select a group and click **Move Group** from the toolbar. You can specify a new container from
  **Select Container** box where you want to move the group.
- Select a group and click **Add to Contacts** on the toolbar to add a group’s email to your email
  contact list using the vCard. The portal creates the group's vCard and prompts you to save it on
  your machine. You can then use it to add the group's email address to your email contact list.
- Click **Add to Group** to add the group into the membership of another group
  ([Add a group to the membership of another group (nesting)](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupmembershipfunction.md#add-a-group-to-the-membership-of-another-group-nesting)).
- Select a group and click **Send Email** on the toolbar to send an email to the group. This
  launches the default Windows email application for sending an email to group members.
- Click **Export Results** on the toolbar to export the group list to a Microsoft Excel file.
- Update the expiration policy of your group using **Set Expiration Policy** option.
- Update owner for your group using **Set Owner** option. The drop down list displays two options:

    - **Me:** You can set yourself as the Owner
    - **Other:** You can select some other user as the owner.

- Manually [ Group Deletion](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupdeletion.md) any of your group.
- Get a list of all groups managed by s particular group (i.e., all groups for which the selected
  group is a primary or additional owner)

    Select a group and click **Managed By** on the toolbar to get a list of groups managed by the
    selected group.

- Click **Attest Group** to update smart groups and dynasties, and verify your group's attributes
  and memberships.
- In the **Results** box, select the number of search results to display on a page.

Use the page numbers under the group listing to page through all groups.

You can control the number of records to be displayed per page by modifying the **Search results per
page** setting on the [Portal Settings](/docs/directorymanager/11.1/portal/generalfeatures/portal.md) panel.

## Modify Search Directory

You can modify the search results in **Modify Search Directory.** You can select entire directory or
a domain to search active groups from.

## Transfer Ownership

You can find [Transfer Ownership](/docs/directorymanager/11.1/portal/group/transferownership.md) option on the top right corner. Transfer
Ownership enables you to:

- Assign owners to orphan groups.
- Transfer group ownership (including Exchange 2013/2016/2019 additional ownership) from one
  recipient to another.

## Filter My Groups

You can add filters in **My Group Grid Filters** while searching for specific groups.

Step 1 – Click **Add Filter** to specify a criterion for filtering groups.

Step 2 – From the **Select a Filter** list, select the attribute to filter groups.

Step 3 – Two more boxes get displayed next to **Select a Filter** box upon selecting a filter.

- **Select an Operator** from the first list.
- Specify a value for the selected operator in the second box.

Step 4 – Click **Apply Filter**.

Step 5 – All your groups that match the specified criterion are displayed.

Step 6 – You can add additional filters by clicking **Add Filter.**

Step 7 – To undo the filters, click **Reset Filter.**

It will remove all the criteria set before.
