---
description: >-
  Lists the debug log file locations for Netwrix File Activity Monitor on the
  console and agents, and explains how to collect logs and manage logging level.
keywords:
  - SFAM
  - log locations
  - debug logs
  - Netwrix File Activity Monitor
  - agents
  - console
  - '%ALLUSERSPROFILE%'
products:
  - activitymonitor
sidebar_label: SFAM Log Locations
tags: []
title: "SFAM Log Locations"
knowledge_article_id: kA04u0000000IxYCAU
---

# SFAM Log Locations

## Summary:
Netwrix File Activity Monitor Log Locations

## Issue:

## Instructions:
The debug log files are located in the following folders:
On the console:
`%ALLUSERSPROFILE%\STEALTHbits\File Monitoring\Logs`

On the agents:
`%ProgramFiles%\STEALTHbits\StealthAUDIT\FSAC\*.log`

SFAM 2.4+ has a function to copy logs from the agents to the console machine, on demand. After you use this function all logs from all SFAM components are in ` %ALLUSERSPROFILE%\STEALTHbits\File Monitoring\Logs` .

There is a single switch to change the logging level. Whenever the level is changed in the UI, the change is propagated and applied immediately to all the agents.

**Product:** Netwrix File Activity Monitor  
**Module:** File Activity Monitor - EMC/Celerra;File Activity Monitor - NetApp;File Activity Monitor - Windows  
**Legacy Article ID:** 1652
