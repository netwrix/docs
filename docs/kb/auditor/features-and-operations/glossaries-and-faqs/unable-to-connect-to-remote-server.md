---
description: >-
  When you run reports in a web browser, you may see the "Unable to connect to
  the remote server." error. This article lists possible causes and resolutions,
  including SSRS service issues, failed SQL Server upgrades, and expired SSRS
  evaluation licenses.
keywords:
  - SSRS
  - SQL Server Reporting Services
  - unable to connect to the remote server
  - reports
  - subscriptions
  - SQL Server
  - evaluation license
  - repair installation
products:
  - auditor
sidebar_label: Unable to Connect to Remote Server
tags: []
title: "Unable to Connect to Remote Server"
knowledge_article_id: kA04u00000111AdCAI
---

# Unable to Connect to Remote Server

## Symptom

When trying to run reports in web browser, the following error message appears:

```text
Unable to connect to the remote server.
```

Subscriptions may also be affected by this error.

## Causes

- The **SQL Server Reporting Services** service has stopped in your SQL server.
- In case of the recent SQL Server upgrade, the SQL Server suite could be corrupted.
- The SSRS instance evaluation license has expired.

## Resolutions

In case the **SQL Server Reporting Services** service has stopped − enable the service and disable disable timeout for reports. Refer to the following articles for additional information:

- Learn how to enable the **SQL Server Reporting Services** service in [Start and Stop the Report Server Service · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/reporting-services/report-server/start-and-stop-the-report-server-service?view=sql-server-ver16).
- Learn more on timeouts in [Setting Time-out Values for Report and Shared Dataset Processing (SSRS) · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/reporting-services/report-server/setting-time-out-values-for-report-and-shared-dataset-processing-ssrs?view=sql-server-ver16).

In case of the failed SQL Server upgrade, repair your SQL Server installation. Learn more in [Repair a Failed SQL Server Installation · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-ver16).

For additional information on expired evaluation license in SSRS, refer to the following article: [Error 503 − Reports and Subscriptions Not Working](/docs/kb/auditor/reports-alerts-and-notifications/report-generation/error-503-reports-and-subscriptions-not-working).

## Related articles

- [Error 503 − Reports and Subscriptions Not Working](/docs/kb/auditor/reports-alerts-and-notifications/report-generation/error-503-reports-and-subscriptions-not-working)
- [Start and Stop the Report Server Service · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/reporting-services/report-server/start-and-stop-the-report-server-service?view=sql-server-ver16)
- [Setting Time-out Values for Report and Shared Dataset Processing (SSRS) · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/reporting-services/report-server/setting-time-out-values-for-report-and-shared-dataset-processing-ssrs?view=sql-server-ver16)
- [Repair a Failed SQL Server Installation · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-ver16)
