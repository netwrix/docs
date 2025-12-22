---
title: "4.Content Job Group"
description: "4.Content Job Group"
sidebar_position: 60
---

# 4.Content Job Group

This group provides insight into content stored across SharePoint farms in order to help more
efficiently manage that content. It will provide information on the content taking up the most
space, the content that has not been accessed for extended periods of time, and additional data
describing SharePoint content and the configuration of the repositories such as lists and libraries
which store that content.

![4.Content Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/sharepoint/content/contentjobstree.webp)

The 4.Content Job Group is comprised of:

- [SP_LargestFiles Job](/docs/accessanalyzer/12.0/solutions/sharepoint/content/sp_largestfiles.md) – Identifies the largest files across SharePoint farms.
  Changes to a document or its metadata create new versions that result in added storage. It is
  therefore important to manage file size and control versioning. Report includes file names, URLs,
  total file size, versions, and version size, along with file owner and file editor information.
- [SP_StaleFiles Job](/docs/accessanalyzer/12.0/solutions/sharepoint/content/sp_stalefiles.md) – Identifies files that have been modified in at least a
  year across SharePoint farms. This aids administrators and users in cleaning up or archiving old
  and unchanged files to help maintain a clean and healthy SharePoint environment. Report includes
  files, their last modified time, total file size, versions and version size, along with file owner
  and file editor information.
