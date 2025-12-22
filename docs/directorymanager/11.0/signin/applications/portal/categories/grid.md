---
title: "Grid Display Type"
description: "Grid Display Type"
sidebar_position: 60
---

# Grid Display Type

Use a grid display type to display data in tabular form in the portal. This is especially helpful
when you want to group together multiple attributes of an object.

For example, use a grid display type to capture information about a group’s additional owners and
members, such as a member’s display name, department, and email. Add a column to the grid for each
attribute required, so that portal users can view or enter values in each column (attribute) for an
object.

To create a grid, simply define its columns. Each column is mapped to a schema attribute, so each
column represents the value of the attribute it is mapped to.

After creating the custom grid display type, link it to an appropriate schema attribute to render it
on a portal page. This attribute must support multi-valued distinguished names. Examples of such
Active Directory attributes include _member_ and _memberof_.

### Predefined Grid Display Types

A few grid display types used in the default portal template are:

| Display Type Name | Column Names                             | Description                                                                                                                         |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| membersgrid       | Display Name Membership Beginning Ending | Used to display the members in a group, with the display name, membership type, and membership start and end dates for each member. |
| groupMemberOfGrid | Display Name Email Description           | Used to display the groups an object is a member of, with the display name, email address, and description shown for each group.    |
| directReportsGrid | Display Name Status                      | Used to display the direct reports of a user, with the display name and status shown for each direct report.                        |

What do you want to do?

- [Define a Grid Display Type](#define-a-grid-display-type)

## Define a Grid Display Type

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Grid_ in the
   **Type** drop-down list.
   You cannot change the name of a custom display type once you have created it.
7. Use the **Fields** area to specify the columns in the grid.

    1. Click **Add Field** to define a column. The **Grid Column** pane is displayed.
    2. Select a schema attribute in the **Field** drop-down list. This attribute serves as a column
       in the grid.
    3. Enter a name for the column in the **Display Name** box. This name is displayed as the column
       name in the portal.
    4. Click **Advanced Options** to specify additional details for the column.
    5. In the **Edit Type** drop-down list, select a display type (for example, a text box or a
       drop-down list). In edit mode, the fields in the column will be displayed in the portal using
       the display type you select here.
       As a prerequisite to making a column editable, make sure that:

        - editing is enabled for the grid (the **Editable** check box is selected on the **New
          Display Type** pane), and
        - editing is also enabled for the column (the **Editable** check box is selected on the
          **Grid Column** pane).

    6. In the **Search Type** drop-down list, select a display type (for example, a text box or a
       drop-down list). The search filter for the column will be displayed in the portal using the
       display type you select here.
       As a prerequisite to making a column searchable, make sure that:

        - search is enabled for the grid (the **Show Search Filters** check box is selected on the
          **New Display Type** pane), and
        - search is also enabled for the column (the **Searchable** check box is selected on the
          **Grid Column** pane).

    7. Select the **Searchable** check box to enable search for the column.
    8. Select the **Sortable** check box to enable users to sort the data displayed in the grid on
       the basis of the column attribute (by clicking the column header).
    9. Select the **Editable** check box to enable users to update the column value, in which case
       the fields in the column are editable. Clear this check box to make the column read-only.
    10. Click **OK**. The column name is displayed in the **Fields** area on the **New Display
        Type** pane.

8. Repeat step 7 to add more columns to the grid.

    - To edit the details of a column, click **Edit** for it.
    - To remove a column from the grid, click **Delete** for it.
    - To change the order of columns in the grid, click the equal sign for a column and drag to
      change its position.

9. Click **Advanced Options** to specify additional details for the grid.
10. Specify a height and width for the grid by entering values in the **Height** and **Width**
    boxes.
    From the drop-down list next to each box, select a unit for the height and width.

    - **%:** to specify the height and width of the grid in terms of a percentage of the page's
      height and width.
    - **px:** to specify the height and width of the grid in pixels.

11. In the **Page Size** box, type or select a value. This value represents the number of records to
    show in the grid, with pagination options to navigate to more records.
12. Select the **Show Search Filters** check box to add a row to the grid that serves as a search
    bar. This row appears in the grid, as shown below:

    ![search_row_in_grid](/images/directorymanager/11.0/admincenter/portal/displaytype/search_row_in_grid.webp)

13. Select the **Editable** check box to make the rows in the grid available for editing. Else, the
    grid will be read-only.
14. Click **OK**.
15. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.0/signin/applications/portal/displaytype/overview.md)
- [Display Type Categories](/docs/directorymanager/11.0/signin/applications/portal/categories/categories.md)
- [Define Custom Display Types](/docs/directorymanager/11.0/signin/applications/portal/categories/custom.md)
