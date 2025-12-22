---
title: "Compliance Templates"
description: "Compliance Templates"
sidebar_position: 20
---

# Compliance Templates

Change Tracker's compliance templates map directly to the prescriptive configuration recommendations
in the Center for Internet Security (CIS)
[Benchmarks List](https://www.cisecurity.org/cis-benchmarks). Each Change Tracker compliance report
is [CIS approved](https://www.cisecurity.org/partner/netwrix).

The tables below list the CIS benchmarks that have been implemented as compliance reports and the
operating systems that they support.

## Cloud

| Platform      |
| ------------- |
| Azure         |
| Microsoft 365 |
| AWS           |
| GCP           |

## Windows

| Operating System | OS Versions            |
| ---------------- | ---------------------- |
| Windows Desktop  | 11, 10, 8, 7           |
| Windows Server   | 2022, 2019, 2016, 2012 |

## Linux

| Operating System                     | OS Versions         |
| ------------------------------------ | ------------------- |
| Amazon Linux                         | 2                   |
| CentOS Workstation                   | 8, 7, 6             |
| CentOS Server                        | 8, 7, 6             |
| Debian Workstation                   | 10, 9, 8            |
| Debian Server                        | 10, 9, 8            |
| Oracle Linux Workstation             | 7, 6                |
| Oracle Linux Server                  | 7, 6                |
| Red Hat Enterprise Linux Workstation | 8, 7, 6             |
| Red Hat Enterprise Linux Server      | 8, 7, 6             |
| Rocky Linux Workstation              | 8                   |
| Rocky Linux Server                   | 8                   |
| SUSE Workstation                     | 15                  |
| SUSE Server                          | 15                  |
| Ubuntu Workstation                   | 20.04, 18.04, 16.04 |
| Ubuntu Server                        | 20.04, 18.04, 16.04 |

## Other Operating Systems

| Operating System | OS Versions |
| ---------------- | ----------- |
| IBM AIX          | 6.1, 5.3    |
| Oracle Solaris   | 11          |

## Databases

Database compliance templates come in three major types:

- RDBMS (Relational Database Management System)
- Windows
- Linux

Other types exist for cloud platforms like AWS's RDS.

The RDBMS template contains all of the checks done via a database connection. All other types extend
this base template with checks at the OS level using shell scripts, PowerShell, etc or they override
certain checks with code that is specific to the platform.

The database connection only RDBMS type compliance templates enable the opportunity to support a
database product on operating systems not listed below due to the lack of OS level checks. These
missing OS level checks must be mitigated and there is a risk that the targeted OS caused certain
checks to fail because of certain settings that are specific to that OS. Individual checks can be
disabled, but mitigation would be required.

| Database             | Database Version | Compliance Template Types                                                                                                                                                   |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft SQL Server | 2019             | RDBMS, Windows, RDS                                                                                                                                                         |
| Microsoft SQL Server | 2017             | RDBMS, Windows, RDS                                                                                                                                                         |
| Microsoft SQL Server | 2016             | RDBMS, Windows, RDS                                                                                                                                                         |
| Microsoft SQL Server | 2014             | Windows                                                                                                                                                                     |
| Microsoft SQL Server | 2012             | Windows                                                                                                                                                                     |
| Microsoft SQL Server | 2008R2           | Windows                                                                                                                                                                     |
| Oracle               | 19c              | RDBMS - Traditional Auditing, RDBMS - Unified Auditing, Linux - Traditional Auditing, Linux - Unified Auditing, Windows - Traditional Auditing, Windows - Unified Auditing, |
| Oracle               | 12c              | RDBMS, Linux, Windows                                                                                                                                                       |

## Network Devices

| Operating System | OS Versions |
| ---------------- | ----------- |
| Cisco IOS        | 17, 16, 15  |
| F5               | All         |
