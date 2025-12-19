---
title: "Oracle_InstanceNameIssues Job"
description: "Oracle_InstanceNameIssues Job"
sidebar_position: 40
---

# Oracle_InstanceNameIssues Job

The Oracle_InstanceNameIssues Job discovers if names used for Oracle database instances conform to
Oracle recommended best practices. The job also checks to see if Oracle SIDs conform to DISA STIG
V-61413 – Oracle instance name or SID should not contain Oracle version numbers.

## Analysis Tasks for the Oracle_InstanceNameIssues Job

Navigate to the **Jobs > Databases > Oracle > 4.Configuration > Oracle_InstanceNameIssues >
Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/configuration/analysisinstancenameissues.webp)

The default analysis tasks are:

- Find Weak Instance Names – Checks SID names for default names and version numbers. Creates the
  SA_Oracle_WeakInstanceNames_Details table accessible under the job’s Results node.
- Summarize Number of Weak Instance Names – Counts the number of weak instance names in all
  instances. Creates the SA_Oracle_WeakInstanceNames_Summary table accessible under the job’s
  Results node.

In addition to the tables and views created by the analysis task, the **Oracle_InstanceNameIssues
Job** produces the following pre-configured report.

| Report               | Description                                                                        | Default Tags | Report Elements                                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Instance Name Issues | This report highlights default instance names or those containing version numbers. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays percentage of instance names with issues</li><li>Table – Provides details of instance issues</li></ul> |
