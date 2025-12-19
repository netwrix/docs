---
title: "Oracle_SysSchemaPermissions Job"
description: "Oracle_SysSchemaPermissions Job"
sidebar_position: 50
---

# Oracle_SysSchemaPermissions Job

The Oracle_SysSchemaPermissions Job provides insight into users that have access to objects in the
SYS schema, and the type permissions to those objects across all audited Oracle database servers.

## Analysis Tasks for the Oracle_SysSchemaPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_SysSchemaPermissions** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/permissions/jobgroup38.webp)

The default analysis tasks are:

- Oracle Sys Schema Permissions – Highlights all permissions on tables in the Oracle schema. Creates
  the SA_Oracle_SysSchema table accessible under the job’s Results table.
- Oracle Sys Schema Summary – Summarizes sys schema permissions per instance. Creates the
  SA_Oracle_SysSchema_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_SysSchemaPermissions
Job produces the following pre-configured reports.

| Report                 | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                               |
| ---------------------- | ---------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SYS Schema Permissions | This report highlights SYS schema permissions across the audited environment | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays sys schema permission by instance</li><li>Table – Provides details on sys schema permissions by instance</li><li>Table – Provides details on sys schema permission details</li></ul> |
