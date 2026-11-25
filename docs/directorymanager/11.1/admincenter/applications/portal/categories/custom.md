---
title: "Define Custom Display Types in Directory Manager"
description: "Choose a custom display type for portal fields, learn how display types link to schema attributes, and delete a custom display type you no longer need."
keywords:
  - custom display types
  - Directory Manager portal design
  - delete custom display type
  - linked combo
  - portal template
sidebar_position: 10
---

# Define Custom Display Types in Directory Manager

The default portal template uses several predefined custom display types. To customize the portal,
use the predefined custom display types or define new ones.

- [Directory Manager Text Box Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/textbox.md)
- [Create a Dropdown List Display Type in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/categories/dropdownlist.md)
- [Directory Manager Linked Field Dropdown List Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/linkeddropdown.md)
- [Image Display Type in Directory Manager Portal](/docs/directorymanager/11.1/admincenter/applications/portal/categories/image.md)
- [Grid Display Type in Directory Manager Portal](/docs/directorymanager/11.1/admincenter/applications/portal/categories/grid.md)
- [Directory Manager Radio Button Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/radio.md)
- [Directory Manager Multiline Textbox Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/multilinetextbox.md)
- [Directory Manager Multi-Valued Control Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/multivaluedcontrol.md)
- [Linked Combo Display Type in Directory Manager Portal](/docs/directorymanager/11.1/admincenter/applications/portal/categories/linkedcombo/overview.md)

## How to implement display types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design
settings, select a schema attribute and a display type to link them.

After you link them, the display type appears on the portal’s page. Users can then view or enter a
value for the linked attribute.

## Delete a custom display type

You can delete custom display types, including linked combos.

:::note
You can't delete a custom display type that is linked to a field in the portal.
:::

To delete a custom display type:

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Design Settings**, select the identity store to delete a custom display type for.

   **Design Settings** lists all identity stores associated with the portal. You can design a
   different portal for each of them.
4. Click **Custom Display Types** in the left pane.
5. Delete the custom display type:

   - On the **Simple Types** tab, click **Delete** for a custom display type.
   - On the **Linked Combo Types** tab, click **Delete** for a linked combo.

6. Click **Save**.
