---
title: "Search and Filter Taxonomies"
description: "Search and Filter Taxonomies"
sidebar_position: 80
---

# Search and Filter Taxonomies

The taxonomies are displayed in a hierarchical structure on the left hand side of the page, allowing
for specific terms to be selected and managed. The dropdown list shows all available taxonomies.

:::note
For the SharePoint Terms, they will be grouped by the SharePoint Term Group.
:::


![treeview](/images/dataclassification/5.7/admin/taxonomies/treeview.webp)

Right-clicking the tree view nodes provides a number of management options at both the term and
termset level including:

- Add Child Term
- Rename Term
- Delete Term
- Re-Classify Term
- Re-Classify Tagged
- Pin Term With Children
- Reuse Terms
- Export CSV

You can also drag-and-drop a node from one location on the tree view to another. After dropping the node, you can select to either move, copy, or merge the nodes.

Browser rendering restrictions limit the maximum suitable size per level within the tree view at
10,000 terms. Structure the tree view across multiple branches for both performance and usability. Once a branch within the taxonomy reaches 10,000 terms the tree view
will cap the returned nodes and log a warning to the event logs.

Review the following for additional information:

- Searching for Taxonomy Terms
- "Sync Enabled" Treeview Filter
- Source Filter

[](#)Searching for Taxonomy Terms

The system provides a search facility to locate terms containing specified text:

Click the magnifying glass icon to the right of the taxonomy dropdown and a new edit box appears
where you can enter search text:

![taxonomysearch](/images/dataclassification/5.7/admin/taxonomies/taxonomysearch.webp)

[](#)"Sync Enabled" Treeview Filter

For SharePoint Term Sets you can optionally filter the treeview to only show terms that are enabled
for synchronisation (configured on the term Settings screen).

This setting is session specific and applicable only to the current user:

![treeviewsyncfilter](/images/dataclassification/5.7/admin/taxonomies/treeviewsyncfilter.webp)

[See Taxonomy Settings for more information.](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/settings/settings.md)

[](#)Source Filter

A filter facility is also provided to restrict all search/browse results to a specific source. Click
the source filter link in the top right of the display, then, select a source:

![sourcefilter](/images/dataclassification/5.7/admin/taxonomies/sourcefilter.webp)

The filter setting can be stored for the session, or just maintained for the browser window.
