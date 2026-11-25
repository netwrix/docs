---
title: "Import group members in Directory Manager"
description: "Add members to a group from a file, an external data source, or another group, permanently or for a set period."
keywords:
  - "import group members"
  - "Import Members wizard"
  - "temporary group membership"
  - "Query Designer import"
  - "import members from groups"
sidebar_position: 150
---

# Import group members in Directory Manager

The **Import Members** wizard lets you add members to a group from an external file.

The wizard searches the directory for the objects listed in the file. If it finds them, it adds them as members to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import group members using a wizard

Use the **Import** button on the **Members** tab of the New Group page and in group properties to launch the **Import Members** wizard.

1. On the **Lifecycle** page, select whether to add the imported members permanently or temporarily to the group membership. You can also import members from an existing group.

   - **Import Members Perpetually**: Adds imported members permanently to the group membership.
   - **Import Members Temporarily**: Adds imported members to the group membership for a specific period. At the end of the period, the wizard automatically removes the imported members from membership.
   - **Import Members From Groups**: Adds all members of another group or groups to the membership of this group. See Import members of an existing group to this group.

2. For temporary membership, use the **Duration** list to specify how long the imported members stay in the group. Options are:

   - **7 Days**, to add members to the group for 7 days starting today.
   - **30 Days**, to add members to the group for 30 days starting today.
   - **60 Days**, to add members to the group for 60 days starting today.
   - **90 Days**, to add members to the group for 90 days starting today.
   - **Custom**, to add objects to the group for the period you specify in the **From Date** and **To Date** boxes.

3. Click **Next**.
4. On the Data Source page, select the data source that contains the objects to import to the group membership from the directory. Select one of the following options:

   - **Local File**

     1. On the **File** page, click **Browse** to locate and select the file that contains the data to upload.
     2. Click the **Up** arrow to upload the file to the Directory Manager server for processing.
     3. In the **File Options** section that appears after the upload, select the sheet from the dropdown list.
     4. Click **Read Data** to complete the selection process.
     5. Click **Next**.

   - **External Data Source**

     1. On the **Providers** page, select [Query Designer in the Directory Manager portal](/docs/directorymanager/11.2/portal/group/querydesigner/overview.md) to create a query. The query fetches all members that match the set criteria.

        The Query Designer isn't working. After adding provider in the data source, it is unable to read the table.

     2. Click **Next**.

5. On the **Import** page, do the following:

   1. In the **Import Options** section, select this site/domain or the entire directory from the **Search** dropdown list.

      The wizard compares records in the import file with records in the selected domain or directory to update the group's membership.

   2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory attribute (**Destination**).

      :::note
      When you map a source field to a destination directory attribute, select a source field that has unique values, such as email address or sAMAccountName.
      :::

      The wizard compares the value in the selected source field with the value of the selected destination field. Records with matching values are added to the group as members.

6. Click **Next**.
7. Review the **Preview** page. It displays the possible outcome of the import based on the settings you specified on the previous pages. The wizard processes the records from the source file by matching the values of the source and destination fields. Results can include the following types of items:

   - **Resolved Items:**

     Shows all objects that are successfully processed.

   - **Unresolved Items:**

     Shows objects that aren't processed because a matching object couldn't be found in the destination directory.

   - **Ambiguous Items:**

     Shows objects for which duplicate entries were found in the destination directory.

8. To keep existing group members during the import, ensure that the **Append existing items (uncheck to replace)** checkbox is selected.
9. Click **Finish** to import members from the specified file or provider.

## Import members of an existing group to this group

You can import all members of an existing group or groups to the membership of another group.

Use the **Import** button on the **Members** page of the New Group wizard and in group properties to launch the **Import Members** wizard.

1. On the **Lifecycle** page, select the **Import Members From Groups** option to add all members of another group or groups to the membership of this group.
2. Click the **Search Groups** button. The [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md) opens. Search for and select the groups whose members you want to import into the membership of this group.
3. Click **Next**.
4. Review the **Preview** page. It lists the groups whose members are to be imported. Click the name of a group to view a list of its members.
5. To keep existing group members during the import, ensure that the **Append existing items (uncheck to replace)** checkbox is selected.
6. Click **Finish** to import members from the selected groups.
