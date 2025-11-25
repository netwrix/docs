---
description: >-
  This article describes how to resolve the Health Log error "Data collection
  has failed. Error: A child item with this name already exists" for a File
  Server monitoring plan in Netwrix Auditor.
keywords:
  - health log
  - file server
  - monitoring plan
  - event 6100
  - licensing data
  - license
  - Netwrix Auditor
  - data collection
products:
  - auditor
sidebar_label: Child Item with This Name Already Exists in File S
tags: []
title: "Child Item with This Name Already Exists in File Server Monitoring Plan"
knowledge_article_id: kA04u0000011146CAA
---

# Child Item with This Name Already Exists in File Server Monitoring Plan

## Symptom

You've encountered the following error in Health Log for your File Server monitoring plan:

```
Source: File Storage Audit Service  
Event ID: 6100 
User: N/A
Computer: %computer%  
Description: Monitoring plan: %monitoring_plan_name%. 
Data collection has failed. Error: A child item with this name already exists
```

## Cause

The licensing data was corrupted.

## Resolution

- In case you've encountered the issue after a recent upgrade, wait for 24 hours to see if the issue is resolved on its own.
- Reapply the license file. Refer to the following article for additional information: [How to Apply Netwrix Auditor License](/docs/kb/auditor/system-administration/licensing-and-compliance/how-to-apply-netwrix-auditor-license).
- In case reapplying the license did not help, contact [Netwrix Technical Support](https://www.netwrix.com/open_a_ticket.html).




