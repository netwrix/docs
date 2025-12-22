---
title: "General Group functions"
description: "General Group functions"
sidebar_position: 10
---

# General Group functions

You can perform the following general functions on your directory groups.

What do you want to do

- [Search for groups](#search-for-groups)
- [View object properties](#view-object-properties)
- [View groups managed by an object](#view-groups-managed-by-an-object)
- [Manage group access](#manage-group-access)
- [Set email delivery restrictions](#set-email-delivery-restrictions)

## Search for groups

See [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md).

## View object properties

You can view and modify the properties of a mailbox, group, user and contact.

1. [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) the required
   object.
2. Select this object on the **Search Results** page and click **Properties** on the toolbar.

    The object's
    [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed.

## View groups managed by an object

You can get a list of all groups managed by a particular object (i.e., all groups for which the
selected object is a primary or additional owner).

1. [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) the required
   object.
2. Select this object on the **Search Results** page and click **Owner** on the toolbar.

## Manage group access

A group’s security type determines how non-members can access the group and become its members.

A security type is assigned to the group when it is created. However, you can change it later, if
required.

1. In GroupID portal, click **Groups** in the left navigation pane, select Groups.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select a group and click **Properties** on the toolbar.

    The group's
    [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed with the **General** tab in view.

3. Select a different security type for the group from the **Security** list.
4. Click **Save**.

## Set email delivery restrictions

You can allow or restrict a group from receiving emails from specified recipients.

NOTE: This feature is not available for groups in a Microsoft Entra ID based identity store.

1. In GroupID portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

2. Select the required group and click **Properties** on the toolbar.

    The group's
    [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed.

3. Click the **Delivery Restrictions** tab.
4. Specify the senders that the group can receive emails from:

    1. Click the **Add** button in the **Accept from** area.
    2. Enter a search string to locate the required object, or click **Advanced** to use the
       [Find Dialog Box](/docs/directorymanager/11.0/welcome/generalfeatures/find.md) for performing
       a search.

5. Select the senders that the group cannot accept emails from:
    1. Click the **Add** button in the **Reject from** area.
    2. Enter a search string to locate the required object, or click **Advanced** to use the
       [Find Dialog Box](/docs/directorymanager/11.0/welcome/generalfeatures/find.md) for performing
       a search.
6. Save the changes.

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
