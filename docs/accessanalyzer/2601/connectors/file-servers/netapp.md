---
title: "NetApp ONTAP"
description: "Supported platforms, permissions, and network ports for NetApp ONTAP CIFS/SMB scanning"
sidebar_position: 20
---

# NetApp ONTAP

The NetApp ONTAP connector reads file shares over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the storage system.

NetApp ONTAP serves CIFS/SMB shares through Storage Virtual Machines (SVMs). Each SVM has its own CIFS server that the connector connects to independently. The CIFS service must be licensed and enabled on each SVM you want to scan.

## Supported versions

- ONTAP 9.0 and later
- ONTAP 8.3 with CIFS license

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must have:

- Read access to the shares you want to scan
- Read permission on object security descriptors (to enumerate ACLs)

The account can be a local ONTAP user or a domain account from an Active Directory domain joined to the SVM.

### Ports

| Port | Protocol | Description |
|------|----------|-------------|
| 445 | TCP | SMB file sharing |

## Set up

To add a NetApp ONTAP SVM to Access Analyzer, see [Set Up File Server Source Group](../../gettingstarted/file-servers/set-up-source-group.md). Add each SVM as a separate server entry using the SVM's CIFS server hostname or IP address. The connector connects to each SVM independently.

## Known behavior

NetApp ONTAP may return invalid timestamp values on some systems due to a Year 2038 overflow issue in the ONTAP CIFS implementation. Access Analyzer detects and handles this automatically — affected timestamps are recorded as empty rather than causing a scan error.
