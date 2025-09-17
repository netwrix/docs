---
description: >-
  Explains the cause and resolution for Windows event log audit error Event ID
  1016 when event log retention is set to "Do not overwrite events (clear log
  manually)".
keywords:
  - Event Log
  - Event ID 1016
  - Windows Server
  - audit
  - retention
  - Group Policy
  - Security Event Log
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Following Event Log Settings May Lead to Incorrect or Incomplete Data in Reports'
tags: []
title: >-
  Following Event Log Settings May Lead to Incorrect or Incomplete Data in
  Reports
knowledge_article_id: kA04u00000110q4CAA
---

# Following Event Log Settings May Lead to Incorrect or Incomplete Data in Reports

## Symptom and Cause

You've encountered the following Windows Server Audit Service error for the Application, Security, or System event log:

```text
Event ID: 1016
The following event log settings may lead to incorrect or incomplete data in reports:
The Application event log retention method.
```

This error is caused by incorrect event log retention settings, specifically by **Do not overwrite events (clear log manually)**.

## Resolution

It is required to have **Overwrite events as needed** option selected in order to allow for newer events to be audited. Check your Group Policy retention settings for the affected event log — refer to the following Netwrix Auditor article for additional information on adjusting event log retention settings: https://docs.netwrix.com/docs/auditor/10_8
