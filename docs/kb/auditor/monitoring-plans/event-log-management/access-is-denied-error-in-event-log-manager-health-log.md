---
description: >-
  Explains why the 'Access is denied' error appears in the Netwrix Auditor Event
  Log Manager health log and how to resolve it by ensuring the data collection
  account has correct permissions and password.
keywords:
  - Event Log Manager
  - Access is denied
  - Event Log Compression Service
  - data collection account
  - permissions
  - service account password
  - Netwrix Auditor
  - health log
products:
  - auditor
sidebar_label: Access Is Denied Error in Event Log Manager Health
tags: []
title: "Access Is Denied Error in Event Log Manager Health Log"
knowledge_article_id: kA04u000001118mCAA
---

# Access Is Denied Error in Event Log Manager Health Log

## Symptom

The following error is prompted in Netwrix Auditor Health Log for your Event Log Manager monitoring plan:

```text
Event ID:2002
Computer: %computer_name%
User:N/A
Description:Monitoring plan: %Event_Log_Manager_monitoring_plan_name%
The following error has occurred while processing '%computer_name%':   
Unable to open the Event Log Compression Service.
Error details: Access is denied.
```

## Causes

- The data collection account used does not have sufficient permissions to collect data.
- The data collection account password is incorrect.

## Resolution

- Configure the permissions for the data collection account used in the Event Log Manager. For additional information, refer to the following article: Windows Server — Permissions for Windows Server Auditing.
- Configure the password for your data collection account in Event Log Manager. Refer to the following article for additional information: [Failed Logon Attempts after Recent Service Account Password Change](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/failed-logon-attempts-after-recent-service-account-password-change).

## Related articles

- Windows Server — Permissions for Windows Server Auditing — 10.6
- [Failed Logon Attempts after Recent Service Account Password Change](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/failed-logon-attempts-after-recent-service-account-password-change)
