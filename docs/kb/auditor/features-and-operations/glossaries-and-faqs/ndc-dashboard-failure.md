---
description: >-
  Troubleshoot when the NDC Dashboard fails to load due to IIS faults caused by
  the System Center Operations Manager (SCOM) 2016 agent. This article shows the
  relevant error messages and the recommended remediation steps.
keywords:
  - NDC
  - dashboard failure
  - SCOM 2016
  - PerfMon64.dll
  - w3wp.exe
  - conceptsearching
  - conceptclassifier
  - Operations Manager
  - IIS fault
products:
  - auditor
  - data-classification
visibility: public
sidebar_label: NDC Dashboard Failure
tags: []
title: "NDC Dashboard Failure"
knowledge_article_id: kA00g000000PbcnCAC
---

# NDC Dashboard Failure

## Scenario

**NDC Dashboard fails to load and the conceptsearching eventlog shows this error:**

```
Component: conceptClassifier
 Caller: Run
 Level: Error
 conceptEngine2.ServiceModel.PingQs
 Failed to contact QS: http://localhost:80/conceptQS/conceptQS.asmx, error: System.Net.WebException: The underlying connection was closed: An unexpected error occurred on a receive. ---> System.IO.IOException: Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host. --->
```

**In addition to this error, in the _conceptsearching_ log, you will see the below error in the Windows Application Event Log:**

```
Faulting application name: w3wp.exe, version: 10.0.17763.1, time stamp: 0xcfdb13d8
 Faulting module name: PerfMon64.dll, version: 8.0.13053.0, time stamp: 0x5a26da79
 Exception code: 0xc0000409
 Fault offset: 0x000000000013f68f
 Faulting process id: 0x2940
 Faulting application start time: 0x01d53c07a74a0b75
 Faulting application path: c:windowssystem32inetsrvw3wp.exe
 Faulting module path: C:Program FilesMicrosoft Monitoring AgentAgentAPMDOTNETAgentV8.0.13053.0PerfMon64.dll
 Report Id: 84973451-9fbf-4b31-9dd8-ca486181ffd2
 Faulting package full name:
 Faulting package-relative application ID:
```

The faulting module path listed in the error points out that the cause of the IIS fault is the 2016 SCOM agent.

## Solution

1. Uninstall the 2016 SCOM agent from the IIS server.
2. Stop the following services:
   - `conceptclassifier`
   - `conceptcollector`
   - `conceptindexer`
3. Restart the server.

The dashboard will load and the issue is resolved.

If uninstalling the SCOM 2016 agent is not an option, follow either Method 1 or Method 2 in the article linked below, depending on your SCOM needs:

- https://support.microsoft.com/en-us/help/4457771/resolve-issues-by-removing-apm-components-in-operations-manager-2016
