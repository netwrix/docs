---
title: "Oracle_PublicPermissions Job"
description: "Oracle_PublicPermissions Job"
sidebar_position: 30
---

# Oracle_PublicPermissions Job

The Oracle_PublicPermissions Job provides a list of permissions assigned to Public profile in
targeted Oracle database servers.

## Analysis Tasks for the Oracle_PublicPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_PublicPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/permissions/jobgroup36.webp)

The default analysis tasks are:

- Oracle Public Permissions – Analyzes permissions for the Public Oracle account. Creates the
  SA_Oracle_PublicPermission_Details table accessible under the job’s Results node.
- Public Permissions Instance Summary – Summarizes public permissions by Instance. Creates the
  SA_Oracle_PublicPermission_InstanceSummary accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_PublicPermissions Job
produces the following pre-configured report.

| Report             | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Public Permissions | This report highlights public permissions and summarizes them by instance | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by public permission</li><li>Table – Provides details on instances by public permission count</li><li>Table – Provides details on public permission details</li></ul> |
