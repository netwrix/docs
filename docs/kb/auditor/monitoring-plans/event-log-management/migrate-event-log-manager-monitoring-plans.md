---
description: >-
  Shows how to migrate a monitoring plan for Event Log Manager (ELM) between
  Netwrix Auditor servers by copying rule folders and exporting/importing Task
  Scheduler tasks.
keywords:
  - event log manager
  - ELM
  - monitoring plan
  - migrate
  - Task Scheduler
  - Netwrix Auditor
  - rules
  - export
  - import
  - working folder
products:
  - auditor
sidebar_label: Migrate Event Log Manager Monitoring Plans
tags: []
title: "Migrate Event Log Manager Monitoring Plans"
knowledge_article_id: kA04u00000110xoCAA
---

# Migrate Event Log Manager Monitoring Plans

## Question

How to migrate a monitoring plan for Event Log Manager (ELM) to a different server?

## Answer

### On your prior Netwrix Auditor server

1. Copy the folders located in ` %Working Folder%\Event Log Management\Rules\ `. Each folder represents a single monitoring plan in Event Log Manager.
2. Export the Event Log Manager tasks from Task Scheduler:

   1. Open your Task Scheduler either via the Search bar or `taskschd.msc` in the Run command window.
   2. Locate all tasks related to Event Log Manager. They will have the following line in the description under the **General** tab:

   ```
   Starts Netwrix Auditor data collection on Event Log for '%monitoring_plan_name%'
   ```

   3. To export a task, right-click a task and click **Export**. Perform these steps for all tasks.

### On your new Netwrix Auditor server

1. Create a monitoring plan in Event Log Manager using the name of the prior monitoring plan.
2. Copy the folder from your prior server to the new one to ` %Working Folder%\Event Log Management\Rules\ `.
3. Import the tasks for Task Scheduler:

   1. On your new server, open Task Scheduler, and click **Action** in the top row > **Import...**.
   2. Select the previously exported tasks and import them to your new server.
