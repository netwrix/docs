---
title: "Directory Manager group properties: Member Of tab"
description: "View the groups this group belongs to, and add this group to or remove it from other groups' memberships."
keywords:
  - "group Member Of tab"
  - "nested group membership"
  - "add group to another group"
  - "temporary membership types"
sidebar_position: 40
---

# Directory Manager group properties: Member Of tab

Use this tab to view the groups of which this group is a member. You can add and remove this group
from the membership of other groups.

**Member Of**

This group is a member of all groups listed in this grid.

For each group listed, you can view the display name, email, and description.

For each column in the grid, an item level filter is also available that lets you filter records
based on a particular criterion. For example, to show groups whose display names start with D, type
**D** in the box under the **Display Name** header and press Enter.

| Column Name  | Description |
| --- | --- |
| Display Name | Displays the names of the groups this user is a member of. |
| Membership   | Indicates whether the user is a temporary or permanent member of the group. <ul><li>Perpetual – To make the object a permanent member of the group. </li><li>Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.</li><li>Addition Pending – Indicates that the object becomes a temporary member of the group at a future date. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Addition Pending'. On the beginning date, the membership type changes to 'Temporary Member'. <br />Example. <br />You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A's membership with 'Addition Pending' as its membership type from May 15 to 19. However, Smith isn't added to group membership in the provider. <br />On May 20, Smith becomes a temporary member of Group A and the membership type changes to 'Temporary Member' from May 20 to 30. Smith is also added to group membership in the provider. <br />After May 30, Smith is removed from Group A as a member in Directory Manager and in the provider.</li><li>Removal Pending - Indicates that the object is temporarily removed from group membership at a future date. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Removal Pending'. On the beginning date, the membership type changes to 'Temporary Removed'. <br />Example. <br />You remove Smith from Group A on May 15 for future dates, May 20-30. Smith appears in Group A's membership with 'Removal Pending' as membership type from May 15 to 19. <br />On May 20, Smith's membership type in Directory Manager changes to 'Temporary Removed'; lasting till May 30. However, Smith is removed from Group A's membership in the provider. <br />After May 30, Smith is added back to Group A as a permanent member in Directory Manager and in the provider.</li><li>Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.</li></ul> When the user is a perpetual member, the **Membership** column is blank. You can't change the membership type of the user for any group on the **Member Of** tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/directorymanager/11.1/portal/group/properties/members.md). |
| Beginning    | Displays the beginning date of the temporary addition or removal.|
| Ending       | Displays the ending date of the temporary addition or removal.|

**Add**

Click it to add this group to the memberships of another group (for example, Group A).

Enter a search string to locate the required group (Group A), or click **Advance** to use the
[Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.

The selected groups get listed in the **Member Of** grid.

**Remove**

Select a group (Group A) from the Member Of list and click **Remove** to remove this group from the
membership of Group A.
