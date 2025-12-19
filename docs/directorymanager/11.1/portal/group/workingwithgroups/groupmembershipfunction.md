---
title: "Group Membership functions"
description: "Group Membership functions"
sidebar_position: 80
---

# Group Membership functions

Groups let you apply a common set of policies to multiple users. Groups also guarantee consistency
of permissions and privileges across the membership.

You can add members to groups manually, using a scheduled job, or import them from an external data
source.

## Group Membership Settings

To avoid large, unusual changes to Smart Group and Dynasty memberships, the administrator can
configure the ‘Out of Bounds’ setting for an identity store.

The administrator can:

- Specify the maximum number of members for a Smart Group and Dynasty.
- Determine actions to take if the limit is exceeded, such as not updating group membership or
  breaking the membership into smaller nested groups.

**Example:**

Let’s assume the administrator sets the maximum membership limit to 500 and opts for nested groups
when membership exceeds this limit.

**Scenario 1**: On update, 485 objects are fetched to be added to Group A’s membership. Since the
count is less than 500, the objects are directly added as group members.

**Scenario 2:** On the next update, 620 objects are fetched to be added to Group A’s membership.
Since the count exceeds 500, it breaks the membership into 2 child groups (Group 1 with 500 members
and Group 2 with 120 members) and nests them into Group A. Hence, Directory Manager checks the
member count and takes necessary action before adding members to the group.

:::note
An Office 365 group cannot have other groups as members. Therefore, the option to break the
membership into child groups would have the following impact:  
An Office 365 group (Group A) will be updated according to the Smart Group update process. When the
maximum membership limit is hit, the update process will create child group(s). These child groups
will exist but without any link to Group A. Hence, Group A’s membership will be empty.
:::


## Add members to a group

You can add one or more objects to the membership of one or more groups. These objects would be
added as permanent members. You will find them listed as members on the Members tab in
[Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md).

:::note
In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.
:::


Use any of the following methods to add members to groups.

### Method 1:

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the required objects.
2. Select these objects on the **Search Results** page and click **Add to Group** on the toolbar.
3. The [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) is displayed, where you can search and select the
   group(s) to add the objects to.

### Method 2:

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to add members to.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.

3. On the **Members** tab, click **Add**.
4. Enter a search string to locate the objects to add as members, or click **Advanced** to use the
   [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.
5. Save the changes.

:::note
These methods for adding members are recommended for static (unmanaged) groups only. For Smart
Groups, Directory Manager will discard any manual membership changes when it updates the group
through the Smart Group Update job.
:::


To add a member temporarily to a group, see Change the membership type of a group member .

## Change the membership type of a group member

By default, all new members are added as permanent member to a group. However, you can change the
membership type of an object from permanent to temporary and vice versa.

You can also add or remove an object from a group's membership for a temporary period.

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) a group to change the membership type of its
   member(s).
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed, where the
    **Members** tab lists the group members.

3. To change the membership type of a member, click anywhere in the respective row to make it
   editable, and select one of the following options from the **Membership** list:

    - Perpetual – To make the object a permanent member of the group.
    - Temporary Member – To make the object a temporary member of the group for the period you
      specify in the Beginning and Ending boxes. At the end of the period, the object is removed
      from the group membership.
    - Addition Pending – Indicates that the object will be a temporary member of the group for a
      period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning
      date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date,
      the membership type changes to ‘Temporary Member’.

        Example.

        You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.

        Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership
        type from May 15 to 19. However, Smith would not be added to group membership in the
        provider.

        On May 20, Smith will become a temporary member of Group A and its membership type will
        change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership
        in the provider.

        After May 30, Smith will be removed from Group A as a member in Directory Manager and in the
        provider.

    - Removal Pending - Indicates that the object will be temporarily removed from group membership
      for a period in the future. Use the Beginning and Ending boxes to set a period. Before the
      beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the
      beginning date, the membership type will change to ‘Temporary Removed’.

        Example.

        You remove Smith from Group A on May 15 for future dates, May 20-30.

        Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type
        from May 15 to 19.

        On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’;
        lasting till May 30. However, Smith will be removed from Group A’s membership in the
        provider.

        After May 30, Smith will be added back to Group A as a permanent member in Directory Manager
        and in the provider.

    - Temporary Removed – Indicates that the object is temporarily removed from group membership for
      the period specified in the Beginning and Ending boxes. At the end of the period, the object
      is added back to the group membership as a permanent member.

4. Save the changes.

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

## Remove members permanently from a group

Follow the steps to remove members permanently from a group.

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to remove member(s) from.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.

3. On the **Members** tab, select the group members you want to remove and click **Remove**.
4. Save the changes.

:::note
This method of removing members is recommended for static (unmanaged) groups only. For Smart
Groups, Directory Manager will discard any manual membership changes when it updates the group
through the Smart Group Update job.
:::


To remove a member temporarily from a group, see Change the membership type of a group member .

## Add a group to the membership of another group (nesting)

Follow the steps to add a group to the membership of another group (nesting).

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.
2. Select the My Groups, **My Memberships**, or **My Expiring Groups** tab.
3. Select the group(s) to add to the membership of another group and click **Add to Group** on the
   toolbar.
4. On the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md), search and select the group to add members to it,
   and click **OK**.

## Import members to a group

You can import members to a group using an external file.

:::note
In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.
:::


1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select the group you want to import members to, and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.

3. On the [Group properties - Members tab](/docs/directorymanager/11.1/portal/group/properties/members.md), click **Import** to launch the
   **Import Members** wizard.
4. See [Import Group Members](/docs/directorymanager/11.1/portal/group/properties/importmembers.md) for further information and
   instructions.
5. Save the changes.

## Export group members

You can export members of a group to an external file.

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) a group to export its members to an external file.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.

3. On the **Members** tab, click **Export** to launch the **Export Members** wizard.
4. On the **Attributes** page:

    1. In the **Attributes** list, select the required directory attributes and move them to the
       **Selected Attributes** list.

        Members' data for the selected attributes is exported to the output file.

    2. Click **Next**.

5. On the **File Type** page, select the file type to export the data to. Supported file types are:

    - Microsoft Excel (.xls and .xlsx)
    - Comma Separated Value (.csv)
    - Extensible Markup Language (.xml)
    - Text (.txt)

6. Click **Finish**.
7. When the file is successfully generated, you can save it to your machine.

## Invite a guest user

For a Microsoft Entra ID based identity store, the portal enables you to invite a user from another
Microsoft Entra ID tenant to the membership of a group in your domain.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

    The Groups page is displayed with the **My Groups** tab in view.

**Or**

    [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to invite a guest user to.

2. Select the required group from the list and click **Properties** on the toolbar. The group's
   [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.
3. On the **Members** tab, click the **Invite User** button.
4. On the **Invite User** dialog box, provide the following information:

    1. In the **Email** box, enter the email address of the user you want to invite to your domain.
    2. In the **Redirect URL** box, provide the URL of a portal page, such as the My Profile page.
       On accepting the invite, the guest user will be redirected to this page.
    3. Add any message for the guest user in the **Personal Message** box.
    4. Click **Invite User**.

        :::note
        If the group you want to invite a guest user to is a distribution group and the
        invited user is not in the guest user list of Microsoft 365 Admin portal than the invited
        user is not added into the group on the first invite but on the second invite.
        :::


5. The guest user is sent an email with the redirect link. On clicking this link, the guest user is
   successfully invited.

    The **Invite User** button on the **Invite User** dialog box changes to **Add To Group**.

6. Click the **Add To Group** button to add the guest user as a group member.
7. Save the information.

An object for the guest user is created in Microsoft Entra ID, with type as ‘guest user’. This user
has the same rights and permissions as any other group member.
