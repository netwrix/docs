---
description: >-
  This article describes how to troubleshoot Netwrix Access Analyzer scheduled
  tasks that do not run at their scheduled times on Windows. It covers
  reproducing the issue, checking Event Viewer, and verifying permissions,
  console access, database access, and filesystem access.
keywords:
  - scheduled tasks
  - Task Scheduler
  - Windows Event Viewer
  - Netwrix Access Analyzer
  - Log On As Batch Job
  - permissions
  - '%SAINSTALLDIR%SADatabase\Logs\Application'
  - 'C:\windows\tasks'
  - 'C:\windows\system32\tasks'
products:
  - access-analyzer
sidebar_label: Scheduled Tasks Not Running in Windows
tags:
  - job-management-and-scheduling
title: "Scheduled Tasks Not Running in Windows"
knowledge_article_id: kA04u0000000I7rCAE
---

# Scheduled Tasks Not Running in Windows

## Overview

This article describes how to troubleshoot Netwrix Access Analyzer tasks not initiating at scheduled times.

## Instructions

To troubleshoot Netwrix Access Analyzer/Windows Task Scheduler issues, follow the steps below:

### Re-create the issue:

1. Open the **Netwrix Access Analyzer Console**.
2. Click **Schedules**.
3. Right-click on a job (preferably one that runs quickly) and select **Run**.
4. Right-click the **job** and select **Open Task Scheduler**.
5. Locate the job within Windows Task Scheduler and check to see if the job is running.
6. If the task is not running, start the task in the Task Scheduler.
7. Click **History** and check for errors or warnings.

### Determine the issue with Windows Event Viewer:

Open **Windows Event Viewer** > Click **Applications and Services Logs** > **Netwrix Access Analyzer** > look in the timeframe of the above job. If errors/warnings are seen, here is what to check:

### 1. Permissions Check

Navigate to **Netwrix Access Analyzer** > **Settings** > **Schedule** and ensure the user in this job has the following permissions:

- Is in the Local Administrators group for the Netwrix Access Analyzer Server.
- Has the appropriate security rights:
  - Go to **Administrative Tools** > **Local Security Policy** > **Local Policies** > **User Rights Assignment** > **Log On As Batch Job**
  - GPO: `Computer Configuration\Windows Settings\Security Settings\Local Policies\User Rights Assignment\Log On As Batch Job`

### 2. Console Administrators Group

If the error in the Netwrix Access Analyzer logs located in ` %SAINSTALLDIR%SADatabase\Logs\Application` states that `User is not a member of the console administrators group`, add the user to the Administrator role by navigating to **Netwrix Access Analyzer** > **Settings** > **Access** and add the user to the Administrator role of the console access.

### 3. Database Access

If there are database access errors, ensure that the user is in the **Settings** > **Storage** group to access the database, add them as in step 1.

### 4. Filesystem Access

If there are file system access errors, ensure that the schedule user has at least Read/Write/Create access to the `C:\windows\tasks` and `C:\windows\system32\tasks` folders.
