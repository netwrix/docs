---
title: "Source Groups"
description: "Source Groups"
sidebar_position: 50
---

# Source Groups

Source groups provide a way of logically grouping specific sources, perhaps by type, or perhaps by
an internal business specification. Selecting the option Add to Group on the main sources grid
screen will present the following pop-up:

![addtogroup](/images/dataclassification/5.6.2/sources/source_groups/addtogroup.webp)

A group can either be "mixed", which allows it to contain all source types, or source specific. In
the example above a group would be created entitled "Demo Content", which only supports the addition
of SharePoint sources. If a supporting source group already exists, this can be selected from the
drop-down list provided. [See Dynamic Source Groups for more information.](#dynamic-source-groups)

Selecting the cog icon on the main sources grid screen for a source group allows you to amend the
group settings:

![editgroup](/images/dataclassification/5.6.2/sources/source_groups/editgroup.webp)

Here you can:

- Amend the group name
- Delete the group
- Enable / Disable Indexing—When disabled content will not be processed into the core search index
  (content will be excluded from Browse / Search / Suggestions, classification will occur as normal)
- Set the Re-index period, priority, and credentials for a single source in the group or configure
  these options for all sources in this group using the "Apply changes to all sources in Source
  Group" option.

    **NOTE:** Credentials will only be supported if the source group is type specific

- Enable / Disable Content Collection — Disabled files within the source group will not be
  processed. Containers (folders, lists etc.) will be processed as normal with their children
  inserted at a pending state until child collection is re-enabled. This allows a source to be fully
  enumerated before any files are processed
- _(SharePoint only)_ Supply regular expression rules to support automatically assigning sources to
  a specific group

Deleting a group will remove all existing items from the group leaving them unassigned. You can also
remove a specific source(s) from a group by selecting the source group in the grid and then
selecting Remove from Group for the required source(s). Source groups can also be created and
assigned as part of the source creation process.

## Dynamic Source Groups

Dynamic Source Groups are used to add a collection of sources at once. These source groups are
accessed through the Add page in the Auto-Detect a Set of Sources section. Each Dynamic Source Group
will have different options depending on which one is being configured. The Dynamic Source Groups
are:

- [Dynamic Source Groups — Exchange](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcegroups/dynamic_source_groups_-_exchange.md)
- [Dynamic Source Groups — File Servers](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcegroups/dynamic_source_groups_-_file.md)
- [Dynamic Source Groups — Google Drive Organization](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcegroups/dynamic_source_groups_-_google_drive.md)
- [Dynamic Source Groups — SharePoint Online](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcegroups/dynamic_source_groups_-_sharepoint.md)
