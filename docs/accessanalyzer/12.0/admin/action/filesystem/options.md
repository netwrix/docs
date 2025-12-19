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

- Delete locked files on reboot – Files that are locked can be queued to be deleted at the next
  system start up
- Overwrite existing files – Files in the destination location are overwritten. This action cannot
  be undone.
- Terminate associated process – Files that are locked cannot be actively moved, renamed or deleted
  without stopping the associated process. If selected, this may cause an interruption to any users
  of that target system and service.
- Create shortcuts to the moved files in the source directory – A shortcut will be created in the
  source directory that points to the new location of a moved file
- Preserve file access – Copy the file ACL from the source directory to the destination to preserve
  file access. Child objects, with inherited permissions or broken inheritance, targeted by copy or
  move actions retain their permissions. Parent folders with inherited permissions are changed to
  explicit.
- Enable SACL modification – Request system security access when opening files in order to make SACL
  changes
- Retry failed rows – Enter the following information:

    - Number of times to retry
    - Do not retry error codes – Rows of data with error codes listed within this textbox are
      excluded from the action performed. Common errors are included for certain actions, and may be
      customized to add or remove error codes. See the Microsoft
      [System Error Codes](https://docs.microsoft.com/en-us/windows/desktop/Debug/system-error-codes)
      article for additional information.
    - Delay between retries

- Enable batching – (For big data sets) Enabling batching breaks the data set into batches so the
  action does not attempt to execute all lines at once. Actions performed on tables with a large
  number of input rows may fail due to network failure, and it is difficult to determine the actions
  that were executed before the failure.

    - Batch size – Specify the batch size.

**Start Process**

Select the desired start process.

:::warning
Due to system security limitations, some applications and programs cannot be restarted
or run remotely using this option. Additionally, starting interactive processes (such as Word,
Excel, and so on) will load them into memory, but may not make them available for interaction by the
end user.
:::


Use the fields provided to select target items and hosts from the drop-down lists and populate the
Set working directory field, or edit the field manually. The Preview field updates based on the
contents of the Set working directory field.
