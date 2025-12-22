---
title: "Oracle_PasswordIssues Job"
description: "Oracle_PasswordIssues Job"
sidebar_position: 10
---

# Oracle_PasswordIssues Job

The Oracle_PasswordIssues Job is designed to analyze the Oracle user passwords and evaluate if they
comply with prescribed password policies. In addition, the job group will also scan for weak
passwords.

## Query for the Oracle_PasswordIssues Job

The Oracle_PasswordIssues Job uses the PowerShell Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/usersroles/jobgroup20.webp)

- Weak Password Hash – Locates the dictionary file used to compare Oracle passwords to determine if
  they are weak.

See the
[PowerShell Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/powershell/overview.md)
topic for additional information.

## Analysis Tasks for the Oracle_PasswordIssues Job

Navigate to the **Jobs** > **Oracle** > **1.Users and Roles** > **Oracle_PasswordIssues** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/usersroles/jobgroup21.webp)

The default analysis tasks are:

- Oracle Weak Password Details – Lists details of weak passwords in Oracle. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Weak Hashes – Highlights user accounts with weak hashes. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Default Passwords – Finds users with default passwords. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Weak Password Instance Summary – Summarizes weak passwords per instance. Creates the
  SA_Oracle_PasswordIssues_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_PasswordIssues Job
produces the following pre-configured reports.

| Report         | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weak Passwords | This report highlights users with weak passwords in the audited Oracle environment | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays password issues by instance</li><li>Table – Provides details on password issues by instance</li><li>Table – Provides information on password issue details</li></ul> |
