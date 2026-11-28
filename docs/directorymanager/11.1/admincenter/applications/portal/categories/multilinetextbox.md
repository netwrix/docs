---
title: "Directory Manager Multiline Textbox Display Type"
description: "Define a multiline textbox display type so portal users can enter lengthy values that wrap and scroll across multiple rows."
keywords:
  - multiline textbox
  - custom display type
  - Directory Manager portal
  - Description field
  - Design Settings
sidebar_position: 80
---

# Directory Manager Multiline Textbox Display Type

A multiline textbox lets portal users type information into a box that supports word wrapping and vertical scrolling. Like a textbox, a multiline textbox display type collects and displays a single value for an attribute.

The multiline textbox display type is especially useful for fields that require a lengthy value, such as the **Description** field. Because it can have multiple rows, users can view more characters of the entered value on screen than in a textbox.

In the portal's default template, the **Description** field on the **Create New Group** page uses the multiline textbox display type. It appears as follows:

![Description field on the Create New Group page using the multiline textbox display type](/images/directorymanager/11.1/admincenter/portal/displaytype/multiline_textbox.webp)

To define a multiline textbox display type, provide a name for it and specify the on-screen width by giving the number of rows to display. Portal users can press **Enter** to add as many rows as they need while entering data.

## Define a multiline textbox display type

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Design Settings**, select an identity store to define a custom display type for it. **Design Settings** lists all identity stores associated with the portal. You can design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select **Multiline Textbox** in the **Type** dropdown list. You can't change the name of a custom display type after you create it.
7. In the **Rows** box, set the number of rows for the multiline textbox display type. These rows make up the on-screen length of the textbox. Users can press **Enter** to add as many rows as they need while entering data.
8. Click **OK**.
9. Click **Save** on the **Custom Display Types** page.
