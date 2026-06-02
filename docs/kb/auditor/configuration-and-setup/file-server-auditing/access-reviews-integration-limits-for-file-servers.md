---
description: >-
  Describes the current limits and system requirements for the Access Reviews
  integration with Windows File Servers in Netwrix Auditor, including maximum
  permission count and memory consumption.
keywords:
  - Access Reviews
  - file servers
  - integration limits
  - AIC
  - permissions
  - memory requirements
  - Netwrix Auditor
  - SQL Server
products:
  - auditor
sidebar_label: Understanding Access Reviews Integration Limits for File Servers
tags:
  - kb
title: "Understanding Access Reviews Integration Limits for File Servers"
---

# Understanding Access Reviews Integration Limits for File Servers

This article describes the current limits and system requirements for the Access Reviews integration when collecting permission data from Windows File Servers in Netwrix Auditor.

## Overview

The Access Reviews integration collects permission data from monitored file servers and uploads it to the Access Reviews (AIC) database. The volume of permission data directly affects memory consumption on both the Auditor host and the SQL Server instance.

Review the [Considerations & Limitations](pathname:///docs/auditor/10_8/accessreviews/accessreviews#considerations--limitations) section for general integration constraints.

## Instructions

### Permission Upload Limit

The maximum number of permissions that can be uploaded to the Access Reviews database in a single data collection is **800,000** per data source. The `NwxFileStorageAicManager.acinc` configuration file on the Auditor server defines this limit.

If the number of permissions exceeds this limit, the upload fails with a connection error due to SQL Server packet size restrictions.

> **NOTE:** SQL Server imposes the 800,000 permission limit as a hard constraint. Attempting to upload more than 820,000 permissions results in a "maximum packet count exceeded" error that cannot be resolved through SQL Server configuration changes.

### System Requirements by Permission Count

The following table shows observed memory consumption during data collection for different permission counts. Testing used Auditor 10.8 with a dedicated SQL Server instance.

| Permissions | Auditor host (RAM) | SQL instance (RAM) |
|---|---|---|
| 200,000 | 3.2 GB | 6.5 GB |
| 400,000 | 4.1 GB | 12 GB |
| 500,000 | 5 GB | 15.5 GB |
| 600,000 | 6.5 GB | 19 GB |
| 800,000 | 6.5 GB | 24 GB |

> **NOTE:** If the SQL Server host does not have enough available RAM for the permission count being processed, the upload fails with an "insufficient system memory in resource pool" error.

### Count Permissions Before Enabling Integration

Before enabling the Access Reviews integration, verify that the total number of permissions per data source does not exceed the 800,000 limit. Download and run the AIC Resource Estimation Tool on the Auditor server to count permissions across all monitored file server shares.

<!-- TODO: Replace placeholder URL once the pipeline publishes the artifact to releases.netwrix.com -->
You can download the AIC Resource Estimation Tool by clicking
[the download link](https://releases.netwrix.com/products/auditor/10.8/aic-resource-estimation-tool.zip).

#### Requirements

- Run the tool on the machine where Auditor is installed.
- The executing account must have local administrator rights.
- The executing account (or the SQL user supplied via `--sqluser`) must have read access to the Auditor reporting databases.

#### Usage

```
AicResourceEstimationTool.exe
AicResourceEstimationTool.exe --countall
AicResourceEstimationTool.exe --html
```

| Parameter | Description |
|---|---|
| `--countall` | Count permissions for all FSA plans, including plans without Access Reviews enabled |
| `--html` | Save results as an HTML report and open it in the default browser |
| `--csv` | Save results as a CSV file |
| `--depth N` | Override the AIC depth level for every plan (0 = shares only, 1 = shares + one subfolder level) |
| `--sqluser USERNAME` | Authenticate to SQL Server with a specific account (SQL or Windows) |
| `--help` | Display help and exit |

> **NOTE:** The tool reads the Auditor configuration automatically and discovers all FSA monitoring plans. By default, it only counts permissions for plans with "Send Data for Access Reviews" enabled. Use the `--countall` parameter to include all FSA plans.

### Recommendations

- **Verify permission counts before enabling the integration.** If a file server has more than 800,000 unique permissions across all monitored shares, consider splitting the data source into multiple monitoring plans.
- **Allocate sufficient SQL Server memory.** For environments with 400,000+ permissions, ensure the SQL Server host has at least 16 GB of RAM dedicated to the SQL instance. For 600,000+ permissions, allocate at least 24 GB.
- **Monitor the Auditor host.** Auditor services hold allocated memory until the upload completes. Ensure the Auditor host has enough available RAM to accommodate the peak usage listed in the [System Requirements by Permission Count](#system-requirements-by-permission-count) table.
- **Check the Health Log for errors.** The Netwrix Auditor Health Log records upload failures. These failures do not affect the status of monitored items or data sources in the Auditor console.
