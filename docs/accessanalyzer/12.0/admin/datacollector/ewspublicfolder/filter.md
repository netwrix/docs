---
title: "EWSPublicFolder: Filter"
description: "EWSPublicFolder: Filter"
sidebar_position: 50
---

# EWSPublicFolder: Filter

The Filter settings page provides options to filter folders and attachments. It is a wizard page for
the categories of:

- Public Folder contents
- Public Folder permissions
- Sensitive Data

![EWS Public Folder Data Collector Wizard Filter page](/images/accessanalyzer/12.0/admin/datacollector/ewspublicfolder/filter.webp)

All folders and attachments are scanned by default. Scope the scan for specific folders and
attachments:

- Include Folders – Type the folder paths to filter the scan to specific mailbox folders
- Include Attachments – Type the attachment file names to filter to specific attachments
- Exclude Folders – Type the folder paths to exclude mailbox folders from the scan
- Exclude Attachments – Type the file names for the attachments to exclude attachments from the scan

Use `*` and `?` for matching wildcard and single characters.

- Limit message size to [numerical value] – Select to limit message size and define the threshold
  for maximum size of a message. The default value is 20000 KB.
- Limit attachments size to [numerical value] – Select to limit attachment size and define a
  threshold for maximum size of an attachment returned in the scan. The default value is 20000 KB.

Public folders can also be included or excluded from the scan by retrieving a list of public folders
and selecting the desired folders.

Follow the steps to filter the scan by selecting public folders from a list.

![Choose folder to include window on Filter settings page](/images/accessanalyzer/12.0/admin/datacollector/ewspublicfolder/filterpublicfolders.webp)

**Step 1 –** Click the **+** button to the right of the Include Folders or Exclude Folders box to
open the Choose folders to include or Choose folders to exclude window.

**Step 2 –** Click **Retrieve** to load the list of public folders that can be selected.

**Step 3 –** Select the desired public folders and click **Add** to add the folders to the Include
Folders or Exclude Folders list.

After the configuration changes are saved, scans are filtered by the selected public folders.
