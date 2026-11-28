---
title: "Directory Manager group properties: Members tab"
description: "View, add, import, export, and remove group members, and set temporary membership periods on the Members tab."
keywords:
  - "group Members tab"
  - "temporary group members"
  - "Membership Life Cycle job"
  - "export group members"
  - "Smart Group membership"
sidebar_position: 30
---

# Directory Manager group properties: Members tab

Use this tab to view or change the members of a group. By default, the primary owner is also a member of the group.

:::note
In a Microsoft Entra ID based identity store, you can add only user objects as members of an Office 365 group.
:::

**Members**

Displays a list of member objects in this group.

| Column Name  | Description |
| --- | --- |
| Type | The object type of the member object, such as user or group. |
| Display Name | The name of the member object. |
|              | You can view the memberships of groups that are members of this group. For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who receive the messages sent to the distribution group. Click the plus sign next to a member group to view its members. Group membership can be viewed up to the nth level. However, you can't modify membership of nested groups here. For a parent Dynasty, all child Dynasties are listed as members. NOTE: For an expired security group and Office 365 group, the members list is empty. |
| Membership | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: <ul><li>Perpetual – To make the object a permanent member of the group.</li><li>Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.</li><li>Addition Pending – Indicates that the object becomes a temporary member of the group at a future date. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Addition Pending'. On the beginning date, the membership type changes to 'Temporary Member'. <br />Example. You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A's membership with 'Addition Pending' as its membership type from May 15 to 19. However, Smith isn't added to group membership in the provider. <br />On May 20, Smith becomes a temporary member of Group A and the membership type changes to 'Temporary Member' from May 20 to 30. Smith is also added to group membership in the provider. <br />After May 30, Smith is removed from Group A as a member in Directory Manager and in the provider.</li><li>Removal Pending - Indicates that the object is temporarily removed from group membership at a future date. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Removal Pending'. On the beginning date, the membership type changes to 'Temporary Removed'. <br />Example. <br />You remove Smith from Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A's membership with 'Removal Pending' as membership type from May 15 to 19. <br />On May 20, Smith's membership type in Directory Manager changes to 'Temporary Removed'; lasting till May 30. However, Smith is removed from Group A's membership in the provider. <br />After May 30, Smith is added back to Group A as a permanent member in Directory Manager and in the provider.</li><li>Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.</li></ul> When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. <br />**NOTE:** You can't change the membership type when the member object is a group. |
| Beginning    | Shows the beginning date of the temporary addition or removal. |
| Ending       | Shows the ending date of the temporary addition or removal. |

:::note
Each column has an item-level filter that lets you filter records by a criterion. For example, to show objects whose display names start with D, type **D** in the box under the **Display Name** header and press Enter.
:::

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say Mondays. An object to be added to group membership for three days, Wednesday through Friday, isn't added. The job didn't run on those days to update temporary membership.

**Add**

To add members to the group, click **Add**. Enter a search string to locate the object to add as a member, or click **Advance** to search with the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md).

The selected members appear in the **Members** grid.

:::note
This button is disabled for Smart Groups and Dynasties because their membership is determined by the query set on the [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.1/portal/group/properties/smartgroup.md).
See [Schedule periodic membership updates for Smart Groups/Dynasties](/docs/directorymanager/11.1/portal/group/workingwithgroups/scheduleupdate.md#schedule-periodic-membership-updates-for-smart-groupsdynasties).
:::

**Import**

You can add members to the group from an external file. You can also import all members of an existing group or groups to the membership of this group.

Click **Import** to launch the **Import Members** wizard. See [Import group members in Directory Manager](/docs/directorymanager/11.1/portal/group/properties/importmembers.md) for instructions.

**Export**

You can export the list of members to an external file. Supported file formats are .txt, .csv, .xls, .xlsx, and .xml.

Click **Export** to launch the **Export Members** wizard and select the attributes you want to export. For instructions, see [Export group members](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupmembershipfunction.md#export-group-members).

**Remove All**

To remove all the members at once, click **Remove all**.

**Remove**

To remove an object from the members list, select it and click **Remove**.