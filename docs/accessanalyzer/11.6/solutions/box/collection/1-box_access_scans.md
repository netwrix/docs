---
title: "1-Box_Access Scans Job"
description: "1-Box_Access Scans Job"
sidebar_position: 10
---

# 1-Box_Access Scans Job

The 1-Box_Access Scans Job collects the data which will be further analyzed in order to provide
details on Box access rights, policies, configurations, and content.

## Queries for the 1-Box_Access Scans Job

The Scan Query uses the Box Data Collector to target all Box hosts and has been preconfigured to use
the Scan Box Permissions Category. If this query is not configured but has the access token, a full
scan of all folders at full depth is performed. Optionally, configure the query to limit the depth
of the scan.

![Queries for the 1-Box_Access Scans Job](/images/accessanalyzer/11.6/solutions/box/collection/accessqueries.webp)

The 1-Box_Access Scans Job has the following queries:

- Scan Query – Collects access data which will be further analyzed in order to provide details on
  Box access rights, policies, configurations, and content

Prior to the first execution, it is necessary to authenticate to the targeted Box environment. This
is done on the Authenticate page of the Scan query. Additionally, the following default
configurations are commonly customized:

- Exclusions page:

    - Not scoped

- Additional Scoping page:

    - Not scoped

See the [Configure the 1-Box_Access Scans Job](#configure-the-1-box_access-scans-job) section for
instructions.

### Configure the 1-Box_Access Scans Job

The 1-Box_Access Scans Job contains the Scan Query. Follow the steps to configure the query.

**Step 1 –** Navigate to the **Box** > **0.Collection** > **1-Box_Access Scans** > **Configure**
node and select **Queries**.

**Step 1 –** In the Query Selection view, select the Scan Query and click **Query Properties**. The
Query Properties window opens.

**Step 2 –** Select the **Data Source** tab, and click **Configure**. The Box Data Collector Wizard
opens.

![Box Data Collector Wizard Exclusions page](/images/accessanalyzer/11.6/solutions/box/collection/accessexclusions.webp)

**Step 3 –** On the Exclusions Page:

- Add folders to be excluded
- Add folders to be included (scope scan to only these folders)

![Box Data Collector Wizard Additional Scoping page](/images/accessanalyzer/11.6/solutions/box/collection/accessadditionalscoping.webp)

**Step 4 –** On the Additional Scoping page:

- Optionally, select this option to limit the depth of the scan across the targeted Box account

![Box Data Collector Wizard Scope by User page](/images/accessanalyzer/11.6/solutions/box/collection/accessuserscope.webp)

**Step 5 –** On the Scope By User Page:

- Optionally, limit the scope of the scan to specified users by providing a CSV file

![Box Data Collector Wizard Authenticate page](/images/accessanalyzer/11.6/solutions/box/collection/accessauthenticate.webp)

**Step 6 –** The Authenticate page is where the connection to the target Box environment is
configured. Click **Authorize** to launch the BoxLogin window and generate an authorization code.
This code allows Enterprise Auditor to report on the Box Enterprise.

:::note
Authentication to the target Box environment only needs to be completed once, prior to the
first scan and only in one of the scan jobs.
:::


**Step 7 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The 1-Box_Access Scans Job will execute according to the connection settings configuration.
