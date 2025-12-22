---
title: "Members page"
description: "Members page"
sidebar_position: 20
---

# Members page

You can add members to the group. You can also remove members. By default, you are a member of the
group.

- To add member(s), click **Add**. Enter a search string to locate the object to add as a group
  member, or click **Advance** to use the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing
  a search.

    The selected members get listed in the grid on the **Members** page.

- You can also add members to the group using an external file. You can also choose to import all
  members of an existing group or groups to the membership of this group.

    Click **Import** to launch the **Import Members** wizard for importing group members. See
    [Import Group Members](/docs/directorymanager/11.1/portal/group/properties/importmembers.md) for information.

- To remove an object from the members list, select it and click **Remove**.

The **Members** table displays the following information:

| Column Name  | Description |
| --- | --- |
| Type | The object type of the member object, such as user or group. |
| Display Name | The name of the member object. <br />You can view the memberships of groups that are members of this group. <br />For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group. <br />Click the plus sign (![plus](/images/directorymanager/11.1/portal/group/create/activedirectory/plus.webp)) next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here. <br />For a parent Dynasty, all child Dynasties are listed as members. <br />**NOTE:** For an expired security group and Office 365 group, the members list would be empty. |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: <ul><li>Perpetual – To make the object a permanent member of the group.</li><li>Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.</li><li>Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. <br />Example. <br />You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. <br />Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would not be added to group membership in the provider. <br />On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership in the provider. <br />After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider.</li><li>Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. <br />Example. <br />You remove Smith from Group A on May 15 for future dates, May 20-30. <br />Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. <br />On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider. <br />After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the provider.</li><li>Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.</li></ul> <br />When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. <br />**NOTE:** You cannot change the membership type when the member object is a group. |
| Beginning | Displays the beginning date of the temporary addition or removal. |
| Ending | Shows the ending date of the temporary addition or removal. |

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

After adding members, click **Next**.
