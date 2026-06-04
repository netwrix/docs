---
title: "Agent Performance Metrics"
description: "Agent Performance Metrics"
sidebar_position: 10
---

# Agent Performance Metrics

This document depicts the resource usage of the Netwrix Change Tracker Gen7 Agent in its different
phases (Polling, Monitoring, Stress / Load). The metrics gathered include CPU Usage, Memory Usage,
Disk I/O Statistics, and Network Statistics.

## Server & System Specs Used

For testing purposes, the following specs were granted to the following machines:

Operating System: Windows Server 2016 Standard

- Processors: 2
- Memory: 2 GB
- Hard Disk Space: 30 GB

Operating System: Windows Server 2019 Standard

- Processors: 2
- Memory: 2 GB
- Hard Disk Space: 30 GB

Operating System: Windows Server 2022 Standard

- Processors: 2
- Memory: 2 GB
- Hard Disk Space: 30 GB

Operating System: RedHat Enterprise Linux 9

- Processors: 1
- Memory: 2 GB
- Hard Disk Space: 10 GB

Operating System: Ubuntu Server 22.04 LTS

- Processors: 1
- Memory: 2GB
- Hard Disk Space: 10 GB

:::note
All VMs were hosted on AWS. The specs above were sufficient enough for the tests performed
and the results may differ depending on the production specs assigned within your environment.
:::


## Results

All measurements reflect the whole usage of the system resource, not the usage of the resource by
just the agent. The Base metrics were gathered without the installation of an Change Tracker Agent.
Polling is when the agent is baselining all monitored items on the system. Monitoring occurs when
the agent has finished polling and is watching monitored items for change activity. Stress/Load is
when the agent is reporting changes under a large amount of change action.

### Windows 2022

|         | Base         | Polling       | Monitoring   | Stress / Load   |
| ------- | ------------ | ------------- | ------------ | --------------- |
| CPU     | 3-5%         | 3-11%         | 0-2%         | 10-25%          |
| Memory  | 30-45%       | 50-70%        | 40-60%       | 30-80%          |
| Disk    | 20-50 KB/Sec | 25MB-50MB/Sec | 20-50 KB/Sec | 20-50 KB/Sec    |
| Network | 0-400 B/Sec  | 0-500 B/Sec   | 0-500 B/Sec  | 7500-8500 B/Sec |

### Windows 2019

|         | Base         | Polling      | Monitoring    | Stress / Load   |
| ------- | ------------ | ------------ | ------------- | --------------- |
| CPU     | 0-5%         | 3-7%         | 0-4%          | 10-25%          |
| Memory  | 25-45%       | 50-70%       | 40-60%        | 40-85%          |
| Disk    | 20-50 KB/Sec | 20-50 KB/Sec | 25MB-50MB/Sec | 25MB-80MB/Sec   |
| Network | 0-100 B/Sec  | 0-400 B/Sec  | 0-400 B/Sec   | 7500-8500 B/Sec |

### Windows 2016

|         | Base        | Polling      | Monitoring    | Stress / Load   |
| ------- | ----------- | ------------ | ------------- | --------------- |
|         | Base        | Polling      | Monitoring    | Stress / Load   |
| CPU     | 0-5%        | 3-5%         | 0-5%          | 10-25%          |
| Memory  | 25-35%      | 50-70%       | 20-80%        | 30-80%          |
| Disk    | 0-40 KB/Sec | 20-50 KB/Sec | 0-40 KB/Sec   | 30-70 KB/Sec    |
| Network | 0-50 B/Sec  | 0-400 B/Sec  | 150-500 B/Sec | 7500-8500 B/Sec |

### RedHat 9

|         | Base      | Polling       | Monitoring  | Stress / Load |
| ------- | --------- | ------------- | ----------- | ------------- |
| CPU     | 0-3%      | 10-25%        | 10-25%      | 10-25%        |
| Memory  | 1-7%      | 5-15%         | 5-15%       | 10-25%        |
| Disk    | 1 R&W/Sec | 20-50 R&W/Sec | 1-6 R&W/Sec | 20-50 R&W/Sec |
| Network |           |               |             |               |

### Ubuntu 22.04

|         | Base        | Polling       | Monitoring   | Stress / Load |
| ------- | ----------- | ------------- | ------------ | ------------- |
|         | Base        | Polling       | Monitoring   | Stress / Load |
| CPU     | 0-2%        | 10-25%        | 0-2%         | 10-25%        |
| Memory  | 1-2%        | 5-15%         | 5-15%        | 5-20%         |
| Disk    | 1-3 R&W/Sec | 20-60 R&W/Sec | 1-4 R&W/Sec  | 20-60 R&W/Sec |
| Network | 1-3 KB/Sec  | 10-30 KB/Sec  | 10-30 KB/Sec | 1-30 KB/Sec   |

## Definitions

Base Server Metrics

These metrics were gathered on a base system, with little to no applications installed, prior to the
Change Tracker agent being installed. Metrics gathered at this stage do not include the installation
of the agent.

Agent Polling Metrics

During the initial poll of the agent, which occurs immediately after an installation or on agent
start up, the agent is gathering and hashing all the monitored files and items. This state is called
a Polling state, and is a state that uses slightly more resources than an agent in the
Monitoring/Resting state. The polling state tends to take anywhere from 10-30 minutes depending on
system activity.

Agent Resting / Monitoring Metrics

This stage occurs after the poll has completed and the agent is now in a real-time monitoring state.
Once the agent has hashed all the files being monitored, the agent will rest until changes are made
that it needs to report. These metrics were gathered without any sort of load or stimulation of
change on the system. Keep in mind that the agent can be configured to be in a Polling state only if
desired, and does not need to monitor real time if that function is not required.

Agent Load / Stress Metrics

This stage is the typical reflection of a very busy system. Netwrix has used an automated script
that generates hundreds of file changes per second, as a way of stress testing the system to gather
these metrics. Keep in mind, that in our test, a lot of the CPU Usage and other metrics that seem
greatly inflated are mostly caused by the script, and the operating system itself being busy making
changes. In these cases, pay attention to what the Agent itself is utilizing in terms of resources.

CIS Tracking Template Description

The CIS Tracking Templates are responsible for defining the monitoring of the system. By default,
for Windows, the system will monitor `%SYSDIR%`, `%WINDIR%\SysWOW64`, `%PROGRAMFILES%`,
`%PROGRAMFILES(x86)%`, `%SYSDIR%\drivers\etc` for FIM; `%SYSDIR%\drivers\etc\*` for File Contents;
More than 60 Registry Keys; Local Accounts Tracking Enabled, and a Compliance Report was run at
agent startup.

For Linux Systems, the system monitors the entire /etc directory for FIM; Over 30 files for file
contents tracking; Processes & Services Monitoring; over 90 commands being and capturing results
from our process output tracker; and a compliance report was run at agent start up.
