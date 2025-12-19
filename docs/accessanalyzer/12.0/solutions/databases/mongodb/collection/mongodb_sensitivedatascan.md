---
title: "MongoDB_SensitiveDataScan Job"
description: "MongoDB_SensitiveDataScan Job"
sidebar_position: 20
---

# MongoDB_SensitiveDataScan Job

The MongoDB_SensitiveDataScan Job is designed to discover sensitive data in MongoDB databases based
on pre-defined or user-defined search criteria.

## Queries for the MongoDB_SensitiveDataScan Job

The MongoDB_SensitiveDataScan Job uses the NOSQL Data Collector for queries.

![Query Selection](/images/accessanalyzer/12.0/solutions/databases/mongodb/collection/sensitivedatascan_job.webp)

The query is:

- MongoDB SDD - Collects sensitive data from MongoDB

    - (Optional) This query can be modified to target specific databases/instances. See the
      [Configure the MongoDB SDD Query](#configure-the-mongodb-sdd-query) topic for additional
      information.

## Configure the MongoDB SDD Query

The MongoDB SDD Query is preconfigured to run using the default settings for the Sensitive Data
Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **MongoDB** >
**MongoDB_SensitiveDataScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the MongoDB SDD query and click Query Properties.
The Query Properties window opens.

**Step 3 –** Select the Data Source tab, and click Configure. The NoSQL Data Collector Wizard opens.

:::warning
Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.
:::


**Step 4 –** Navigate to the [NoSQL: Options](/docs/accessanalyzer/12.0/admin/datacollector/nosql/options.md)
page.

![Sensitive Data Scan Settings](/images/accessanalyzer/12.0/install/application/options.webp)

**Step 5 –** Select the desired scan options.

**Step 6 –** Navigate to the [NoSQL: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/nosql/criteria.md)
page.

![Criteria Page](/images/accessanalyzer/12.0/admin/datacollector/ewsmailbox/criteria.webp)

**Step 7 –** To modify criteria, navigate to the
[NoSQL: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/nosql/criteria.md) page. By default, the Sensitive
Data Scan job is configured to scan for criteria configured in the Global Criteria settings. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
topic for additional information.

:::note
The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.
:::


**Step 8 –** Navigate to the [NoSQL: Filter](/docs/accessanalyzer/12.0/admin/datacollector/nosql/filter.md) page.

![Database Selection Settings](/images/accessanalyzer/12.0/admin/datacollector/ewsmailbox/filter.webp)

**Step 9 –** MongoDB databases must be added to the query before they can be scanned. Click
**Connections** to open the Manage Connections window.

![Manage Connections window](/images/accessanalyzer/12.0/admin/datacollector/nosql/manageconnections.webp)

**Step 10 –** In the Manage Connections window, click **Create New** and add the following
information:

- Is Active Checkbox — Check to include the database on the Servers Pane on the Filter page.
- Server Label — The name of the server
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port is 27017.
- Auth Database — Account used to access the database. Admin is recommended.
- Read Preference — Read preference describes how MongoDB clients route read operations to the
  members of a replica set. By default, an application directs its read operations to the primary
  member in a replica set (i.e. read preference mode “primary”). But, clients can specify a read
  preference to send read operations to secondaries. Click the link for additional informatoin.
- Mongo SRV Checkbox — Specifies that the information entered is for clusters or shards

**Step 11 –** Click to **Test Connection** to verify the connection to the database with the
connection profile applied to the job

**Step 12 –** Click **Save New Connection** to add the connection to the list, then close the Manage
Connections window.

**Step 13 –** On the Filter page, click Retrieveto populate the Servers pane with the databases and
collections.

**Step 14 –** (Optional) Right click on an object in the list to include or exclude it from the
sensitive data scan, or build /edit a pattern to create a custom filter. See the
[NoSQL: Filter](/docs/accessanalyzer/12.0/admin/datacollector/nosql/filter.md) topic for additional information.

**Step 15 –** Click **Validate** and then **Save** to apply the scoping. Navigating away from this
page without saving will undo any changes made.

**Step 16 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The MongoDB SDD Query is now ready to run with the customized settings.

## Analysis Tasks for the MongoDB_SensitiveDataScan Job

Navigate to the Databases > > 0.Collection > MongoDB > MongoDB_SensitiveDataScan > Configure node
and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/mongodb/collection/analysissensitivedatascan.webp)

The default analysis tasks are:

- NoSQL Instances — Brings the SA_NoSQL_Instances to view in SA
- Matches View — Brings the MongoDB matches view to the Access Analyzer console
- Match Hits View — Brings the MongoDB match hits view to the Access Analyzer console
- MongoDB SDD AIC Import — Imports MongoDB SDD into the AIC
