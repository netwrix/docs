---
description: >-
  Netwrix Auditor Password Reset implements a schedule for reporting. This
  article explains how to edit the reporting schedule for Password Reset
  reporting tasks on your Netwrix Auditor server.
keywords:
  - password expiration
  - schedule
  - Task Scheduler
  - Event Log Manager
  - Netwrix Auditor
  - Password Reset
  - reporting schedule
  - triggers
  - daily trigger
products:
  - auditor
sidebar_label: "How to Edit Schedules in Netwrix Auditor Password Reset"
tags: []
title: "How to Edit Schedules in Netwrix Auditor Password Reset"
knowledge_article_id: kA0Qk0000000XyTKAU
---

# How to Edit Schedules in Netwrix Auditor Password Reset

## Overview

Netwrix Auditor Password Reset implements a schedule for reporting. Depending on your business needs, the schedule can be altered to fit your environment. This article describes how to edit the reporting schedule in Password Reset.

## Instructions

Refer to the following steps to edit the reporting schedule:

1. Open **Task Scheduler** on your Netwrix Auditor server.
2. Select **Task Scheduler Library** and locate the Event Log Manager task − the correct task is named `Netwrix Auditor − {%GUID%} − {%GUID%}` and should contain the line `Starts Netwrix Auditor data collection on Password Expiration for %monitoring_plan_name%` in the **Description** field of the scheduled task.
3. Right-click the task and click **Properties**.
4. In the **Triggers** tab, select the **Daily** trigger and click **Edit**.
5. Define the new schedule and click **OK** > **OK** to save changes.
