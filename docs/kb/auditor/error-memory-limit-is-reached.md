---
description: >-
  Netwrix Auditor logs Event ID 6316 when the memory limit for the Logs
  Collection Service has been reached for a network device monitoring plan. This
  article describes the symptom, cause, and steps to resolve the issue.
keywords:
  - memory limit
  - Event ID 6316
  - Logs Collection Service
  - Health Log
  - Netwrix Auditor
  - resource pool
  - hardware requirements
  - antivirus exclusions
products:
  - auditor
sidebar_label: 'Error: Memory Limit Is Reached'
tags: []
title: 'Error: Memory Limit Is Reached'
knowledge_article_id: kA0Qk0000001HejKAE
---

# Error: Memory Limit Is Reached

## Symptom

Netwrix Auditor prompts the following error in the **Health Log** for your network device's monitoring plan:

```text
Source:Network Devices Audit Service
Event ID:6316
Computer: %affected_server%
Description:Monitoring plan: %monitoring_plan_name%.
Memory limit for Netwrix Auditor Logs Collection Service is reached.
```

## Cause

The default memory limit has been reached for the process.

## Resolution

Increase the resource pool on your Netwrix Auditor server. Refer to the following article for additional information on hardware requirements for different deployment scenarios: https://docs.netwrix.com/docs/auditor/10_8 — Hardware Requirements · v10.7).

> **IMPORTANT:** Verify that the antivirus exclusions are in place on your Netwrix Auditor server. Review the following article for recommendations on antivirus exclusions in the Auditor environment: /docs/kb/auditor/antivirus-exclusions-for-netwrix-auditor (Antivirus Exclusions for Netwrix Auditor).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 — Hardware Requirements · v10.7)
- /docs/kb/auditor/antivirus-exclusions-for-netwrix-auditor (Antivirus Exclusions for Netwrix Auditor)
