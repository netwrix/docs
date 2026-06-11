---
description: >-
  Configuring Netwrix Change Tracker to retrieve baseline events (file lists
  and hashes) after an agent or server restarts.
keywords:
  - baseline events
  - agent restart
  - FIM
  - Send baseline events
  - tracking templates
  - file integrity
  - baseline scan
  - agent poll
  - FIM baseline
  - Editing Tracking Templates
products:
  - change-tracker
sidebar_label: Retrieving Baseline Events After Restart
tags:
  - kb
  - configuration-and-setup
title: Retrieving Baseline Events After the Agent Restarts
knowledge_article_id: ""
---

# Retrieving Baseline Events After the Agent Restarts

## Overview

Typically, the agent performs a baseline scan of the file system after the agent or server restarts. However, to retrieve baseline events in the Netwrix Change Tracker dashboard, you must enable specific settings first.

## Instructions

1. Select the template running against the device and click **Edit**.
2. In the **Editing Tracking Templates** dialog, go to the **FIM File Integrity** tab and enable the **Send baseline events** checkbox.

   > **IMPORTANT:** Enable this option for each tracker type depending on which baselines you want to retrieve.

3. Navigate to **Settings** > **Agents & Devices**.
4. Select the device and click **Edit**.

Once you enable these options, the agent or server sends baseline events on the next poll.
