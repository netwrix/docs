---
title: "1-Box_Activity Scans Job"
description: "1-Box_Activity Scans Job"
sidebar_position: 20
---

# 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job collects the data which will be further analyzed in order to provide
visibility into user activity events within Box.

## Queries for the 1-Box_Activity Scans Job

The Scan Query uses the Box Data Collector to target all Box hosts and has been preconfigured to use
the Scan Box Permissions Category.

![Queries for the 1-Box_Activity Scans Job](/images/accessanalyzer/11.6/solutions/box/collection/activityqueries.webp)

The 1-Box_Activity Scans Job has the following queries:

- Activity Scan – Collects activity data which will be further analyzed in order to provide
  visibility into user activity events within Box.

Prior to the first execution, it is necessary to authenticate to the targeted Box environment if
this has not already been done when configuring the 1-Box_Access Scans Job. This is done on the
Authenticate page of the Activity Scan query. Additionally, the following default configurations are
commonly customized:

- Exclusions page:

    - Not scoped

- Additional Scoping page:

    - Not scoped

See the [Configure the 1-Box_Activity Scans Job](#configure-the-1-box_activity-scans-job) section
for instructions.

### Configure the 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job contains the Activity Scan Query. Follow the steps to configure the
query.

**Step 1 –** Navigate to the **Box** > **0.Collection** > **1-Box_Activity Scans** > **Configure**
node and select **Queries**.

**Step 2 –** In the Query Selection view, select the Scan Query and click **Query Properties**. The
Query Properties window displays.

**Step 3 –** Select the Data Source tab, and click **Configure**. The Box Data Collector Wizard
opens.

![Box Data Collector Wizard Exclusions page](/images/accessanalyzer/11.6/solutions/box/collection/activityexclusions.webp)

**Step 4 –** On the Exclusions page:

- Add folders to be excluded
- Add folders to be included (scope scan to only these folders)

![Box Data Collector Wizard Additional Scoping page](/images/accessanalyzer/11.6/solutions/box/collection/activityadditionalscoping.webp)

**Step 5 –** On the Additional Scoping page:

- Optionally, select this option to limit the depth of the scan across the targeted Box account

![Box Data Collector Wizard Scope by User page](/images/accessanalyzer/11.6/solutions/box/collection/activityuserscope.webp)

**Step 6 –** On the Scope By User Page:

- Optionally, limit the scope of the scan to specified users by providing a CSV file

![Box Data Collector Wizard Activity Timespan Scope page](/images/accessanalyzer/11.6/solutions/box/collection/activitytimespanscope.webp)

**Step 7 –** On the Activity Timespan Scope page:

- Collect activity data within a Relative Timespan
- Collect activity data within an Absolute Timespan

![Box Data Collector Wizard Activity Operation Scope page](/images/accessanalyzer/11.6/solutions/box/collection/activityoperationscope.webp)

**Step 8 –** On the Activity Operation Scope page:

- Select Box enterprise event operations to collect

![Box Data Collector Wizard Authenticate page](/images/accessanalyzer/11.6/solutions/box/collection/activityauthenticate.webp)

**Step 9 –** The Authenticate page is where the connection to the target Box environment is
configured. Click **Authorize** to launch the BoxLogin window and generate an authorization code.
This code allows Enterprise Auditor to report on the Box Enterprise.

:::note
Authentication to the target Box environment only needs to be completed once, prior to the
first scan and only in one of the scan jobs.
:::


**Step 10 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The 1-Box_Activity Scans Job will execute according to the connection settings configuration.
