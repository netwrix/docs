---
title: Why Am I Receiving FileAccessed Events in Change Tracker?
description: >-
  Explains why you are receiving File Access ("fileaccessed") events in Netwrix
  Change Tracker, what they indicate, and how to enable or disable them via
  configuration templates.
sidebar_label: FileAccessed Events
keywords:
  - fileaccessed
  - file access
  - Netwrix Change Tracker
  - configuration template
  - tracked attributes
  - baseline
  - device templates
  - file monitoring
  - read operation
  - file attributes
products:
  - change-tracker
tags:
  - kb
  - configuration-and-setup
knowledge_article_id:
---

# Why Am I Receiving FileAccessed Events in Change Tracker?

## Overview

This article describes why you are receiving File Access events in Netwrix Change Tracker, what they are, and how to disable or enable them.

The "fileaccessed" event is a "read" operation for the file shown in the details. This does not mean someone changed the file — it simply means the file was accessed (or read), whether by a person or software. Think of it as someone opening a Word document. If you were tracking that, you would see the same notification for the Word document simply being opened.

<!-- Image removed: Screenshot showing a fileaccessed event in Netwrix Change Tracker -->

## How to Enable or Disable FileAccessed Events

The steps below show you how to enable or disable these event types in Netwrix Change Tracker.

### Disabling File Access Events

To disable file access events, follow the steps below:

1. This setting is configured from a device **Configuration Template** which is appended to a group. Devices within that group then receive the template.
2. Go to the **Settings Tile** > Click on the **Configuration Templates** Navigation button to the left.
3. Find the Configuration Template that you want to use for these event types, or create a new one by pressing the **Create a Template** button.
4. Click the **Edit** button on the template you want to modify.
5. For the desired path, locate the **Tracked Attributes** column. Click the **Edit** button and change this to `File attributes (excluding contents) only`.
6. Click **Save Changes** at the top of the page.
7. If this is a new template, apply it to the group of devices by going to **Settings** > **Groups** > Select the group > **Device Templates** > **Add a template**.

> **NOTE:** When you update a configuration template, the agent does a re-baseline of the files within the defined parameters. Changes to the files are not visible until after the baseline is completed. A baseline typically takes about 15-20 minutes to complete on a Windows device. If you are going to test a change on this folder, and you update it as per the instructions above, please test it about 30 minutes after you have saved the change to the template so that the agent has adequate time to complete its baseline process.

### Enabling File Access Events

To enable file access events, follow the steps below:

1. This setting is configured from a device **Configuration Template** which is appended to a group. Devices within that group then receive the template.
2. Go to the **Settings Tile** > Click on the **Configuration Templates** Navigation button to the left.
3. Find the Configuration Template that you want to use for these event types, or create a new one by pressing the **Create a Template** button.
4. Click the **Edit** button on the template you want to modify.
5. For the desired path, locate the **Tracked Attributes** column. Click the **Edit** button and change this to `All file and folder attributes excluding contents`.
6. Click **Save Changes** at the top of the page.
7. If this is a new template, apply it to the group of devices by going to **Settings** > **Groups** > Select the group > **Device Templates** > **Add a template**.

> **NOTE:** When you update a configuration template, the agent does a re-baseline of the files within the defined parameters. Changes to the files are not visible until after the baseline is completed. A baseline typically takes about 15-20 minutes to complete on a Windows device. If you are going to test a change on this folder, and you update it as per the instructions above, please test it about 30 minutes after you have saved the change to the template so that the agent has adequate time to complete its baseline process.

<!-- Image removed: Screenshot showing the Tracked Attributes column in a Configuration Template -->
