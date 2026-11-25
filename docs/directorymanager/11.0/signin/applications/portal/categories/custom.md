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

In Directory Manager, several predefined custom display types are used in the default portal template. To
customize the portal, you can use the predefined custom display types as well as define new ones.

- [Directory Manager Text Box Display Type](/docs/directorymanager/11.0/signin/applications/portal/categories/textbox.md)
- [Create a Dropdown List Display Type in Directory Manager](/docs/directorymanager/11.0/signin/applications/portal/categories/dropdownlist.md)
- [Directory Manager Linked Field Dropdown List Display Type](/docs/directorymanager/11.0/signin/applications/portal/categories/linkeddropdown.md)
- [Image Display Type in Directory Manager Portal](/docs/directorymanager/11.0/signin/applications/portal/categories/image.md)
- [Grid Display Type in Directory Manager Portal](/docs/directorymanager/11.0/signin/applications/portal/categories/grid.md)
- [Directory Manager Radio Button Display Type](/docs/directorymanager/11.0/signin/applications/portal/categories/radio.md)
- [Directory Manager Multiline Textbox Display Type](/docs/directorymanager/11.0/signin/applications/portal/categories/multilinetextbox.md)
- [Linked Combo Display Type in Directory Manager Portal](/docs/directorymanager/11.0/signin/applications/portal/categories/linkedcombo/overview.md)

## How to Implement Display Types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design
settings, select a schema attribute and a display type to link them.

On linking, the display type appears on the portal’s page, enabling users to view or specify a
value for the linked attribute.

## Delete a Custom Display Type

You can delete custom display types, including linked combos.

:::note
You can't delete a custom display type that has been linked to a field in the portal.
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

**See Also**

- [Design a Directory Manager Portal with Display Types](/docs/directorymanager/11.0/signin/applications/portal/displaytype/overview.md)
- [Directory Manager Display Type Categories](/docs/directorymanager/11.0/signin/applications/portal/categories/categories.md)
