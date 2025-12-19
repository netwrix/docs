---
title: "Hardware Requirements"
description: "Hardware Requirements"
sidebar_position: 20
---

# Hardware Requirements

This topic covers hardware requirements for Netwrix Auditor installation and provides estimations of
the resources required for Netwrix Auditor deployment.

The actual hardware requirements will depend on the number of activities collected per day in
addition to the number of files and folders monitored.

**CAUTION:** To keep your systems safe, Auditor should not be exposed to inbound access from the
internet.

## Full Installation

The full installation includes both Auditor Server and Auditor Client. This is the initial product
installation.

Requirements provided in this section apply to a clean installation on a server without any
additional roles or third-party applications installed.

Use these requirements only for initial estimations and be sure to correct them based on your data
collection and monitoring workflow.

You can deploy Auditor on a virtual machine running Microsoft Windows guest OS on the corresponding
virtualization platform, in particular:

- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV

Auditor supports only Windows OS versions listed in the [Software Requirements](/docs/auditor/10.7/requirements/software.md) topic.

Netwrix Auditor and SQL Server instance will be deployed on different servers.

Requirements below apply to Netwrix Auditor server.

| Hardware component | Evaluation, PoC or starter environment | Regular environment (up to 1m ARs\*/day) | Large environment (1-10m ARs\*/day)       | XLarge environment (10m ARs\*/day or more)                       |
| ------------------ | -------------------------------------- | ---------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| CPUs               | 2 cores                                | 4 CPUs                                   | 8 CPUs                                    | 16 CPUs                                                          |
| RAM                | 8 GB                                   | min 8 GB                                 | min 16 GB                                 | 64 GB                                                            |
| Disk space         | 100 GB—System drive 100 GB—Data drive  | 100 GB—System drive 400 GB—Data drive    | 500 GB—System drive\*\* 1.5 TB—Data drive | Up to 1 TB—System drive\*\* Up to several TB per year—Data drive |
| Others             | —                                      | —                                        | Network capacity 1 Gbit                   | Network capacity 1 Gbit                                          |

\* — ARs stands for Activity Records, that is, Netwrix-compatible format for the audit data. See
[Activity Records](/docs/auditor/10.7/api/postdata/activityrecords.md)[Activity Records](/docs/auditor/10.7/api/postdata/activityrecords.md)
for more details.

\*\* — By default, the Long-Term Archive and working folder are stored on a system drive. To reduce
the impact on the system drive in large and xlarge environments, Netwrix recommends storing your
Long-Term Archive and working folder on a data drive and plan for their capacity accordingly. For
details, see:

- [File-Based Repository for Long-Term Archive](/docs/auditor/10.7/requirements/longtermarchive.md)
- [Working Folder](/docs/auditor/10.7/requirements/workingfolder.md)

Netwrix Auditor informs you if you are running out of space on a system disk where the Long-Term
Archive is stored by default. You will see related events in the Health log once the free disk space
starts approaching the minimum level. When the free disk space is less than 3 GB, the Netwrix
services responsible for audit data collection will be stopped.

For detailed information about hardware requirements for a standalone SQL Server, refer to the
following Microsoft article:
[SQL Server: Hardware and software requirements](https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-2019?view=sql-server-ver16)

**NOTE:** In larger environments, SQL Server may become underprovisioned on resources. For
troubleshooting such cases, refer to the [Sample Deployment Scenarios](/docs/auditor/10.7/requirements/deploymentscenarios.md)
topic.

Additional Sizing Information for File Data Source

Use this table to determine the requirements for file servers monitoring based on the number of
files in the system. These requirements will add up to the requirements for other monitoring plans.

| Netwrix Auditor                          | Per 1 Million Files | Per 5 Million Files |
| ---------------------------------------- | ------------------- | ------------------- |
| CPUs                                     | 0.2 CPUs            | 1.0 CPUs            |
| RAM (Activity Records only)              | 0.125 GB RAM        | 0.625 GB RAM        |
| RAM (Activity Records and State-in-Time) | 0.5 GB RAM          | 2.5 GB RAM          |

If you are monitoring both Active Directory and Windows File Servers data sources, you calculate
using the requirements for AD, and then add the requirements for your File Servers.

For example, you have a large Active Directory environment which requires 8 cores and 16 GB RAM. Add
the requirements for 5 million files which are 1 CPU and 2.5 GB RAM. Therefore, you will need 9 CPUs
and 18.5 GB RAM.

If you need assistance calculating the number of files you have and already using Netwrix Auditor,
this information is displayed in the Environment Stats located on the Home Screen.

If you have not already started using Netwrix Auditor, you can download the Resource Estimation Tool
by clicking
[the download link](https://releases.netwrix.com/products/auditor/10.7/auditor-resource-estimation-tool-1.2.39.zip).

## Client Installation

The client installation includes only Netwrix Auditor client console that enables you to connect to
the Netwrix Auditor Server installed remotely.

Virtual deployment is recommended.

| Hardware component | Minimum required                                 | Recommended                                                      |
| ------------------ | ------------------------------------------------ | ---------------------------------------------------------------- |
| CPUs               | Any modern CPU (e.g. Intel or AMD 32 bit, 2 GHz) | Any modern 2 CPUs (e.g. Intel Core 2 Duo 2x or 4x 64 bit, 3 GHz) |
| RAM                | 2 GB                                             | 8 GB                                                             |
| Disk space         | 200 MB                                           |                                                                  |
