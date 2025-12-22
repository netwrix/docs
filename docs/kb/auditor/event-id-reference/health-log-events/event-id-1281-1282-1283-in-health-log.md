---
description: >-
  Describes the causes and resolutions for Event ID 1281, 1282, and 1283 entries
  in the Health Log related to SharePoint monitoring plans, including the exact
  error messages and recommended actions.
keywords:
  - Event ID 1281
  - Event ID 1282
  - Event ID 1283
  - Health Log
  - SharePoint monitoring
  - Audit Archive
  - Netwrix Auditor
  - Monitoring plan
  - Audit data
  - ActivitySummaries
products:
  - auditor
sidebar_label: 'Event ID 1281, 1282, 1283 in Health Log'
tags: []
title: 'Event ID 1281, 1282, 1283 in Health Log'
knowledge_article_id: kA00g000000H9cnCAC
---

# Event ID 1281, 1282, 1283 in Health Log

## Symptoms

Your SharePoint monitoring plan prompts one of the following error messages under Event ID 1281, 1282, and 1283 in **Health Log**:

```text
Event ID 1281: Failed to delete temporary files while saving audit data to Audit Archive due to the following error: %errormsg%.
```

```text
Event ID 1282: Netwrix Auditor Server failed to read an internal file from Audit Archive: %errormsg%.
Audit data retrieving restarted from the beginning, hence, reports and ActivitySummaries may contain duplicate data.
```

```text
Event ID 1283: Netwrix Auditor Server failed to read an internal file from Audit Archive: %errormsg%.
Some audit data may be missing in your Activity Summaries and reports.
```

## Causes

1. The data located in the target folder is corrupted or used by another process.
2. An unexpected error occurred.

## Resolutions

- In case the error message contains a file name, verify the file is accessible and is not used by another process.
- Recreate your SharePoint monitoring plan. Refer to the following article for additional information on configuration of SharePoint monitoring plans: Monitoring Plans − SharePoint · v10.6.

## Related articles

- Monitoring Plans − SharePoint · v10.6
