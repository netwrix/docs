---
description: >-
  This article describes several methods to stop running Netwrix Access Analyzer
  jobs safely and outlines emergency procedures to avoid console issues.
keywords:
  - Netwrix Access Analyzer
  - stop job
  - scheduled task
  - Task Manager
  - graceful abort
  - emergency terminate
  - scheduled jobs
  - console issues
products:
  - access-analyzer
sidebar_label: Methods for Properly Ending Netwrix Access Analyzer Running Jobs
tags:
  - job-management-and-scheduling
title: "Methods for Properly Ending Netwrix Access Analyzer Running Jobs"
knowledge_article_id: kA04u0000000IR8CAM
---

# Methods for Properly Ending Netwrix Access Analyzer Running Jobs

## Summary:
There are many ways to stop a running job in Netwrix Access Analyzer but there are some ways that can cause issues. This article outlines several methods for safely ending a running task.

## Issue:
Many times while running Netwrix Access Analyzer jobs there are situations that require a job execution to be ended prematurely. Doing so incorrectly can adversely impact the console. For instance, rebooting the machine because a running job is being a resource hog and slowing down the console can result in the job tree being incomplete when the console is next launched. The methods below can be used to gracefully (or not so gracefully) stop job executions without adversely impacting the Netwrix Access Analyzer Console

## Instructions:

### Method One for Ending an Interactive Job Execution
1. Select the currently running job in the tree
2. In the action bar click on the **stop button**
3. Wait for Netwrix Access Analyzer to gracefully abort job execution

### Method Two for Ending an Interactive Job Execution
1. Use the **pick list in the lower right hand corner of the application** to select the option to stop either the currently running job or stop all jobs in the execution queue
2. Wait for Netwrix Access Analyzer to gracefully abort job execution

### Method Three for Ending an Interactive Job Execution
1. Close the Netwrix Access Analyzer Console and select the option to **forcefully close the console**
2. Wait for Netwrix Access Analyzer to gracefully for the console to close

### Method One for Ending a Scheduled Job Execution
1. Check Netwrix Access Analyzer Scheduled Task list to see if your task is listed

   1. (a) From time to time a running task will not be shown because the currently running instance extended past the next scheduled execution time

2. If your task is listed right click on the task and select the **Stop Option**

### Method Two for Ending a Scheduled Job Execution
1. If you are running a job via the scheduler and it is not shown in the Netwrix Access Analyzer Scheduled Task List because of condition (a) mentioned above, your next option is to Open **Windows Task Scheduler**
2. Locate your job or the parent group under which the job is being run and right click the running scheduled task and select the **End or Stop Option**

### Final Acceptable Method for Emergency Situations where the task needs to be ended and there is no time to wait for graceful application closure
1. Open **Task Manager**
2. Identify all Netwrix Access Analyzer Processes
3. Right Click each process and select **End Process Tree** so that all associated peripherals are closed along with the parent process.

## Product:
- Product: Netwrix Access Analyzer
- Module: Netwrix Access Analyzer - Core; Netwrix Access Analyzer - Job Configuration
- Versions: All
- Salesforce Article ID: 000002625
