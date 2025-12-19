---
title: "Local Mode Permissions"
description: "Local Mode Permissions"
sidebar_position: 10
---

# Local Mode Permissions

When File System scans are run in local mode, it means all of the data collection processing is
conducted by the Access Analyzer Console server across the network. The data is collected in the
SQLite database(s), or Tier 2 database(s), on the Access Analyzer Console server, and then imported
into the Access Analyzer database, or Tier 1 database, on the SQL Server.

The account used to run either a manual execution or a scheduled execution of the File System scans,
must have the following permissions on the Access Analyzer Console server:

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
installation directory on the Access Analyzer Console server. This is required by either the user
account running the Access Analyzer application, when manually executing jobs within the console, or
the Schedule Service Account assigned within Access Analyzer, when running jobs as a scheduled
tasks.

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.  By default, SDD scans
are configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts
at a time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the [Local Mode Port Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/local-mode-scans/localmodeports.md) topic for firewall rule information.
