---
title: "View and Change User Group Memberships in Directory Manager"
description: "View the groups a user belongs to and add or remove the user from group memberships on the Member Of tab."
keywords:
  - Member Of tab
  - group membership
  - temporary membership
  - user group memberships
sidebar_position: 60
---

# View and Change User Group Memberships in Directory Manager

Use this tab to view the groups that the user is a member of. You can also add and remove this user
from the membership of groups.

The tab displays a list of all groups this user is a member of.

| Column Name  | Description |
| --- | --- |
| Display Name | Displays the names of the groups this user is a member of. |
| Membership   | Indicates whether the user is a temporary or permanent member of the group. <ul><li>Perpetual – To make the object a permanent member of the group.</li><li>Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.</li><li>Addition Pending – Indicates that the object is scheduled to become a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. <br />Example. <br />You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. <br />Smith appears in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith isn't added to group membership in the provider. <br />On May 20, Smith becomes a temporary member of Group A and its membership type changes to ‘Temporary Member’ from May 20 to 30. Smith is also added to group membership in the provider. <br />After May 30, Smith is removed from Group A as a member in Directory Manager and in the provider.</li><li>Removal Pending - Indicates that the object is scheduled to be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type changes to ‘Temporary Removed’. <br />Example. <br />You remove Smith from Group A on May 15 for future dates, May 20-30. Smith appears in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. <br />On May 20, Smith’s membership type in Directory Manager changes to ‘Temporary Removed’ and stays that way until May 30. However, Smith is removed from Group A’s membership in the provider. <br />After May 30, Smith is added back to Group A as a permanent member in Directory Manager and in the provider.</li><li>Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.</li></ul> When the user is a perpetual member, the **Membership** column is blank. You can't change the membership type of the user for any group on the **Member Of** tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/directorymanager/11.1/portal/group/properties/members.md). |
| Beginning    | Displays the beginning date of the temporary addition or removal. |
| Ending       | Displays the ending date of the temporary addition or removal. |

For each column in the grid, an item level filter is also available that lets you filter records
based on a criterion. For example, to show groups whose display names start with D, type D in the
box under the Display Name header and press Enter.

**Add**

Click **Add** to add the user to the memberships of one or more groups.

Enter a search string to locate the required group, or click **Advance** to use the
[Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.

The selected groups appear in the Member Of grid.

**Remove**

Select a group in the Member Of list and click **Remove** to remove the user from the membership of
that group.