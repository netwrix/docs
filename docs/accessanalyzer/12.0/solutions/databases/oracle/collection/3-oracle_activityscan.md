---
title: "3-Oracle_ActivityScan Job"
description: "3-Oracle_ActivityScan Job"
sidebar_position: 40
---

# 3-Oracle_ActivityScan Job

The 3-Oracle_ActivityScan Job captures user activity from all the targeted Oracle database servers.

**Special Dependency**

- Oracle Server Audit Specifications to be configured on the target databases
    - Audit destination must be a binary file
    - See the Microsoft
      [Create a Server Audit and Database Audit Specification](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
      article for additional information.

## Query for the 3-Oracle_ActivityScan Job

The ActivityScan Query uses the SQL Data Collector for the following query:

![Query Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/jobgroup14.webp)

- ActivityScan – Collects activity from targeted instances

### Configure the 3-Oracle_ActivityScan Query

The 3-Oracle_ActivityScan Job is preconfigured to run using the default settings for the Server
Audit Events Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**3-Oracle_ActivityScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the ActivityScan query and click on Query
Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

:::warning
Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.
:::


![Sensitive Data Scan Settings](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/optionspage.webp)

**Step 4 –** Navigate to the Options page. Enable or disable configuration options as needed. Click
Next to continue.

![Filter Page](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/3oracleactivityscanfilterpage.webp)

**Step 5 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 6 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 3-Oracle_ActivityScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 3-Oracle_ActivityScan Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **3-Oracle_ActivityScan** >
**Configure** node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/jobgroup16.webp)

The default analysis tasks are:

- Oracle Activity Import – Creates the SA_AIC_ActivityEventsImport table accessible under the job’s
  Results node
- Delete Activity Older than 30 Days – Drops Activity from the AIC tables older than 30 days
