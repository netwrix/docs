---
title: "Multi-Valued Control Display Type"
description: "Multi-Valued Control Display Type"
sidebar_position: 90
---

# Multi-Valued Control Display Type

The multi-valued control display type supports multi-valued attributes in Active Directory. Examples
include:

- The carLicense, otherTelephone, and otherHomePhone attributes for user objects
- The msExchExtensionCustomAttribute1 through msExchExtensionCustomAttribute5 attributes for group
  objects

The multi-valued control display type is rendered in the portal similar to a dropdown list; only
that you can use it to select multiple values.

To create a custom multi-valued control display type, you have to specify the values (options) to
display in the list. This custom display type can then be linked to a schema attribute. Options in
the multi-valued control dropdown list are the different values that users can select for the
schema attribute you link this display type with.

## Define a Multi-Valued Control Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _MultiValued
   Control_ in the **Type** dropdown list.  
   You can't change the name of a custom display type after you have created it.
7. Use the **Values** area to specify the values to be displayed in the multi-valued dropdown list.

    1. Click **Add Value**.
    2. Specify a value and a display text for that value in the respective boxes. The display text
       will be displayed in the multi-valued dropdown list, while the value will be saved in the
       directory or database when a user selects the display text from the multi-valued dropdown
       list.  
       (The value will be saved in the directory when the multi-valued control display type is
       mapped to a directory attribute. It will be saved in the database when the display type is
       mapped to a database attribute.)
    3. In the **Visibility** dropdown list, select one or more security roles. The value in the
       multi-valued dropdown list will be visible to users of the selected roles only. If you do
       not select any role, the value will be hidden from all users.  
       The **Visibility** dropdown list displays all predefined and user-defined security roles.
    4. In the **Accessibility** dropdown list, select one or more security roles. Only users of the
       selected roles can select the value from the multi-valued dropdown list in the portal. For
       all other users, the value will be greyed out and they will not be able to select it. If you
       don't select any role, the value will be greyed out for all users and they will not be able
       to select it.  
        The **Accessibility** dropdown list displays all predefined and user-defined security
       roles.

        :::note
        (1) If a user has visibility on a value but not accessibility, and that value is set
        as default (see Step 9), then in the portal, the value will be displayed as selected to the
        user. After the user removes it, they can't select it again from the multi-valued
        dropdown list.  
        (2) If a user has accessibility on a value but not visibility, the value will not be
        displayed to the user. Hence, accessibility will have no impact.
        :::


    5. Click **OK**. The value is listed in the **Values** area, represented by its display text.

8. Repeat step 7 to define more values in the list.

    - To edit a value, click **Edit** for it.
    - To remove a value from the list, click **Delete** for it.

9. Select one or more values in the **Default Selection** list to set as the default values for
   the multi-valued dropdown list in the portal.  
   The **Default Selection** list contains all values defined in the **Values** area.
10. In the **Custom Value Edit Roles** list, select one or more security roles. Users of the
    selected roles can specify a new value for the multi-valued dropdown list in the portal. For
    example, if Role A doesn't have accessibility and visibility on any values in the multi-valued
    dropdown, but has custom value edit rights, then role members will see the dropdown as empty
    but they can add new values.
11. Click **OK**.
12. Click **Save** on the **Custom Display Types** page.