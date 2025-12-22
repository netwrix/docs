---
title: "File System Action: Destination"
description: "File System Action: Destination"
sidebar_position: 70
---

# File System Action: Destination

The Destination page is available only if the following operations are selected:

- Copy
- Move
- Rename

Define the destination location of the files that will be copied, moved, or renamed by building the
destination path using the Fields and Environment Variables options as needed.

![File System Action Module Wizard Destination page](/images/accessanalyzer/11.6/admin/action/filesystem/destination.webp)

Use the fields provided to select destination items and hosts from the drop-down lists and populate
the Destination field, or edit the field manually. The Preview field updates based on the contents
of the Destination field.

- Fields – Use the drop-down list to select a field (column) from the source table, then click the
  blue arrow to insert the item into the **Destination** field
- Environment Variables – Select an item from the drop-down list, then click the blue arrow to
  insert the item into the **Destination** field
- Target Items – Enter the path to the target file or folder

    - Click the **ellipsis (…)** to browse for pattern path specification
    - Click the **tick** icon to show a preview of the specified path
    - Click the **Help** icon for additional information

- Host – Select the field that identifies the systems or manually type the host destination
- Use path type – Choose from the following options:

    - Local – Uses the local path
    - UNC – Uses the UNC path

- Preview – Shows what the compound path specified will be resolved in to. The text here is used to
  initialize the file specification selection dialog.
