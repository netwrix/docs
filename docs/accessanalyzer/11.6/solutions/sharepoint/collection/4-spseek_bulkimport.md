---
title: "4-SPSEEK_BulkImport Job"
description: "4-SPSEEK_BulkImport Job"
sidebar_position: 40
---

# 4-SPSEEK_BulkImport Job

This job is responsible for retrieving the Tier 2 SPDLP database information and importing it to the
SQL Server where Enterprise Auditor stores data.

## Queries for the 4-SPSEEK_BulkImport Job

The 4-SPSEEK Bulk Import Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](/images/accessanalyzer/11.6/solutions/sharepoint/collection/spseekbulkimportquery.webp)

The query for the 4-SPSEEK Bulk Import Job is:

- Bulk Import – Imports scan data into the SQL Server

### Configure 4-SPSEEK_BulkImport Job

The 4-SPSEEK_BulkImport Job has been preconfigured to run with the default settings with the SPAA
Data Collector category of **Bulk Import Sensitive Content Scan Results**, which is not visible
within the SharePoint Access Auditor Data Collector Wizard when opened from within this job. Follow
the steps to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **0.Collection** >
**4-SPSEEK_BulkImport** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**.

![Bulk Import Settings](/images/accessanalyzer/11.6/solutions/sharepoint/collection/bulkimportsettings.webp)

**Step 4 –** On the
[SPAA: Bulk Import Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/bulkimportsettings.md)
page, the **Set Host Identifier** is not configured by default. Click **Next**.

:::note
Unless SQL Server Replication is used, it should not be necessary to adjust the **Host
Identifier** seed.
:::


:::warning
Do not configure the options on the Results page.
:::


**Step 5 –** On the Results page, all Available Properties are selected by default. Click **Next**.

**Step 6 –** On the Summary page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 4-SPSEEK_BulkImport Job has now been customized.

## Analysis Tasks for 4-SPSEEK_BulkImport Job

Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **4-SPSEEK_BulkImport** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
The analysis tasks are preconfigured for this job. Never modify or deselect the
selected analysis tasks.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/sharepoint/collection/spseekbulkimportanalysis.webp)

The default analysis tasks are:

-   **1. Update data types** – Enterprise Auditor uses custom SQL data types to render data. This
       analysis creates updates to those data types.
-   **2. Import new functions (for SA Core)** – Creates functions used in the SharePoint Solution
-   **3. Import new functions (for SA SPAA)** – Creates functions used in the SharePoint Solution
-   **4. Create exception schema** – Creates the SA_SPAA_Exceptions table
-   **5. Create DLP views** – Creates the SA_SPDLP_MatchesView
-   **6. Create exceptions view** – Creates the SA_SPAA_ExceptionsView

The following analysis task is not selected by default, but can be enabled:

- Display Match Hits – Displays the SA_SPDLP_MatchesHitsView within Enterprise Auditor.
