# File System Action Module

The File System Action Module allows Enterprise Auditor Administrators to automate the process of
remediating and modifying Windows file system attributes and properties. The File System Action
Module provides options for changing attributes and permissions, as well as copying, deleting,
moving, and renaming file system contents. It is available with a special Enterprise Auditor
license.

**CAUTION:** Be careful when using this Action Module. Make sure that only the changes required are
applied and only to those target systems desired. Actions perform their functions on all rows in a
table.

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

    **NOTE:** Enter the following syntax to create role:

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

_Remember,_ the individual File System actions may have their own column requirements in addition to
the above. These columns are made available through the File System Action Module wizard.

The Operations page lists the operations that may be performed by the File System Action Module.
Each operation has its own source table column requirements as follows:

| Operation                       | Column requirements                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Change attributes               | Columns containing: - Object to change attributes for - UNC path or local path (files or folders)                                           |
| Change permissions and Auditing | Columns containing: - Object to change permissions for - UNC path or local path - (Optional) Permission values to change (files or folders) |
| Change permission inheritance   | Columns containing: - Object to change permission inheritance for - UNC path or local path (files or folders)                               |
| Change Share permissions        | Columns containing: - Share to change permissions for - UNC path or local path (shares)                                                     |
| Copy                            | Columns containing: - Object to copy - Location to copy the object to - UNC path or local path                                              |
| Delete                          | Columns containing: - Object to delete - UNC Path or local path                                                                             |
| Launch Remote Process           | No specific columns required                                                                                                                |
| Move                            | Columns containing: - Object to move - Location to move the object to - UNC path or local path                                              |
| Remove permissions              | Columns containing: - Object to remove permissions for - UNC path or local path (files or folders)                                          |
| Remove Share permissions        | Columns containing: - Object to remove Share permissions for - UNC path or local path (shares)                                              |
| Rename                          | Columns containing: - Object to rename - New name of the object - UNC path or local path                                                    |
| Add tags                        | Columns containing: - Object to add tags to - UNC path or local path (files)                                                                |
| Remove tags                     | Columns containing: - Object to remove tags from - UNC path or local path (files)                                                           |
| Change Owner                    | Columns containing: - Object to change ownership for - UNC path or local path (folders)                                                     |

## Configuration

The File System Action module is configured through the File System Action Module Wizard, which
contains the following wizard pages:

**NOTE:** Depending on the selections on the various pages, not all pages may be accessible.

- Welcome
- [File System Action: Action](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/action.md)
- [File System Action: Operation](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/operation.md)
- [File System Action: Prior Actions](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/prioractions.md)
- [File System Action: Environment](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/environment.md)
- [File System Action: Target](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/target.md)
- [File System Action: Parameters](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/parameters.md)
- [File System Action: Destination](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/destination.md)
- [File System Action: Rollback](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/rollback.md)
- [File System Action: Options](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/options.md)
- [File System Action: Applet Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/appletsettings.md)
- [File System Action: Summary](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/filesystem/summary.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard, which may change based on the Action selected on the
Action page.

![File System Action Module Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
