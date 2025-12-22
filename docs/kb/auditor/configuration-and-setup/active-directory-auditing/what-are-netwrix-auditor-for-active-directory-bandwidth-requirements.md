---
description: >-
  Explains how bandwidth usage for Netwrix Auditor collecting Active Directory
  data depends on whether network traffic compression is enabled and shows how
  to enable the compression option.
keywords:
  - Netwrix Auditor
  - Active Directory
  - bandwidth
  - compression
  - domain controllers
  - network traffic
  - monitoring plan
  - AD changes
products:
  - auditor
sidebar_label: What are Netwrix Auditor for Active Directory band
tags: []
title: "What are Netwrix Auditor for Active Directory bandwidth requirements?"
knowledge_article_id: kA00g000000H9dqCAC
---

# What are Netwrix Auditor for Active Directory bandwidth requirements?

## Bandwidth overview

Bandwidth requirements for Netwrix Auditor depend on whether or not the network traffic compression option is enabled to collect data from domain controllers.

### Without the compression service

- Bandwidth is calculated as a sum of the security logs for each monitored domain controller.  
  For example, if 7 domain controllers generate 50 MB of events per day, 350 MB will be transferred daily.

### With the compression service

- Network traffic compression service is used to optimize traffic usage. The service is a lightweight executable that runs on domain controllers, collects data, pre-filters it and sends to Netwrix Auditor in a highly compressed format.
- Compression service requires approximately `1 Kb per AD change`. Essentially, the bandwidth requirements depend on the amount of changes to the AD environment. For example, if 100 changes are done daily, `100 Kb` of data will be transferred across all domain controllers.

## Enable network traffic compression

To enable the traffic compression option, do the following:

1. In the product console navigate to **Netwrix Auditor -> your Monitoring Plan**.
2. Select **Active Directory** data source.
3. Double-click it or click **Edit data source**.
4. Check **"Enable network traffic compression"** option.
