---
description: >-
  Netwrix Endpoint Protector limits report displays to 10,000 entries; this
  article explains how you can view all eDiscovery scan results when the results
  exceed that limit by using filters or creating an audit log backup.
keywords:
  - eDiscovery
  - Netwrix Endpoint Protector
  - audit log backup
  - filters
  - '10,000 limit'
  - CSV
  - Scan Results and Actions
  - EPP
  - scan results
products:
  - endpoint-protector
sidebar_label: 'How to View All eDiscovery Scan Results When the Number Exceeds the 10,000 Record Limit'
tags:
  - features-and-operations
title: >-
  How to View All eDiscovery Scan Results When the Number Exceeds the 10,000
  Record Limit
knowledge_article_id: kA0Qk0000002B30KAE
---

# How to View All eDiscovery Scan Results When the Number Exceeds the 10,000 Record Limit

## Overview

Netwrix Endpoint Protector allows a maximum of `10,000` entries to be displayed for each report. If the number of scan results exceeds this limit, you can still access all results using the methods below.

## Instructions

### Use filters to narrow down scan results

1. Apply filters in the report view to reduce the number of displayed entries and locate specific results within the `10,000`-entry limit.

### Create an Audit Log Backup for eDiscovery logs

1. Go to **System Maintenance > Audit Log Backup**.  
2. In the **Make Backup** section, select **Audit eDiscovery Log Backup**.  
3. Check the option **Keep backed up logs** to preserve the scan results on the Netwrix Endpoint Protector (EPP) console.  
4. Click **Start**. An archived CSV report with all results will be generated within a few minutes.

As long as the eDiscovery logs are kept on the server, you can still perform actions, such as encrypting, decrypting, or deleting on target, on any identified items. To do this, go to the **Scan Results and Actions** page and use filters to locate the specific item.
