---
title: "SQL_ServerPrincipals Job"
description: "SQL_ServerPrincipals Job"
sidebar_position: 40
---

# SQL_ServerPrincipals Job

The SQL_ServerPrincipals Job provides information on server principals at the instance level across
targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_ServerPrincipals Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_ServerPrincipals > Configure node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/usersroles/sqljobgroup27.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_SQL_ServerPrincipals_Details table accessible under the
  job’s Results node
- Summarize by Instance – Creates the SA_SQL_ServerPrincipals_InstanceSummary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_ServerPrincipals Job
produces the following pre-configured report.

| Report            | Description                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Principals | This report determines all server principals on a per-instance basis. Users are considered stale if they have not authenticated to the domain in 60 days. This threshold can be configured in the 3-AD_Exceptions job in the .Active Directory Inventory job group. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances</li><li>Table – Provides details on principal count by instance</li><li>Table – Provides details on principal details</li></ul> |
