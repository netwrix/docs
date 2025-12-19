---
title: "Collection > PF_ContentScans Job"
description: "Collection > PF_ContentScans Job"
sidebar_position: 10
---

# Collection > PF_ContentScans Job

The PF_ContentScans job is comprised of data collection that focuses on public folder content aging
within each public folder.

![Collection > PF_ContentScans Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/publicfolders/content/collectionjobstree.webp)

The PF_ContentScans job is located in the 0.Collection job group.

## Queries for the PF_ContentScans Job

The PF_ContentScans job uses the ExchangePS Data Collector.

![Queries for the PF_ContentScans Job](/images/accessanalyzer/12.0/solutions/exchange/publicfolders/content/contentscansquery.webp)

The following query is included in the PF_ContentScans job:

- PF Contents – Collects content aging information

    - By default set to search all public folders. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

## Analysis Tasks for the PF_ContentScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Content** >
**Collection** > **PF_ContentScans** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the PF_ContentScans Job](/images/accessanalyzer/12.0/solutions/exchange/publicfolders/content/contentscansanalysis.webp)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports
