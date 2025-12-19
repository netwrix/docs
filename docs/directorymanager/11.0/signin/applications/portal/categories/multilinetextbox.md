---
title: "Multiline Textbox Display Type"
description: "Multiline Textbox Display Type"
sidebar_position: 80
---

# Multiline Textbox Display Type

A multiline textbox allows portal users to type information into a box that supports word wrapping
and vertical scrolling.

Like a textbox, use a multiline textbox display type to collect and display a single value for an
attribute.

The multiline textbox display type is especially useful for fields that require a lengthy value,
such as the _Description_ field. Moreover, as it can have multiple rows, users can view more
characters of the entered value on screen as compared to a textbox.

In the portal’s default template, the _Description_ field on the _Create New Group_ page uses the
multiline textbox display type. It is as:

![multiline_textbox](/images/directorymanager/11.0/admincenter/portal/displaytype/multiline_textbox.webp)

To define a multiline textbox display type, provide a name for it and specify the on-screen width by
giving the number of rows to be displayed for it. Portal users can use the _Enter_ key to add as
many rows as required while entering data.

What do you want to do?

- [Define a Multiline Textbox Display Type](#define-a-multiline-textbox-display-type)

## Define a Multiline Textbox Display Type

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Multiline
   Textbox_ in the **Type** drop-down list.
   You cannot change the name of a custom display type once you have created it.
7. In the **Rows** box, type or select a value to specify the number of rows the multiline textbox
   display type should have. These rows make up the on-screen length of the textbox. Users can use
   the _Enter_ key to add as many rows as required while entering data.
8. Click **OK**.
9. Click Save on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.0/signin/applications/portal/displaytype/overview.md)
- [Display Type Categories](/docs/directorymanager/11.0/signin/applications/portal/categories/categories.md)
- [Define Custom Display Types](/docs/directorymanager/11.0/signin/applications/portal/categories/custom.md)
