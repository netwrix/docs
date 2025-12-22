---
description: >-
  Describes causes and resolutions for Event ID 1274 in the Health Log when
  Netwrix Auditor cannot detect the forest hosting a monitored SharePoint farm,
  including related events and troubleshooting steps.
keywords:
  - Event ID 1274
  - Health Log
  - SharePoint
  - Netwrix Auditor
  - global catalog
  - AD group membership
  - Event ID 1204
  - Event ID 1205
products:
  - auditor
sidebar_label: Event ID 1274 in Health Log
tags: []
title: "Event ID 1274 in Health Log"
knowledge_article_id: kA00g000000H9cqCAC
---

# Event ID 1274 in Health Log

## Symptom

The following error message under Event ID 1274 is prompted in Health Log for your SharePoint monitoring plan:

```text
The following error occurred when trying to launch the component responsible for collecting AD group membership,
because the product is unable to detect the forest where the audited SharePoint farm is located.
```

## Causes

- Cause #1 − Netwrix Auditor was unable to detect the forest where your SharePoint farm is hosted. There is no network connection to your SharePoint farm.
- Cause #2 − Event ID 1274 could be prompted along with other errors:
  - EventID 1204 − `Unable to establish connection to the remote WebService`
  - EventID 1205 − `The following unexpected error has occurred: %error%`
- Cause #3 − The global catalog domain controller of the SharePoint farm domain was unreachable during the scheduled data collection process.

## Resolution

- Cause #1 − Verify the **SharePoint Central Administration** site is reachable by opening the URL in a browser.
- Cause #2 − Refer to the following articles for additional information:
  - [Event ID 1204 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1204-in-health-log)
  - [Event ID 1205 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1205-in-health-log)
- Cause #3 − Verify the global catalog domain controller is reachable.

## Related articles

- [Event ID 1204 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1204-in-health-log)
- [Event ID 1205 in Health Log](/docs/kb/auditor/event-id-reference/health-log-events/event-id-1205-in-health-log)
