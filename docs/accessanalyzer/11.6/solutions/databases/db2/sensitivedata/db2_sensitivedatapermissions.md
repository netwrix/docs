---
title: "Db2_SensitiveDataPermissions Job"
description: "Db2_SensitiveDataPermissions Job"
sidebar_position: 20
---

# Db2_SensitiveDataPermissions Job

This job provides all types of permissions on database objects containing sensitive data across all
the targeted Db2 database servers.

## Analysis Tasks for the Db2_SensitiveDataPermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Sensitive Data** >
**Db2_SensitiveDataPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Db2_SensitiveDataPermissions Job](/images/accessanalyzer/11.6/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.webp)

The default analysis tasks are:

- Sensitive Data Permissions – Provides details on which users have permissions on discovered Db2
  Sensitive Data
- Sensitive Data Permissions Database Summary – Summarizes sensitive data permissions by database

## Report for the Db2_SensitiveDataPermissions Job

In addition to the tables and views created the analysis task, the Db2_SensitiveDataPermissions job
has the following preconfigured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top Databases by Permission Count</li><li>Table – Displays Database Sensitive Data Permissions Summary</li><li>Table – Displays data details</li></ul> |
