---
description: >-
  Predefined reports and subscriptions that query wide date ranges can be slow
  to generate and may complete with dataset or server errors. This article lists
  possible causes and step-by-step resolutions to address report timeouts and
  SQL Server memory issues for Netwrix Auditor.
keywords:
  - reports
  - report generation
  - timeout
  - SQL Server
  - Netwrix Auditor
  - performance
  - dataset error
  - internal server error
  - report history
  - memory
products:
  - auditor
sidebar_label: Reports Generation Takes a While and Completes Wit
tags: []
title: "Reports Generation Takes a While and Completes With Errors"
knowledge_article_id: kA00g000000H9YBCA0
---

# Reports Generation Takes a While and Completes With Errors

## Symptom

Predefined reports and subscriptions for wide date ranges are generated slowly and complete with one of the errors below:

```text
Cannot read the next data row for the Dataset DS.
```

```text
The remote server returned the error: (500) Internal Server Error.
```

```text
Report processing has been canceled by the user.
```

## Cause

Too much audit data in the report.

## Resolution

To resolve the issue, do one of the following:

- On your SQL Server host, restart the **SQL Server (Instance name)** windows service.

- Follow the recommendations to improve the overall Netwrix Auditor performance. Learn more in [Long Data Collection — Improving the Performance](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/long-data-collection-improving-the-performance).

- Disable the report generating timeout by following these steps:
  1. Open the **ReportManager URL** and click the **Site Settings** link in the top-right corner.
  2. In the left-hand panel, click the **General** tab.
  3. Set the **Limit the copies of report history** to **5**.
  4. Select the **Do not timeout report** checkbox.
  5. Click **Apply** to save changes.

- Set a limit to SQL server memory consumption. Learn more in [Server memory configuration options ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/server-memory-server-configuration-options?view=sql-server-ver16). Consider that the min. and max. SQL memory values are completely dependent on the environment and how many resources you have. For the maximum value, Netwrix recommends do not exceed more than 80% of the total resources for the SQL server. And ideally, SQL Server should be on the different server as Netwrix Auditor itself.

### Related Articles

- [Long Data Collection — Improving the Performance](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/long-data-collection-improving-the-performance)
