---
title: "OS Support Matrix"
description: "OS Support Matrix"
sidebar_position: 10
---

# OS Support Matrix

This page lists the platforms and use cases that Netwrix has verified. However, the Express Agent
may work on other platforms that have gcc (4.8+) compiler available.

## Windows Operating Systems

The versions below cover Standard and Datacenter editions, plus the server core installation option.

| Windows Operating Systems Supported | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ----------------------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| Windows 10                          |                                    | YES                  | YES           | YES                      |
| Windows 11                          |                                    | YES                  | YES           | YES                      |
| Windows Server 2025                 | YES                                | YES                  | YES           | YES                      |
| Windows Server 2022                 | YES                                | YES                  | YES           | YES                      |
| Windows Server 2019                 | YES                                | YES                  | YES           | YES                      |
| Windows Server 2016                 | YES                                | YES                  | YES           | YES                      |

## Linux (RedHat Based) Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x
architectures upon request.

| Linux (RedHat Based) | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| -------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| CentOS 7+            |                                    | YES\*                | YES           | YES                      |
| RHEL 7+              |                                    | YES\*                | YES           | YES                      |
| Fedora 39+           |                                    | YES\*                | YES           | YES                      |
| Oracle Linux 7+      |                                    | YES\*                | YES           | YES                      |
| Rocky Linux 8+       |                                    | YES\*                | YES           | YES                      |

\* Not officially supported by Microsoft but has been tested internally

:::note
Support for CentOS 7, RHEL 7, Fedora 39 and Oracle Linux 7 is only possible with v7.1.4 of
the agent, later versions are not supported on these legacy OS releases.
:::


## Linux (Debian Based) Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x
architectures upon request.

| Linux (Debian Based)         | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ---------------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| Debian 10+                   |                                    | YES                  | YES           | YES                      |
| Ubuntu 16.04+                |                                    | YES                  | YES           | YES                      |
| Raspberry Pi OS (Debian) 10+ |                                    |                      | YES           | YES                      |

## Other Linux Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x.
architectures upon request.

| Other Linux               | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ------------------------- | -------------------- | ------------- | ------------------------ |
| SUSE Linux Enterprise 12+ | YES                  | YES           | YES                      |
| openSUSE 15+              | YES                  | YES           | YES                      |
| Alpine Linux 3.17+        | YES                  | YES           | YES                      |

## Other Platforms

| Other platforms | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| --------------- | -------------------- | ------------- | ------------------------ |
| Solaris 11, 10  |                      | YES           | YES                      |
| AIX 7.3, 7.2    |                      | YES           | YES                      |
| HPUX 11i v3     |                      |               | YES                      |
| Mac OS 12+      | YES                  | YES           | YES                      |
| ESXi 7+         |                      |               | YES                      |

## Network Devices

Change Tracker collects each device's OS version, startup/running config and the user list to track
any changes over time.

| Network Devices          | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ------------------------ | -------------------- | ------------- | ------------------------ |
| CheckPoint Firewall      |                      |               | YES                      |
| Cisco IOS                |                      |               | YES                      |
| Cisco Switch             |                      |               | YES                      |
| Cisco Firewall           |                      |               | YES                      |
| Dell N-Series Switch     |                      |               | YES                      |
| Dell E-S-C Series Router |                      |               | YES                      |
| F5                       |                      |               | YES                      |
| HP Switch                |                      |               | YES                      |
| Juniper Switch           |                      |               | YES                      |
| Palo Alto Firewall       |                      |               | YES                      |
| Sonicwall Firewall       |                      |               | YES                      |
