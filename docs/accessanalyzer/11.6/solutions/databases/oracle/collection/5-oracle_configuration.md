---
title: "5-Oracle_Configuration Job"
description: "5-Oracle_Configuration Job"
sidebar_position: 60
---

# 5-Oracle_Configuration Job

The 5-Oracle_Configuration Job is designed to return additional configuration settings from Oracle
servers.

## Queries for the 5-Oracle_Configuration Job

The queries for the 5-Oracle_Configuration Job query uses the SQL Data Collector.

![5oracleconfigurationqueries](/images/accessanalyzer/11.6/solutions/databases/oracle/collection/5oracleconfigurationqueries.webp)

The queries are:

- Database Sizing – Returns database size data
- Database Links – Returns details about Oracle database links

### Configure the 5-Oracle_Configuration Queries

The 5-Oracle_Configuration Job is preconfigured to run using the default settings for the Custom
Oracle Query category in the SQL Data Collector. Follow the steps to customize configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**5-Oracle_Configuration Job** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select one of the queries and click on Query Properties.
The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

:::warning
Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.
:::


![Filters page](/images/accessanalyzer/11.6/solutions/databases/oracle/collection/5oracleconfigjobqueryfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 5-Oracle_Configuration Job is now ready to run with the customized settings.
