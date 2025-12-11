---
description: >-
  This article outlines the installation and configuration paths for Netwrix Activity Monitor 7.0, detailing the various locations and files used for the NAM agent and console.
keywords:
  - Netwrix Activity Monitor
  - installation paths
  - configuration files
  - NAM agent
  - NAM console
sidebar_label: Activity Monitor 7.0 Paths
tags: []
title: "Netwrix Activity Monitor 7.0 Paths"
knowledge_article_id: kA04u00000111AOCAY
products:
  - activitymonitor
---

# Netwrix Activity Monitor 7.0 Paths

## Overview

NAM 7.0 has changed its installation and configuration paths from 6.0. This article explains all the different locations and files that are used for the NAM agent and console.

## Installation Binaries (Default Location)

*Only includes installation binaries; doesn't include config files or logs.*

### Console

**NAM Console**

```
%PROGRAMFILES%\Netwrix\Activity Monitor\Console
```

**NAM Agent install packages** (that the console uses for deployments, includes Windows Agent, Linux Agent, and SI Agent):

```
%PROGRAMFILES%\Netwrix\Activity Monitor\Console\Agents
```

### Windows Agent

**NAM Agent**

```
%PROGRAMFILES%\Netwrix\Activity Monitor\Agent
```

**SBTService** (Only for SBTService / Windows Monitoring)

```
%PROGRAMFILES%\Stealthbits\StealthAUDIT\FSAC
```

**Windows Activity driver sys file**

```
%WINDIR%\System32\drivers\SBTFSF.sys
```

**SI Agent** (only used for AD Activity)

```
%PROGRAMFILES%\Stealthbits\StealthINTERCEPT\SIWindowsAgent
```

### Linux Agent

**NAM Agent**

```
/usr/bin/activity-monitor-agentd
```

## Program Data

*Includes config files, logs, and additional data.*

### Console

**Console's list of agents and encrypted credentials** (access given to SYSTEM and BUILTIN\Administrators only)

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Console\Agents.ini
```

**NAM Console's license file**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Console\FileMonitor.lic
```

**NAM Console's Debug Logs**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Console\DebugLogs
```

### Windows Agent

**NAM Agent's config file**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\SBTFileMon.ini
```

**NAM Agent's SI config File** (only used for AD Activity)

```
%PROGRAMFILES%\Stealthbits\StealthINTERCEPT\SIWindowsAgent\SAMConfig.xml
```

**Main SI Agent's Config File** (only used for AD Activity)

```
%PROGRAMFILES%\Stealthbits\StealthINTERCEPT\SIWindowsAgent\SIWindowsAgent.exe.Config
```

**NAM Agent's debug logs**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\DebugLogs
```

**NAM Windows Driver ETW Logs**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\DebugLogs
```

**Saved Crash Dumps of NAM Services**

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\Dumps
```

**NAM Audit Logs** - History of all config changes; this is also included in the Windows Event Log (Application)

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\Audit
```

**NAM Journal Logs** - History of hosts and output statuses

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\Journal
```

**NAM Activity Logs** (Default location, can be customized)

```
%PROGRAMDATA%\Netwrix\Activity Monitor\Agent\ActivityLogs
```

### Linux Agent

**NAM Agent's config file**

```
/usr/bin/activity-monitor-agentd/config/SBTFileMon.ini
```

**NAM Agent's debug logs**

```
/usr/bin/activity-monitor-agentd/DebugLogs
```

**NAM Audit Logs** - History of all config changes; this is also included in the Windows Event Log (Application)

```
/usr/bin/activity-monitor-agentd/Audit
```

**NAM Journal Logs** - History of hosts and output statuses

```
/usr/bin/activity-monitor-agentd/Journal
```

**NAM Activity Logs** (Default location, can be customized)

```
/usr/bin/activity-monitor-agentd/ActivityLogs
```

## Windows Registry Key Location

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters
```

### Values:

- **ConfigPath** – String (REG_SZ)
  - Full path of config `SBTFileMon.ini` file that the agent is currently using

- **TraceLevel** – DWORD 32-bit (REG_DWORD)
  - The integer value of the trace level that the product is currently using (for console and agents)
    - 0 – Trace
    - 1 – Debug
    - 2 – Information
    - 3 – Warning
    - 4 – Fatal
