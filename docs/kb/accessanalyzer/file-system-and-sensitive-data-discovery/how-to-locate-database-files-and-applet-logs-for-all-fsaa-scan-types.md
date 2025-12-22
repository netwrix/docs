---
description: >-
  Describes Tier 2 database and log locations for FSAA scan modes in Netwrix
  Access Analyzer, plus conditions for sending Tier 2 databases, scan run logic,
  GUID mismatches, and moving FSAA folders.
keywords:
  - FSAA
  - Tier 2
  - database files
  - applet logs
  - Netwrix Access Analyzer
  - proxy mode
  - local mode
  - sensitive data logs
  - RPC logs
products:
  - access-analyzer
sidebar_label: How to Locate Database Files and Applet Logs for A
tags:
  - file-system-and-sensitive-data-discovery
title: "How to Locate Database Files and Applet Logs for All FSAA Scan Types"
knowledge_article_id: kA04u0000000IvJCAU
---

# How to Locate Database Files and Applet Logs for All FSAA Scan Types

## Overview

This article describes Tier 2 database and log locations for the various FSAA scans (Netwrix Access Analyzer 9.0+). Additionally, this document covers the following related topics:

- Conditions for Sending Tier 2 Databases from Netwrix Access Analyzer Console to Proxy Server or Applet Host in 9.0+ FSAA
- How FSAA Determines if a Scan Should Run
- Tier 1 vs. Tier 2 GUID Mismatch
- Moving the Location of the FSAA Folder on Proxy Servers or Applet Hosts

## Instructions

There are several different scan modes that the FS Data Collector can leverage. The location of the Tier 2 databases and logs will vary, depending on that mode.

This article assumes that Netwrix Access Analyzer is installed with a path ending in ...\Netwrix Enterprise Auditor\. Otherwise, the FSAA folder will be located in ...\Netwrix Enterprise Auditor\FSAA in the parent folder of the installation directory.

The registry key containing the `SAINSTALLDIR` value is: `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment`

That registry key’s existence is checked when the Netwrix Access Analyzer applet is deployed. If it doesn’t exist, then the default path for `SAINSTALLDIR` is used: `C:\Program Files (x86)\STEALTHbits\Netwrix Enterprise Auditor`

### Log Types

Below are various logs associated with FSAA scans and jobs. The locations of these logs are included with the scan mode information to follow. In addition to these logs, Tier 2s should be included for relevant hosts when troubleshooting scan or bulk import issues.

- **Applet Logs** – Often contains the most important troubleshooting information. Host scanning is performed by the applet, and these logs contain information, warnings, and errors experienced during FSAA scans. Applet logs should be included when troubleshooting scan and bulk import issues.
- **RPC Logs** – Contains information, warnings, and errors related to communication (e.g., network, I/O) during scans. RPC logs should be included when troubleshooting scan and communication issues.
- **Job Logs** – Contains information, warnings, and errors related to Netwrix Access Analyzer Console setup before the FSAA applet is launched. Job logs may also contain certain scan messages, although applet logs typically have more information in that regard. All bulk import messages are also included in the job logs. Job logs should be included when troubleshooting scan and bulk import issues.
- **Sensitive Data Logs** – There are two new logs in v10.0+ that include information about sensitive data scans. These are ScannerLib and Extractor. Both logs will be in a host’s specific FSAA directory and should be included when troubleshooting issues regarding sensitive data. When running sensitive data scans with multiple threads, there will be one ScannerLib and one Extractor log per thread. By default, FSAA sensitive data scans run with four threads, so there will be four ScannerLib logs and four Extractor logs.

### Common Scenarios & What to Include

In all troubleshooting scenarios, various database and log files will be requested. Please provide all requested materials, as each piece provides important troubleshooting information. If unsure of what to provide, at a minimum please provide each affected host’s `FSAA\` folder.

In various specific troubleshooting scenarios, the following database and log files must be provided:

- **Scan & Network Issues** – Applet logs, job logs, RPC logs
- **Data Validity Concerns** – Tier 2 database files, screenshot showing data validity concern
- **Bulk Import Issues** – Tier 2 database files, job logs
- **Sensitive Data Issues** – Applet logs, job logs, and sensitive data logs (ScannerLib/Extractor)

### Local Mode

A persistent network connection is used to collect data from the target and send it to the Netwrix Access Analyzer Console server.

Tier 2 databases are created locally on the Netwrix Access Analyzer Console while the scan is running, in per-host folders in the `FSAA` directory.

Applet logs are stored on the Netwrix Access Analyzer Console in: `FSAA\`

RPC logs are stored on the Netwrix Access Analyzer Console in: `FSAA` for the parent RPC logs, `FSAA\` for each child RPC log

Job logs are stored on the Netwrix Access Analyzer Console in: `%SAINSTALLDIR%\Jobs\Output`

### Applet Mode

An applet is deployed to the Windows scan target, and the scan runs on the target instead of collecting data over the network. For non-Windows hosts, an active network connection is used to collect data from the target and send it to the Netwrix Access Analyzer Console server.

Tier 2 databases are sent to the applet host if they exist on the Netwrix Access Analyzer Console server. Otherwise, they are created on the applet host. In either case, Tier 2s are then zipped and copied to the Netwrix Access Analyzer Console’s per-host `FSAA` folders when the target scan is finished.

Applet logs are stored in `FSAA\` folders on each applet host. The logs are copied to the Netwrix Access Analyzer Console when the target scan is finished.

RPC logs are stored in the `FSAA` folder and in `FSAA\` folders on each applet host. The logs are copied to the Netwrix Access Analyzer Console when the target scan is finished.

Job logs are stored on the Netwrix Access Analyzer Console in: `%SAINSTALLDIR%\Jobs\Output`

### Proxy Mode

Scans are performed from a remote proxy server to help distribute resources and localize scans geographically to improve performance for large deployments and slow links. Proxy servers act like a Netwrix Access Analyzer Console scanning in local mode.

Tier 2 databases are sent to the proxy server if they exist on the Netwrix Access Analyzer Console server. Otherwise, they are created on the proxy server. Tier 2s are then zipped and copied to the Netwrix Access Analyzer Console’s per-host `FSAA` folders when the target scans are finished.

Proxy Mode has two workflow options:

- **Standard Proxy** – An applet is sent from the Netwrix Access Analyzer Console to the proxy server and started through a remote scheduled task.
- **FSAA as a Service** – FSAA is installed on the proxy server as a service, rather than sending a proxy applet during each scan.

In both modes, FSAA uses a persistent network connection between the proxy server and the target hosts for collecting data.

Applet logs are stored in `FSAA\` folders on the proxy server. The logs are copied to the Netwrix Access Analyzer Console when the target scan is finished.

RPC logs are stored in the `FSAA` folder and in `FSAA\` folders on the proxy server. The logs are copied to the Netwrix Access Analyzer Console when the target scan is finished.

Job logs are stored on the Netwrix Access Analyzer Console in: `%SAINSTALLDIR%\Jobs\Output`

## Related Topics

### Conditions for Sending Tier 2 Databases from Netwrix Access Analyzer Console to Proxy Server or Applet Host in 9.0+ FSAA

FSAA collects the GUID, USN, and ScanCompleted values from the `TBL_FSAA_Sequence` table on the proxy server or applet host (e.g., `RemoteGUID`, `RemoteUSN`, and `RemoteScanCompleted`). FSAA also collects the GUID, USN, and ScanCompleted values from `TBL_FSAA_Sequence` table from the local Netwrix Access Analyzer Console (e.g., `LocalGUID`, `LocalUSN`, and `LocalScanCompleted`).

If one of the following conditions is true, then FSAA sends the Tier 2s from the Netwrix Access Analyzer Console to the proxy server or applet host:

- RemoteGUID is blank
- RemoteGUID is not equal to LocalGUID
- RemoteUSN is not equal to LocalUSN
- RemoteScan is not complete and local Tier 2 is newer than remote Tier 2 (based on `TBL_FSAA_StatusScanTime`)
- Remote Tier 2s have an older schema version

If sent, FSAA automatically unzips the Tier 2s on the proxy server or applet host. The Tier 2s on the proxy server or applet host are only replaced with Tier 2s from the zip if a Tier 2 from the zip is newer than proxy/applet Tier 2.

### How FSAA Determines if a Scan Should Run

FSAA first checks for the following conditions:

- No Tier 2s exist
- Previous scan was not completed, and Tier 2 databases are older than the value for Restart Incomplete Scan After... (or if it is set to 0)
- Tier 2 databases are older than the value for Rescan Unimported Hosts After... (or if it is set to 0)

If any of the above conditions are met, then FSAA will start a new scan, unless one of the following conditions is met:

- Tier 1's GUID no longer matches Tier 2's GUID, indicating Tier 1 and Tier 2 databases do not match
- Tier 2's USN is greater than Tier 1's USN, indicating there is data for bulk import

### Tier 1 vs. Tier 2 GUID Mismatch

Tier 1 and Tier 2 databases need to match, as FSAA uses numbers to identify objects such as folders or users. If Tier 1 and Tier 2 GUIDs do not match, FSAA cannot confirm that those numbers represent the same object(s) in Tier 1 and Tier 2 (making the scan data invalid).

If FSAA detects a GUID mismatch upon import, FSAA will throw an error indicating that and provide instructions on how to reset Tier 1. For assistance, contact Netwrix Support and halt all further actions (support@stealthbits.com, https://www.stealthbits.com/support).

### Moving the Location of the FSAA Folder on Proxy Servers or Applet Hosts

1. Move the `FSAA` folder on the target host to the new location. The location must be within a folder named `Netwrix Enterprise Auditor`.
2. Update the `SAINSTALLDIR` Environment Variable on the target host to point to the new `Netwrix Enterprise Auditor` folder from the previous step.

- To open Environment Variables in Windows, search the Start Menu for Environment Variables and open **Edit the System Environment Variables**.
- Click **Environment Variables** near the bottom of the System Properties > **Advanced** tab.
- Highlight `SAINSTALLDIR` under System Variables and click **Edit**.

The default path for `SAINSTALLDIR` is: `C:\Program Files (x86)\STEALTHbits\Netwrix Enterprise Auditor\`

The FSAA Data Collector references: `%SAINSTALLDIR%\..\Netwrix Enterprise Auditor\FSAA`

That means it will remove the last folder from the `SAINSTALLDIR` path and will add `Netwrix Enterprise Auditor\FSAA` (e.g., if `SAINSTALLDIR` is set to `D:\Temp`, then FSAA Tier 2s will be stored in `D:\Netwrix Enterprise Auditor\FSAA` in per-host folders).
