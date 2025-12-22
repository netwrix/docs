---
description: >-
  This article explains the "Host is offline" error during a job run in Netwrix
  Access Analyzer and how to resolve it by disabling the Skip Hosts that do not
  respond to PING option.
keywords:
  - host offline
  - ping
  - job error
  - Netwrix Access Analyzer
  - Skip Hosts
  - job properties
  - performance tab
  - troubleshooting
products:
  - access-analyzer
sidebar_label: Host Is Offline Error
tags:
  - troubleshooting-and-errors
title: "Host Is Offline Error"
knowledge_article_id: kA0Qk0000000L2rKAE
---

# Host Is Offline Error

## Symptom

- The following error is prompted upon a job run in Netwrix Access Analyzer:

```
Host is offline
```

- The remote server is up and functional.

## Cause

The **Skip Hosts that do not respond to PING** option is enabled in the affected job. This might directly affect the job in case the target host has been configured to not respond to ping requests.

## Resolution

Disable the **Skip Hosts that do not respond to PING** option in the affected job. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 (Job Properties − Performance Tab · v11.6).

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 (Job Properties − Performance Tab · v11.6)
