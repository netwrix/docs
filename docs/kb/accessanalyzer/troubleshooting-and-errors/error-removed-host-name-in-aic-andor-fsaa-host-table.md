---
description: >-
  This article addresses the issue of seeing !REMOVED- in the Access Information Center (AIC) and/or SA_FSAA_Hosts table after dropping data for a File Server, along with its causes and resolutions.
keywords:
  - Access Information Center
  - File Server
  - host data removal
sidebar_label: Host Name Issue in AIC and FSAA
tags:
  - troubleshooting-and-errors
title: "Error: !REMOVED- Host Name in AIC and/or FSAA Host Table"
knowledge_article_id: kA0Qk0000001qxRKAQ
products:
  - access-analyzer
---

# Error: !REMOVED- Host Name in AIC and/or FSAA Host Table

## Symptom

In the Access Information Center (AIC) and/or SA_FSAA_Hosts table in the SQL database, you see **!REMOVED-** after dropping data for a File Server.

## Cause

You have used the **Remove host data** option in the **FILESYSTEMACCESS** Data Collector to try and remove host data, but the job timed out or errored.

## Resolution

Re-run the job used to remove the host data against the full **!Removed-…** name.

- This is typically a custom job that was created. If you are unsure what job was run, please see the following article for how to create a custom job to drop File Server host data: [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md).

- If you have already rerun the job and it throws a timeout error, then change the job timeout to a longer value.

  1. Right-click the job, then select **Properties** and adjust the **Timeout minutes setting** in the General tab.
  2. Setting this value to **1440 minutes (24 hours)** for safety should suffice, although the job is unlikely to take this long.
  3. This is to allow the job to run without timing out if there is much data to be dropped.

## Related Article

- [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md)