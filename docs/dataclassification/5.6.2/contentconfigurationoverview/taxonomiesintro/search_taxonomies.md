---
title: "Search and Filter Taxonomies"
description: "Search and Filter Taxonomies"
sidebar_position: 50
---

# Search and Filter Taxonomies

The taxonomies are displayed in a hierarchical structure on the left hand side of the page, allowing
for specific terms to be selected and managed. The dropdown list shows all available taxonomies.

**NOTE:** For the SharePoint Terms, they will be grouped by the SharePoint Term Group.

![treeview](/images/dataclassification/5.6.2/taxonomies/treeview.webp)

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

You can also drag-and-drop a node from one location on the tree view to another, once you have
dropped the node you can select to either move, copy, or merge the node(s).

Browser rendering restrictions limits the maximum suitable size per level within the tree view at
10,000 terms. Therefore we recommend that the tree view is structured across multiple branches, both
for performance and usability. Once a branch within the taxonomy reaches 10,000 terms the tree view
will cap the returned nodes and log a warning to the event logs.

Review the following for additional information:

- [Searching for Taxonomy Terms](#searching-for-taxonomy-terms)
- ["Sync Enabled" Treeview Filter](#sync-enabled-treeview-filter)
- [Source Filter](#source-filter)

## Searching for Taxonomy Terms

A search facility is provided to locate terms that contains specified text:

Click the magnifying glass icon to the right of the taxonomy dropdown and a new edit box appears
where search text may be entered:

![taxonomysearch](/images/dataclassification/5.6.2/taxonomies/taxonomysearch.webp)

## "Sync Enabled" Treeview Filter

For SharePoint Term Sets the treeview can optionally be filtered to only show terms that are enabled
for synchronisation (configured on the term Settings screen).

This setting is session specific and applicable only to the current user:

![treeviewsyncfilter](/images/dataclassification/5.6.2/taxonomies/treeviewsyncfilter.webp)

[See Taxonomy Settings for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/taxonomysettings/taxonomy_settings.md)

## Source Filter

A filter facility is also provided to restrict all search/browse results to a specific source. Click
the source filter link in the top right of the display, then, select a source:

![sourcefilter](/images/dataclassification/5.6.2/taxonomies/sourcefilter.webp)

The filter setting can be stored for the session, or just maintained for the browser window.
