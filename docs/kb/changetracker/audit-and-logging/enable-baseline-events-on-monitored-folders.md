---
description: >-
  Shows how to enable baseline events on monitored folders in Netwrix Change
  Tracker and explains what baseline events are and how they appear on the hub.
keywords:
  - baseline events
  - file integrity monitoring
  - FIM
  - monitored folders
  - Netwrix Change Tracker
  - hub
  - agent
  - configuration template
products:
  - changetracker
knowledge_article_id: ka04u000000Hd8yAAC
sidebar_label: Enabling Baseline Events on Monitored Folders
tags: [kb, audit-and-logging]
title: Enabling Baseline Events on Monitored Folders
---

# Enabling Baseline Events on Monitored Folders

## Overview

This example uses the Netwrix Change Tracker File Integrity Monitoring (FIM) tracker. All paths listed as a tracked folder within a configuration template are baselined.

Enabling the **Send baseline events** option on the FIM tracker (or any tracker that supports it) causes the agent to send an event to the hub when a baseline scan completes. The event lets you see the files and folders captured as part of the baseline and the state of each file or folder (that is, its attributes).

## Instructions

### Enable Send Baseline Events

1. In the configuration template, open the FIM tracker.
2. Enable the **Send baseline events** option for the tracked folder.

![Send baseline events option enabled for a tracked folder](../0-images/enable-send-baseline-events-option.png)

## Reviewing Baseline Events

After baselining completes, the agent sends baseline events to the hub, which you can review to see what the baseline captured.

- **Event list:** The hub's event list shows baseline events for the monitored device once baselining completes.

  ![Hub event list showing baseline events for a monitored device](../0-images/hub-event-list-baseline-events.png)

- **File attributes:** Opening a baseline event shows the attributes captured for that file, such as size, timestamps, and security details.

  ![File attributes captured in a baseline event](../0-images/baseline-event-file-attributes.png)

- **Historical and current baselines:** Whenever changes occur to the files or folders, the baseline updates and sends additional baseline events. These events show the original baseline as **Historical** and the updated baseline as **Current**.

  ![Historical and current baseline events shown for updated files](../0-images/historical-and-current-baseline-events.png)

