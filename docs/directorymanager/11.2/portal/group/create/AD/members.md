---
title: "Members Page in the Create Group Wizard"
description: "Add, import, and remove group members, and set temporary or permanent membership, on the Members page of the Directory Manager Create Group wizard."
keywords:
  - group members
  - temporary membership
  - Membership Life Cycle job
  - Create Group wizard
sidebar_position: 20
---

# Members Page in the Create Group Wizard

You can add and remove members of the group. By default, you are a member of the
group.

- To add members, click **Add**. Enter a search string to locate the object to add as a group
  member, or click **Advance** to use the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md) for performing
  a search.

    The selected members are listed in the grid on the **Members** page.

- You can also add members to the group using an external file. You can also choose to import all
  members of an existing group or groups to the membership of this group.

    Click **Import** to launch the **Import Members** wizard for importing group members. See
    [Import group members in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/importmembers.md) for information.

- To remove an object from the members list, select it and click **Remove**.

The **Members** table displays the following information:

| Column Name  | Description |
| --- | --- |
| Type | The object type of the member object, such as user or group. |
| Display Name | The name of the member object. <br />You can view the memberships of groups that are members of this group. <br />For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who receive the messages sent to the distribution group. <br />Click the plus sign (![Plus sign icon that expands a member group to show its members](/images/directorymanager/11.2/portal/group/create/activedirectory/plus.webp)) next to a member group to view its members. You can view group membership up to the nth level. However, you can't modify membership of nested groups here. <br />For a parent Dynasty, all child Dynasties are listed as members. <br />**NOTE:** For an expired security group and Office 365 group, the members list is empty. |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: <ul><li>Perpetual – To make the object a permanent member of the group.</li><li>Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.</li><li>Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. <br />Example. <br />You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith isn't added to group membership in the provider. <br />On May 20, Smith becomes a temporary member of Group A and the membership type changes to ‘Temporary Member’ from May 20 to 30. Smith is also added to group membership in the provider. <br />After May 30, Smith is removed from Group A as a member in Directory Manager and in the provider.</li><li>Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type changes to ‘Temporary Removed’. <br />Example. <br />You remove Smith from Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. <br />On May 20, Smith’s membership type in Directory Manager changes to ‘Temporary Removed’ and stays that way until May 30. However, Smith is removed from Group A’s membership in the provider. <br />After May 30, Smith is added back to Group A as a permanent member in Directory Manager and in the provider.</li><li>Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.</li></ul> <br />When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. <br />**NOTE:** You can't change the membership type when the member object is a group. |
| Beginning | Displays the beginning date of the temporary addition or removal. |
| Ending | Shows the ending date of the temporary addition or removal. |

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days (Wednesday through Friday), it
isn't added. This happens because the Membership Life Cycle job didn't run on those
days to update temporary membership.

After adding members, click **Next**.
