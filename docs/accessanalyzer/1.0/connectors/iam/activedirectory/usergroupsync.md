---
title: "User and Group Sync"
description: "Synchronizing users and groups from Active Directory"
sidebar_position: 20
---

# User and Group Sync

The Active Directory connector performs a full synchronization of users, groups, and group memberships.

## What Gets Synchronized

| Object Type | Data Collected |
| --- | --- |
| **Users** | Display name, SAM account name, UPN, email, distinguished name, enabled status |
| **Groups** | Group name, type (security/distribution), scope (domain local/global/universal), distinguished name |
| **Group memberships** | Direct and nested membership relationships |

## Running a Sync

1. Navigate to **Configuration** > **Scans**
2. Create or select a scan configured for the Active Directory source
3. Run the scan — the connector performs a full sync on each execution

## Sync Behavior

- Each sync is a **full synchronization** — all users, groups, and memberships are collected
- The connector uses LDAP3 for directory queries
- Duration depends on directory size (number of users and groups)
- Results are stored in the Access Analyzer database and used for identity-to-entitlement mapping
