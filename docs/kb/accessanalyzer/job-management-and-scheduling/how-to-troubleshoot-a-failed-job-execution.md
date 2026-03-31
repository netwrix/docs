---
description: >-
  Describes how to troubleshoot a failed job execution in Netwrix Access Analyzer,
  including checks of job stats, task stats, runstats files, logs, uptime, and
  applet/agent log locations.
keywords:
  - job execution
  - troubleshooting
  - logs
  - runstats.ini
  - Task Scheduler
  - SQL Server
  - Netwrix Access Analyzer
  - SADebug
  - applet logs
products:
  - access-analyzer
sidebar_label: How to Troubleshoot a Failed Job Execution
tags:
  - job-management-and-scheduling
title: "How to Troubleshoot a Failed Job Execution"
knowledge_article_id: kA04u0000000ISGCA2
---

# How to Troubleshoot a Failed Job Execution

## Overview

This article describes how to troubleshoot a failed job execution in Netwrix Access Analyzer.

## Instructions

- Check Job Stats.
  - In the console expand the **Job > Status Node** and Select the **Job Stats Table**. This will allow you to verify if a failure is a one-time occurrence or a recurring issue.

- Check Job TaskStats.
  - In the console, expand **Job > Status Node** and select the **Task Stats Table**. Tthis will allow you to verify if all job components are failing or just specific tasks.

- Check `Runstats.ini`.
  - Right-click the job and select the **Explore folder** option.
  - Open the runstats_prev.ini in a plain-text editor.
  - Check the run statistics for the previous saved runs (five is the default in the application settings node).

- Check Server Uptime.
  - Open Task Manager.
  - Select the **Performance** tab.
  - Check server uptime. If server uptime is greater than 30 days, make sure that there are no MSFT patches with pending reboots.

- Check Job Log.
  - Right-click on the job and select the **Explore folder** option.
  - Enter the output folder and locate a file named in the following fashion:
    - JobName_log.tsv (Example: the first job in the tree should be 1-AD_Scan for the .Active Directory Inventory group. The log for this job will be named 1-AD_Scan_log.tsv)
  - Review any messages leading up to end of file or leading up to end of processing for a given host:
    - Search for the failed host name.
    - Search for the words ERROR or WARNING and select the match case option.
  - Get the timestamp of the last line in file.

- Check SQL Server uptime and service uptime.

- Check Windows Event Logs around that time. Look for errors and warnings that could indicate failure.
  - Application (e.g., crash)
  - Security (e.g., logoff)

- Check Task Scheduler history (Task Scheduler Event Log).

- Check Netwrix Access Analyzer Event Log (`%sainstalldir%logs`).

- Check SADebug Logs:
  - Application
  - JobEngine
    - These logs are found in both the SADatabase Folder and in the root of the installation directory (`%sainstalldir%sadatabase`).

- Check Applet/Agent logs (e.g., FSAA, SPAA On-Prem, Exchange Metrics, PowerShell). These logs are found in various places:
  - ExchangePS engine - `%sainstalldir%Private Assemblies\Folders identified by query GUID and job runtime`
  - PowerShell Applet - `%sainstalldir%jobs\SA_CommonData\PowerShell`
  - SQL DC - `%sainstalldir%jobs\SA_CommonData\SQLDC`
  - Smartlog Applet - `%sainstalldir%jobs\SA_CommonData\SmartLog`
  - FSAA Applet - `C:\Program Files(x86)\STEALTHbits\StealthAUDIT\FSAA\HOST`
