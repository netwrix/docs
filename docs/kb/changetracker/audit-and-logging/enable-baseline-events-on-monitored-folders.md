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

<img width="1168" height="777" alt="image" src="https://github.com/user-attachments/assets/df092b60-449c-4401-901e-ba0f29850374" />

## Reviewing Baseline Events

After baselining completes, the agent sends baseline events to the hub, which you can review to see what the baseline captured.

- **Event list:** The hub's event list shows baseline events for the monitored device once baselining completes.

  <img width="2559" height="1305" alt="image" src="https://github.com/user-attachments/assets/be191a83-dc91-46b9-8095-dd35b47aa507" />

- **File attributes:** Opening a baseline event shows the attributes captured for that file, such as size, timestamps, and security details.

  <img width="1173" height="780" alt="image" src="https://github.com/user-attachments/assets/05bf8b8c-3183-4836-b943-8fc1e7dbffd1" />

- **Historical and current baselines:** Whenever changes occur to the files or folders, the baseline updates and sends additional baseline events. These events show the original baseline as **Historical** and the updated baseline as **Current**.

  <img width="1170" height="604" alt="image" src="https://github.com/user-attachments/assets/823144bc-d09b-4c5b-a7c1-8cf482da5869" />

