---
description: >-
  If Netwrix Data Classification reports show "No Data Found" with a
  DataMatchingWorker SQL timeout error, increase the SQLCommandTimeout in
  `DDCCoreSettings.xml` and restart the Netwrix Auditor DDC Provider service to
  allow the matching process to complete.
keywords:
  - Data Matcher Timeout
  - DataMatchingWorker
  - SQLCommandTimeout
  - DDC Provider
  - Data Discovery and Classification
  - Netwrix Data Classification
  - Execution Timeout
  - Netwrix Auditor logs
products:
  - auditor
sidebar_label: Data Matcher Timeout
tags: []
title: "Data Matcher Timeout"
knowledge_article_id: kA04u000000XmIXCA0
---

# Data Matcher Timeout

## Scenario

Netwrix Data Classification reports are showing No Data Found

The following error may be present in your instance:

```
DataMatchingWorker: Data matching has been terminated by the following error: System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out
```

This error will be found in the **DDC Provider log**, by default located here: (`C:\ProgramData\Netwrix Auditor\Logs\Data Discovery and Classification\Tracing\Netwrix.DDC.Service_FileServers.log`).  

## Solution

To resolve the issue:

1. Open `DDCCoreSettings.xml` with a text editor (`C:\ProgramData\Netwrix Auditor\Data Discovery and Classification\DDCCoreSettings.xml`).
2. Increase the `SQLCommandTimeout` from `1200` to `12000`.
3. Save the file.
4. Restart the Netwrix Auditor DDC Provider service.
5. Wait up to 24 hours for the matching process to run.
6. Check Netwrix Data Classification reports.
