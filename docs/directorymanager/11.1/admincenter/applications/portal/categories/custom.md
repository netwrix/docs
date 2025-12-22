---
title: "Define Custom Display Types"
description: "Define Custom Display Types"
sidebar_position: 10
---

# Define Custom Display Types

In Directory Manager, several predefined custom display types are used in the default portal
template. To customize the portal, you can use the predefined custom display types as well as define
new ones.

- [Text Box Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/textbox.md)
- [Drop-down List Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/dropdownlist.md)
- [Linked Field Drop-down List Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/linkeddropdown.md)
- [Image Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/image.md)
- [Grid Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/grid.md)
- [Radio Button Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/radio.md)
- [Multiline Textbox Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/multilinetextbox.md)
- [Multi-Valued Control Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/multivaluedcontrol.md)
- [Linked Combo Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/linkedcombo/overview.md)

## How to Implement Display Types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design
settings, select a schema attribute and a display type to link them.

On linking, the display type is rendered on the portal’s page; enabling users to view or specify a
value for the linked attribute.

## Delete a Custom Display Type

You can delete custom display types, including linked combos.

:::note
You cannot delete a custom display type that has been linked to a field in the portal.
:::


To delete a custom display type:

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to delete a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.

    - On the **Simple Types** tab, click **Delete** for a custom display type to delete it.
    - On the **Linked Combo Types** tab, click **Delete** for a linked combo to delete it.

5. Click **Save**.