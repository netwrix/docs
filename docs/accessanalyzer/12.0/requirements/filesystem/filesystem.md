---
title: "File System Solution"
description: "File System Solution"
sidebar_position: 90
---

# File System Solution

The core components for Netwrix Access Analyzer (formerly Enterprise Auditor) are the Access
Analyzer Console server, SQL Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/12.0/requirements/overview.md) topic for the core requirements.

The File System solution can be configure to use Proxy servers either an applet or as a service. See
the [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic for additional information.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

See the following topics for target environment requirements:

- [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
- [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md)

## File System Solution Requirements on the Access Analyzer Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Enterprise                     | Extra-Large                         | Large                               | Medium                              | Small                               |
| ----------- | ------------------------------ | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| Definition  | 800+ million files and folders | Up to 800 million files and folders | Up to 500 million files and folders | Up to 200 million files and folders | Up to 100 million files and folders |
| RAM         | 24 GB                          | 24 GB                               | 16 GB                               | 12 GB                               | 4 GB                                |
| Cores       | 8 CPU                          | 8 CPU                               | 8 CPU                               | 4 CPU                               | 2 CPU                               |
| Disk Space  | 1.5 TB                         | 770 GB                              | 470 GB                              | 270 GB                              | 130 GB                              |

The above recommended disk space sizing information is based on the needs of Access Analyzer as well
as the File System solution for running Permission scans with default configuration (500 MB per
million files and folders), that means no tag collection, file-level scanning, activity, or
sensitive data.

- For tag collection, add 125 MB per million documents to the totals above
- For activity collection, add 250 MB per million files and folders and another 125 MB per million
  activity events to the totals above
- For sensitive data collection, add 500 MB per million files and folders and another 1%-10% of the
  total size of the documents scanned for sensitive data (depending on targeted document types and
  selected criteria) to the totals above

For example, in order to scan 200 million files and folders, of which 10 million files will be
scanned for tag collection and sensitive data with a total size of 6 TB, you would need: 160 GB for
permission collection + 1.25 GB for tag collection (10x125 MB) + 100 GB for sensitive data
collection (200x500 MB) + 600 GB additional for sensitive data collection (10% of 6 TB) = 861.25 GB
total disk space.

:::note
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By
default, SDD scans are configured to run two concurrent threads. For example, if the job is
configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are
required (8x2x2=32).
:::


**Additional Server Considerations for File System Scans**

If Data Activity Tracking for NAS is required or if NetApp Filers running Clustered Data ONTAP are
in scope, reducing latency between the scanning server and the target device is highly recommended.
Additional hardware may be required, especially if the target NAS devices are not collocated with
the Access Analyzer Console server.

**Sensitive Data Discovery Auditing Requirement**

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


Permissions on the Console Server to Run File System Scans

In most cases the Access Analyzer user is a member of the local Administrators group on the
application server. However, if the Role Based Access usage is employed, then the user assigned the
role of Job Initiator (for manual execution) or the credential used for the Schedule Service Account
(for scheduled execution) must have the following permissions to execute File System scans in local
mode, applet mode, or proxy mode with applet:

- Group membership in either of the following local groups:

    - Backup Operators
    - Administrators

These permissions grant the credential the ability to create a high integrity token capable of
leveraging the “Back up files and directories” from where the Access Analyzer executable is run.

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory. This is required by either the user account running the Access Analyzer
application, when manually executing jobs from the console, or the Schedule Service Account assigned
within Access Analyzer, when running jobs as a scheduled tasks.

See the [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic and the
[File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md) topic for permissions required to scan
the environment.

## File System Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Enterprise                     | Extra-Large                         | Large                               | Medium                              | Small                               |
| ------------------------ | ------------------------------ | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| Definition               | 800+ million files and folders | Up to 800 million files and folders | Up to 500 million files and folders | Up to 200 million files and folders | Up to 100 million files and folders |
| RAM                      | 64 GB                          | 64 GB                               | 32 GB                               | 16 GB                               | 8 GB                                |
| Cores                    | 16 CPU                         | 16 CPU                              | 12 CPU                              | 8 CPU                               | 4 CPU                               |
| Number of Disks          | 4                              | 4                                   | 4                                   | 4                                   | 4                                   |
| Operating System Disk    | 160 GB                         | 160 GB                              | 160 GB                              | 160 GB                              | 160 GB                              |
| SQL Database Disk        | 1.6 TB                         | 830 GB                              | 530 GB                              | 400 GB                              | 170 GB                              |
| SQL Transaction Log Disk | 390 GB                         | 200 GB                              | 170 GB                              | 130 GB                              | 70 GB                               |
| SQL TEMP DB Disk         | 1 TB                           | 530 GB                              | 400 GB                              | 270 GB                              | 130 GB                              |

**Additional SQL Server Requirements for File System Scans**

The following are additional requirements for the SQL Server specifically for the File System
solution:

- For File-level Auditing – SQL Server standard edition or higher required
- For File Activity Auditing – SQL Server Enterprise Edition is required
