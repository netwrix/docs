---
sidebar_position: 5449
title: SQL_RoleMembers Job
---

# SQL\_RoleMembers Job

The SQL\_RoleMembers Job analyzes and provides information on role members in each SQL server role group, both at the instance and database level, across all targeted SQL servers.

## Analysis Tasks for the SQL\_RoleMembers Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL\_RoleMembers > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup26.png "Analysis Selection")

The default analysis tasks are:

* Role Member Details – Creates the SA\_SQLServer\_RoleMember\_Details table accessible under the job’s Results node
* Effective SQL Role Membership – Creates the SA\_SQLServer\_EffectiveMembership table accessible under the job’s Results node. This analysis task determines the Effective Role Membership for SQL or Azure SQL Roles.
* Effective AD Role Membership – Creates the SA\_SQLServer\_EffectiveRoleMembership table accessible under the job’s Results node. This analysis task determines the AD Effective Role Membership for SQL or Azure SQL Roles and adds them to the SQL Effective Membership table.
* Role Membership Instances Summary – Creates the SA\_SQL\_RoleMember\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_RoleMembers Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Role Membership | This report shows details on the roles and role membership in the audited SQL environment. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays top instances by server and database role membership * Table – Provides details on instances by server and database role membership * Table – Provides details on role membership details |