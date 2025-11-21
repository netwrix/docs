---
description: >-
  This article explains how to tweak Netwrix Data Classification processing
  settings to maximize server resource usage and improve document processing
  throughput. It describes collector, indexer, classifier tuning, polling
  adjustments, and SQL host considerations.
keywords:
  - document processing
  - performance tuning
  - Collector Threads
  - Indexer
  - Classifier
  - polling
  - SQL performance
  - Netwrix Data Classification
products:
  - auditor
  - data-classification
sidebar_label: How to improve document processing performance
tags: []
title: "How to improve document processing performance"
knowledge_article_id: kA00g000000H9e0CAC
---

# How to improve document processing performance

The **Netwrix Data Classification** platform contains a number of ways to tweak the processing of content to make the most of the available server resources and ensure that your content is processed as quickly as possible. You may wish to review this guide if:

- You're seeing one or two of the core services **idle** a large percentage of the time
- and, one service is typically busy processing content (suggesting a bottleneck with one service)

The below guide details some of the typical steps we would recommend taking when looking to improve performance, or debug a lower than expected throughput.

## Collector

The **Collector** service is largely bound by the **CPU** and **Network** performance available to the server. If these resources are not being fully utilised then there are several configuration variables that can be increased by following these steps:

1. Navigate to the "**Config**" section of the **QS Administration interface**
2. On the "**Collector**" tab consider increasing the following variables:
   - **Collector** **Threads** - Limits the total number of requests to external systems, each **thread** can be thought of as a single user, so 5 **threads** would roughly be the equivalent load of 5 extra users
   - **Collector Domain Threads** - Limits the total number of requests to each HTTP Domain (the root URL of a website or SharePoint environment etc). Depending on the content being crawled this will override the main "**Collector Threads**" variable. I.E, if we are only crawling one website or one SharePoint environment and we have values of 10 and 5 for the main and domain variables respectively then the lower "**Domains**" value will used.
   - **Collector File Threads** - Limits the total number of requests made to file sources.

We would recommend increasing these values slowly - reviewing the environment and then perhaps repeating. It is also important to continue monitoring the source system(s) as you increase the demands made on the environment.

## Indexer

The **Indexer** service is largely bound by the **IO/Disk/Memory** performance available to the server. We would recommend considering the following:

- The current **IO** usage level, in virtual environments this should be reviewed on the VM host
- The speed of the disks used for indexing (the **CSE** files location, by default: `C:Program FilesConcept SearchingconceptDB`). We recommend using solid-state storage, or the fastest disks available " high speed network appliances are also supported.
- When utilising a network storage device it is important to also monitor **Network** usage, and consider upgrading the Network link

## Classifier

The **Classifier** service is largely bound by the **CPU** performance available to the server. If these resources are not being fully utilised then you can increase throughput by following these steps:

1. Navigate to the "**Config**" section of the **QS Administration interface**
2. On the "**Classifier**" tab consider increasing the "**Classifier Threads**", monitoring **CPU** usage as throughput increases

## Delays between batches

In smaller, less busy, environments you may sometimes see a "**delay**" between each batch. This can sometimes leave you waiting 30-45 seconds for a document to process through fully. This is nothing to worry about - the services are designed to go into a small "**sleep**" state when there is no more work to do in order to reduce demands on the SQL environment. You can optionally remove this "**sleep**" setting by following these steps:

1. Navigate to the "**Config**" section of the **QS Administration interface**
2. Reduce the values of the following configuration options:
   1. **Collector Polling**
   2. **Indexer Polling**
   3. **Classifier Polling**

Once updated please restart each of the affected services.

## SQL Performance

If you are still seeing throughput issues, with little demand on the **Netwrix Data Classification** server then we would recommend reviewing the SQL Server host - in particular **CPU** and **Memory** utilisation.
