---
title: "General Group Functions in Directory Manager"
description: "Search for groups, view object properties and managed groups, change group security, and set email delivery restrictions in the Directory Manager portal."
keywords:
  - group functions
  - group properties
  - group security type
  - delivery restrictions
  - Directory Manager portal
sidebar_position: 10
---

# General Group Functions in Directory Manager

You can perform the following general functions on your directory groups.

## Search for groups

See [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.2/portal/generalfeatures/search.md).

## View object properties

You can view and modify the properties of a mailbox, group, user, and contact.

1. Search for the required object. See [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.2/portal/generalfeatures/search.md).
2. Select the object on the **Search Results** page and click **Properties** on the toolbar.

    The object's [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/overview.md) page opens.

## View groups managed by an object

You can get a list of all groups managed by a particular object, meaning all groups for which the selected object is a primary or additional owner.

1. Search for the required object. See [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.2/portal/generalfeatures/search.md).
2. Select the object on the **Search Results** page and click **Owner** on the toolbar.

## Manage group access

A group's security type determines how non-members can access the group and become its members.

A security type is assigned to the group when it is created. However, you can change it later, if required.

1. In the Directory Manager portal, click **Groups** in the left navigation pane, then select **Groups**.

    The Groups page opens with the **My Groups** tab in view.

2. Select a group and click **Properties** on the toolbar.

    The group's [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/overview.md) page opens with the **General** tab in view.

3. Select a different security type for the group from the **Security** list.
4. Click **Save**.

## Set email delivery restrictions

You can allow or restrict a group from receiving emails from specified recipients.

:::note
This feature isn't available for groups in a Microsoft Entra ID based identity store.
:::

1. In the Directory Manager portal, click **Groups** in the left navigation pane, then select **My Groups**.

    The Groups page opens with the **My Groups** tab in view.

2. Select the required group and click **Properties** on the toolbar.

    The group's [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/overview.md) page opens.

3. Click the **Delivery Restrictions** tab.
4. Specify the senders that the group can receive emails from:

    1. Click the **Add** button in the **Accept from** area.
    2. Enter a search string to locate the required object, or click **Advanced** to search with the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md).

5. Specify the senders that the group can't accept emails from:

    1. Click the **Add** button in the **Reject from** area.
    2. Enter a search string to locate the required object, or click **Advanced** to search with the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md).

6. Save the changes.
