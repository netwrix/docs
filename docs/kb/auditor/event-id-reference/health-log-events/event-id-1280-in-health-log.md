---
description: >-
  Health Log shows Event ID 1280 when the Netwrix Auditor Archive Service has
  stopped; start the service and restart the SharePoint monitoring plan data
  collection.
keywords:
  - Event ID 1280
  - Health Log
  - Netwrix Auditor
  - Archive Service
  - services.msc
  - SharePoint monitoring
  - Monitoring Plans
  - data collection
  - Audit Archive
products:
  - auditor
sidebar_label: Event ID 1280 in Health Log
tags: []
title: "Event ID 1280 in Health Log"
knowledge_article_id: kA00g000000H9chCAC
---

# Event ID 1280 in Health Log

## Symptom

The following error message under Event ID 1280 is prompted in Health Log for your SharePoint monitoring plan:

```
Netwrix Auditor Server failed to save audit data to Audit Archive
```

## Cause

**Netwrix Auditor Archive Service** has stopped.

## Resolution

Start **Netwrix Auditor Archive Service**:

1. Open the **Services Manager** either by searching for **Services** in the Search bar, or running the `services.msc` line in the **Run** command window.
2. Locate **Netwrix Auditor Archive Service**, right-click the service and select **Start**.
3. Once the service is started, restart the data collection:

   1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
   2. Select your SharePoint monitoring plan and click **Edit**.
   3. Click **Update** under the **Monitoring Plan** section.
