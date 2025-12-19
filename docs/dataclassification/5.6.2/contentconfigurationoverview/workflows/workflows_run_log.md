---
title: "Workflow Operations Log"
description: "Workflow Operations Log"
sidebar_position: 40
---

# Workflow Operations Log

When workflow actions are performed, the corresponding operations are logged to the web-based log
file. Click the Logs tab to view the corresponding audit trails.

Here you can change the display period or the number of logs displayed, sort the list or copy its
content, or clear the logs you do not need.

![workflowlogs_thumb_0_0](/images/dataclassification/5.6.2/workflows/workflowlogs_thumb_0_0.webp)

# Workflow Plugins

A range of Workflow actions are provided with the product, but the product can also be extended by
writing additional actions using the plugin interfaces.

Plugins are implemented as DLLs and are placed in the plugins folder, which is typically located
here:

C:\Program Files\ConceptSearching\Plugins\

The following sample plugins are provided with the product (complete with code):

- FTP Migration action
- Http Save Files action
- Twitter action
- SQL Lookup

Click the Detect New Plugins button to search the plugins folder for new plugins.

Click the Enable link to enable selected plugins.
