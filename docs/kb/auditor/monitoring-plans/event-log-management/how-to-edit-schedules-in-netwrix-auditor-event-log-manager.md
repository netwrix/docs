---
description: >-
  This article explains how to edit data collection and reporting schedules in
  Netwrix Auditor Event Log Manager. It shows how to edit the Task Scheduler
  task for collection and how to change the reporting notification time in the
  monitoring plan.
keywords:
  - Event Log Manager
  - schedule
  - Task Scheduler
  - monitoring plan
  - data collection
  - reporting schedule
  - Netwrix Auditor
  - notification delivery
products:
  - auditor
sidebar_label: How to Edit Schedules in Netwrix Auditor Event Log
tags: []
title: "How to Edit Schedules in Netwrix Auditor Event Log Manager"
knowledge_article_id: kA0Qk0000000S2jKAE
---

# How to Edit Schedules in Netwrix Auditor Event Log Manager

## Overview

Netwrix Auditor Event Log Manager implements two schedules for data collection and reporting. Depending on your business needs, these schedules can be altered to fit your environment. This article describes how to edit schedules in the Event Log Manager.

## Instructions

Refer to the following steps to edit the data collection schedule:

1. Open **Task Scheduler** on your Auditor server.
2. Select **Task Scheduler Library** and locate the Event Log Manager task − the correct task is named `Netwrix Auditor − {%GUID%} − {%GUID%}` and should contain the line `Starts Netwrix Auditor data collection on Event Log for %monitoring_plan_name%` in the **Description** field of the scheduled task.
3. Right-click the task and click **Properties**.
4. In the **Triggers** tab, select the **Daily** trigger and click **Edit**.
5. Define the new schedule and click **OK** > **OK** to save changes.

Refer to the following steps to edit the reporting schedule:

1. Launch Event Log Manager, select the monitoring plan, and click **Edit**.
2. Switch to the **Advanced** tab and edit the **Specify notification delivery time** value.
3. Click **Save** to save your changes.
