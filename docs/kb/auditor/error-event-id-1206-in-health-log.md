---
description: >-
  Describes the cause and resolution for Event ID 1206 logged in the Netwrix
  Auditor System Health Log when the SharePoint Core Service cannot be found.
keywords:
  - Netwrix Auditor
  - Event ID 1206
  - Health Log
  - SharePoint Core Service
  - SharePoint Central Administration
  - monitoring plan
  - data collection
products:
  - auditor
sidebar_label: 'Error: Event ID 1206 in Health Log'
tags: []
title: 'Error: Event ID 1206 in Health Log'
knowledge_article_id: kA00g000000H9d3CAC
---

# Error: Event ID 1206 in Health Log

## Symptom

The Netwrix Auditor System Health Log contains the following error message:

```
Event ID: 1206 
Netwrix Auditor for SharePoint Core Service cannot be found
```

## Causes

This can be due to one of the following reasons:

- The manual Core Service installation mode was selected when the monitoring plan was created, and the Netwrix Auditor for SharePoint Core Service cannot be found on the computer where SharePoint Central Administration is installed.
- The manual Core Service installation mode was selected when the monitoring plan was created, but the wrong SharePoint Central Administration URL was specified.

## Resolutions

- If the manual installation mode was used, check that you have specified a valid SharePoint Central Administration URL.
- Install the Netwrix Auditor for SharePoint Core Service manually. For detailed instructions, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8

> **TIP:** After the successful manual installation, the error will persist until the next scheduled data collection. To start the collection manually, navigate to a SharePoint monitoring plan, select **Edit** and click **Update** on the right pane.

## Related Article

- https://docs.netwrix.com/docs/auditor/10_8
