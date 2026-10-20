---
description: >-
  Configuring File Approved Safe Technology (FAST) in Netwrix Change Tracker
  by creating a Planned Change rule set with a FAST Match rule.
keywords:
  - FAST
  - File Approved Safe Technology
  - Planned Change
  - FAST Match
  - file monitoring
  - Planned Change Wizard
  - FAST Match rule
  - FAST cloud
  - file approved safe
  - planned change rule set
  - FAST configuration
products:
  - change-tracker
sidebar_label: Configuring FAST
tags:
  - kb
  - configuration-and-setup
title: Configuring FAST in Netwrix Change Tracker
knowledge_article_id: ""
---

# Configuring FAST in Netwrix Change Tracker

## Overview

File Approved Safe Technology (FAST) automatically reconciles known-good file changes against a cloud-based allowlist. This article describes how to configure FAST in Netwrix Change Tracker.

## Instructions

1. Log in to the Change Tracker web console with an admin account.
2. Click the Settings tab and select from the dropdown, the **Planned Change Schedules** option.
3. At the top right of the screen, click **Actions** > **Planned Change Wizard**.
4. In the new window that appears, select **Next** > **Create a new Planned Change Rule set** > **Next**.
5. Click **Add Planned Change Rule**. In the new window, select **FAST Match** in the **Enter rule details or apply standard rule settings** dropdown list and then select **Apply**.
6. Click **Save** and then click **Next**.
7. In the new window, click into the **Groups** field and select **All Devices**. Then check both **No Start, Continuous** and **No End, Continuous** checkboxes and then click **Next**.
8. In the new window, provide a **Name** e.g. FAST Cloud and a **Description** e.g. Events captured by this planned change are approved automatically based on their File Hash being present in the FAST Cloud repository.
9. Click **Next**.
10. Click **Next**.
11. Click **Finish**.
12. The setup is now **complete**.
