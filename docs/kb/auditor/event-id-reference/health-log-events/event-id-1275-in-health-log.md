---
description: >-
  Event ID 1275 indicates that the SharePoint Core Service for Netwrix Auditor
  has been removed from the SharePoint Central Administration server. This
  article explains the cause and how to let Netwrix Auditor redeploy the service
  automatically or how to install it manually.
keywords:
  - Event ID 1275
  - SharePoint Core Service
  - Health Log
  - Netwrix Auditor
  - Monitoring Plans
  - Data collection
  - SharePoint
products:
  - auditor
sidebar_label: Event ID 1275 in Health Log
tags: []
title: "Event ID 1275 in Health Log"
knowledge_article_id: kA00g000000H9d4CAC
---

# Event ID 1275 in Health Log

## Symptom

The following error message under Event ID 1275 is prompted in Health Log for your SharePoint monitoring plan:

```text
The Netwrix Auditor for SharePoint Core Service must have been removed
```

## Cause

Netwrix Auditor for SharePoint Core Service has been removed from the SharePoint Central Administration server.

## Resolutions

- Netwrix Auditor will deploy SharePoint Core Service automatically on the next data collection. To run the data collection, navigate to the affected SharePoint plan via **Monitoring Plans** > select the affected SharePoint plan and click **Edit** > click **Update** under the **Monitoring Plan** section.

- To manually install SharePoint Core Service, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 − Install for SharePoint Core Service · v10.6).

## Related articles

- Installation − Install for SharePoint Core Service · v10.6: https://docs.netwrix.com/docs/auditor/10_8
