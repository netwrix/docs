---
title: "Dell Unity"
description: "Supported platforms, permissions, and network ports for Dell Unity CIFS/SMB scanning"
sidebar_position: 40
---

# Dell Unity

The Dell Unity connector reads file shares over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the storage system.

Dell Unity serves CIFS/SMB shares through NAS servers. The CIFS protocol must be configured on each NAS server you want to scan.

## Supported versions

- Unity OE 4.x and later

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must have:

- Read access to the shares you want to scan
- Read permission on object security descriptors (to enumerate ACLs)

The account can be a local user on the NAS server or a domain account from an Active Directory domain joined to the NAS server.

### Ports

| Port | Protocol | Description |
|------|----------|-------------|
| 445 | TCP | SMB file sharing |

## Set up

To add a Dell Unity NAS server to Access Analyzer, see [Set Up File Server Source Group](../../gettingstarted/file-servers/set-up-source-group.md). Add each NAS server as a separate server entry using its IP address or hostname. The connector connects to each NAS server independently.
