---
title: "Manage Group Owners in Directory Manager"
description: "Change a group's primary owner, set, import, and export additional owners, and manage temporary ownership and Exchange additional owners."
keywords:
  - group owner
  - primary owner
  - additional owners
  - temporary ownership
  - Exchange co-managed by
  - Managed By Life Cycle job
sidebar_position: 50
---

# Manage Group Owners in Directory Manager

Use the Directory Manager portal to perform ownership-related functions such as changing the
primary owner of a group, specifying additional owners of a group, and importing or exporting
additional owners.

When a new group is created, by default, the group creator is set as its primary owner. However, you
can change the primary owner or even remove it, leaving the group orphaned.

You can't remove a group’s primary owner if the Group Owners policy for your role doesn't allow
it.

## Additional owners

You can also specify temporary and permanent additional owners for a group. These can be users,
contacts, and even security groups. If you specify a group, all its members are considered
additional owners.

You can change the ownership type of an additional owner from temporary to permanent and vice versa.

Additional owners have the same privileges as the primary owner to manage the group. Group expiry,
deletion, and renewal notifications are sent to the additional owners along with the primary owner.
However, you can exclude some or all additional owners from receiving email notifications.

By default, there is no restriction on the number of additional owners a group can have. However, if
the administrator has specified a maximum and minimum value for additional owners in the Group
Owners policy for your role in the identity store, you can't create a group or save modifications
to it unless it has the specified number of additional owners.

## Exchange 2013/2016/2019 additional owners

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature, which lets you specify
Exchange additional owners for a group, provided that Exchange 2013/2016/2019 is configured as the
messaging provider for the identity store. Exchange additional owners are stored in the
_msExchangecoManagedby_ attribute.

Directory Manager sends group expiry, deletion, and renewal notifications to all Exchange additional owners
along with the group’s primary owner and additional owners.

:::note
For email notifications to be sent, an SMTP server must be configured for the connected
identity store.

:::

:::note
Only users, contacts, and security groups can be set as the primary and additional owners of a
group. Moreover, only mail-enabled users can be set as Exchange additional owners.

:::

:::note
Keep the following in mind for a Microsoft Entra ID based identity store:
:::

- Only users can be set as primary owners.
- Microsoft Entra ID supports multiple primary owners for a group.
- At least one primary owner is mandatory.
- Exchange additional owners aren't supported.

What do you want to do?

- [Change a group's primary owner](#change-a-groups-primary-owner)
- [Set additional owners for a group](#set-additional-owners-for-a-group)
- [Import additional owners for a group](#import-additional-owners-for-a-group)
- [Export additional owners](#export-additional-owners)
- [Change an additional owner’s ownership type](#change-an-additional-owners-ownership-type)
- [Set Exchange additional owners](#set-exchange-additional-owners)

## Change a group's primary owner

To change a group's primary owner:

1. In the Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select the required group and click **Properties** on the toolbar.
3. The group's properties page is displayed.
4. On the
   [Manage Group Owners in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/owner.md),
   the **Owner** box displays the group's primary owner.

    To change the primary owner, click **Browse** to launch the
    [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.0/welcome/generalfeatures/find.md), where you can
    search and select another owner.

5. Save the changes.

## Set additional owners for a group

You can add and remove additional owners for a group.

Additional owners have the same privileges as the primary owner to manage the group.

:::note
Only users, contacts, and security groups can be set as the additional owners of a group.  
 If you specify a group, all its members are considered additional owners.

:::

:::note
The contact object type isn't supported in a Microsoft Entra ID based identity store.

:::

If the administrator has specified the Group Owner policy for the identity store, it may have an
impact on the number of additional owners the group can have.

1. In the Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select the required group and click **Properties** on the toolbar.
3. The group's
   [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md) page
   is displayed.
4. On the
   [Manage Group Owners in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/owner.md),
   click **Add** in the **Additional Owners** area.
5. Enter a search string to locate the object to add as an additional owner, or click **Advanced**
   to use the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.0/welcome/generalfeatures/find.md) for
   performing a search.
6. By default, all group-related notifications (such as group expiry, deletion, and renewal
   notifications) are sent to the primary owner and all additional owners. To exclude an additional
   owner from receiving notifications, select the **Do not notify** checkbox.

    :::note
    When a Smart Group Update job runs on a group, the notification behavior is as follows:
    even with the **Do not Notify** checkbox selected, the additional owner receives the
    notifications if the administrator has included their email address for job-specific
    notifications.

    :::

7. Save the changes.

## Import additional owners for a group

To import additional owners for a group:

1. In the Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

    Or

    [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) a group to
    import its additional owners from an external file.

2. Select the required group from the list and click **Properties** on the toolbar.

    The group's
    [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed.

3. On the
   [Manage Group Owners in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/owner.md),
   click **Import** to launch the **Import Additional Owners** wizard.
4. See
   [Import additional group owners in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/importadditionalowners.md)
   for further information and instructions.
5. Save the changes.

## Export additional owners

You can export additional owners of a group to an external file.

1. In the Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

    Or

    [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) a group to
    export its additional owners to an external file.

2. Select the group and click **Properties** on the toolbar.

    The group's
    [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed.

3. On the **Owner** tab, click **Export** to launch the **Export Additional Owners** wizard.
4. On the **Attributes** page:

    1. In the **Attributes** list, select the required directory attributes and move them to the
       **Selected Attributes** list.

        Additional owners' data for the selected attributes is exported in the output file.

    2. Click **Next**.

5. On the **File Type** page, select the file type to export the data to. Supported file types are:

    - Microsoft Excel (.xls and .xlsx)
    - Comma Separated Value (.csv)
    - Extensible Markup Language (.xml)
    - Text (.txt)

6. Click **Finish**.
7. When the file is successfully generated, you can save it to your machine.

## Change an additional owner’s ownership type

Ownership type indicates whether an object is a temporary or permanent additional owner of a group.
You can change the ownership type of an additional owner from temporary to permanent and vice versa.

1. [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) a group to
   change the ownership type of its additional owners.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.
3. On the group's
   [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
   page, click the **Owner** tab.
4. To change the ownership type of an additional owner, click anywhere in the respective row to make
   it editable, and select an option from the **Ownership** list:

    - **Perpetual** - To make the object a permanent additional owner of the group.
    - **Temporary Owner** - To make the object a temporary additional owner of the group for the
      period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the
      object is removed from the group ownership.
    - **Addition Pending** - Indicates that the object is to be a temporary additional owner of the
      group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period.
      Before the beginning date, the object’s ownership type is displayed as ‘Addition Pending’. On
      the beginning date, the ownership type changes to ‘Temporary Owner’.

        **Here is an example:**

        You add Smith as a temporary additional owner of Group A on May 15, 2019 for future dates,
        May 20-30, 2019.

        Smith is listed with Group A’s additional owners with ‘Addition Pending’ as its
        ownership type from May 15 to 19, 2019.

        On May 20, Smith becomes a temporary additional owner of Group A and its ownership type
        changes to ‘Temporary Owner’ from May 20 to 30, 2019.

        After May 30, Smith is removed from Group A as an additional owner.

    - **Removal Pending** - Indicates that the object is to be temporarily removed from group
      ownership for a period in the future. Use the **Beginning** and **Ending** boxes to set a
      period. Before the beginning date, the object’s ownership type is displayed as ‘Removal
      Pending’. On the beginning date, the ownership type changes to ‘Temporary Removed’.

        **Here is an example:**

        You remove Smith as an additional owner of Group A on May 15, 2019 for future dates, May
        20-30, 2019.

        Smith is displayed as Group A’s additional owner with ‘Removal Pending’ as ownership
        type from May 15 to 19, 2019.

        On May 20, Smith’s ownership type in Directory Manager changes to ‘Temporary Removed’,
        lasting until May 30, 2019.

        After May 30, Smith is added back to Group A as a permanent additional owner.

    - **Temporary Removed** - Indicates that the object is temporarily removed from group ownership
      for the period specified in the **Beginning** and **Ending** boxes. At the end of the period,
      the object is added back to the group as a permanent additional owner.

5. Save the changes.

The Managed By Life Cycle job updates the temporary ownership of groups by adding and removing
temporary additional owners on the specified dates.

Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a group’s temporary additional owner for three days
(Wednesday through Friday), it isn't added. This happens because the Managed By Life Cycle job didn't
run on the particular days for temporary ownership update.

## Set Exchange additional owners

If your portal is connected to an identity store that has Exchange Server
2013/2016/2019 deployed, you can specify Exchange additional owners for a group. Exchange
additional owners have the same privileges as the primary owner. Directory Manager sends group expiry,
deletion, and renewal notifications to all Exchange additional owners along with the group’s primary
owner and additional owners.

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature, which lets you specify
Exchange additional group owners.

1. In the Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select the required group and click **Properties** on the toolbar.
3. The group's
   [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md) page
   is displayed.
4. On the **Email** tab, click **Add** in the **Managed By** area.
5. Enter a search string to locate the object to add as an Exchange additional owner, or click
   **Advanced** to use the
   [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.0/welcome/generalfeatures/find.md) for performing a
   search.

    :::note
    Only mail-enabled users can be set as Exchange additional owners.

    :::

6. Save the changes on the **Email** tab.

**See Also**

- [Work with Groups in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
