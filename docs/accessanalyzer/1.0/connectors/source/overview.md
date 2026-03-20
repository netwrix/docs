---
title: "Source Connectors"
description: "Data source connectors for file and cloud scanning"
sidebar_position: 1
---

# Source Connectors

Source connectors scan data repositories to discover files, folders, access permissions, and content. Results are used to identify overly permissive access and detect sensitive data.

## Available Source Connectors

| Connector | Data Source | Operations | Credential Type |
| --- | --- | --- | --- |
| [CIFS / SMB](/docs/accessanalyzer/1_0/connectors/source/cifs/connectionconfig) | Windows file shares | Test connection, Access scan, Get object | Username / Password |
| [SharePoint Online](/docs/accessanalyzer/1_0/connectors/source/sharepointonline/connectionconfig) | SharePoint Online sites | Test connection, Access scan, Get object | Certificate |

## Scan Types

| Scan Type | Description |
| --- | --- |
| **Access scan** | Enumerates file structure and access permissions |
| **Sensitive data scan** | Classifies file content against detection patterns |
