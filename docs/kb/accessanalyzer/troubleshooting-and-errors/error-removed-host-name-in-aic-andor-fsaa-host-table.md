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

- You typically ran a custom job. If you are unsure which job you ran, see [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md) for steps to create a custom job to drop File Server host data.

- If you have already rerun the job and it throws a timeout error, then change the job timeout to a longer value.

  1. Right-click the job, then select **Properties** and adjust the **Timeout minutes setting** in the General tab.
  2. Setting this value to **1440 minutes (24 hours)** should be sufficient.
  3. This prevents the job from timing out if it needs to drop a large amount of data.

## Related Article

- [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md)