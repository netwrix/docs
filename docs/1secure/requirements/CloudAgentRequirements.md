---
title: "Netwrix Cloud Agent Requirements"
description: "Netwrix Cloud Agent Requirements"
sidebar_position: 20
---

# Netwrix Cloud Agent Requirements

:::warning
Deploy only one Netwrix Cloud Agent per audited on-premises AD domain. If both Netwrix Auditor and Netwrix 1Secure audit the same domain, enable network traffic compression for at most one product across the shared sources.
:::


Netwrix Cloud Agent requires the following software:

- Windows Server OS (strongly recommended):

    - Windows Server 2025
    - Windows Server 2022
    - Windows Server 2019
    - Windows Server 2016

- Windows Desktop OS (64-bit):

    - Windows 10
    - Windows 11

- .NET Framework 4.8 or later (in the monitored environment as well)
- Windows Installer 3.1 or later
- Windows PowerShell 3.0 or later

The agent host must meet the following hardware requirements.

| Hardware component | Evaluation, PoC, or starter environment | Regular environment (up to 1m Activity Records/day) | Large environment (1-10m Activity Records/day) | XLarge environment (10m Activity Records/day or more) |
| ------------------ | -------------------------------------- | --------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| Processor          | 2 cores                                | 4 cores                                             | 8 cores                                        | 16 cores                                              |
| RAM                | 8 GB                                   | 8 GB                                                | 16 GB                                          | 64 GB                                                 |
| Disk space         | 200 GB—System drive                    | 200 GB—System drive                                 | 2 TB—System drive                              | 1 TB + 1 TB per year —System drive                    |
| Others             | —                                      | —                                                   | Network capacity 1 Gbit                        | Network capacity 1 Gbit                               |

## Outbound communication requirements

To review agent security settings, examine the target URL in Configuration.xml, located on the agent host at:

`C:\ProgramData\Netwrix Cloud Agent\AgentCore\ConfigServer\Configuration.xml`

Open outbound TCP port 443 on the agent host. See [Install Agent](/docs/1secure/install/installagent.md) for installation steps.
