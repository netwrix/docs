---
description: >-
  Explains how to resolve Event ID 3127 and 3129 errors in the Netwrix Auditor
  System Health Log that cause a monitoring plan to stay in the Working status
  and prevent historical snapshots from importing.
keywords:
  - Netwrix Auditor
  - Event ID 3127
  - Event ID 3129
  - System Health Log
  - SQL Server
  - Cumulative Update 31
  - SharePoint Online
  - State-in-Time
  - snapshots
products:
  - auditor
sidebar_label: Netwrix Auditor System Health Log Contains EventID
tags: []
title: "Netwrix Auditor System Health Log Contains EventIDs 3127 and 3129"
knowledge_article_id: kA04u000000wnqWCAQ
---

# Netwrix Auditor System Health Log Contains EventIDs 3127 and 3129

## Symptom

A monitoring plan in Netwrix Auditor is constantly in the **Working** status and the product fails to collect historical snapshots.

The Netwrix Auditor System Health Log contains the following errors:

```text
Event ID 3127: Import of the latest snapshot failed. No items were imported.
```

```text
Event ID 3129: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. Operation cancelled by user.
```

## Cause

These errors basically occur when the Netwrix Auditor Audit databases misbehave with the current version of Microsoft SQL Server. However, there might be multiple root causes for the issue but below is the only one potential resolution.

## Resolution

To resolve the issue, you need to install cumulative update for your SQL Server.

Download and install https://learn.microsoft.com/en-us/troubleshoot/sql/releases/sqlserver-2017/cumulativeupdate31 (Cumulative Update 31 for SQL Server 2017 ⸱ Microsoft &#129125;)

> **NOTE:** The State-in-Time snapshot for SharePoint Online occurs every 24 hours, usually at 03:00 or 04:00. So, once the above Cummulative Update is applied, you will need to wait until the following day to see the results.

To check the the issue has been resolved, run one of the **SharePoint Online State-in-Time Reports**. Make sure to provide it with a well-known object so that there is the greatest possibility of there being data returned, such as the **SharePoint Online Site Collections Access by User** Report.
