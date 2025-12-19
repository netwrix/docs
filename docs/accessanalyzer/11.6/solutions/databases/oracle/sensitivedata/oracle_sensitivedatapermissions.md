---
title: "Oracle_SensitiveDataPermissions Job"
description: "Oracle_SensitiveDataPermissions Job"
sidebar_position: 10
---

# Oracle_SensitiveDataPermissions Job

The Oracle_SensitiveDataPermissions Job is designed to provide information on permissions on
database objects containing sensitive data across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_SensitiveDataPermissions Job

Navigate to the **Oracle > 5.Sensitive Data > Oracle_SensitiveDataPermissions > Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/sensitivedata/jobgroup45.webp)

The default analysis tasks are:

- Detail Oracle SDD Permissions – Creates the SA_Oracle_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- SDD Perms Instance Summary – Creates the SA_Oracle_SensitiveDataPermissions_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the
**Oracle_SensitiveDataPermissions Job** produces the following pre-configured report.

| Report                     | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by permission count</li><li>Table – Provides details on instance permission summary</li><li>Table – Provides information on sensitive data permission details</li></ul> |
