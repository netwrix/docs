---
description: >-
  Netwrix Auditor Health Log can show Event ID 1016 when the WMI Classes data
  provider cannot query Win32_SystemSlot because the Windows Management
  Instrumentation service is stopped. This article describes the cause and steps
  to start the service to restore data collection.
keywords:
  - WMI
  - Windows Management Instrumentation
  - Event ID 1016
  - Health Log
  - Win32_SystemSlot
  - '0x80070422'
  - services.msc
  - monitoring plan
products:
  - auditor
sidebar_label: 'WMI Classes Data Provider Failed − Service Cannot '
tags: []
title: "WMI Classes Data Provider Failed − Service Cannot Be Started"
knowledge_article_id: kA04u000000wnjLCAQ
---

# WMI Classes Data Provider Failed − Service Cannot Be Started

## Symptom

The following error is prompted in Health Log for your Windows Server monitoring plan in Netwrix Auditor:

```
Source: Windows Server Audit Service
Event ID: 1016
Description: Monitoring plan: %Windows_Server_monitoring_plan%
Item: %server_name%
The WMI Classes data provider failed to get information on Win32_SystemSlot due to the following error:
The service cannot be started, either because it is disabled or because it has no enabled devices associated with it.
Exception from HRESULT: 0x80070422
```

## Cause

The Windows Management Instrumentation service has been stopped in the **Item** server.

> **NOTE:** This could happen due to a recent OS update in the affected server.

## Resolution

Start the Windows Management Instrumentation service on the affected **Item** server:

1. Search for **Services** in the search bar, or run `services.msc` in the Run command window.
2. Locate the **Windows Management Instrumentation** service, right-click it and click **Start**.

Data collection should resume once the **Windows Management Instrumentation** service starts − you can update the affected Windows Server monitoring plan to check if the error was solved.
