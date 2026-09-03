---
title: "Step 1: Maintenance Operation"
description: "Step 1: Maintenance Operation"
sidebar_position: 10
---

# Step 1: Maintenance Operation

Select the operation you want to perform:

- Rebuild Index—The system retains all content processing results (text/metadata), but truncates the search
  index. Then the program re-indexes and re-classifies all content (during that
  process, search results become unavailable). Optionally you can choose to Shrink - this rebuilds
  the Text.cse file and removes any fragmentation. Shrink requires sufficient disk space
  (up to the existing size of Text.cse)
- Re-Collect Index—The system cleans the search index (removes all documents from the source).
  Then the program re-crawls all configured sources and updates the search index
  (during that process, search results become unavailable).

:::note
This option is recommended after setting up Data Quality Services (DQS) configuration.
:::


- Delete Index—Delete all content from both the search index and the NDC SQL database.

![cleaner_step_1](/images/dataclassification/5.7/admin/utilities/cleaner_step_1.webp)
