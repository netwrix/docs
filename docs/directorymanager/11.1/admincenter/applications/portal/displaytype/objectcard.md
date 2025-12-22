---
title: "Specify Attributes for the Object Card"
description: "Specify Attributes for the Object Card"
sidebar_position: 130
---

# Specify Attributes for the Object Card

In the portal, the names of directory objects are displayed as links. When a user hovers the mouse
over this link, a card is displayed, showcasing information about the object. For a user object, for
example, the card displays the name, email address and phone number. It is as:

![usercard](/images/directorymanager/11.1/admincenter/portal/design/usercard.webp)

For each object type, you can specify a different set of attributes to display on this card. For a
group, the card is as:

![groupcard](/images/directorymanager/11.1/admincenter/portal/design/groupcard.webp)

Notice that the card has three sections, namely:

- Header - The card template allows for four attributes to be specified for display in the header.
  When a specified attribute does not contain a value, NA is displayed on the card.
- Body - You can specify any number of attributes for this section. When you do not specify any
  attribute, this section is not displayed.
- Footer - This section has the _Add To Contact_ and _Send An Email_ buttons. You can choose whether
  you want to display these buttons on the card or not.

## Manage the Card Header

By default, four attributes are specified for display in the card header. You can change the default
attributes, but you cannot add a fifth attribute or reduce the number to three.

**To modify the card header:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane. The **Card View** page is displayed.
5. In the **Select Directory Object** drop-down list, select _User_, _Contact_, _Group_, or
   _Mailbox_ to manage the card for.
6. In the **Name** list, click **Edit** for **Header**.
   The **Card View Header/Footer** pane displays a sample header and how the specified attributes
   populate it.
7. From the **Title** drop-down list, select an attribute whose value will be displayed as the title
   of the header. By default, the title is set to the object’s display name.
8. From the **Image** drop-down list, select an attribute that can store images for directory
   objects .
9. Use the **Attribute 1** and **Attribute 2** drop-down lists to select any other object attributes
   to display on the card. By default, _mail_ and _mobile_ are selected.
10. Click **OK**.
11. Click **Save** on the **Card View** page.

## Manage the Card Footer

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** drop-down list to select _User_,
   _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the **Name** list, click **Edit** for _Header_.
7. In the **Footer** section of the **Card View Header/Footer** pane, select the **Add to Contact**
   and **Send Email** check boxes to display the respective buttons on the card.
8. Click **OK**.
9. Click **Save** on the **Card View** page.

## Specify an Attribute for the Card Body

In addition to the card header, you can specify additional object attributes for the card. The
values of these attributes would be displayed on the card body.

**To add an attribute:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** drop-down list to select _User_,
   _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. Click **Add** to add an attribute to the body of the card. The **Add New Card View Attribute**
   pane is displayed.
7. Use the **Field Name** box to select one or more schema attributes. The value of these attributes
   will be displayed on the object card.
8. Specify a name for the attribute in the **Display Name** box. The attribute value would be
   displayed next to this label on the card.
   This box is not available when multiple attributes are selected.
9. Click **OK**.
10. Click **Save** on the **Card View** page.

## Update the Display Name for an Attribute

You can update the display name of an attribute on the body of an object card.

**To update the display name:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** drop-down list to select _User_,
   _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the **Name** list, click **Edit** for an attribute.
7. On the **Edit Card View Attribute** pane, the **Field Name** box is not editable, so you cannot
   change the attribute. However, you can specify a different display name for it. This display name
   is displayed on the card's body and the attribute’s value is shown next to it.
8. Click **OK**.
9. Click **Save** on the **Card View** page.

## Remove an Attribute

You can remove an attribute from the body of an object card.

**To remove an attribute:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, use the **Select Directory Object** drop-down list to select _User_,
   _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the **Name** list, click **Remove** for an attribute to remove it.
7. Click **Save**.
