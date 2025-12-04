---
description: >-
  Explains Event ID 1203 that appears in the Health Log when a SharePoint
  monitoring plan fails to start due to missing or inaccessible configuration
  files. Provides steps to resolve the issue by recreating the monitoring plan
  and links to configuration guidance.
keywords:
  - Event ID 1203
  - Health Log
  - SharePoint
  - monitoring plan
  - Netwrix Auditor
  - service failed
  - configuration files
  - troubleshooting
products:
  - auditor
sidebar_label: Event ID 1203 in Health Log
tags: []
title: "Event ID 1203 in Health Log"
knowledge_article_id: kA00g000000H9d1CAC
---

# Event ID 1203 in Health Log

## Symptom

Your SharePoint monitoring plan prompts the following error message under Event ID 1203 in Health Log:

```text
The service %service_name% has failed.
```

## Cause

An internal error occurred during the Netwrix Auditor for SharePoint Service startup. There is no access to the configuration files, or some configuration files are missing.

## Resolution

1. Recreate your SharePoint monitoring plan.
2. Refer to the following article for additional information on configuration of SharePoint monitoring plans: Monitoring Plans − SharePoint · v10.6.

## Related articles

- Monitoring Plans − SharePoint · v10.6
