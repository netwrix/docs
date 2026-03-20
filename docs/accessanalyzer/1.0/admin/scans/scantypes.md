---
title: "Scan Types"
description: "Access, sensitive data, identity sync, and local users scan types"
sidebar_position: 20
---

# Scan Types

Access Analyzer supports several scan types, each designed to analyze different aspects of your data environment. Scan types are selected during the Connect Source wizard (Step 3) and determine what data is collected and reported.

## Access Scans

Access scans analyze permissions and access controls on the target sources. They collect:

- User and group permission assignments
- Effective access rights
- Permission inheritance paths
- Share and folder-level access control lists

Access scans are available for **CIFS** (File Server), **SharePoint**, **Active Directory**, and **Local Groups** source types.

For File Server sources, access scans support additional configuration options including share filtering, scan depth, file-level permissions, hidden share enumeration, and worker threads. See [CIFS Connector](/docs/accessanalyzer/1_0/connectors/source/cifs/connectionconfig) for details.

## Sensitive Data Scans

Sensitive data scans inspect file content to identify data matching configured classification patterns. They detect:

- Personally identifiable information (PII)
- Financial data (credit card numbers, bank account numbers)
- Protected health information (PHI)
- Credentials and secrets
- Custom patterns defined in [Sensitive Data Configuration](/docs/accessanalyzer/1_0/admin/sensitivedata/overview)

Sensitive data scans are available for **CIFS** and **SharePoint** source types only.

## Identity Sync Scans

Identity sync scans retrieve users, groups, and permissions from identity providers:

| Scan | Source Type | Description |
| --- | --- | --- |
| **Active Directory Inventory** | Active Directory | Synchronizes users, groups, OUs, and domain permissions |
| **Users, Groups and Roles** | Entra ID | Synchronizes Azure AD users, groups, directory roles, and optionally sensitivity labels |

For Entra ID, the identity sync scan is always enabled and cannot be disabled.

## Local Users and Groups Scans

When an **Access** scan is enabled for a File Server source, a **Local Users and Groups** scan is automatically created alongside it. This scan collects local user and group account data from each file server, which is used to resolve local account references found in NTFS ACLs.

This scan type does not require separate configuration — it inherits the same schedule as the access scan.

## Comparison

| Feature | Access Scan | Sensitive Data Scan | Identity Sync | Local Users and Groups |
|---|---|---|---|---|
| Analyzes permissions | Yes | No | No | No |
| Inspects file content | No | Yes | No | No |
| Syncs identities | No | No | Yes | Yes |
| Supported sources | CIFS, SharePoint, AD, Local Groups | CIFS, SharePoint | AD, Entra ID | CIFS (auto-created) |

:::note
A single source can have multiple scan types configured independently, each with its own schedule.
:::
