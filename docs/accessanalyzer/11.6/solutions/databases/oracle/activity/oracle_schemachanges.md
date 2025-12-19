---
title: "Oracle_SchemaChanges Job"
description: "Oracle_SchemaChanges Job"
sidebar_position: 40
---

# Oracle_SchemaChanges Job

The Oracle_SchemaChanges Job is designed to provide detailed information about changes in schema
across all database objects.

## Analysis Tasks for the Oracle_SchemaChanges Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_SchemaChanges** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/activity/jobgroup29.webp)

The default analysis tasks are:

- Oracle Schema Change Details – Highlights activity involving schema changes in the audited Oracle
  Instances. Creates the SA_Oracle_SchemaChange_Details table accessible under the job’s Results
  node.
- Schema Change Summary – Summarizes schema changes per instance. Creates the
  SA_Oracle_SchemaChange_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_SchemaChanges Job
produces the following pre-configured report.

| Report                 | Description                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schema Change Activity | This report lists all schema change related Oracle events, and summarizes them by instance. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by schema change activity</li><li>Table –  Provides details on instances by schema change activity</li><li>Table – Provides details on schema change details</li></ul> |
