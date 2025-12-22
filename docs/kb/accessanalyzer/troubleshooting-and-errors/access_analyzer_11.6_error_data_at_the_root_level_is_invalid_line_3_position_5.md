---
description: >-
  This article addresses the error message "Data at the root level is invalid" encountered in Netwrix Access Analyzer version 11.6, detailing its causes and resolutions.
keywords:
  - Access Analyzer
  - error resolution
  - Reports.xml
sidebar_label: Access Analyzer 11.6 Error
tags:
  - troubleshooting-and-errors
title: "Access Analyzer 11.6 Error: Data at the Root Level Is Invalid Line 3 Position 5"
knowledge_article_id: kA0Qk0000001kX3KAI
products:
  - access-analyzer
---

# Access Analyzer 11.6 Error: Data at the Root Level Is Invalid Line 3 Position 5

## Symptom

When navigating through the **Access Analyzer** console by selecting jobs or job groups to display the job information on the right side of the console in Netwrix Access Analyzer version 11.6, the system generates the following error message:

```
Data at the root level is invalid. Line 3, position 5
```

## Cause

These errors may be caused by any one of the following:

- The Reports folder at this location: `\%SAInstallDIR%\StealthAudit\Reports>` is missing the **Reports.xml** file.
- The **Reports.xml** file is corrupt.

## Resolution

To address these causes, remove the corrupt **Reports.xml** file and reopen the **Access Analyzer application** to generate a new **Reports.xml** file.