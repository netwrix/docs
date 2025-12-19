---
title: "Oracle_ServerPermissions Job"
description: "Oracle_ServerPermissions Job"
sidebar_position: 40
---

# Oracle_ServerPermissions Job

The Oracle_ServerPermissions Job analyzes permissions granted at the database level and reports on
effective database level permissions across all audited Oracle database servers.

## Analysis Tasks for the Oracle_ServerPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_ServerPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/permissions/jobgroup37.webp)

The default analysis tasks are:

- Determine Server Permissions – Highlights Oracle permissions on the Server. Creates the
  SA_Oracle_ServerPermission_Details table accessible under the job’s Results node.
- Server Permissions Instance Summary – Summarizes server permissions by Instance. Creates the
  SA_Oracle_ServerPermission_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_ServerPermissions Job
produces the following pre-configured report.

| Report             | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Server Permissions | This report highlights server permissions and summarizes them by instance | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by server permissions</li><li>Table – Provides details on instances by server permission count</li><li>Table – Provides details on server permissions</li></ul> |
