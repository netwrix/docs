---
title: "Workflow Operations Log"
description: "Workflow Operations Log"
sidebar_position: 40
---

# Workflow Operations Log

When the product performs workflow actions, it logs the corresponding operations to the web-based
log file. Click the Logs tab to view the corresponding audit trails.

Here you can change the display period or the number of logs displayed, sort the list or copy its
content, or clear the logs you don't need.

![workflowlogs_thumb_0_0](/images/dataclassification/5.8/admin/workflows/workflowlogs_thumb_0_0.webp)

# Workflow Plugins

The product provides a range of Workflow actions, and you can also extend it by writing additional
actions using the plugin interfaces.

Plugins are DLLs that you place in the plugins folder, typically located here:

**C:\Program Files\ConceptSearching\Plugins\**

The product provides the following sample plugins (complete with code):

- FTP Migration action
- Http Save Files action
- Twitter action
- SQL Lookup

Click the Detect New Plugins button to search the plugins folder for new plugins.

Click the Enable link to enable selected plugins.
