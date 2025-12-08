---
description: >-
  You see Event ID 1225 in the Health Log when Netwrix Auditor cannot make a
  configuration snapshot of the audited SharePoint farm. This article lists
  possible causes and links to related Health Log event articles to help you
  troubleshoot.
keywords:
  - Event ID 1225
  - Health Log
  - SharePoint
  - configuration snapshot
  - Netwrix Auditor
  - Event ID 1204
  - Event ID 1203
products:
  - auditor
sidebar_label: Event ID 1225 in Health Log
tags: []
title: "Event ID 1225 in Health Log"
knowledge_article_id: kA00g000000H9dHCAS
---

# Event ID 1225 in Health Log

## Symptom

You see the following error message under Event ID 1225 in the Health Log for your SharePoint monitoring plan:

```Registry
Unable to make the configuration snapshot of the audited SharePoint farm
```

## Causes

Netwrix Auditor is unable to collect farm configuration changes due to network connection problems, web service issues, or configuration issues at the time of the scheduled or manual Activity Summary generation. Refer to the following list of possible errors prompted in the Health Log for the affected monitoring plan:

- Event ID 1204 − **Unable to establish connection to the remote WebService.**
- Event ID 1203 − **The following unexpected error has occurred: %error%**

## Resolutions

Refer to the corresponding article for additional information on resolution:

- [Event ID 1204 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1204-in-health-log)
- [Event ID 1205 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1205-in-health-log)

## Related articles

- [Event ID 1204 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1204-in-health-log)
- [Event ID 1205 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1205-in-health-log)
