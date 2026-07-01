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
sidebar_label: Resubmitting Unplanned Changes
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

1. Log in to the Change Tracker web console with an admin account.
2. Click the Settings tab and select from the dropdown, the **Planned Change Schedules** option.
3. At the top right of the screen, click **Actions** > **Planned Change Wizard**.
4. In the new window that appears, select **Next** > **Create a new Planned Change Rule set** > **Next**.
5. Click **Add Planned Change Rule**. In the new window, create a rule(s) to match the events you wish to capture as planned. You can match all events using `Any` for all options, or specify a path for the events.
6. Click **Save** and then click **Next**.
7. In the new window, click into the **Groups** field and select the groups of devices in which generated the events. Then configure the **Start and End Date/Time** range during which the events occurred and then click **Next**.
8. In the new window, provide a **Name** and a **Description**.
9. Click **Next**.
10. Click **Next**.
11. Click **Finish**.
12. After the planned change is created, navigate to the **Events** tab and filter the events to see the events you would like to resubmit.
13. On the **Events** page, select the **All Events** option and click **Actions** > **Resubmit selected events**.

Change Tracker verifies the resubmitted events against the planned change rule(s).
