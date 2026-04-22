---
title: "Dell EMC VNX"
description: "Supported platforms, permissions, and network ports for Dell EMC VNX file server CIFS/SMB scanning"
sidebar_position: 60
---

# Dell EMC VNX

The Dell EMC VNX connector reads file shares over SMB to collect share permissions, folder and file ACLs, and file contents for sensitive data classification. The connector doesn't require agent installation on the storage system.

Dell EMC VNX serves CIFS/SMB file shares through Data Movers. The CIFS service must be licensed and configured on each Data Mover you want to scan. Add each Data Mover as a separate server entry in the source group, using its IP address or hostname.

## Supported versions

- VNX2 series (NAS code 8.x)
- VNX series (NAS code 7.x)

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
