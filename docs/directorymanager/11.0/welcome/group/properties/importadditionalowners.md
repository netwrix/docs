---
title: "Import Additional Owners"
description: "Import Additional Owners"
sidebar_position: 160
---

# Import Additional Owners

The **Import Additional Owners** wizard enables you to specify additional owners for a group using
an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
additional owners to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

What do you want to do?

- [Import additional owners using a wizard](#import-additional-owners-using-a-wizard)

## Import additional owners using a wizard

Use the **Import** button on the **Owners** tab of the New Group page and in group properties to
launch the **Import Additional Owners** wizard.

1. On the **File** page, click **Browse** to locate and select the file containing the data to
   upload.
2. Click the **Up** arrow to upload the file to the GroupID server for processing.
3. Click **Next**.
4. On the **Import** page, follow these steps:

    1. In the **Import Options** section, select this site/domain or the entire directory from the
       **Search** drop-down list.

        The wizard compares records in the import file with records in the selected domain or
        directory to update the group's membership.

    2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory
       attribute (**Destination**).

        The value in the selected source field is compared to the value of the selected destination
        field, and records with matching values are added to the group as members.

5. The **Preview** page displays the possible outcome of the import process based on the settings
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

6. Click **Finish** to import the Additional Owners.

**See Also**

- [Groups](/docs/directorymanager/11.0/welcome/group/create/overview.md)
- [Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
