---
description: >-
  Explains Event ID 1079 in the Health Log when a SharePoint monitoring plan
  generates an incomplete Change Summary due to a data collection timeout, and
  provides steps to generate a new Activity Summary.
keywords:
  - Event ID 1079
  - Health Log
  - Change Summary
  - Activity Summary
  - SharePoint monitoring plan
  - Netwrix Auditor
  - data collection timeout
  - monitoring plan
products:
  - auditor
sidebar_label: Event ID 1079 in Health Log
tags: []
title: "Event ID 1079 in Health Log"
knowledge_article_id: kA00g000000H9XdCAK
---

# Event ID 1079 in Health Log

## Symptom

Your SharePoint monitoring plan prompts the following error message under Event ID 1079 in Health Log:

```text
The Change Summary may include incomplete data as the data collection was still in progress when the report was sent.
No data loss has occurred, the missing events will be listed in the next Change Summary and added to the database.
```

## Cause

The data collection exceeded the predefined timeout period for its completion (1 hour by default). The Activity Summary was generated while the data collection was still in progress.

## Resolution

No data loss has occurred. The next Activity Summary should contain the missing events. Generate a new Activity Summary:

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
2. In the left pane, select your SharePoint monitoring plan and click **Edit**.
3. In the right pane, click **Update**.
