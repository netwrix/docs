---
title: "Linux Target Requirements"
description: "Permissions and ports needed to run Enterprise Auditor file system scans against Linux servers over SMB/CIFS or NFSv3."
sidebar_position: 55
---

# Linux Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and Sensitive Data Discovery Auditing scans on Linux servers, such as Red Hat® Enterprise Linux® (RHEL). Enterprise Auditor scans a Linux server over the network, through SMB/CIFS shares published by Samba or through NFSv3 exports.

Enterprise Auditor doesn't support Activity Auditing (FSAC) scans for Linux servers. Review Linux file activity in Netwrix Activity Monitor.

## Supported Protocols

- SMB/CIFS – Requires Samba shares
- NFS – Requires NFSv3 exports. Enterprise Auditor can't scan NFSv4-only exports.

Select the protocols to scan on the Scan Settings page of the FileSystemAccess Data Collector Wizard. See the [FSAA: Scan Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/scansettings.md) topic for additional information.

A folder shared through both Samba and NFS appears twice in the results, once as a share and once as an NFS export.

## Access & Sensitive Data Auditing Permissions

**SMB/CIFS (Samba)**

The account in the Connection Profile must be a valid user of the share and have read and execute permissions on every folder to scan. Samba checks both the share settings and the Linux file system permissions, so the account must pass both.

:::note
Read permission alone isn't enough. With read but not execute permission on a folder, the scan lists the folder but leaves its subfolders out of the results, with no warning.
:::

**NFSv3**

NFS scans don't use the Connection Profile, because NFSv3 doesn't authenticate with a password. Access Analyzer connects to the export as the root user. The Linux server must allow the following:

- The export allows the IP address of the host that runs the scan. A read-only export is enough.
- The scan can read every folder to scan, in one of two ways:
    - The export uses `no_root_squash`, so the server treats the scan as root
    - The export uses the default `root_squash`, which maps the scan to the `nobody` user, and "other" has read and execute permission on each folder

:::note
When the scan can't read a folder, the job log shows the error "Unable to get subfolders for `<path>`, access denied". The scan continues, and the export appears in the results with nothing under it.
:::

See the [Linux Server Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/linux/access.md) topic for configuration steps.

:::note
These permissions are in addition to those needed for the selected scan mode. See the [File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md) topic for additional information.
:::

## Access & Sensitive Data Auditing Port Requirements

The following firewall ports must be open inbound on the Linux server from the host that runs the scan:

| Communication Direction       | Protocol | Ports | Description                         |
| ----------------------------- | -------- | ----- | ----------------------------------- |
| Scanning host to Linux server | TCP      | 445   | SMB, for SMB/CIFS scans             |
| Scanning host to Linux server | TCP      | 111   | rpcbind (portmapper), for NFS scans |
| Scanning host to Linux server | TCP      | 20048 | mountd, for NFS scans               |
| Scanning host to Linux server | TCP      | 2049  | nfsd, for NFS scans                 |

Enterprise Auditor connects to port 111 first, then asks rpcbind which ports mountd and nfsd use. Ports 20048 and 2049 are the RHEL defaults.

If the scanning host can't reach mountd, Enterprise Auditor writes "Could not get list of NFS exports" to the FSAA log, skips NFS for that host, and continues with SMB/CIFS if you select that protocol.
