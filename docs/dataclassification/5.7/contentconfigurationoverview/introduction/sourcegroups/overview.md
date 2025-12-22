---
title: "Source Groups"
description: "Source Groups"
sidebar_position: 60
---

# Source Groups

Source groups provide a way of logically grouping specific sources, perhaps by type, or perhaps by
an internal business specification. Selecting the option Add to Group on the main sources grid
screen will present the following pop-up:

![addtogroup](/images/dataclassification/5.7/admin/sources/sourcegroups/addtogroup.webp)

A group can either be "mixed", which allows it to contain all source types, or source specific. In
the example above a group would be created entitled "Demo Content", which only supports the addition
of SharePoint sources. If a supporting source group already exists, this can be selected from the
drop-down list provided. See Dynamic Source Groups for more information.

Selecting the cog icon on the main sources grid screen for a source group allows you to amend the
group settings:

![editgroup](/images/dataclassification/5.7/admin/sources/sourcegroups/editgroup.webp)

Here you can:

- Amend the group name
- Delete the group
- Disable Search Index — When disabled, content will not be processed into the core search index
  (classification will occur as normal, although content will be excluded from Browse / Search /
  Suggestions).
- **NOTE:** Credentials will only be supported if the source group is type specific
- Discovery mode — This allows a source to be fully enumerated before any files are processed.
- _(SharePoint only)_ Supply regular expression rules to support automatically assigning sources to
  a specific group
- Enable Text Extraction - Allows reading the documents and run classification rules against their
  content. By unticking the check box, the system can fetch only the metadata without crawling the
  entire document. After this you can run a workflow to remove the old data, using **Document Age**
  option. Unlike Discovery Mode, you can still run workflows if the workflow is triggered solely by
  metadata. To learn more, go
  to[Step 3. Specify Conditions for Processing](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/manage/addworkflowwizard/step3specifyconditions.md) article.

Deleting a group will remove all existing items from the group leaving them unassigned. You can also
remove a specific source(s) from a group by selecting the source group in the grid and then
selecting Remove from Group for the required source(s). Source groups can also be created and
assigned as part of the source creation process.

By going to the Settings of the Source Group, you can:

- Set the Re-index period, priority, and credentials for a single source in the group or configure
  these options for all sources in this group using the "Apply changes to all sources in Source
  Group" option.

    :::note
    The Apply changes to all sources in Source Group option is available when you have
    more than one source in a source group.
    :::


    ![source_groups_settings](/images/dataclassification/5.7/admin/sources/sourcegroups/source_groups_settings.webp)

## Dynamic Source Groups

Dynamic Source Groups are used to add a collection of sources at once. These source groups are
accessed through the Add page in the Auto-Detect a Set of Sources section. Each Dynamic Source Group
will have different options depending on which one is being configured. The Dynamic Source Groups
are:

- [Dynamic Source Groups — Exchange](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/sourcegroups/exchange.md)
- [Dynamic Source Groups — File Servers](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/sourcegroups/file.md)
- [Dynamic Source Groups — Google Drive Organization](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/sourcegroups/googledrive.md)
- [Dynamic Source Groups — SharePoint Online](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/sourcegroups/sharepoint.md)
