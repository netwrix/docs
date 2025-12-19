---
description: >-
  Explains the performance impact that SQL auditing by Netwrix Auditor can have
  on SQL servers, especially during the initial data collection and scheduled
  collections.
keywords:
  - SQL audit
  - performance
  - SQL Server
  - Netwrix Auditor
  - data collection
  - baseline
  - maintenance
  - scheduled collections
products:
  - auditor
sidebar_label: What load does SQL audit generate for a SQL server
tags: []
title: "What load does SQL audit generate for a SQL server?"
knowledge_article_id: kA00g000000H9UACA0
---

# What load does SQL audit generate for a SQL server?

## Impact on SQL servers

The most noticeable impact on your SQL servers will be during the initial data collection. Netwrix Auditor runs several SQL scripts to build and store a ‘baseline’ of data against which it will compare future collections. However, even this initial collection will result in very little performance impact unless you are already running your servers at capacity. During subsequent data collections the impact will be even lower.

With daily collections running at `03.00 AM` by default and SIT collections running at `4:00 AM`, there may be a conflict with maintenance tasks running at the same time. If you are planning to run heavy maintenance jobs on your SQL servers during off-hours, please consider doing that before `03:00 AM`.
