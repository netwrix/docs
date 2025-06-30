# 6-SPAC_BulkImport Job

This job is responsible for retrieving the SPAC Tier 2 database information and import it to the
Enterprise Auditor SQL database.

## Queries for the 6-SPAC_BulkImport Job

The 6-SPAC_BulkImport Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/sharepoint/collection/spacbulkimportquery.webp)

The query for the 6-SPAC_BulkImport Job is:

- Bulk Import – Imports scan data into the SQL Server

### Configure the Query for the 6-SPAC_BulkImport Job

The 6-SPAC_BulkImport Job has been preconfigured to run with the default settings with the category
of Bulk Import SharePoint Activity Scan Results, which is not visible within the SharePoint Access
Auditor Data Collector Wizard when opened from within this job. Follow the steps to set any desired
customizations.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **2-SPAC_BulkImport** >
**Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**.

![Bulk Import Settings](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/spaa/bulkimportsettings.webp)

**Step 4 –** On the
[SPAA: Bulk Import Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/bulkimportsettings.md)
page, the **Set Host Identifier** is not configured by default. Click **Next**.

**NOTE:** Unless SQL Server Replication is used, it should not be necessary to adjust the **Host
Identifier** seed.

**CAUTION:** Do not configure the options on the Results page.

**Step 5 –** On the Results page, all Available Properties are selected by default. Click **Next**.

**Step 6 –** On the Summary page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 6-SPAC_BulkImport Job has now been customized.

## Analysis Tasks for 2-SPAC_BulkImport Job

Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **6-SPAC_BulkImport** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** The analysis tasks are preconfigured for this job. Never modify or deselect the
selected analysis tasks.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/sharepoint/collection/spacbulkimportanalysis.webp)

The default analysis tasks are:

-   1. Create Event Name Table – Creates the SA_SPAC_EventNames table associated with SPAC
-   2. Create Views – Creates the views associated with SPAC
