---
description: >-
  Explains the Event ID 6141 health log error indicating the end of the event
  log could not be located and provides causes and step-by-step resolutions for
  File Servers monitoring plans.
keywords:
  - event log
  - Event ID 6141
  - file server
  - monitoring plan
  - event log retention
  - Netwrix Auditor
  - health log
  - AutoBackupLogFiles
  - Retention
products:
  - auditor
  - File_Server
visibility: public
sidebar_label: Could Not Locate End of Event Log Error
tags: []
title: "Could Not Locate End of Event Log Error"
knowledge_article_id: kA04u00000110xACAQ
---

# Could Not Locate End of Event Log Error

## Symptom

The following error is indicated in your Health Log for a File Servers monitoring plan:

```text
Event ID: 6141 
Description: Monitoring plan: %monitoring_plan_name%.
Item: %item_name%.

Could not locate the end of the event log for '%item_name%'. The event log might have been overwritten. 
```

## Causes

1. The maximum log size of the target event log is configured incorrectly.
2. Insufficient hardware resources of your Netwrix Auditor server affect the data collection process.
3. Network traffic compression option is disabled.
4. Event log settings are not propagated in the corresponding registry key − the settings are reverted after each edit.

## Resolutions

### Cause #1 − Incorrectly configured maximum log size

Review retention settings for the target logs − refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Server − Adjusting Event Log Size and Retention Settings · v10.6).

### Cause #2 −Insufficient hardware resources

Review the hardware resources of your Netwrix Auditor server − refer to the following article for for additional information on sample deployment scenarios depending on the enivornment size: https://docs.netwrix.com/docs/auditor/10_8 − Sample Deployment Scenarios · v10.6).

### Cause #3 − Network traffic compression option is disabled

Enable the network traffic compression option − refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 (Netwrix Auditor Operations and Health − Network Traffic Compression · v10.6).

### Cause #4 − Settings are reverted

Specify the maximum log size and action settings for the affected event log:

1. In the target server, open Registry Editor and navigate to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\`.
2. Select the subkey for the affected event log.
3. Review the **AutoBackupLogFiles** and **Retention** values of the subkey − modify both values to state `0`. Right-click a value, select **Modify**, edit the **Value data** field to state `0`, and click **OK** to save changes. Repeat these actions for the second value.

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 Server − Adjusting Event Log Size and Retention Settings · v10.6)
- https://docs.netwrix.com/docs/auditor/10_8 − Sample Deployment Scenarios · v10.6)
- https://docs.netwrix.com/docs/auditor/10_8 (Netwrix Auditor Operations and Health − Network Traffic Compression · v10.6)
