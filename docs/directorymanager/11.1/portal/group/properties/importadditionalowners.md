---
title: "Import additional group owners in Directory Manager"
description: "Add additional owners to a group by importing a text, CSV, Excel, or XML file with the Import Additional Owners wizard."
keywords:
  - "import additional owners"
  - "group owners import"
  - "Import Additional Owners wizard"
  - "import file formats"
sidebar_position: 160
---

# Import additional group owners in Directory Manager

Use the **Import Additional Owners** wizard to specify additional owners for a group from an external file.

The wizard searches the directory for the objects listed in the file. If it finds them, it adds them as additional owners to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import additional owners using a wizard

Use the **Import** button on the **Owners** tab of the New Group page and in group properties to launch the **Import Additional Owners** wizard.

1. On the File page, click **Browse** to locate and select the file that contains the data to upload.
2. Click the Up arrow to upload the file to the Directory Manager server for processing.
3. Click **Next**.
4. On the **Import** page, do the following:

   1. In the **Import Options** section, select this site/domain or the entire directory from the **Search** dropdown list.

      The wizard compares records in the import file with records in the selected domain or directory to update the group's membership.

   2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory attribute (**Destination**).

      The wizard compares the value in the selected source field with the value of the selected destination field. Records with matching values are added to the group as members.

5. Review the **Preview** page. It displays the possible outcome of the import based on the settings you specified on the previous pages. The wizard processes the records from the source file by matching the values of the source and destination fields. Results can include the following types of items:

   - **Resolved Items:**

     Shows all objects that are successfully processed.

   - **Unresolved Items:**

     Shows objects that aren't processed because a matching object couldn't be found in the destination directory.

   - **Ambiguous Items:**

     Shows objects for which duplicate entries were found in the destination directory.

6. Click **Finish** to import the additional owners.
