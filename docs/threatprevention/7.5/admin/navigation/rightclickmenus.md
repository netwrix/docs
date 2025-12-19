---
title: "Right-Click Menus"
description: "Right-Click Menus"
sidebar_position: 10
---

# Right-Click Menus

In the Navigation pane, the Policies node, Templates node, folders, policies, and templates have
different right-click commands available.

**Alerts Node**

From the Agents node, the right-click menu can be used to install the Agent.

![Agents node - Right-click Menu](/images/threatprevention/7.5/admin/navigation/agentsmenu.webp)

| Right-Click Command | Description                    |
| ------------------- | ----------------------- |
| Install Agent       | Opens the [Deploy Agents Wizard](/docs/threatprevention/7.5/admin/agents/deploy/overview.md#deploy-agents-wizard) |

**Saved ‘Filtered Investigate’ Nodes**

From the node of a saved ‘Filtered Investigate’ view, the right-click menu allows you to delete the
saved view.

![Saved ‘Filtered Investigate’ Nodes - Right-click Menu](/images/threatprevention/7.5/admin/navigation/savedinvestigateviewnode.webp)

| Right-Click Command | Description                                   |
| ------------------- | --------------------------------------------- |
| Delete              | Deletes the saved ‘Filtered Investigate’ view |

**Policies and Templates Nodes**

From the Policies and Templates nodes, the right-click menu is limited to adding new folders to the
selected section.

![Policies and Templates Nodes - Right-click Menu](/images/threatprevention/7.5/admin/navigation/policiestemplatesnodes.webp)

| Right-Click Command   | Description                                   |
| --------------------- | --------------------------------------------- |
| New — Folder (Crtl+F) | Creates a new folder in the selected location |

**Folder Node**

From a Folder node, the right-click menu contains these commands.

![Folder Node - Right-click Menu](/images/threatprevention/7.5/admin/navigation/foldermenu.webp)

| Right-Click Command     | Description             |
| ----------------------- | ---------------------- |
| New — Policy (Crtl+P)   | Creates a new policy in the selected location. Only available for folders under the Policies node.    |
| New — Template (Crtl+T) | Creates a new template in the selected location. Only available for folders under the Templates node. |
| New — Folder (Crtl+F)   | Creates a new folder in the selected location       |
| Rename                  | Opens a textbox to rename the selected folder       |
| Remove                  | Deletes the selected folder      |
| Paste                   | Pastes a copied policy/template into the selected folder             |

:::note
If the logged in user does not have the **Manage Policies** permissions for a protected
policy, these options are grayed-out. See the [Policies Interface](/docs/threatprevention/7.5/admin/policies/overview.md) topic
for additional information on protection.
:::

**Policy Name and Template Name**

From the node for a specific policy or template, the right-click menu contains these commands.

![`<Policy Name>` and `<Template Name>` Nodes - Right-click Menu](/images/threatprevention/7.5/admin/navigation/individualpolicytemplatenode.webp)

| Right-Click Command | Description             |
| ------------------- | ------------------------- |
| Rename              | Opens a textbox to rename the selected policy/template        |
| Remove              | Deletes the selected policy/template        |
| Enable              | Enables the selected policy. Only available for policies.      |
| Disable             | Disables the selected policy. Only available for policies.        |
| Copy                | Copies the selected policy/template         |
| Cut                 | Copies the selected policy/template. Then it deletes the selected policy/template when the copy is pasted to a new folder. |

:::note
If the logged in user does not have the Manage Policies permissions for a protected
policy, these options are grayed-out. See the [Policies Interface](/docs/threatprevention/7.5/admin/policies/overview.md) topic
for additional information on protection.
:::


**Tags Node**

From the Tags node, the right-click menu contains these commands.

![Tags Node - Right-click menu](/images/threatprevention/7.5/admin/navigation/tagsnode.webp)

| Right-Click Command | Description       |
| ------------------- | ------------------------- |
| Refresh             | Refreshes the tag folders to display any new tags or any templates newly associated with an existing tag |

**Template Name Node under Tags**

From the template within a folder under the Tags node, the right-click menu contains these commands.

![Template Name Node under Tags - Right-click menu](/images/threatprevention/7.5/admin/navigation/templatenodeundertags.webp)

| Right-Click Command | Description                  |
| ------------------- | ---------------------------- |
| Copy                | Copies the selected template |

## Data Grid Right-Click Menu

A right-click menu is also available from the column headers of a data grid.

![Displays the data grid right-click menu. ](/images/threatprevention/7.5/admin/navigation/headerrightclickmenu.webp)

It contains the following selections:

| Right-Click Command          | Description         |
| --------------------- | --------------- |
| Full Expand          | Expands all sections within the data grid. Only available from a grouped column header.         |
| Full Collapse         | Collapses all sections within the data grid. Only available from a grouped column header.          |
| Sort Ascending        | Sorts data by the selected column in ascending alphanumeric order (A-Z)           |
| Sort Descending       | Sorts data by the selected column in descending alphanumeric order (Z-A)          |
| Clear Sorting / Clear All Sorting       | Removes sorting from the selected column or removes sorting from all columns        |
| Sort by Summary (Count by [column] – Sort Ascending/Descending) | Sorts ‘grouped’ data by severity count in ascending or descending order. Only available from a grouped column header.      |
| Group by This Column / UnGroup/Clear Grouping       | Groups data or clears grouping of data by the selected column      |
| Hide/Show Group by Box      | Hides or shows the Group By box where headers can be dragged-and-dropped to group the data       |
| Group Interval     | If grouped by the Time column, use this option to group by time intervals (Day, Month, Year, Smart). Only available from a grouped column header.     |
| Hide This Column      | Hides the selected column from the data grid. Hidden columns can be returned to the data grid through the Column Chooser option.     |
| Column Chooser       | Opens the [Customization Window](/docs/threatprevention/7.5/admin/navigation/datagrid.md#customization-window) where you can add and remove columns from the data grid |
| Best Fit       | Changes column width to fit the data within the selected column       |
| Best Fit (all columns)       | Changes column width for all columns to fit the data               |
| Filter Editor       | Opens the Filter Editor window (see the [Filter Data](/docs/threatprevention/7.5/admin/navigation/datagrid.md#filter-data) topic)     |
| Show / Hide Find Panel     | Shows or hides the Find Panel, which is the search feature (see the [Search Data](/docs/threatprevention/7.5/admin/navigation/datagrid.md#search-data) topic)          |
| Hide / Show Auto Filter Row     | Hides or shows the Auto Filter Row between the column headers and the first row of event data       |
