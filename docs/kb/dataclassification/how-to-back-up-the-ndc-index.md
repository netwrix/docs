---
description: >-
  This article describes how to back up the Netwrix Data Classification index
  (NDC) to provide a recovery point in case of index corruption and minimize
  downtime.
keywords:
  - NDC
  - Netwrix Data Classification
  - index backup
  - CSE
  - ConceptDB
  - Indexer
  - Collector
  - Classifier
  - SQL
  - index corruption
products:
  - data-classification
sidebar_label: How to back up the Netwrix Data Classification index
tags: []
title: "How to back up the Netwrix Data Classification index"
knowledge_article_id: kA04u000000PcvZCAS
---

# How to back up the Netwrix Data Classification index

This article details steps to back up the Netwrix Data Classification (NDC) index. You should back up the index to provide a safety net in case of index corruption. Maintaining a proper NDC index reduces the time lost if an index becomes corrupted.

## What causes index corruption?

Corruption within the index occurs when one of two situations happens:

1. The Indexer process is terminated without being allowed to stop gracefully, for example by a power interruption or by using the “End Task” option in Task Manager.
2. The Indexer is prevented from editing the files by another utility (ransomware protection, anti-virus, etc.) during that same window, or the utility modifies those files itself.

## How to prevent the index from corrupting?

You can reduce the risk of index corruption by doing the following:

1. Ensure that automatic restarts are disabled on the server.
2. Ensure that the CSE files are excluded from any running anti-virus. (Default CSE location: `C:\Program Files\ConceptSearching\ConceptDB\`)
3. Educate users of the Netwrix Data Classification product to avoid manually stopping the Indexer process.

## My index has corrupted — can I perform a root cause analysis?

Yes. Logs are generally the best method for root cause analysis, though it may be difficult if considerable time has passed. One option is to review the following SQL data:

```sql
SELECT * FROM ApplicationLog WHERE Operation = 1 AND ModuleID = 2 ORDER BY LogDateTime DESC
```

If the service was improperly shut down, you would expect to see a **Started** entry without a corresponding **Shutdown** entry.

## How to back up the index?

Follow these steps to back up the index:

1. Stop all services: **Collector**, **Indexer**, **Classifier**. If you are using a DQS (clustered NDC), stop all three services on each server in the cluster.
2. Take a backup of the CSE file folder on each server. (Default CSE location: `C:\Program Files\ConceptSearching\ConceptDB\`)
3. Take a backup of the SQL database. It is very important that the SQL database is in sync with the CSE files — stop the services first to ensure consistency.
4. Start all services.

For best results, perform these steps weekly to ensure minimal data loss in the event of index corruption.
