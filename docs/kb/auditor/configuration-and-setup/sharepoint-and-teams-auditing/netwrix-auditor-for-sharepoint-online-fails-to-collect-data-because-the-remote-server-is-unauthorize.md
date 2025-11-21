---
description: >-
  This article explains how to resolve a 401 Unauthorized error that occurs when
  Netwrix Auditor fails to collect SharePoint Online data due to incorrect app
  registration. It describes how to re-create the app registration in the
  Microsoft 365 Admin Center and recreate the monitoring plan.
keywords:
  - SharePoint Online
  - 401 Unauthorized
  - app registration
  - Microsoft 365
  - Netwrix Auditor
  - monitoring plan
  - permissions
products:
  - auditor
sidebar_label: Netwrix Auditor for SharePoint Online Fails to Col
tags: []
title: "Netwrix Auditor for SharePoint Online Fails to Collect Data Because the Remote Server is Unauthorized"
knowledge_article_id: kA04u0000011120CAA
---

# Netwrix Auditor for SharePoint Online Fails to Collect Data Because the Remote Server is Unauthorized

## Symptom

Data collection for a SharePoint Online monitoring plan completes with the following error:

```text
Failed to collect state-in-time data due to the following error: The remote server returned an error: (401) Unauthorized.
```

## Cause

The error occurred due to incorrect APP registration.

## Resolution

Re-create registration for your app in the **Microsoft 365 Admin Center** and create a new SharePoint Online monitoring plan in Netwrix Auditor.

1. Sign into the **Microsoft 365 Admin Center** and re-create the registration for your app. For additional information on how to register your app, refer to the following article: Permissions for SharePoint Online Auditing.
2. After that, create a new monitoring plan for SharePoint Online and remove the old one in Netwrix Auditor. For additional information on how to create a monitoring plan, refer to the following article: SharePoint Online Plans.
