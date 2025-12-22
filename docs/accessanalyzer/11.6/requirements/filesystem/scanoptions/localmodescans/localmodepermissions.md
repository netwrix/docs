---
title: "Local Mode Permissions"
description: "Local Mode Permissions"
sidebar_position: 10
---

# Local Mode Permissions

When File System scans are run in local mode, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network. The data is collected in the
SQLite database(s), or Tier 2 database(s), on the Enterprise Auditor Console server, and then
imported into theEnterprise Auditor database, or Tier 1 database, on the SQL Server.

The account used to run either a manual execution or a scheduled execution of the File System scans,
must have the following permissions on the StealthAUDIT Console server:

- Group membership in either of the following local groups:
    - Backup Operators
    - Administrators

Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
    - Power Users
    - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

In order to collect data on administrative shares and local policies (logon policies) for a Windows
target, the credential must have group membership in the local Administrators group.

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the Enterprise Auditor Console server. This is required by either the user
account running the Enterprise Auditor application, when manually executing jobs within the console,
or the Schedule Service Account assigned within Enterprise Auditor, when running jobs as a scheduled
tasks.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host.  By default, SDD scans are configured to run two concurrent threads.
For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads,
then an extra 32 GB of RAM are required (8x2x2=32).

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the
[Local Mode Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/localmodescans/localmodeports.md)
topic for firewall rule information.
