---
title: "File Server Scanning Overview"
description: "Overview of file server scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# File Server Scanning Overview

Access Analyzer scans file servers over SMB to map share permissions, folder-level ACLs, and file ownership across your environment. It can also scan file contents to locate sensitive data and, if activity monitoring is configured, track file access events over time. Reports surface open access, broken inheritance, direct user permissions, and sensitive data exposure — giving security and compliance teams the visibility they need to reduce unnecessary access and meet data protection requirements.

## Supported platforms

Access Analyzer scans any SMB-compatible file server. For platform-specific requirements, see the connector page for your environment:

- [CIFS / SMB File Share](../../connectors/file-servers/cifs.md) — Windows file servers and Samba
- [NetApp ONTAP](../../connectors/file-servers/netapp.md)
- [Dell Isilon / PowerScale](../../connectors/file-servers/isilon-powerscale.md)
- [Dell Unity](../../connectors/file-servers/dell-unity.md)
- [Dell EMC VNX](../../connectors/file-servers/vnx.md)
- [Dell EMC Celerra](../../connectors/file-servers/celerra.md)

## Prerequisites

Before setting up a file server source group, confirm that your environment meets the requirements below. The source group wizard connects to your file servers over SMB, so the Access Analyzer server must be able to reach them on the network and a service account must be available with read access to the shares you want to scan.

### Service account

Access Analyzer uses a service account with a username and password to authenticate against your file servers over SMB and enumerate shares, permissions, and file contents. The account needs read access to the shares and permission to read object security descriptors.

See [Username and Password](../../configurations/service-accounts/username-password.md) to create the service account and [CIFS / SMB File Share](../../connectors/file-servers/cifs.md) for the full permission requirements.

### Network requirements

| Port | Protocol | Destination |
|------|----------|-------------|
| 445 | TCP | File servers in the source group |

### Before you begin

- The hostname or IP address of each file server you plan to add.
- A Username and Password service account created in Access Analyzer with read access to the target file servers.
- Network connectivity from the Access Analyzer server to port 445 on each file server confirmed.
