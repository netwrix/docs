---
title: "2-AzureSQL_SensitiveDataScan Job"
description: "2-AzureSQL_SensitiveDataScan Job"
sidebar_position: 30
---

# 2-AzureSQL_SensitiveDataScan Job

The 2-AzureSQL_SensitiveDataScan Job is designed to discover sensitive data in the Azure SQL
instances and databases based on pre-defined or user-defined search criteria.

## Queries for the 2–AzureSQL_SensitiveDataScan Job

The 2–AzureSQL_SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](/images/accessanalyzer/12.0/solutions/databases/azuresql/collection/sensitivedatascanjob.webp)

- Sensitive Data Scan — Collects sensitive data from targeted instances

### Analysis Task for 2-AzureSQL_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **AzureSQL** > **2–AzureSQL_SensitiveDataScan** >
**Configure** node and select Analysis to view the analysis task.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/azuresql/collection/sensitivedatascananalysis.webp)

The default analysis tasks are:

- Azure SQL SSD Matches View — Brings the Azure SQL SSD Matches View to the SA console
- Azure SQL SSD Match Hits View — Brings the Azure SQL SSD Match Hits View to the SA Console
- AIC Impot SSD — Imports Azure SQL SSD to the AIC
