---
title: "Configure Netwrix Auditor Service Accounts"
description: "Configure Netwrix Auditor Service Accounts"
sidebar_position: 90
---

# Configure Netwrix Auditor Service Accounts

Netwrix Auditor uses the following service accounts:

| Service account                   | Description                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account for data collection       | An account used by Netwrix Auditor to collect audit data from the target systems. **NOTE:** For the data collecting account, you should use a different account than the one Auditor is using to access the database. See [Data Collecting Account](/docs/auditor/10.7/admin/monitoringplans/dataaccounts.md) for additional information. |
| Audit Database service account    | An account used by Netwrix Auditor to write collected audit data to the Audit Database. See [Requirements for SQL Server to Store Audit Data](/docs/auditor/10.7/requirements/sqlserver.md) for additional information.                                                                                                                                   |
| SSRS service account              | An account used by Netwrix Auditor to upload data to the Report Server. See [SQL Server Reporting Services](/docs/auditor/10.7/requirements/sqlserverreportingservice.md) for additional information.                                                                                                                                                     |
| Long-Term Archive service account | An account used to write data to the Long-Term Archive and upload report subscriptions to shared folders. The LocalSystem account is selected by default. See [File-Based Repository for Long-Term Archive](/docs/auditor/10.7/requirements/longtermarchive.md) for additional information.                                                               |
