---
title: "Collection > PF_EntitlementScans Job"
description: "Collection > PF_EntitlementScans Job"
sidebar_position: 10
---

# Collection > PF_EntitlementScans Job

The PF_EntitlementScans job is comprised of data collection that focuses on public folder
permissions.

![Collection > PF_EntitlementScans Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/permissions/collectionjobstree.webp)

The PF_EntitlementScans job is located in the Collection job group.

## Queries for the PF_EntitlementScans Job

The PF_EntitlementScans job uses the ExchangePS Data Collector.

![Queries for the PF_EntitlementScans Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/permissions/entitlementscansquery.webp)

The following query is included in the PF_EntitlementScans job:

- Public Folder Permissions – Collects public folder permissions

    - By default set to search all public folders. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

## Analysis Tasks for the PF_EntitlementScans Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** >
**Permissions** > **Collection** > **PF_EntitlementScans** > **Configure** node and select
**Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the PF_EntitlementScans Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/permissions/entitlementscansanalysis.webp)

The following analysis tasks are selected by default:

- Compress and Index Collection – Compresses and indexes the collection
- Strip Replicas from Reports – Updates table to remove replicas
