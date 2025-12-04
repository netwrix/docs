---
description: >-
  You may see this Health Log error for a Logon Activity monitoring plan when
  collected data exceeds size limits. Upgrade Netwrix Auditor to `v10.6.12359`
  or later to resolve the issue.
keywords:
  - Netwrix Auditor
  - Logon Activity
  - Event ID 5004
  - Health Log
  - data collection
  - file size limit
  - monitoring plan
  - upgrade
products:
  - auditor
sidebar_label: 'Error: Size of Collected Data Files Exceeded Limit'
tags: []
title: "Error: Size of Collected Data Files Exceeded Limit in Logon Activity Monitoring Plan"
knowledge_article_id: kA04u000001112ZCAQ
---

# Error: Size of Collected Data Files Exceeded Limit in Logon Activity Monitoring Plan

## Symptom

Netwrix Auditor prompts the following error in the Health Log for your Logon Activity monitoring plan:

```text
Source:Active Directory Logon Activity Audit Service
Event ID:5004
Description:Monitoring plan: %Logon_Activity_monitoring_plan_name%
        
Data collection has failed. Error: The size of collected data files exceeded the limit. Some information has been lost.
```

## Resolution

Upgrade your Netwrix Auditor instance to `v10.6.12359` and later. Download the executable from [My Products · Netwrix 🤝](https://www.netwrix.com/my_products.html).
