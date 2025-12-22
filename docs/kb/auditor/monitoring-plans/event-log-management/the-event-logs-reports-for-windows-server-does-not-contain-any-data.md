---
description: >-
  If you configured a Windows Servers monitoring plan in Netwrix Auditor but the
  Windows Server → Event Log reports show no data, configure a monitoring plan
  for Netwrix Auditor Event Log Manager and set Audit Archiving filters. This
  article explains the steps to configure Event Log Manager, test changes, and
  run reports.
keywords:
  - event logs
  - Windows Server
  - Netwrix Auditor
  - Event Log Manager
  - Audit Archiving Filters
  - monitoring plan
  - reports
  - troubleshooting
products:
  - auditor
sidebar_label: The Event Logs reports for Windows Server does not
tags: []
title: "The Event Logs reports for Windows Server does not contain any data"
knowledge_article_id: kA04u00000110yXCAQ
---

# The Event Logs reports for Windows Server does not contain any data

## Symptom

You have configured a **Windows Servers** monitoring plan in Netwrix Auditor, the data is being collected, however, the reports under **Windows Server** -> **Event Log** do not show any data.

## Cause

To review your data in these reports, you should configure a monitoring plan for Netwrix Auditor Event Log Manager.

## Resolution

1. On the computer that hosts Netwrix Auditor Server, run Netwrix Auditor Event Log Manager.
2. Navigate to Audit Archiving filters and configure them as described in Configure Audit Archiving Filters for Event Log.  
   ![User-added image]./../0-images/ka04u0000011776_0EM4u000008Ls7s.png)
3. Perform any test changes, for example, log in to a server for which you want to review data in reports.
4. Wait for 10 - 15 minutes for changes to take effect and run reports.

