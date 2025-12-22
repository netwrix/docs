---
title: "Exchange Solution"
description: "Exchange Solution"
sidebar_position: 80
---

# Exchange Solution

The core components for Netwrix Access Analyzer (formerly Enterprise Auditor) are the Access
Analyzer Console server, SQL Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/12.0/requirements/overview.md) topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

See the following topics for target environment requirements:

- [Target Exchange Servers Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/exchange/target.md)
- [Target Exchange Online Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/exchange/exchangeonline/exchangeonline.md)

## Exchange Solution Requirements on the Access Analyzer Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Extra Large – Large       | Medium – Small          |
| ----------- | ------------------------- | ----------------------- |
| Definition  | ~50,000-120,000 Mailboxes | ~1,000-10,000 Mailboxes |
| RAM         | 16+ GB                    | 8+ GB                   |
| Cores       | 8 CPU                     | 4 CPU                   |
| Disk Space  | 120 GB                    | 120 GB                  |

:::note
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).
:::


**Sensitive Data Discovery Auditing Requirement**

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Permissions to Run Exchange Scans**

The following are additional requirements for the Access Analyzer Console server specific to running
the Exchange Solution:

- Outlook should not be installed
- StealthAUDIT MAPI CDO installed (for MAPI- based data collectors). See the
  [StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/12.0/install/mapicdo/installation.md)
  topic for additional information.
- Exchange MAPI CDO installed (for MAPI- based data collectors)
- For targeting Exchange 2010 – Exchange Management Tools 2010 installed on the Access Analyzer
  Console server
- For Targeting Exchange Online – PowerShell Execution Policy set to unrestricted for both 64-bit
  and 32-bit versions

**Exchange Online Modern Authentication**

The following prerequisites are required to use Modern Authentication for Exchange Online in Access
Analyzer.

- Exchange Online Management v3.4.0

    - You can install this module with the following command:

        ```
        Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.4.0
        ```

- Create a self-signed certificate that will be used by Access Analyzer for Modern Authentication

## Exchange Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Extra-Large        | Large             | Medium            | Small            |
| ------------------------ | ------------------ | ----------------- | ----------------- | ---------------- |
| Definition               | ~120,000 Mailboxes | ~50,000 Mailboxes | ~10,000 Mailboxes | ~1,000 Mailboxes |
| RAM                      | 64 GB              | 16 GB             | 16 GB             | 8 GB             |
| Cores                    | 16 CPU             | 16 CPU            | 8 CPU             | 4 CPU            |
| Number of Disks          | 4                  | 4                 | 4                 | 4                |
| Operating System Disk    | 160 GB             | 160 GB            | 160 GB            | 160 GB           |
| SQL Database Disk        | 1.25 TB            | 650 GB            | 415 GB            | 325 GB           |
| SQL Transaction Log Disk | 650 GB             | 650 GB            | 325 GB            | 325 GB           |
| SQL TEMP DB Disk         | 325 GB             | 325 GB            | 325 GB            | 325 GB           |
