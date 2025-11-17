---
description: >-
  Describes and resolves Event ID 1016 'HKLM or HKU' error in the Health Log for
  the Windows Server Auditing monitoring plan in Netwrix Auditor by upgrading to
  build v10.7.13728 or later.
keywords:
  - HKLM
  - HKU
  - Event ID 1016
  - Windows Server Auditing
  - Health Log
  - monitoring plan
  - Netwrix Auditor
  - v10.7.13728
  - registry data provider
products:
  - auditor
sidebar_label: HKLM or HKU Error in Windows Server Auditing Monit
tags: []
title: "HKLM or HKU Error in Windows Server Auditing Monitoring Plan"
knowledge_article_id: kA0Qk0000001JobKAE
---

# HKLM or HKU Error in Windows Server Auditing Monitoring Plan

## Symptom

Netwrix Auditor prompts the following error in the **Health Log** for the Windows Server Auditing monitoring plan:

```text
Event ID: 1016
Monitoring plan: %monitoring_plan_name% 
Item: %server_name% 
On %date_stamp%, the following error has occurred while processing %server_name%:  
The collector Registry data provider failed while gathering data on the server %server_name% due to the following error: HKLM or HKU 
Parameter name: path 
Actual value was %value%.
```

## Cause

This is a known issue fixed in the release `v10.7.13728`.

## Resolution

Upgrade your Netwrix Auditor instance to the build `v10.7.13728` or later. Download the latest version in [My Products · Netwrix](https://www.netwrix.com/my_products.html).
