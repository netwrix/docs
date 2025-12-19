---
title: "1-Db2_SensitiveDataScan"
description: "1-Db2_SensitiveDataScan"
sidebar_position: 10
---

# 1-Db2_SensitiveDataScan

This job discovers sensitive data in the Db2 databases across all the targeted Db2 database servers
based on pre-defined or user-defined criteria.

## Queries for the 1-Db2_Sensitive Data Scan Job

The 1-Db2 Sensitive Data Job uses the SQL Data Collector for the following queries.

![sensitivedatascanquery](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatascanquery.webp)

The query is:

- Db2 SensitiveData – Scans Db2 databases for sensitive data

## Recommended Configuration for the SensitiveDataScan Query

It is only necessary to set up the connection for the 1-Db2 SensitiveDataScan Job. Once the
connection is established, custom configurations apply to all other job queries within the
0.Collection job group. Follow the steps to customize configurations.

**Step 1 –** Navigate to the Databases > 0.Collection > Db2 > 1-Db2_SensitiveDataScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the SensitiveDataScan query click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens
with Sensitive Data Collection category selected.

![Category page](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatacategory.webp)

**Step 4 –** Click **Next**. The Sensitive Data Scan Settings view appears.

![Sensitive Data Scan Settings](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatajoboptions.webp)

**Step 5 –** To modify sensitive data scan options, select the desired scan options. See the
[SQL: Options](/docs/accessanalyzer/12.0/admin/datacollector/sql/options.md) page for additional information.

:::warning
The Sensitive Data Scan Settings are preconfigured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.
:::


**Step 6 –** Click **Next**. The Select Criteria view appears.

![Select Criteria](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatacriteria.webp)

**Step 7 –** To modify criteria, click on **Use the following selected criteria:** and select your
choices. By default, the Sensitive Data Scan job is set to **Use Global Criteria**.

:::note
For more information on adding or deleting criteria, navigate to the
[SQL: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/sql/criteria.md) page or See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
topic for additional information.
:::


**Step 8 –** Click **Next**. The Filters view appears.

![Filters](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatafilter.webp)

**Step 9 –** Click **Connections** to open the Manage Connections window.

:::note
SQL databases must be added to the query before they can be scanned. Before you can add a
query, you must establish a connection to the database.
:::


![Manage Connections](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedataconnection.webp)

**Step 10 –** In the Manage Connections window, enter the following information:

- Instance Label — Custom name of the instance
- Database System — A drop down containing all available database servers. Select the Db2LUW server
  to configure Db2 queries.
- Service Name — Custom name of the service
- Host — Name or IP address of the host where the database is located. Host list is IBM DB2
- Port Number — Port number for the selected database
- Default Database — Default Database

**Step 11 –** After completing the above information fields, click **Test Connection** to validate
the new connection. Once validated, click **Create New Connection** to finalize the connection.

**Step 12 –** Navigate to the Filter page. Select Only select database objects or **All database
objects**. Collection queries are configured by default to target Only select database objects.

:::note
For more information on filtering, see the
[SQL: Filter](/docs/accessanalyzer/12.0/admin/datacollector/sql/filter.md) page.
:::


**Step 13 –** Click Retrieve. The Available database objects box will populate.

**Step 14 –** Add the Databases and instances to be audited. Databases and instances can be added in
the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

Selected database objects to be audited will display.

**Step 15 –** Click **Next** and navigate to the Summary page, click Finish to save any setting
modifications or click Cancel if no changes were made. Then click OK to close the Query Properties
window.

The 1-Db2_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-Db2_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **Db2** > **1-Db2_SensitiveDataScan** >
**Configure** node and select **Analysis** to view the Analysis Tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/db2/collection/sensitivedatascananalysis.webp)

The default analysis tasks are:

- Update Instance Name — Updates the instance name with a port if there are multiple instances in a
  single host
- Db2 Matches — Brings the Db2 SDD Matches View to the Access Analyzer console
- Db2 Match Hits — Brings the Db2 Match Hits View to the Access Analyzer console
- AIC Sensitive Data Import — Db2 Match Imports discovered Db2 sensitive data to the AIC
