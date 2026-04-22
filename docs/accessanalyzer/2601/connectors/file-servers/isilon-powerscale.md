---
title: "Dell Isilon / PowerScale"
description: "Supported platforms, permissions, and network ports for Dell Isilon and PowerScale CIFS/SMB scanning"
sidebar_position: 30
---

# Dell Isilon / PowerScale

The Dell Isilon / PowerScale connector reads file shares over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the storage system.

Dell Isilon / PowerScale (based on the OneFS operating system) organizes SMB shares within access zones. The SMB service must be enabled on each access zone you want to scan.

## Supported versions

- OneFS 8.0 and later

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must have:

- Read access to the shares you want to scan
- Read permission on object security descriptors (to enumerate ACLs)

The account can be a local user on the OneFS cluster or a domain account from an Active Directory domain joined to the access zone.

### Ports

| Port | Protocol | Description |
|------|----------|-------------|
| 445 | TCP | SMB file sharing |

## Set up

To add a Dell Isilon / PowerScale access zone to Access Analyzer, see [Set Up File Server Source Group](../../gettingstarted/file-servers/set-up-source-group.md). Add each access zone as a separate server entry using the access zone's IP address or hostname. The connector connects to each access zone independently.
