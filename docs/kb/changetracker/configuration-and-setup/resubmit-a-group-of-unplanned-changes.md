---
description: >-
  Using the Planned Change Wizard to create a planned change schedule and
  resubmit unplanned events in bulk in Netwrix Change Tracker.
keywords:
  - resubmit events
  - planned change
  - bulk resubmit
  - Planned Change Wizard
  - unplanned changes
  - resubmit unplanned changes
  - Events tab
  - All Events
  - Actions menu
  - planned change rule set
  - event resubmission
products:
  - change-tracker
sidebar_label: Resubmitting Unplanned Changes in Bulk
tags:
  - kb
  - configuration-and-setup
title: Resubmitting a Group of Unplanned Changes
knowledge_article_id: ""
---

# Resubmitting a Group of Unplanned Changes

## Overview

This article describes how to resubmit unplanned changes in bulk in Netwrix Change Tracker by creating a planned change schedule and resubmitting the events.

## Instructions

1. Navigate to the **Planned Changes** tab and click **Actions** > **Planned Change Wizard**.
2. Click **Next** and proceed with the **Create a new Planned Change Rule Set** option.
3. Create a rule to match the events. You can match all events using `Any` for all options, or specify a path for the events.
4. Once the rules are created, click **Next** and proceed with customizing the planned change.
5. Select the **Group of Devices** and the **Date/Time** range during which the events occurred.
6. Continue through the wizard and customize the name and description.
7. After the planned change is created, navigate to the **Events** tab and filter the events.
8. On the **Events** page, select the **All Events** option and click **Actions** > **Resubmit selected events**.

Change Tracker verifies the resubmitted events against the planned change rules.
