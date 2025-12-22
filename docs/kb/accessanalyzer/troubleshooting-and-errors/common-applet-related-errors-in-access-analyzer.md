---
description: >-
  Common applet errors encountered when running Exchange Metrics, SMARTLog, and
  FSAA queries in Access Analyzer, with causes and recommended resolutions.
  Includes guidance for WMI memory settings, firewall and port conflicts, and
  process termination.
keywords:
  - access analyzer
  - applet errors
  - Exchange Metrics
  - SMARTLog
  - FSAA
  - RPC server unavailable
  - out of memory
  - WMI
  - Windows Firewall
products:
  - access-analyzer
sidebar_label: Common Applet-Related Errors in Access Analyzer
tags:
  - troubleshooting-and-errors
title: "Common Applet-Related Errors in Access Analyzer"
knowledge_article_id: kA04u0000000INRCA2
---

# Common Applet-Related Errors in Access Analyzer

## Summary
Common applet errors in Exchange Metrics, SMARTLog, and FSAA.

## Issue
1. The applet is already started on host. Process ID =  
2. Out of memory  
3. "CreateLogProcessorRemote failed - Structured exception -> 0x000006D9  
4. Error in TRemoteHelper.GetStageCode: (0x000006BA) The RPC server is unav

## Instructions

1. **The applet is already started on host.  Process ID =**

   In most cases, only one instance of an applet can be running on a host at any one time.  This error is commonly received if a job running an applet based task is in the process of executing when another job using a similar query routine attempts to execute.  In this case, the second task will fail as it will not be able to launch the applet.  This error can also be received if the applet is 'hung' open for whatever reason.  In hung scenarios, the applet process will need to be killed prior to a successful execution of the applet-based query.  This can be done manually or through a job designed specifically to terminate the process.

2. **Out of memory**

   Host side out of memory errors, where the applet process does not have sufficient memory to perform the processing task, was most common when running Exchange Metrics queries against Exchange servers on Windows Server 2003 operating systems.  This is due to a small amount of memory allowed for WMI-based processes.  By default, WMI processes are configured to use up to 128 Mb; however, a setting of 512 Mb is recommended.  In these scenarios, it is necessary to modify WMI to allow more memory to be used.  Warning: this operation requires a server reboot  
   http://blogs.technet.com/b/askperf/archive/2008/09/16/memory-and-handle-quotas-in-the-wmi-provider-service.aspx

3. **"CreateLogProcessorRemote failed - Structured exception -> 0x000006D9**

   This error was commonly viewed when attempting to run Exchange Metrics and SmartLog queries against hosts where the Windows Firewall was enabled.  To overcome, it would be necessary to disable the firewall or whitelist the applet executable as to not get caught by the firewall rule.

4. **Error in TRemoteHelper.GetStageCode: (0x000006BA) The RPC server is unavailable**

   This error has been observed when run with Exchange Metrics, SmartLog, and FSAA applet query routines and represents a condition where the port attempting to be used is already in use by another application.  The resolve would be to either free up the port or select another port for query purposes.  For versions of SmartLOG and Exchange Metrics from later versions of 6.1 forward, port specifications cannot be modified.  For FSAA queries, a secondary port could be selected within the configuration of each FSAA applet-based query

## Module
Access Analyzer - DC - ExchangeMetrics;Access Analyzer - DC - FSAA - Activity;Access Analyzer - DC - FSAA - DFS;Access Analyzer - DC - FSAA - Permissions;Access Analyzer - DC - FSAA - Sensitive Data;Access Analyzer - DC - Smartlog EventLog;Access Analyzer - DC - Smartlog IIS;Access Analyzer - DC - SPAA - Activity;Access Analyzer - DC - SPAA - Permissions

## Versions
6.3+

## Salesforce Article ID
000001046
