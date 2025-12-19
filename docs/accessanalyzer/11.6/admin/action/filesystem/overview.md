---
title: "File System Action Module"
description: "File System Action Module"
sidebar_position: 30
---

# File System Action Module

The File System Action Module allows Enterprise Auditor Administrators to automate the process of
remediating and modifying Windows file system attributes and properties. The File System Action
Module provides options for changing attributes and permissions, as well as copying, deleting,
moving, and renaming file system contents. It is available with a special Enterprise Auditor
license.

:::warning
Be careful when using this Action Module. Make sure that only the changes required are
applied and only to those target systems desired. Actions perform their functions on all rows in a
table.
:::


Enterprise Auditor action modules contain one or more selectable operations. Each operation performs
its function on a single object per row from the source table defined in the action.

## Permissions

The File System Action Module requires a Enterprise Auditor connection profile and privileged access
to file system devices. The Enterprise Auditor connection profile may be configured to have a Task
account type. The following are the least privileged access model required for Share Permission
Changes:

- Windows – User credential must be member of Power Users group
- NetApp Data ONTAP 7-Mode Device – User credential must be member of Power Users group
- NetApp Data ONTAP Cluster-Mode Device – User credential must have role on SVM that has permission
  to modify share permissions

    :::note
    Enter the following syntax to create role:
    :::


    ```
    ‑security login role create ‑role [DESIRED_ROLE_NAME] ‑cmddirname “vserver cifs share access-control” ‑vserver [VSERVER_NAME] ‑access all
    ```

    Replace the `[DESIRED_ROLE_NAME]` and `[VSERVER_NAME]` variables with the required information.
    For example:

    ```
    ‑security login role create ‑role netwrix ‑cmddirname “vserver cifs share access-control” ‑vserver testserver ‑access all
    ```

## Applet Deployment

The File System Action Module deploys an applet the first time an action is executed. Applets are
installed within the Enterprise Auditor Installation Directory if the `%SAInstallDir%` environment
is present. Otherwise, applets are deployed to `C:\Program Files (x86)\STEALTHbits\StealthAUDIT`.

## Source Table Configuration

Individual action modules, including File System Action Module, may have their own column
requirements. To take action on a file system resource, the source table must contain a column with
values to uniquely identify it. File System resources correspond to rows in a Enterprise Auditor
table. File System attributes correspond to columns. Once the source table has been scoped, use the
Target page to specify the field that identifies the target attribute along with any environmental
variables.

These columns are required to use the File System Action Module. Otherwise, errors may occur upon
execution of the action and with analysis and reports downstream.

| Required Columns | Description                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| rowGUID          | Identifies each data row as unique. The datatype in the table is uniqueidentifier (GUID).                                    |
| RowKey           | Identifies each data row as unique. Sometimes the value is a GUID, but the datatype in the table is a varchar (text string). |

:::tip
Remember, the individual File System actions may have their own column requirements in addition to
the above. These columns are made available through the File System Action Module wizard.
:::


The Operations page lists the operations that may be performed by the File System Action Module.
Each operation has its own source table column requirements as follows:

| Operation                       | Column requirements                                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change attributes               | Columns containing: <ul><li>Object to change attributes for</li><li>UNC path or local path (files or folders)</li></ul>                                                 |
| Change permissions and Auditing | Columns containing: <ul><li>Object to change permissions for</li><li>UNC path or local path</li><li>(Optional) Permission values to change (files or folders)</li></ul> |
| Change permission inheritance   | Columns containing: <ul><li>Object to change permission inheritance for</li><li>UNC path or local path (files or folders)</li></ul>                                     |
| Change Share permissions        | Columns containing: <ul><li>Share to change permissions for</li><li>UNC path or local path (shares)</li></ul>                                                           |
| Copy                            | Columns containing: <ul><li>Object to copy</li><li>Location to copy the object to</li><li>UNC path or local path</li></ul>                                              |
| Delete                          | Columns containing: <ul><li>Object to delete</li><li>UNC Path or local path</li></ul>                                                                                   |
| Launch Remote Process           | No specific columns required                                                                                                                                            |
| Move                            | Columns containing: <ul><li>Object to move</li><li>Location to move the object to</li><li>UNC path or local path</li></ul>                                              |
| Remove permissions              | Columns containing: <ul><li>Object to remove permissions for</li><li>UNC path or local path (files or folders)</li></ul>                                                |
| Remove Share permissions        | Columns containing: <ul><li>Object to remove Share permissions for</li><li>UNC path or local path (shares)</li></ul>                                                    |
| Rename                          | Columns containing: <ul><li>Object to rename</li><li>New name of the object</li><li>UNC path or local path</li></ul>                                                    |
| Add tags                        | Columns containing: <ul><li>Object to add tags to</li><li>UNC path or local path (files)</li></ul>                                                                      |
| Remove tags                     | Columns containing: <ul><li>Object to remove tags from</li><li>UNC path or local path (files)</li></ul>                                                                 |
| Change Owner                    | Columns containing: <ul><li>Object to change ownership for</li><li>UNC path or local path (folders)</li></ul>                                                           |


## Configuration

The File System Action module is configured through the File System Action Module Wizard, which
contains the following wizard pages:

:::note
Depending on the selections on the various pages, not all pages may be accessible.
:::


- Welcome
- [File System Action: Action](/docs/accessanalyzer/11.6/admin/action/filesystem/action.md)
- [File System Action: Operation](/docs/accessanalyzer/11.6/admin/action/filesystem/operation.md)
- [File System Action: Prior Actions](/docs/accessanalyzer/11.6/admin/action/filesystem/prioractions.md)
- [File System Action: Environment](/docs/accessanalyzer/11.6/admin/action/filesystem/environment.md)
- [File System Action: Target](/docs/accessanalyzer/11.6/admin/action/filesystem/target.md)
- [File System Action: Parameters](/docs/accessanalyzer/11.6/admin/action/filesystem/parameters/parameters.md)
- [File System Action: Destination](/docs/accessanalyzer/11.6/admin/action/filesystem/destination.md)
- [File System Action: Rollback](/docs/accessanalyzer/11.6/admin/action/filesystem/rollback.md)
- [File System Action: Options](/docs/accessanalyzer/11.6/admin/action/filesystem/options.md)
- [File System Action: Applet Settings](/docs/accessanalyzer/11.6/admin/action/filesystem/appletsettings.md)
- [File System Action: Summary](/docs/accessanalyzer/11.6/admin/action/filesystem/summary.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard, which may change based on the Action selected on the
Action page.

![File System Action Module Wizard Welcome page](/images/accessanalyzer/11.6/admin/action/filesystem/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
