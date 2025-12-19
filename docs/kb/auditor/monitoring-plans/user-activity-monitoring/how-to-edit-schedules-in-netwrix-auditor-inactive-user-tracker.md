---
description: >-
  Use this article to change the scheduled task that runs Inactive User Tracker
  data collection in Netwrix Auditor. It explains how to locate and edit the
  Task Scheduler entry.
keywords:
  - Netwrix Auditor
  - Inactive User Tracker
  - schedule
  - Task Scheduler
  - Event Log Manager
  - triggers
  - task properties
products:
  - auditor
sidebar_label: 'How to Edit Schedules in Netwrix Auditor Inactive '
tags: []
title: "How to Edit Schedules in Netwrix Auditor Inactive User Tracker"
knowledge_article_id: kA0Qk0000000XwrKAE
---

# How to Edit Schedules in Netwrix Auditor Inactive User Tracker

## Overview

Netwrix Auditor Inactive User Tracker implements a schedule for actions and reporting. Depending on your business needs, the schedules can be altered to fit your environment. This article describes how to edit schedules in Inactive User Tracker.

## Instructions

Follow these steps to edit the schedule:

1. Open **Task Scheduler** on your Netwrix Auditor server.
2. Select **Task Scheduler Library** and locate the Event Log Manager task − the correct task is named `Netwrix Auditor − {%GUID%} − {%GUID%}` and should contain the line `Starts Netwrix Auditor data collection on Inactive Users for %monitoring_plan_name%` in the **Description** field of the scheduled task.
3. Right-click the task and click **Properties**.
4. In the **Triggers** tab, select the **Daily** trigger and click **Edit**.
5. Define the new schedule and click **OK** > **OK** to save changes.
