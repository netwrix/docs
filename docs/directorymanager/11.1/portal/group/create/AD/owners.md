---
title: "Owners page"
description: "Owners page"
sidebar_position: 30
---

# Owners page

You can manage the primary and additional owners for the group. Additional owners have the same
privileges as the primary owner to manage the group.

Users, contacts and security groups can be set as the primary and additional owners. In case of a
group, all its members are considered as owners.

- The **Owner** box displays your name as the primary owner of the group.

    To change the primary owner, click **Browse** next to the **Owner** box to launch the
    [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md), where you can search and select a primary owner.

- If the administrator has not enforced the selection of a primary owner (see Role policies), you
  can also remove the primary owner. Click the **Remove** button next to the **Owner** box to remove
  the primary owner.
- To specify additional owner(s) for the group, click **Add**.

    Enter a search string to locate the object to add as an additional owner, or click **Advance**
    to use the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.

- You can also specify additional owners for the group using an external file. Click **Import** to
  launch the **Import Additional Owners** wizard for importing additional owners. See
  [Import Additional Owners](/docs/directorymanager/11.1/portal/group/properties/importadditionalowners.md) for further information and
  instructions.
- To remove an object from the additional owners list, select it and click **Remove**.

The **Additional Owners** grid displays the following information:

| Column Name   | Description  |
| --- | --- |
| Type | The object type of the additional owner, such as user or group. |
| Name | The display name of the additional owner. |
| Ownership | Indicates whether an object is a temporary or permanent additional owner of a group. The available ownership types are: <ul><li>Perpetual - To make the object a permanent additional owner of the group.</li><li>Temporary Owner - To make the object a temporary additional owner of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group ownership.</li><li>Addition Pending - Indicates that the object will be a temporary additional owner of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Addition Pending’. On the beginning date, the ownership type changes to ‘Temporary Owner’. <br />Example: <br />You add Smith as a temporary additional owner of Group A on May 15 for future dates, May 20-30. Smith will be listed with Group A’s additional owners with ‘Addition Pending’ as its ownership type from May 15 to 19. <br />On May 20, Smith will become a temporary additional owner of Group A and its ownership type will change to ‘Temporary Owner’ from May 20 to 30. <br />After May 30, Smith will be removed from Group A as an additional owner.</li><li>Removal Pending - Indicates that the object will be temporarily removed from group ownership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Removal Pending’. On the beginning date, the ownership type will change to ‘Temporary Removed’. <br />Example: <br />You remove Smith as an additional owner of Group A on May 15 for future dates, May 20-30. <br />Smith will be displayed as Group A’s additional owner with ‘Removal Pending’ as ownership type from May 15 to 19. <br />On May 20, Smith’s ownership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. <br />After May 30, Smith will be added back to Group A as a permanent additional owner.</li><li>Temporary Removed - Indicates that the object is temporarily removed from group ownership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group as a permanent additional owner.</li></ul> When the object is a perpetual additional owner, the Ownership column is blank. Click anywhere in the row to make it editable for changing the ownership type of the additional owner. <br />**NOTE:** You cannot change the ownership type when the additional owner is a group. |
| Beginning     | Displays the beginning date of the temporary addition or removal. |
| Ending        | Displays the ending date of the temporary addition or removal. |
| Do not notify | By default, all group-related notifications (such as expiry, deletion, and renewal notifications) are sent to the primary owner and all additional owners, so they can take the necessary action indicated. <br />To exclude an additional owner from receiving notifications, select the Do not notify check box. |

The Managed By Life Cycle job updates the temporary ownership of groups by adding and removing
temporary owners on the specified dates.

Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a group’s temporary additional owner for three days -
Wednesday till Friday, it will not be added. This happens because the Managed By Life Cycle job did
not run on the particular days for temporary ownership update.

After specifying group owners, click **Next**.

You may observe a message, asking you to select X number of additional owners. It occurs because the
Group Owners policy defined for your role in the identity store requires that the group must have at
least x number of additional owners. Do the needful and click **Next**.