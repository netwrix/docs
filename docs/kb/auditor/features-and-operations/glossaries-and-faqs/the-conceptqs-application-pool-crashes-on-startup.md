---
description: >-
  The conceptQS Application Pool may crash on startup due to a conflict with the
  Microsoft Monitoring Agent. Uninstalling the Microsoft Monitoring Agent and
  restarting the server typically resolves the issue.
keywords:
  - conceptQS
  - Application Pool
  - Microsoft Monitoring Agent
  - PerfMon64.dll
  - w3wp.exe
  - Event ID 1000
  - Application Error
products:
  - auditor
  - data-classification
sidebar_label: The conceptQS Application Pool crashes on startup
tags: []
title: "The conceptQS Application Pool crashes on startup"
knowledge_article_id: kA00g000000H9eCCAS
---

# The conceptQS Application Pool crashes on startup

The **conceptQS** **Application** **Pool** crashes on startup with multiple errors entered into the **Windows** → **Application** event logs.

The error message may look like the below:

```text
Log Name: Application
Source: Application Error
Date: XX.XX.XXXX XX:XX:XX
Event ID: 1000
Task Category: (100)
Level: Error
Keywords: Classic
User: N/A
Computer: &lt;COMPUTERNAME&gt;
Description:
Faulting application name: w3wp.exe, version: 8.0.9200.16384, time stamp: 0x50108835
Faulting module name: PerfMon64.dll, version: 8.0.10918.0, time stamp: 0x577fd168
Exception code: 0xc0000409
Fault offset: 0x0000000000149794
Faulting process id: 0x2c38
Faulting application start time: 0x01d24405d195eb6a
Faulting application path: c:windowssystem32inetsrvw3wp.exe
Faulting module path: C:Program FilesMicrosoft Monitoring AgentAgentAPMDOTNETAgentV8.0.10918.0PerfMon64.dll
```

This issue can occur when the **Microsoft Monitoring Agent** is installed on the server. In order to resolve this issue, follow the steps below:

1. Open the **Control Panel**
2. Open **Programs and Features**
3. Select the " **Microsoft Monitoring Agent** " and select " **Remove** "/" **Uninstall** "
4. **Restart** the server
5. Test accessing the **conceptQS** application
