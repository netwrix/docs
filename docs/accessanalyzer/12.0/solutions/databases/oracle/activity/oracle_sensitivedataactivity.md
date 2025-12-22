---
title: "Oracle_SensitiveDataActivity Job"
description: "Oracle_SensitiveDataActivity Job"
sidebar_position: 50
---

# Oracle_SensitiveDataActivity Job

The Oracle_SensitiveDataActivity Job is designed to provide detailed information about DML (UPDATE,
INSERT, DELETE, TRUNCATE) against objects containing sensitive data.

## Analysis Tasks for the Oracle_SensitiveDataActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_SensitiveDataActivity** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/activity/jobgroup30.webp)

The default analysis tasks are:

- SDD Activity – Highlights activity on Oracle sensitive data. Creates the
  SA_Oracle_SensitiveDataActivity_Details table accessible under the job’s Results node.
- SDD Activity Instance Summary – Summarizes SDD Activity by Instance. Creates the
  SA_Oracle_SensitiveDataActivity_UserSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_SensitiveDataActivity
Job produces the following pre-configured report.

| Report                  | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top users by instance</li><li>Table – Provides details on user activity by instance</li><li>Table – Provides details on sensitive data activity details by database</li></ul> |
