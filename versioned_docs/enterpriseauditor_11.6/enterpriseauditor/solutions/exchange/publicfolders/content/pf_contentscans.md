# Collection > PF_ContentScans Job

The PF_ContentScans job is comprised of data collection that focuses on public folder content aging
within each public folder.

![Collection > PF_ContentScans Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The PF_ContentScans job is located in the 0.Collection job group.

## Queries for the PF_ContentScans Job

The PF_ContentScans job uses the ExchangePS Data Collector.

![Queries for the PF_ContentScans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/publicfolders/content/contentscansquery.png)

The following query is included in the PF_ContentScans job:

- PF Contents – Collects content aging information

    - By default set to search all public folders. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

## Analysis Tasks for the PF_ContentScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Content** >
**Collection** > **PF_ContentScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the PF_ContentScans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/publicfolders/content/contentscansanalysis.png)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports
