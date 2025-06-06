# 2-SPAA\_SystemScans Job

The job collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm.

## Queries for the 2-SPAA\_SystemScans Job

The 2-SPAA\_SystemScans Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spaasystemscansquery.png)

The query for the 2-SPAA\_SystemScans Job is:

- Scan SharePoint – Scans SharePoint systems

### Configure 2-SPAA\_SystemScans Job

The 2-SPAA\_SystemScans Job has been preconfigured to run with the default settings using the SPAA Data Collector category of Scan SharePoint Access, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job.

__CAUTION:__ Users should not change scans in a way that would result in less data being returned on a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in the Tier 2 database and subsequently removed from the Tier 1 database.

Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __1-SPAA\_SystemScans__ > __Configure__ node and select the __Queries__ node.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__.

![SharePoint Data Collection Settings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/datacollectionsettingsspaa.png)

__Step 4 –__ On the [SPAA: SharePoint Data Collection Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/settings.md) page, customize as desired and click __Next__.

![Scan Scoping Options](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.png)

__Step 5 –__ On the [SPAA: Scan Scoping Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.md) page, no web applications or site collections have been added. If desired, limit the scope of the scan to specific web applications or site collections. Click __Next__.

![Additional Scoping](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/additionalscopingspaa.png)

__Step 6 –__ On the [SPAA: Additional Scoping](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/additionalscoping.md) page, __Limit scanned depth to:__ is selected with the default set at __2__ levels. Customize this setting as desired and click __Next__.

![Agent Settings](/static/img/product_docs/activitymonitor/activitymonitor/install/agent/windowsagent.png)

__Step 7 –__ On the [SPAA: Agent Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/agentsettings.md) page, use the default settings unless an agent scan mode is desired. Click __Next__.

__CAUTION:__ Do not configure the options on the Results page.

__Step 8 –__ On the Results page, all Available Properties are selected by default. Click __Next__.

__Step 9 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 1-SPAA\_SystemScans Job has now been customized.
