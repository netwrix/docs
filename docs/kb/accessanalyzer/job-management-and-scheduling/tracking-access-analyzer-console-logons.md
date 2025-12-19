---
description: >-
  Explains where Netwrix Access Analyzer records console logon and logoff events
  and which Event IDs indicate console access.
keywords:
  - Netwrix Access Analyzer
  - console logon
  - console logoff
  - StealthAUDIT.evtx
  - Event ID 1000
  - Event ID 1003
  - event log
  - Windows Event Viewer
products:
  - access-analyzer
visibility: public
sidebar_label: Tracking Access Analyzer Console Logons
tags:
  - job-management-and-scheduling
title: "Tracking Access Analyzer Console Logons"
knowledge_article_id: kA0Qk0000001JAHKA2
---

# Tracking Access Analyzer Console Logons

## Question

Does Netwrix Access Analyzer track console logons and logoffs?

## Answer

You can find console logon and logoff events in the Netwrix Access Analyzer event log. The event log file is located at:

```text
%SystemRoot%\System32\Winevt\Logs\StealthAUDIT.evtx
```

Review `Event ID 1000` and `Event ID 1003` to learn more about accounts accessing the Netwrix Access Analyzer console.
