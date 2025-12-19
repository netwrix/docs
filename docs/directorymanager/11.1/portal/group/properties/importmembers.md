---
title: "Import Group Members"
description: "Import Group Members"
sidebar_position: 150
---

# Import Group Members

The **Import Members** wizard enables you to add members to the group using an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
members to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import group members using a wizard

Use the **Import** button on the **Members** tab of the New Group page and in group properties to
launch the **Import Members** wizard.

1. On the **Lifecycle** page, select whether the imported members should be added permanently or
   temporarily to the group membership. You can also import members from an existing group.

    - **Import Members Perpetually**: to add imported members permanently to the group membership.
    - **Import Members Temporarily**: to add imported members to the group membership for a specific
      period. At end of the period, the imported members are automatically removed from membership.
    - **Import Members From Group(s)**: to add all members of another group or groups to the
      membership of this group. See Import members of an existing group to this group.

2. In case of temporary membership, use the **Duration** list to specify the membership duration of
   the imported members. Options are:

    - **7 Days**, to add members to the group for 7 days starting today.
    - **30 Days**, to add members to the group for 30 days starting today.
    - **60 Days**, to add members to the group for 60 days starting today.
    - **90 Days**, to add members to the group for 90 days starting today.
    - **Custom**, to add objects to the group for the period you specify in the **From Date** and
      **To Date** boxes.

3. Click **Next**.
4. On the Data Source page, select the data source that contains the objects to import to the group
   membership from the directory. Select either of the two options:

    - **Local File**

        1. On the **File** page, click **Browse** to locate and select the file containing the data
           to upload.
        2. Click the **Up** arrow to upload the file to the Directory Manager server for processing.
        3. The **File Options** section appears after uploading the file. Select the sheet from the
           drop-down list.
        4. Click **Read Data** to complete the selection process.
        5. Click **Next**.

    - **External Data Source**

        1. On the **Providers** page, select [Query Designer](/docs/directorymanager/11.1/portal/group/querydesigner/overview.md) to
           create a query. The query will fetch all those members that match the set criteria.

            The Query Designer is not working. After adding provider in the data source, it is
            unable to read the table.

        2. Click **Next**.

5. On the **Import** page, follow these steps:

    1. In the **Import Options** section, select this site/domain or the entire directory from the
       **Search** drop-down list.

        The wizard compares records in the import file with records in the selected domain or
        directory to update the group's membership.

    2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory
       attribute (**Destination**).

        :::note
        While establishing mapping between a source field and a destination directory
        attribute, select a source field that has unique values, such as email address or
        sAMAccountName.
        :::


        The value in the selected source field is compared to the value of the selected destination
        field, and records with matching values are added to the group as members.

6. Click **Next**.
7. The **Preview** page displays the possible outcome of the import process based on the settings
   specified on the previous pages. The wizard processes the records from the source file by
   matching the values of the source and destination fields. Results displayed may include the
   following types of items:

    - **Resolved Items:**

        Shows all objects that will be successfully processed.

    - **Unresolved Items:**

        Shows objects that will not be processed because a matching object could not be found in the
        destination directory.

    - **Ambiguous Items:**

        Shows objects for which duplicate entries were found in the destination directory.

8. If you do not want existing group members to be deleted during import, make sure that the
   **Append existing items (uncheck to replace)** check box is selected.
9. Click **Finish** to import members from the specified file or provider.

## Import members of an existing group to this group

You can import all members of an existing group or groups to the membership of another group.

Use the **Import** button on the **Members** page of the New Group wizard and in group properties to
launch the **Import Members** wizard.

1. On the **Lifecycle** page, select the **Import Members From Group(s)** option to add all members
   of another group or groups to the membership of this group.
2. Click the **Search Groups** button; the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) is displayed,
   where you can search and select the group(s) whose members you want to import into the membership
   of this group.
3. Click **Next**.
4. The **Preview** page lists the groups whose members are to be imported. Click the name of a group
   to view a list of its members.
5. If you do not want existing group members to be deleted during import, make sure that the
   **Append existing items (uncheck to replace)** check box is selected.
6. Click **Finish** to import members from the selected group(s).
