---
title: "Dell EMC Celerra"
description: "Supported platforms, permissions, and network ports for Dell EMC Celerra CIFS/SMB scanning"
sidebar_position: 50
---

# Dell EMC Celerra

The Dell EMC Celerra connector reads file shares over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the storage system.

Dell EMC Celerra serves CIFS/SMB file shares through Data Movers. The CIFS service must be licensed and configured on each Data Mover you want to scan. Add each Data Mover as a separate server entry in the source group, using its IP address or hostname.

## Supported versions

- Celerra series (DART OS 6.x and later)

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must have:

- Read access to the shares you want to scan
- Read permission on object security descriptors (to enumerate ACLs)

The account can be a local user on the Data Mover or a domain account from an Active Directory domain joined to the Data Mover.

### Ports

| Port | Protocol | Description |
|------|----------|-------------|
| 445 | TCP | SMB file sharing |
