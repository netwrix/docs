---
title: "Specify Attributes for the Directory Manager Object Card"
description: "Choose the attributes, header details, and footer buttons that appear on the object card when portal users hover over an object name."
keywords:
  - object card
  - Card View
  - card header and footer
  - portal design
  - object attributes
sidebar_position: 130
---

# Specify Attributes for the Directory Manager Object Card

In the portal, the names of directory objects appear as links. When a user hovers the mouse over an object name, a card appears with information about the object. For a user object, for example, the card shows the name, email address, and phone number. The following image shows a user card:

![Object card for a user showing name, email address, and phone number](/images/directorymanager/11.1/admincenter/portal/design/usercard.webp)

For each object type, you can specify a different set of attributes to display on this card. For a group, the card looks like this:

![Object card for a group showing header attributes and footer buttons](/images/directorymanager/11.1/admincenter/portal/design/groupcard.webp)

The card has three sections:

- Header: The card template allows four attributes in the header. When a specified attribute doesn't contain a value, the card shows NA.
- Body: You can specify any number of attributes for this section. When you don't specify any attribute, this section doesn't appear.
- Footer: This section has the **Add To Contact** and **Send An Email** buttons. You choose whether the card shows these buttons.

## Manage the card header

By default, four attributes are specified for display in the card header. You can change the default attributes, but you can't add a fifth attribute or reduce the number to three.

**To modify the card header:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane. The **Card View** page opens.
5. In the **Select Directory Object** dropdown list, select User, Contact, Group, or Mailbox to manage the card for.
6. In the **Name** list, click **Edit** for **Header**. The **Card View Header/Footer** pane displays a sample header and how the specified attributes populate it.
7. From the **Title** dropdown list, select an attribute whose value is the title of the header. By default, the title is the object's display name.
8. From the **Image** dropdown list, select an attribute that can store images for directory objects.
9. Use the **Attribute 1** and **Attribute 2** dropdown lists to select any other object attributes to display on the card. The mail and mobile attributes are selected by default.
10. Click **OK**.
11. Click **Save** on the **Card View** page.

## Manage the card footer

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** dropdown list to select User, Contact, Group, or Mailbox to manage the card for.
6. In the **Name** list, click **Edit** for Header.
7. In the **Footer** section of the **Card View Header/Footer** pane, select the **Add to Contact** and **Send Email** checkboxes to display the respective buttons on the card.
8. Click **OK**.
9. Click **Save** on the **Card View** page.

## Specify an attribute for the card body

In addition to the card header, you can specify additional object attributes for the card. The card body shows the values of these attributes.

**To add an attribute:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** dropdown list to select User, Contact, Group, or Mailbox to manage the card for.
6. Click **Add** to add an attribute to the body of the card. The **Add New Card View Attribute** pane opens.
7. Use the **Field Name** box to select one or more schema attributes. The object card shows the values of these attributes.
8. Specify a name for the attribute in the **Display Name** box. The card shows the attribute value next to this label. This box isn't available when you select multiple attributes.
9. Click **OK**.
10. Click **Save** on the **Card View** page.

## Update the display name for an attribute

You can update the display name of an attribute on the body of an object card.

**To update the display name:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** dropdown list to select User, Contact, Group, or Mailbox to manage the card for.
6. In the **Name** list, click **Edit** for an attribute.
7. On the **Edit Card View Attribute** pane, the **Field Name** box isn't editable, so you can't change the attribute. However, you can specify a different display name for it. The card's body shows this display name, and the attribute's value appears next to it.
8. Click **OK**.
9. Click **Save** on the **Card View** page.

## Remove an attribute

You can remove an attribute from the body of an object card.

**To remove an attribute:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** dropdown list to select User, Contact, Group, or Mailbox to manage the card for.
6. In the **Name** list, click **Remove** for an attribute to remove it.
7. Click **Save**.
