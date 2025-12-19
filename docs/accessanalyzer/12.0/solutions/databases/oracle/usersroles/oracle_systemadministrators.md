---
title: "Oracle_SystemAdministrators Job"
description: "Oracle_SystemAdministrators Job"
sidebar_position: 30
---

# Oracle_SystemAdministrators Job

The Oracle_SystemAdministrators Job is designed to provide insight into users who have DBA, SYSDBA,
and SYSOPER roles across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_SystemAdministrators Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_SystemAdministrators** > Configure
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/usersroles/jobgroup23.webp)

The default analysis tasks are:

- Oracle Administrators – Returns members of specified administrator roles. Creates the
  SA_Oracle_SystemAdministrators table accessible under the job’s Results node.
- System Admin Instance Summary – Summarizes System Administrators by Instance. Creates the
  SA_Oracle_SystemAdministrators_InstanceSummary table accessible under the job’s Results node.
- System Admin Domain Users – Highlights System Administrators which are domain accounts. Creates
  the SA_Oracle_SystemAdmins_DomainUsers table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_SystemAdministrators
Job produces the following pre-configured report.

| Report        | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin Summary | This report highlights all principals which are members of specified administrator roles | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by admin count</li><li>Table – Provides information on admin details</li><li>Table – Provides details on top instances by admin count</li></ul> |
