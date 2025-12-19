---
title: "File Details Tab"
description: "File Details Tab"
sidebar_position: 20
---

# File Details Tab

The File Details tab allows configuration of settings for file detail collection.

![FSAA Data Collector Wizard Default Scoping Options page File Details tab](/images/accessanalyzer/11.6/admin/datacollector/fsaa/defaultscopingoptions/filedetails.webp)

Select the desired settings for additional scoping:

- Scan file-level details – Turns on file-level scanning and collects a full list of files, file
  size, last modified, and last accessed
- Scan file permissions – Turns on file permission scanning and collects a full list of who has
  access to which files

**File tag metadata collection**

- Collect tags/keywords from file metadata properties – Enables the collection of file Microsoft
  Office metadata tags and stores the tags into the tables when the **Scan file-level details**
  checkbox and the **Collect File Metadata Tags** checkbox are selected on the page. It only scans
  the files that satisfy the scan filter settings.
- Include offline files – Include offline files in the scan
- Only collect tags/keywords with the following comma-separated values (case-insensitive) – Collects
  tags from the files and stores the tags into the tables. Filters results to only collect from
  files with extensions matching to the list of file types entered.
    - This option is enabled when the **Scan file-level details** and the **Collect tags/keywords
      from file metadata properties** checkboxes are selected.

The FSAA scan collects the tags from the files and stores the information at the folder level, which
provides a count for the number of occurrences of each tag.

**Scan filter settings**

The Scan filter settings options are enabled if the **Scan file-level details** checkbox is
selected.

- Only files larger than [number] [size unit] – Filters the results to only collect file data on
  files larger than the set value. If this option is not set, all file sizes are collected.
- Only files last modified more than [number] [time period] ago – Filters results to only collect
  file data on files modified older than the set value
- Only files last modified less than [number] [time period] ago – Filters results to only collect
  file data on files modified younger than the set value
- Only files matching one of these comma-separated types (without leading dots) – Filters results to
  only collect files with extensions matching to the list of file types entered. If this option is
  not set, all file types are collected.

:::warning
Be careful when configuring these settings. If no filters are applied when file detail
scanning has been enabled, it can result in returning large amounts of data to the database.

:::
