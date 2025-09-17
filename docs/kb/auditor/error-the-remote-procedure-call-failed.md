---
description: >-
  When a monitoring plan health log shows Event ID 5004 with "The remote
  procedure call failed", follow these troubleshooting steps to determine
  whether ports, antivirus/EDR, or resource issues on the target system are
  causing the failure.
keywords:
  - remote procedure call failed
  - Event ID 5004
  - Health Log
  - monitoring plan
  - Netwrix Auditor
  - ports
  - antivirus exclusions
  - Logon Activity
products:
  - auditor
sidebar_label: 'Error: The Remote Procedure Call Failed'
tags: []
title: 'Error: The Remote Procedure Call Failed'
knowledge_article_id: kA04u000000wnofCAA
---

# Error: The Remote Procedure Call Failed

## Symptom

You see the following error in Health Log for a monitoring plan:

```
Event ID:5004
Data collection has failed. Error: The remote procedure call failed.
```

## Cause

The "Remote procedure call failed" error can have a number of root causes such as a closed port, Antivirus or EDR software, resource availability on the target system, etc.

## Resolution

Depending on the error cause, follow the resolution steps below:

1. Make sure you have all required ports opened. For additional information on configuring ports for Netwrix Auditor, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 — Protocols and Ports Required — v10.6).
2. Review your Antivirus exclusions. For additional information on required exclusions for your antivirus, refer to the following article: /docs/kb/auditor/antivirus-exclusions-for-netwrix-auditor (Antivirus Exclusions for Netwrix Auditor).
3. If the issue occurs during Logon Activity data collection, try to follow the steps in these articles:
   - /docs/kb/auditor/system-cannot-find-the-path-specified-in-logon-activity-monitoring-plan (System Cannot Find the Path Specified in Logon Activity Monitoring Plan)
   - /docs/kb/auditor/error-size-of-collected-data-files-exceeded-limit-in-logon-activity-monitoring-plan (Size of Collected Data Files Exceeded Limit in Logon Activity Monitoring Plan)
