---
description: >-
  Exporting more than 50,000 events from Netwrix Change Tracker using the
  Settings Export and Import feature when the Events page export button is
  disabled.
keywords:
  - export events
  - CSV
  - 50k limit
  - PowerShell
  - DeviceEvent
  - bulk export
  - Export and Import
  - events.csv
  - export greyed out
  - export disabled
  - 50000 events limit
products:
  - change-tracker
sidebar_label: Exporting More Than 50k Events
tags:
  - kb
  - configuration-and-setup
title: Exporting More Than 50k Events
knowledge_article_id: ""
---

# Exporting More Than 50k Events

## Overview

When the Events page contains more than 50,000 events, Change Tracker disables the export button. Use the **Export and Import** feature in Settings to export large event sets.

## Instructions

1. Navigate to **Settings** > **Export and Import**.
2. For **Export Type**, select **Events Only**.
3. For **Export Format**, select **Text (CSV)**.
4. Select the **Start** and **End** dates for the export range.
5. Click **Perform Export**.
6. Scroll down, download the export, and unzip the CSV file.

### Filtering the Exported CSV

In some cases, you may need to filter the exported CSV to isolate specific event types. Open a PowerShell prompt with admin privileges, navigate to the folder containing the CSV, and run:

```powershell
Get-Content .\events.csv | Select-String 'DeviceEvent' | Set-Content DeviceEventsOnly.csv
```

This command filters the CSV to include only `DeviceEvent` rows and saves them to a new file.
