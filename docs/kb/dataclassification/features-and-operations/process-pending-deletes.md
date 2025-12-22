---
description: >-
  Explains why the Indexer service reports "process pending deletes" in the
  Netwrix Data Classification service viewer and how to improve Pending Deletes
  processing performance.
keywords:
  - pending deletes
  - indexer
  - Netwrix Data Classification
  - Collector Service
  - Classifier Service
  - indexing performance
  - DB tables
  - index files
  - pending deletes processing
products:
  - data-classification
sidebar_label: Process Pending Deletes
tags:
  - features-and-operations
title: "Process Pending Deletes"
knowledge_article_id: kA04u0000000H6OCAU
---

# Process Pending Deletes

## Situation

The Indexer service is reporting a status of “process pending deletes” in the Netwrix Data Classification service viewer

## Cause

Pending Deletes is a complex operation of removing all data and references to a Document that has been removed or is no longer accessible to Netwrix Data Classification.

Processing these pending deletes involves clearing up a number of Tables in the DB (about 10 queries per single Pending Delete) and Index files on Netwrix Data Classification Server(s).

This is a normal process for Netwrix Data Classification and is typically not a cause for concern. However, if you are noticing the index service only showing this status and affecting overall indexing speed then please review the information below

## Resolution

You can improve Pending Deletes processing performance by stopping the **Collector Service** (Netwrix Data Classification will stop registering new Pending Deletes) and **Classifier Service**, which will free up some extra resources for Indexer Service.
