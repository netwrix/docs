---
title: "PgSQL_SensitiveDataScan Job"
description: "PgSQL_SensitiveDataScan Job"
sidebar_position: 20
---

# PgSQL_SensitiveDataScan Job

The PgSQL_SensitiveDataScan Job is designed to discover sensitive data in PostgreSQL databases based
on pre-defined or user-defined search criteria.

## Queries for the PgSQL_SensitiveDataScan Job

The PgSQL_SensitiveDataScan Job uses the SQL Data Collector.

![Query Selection](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/sensitivedataquery.webp)

The query is:

- PostgreSQL — Scans the PostgreSQL database for sensitive data. For configuring the
  [SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md),
  see the SQL Data Collector topic for additional information.

### Configure the SensitiveDataScan Query

The PgSQL_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive
Data Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **PostgreSQL** >
**PgSQL_SensitiveDataScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the **PostgreSQL** query click on Query Properties.
The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

:::warning
Do not make changes to other wizard pages as they have been pre-configured for this
job.
:::


![Sensitive Data Scan Settings](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/datascanjobsettings.webp)

**Step 4 –** To modify sensitive data scan options, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)
page. Select the desired scan options.

:::note
The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.
:::


![Select DLP Criteria](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/sensitivedatascancriteria.webp)

**Step 5 –** To modify criteria, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)
page. By default, the Sensitive Data Scan job is configured to scan for criteria configured in the
Global Criteria settings. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/overview.md)
topic for additional information.

![Filters page](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/sensitivedatascanfilter.webp)

**Step 6 –** PostgreSQL databases must be added to the query before they can be scanned. Navigate to
the **Filter** page and click **Connections** to open the Manage Connections window.

![Manage Connections](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/manageconnectionspgsql.webp)

**Step 7 –** In the Manage Connections window, click **New Connection** and add the following
information:

- Is Active Checkbox — Check to include the database on the Servers Pane on the Filter page.
- Instance Label — The name of the instance
- Database System — Select PostgreSQL from the dropdown list
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port for PostgreSQL is 5432

Exit the Manage Connections window to return to the Filter page.

**Step 8 –** On the Filter page, the query is configured by default to target Only select database
objects. Click Retrieve. The Available database objects box will populate. The default filter will
scan all PostgreSQL databases returned, excluding the listed system or default schemas and tables in
red. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Use the Add Custom Filter button to create and apply a custom filter.

**Step 9 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The PgSQL_SensitiveDataScan Job is now ready to run with the customized settings.

## Anaylsis Tasks for the PsgSQL_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **PostgreSQL** > **PgSQL_SensitiveDataScan** >
**Configure** node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

The default analysis tasks are:

- Bring SA_SQL_Instances to View — Displays the SA_SQL_Instances table
- PostgreSQL SDD Matches View — Bring the PostgreSQL SDD Matches View to the SA console
- PostgreSQL SDD Match Hits View — Bring the PostgreSQL SDD Match Hits View to the SA console
- PostgreSQL SDD AIC Import — Imports PostgreSQL SDD into the AIC
