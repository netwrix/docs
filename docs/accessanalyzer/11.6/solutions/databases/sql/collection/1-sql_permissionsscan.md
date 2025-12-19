---
title: "1-SQL_PermissionsScan"
description: "1-SQL_PermissionsScan"
sidebar_position: 20
---

# 1-SQL_PermissionsScan

The 1-SQL_PermissionsScan Job collects SQL server instance and database level permissions from
targeted servers.

## Queries for the 1-SQL_PermissionsScan Job

The 1-SQL_PermissionsScan Job uses the SQL Data Collector for the following query:

![Query Selection](/images/accessanalyzer/11.6/solutions/databases/sql/collection/sqljobgroup6.webp)

- PermissionsScan – Collects permissions from targeted instances
    - (Optional) This query can be modified to target specific databases/instances. See the
      [Configure the PermissionsScan Query](#configure-the-permissionsscan-query) topic for
      additional information.

### Configure the PermissionsScan Query

The 1-SQL_PermissionScan Job is preconfigured to run using the default settings within the
Permissions Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 1-SQL_PermissionsScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the PermissionsScan query and click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector Wizard opens.

:::warning
Do not make changes to other wizard pages as they have been pre-configured for this
job.
:::


![Filters](/images/accessanalyzer/11.6/solutions/databases/azuresql/collection/1sqlpermissionscanfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)
page. The default query target is All databases. The default query scope is Only select database
objects and click Retrieve. The Available database objects will be populated. Databases and
instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally, use the Add Custom Filter button to create and apply a custom filter.

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-SQL_PermissionsScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-SQL_PermissionScan Job

Navigate to the **Databases** > 0.Collection > SQL > 1-SQL_PermissionsScan > Configure node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/collection/sqljobgroup8.webp)

The default analysis tasks are:

- Remove Old AIC Resources — Removes AIC resources using the old path that did not include the
  schema
- AIC Import – Hosts — Imports SQL hosts to the AIC
- AIC Import – Instance Permissions Node — Imports a node for instance permissions for each instance
- AIC Import – Databases — Imports each database in the SQL instances
- AIC Import – Permissions — Imports SQL Permissions to the AIC
- AIC Import – Roles — Imports a Roles node into the AIC for SQL Server Roles
- AIC Import – Database Role Permissions — Imports role permissions at the database level
- AIC Import – Local SQL Groups — Imports SQL local groups to the AIC
- AIC Import – Instance Role Permissions — Imports permissions assigned to roles at the instance
  level
