---
title: "File System Action: Applet Settings"
description: "File System Action: Applet Settings"
sidebar_position: 100
---

# File System Action: Applet Settings

Use the Applet Settings page to specify the machines on which to execute the selected operation.

![File System Action Module Wizard Applet Settings page](/images/accessanalyzer/11.6/admin/action/filesystem/appletsettings.webp)

Specify how the operations will be executed:

- Automatic – Get host data from the Host Management
- Local Enterprise Auditor server
- Specific remote server:

    - Fields – Use the drop-down list to select a field (column) from the source table, then click
      the blue arrow to insert the item into the **Remote server** field
    - Environment Variables – Select an item from the drop-down list, then click the blue arrow to
      insert the item into the **Remote Server** field
    - Remote Server – Enter the path to the server
    - Click the **ellipsis (…)** to browse for server
    - Click the **tick** icon to show a preview of the path
    - Click the **Help** icon for additional information

- Preview – Shows what the compound path specified will be resolved in to. The text here is used to
  initialize the path specification selection dialog.
- Specific remote servers – Click the **ellipsis (…)** to browse for servers

    - Click **Add** to add the server
    - Click **Remove** to remove the server

- Fall back to the local Enterprise Auditor server if an applet cannot start – Check to enable this
  option
