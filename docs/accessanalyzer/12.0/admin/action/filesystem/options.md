---
title: "File System Action: Options"
description: "File System Action: Options"
sidebar_position: 90
---

# File System Action: Options

The Options page provides access to additional options for the action. Based on the selection on the
Operation page and other choices made within the wizard, not all options on this page may be
available.

![File System Action Module Wizard Options page](/images/accessanalyzer/12.0/admin/action/filesystem/options.webp)

Select from the following additional operations:

- Delete locked files on reboot – Queues locked files for deletion at the next system startup
- Overwrite existing files – Overwrites files in the destination location. This action can't
  be undone.
- Terminate associated process – You can't move, rename, or delete locked files without stopping
  the associated process. If you select this option, it may interrupt users of the target system
  and service.
- Create shortcuts to the moved files in the source directory – Creates a shortcut in the
  source directory that points to the new location of a moved file
- Preserve file access – Copy the file ACL from the source directory to the destination to preserve
  file access. Child objects, with inherited permissions or broken inheritance, targeted by copy or
  move actions retain their permissions. Parent folders with inherited permissions change to
  explicit permissions.
- Enable SACL modification – Request system security access when opening files to make SACL
  changes
- Retry failed rows – Enter the following information:

    - Number of times to retry
    - Don't retry error codes – Excludes rows of data with error codes listed in this textbox from
      the action performed. Certain actions include common errors by default, and you can customize
      the list to add or remove error codes. See the Microsoft
      [System Error Codes](https://docs.microsoft.com/en-us/windows/desktop/Debug/system-error-codes)
      article for additional information.
    - Delay between retries

- Enable batching – (For big data sets) Enabling batching breaks the data set into batches so the
  action doesn't attempt to execute all lines at once. Actions performed on tables with a large
  number of input rows may fail due to a network failure, making it difficult to determine which
  actions ran before the failure.

    - Batch size – Specify the batch size.

**Start Process**

Select the process you want to start.

:::warning
Due to system security limitations, this option can't restart or run some applications and programs
remotely. Additionally, starting interactive processes (such as Word or Excel) loads them into
memory but may not make them available to the end user for interaction.
:::


Use the fields provided to select target items and hosts from the dropdown lists and populate the
Set working directory field, or edit the field manually. The Preview field updates based on the
contents of the Set working directory field.
