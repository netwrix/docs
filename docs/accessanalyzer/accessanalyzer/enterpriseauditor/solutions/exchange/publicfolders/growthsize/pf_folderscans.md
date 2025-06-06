# Collection > PF\_FolderScans Job

The PF\_FolderScans job is comprised of data collection that focuses on collecting sizing information for each public folder.

![Collection > PF_FolderScans Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The PF\_FolderScans job is located in the Collection job group.

## Queries for the PF\_FolderScans Job

The PF\_FolderScans job uses the ExchangePS Data Collector.

![Queries for the PF_FolderScans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/growthsize/folderscansquery.png)

The following query is included in the PF\_FolderScans Job:

- PF Size & Msg Counts – Collects public folder size and message counts

  - By default set to search all public folders. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#Scope-the-ExchangePS-Data-Collector) topic for additional information

## Analysis Tasks for the PF\_FolderScans Job

View the analysis task by navigating to the __Exchange__ > __5. Public Folders__ > __Growth and Size__ > __Collection__ > __PF\_FolderScans__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the PF_FolderScans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/growthsize/folderscansanalysis.png)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports
