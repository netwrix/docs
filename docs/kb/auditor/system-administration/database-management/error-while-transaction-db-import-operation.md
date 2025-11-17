---
description: >-
  When auditing Microsoft Teams with a gMSA, Netwrix Auditor may log Event ID
  2107: Error while Transaction DB Import operation - Access to the path is
  denied. This article explains the cause and provides step-by-step resolution.
keywords:
  - Event ID 2107
  - DB Import
  - tenants.config
  - SharePoint Online
  - MS Teams
  - gMSA
  - Netwrix Auditor
  - Access denied
products:
  - auditor
sidebar_label: Error While Transaction 'DB Import' Operation
tags: []
title: Error While Transaction 'DB Import' Operation
knowledge_article_id: kA0Qk0000000MerKAE
---

# Error While Transaction 'DB Import' Operation

## Symptom

When auditing MS Teams with gMSA, the following error appears in the Netwrix Auditor System Health log:

```text
Event ID:2107
Error while Transaction 'DB Import' operation. Access to the path is denied.
```

## Cause

The `tenants.config` file was corrupted.

## Resolution

First of all, Netwrix recommends checking your current Netwrix Auditor version and upgrading to the latest one.

Follow the steps below to resolve the error:

1. On the Netwrix Auditor server host, navigate to `Working Folder\Netwrix Auditor for SharePoint Online` and copy the `Configuration` folder to any other location.
2. Delete the **SharePoint Online** data source from the **Monitoring Plan**:
   - Open the problematic monitoring plan.
   - Select **SharePoint Online** data source.
   - Click **Remove Data Source** in the right panel.
3. Add **SharePoint Online** data source and the item with the tenant account back to the monitoring plan.
4. Create a new client secret for your SharePoint Online app.
5. Update the monitoring plan and check if the removed file was recreated.
