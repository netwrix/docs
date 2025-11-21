---
description: >-
  Explains Event ID 1214 in the Health Log for SharePoint monitoring plans,
  lists possible causes, and provides step-by-step resolutions to restore audit
  data writes to the SQL database.
keywords:
  - Event ID 1214
  - Health Log
  - SharePoint
  - audit data
  - SQL database
  - Netwrix Auditor
  - Long-Term Archive
  - Short-Term Archive
  - SSRS
products:
  - auditor
sidebar_label: Event ID 1214 in Health Log
tags: []
title: "Event ID 1214 in Health Log"
knowledge_article_id: kA00g000000H9crCAC
---

# Event ID 1214 in Health Log

## Symptom

You see the following error message under Event ID 1214 in the Health Log for your SharePoint monitoring plan:

```text
The following error occurred when trying to write audit data to the SQL database: %error_message%
```

## Causes

1. Your Data Collecting Account has insufficient permissions to create temporary audit files copied to the SQL database.
2. Misconfigured SQL Server Reporting Services (SSRS) settings in Netwrix Auditor.

## Resolutions

1. Cause #1 − Allow **Full Control** permissions to the affected Long-Term Archive service account for the following 2 folders:

   - Long-term Archive − you can establish the location by following **Settings** > **Long-Term Archive** > **Write audit data to**. The default location is ` %PROGRAMDATA%\Netwrix Auditor\Data`.
   - Short-Term Archive − you can establish the location by following **Health Status** > **Open diagnostic logs folder** under **Working folder** > parent folder of the **Logs** folder. The default location is ` %ProgramData%\Netwrix Auditor\ShortTerm`.

2. Cause #2 − Verify SQL Server Reporting Services settings − refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Auditor Settings − Audit Database · v10.6).

## Related articles

- Netwrix Auditor Settings − Audit Database · v10.6: https://docs.netwrix.com/docs/auditor/10_8
