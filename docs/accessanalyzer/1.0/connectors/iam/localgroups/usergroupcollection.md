---
title: "Local User and Group Collection"
description: "Collecting local users and groups from target machines"
sidebar_position: 20
---

# Local User and Group Collection

The Local Groups connector collects local users, local groups, and group memberships from Windows machines via PowerShell Remoting.

## What Gets Collected

| Object Type | Data Collected |
| --- | --- |
| **Local users** | Username, full name, description, enabled status, last logon |
| **Local groups** | Group name, description, type |
| **Group memberships** | Local group members (local users and domain accounts/groups) |

## Running a Sync

1. Navigate to **Configuration** > **Scans**
2. Create or select a scan configured for the Local Groups source
3. Run the scan — the connector performs a sync on each execution

## How It Works

The connector:

1. Establishes a WinRM session to the target machine
2. Executes PowerShell commands to enumerate local users and groups
3. Collects group membership information, including domain accounts that are members of local groups
4. Returns results to the Core API for storage and analysis

## Use Cases

Local group collection is useful for:

- Identifying domain accounts with local administrator access
- Mapping local group memberships that grant file share permissions
- Detecting overly permissive local group configurations
