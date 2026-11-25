---
title: "Grid Display Type in Directory Manager Portal"
description: "Create a grid display type to show multi-valued attributes, such as group members, in tabular form in the portal."
keywords:
  - grid display type
  - custom display types
  - Directory Manager Portal
  - portal design settings
  - multi-valued attributes
sidebar_position: 60
---

# Grid Display Type in Directory Manager Portal

Use a grid display type to display data in tabular form in the portal. This is especially helpful when you want to group together multiple attributes of an object.

For example, use a grid display type to capture information about a group's additional owners and members, such as a member's display name, department, and email. Add a column to the grid for each attribute you need. Portal users can then view or enter values in each column (attribute) for an object.

To create a grid, define its columns. Each column is mapped to a schema attribute and represents the value of that attribute.

After you create the custom grid display type, link it to a schema attribute to render it on a portal page. This attribute must support multi-valued distinguished names. Examples of such Active Directory attributes include _member_ and _memberof_.

## Predefined grid display types

The default portal template uses these grid display types, among others:

| Display Type Name | Column Names                             | Description                                                                                                                         |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| membersgrid       | Display Name Membership Beginning Ending | Used to display the members in a group, with the display name, membership type, and membership start and end dates for each member. |
| groupMemberOfGrid | Display Name Email Description           | Used to display the groups an object is a member of, with the display name, email address, and description shown for each group.    |
| directReportsGrid | Display Name Status                      | Used to display the direct reports of a user, with the display name and status shown for each direct report.                        |

## Define a grid display type

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, each portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it. All identity stores associated with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Grid_ in the **Type** dropdown list. You can't change the name of a custom display type after you create it.
7. Use the **Fields** area to specify the columns in the grid.

   1. Click **Add Field** to define a column. The **Grid Column** pane is displayed.
   2. In the **Field** dropdown list, select a schema attribute. This attribute becomes a column in the grid.
   3. Enter a name for the column in the **Display Name** box. The portal displays this name as the column name.
   4. Click **Advanced Options** to specify additional details for the column.
   5. In the **Edit Type** dropdown list, select a display type, such as a text box or a dropdown list. In edit mode, the portal displays the fields in the column using this display type.

      Before you make a column editable, ensure that:

      - Editing is enabled for the grid (the **Editable** checkbox is selected on the **New Display Type** pane).
      - Editing is also enabled for the column (the **Editable** checkbox is selected on the **Grid Column** pane).

   6. In the **Search Type** dropdown list, select a display type, such as a text box or a dropdown list. The portal displays the search filter for the column using this display type.

      Before you make a column searchable, ensure that:

      - Search is enabled for the grid (the **Show Search Filters** checkbox is selected on the **New Display Type** pane).
      - Search is also enabled for the column (the **Searchable** checkbox is selected on the **Grid Column** pane).

   7. Select the **Searchable** checkbox to enable search for the column.
   8. Select the **Sortable** checkbox to let users sort the grid data by the column attribute. Users click the column header to sort.
   9. Select the **Editable** checkbox to let users update the column value. Clear this checkbox to make the column read-only.
   10. Click **OK**. The column name is displayed in the **Fields** area on the **New Display Type** pane.

8. Repeat step 7 to add more columns to the grid.

   - To edit the details of a column, click **Edit** for it.
   - To remove a column from the grid, click **Delete** for it.
   - To change the order of columns in the grid, click the equal sign for a column and drag to change its position.

9. Click **Advanced Options** to specify additional details for the grid.
10. In the **Height** and **Width** boxes, specify a height and width for the grid. From the dropdown list next to each box, select a unit:

    - **%:** Sets the height and width as a percentage of the page's height and width.
    - **px:** Sets the height and width in pixels.

11. Use the **Page Size** box to select or enter the number of records to show in the grid. Pagination options let users navigate to more records.
12. Select the **Show Search Filters** checkbox to add a row to the grid that works as a search bar. The row appears in the grid, as shown in the following image:

    ![Members grid with a search row of filter boxes above the data rows](/images/directorymanager/11.2/admincenter/portal/displaytype/search_row_in_grid.webp)

13. Select the **Editable** checkbox to make the rows in the grid available for editing. Otherwise, the grid is read-only.
14. Click **OK**.
15. Click **Save** on the **Custom Display Types** page.
