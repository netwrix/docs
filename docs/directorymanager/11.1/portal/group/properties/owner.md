---
title: "Owner tab"
description: "Group properties - Owner tab"
sidebar_position: 20
---

# Owner tab

This tab displays the primary and additional owners of the group. You can do the following,
depending on the Group Owner policy.

- Change the primary owner or even remove it.
- Add and remove additional owners for the group.

Additional owners have the same privileges as the primary owner to manage the group.

:::note
Only users, contacts and security groups can be set as the primary and additional owners of a
group.  
If you specify a group, all its members are considered additional owners.
:::


You can also specify Exchange additional owners for the group. See the
[Group properties - Email tab](/docs/directorymanager/11.1/portal/group/properties/email.md) in group properties.

:::note
1. For groups in an Microsoft Entra ID based identity store, only users can be set as primary
owners. Moreover, Microsoft Entra ID supports multiple primary owners for a group. Exchange
additional owners are not supported.  
2. A group must have at least one primary owner.
:::


**Owner**

The primary owner of the group.

To change the primary owner, click **Browse** next to the **Owner** box to launch the
[Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md), where you can search and select a primary owner.

If the administrator has not enforced the selection of a primary owner in the Group Owner policy,
you can also remove the primary owner. Click the **Remove** button next to the **Owner** box to
remove the primary owner.

:::note
In a Microsoft Entra ID based identity store, use the **Add** and **Remove** buttons to update
the group's primary owners.
:::


**Suggested Owners**

The Directory Manager portal can suggest a primary owner for orphan groups, provided that the
**Suggest Owner/Manager** setting is enabled by the administrator in Directory Manager Admin Center.

The owner is suggested with respect to the group’s membership; Directory Manager checks the managers
of group members and the user who shows up most as a manager is suggested as the group owner. This
user may or may not be a member of the group.

For example, when 40 members of Group A have User A as their manager and 38 members have User B as a
manager, User A is suggested as Group A’s primary owner. User A may not necessarily be a member of
Group A.

- Click **Make Owner** to set the sug gested user as the group's primary owner.
- You may also click **Show more options** to view a list of suggested owners.

**Additional Owners**

Lists the additional owners of the group, if any.

The **Additional Owners** grid displays the following information:

| Column Name   | Description  |
| --- | --- |
| Type | The object type of the additional owner, such as user or group. |
| Name | The display name of the additional owner. |
| Ownership | Indicates whether an object is a temporary or permanent additional owner of a group. The available ownership types are: <ul><li>Perpetual - To make the object a permanent additional owner of the group.</li><li>Temporary Owner - To make the object a temporary additional owner of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group ownership.</li><li>Addition Pending - Indicates that the object will be a temporary additional owner of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Addition Pending’. On the beginning date, the ownership type changes to ‘Temporary Owner’. <br />Example: <br />You add Smith as a temporary additional owner of Group A on May 15 for future dates, May 20-30. Smith will be listed with Group A’s additional owners with ‘Addition Pending’ as its ownership type from May 15 to 19. <br />On May 20, Smith will become a temporary additional owner of Group A and its ownership type will change to ‘Temporary Owner’ from May 20 to 30. <br />After May 30, Smith will be removed from Group A as an additional owner.</li><li>Removal Pending - Indicates that the object will be temporarily removed from group ownership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Removal Pending’. On the beginning date, the ownership type will change to ‘Temporary Removed’. <br />Example: <br />You remove Smith as an additional owner of Group A on May 15 for future dates, May 20-30. <br />Smith will be displayed as Group A’s additional owner with ‘Removal Pending’ as ownership type from May 15 to 19. <br />On May 20, Smith’s ownership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. <br />After May 30, Smith will be added back to Group A as a permanent additional owner.</li><li>Temporary Removed - Indicates that the object is temporarily removed from group ownership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group as a permanent additional owner.</li></ul> When the object is a perpetual additional owner, the **Ownership** column is blank. Click anywhere in the row to make it editable for changing the ownership type of the additional owner. NOTE: You cannot change the ownership type when the additional owner is a group. |
| Beginning | Displays the beginning date of the temporary addition or removal. |
| Ending | Displays the ending date of the temporary addition or removal. |
| Do not notify | By default, all group-related notifications (such as expiry, deletion, and renewal notifications) are sent to the primary owner and all additional owners, so they can take the necessary action indicated. <br />To exclude an additional owner from receiving notifications, select the **Do not notify** check box. <br />**NOTE:** When a Smart Group Update job runs on a group, the notification behavior is as follows: Even when the **Do not Notify** check box is selected, the additional owner will receive the notifications if the administrator has included its email address for job-specific notifications. |

:::note
For each column, a filter is also available that lets you filter records based on a criterion.
For example; to show objects whose display names start with D, type D in the box under the **Name**
header and press **Enter**.  
The Managed By Life Cycle job updates the temporary ownership of groups by adding and removing
temporary owners on the specified dates.
:::


Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a group’s temporary additional owner for three days -
Wednesday till Friday, it will not be added. This happens because the Managed By Life Cycle job did
not run on the particular days for temporary ownership update.

**Add**

To specify additional owner(s) for the group, click **Add**.

Enter a search string to locate the object to add as an additional owner, or click **Advance** to
use the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.

**Import**

You can also specify additional owners for the group using an external file. Click **Import** to
launch the **Import Additional Owners** wizard for importing additional owners. See
[Import Additional Owners](/docs/directorymanager/11.1/portal/group/properties/importadditionalowners.md) for further information and instructions.

**Export**

You can export the list of additional owners to an external file. Supported file formats are: .txt,
.csv, .xls, .xlsx and .xml.

Click **Export** to launch the **Export Additional Owners** wizard for exporting additional owners.
Select the attributes you want to export. For information and instructions, see
[Export additional owners](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupownershipfunction.md#export-additional-owners).

**Remove**

To remove an object from the additional owners list, select it and click **Remove**.

:::note
On saving group properties, you may observe a message, asking you to select X number of
additional owners. It occurs because the Group Owner policy defined for your role at the identity
store level requires that the group must have at least x number of additional owners. Do the needful
and then save the information.

:::
