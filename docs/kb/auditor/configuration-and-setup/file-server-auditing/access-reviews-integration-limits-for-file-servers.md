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
  - AIC Resource Estimation Tool
  - NwxFileStorageAicManager.acinc
  - packet size
  - file server auditing
products:
  - auditor
sidebar_label: Managing Access Reviews Integration Limits for File Servers
tags:
  - kb
title: "Managing Access Reviews Integration Limits for File Servers"
---

# Managing Access Reviews Integration Limits for File Servers

## Overview

This article describes the current limits and system requirements for the Access Reviews integration when collecting permission data from Windows File Servers in Netwrix Auditor.

The Access Reviews integration collects permission data from monitored file servers and uploads it to the Access Reviews (AIC) database. The volume of permission data directly affects memory consumption on both the Auditor host and the SQL Server instance.

Review the [Considerations & Limitations](pathname:///docs/auditor/10_8/accessreviews#considerations--limitations) section for general integration constraints.

## Instructions

### Permission Upload Limit

The maximum number of permissions that can be uploaded to the Access Reviews database in a single data collection is **800,000** per data source. The `NwxFileStorageAicManager.acinc` configuration file on the Auditor server defines this limit.

If the number of permissions exceeds this limit, the upload fails with a connection error due to SQL Server packet size restrictions.

> **NOTE:** SQL Server imposes the 800,000 permission limit as a hard constraint. Attempting to upload more than 820,000 permissions results in a `maximum packet count exceeded` error that cannot be resolved through SQL Server configuration changes.

### System Requirements by Permission Count

The following table shows approximate **memory consumption** observed during data collection for different permission counts. Testing used Auditor 10.8 with a dedicated SQL Server instance.

| Permissions | Auditor host (RAM) | SQL instance (RAM) |
|---|---|---|
| 200,000 | 3.2 GB | 6.5 GB |
| 400,000 | 4.1 GB | 12 GB |
| 500,000 | 5 GB | 15.5 GB |
| 600,000 | 5.6 GB | 19 GB |
| 800,000 | 6.5 GB | 24 GB |

> **NOTE:** If the SQL Server host does not have enough available RAM for the permission count being processed, the upload fails with an `insufficient system memory in resource pool` error.

### Count Permissions Before Enabling Integration

1. Verify that the total number of permissions per data source does not exceed the 800,000 limit.
2. Download and copy the AIC Resource Estimation Tool to the machine where Auditor is installed.

   <!-- TODO: Replace placeholder URL once the pipeline publishes the artifact to releases.netwrix.com -->
   Download the [AIC Resource Estimation Tool](https://releases.netwrix.com/products/auditor/10.8/auditor-aic-estimation-tool-tool-1.0.1.zip), a Netwrix permission-counting utility.

   The executing account must have:
   - Local administrator rights.
   - Read access to the Auditor reporting databases. To authenticate with a specific SQL account, use `--sqluser`.

3. Run the tool:

   ```
   AicResourceEstimationTool.exe
   AicResourceEstimationTool.exe --countall
   AicResourceEstimationTool.exe --html
   ```

   | Parameter | Description |
   |---|---|
   | `--countall` | Count permissions for all File Server Auditing (FSA) plans, including plans without Access Reviews enabled |
   | `--html` | Save results as an HTML report and open it in the default browser |
   | `--csv` | Save results as a CSV file |
   | `--depth N` | Override the AIC depth level for every plan (0 = shares only, 1 = shares + one subfolder level) |
   | `--sqluser USERNAME` | Authenticate to SQL Server with a specific account (SQL or Windows) |
   | `--help` | Display help and exit |

   > **NOTE:** The tool reads the Auditor configuration automatically and discovers all FSA monitoring plans. By default, it only counts permissions for plans with **Send Data for Access Reviews** enabled. Use the `--countall` parameter to include all FSA plans.

### Recommendations

1. **Verify permission counts before enabling the integration.**
   - If a file server has more than 800,000 unique permissions across all monitored shares, consider splitting the data source into multiple monitoring plans.
2. **Allocate sufficient SQL Server memory.**
   - For environments with 400,000+ permissions, ensure the SQL Server host has at least 16 GB of RAM dedicated to the SQL instance.
   - For 600,000+ permissions, allocate at least 24 GB.
3. **Monitor the Auditor host.**
   - Auditor services hold allocated memory until the upload completes. Ensure the Auditor host has enough available RAM to accommodate the peak usage listed in the [System Requirements by Permission Count](#system-requirements-by-permission-count) table.
4. **Check the Health Log for errors.**
   - The Netwrix Auditor Health Log records upload failures. These failures do not affect the status of monitored items or data sources in the Auditor console.
