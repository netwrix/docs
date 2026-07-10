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

<!-- SME: original screenshots are broken; please confirm the added prose steps accurately describe the current 8.2 UI toggle location for baseline events. -->

## Overview

This example uses the Netwrix Change Tracker File Integrity Monitoring (FIM) tracker. All paths listed as a tracked folder within a configuration template are baselined.

Enabling the **Send baseline events** option on the FIM tracker (or any tracker that supports it) causes the agent to send an event to the hub when a baseline scan completes. The event lets you see the files and folders captured as part of the baseline and the state of each file or folder (that is, its attributes).

## Instructions

### Review the Files on the Server

<!-- Image removed: Windows Explorer view of the monitored folder containing the three example files -->

The example folder on the server contains the three files that the baseline scan captures.

### Enable Send Baseline Events on the Configuration Template

<!-- Image removed: FIM tracker in a configuration template showing the Tracked Folder with the Send baseline events option enabled -->

In the configuration template, open the FIM tracker and enable the **Send baseline events** option for the tracked folder.

### Review the Baseline Events Sent to the Hub

<!-- Image removed: Event list on the hub showing baseline events returned from the agent after the scan completed -->

After baselining completes, the agent sends baseline events to the hub. The events appear in the event list for the monitored device.

### Review the File Attributes Captured in the Baseline

<!-- Image removed: Event detail view showing captured attributes for a single file in the baseline -->

Opening a baseline event shows the attributes captured for that file, such as size, timestamps, and security details.

### Review Historical and Current Baselines After Changes

Whenever changes occur to the files or folders, the baseline is updated and additional baseline events are sent to the hub. These events show the original baseline as **Historical** and the updated baseline as **Current**.

<!-- Image removed: Event detail view comparing a Historical baseline against the Current baseline after a change -->
