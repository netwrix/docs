---
title: "Local Mode Permissions"
description: "Local Mode Permissions"
sidebar_position: 10
---

# Local Mode Permissions

When File System scans are run in local mode, it means all of the data collection processing is conducted by the Access Analyzer Console server across the network. The data is collected in the SQLite database(s), or Tier 2 database(s), on the Access Analyzer Console server, and then imported into the Access Analyzer database, or Tier 1 database, on the SQL Server.


The account used to run either a manual execution or a scheduled execution of the File System scans, must have the following permissions on the Access Analyzer Console server:

- Group membership in either of the following local groups:
  - Backup Operators
  - Administrators


Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the installation directory on the Access Analyzer Console server. This is required by either the user account running the Access Analyzer application, when manually executing jobs within the console, or the Schedule Service Account assigned within Access Analyzer, when running jobs as a scheduled tasks.


If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.  By default, SDD scans are configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).


Firewall rules must be configured to allow for communication between the applicable servers. See the [Local Mode Port Requirements](https://docs.netwrix.com/docs/accessanalyzer/11_6/requirements/filesystem/scanoptions/local-mode-scans/localmodeports) topic for firewall rule information.

See the [Local Mode Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/local-mode-scans/localmodeports.md) topic for firewall rule information.

## Accounts Used
- **Job Execution:** Scheduled Task Account or Console User (launches the job)
- **Target Access:** Connection Profile Account (always used for scanning)

The account used in the connection profile associated with the File System scan jobs, should have the appropriate permissions required to access the target host. See the [File System Supported Platforms](https://docs.netwrix.com/docs/accessanalyzer/11_6/requirements/filesystem/filesystems/) page for specific requirements per target file system.

## How do I determine if I’m using Local Mode scanning?

The best way to verify if you’re using Local Mode scanning is via the FSAA Data Collector Query Settings > [Scan Server Selection](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/scanserverselection) page:

- **Automatic** — If the target host being scanned is a NAS/Non-Windows host, a Local Mode scan will be utilized.
- **Local Server** — This will utilize a Local Mode scan, regardless of the OSType of the target host.