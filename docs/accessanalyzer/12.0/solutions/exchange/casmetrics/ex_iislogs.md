---
title: "0.Collection > EX_IISLogs Job"
description: "0.Collection > EX_IISLogs Job"
sidebar_position: 20
---

# 0.Collection > EX_IISLogs Job

The 0.Collection > EX_IISLogs Job provides data collection to be utilized in the ActiveSync, Outlook
Web Access, and Outlook Anywhere Reports. This job goes out to each server that contains the
IIS Logs and parses the log to return the data to the Access Analyzer database.

![0.Collection > EX_IISLogs Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/collectionjobstree.webp)

The EX_IISLogs job is located in the 0.Collection Job Group.

## Queries for the EX_IISLogs Job

The EX_IISLogs Job uses the SMARTLog Data Collector.

![Queries for the EX_IISLogs Job](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/iislogsquery.webp)

The following query is included in the EX_IISLogs Job:

- IIS Logs – Collects IIS Logs

    - By default set to process log files for the last 3 days. This time frame can be modified
    - See the [Configure the IIS Logs Query](#configure-the-iis-logs-query) topic for additional
      information

### Configure the IIS Logs Query

The EX_IISLogs Job has been preconfigured to run with the default settings with the Log Type of
Internet Information Server Log. However, the time frame for the log files to be processed can be
modified on the Target Log page of the SMART Log DC Wizard. See the
[SMARTLog Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/smartlog/overview.md) topic for additional
information.

Follow the steps to modify the query configuration.

**Step 1 –** Navigate to the **Exchange** > **2. CAS Metrics** > **0. Collection** >
**EX_IISLogs** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The SMART Log DC Wizard opens.

:::warning
Do not modify other wizard pages. The other wizard pages are pre-configured for this
job.
:::


![SMART Log DC Wizard Target Log page](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/smartlogdctargetlog.webp)

**Step 4 –** Navigate to the Target Log page, and configure the time frame as required. See the
[SMARTLog: Target Log](/docs/accessanalyzer/12.0/admin/datacollector/smartlog/targetlog/targetlog.md) topic for additional
information.

:::tip
Remember, if the date range configuration includes data older than the last scan, the **Persist
Log State** checkbox on the Log State page must be disabled.
:::


**Step 5 –** Navigate to the Summary page. Click **Finish**.

The EX_IISLogs Job applies the modifications to future job executions.
