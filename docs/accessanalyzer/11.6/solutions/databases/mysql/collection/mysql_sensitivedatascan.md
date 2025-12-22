---
title: "MySQL_SensitiveDataScan Job"
description: "MySQL_SensitiveDataScan Job"
sidebar_position: 20
---

# MySQL_SensitiveDataScan Job

The MySQL_SensitiveDataScan Job is designed to discover sensitive data in MySQL databases based on
pre-defined or user-defined search criteria.

## Queries for the MySQL_SensitiveDataScan Job

The MySQL_SensitiveDataScan Job uses the SQL Data Collector for queries.

![Query Selection](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/sensitivedatascan.webp)

The query is:

- Sensitive Data Scan - Discovers MySQL Sensitive Data. See the
  [Configure the SensitiveDataScan Query](#configure-the-sensitivedatascan-query) for additional
  information.

### Configure the SensitiveDataScan Query

The MySQL_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive
Data Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the Databases > 0.Collection > MySQL > MySQL_SensitiveDataScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the Sensitive Data Scan query click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

:::warning
Do not make changes to other wizard pages as they have been pre-configured for this
job.
:::


![Sensitive Data Scan Settings](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/sensitivedatscan_optionspage.webp)

**Step 4 –** To modify sensitive data scan options, select the desired scan options. See the
[SQL: Options](/docs/accessanalyzer/11.6/admin/datacollector/sql/options.md)
page for additional information.

:::note
The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.
:::


![DLP Criteria for Scan](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/sensitivedatscan_criteriapage.webp)

**Step 5 –** To modify criteria, navigate to the
[SQL: Criteria](/docs/accessanalyzer/11.6/admin/datacollector/sql/criteria.md)
page. By default, the Sensitive Data Scan job is configured to scan for criteria configured in the
Global Criteria settings. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/overview.md)
topic for additional information.

![Filters Page](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/sensitivedatscan_filterspage.webp)

**Step 6 –** MySQL databases must be added to the query before they can be scanned. Navigate to the
**Filter** page and click **Connections** to open the Manage Connections window.

![Manage Connections](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/manageconnectionsmysql.webp)

**Step 7 –** In the Manage Connections window, click **New Connection** and add the following
information:

- Instance Label — The name of the instance
- Database System — Select MySQL from the dropdown list
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port for MySQL is 3306

Exit the Manage Connections window to return to the Filter page.

**Step 8 –** On the Filter page, the query is configured by default to target Only select database
objects. Click Retrieve. The Available database objects box will populate. The default filter will
scan all MySQL Databases returned, excluding the listed system schemas and tables in red. Databases
and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Use the Add Custom Filter button to create and apply a custom filter.

**Step 9 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The MySQL_SensitiveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the MySQL_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **MySQL** > **MySQL_SensitiveDataScan** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/analysismysqlsensitivedatascan.webp)

The default analysis tasks are:

- Bring SA_SQL_Instances to View — Displays the SA_SQL_Instances table
- MySQL SDD Matches View — Bring the MySQL SDD Matches View to the SA console
- MySQL SDD Match Hits View — Bring the MySQL SDD Match Hits View to the SA console
- MySQL SDD AIC Import — Imports to MySQL SDD to the AIC
