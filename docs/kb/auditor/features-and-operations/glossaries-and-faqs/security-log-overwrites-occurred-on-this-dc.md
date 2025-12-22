---
description: >-
  Explains the cause and resolution for the "Security log overwrites occurred on
  this DC" message reported in daily Activity Summary emails or Netwrix Auditor
  Health Log.
keywords:
  - security log
  - event log
  - domain controller
  - Netwrix Auditor
  - log overwrite
  - event log size
  - retention settings
  - troubleshooting
  - Activity Summary
products:
  - auditor
sidebar_label: Security Log Overwrites Occurred on This DC
tags: []
title: "Security Log Overwrites Occurred on This DC"
knowledge_article_id: kA00g000000H9YJCA0
---

# Security Log Overwrites Occurred on This DC

## Symptom

The following error is prompted either in daily Activity Summary emails or Netwrix Auditor Health Log:

```
Security log overwrites occurred on this DC since the last data collection.
Please increase the maximum size of the Security event log
```

## Causes

- Misconfigured Security event log size.
- Insufficient DC resources affecting the operation.

## Resolution

- To configure the Security event log size and retention settings, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 File Servers − Configure Event Log Size and Retention Settings ⸱ v10.6).
- For additional information on sample deployment scenarios and corresponding hardware requirements, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 − Sample Deployment Scenarios ⸱ v10.6).

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 File Servers − Configure Event Log Size and Retention Settings ⸱ v10.6)

- https://docs.netwrix.com/docs/auditor/10_8 − Sample Deployment Scenarios ⸱ v10.6)
