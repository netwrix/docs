---
title: "Support Matrix"
description: "Support Matrix"
sidebar_position: 10
---

# Support Matrix

This page lists the component versions, platforms, and network devices that Netwrix has verified with Change Tracker. The Express Agent may also work on other platforms that have a gcc (4.8+) compiler available.

## Hub Compatibility Matrix

The following table shows Hub releases and the component versions verified to work with each release.

| Hub   | Gen7 Agent | Express Agent | Sync Service | MongoDB | .NET Runtime |
| ----- | ---------- | ------------- | ------------ | ------- | ------------ |
| 8.1.2 | 7.2.2      | 2.2.1         | 2.2.0.0      | 8.2.3   | 8.0.0        |
| 8.1.1 | 7.2.1      | 2.2.1         | 2.2.0.0      | 8.0.5   | 8.0.0        |
| 8.1.0 | 7.2.0      | 2.1.1         | 2.1.0.0      | 8.0.5   | 8.0.0        |
| 8.0.0 | 7.1.5      | 2.1.1         | 2.1.0.0      | 7.0.1   | 8.0.0        |
| 7.7.4 | 7.1.4      | 2.1.1         | 2.0.4.4      | 7.0.1   | 6.0.0        |

## Windows Operating Systems

The versions in the following table cover Standard and Datacenter editions, plus the server core installation option.

| Windows Operating Systems Supported | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ----------------------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| Windows 10                          |                                    | ✓                  | ✓           | ✓                      |
| Windows 11                          |                                    | ✓                  | ✓           | ✓                      |
| Windows Server 2025                 | ✓                                | ✓                  | ✓           | ✓                      |
| Windows Server 2022                 | ✓                                | ✓                  | ✓           | ✓                      |
| Windows Server 2019                 | ✓                                | ✓                  | ✓           | ✓                      |
| Windows Server 2016                 | ✓                                | ✓                  | ✓           | ✓                      |

## Linux (RedHat Based) Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x
architectures upon request.

| Linux (RedHat Based) | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| -------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| CentOS 7+            |                                    | ✓\*                | ✓           | ✓                      |
| RHEL 7+              |                                    | ✓\*                | ✓           | ✓                      |
| Fedora 39+           |                                    | ✓\*                | ✓           | ✓                      |
| Oracle Linux 7+      |                                    | ✓\*                | ✓           | ✓                      |
| Rocky Linux 8+       |                                    | ✓\*                | ✓           | ✓                      |

\* Support for CentOS 7, RHEL 7, Fedora 39 and Oracle Linux 7 is only possible with v7.1.4 of the
agent, later versions don't support these legacy OS releases.

## Linux (Debian Based) Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x
architectures upon request.

| Linux (Debian Based)         | Change Tracker Management Software | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ---------------------------- | ---------------------------------- | -------------------- | ------------- | ------------------------ |
| Debian 10+                   |                                    | ✓                  | ✓           | ✓                      |
| Ubuntu 16.04+                |                                    | ✓                  | ✓           | ✓                      |
| Raspberry Pi OS (Debian) 10+ |                                    |                      | ✓           | ✓                      |

## Other Linux Operating Systems

This table assumes Intel/AMD x64 architecture. Express Agent is also available on 32 bit and s390x architectures upon request.

| Other Linux               | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ------------------------- | -------------------- | ------------- | ------------------------ |
| SUSE Linux Enterprise 12+ | ✓                  | ✓           | ✓                      |
| openSUSE 15+              | ✓                  | ✓           | ✓                      |
| Alpine Linux 3.17+        | ✓                  | ✓           | ✓                      |

## Other Platforms

| Other platforms | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| --------------- | -------------------- | ------------- | ------------------------ |
| Solaris 11, 10  |                      | ✓           | ✓                      |
| AIX 7.3, 7.2    |                      | ✓           | ✓                      |
| HP-UX 11i v3    |                      |               | ✓                      |
| macOS 12+       | ✓                  | ✓           | ✓                      |
| ESXi 7+         |                      |               | ✓                      |

## Network Devices

Change Tracker collects each device's OS version, startup/running config, and the user list to track any changes over time.

| Network Devices          | Change Tracker Agent | Express Agent | Change Tracker Agentless |
| ------------------------ | -------------------- | ------------- | ------------------------ |
| Check Point Firewall     |                      |               | ✓                      |
| Cisco IOS                |                      |               | ✓                      |
| Cisco Switch             |                      |               | ✓                      |
| Cisco Firewall           |                      |               | ✓                      |
| Dell N-Series Switch     |                      |               | ✓                      |
| Dell E-S-C Series Router |                      |               | ✓                      |
| F5                       |                      |               | ✓                      |
| HP Switch                |                      |               | ✓                      |
| Juniper Switch           |                      |               | ✓                      |
| Palo Alto Firewall       |                      |               | ✓                      |
| SonicWall Firewall       |                      |               | ✓                      |
