---
description: >-
  Explains Event ID 1059 in the Netwrix Auditor System Health Log and shows how
  to resolve failed data collection when you manually start collection during
  the initial monitoring plan run.
keywords:
  - Netwrix Auditor
  - Event ID 1059
  - system health log
  - data collection
  - monitoring plan
  - snapshot removed
  - troubleshooting
products:
  - auditor
sidebar_label: Netwrix Auditor System Health Log - Event ID 1059
tags: []
title: "Netwrix Auditor System Health Log - Event ID 1059"
knowledge_article_id: kA00g000000H9X9CAK
---

# Netwrix Auditor System Health Log - Event ID 1059

Depending on your Netwrix Auditor version, the Netwrix Auditor System Health Log contains the following EventID: `1059`

"*Unable to report changes correctly, as the previous configuration snapshot has been removed or is partially invalid*".

## Cause

You have manually launched data collection while the initial data collection has been already in progress after the monitoring plan creation. This has led to data collection failure.

## Resolution

To resolve this issue, in **Netwrix Auditor Administrator Console** navigate to **Managed Objects --> your_Managed_Object_name** and click **Run** to restart data collection.
