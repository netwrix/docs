---
title: "CIFS / SMB File Share"
description: "Supported platforms, permissions, and network ports for CIFS/SMB scanning"
sidebar_position: 10
---

# CIFS / SMB File Share

The CIFS / SMB connector reads file servers over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the target file server.

## Supported versions

- Windows Server 2012 R2 and later
- Any SMB-compatible server (Samba, network-attached storage (NAS) appliances)

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must have:

- Read access to the shares you want to scan
- Read permission on object security descriptors (to enumerate ACLs)

### Ports

| Port | Protocol | Description |
|------|----------|-------------|
| 445 | TCP | SMB file sharing |

## Set up

To add a Windows file server or SMB-compatible server to Access Analyzer, see [Set Up File Server Source Group](../../gettingstarted/file-servers/set-up-source-group.md).

## DFS namespaces

For domain-based Distributed File System (DFS) namespaces, the scan targets the default domain controller for the domain. For standalone namespaces or multiple namespaces, add the server or servers hosting the namespace directly to the source group.

## Sensitive Data Discovery

Sensitive Data Discovery (SDD) is handled by the scanner infrastructure. No additional software is required on the target file server.
