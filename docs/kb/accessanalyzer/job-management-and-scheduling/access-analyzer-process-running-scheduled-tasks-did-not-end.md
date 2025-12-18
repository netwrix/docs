---
description: >-
  How to verify and resolve when a Netwrix Access Analyzer scheduled task
  appears to be stuck in the operating system Task Scheduler.
keywords:
  - Netwrix Access Analyzer
  - scheduled task
  - Task Scheduler
  - running.lck
  - stuck job
  - end task
  - processes tab
  - command line
products:
  - access-analyzer
sidebar_label: Access Analyzer process running scheduled tasks di
tags:
  - job-management-and-scheduling
title: "Netwrix Access Analyzer process running scheduled tasks did not end"
knowledge_article_id: kA04u0000000INfCAM
---

# Netwrix Access Analyzer process running scheduled tasks did not end

## Summary
Scheduled task appears to be stuck; how to verify and resolve.

## Issue
While in the operating system's **Task Scheduler**, you notice a scheduled task is running longer than it usually does. The job may be stuck. To verify and/or resolve, follow the steps below.

## Instructions

To verify that the job is actually stuck, check the job statistics. If the job's last run is the same time as the scheduled task's start time, and if it has a finish time, it is possible that the process is stuck.

To remediate the issue:

1. Right-click on the scheduled task in **Task Scheduler** and select **End**.
2. Check Task Manager for the corresponding Netwrix Access Analyzer process. If you add the **Command line** column to the **Processes** tab, it will show you the job that is running. End the process that is causing the issue.
3. Inspect the folder of the job and remove any `running.lck` files that may be present. Right-click on the job and select **Explore folder**. If a `running.lck` file is present, delete it.

**Module:** Netwrix Access Analyzer - Core  
**Salesforce Article ID:** 000001109
