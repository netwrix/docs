---
title: "CIFS / SMB File Share"
description: "Supported platforms, permissions, and network ports for CIFS/SMB scanning"
sidebar_position: 10
---

# CIFS / SMB File Share

The CIFS/SMB connector scans Windows file shares to enumerate files, folders, and access permissions. It supports SMBv2 and SMBv3 protocols with concurrent scanning workers.

## Network Requirements

| Port | Protocol | Direction | Description |
| --- | --- | --- | --- |
| 445 | TCP | Access Analyzer → File Server | SMB file sharing |

## Service Account Requirements

| Requirement | Details |
| --- | --- |
| **Account type** | Domain or local user account on the file server |
| **Authentication** | Username and password |
| **Minimum permissions** | Read access and list permissions on target shares |
| **Domain** | Required if the file server is domain-joined |

:::note
The service account needs read-only access to the shares and folders being scanned. It does not require write, modify, or administrative permissions.
:::

## Credential Type

| Field | Value |
| --- | --- |
| **Type** | Username / Password |
| **Username format** | `DOMAIN\username` or local account name |

## Connector Capabilities

| Operation | Description |
| --- | --- |
| **Test connection** | Validates SMB connectivity and authentication |
| **Access scan** | Enumerates files, folders, and permissions with configurable worker concurrency (1–20) |
| **Get object** | Retrieves specific file or folder metadata |

## Scan Configuration Options

| Option | Description |
| --- | --- |
| **Share filtering** | Include or exclude specific shares |
| **Scan depth** | Maximum folder depth to traverse |
| **Worker concurrency** | Number of parallel scanning threads (1–20) |
| **Pause / Resume** | Scans can be paused and resumed |
