---
title: "Change Permissions and Auditing"
description: "Change Permissions and Auditing"
sidebar_position: 20
---

# Change Permissions and Auditing

Use the Change Permissions and Auditing Parameters page to specify the permissions and auditing
settings the action changes.

![File System Action Module Wizard Change Permissions and Auditing Parameters page](/images/accessanalyzer/11.6/admin/action/filesystem/parameters/changepermissionsauditing.webp)

Use the following options to enter the Permissions:

- Insert field – Use the drop-down list to select a field (column) from the source table, then click
  the blue arrow
- Group or user names:

    - Click **Add** to select a user or group object
    - Click **Remove** to remove a user or group object
    - Dynamic – Uses the host id to retrieve the applicable permissions

In the table, select from the following options:

- Permission – Permissions for the selected user or group object
- Action – Modify the attribute for the selected permission
- Action Apply To – Select the files or folders to apply the action to.
- Audit – Report the status of the change to the attribute
- Audit Apply To - Select the files or folders to report the status on

Select from the following options (Multiple options can be selected):

- Overwrite existing file explicit permissions (target object only)
- Replace permission entries on all child objects
- Apply these permissions to objects within the target container only
