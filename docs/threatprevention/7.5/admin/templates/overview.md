---
title: "Templates Interface"
description: "Templates Interface"
sidebar_position: 90
---

# Templates Interface

The Templates interface provides a list of all the pre-created policy templates in Threat
Prevention. Click **Temaples** in the Navigation pane to launch the Templates interface.

![Templates Interface](/images/threatprevention/7.5/admin/templates/templates.webp)

The following is displayed for a template:

- Name
- Path – Location within the Navigation pane
- Description

The list of templates can be sorted alphanumerically ascending or descending by clicking on a column
header. An arrow appears in the right corner of the column header indicating the type of sorting.
You can also right-click a template to get a right-click menu.

**Templates Node**

Under the Templates node in the Navigation pane, folders are used to organize the templates. Folders
can be created at the top level or as sub-folders since Threat Prevention supports unlimited levels
for organizing templates. The pre-created templates are organized into multiple folders. See the
[Pre-Created Templates](/docs/threatprevention/7.5/admin/templates/folder/overview.md) topic for additional information.

- Click a template to open it and view its configurations. See the
  [Template Configuration](/docs/threatprevention/7.5/admin/templates/configuration/configuration.md) topic for additional information.
- You can move a templates from one folder to another by dragging-and-dropping. This is a Move
  action.
- You can also drag a template into a folder under the Policies node. This would be a Copy action,
  and converts the template into a policy. See the
  [Use a Template to Create a Policy](/docs/threatprevention/7.5/admin/templates/createpolicy.md) topic for additional information.

## Right-Click Menu

Each template listed in the Templates interface has a right-click menu. Select a template and
right-click to open this menu.

![Templates interface - Right-Click Menu](/images/threatprevention/7.5/admin/templates/rightclickmenu.webp)

It contains the following options:

| Right-Click Command  | Description      |
| -------------------- | ------------------ |
| Enable (grayed-out)  | [Does not apply to templates]      |
| Disable (grayed-out) | [Does not apply to templates]    |
| Export               | Exports the selected template’s configuration to an XML file through the [Export Policies and Templates Window](/docs/threatprevention/7.5/admin/policies/exportpoliciestemplates.md) |
| Remove               | Deletes the selected template     |
