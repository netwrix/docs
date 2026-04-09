---
title: "File Server Scanning Overview"
description: "Overview of file server scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# File Server Scanning Overview

Access Analyzer scans file servers over SMB to map share permissions, folder-level ACLs, and file ownership across your environment. It can also scan file contents to locate sensitive data and, if activity monitoring is configured, track file access events over time. Reports surface open access, broken inheritance, direct user permissions, and sensitive data exposure — giving security and compliance teams the visibility they need to reduce unnecessary access and meet data protection requirements.

## Prerequisites

Before setting up a file server source group, confirm that your environment meets the requirements below. The source group wizard connects to your Windows file servers over SMB, so the Access Analyzer server must be able to reach them on the network and a domain service account must be available with the permissions required for the scan types you plan to enable.

### Service Account

Access Analyzer uses a domain service account to authenticate against your Windows file servers over SMB and enumerate shares, permissions, and file contents. The account must be a member of the same domain as the target file servers. The specific permissions required depend on the scan types you enable — access scanning and sensitive data scanning have different requirements.

See [Username and Password](../../configurations/service-accounts/username-password.md) to create the service account and [CIFS / SMB File Share](../../connectors/file-servers/cifs.md) for the full list of required permissions by scan type.

### Network Requirements

| Protocol | Port | Destination |
| --- | --- | --- |
| SMB | 445 | Windows file servers in the source group |

### Before You Begin

- The hostname or IP address of each file server you plan to add.
- A Username and Password service account created in Access Analyzer with the appropriate permissions on the target file servers.
- Network connectivity from the Access Analyzer server to port 445 on each file server confirmed.
