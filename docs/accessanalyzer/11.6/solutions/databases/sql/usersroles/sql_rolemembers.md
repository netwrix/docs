---
title: "SQL_RoleMembers Job"
description: "SQL_RoleMembers Job"
sidebar_position: 30
---

# SQL_RoleMembers Job

The SQL_RoleMembers Job analyzes and provides information on role members in each SQL server role
group, both at the instance and database level, across all targeted SQL servers.

## Analysis Tasks for the SQL_RoleMembers Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_RoleMembers > Configure node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/usersroles/sqljobgroup26.webp)

The default analysis tasks are:

- Role Member Details – Creates the SA_SQLServer_RoleMember_Details table accessible under the job’s
  Results node
- Effective SQL Role Membership – Creates the SA_SQLServer_EffectiveMembership table accessible
  under the job’s Results node. This analysis task determines the Effective Role Membership for SQL
  or Azure SQL Roles.
- Effective AD Role Membership – Creates the SA_SQLServer_EffectiveRoleMembership table accessible
  under the job’s Results node. This analysis task determines the AD Effective Role Membership for
  SQL or Azure SQL Roles and adds them to the SQL Effective Membership table.
- Role Membership Instances Summary – Creates the SA_SQL_RoleMember_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_RoleMembers Job produces
the following pre-configured report.

| Report          | Description                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Role Membership | This report shows details on the roles and role membership in the audited SQL environment. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays top instances by server and database role membership</li><li>Table – Provides details on instances by server and database role membership</li><li>Table – Provides details on role membership details</li></ul> |
