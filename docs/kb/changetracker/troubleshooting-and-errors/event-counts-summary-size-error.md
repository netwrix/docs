---
description: >-
  Resolving the "Error, the requested event counts summary size cannot be
  smaller than the system event count window size" message in Netwrix Change
  Tracker by correcting the EventStatsUnitSeconds configuration value.
keywords:
  - event counts
  - EventStatsUnitSeconds
  - system event count window
  - dashboard error
  - configuration settings
  - "86400"
  - device tab
  - Show Advanced Options
  - Add Config Item
  - event count window size error
products:
  - change-tracker
sidebar_label: Event Counts Summary Size Error
tags:
  - kb
  - troubleshooting-and-errors
title: "Event Counts Summary Size Error"
knowledge_article_id: ""
---

# Event Counts Summary Size Error

## Symptom

When browsing to the Netwrix Change Tracker **Dashboard** tab or the **Device** tab, a red error message appears:

```text
Error, the requested event counts summary size cannot be smaller than the system event count window size
```

## Cause

The `EventStatsUnitSeconds` configuration item is not set to a factor of `86400`. The default value is `1800`. If the current value is not a whole number multiple of `86400`, this error appears.

## Resolution

1. Log in to Netwrix Change Tracker.
2. Navigate to **Settings** > **System Settings**.
3. Scroll to the bottom of the page and click **Show Advanced Options**.
4. Under **Configuration Settings**, look for the description `EventStatsUnitSeconds`.
5. If the config item does not exist, click **Add Config Item** to create it.
6. If the value is not set or is not `1800`, click the **Edit** button next to `EventStatsUnitSeconds` and change the value to `1800`.
7. Click **Update**.
8. Log out and log back in to Netwrix Change Tracker.
