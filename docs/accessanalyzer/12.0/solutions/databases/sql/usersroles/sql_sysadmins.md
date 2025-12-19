---
title: "SQL_SysAdmins Job"
description: "SQL_SysAdmins Job"
sidebar_position: 60
---

# SQL_SysAdmins Job

The SQL_SysAdmins Job provides insight into users who have SQL server administration roles across
all targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SysAdmins Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_SysAdmins > Configure node and select
Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/usersroles/sqljobgroup29.webp)

The default analysis tasks are:

- Calculate admin details – Creates the SA_SQL_SysAdmins_Details table accessible under the job’s
  Results node
- Summarize SysAdmins – Creates the SA_SQL_SysAdmins_InstanceSummary table accessible under the
  job’s Results node
- Sys Admin Domain Users - Creates the SA_SQL_SysAdmins_DomainUsers table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the **SQL_SysAdmins Job** produces
the following pre-configured report.

| Report        | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin Summary | This report highlights all principals with the 'sysadmin' role. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by admin count</li><li>Table – Provides top instances by admin count</li><li>Table – Provides details on admin details</li><li>Table – Provides details on domain user admin details</li></ul> |
