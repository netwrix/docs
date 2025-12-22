---
title: "Step 1: Maintenance Operation"
description: "Step 1: Maintenance Operation"
sidebar_position: 10
---

# Step 1: Maintenance Operation

Select the operation you want to perform:

- Rebuild Index—All content processing results (text/metadata) will be retained, but the search
  index will be truncated. Then the program will re-do all indexing/classification (during that
  process, search results will be unavailable). Optionally you can choose to Shrink - this will
  rebuild the Text.cse file removing any fragmentation. Shrink will require sufficient disk space to
  process (up to the existing size of Text.cse)
- Re-Collect Index— The search index will be cleaned (all documents from the source will be removed
  from it). Then the program will re-crawl all configured sources and update the search index
  (during that process, search results will be unavailable).

:::note
This option is recommended after setting up DQS configuration.
:::


- Delete Index—Delete all content from both the search index and the NDC SQL database.

![cleaner_step_1](/images/dataclassification/5.7/admin/utilities/cleaner_step_1.webp)
