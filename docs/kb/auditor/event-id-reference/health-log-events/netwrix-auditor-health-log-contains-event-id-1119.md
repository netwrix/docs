---
description: >-
  Netwrix Auditor cannot collect data from a SharePoint farm and the Netwrix
  Auditor Health Log shows Event ID 1119 with the message "An item with the same
  key has already been added." This article explains the cause and steps to
  resolve the issue.
keywords:
  - Netwrix Auditor
  - Event ID 1119
  - SharePoint
  - Central Administration
  - FQDN
  - Monitoring Plan
  - Netwrix Auditor for SharePoint Audit Service
products:
  - auditor
sidebar_label: Netwrix Auditor Health Log Contains Event ID 1119
tags: []
title: "Netwrix Auditor Health Log Contains Event ID 1119"
knowledge_article_id: kA04u000001116HCAQ
---

# Netwrix Auditor Health Log Contains Event ID 1119

## Symptom

Netwrix Auditor unable to collect data from a SharePoint farm and the Netwrix Auditor Health Log contains the EventID 1119:

```
An item with the same key has already been added. 
```

## Cause

Invalid format of a SharePoint Central Administration URL is specified in your monitoring plan settings.

## Resolution

Provide the URL for your SharePoint farm (Central Administration) in the FQDN format. For that:

1. In **Netwrix Auditor**, navigate to **Monitoring Plans**.
2. Select your SharePoint monitoring plan.
3. Click **Edit Item** on the right.
4. On the **General** tab, provide the Central Administration address in the FQDN format (e.g., `http://sharepointserver.local:8080`).
5. Save your edits.
6. On the Netwrix Auditor server host, open the **Services** snap-in and make sure that the **Netwrix Auditor for SharePoint Audit Service** is running.
