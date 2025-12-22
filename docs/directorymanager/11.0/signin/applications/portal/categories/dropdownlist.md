---
title: "Drop-down List Display Type"
description: "Drop-down List Display Type"
sidebar_position: 30
---

# Drop-down List Display Type

Use the drop-down list display type to give portal users a list of options to select from.

To create a custom drop-down list display type, you have to specify the values (options) to display
in the list. This custom display type can then be linked to a schema attribute. Options in the
drop-down list are the different values that users can select for the schema attribute you link this
display type with.

### Predefined Drop-down List Display Types

A few drop-down list display types used in the default portal template are:

|     | Display Type Name  | Default Value              | Values                                                                        |
| --- | ------------------ | -------------------------- | ----------------------------------------------------------------------------- |
| 1.  | lstSecurity        | Private: Closed Membership | Public Semi-Private: Owner Must Approve Private: Closed Membership            |
| 2.  | lstGroupScope      | Universal Group            | Domain Local Global Group Universal Group                                     |
| 3.  | lstGroupType       | None                       | Security Distribution                                                         |
| 4.  | membershipeditlist | None                       | Perpetual Temporary Member Addition Pending Temporary Removed Removal Pending |
| 5.  | lstCountry         | None                       | A list of all countries                                                       |
| 6.  | lstState           | None                       | A list of all states in the US                                                |
| 7.  | lstStateProvince   | None                       | A list of all states in the US and provinces in Canada.                       |
| 8.  | lstProvince        | None                       | A list of all provinces in Canada                                             |

What do you want to do?

- [Define a Drop-down List Display Type](#define-a-drop-down-list-display-type)

## Define a Drop-down List Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Dropdown List_ in
   the **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to specify the values to be displayed in the drop-down list.

    1. Click **Add Value**.
    2. Specify a value and a display text for that value in the respective boxes. The display text
       will be displayed in the drop-down list, while the value will be saved in the directory or
       database when a user selects the display text from the drop-down list.  
       (The value will be saved in the directory when the drop-down list display type is mapped to a
       directory attribute. It will be saved in the database when the display type is mapped to a
       database attribute.)
    3. In the **Visibility** drop-down list, select a security role. The value in the drop-down list
       will be visible to users of this role and roles with a priority value higher than this role.
       See [Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).  
       Select _Never_ to hide the value from all users.
    4. Click **OK**. The value is listed in the **Values** area, represented by its display text.

8. Repeat step 7 to define more values in the list.

    - To edit a value, click **Edit** for it.
    - To remove a value from the list, click **Delete** for it.

9. Select a value in the **Default Selection** list to set it as the default value for the drop-down
   list in the portal.  
   The **Default Selection** list contains all values defined in the **Values** area.
10. Click **OK**.
11. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.0/signin/applications/portal/displaytype/overview.md)
- [Display Type Categories](/docs/directorymanager/11.0/signin/applications/portal/categories/categories.md)
- [Define Custom Display Types](/docs/directorymanager/11.0/signin/applications/portal/categories/custom.md)
