---
description: >-
  Describes how to rebuild corrupted indexes on a single Distributed Query
  Server (DQS) by replacing CSE files and reindexing the affected content to
  avoid rebuilding indexes on multiple servers.
keywords:
  - DQS
  - CSE
  - ConceptDB.zip
  - reindex
  - NDC
  - Lexicon
  - IndexerChecksum
  - DQSID
products:
  - dataclassification
sidebar_label: Partially Rebuilding the DQS Index
tags:
  - kb
  - migration-and-maintenance
title: "Partially Rebuilding the DQS Index"
knowledge_article_id: kA04u000000wniXCAQ
---

# Partially Rebuilding the DQS Index

## Overview

This article describes how to rebuild corrupted indexes on a single Distributed Query Server (DQS) in a Netwrix Data Classification (NDC) deployment. This process avoids rebuilding indexes on all servers.

## Instructions

1. Stop services on the Distributed Query Server (DQS).
2. Download a blank copy of the CSE files (`ConceptDB.zip`).
3. Replace the CSE files on the DQS Server with the downloaded blank CSE files.

> **NOTE:** `Text.CSE` is not in this download and should be left unchanged.

4. Delete the following files and folders:
   - Lexicon shards folder
   - `Indexer.CSE`
   - `LexiconCache.CSE`
   - `LexiconCacheQS.CSE`
   - `LexiconSizeDistribution.CSE`
   - `PostingsDistribution.CSE`
   - `IndexerChecksum.CSE`

5. To reindex the affected content, run the following SQL statement:

```sql
UPDATE Pages Set Status = 200 WHERE DQSID = X AND Status > 200
```

where `X` is the value of your DQSID.

> **IMPORTANT:** Find the correct DQSID from the NDC configuration.

6. Start services on the DQS Server.

## Attachments

Use the following file to replace active NDC files (`.CSE`):

- https://dl.netwrix.com/products/utilities/ConceptDB.zip
