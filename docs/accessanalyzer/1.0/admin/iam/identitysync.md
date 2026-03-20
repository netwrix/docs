---
title: "Identity Sync Process"
description: "How identities are synchronized from IAM providers"
sidebar_position: 20
---

# Identity Sync Process

Identity synchronization imports user and group data from configured IAM providers into Access Analyzer. This data forms the foundation for entitlement analysis and permission path reporting.

## How Sync Works

The identity sync process performs the following steps:

1. Connects to each configured IAM source (Active Directory, Entra ID, or Local Groups) using the associated service account credentials.
2. Retrieves user accounts, groups, and membership relationships.
3. Normalizes identity data into a unified format across providers.
4. Stores the synchronized identities in the Access Analyzer database.
5. Correlates identities across multiple providers when the same user appears in more than one directory.

## Triggering a Sync

Identity sync occurs automatically during access scan execution. It can also be triggered manually:

1. Navigate to **IAM** in the sidebar.
2. Click **Sync Now**.
3. Monitor the sync progress in the status indicator.

## Sync Frequency

Each access scan triggers a fresh identity sync for its target sources. For environments that change frequently, schedule access scans at regular intervals to keep identity data current.

## Sync Status

| Status | Description |
|---|---|
| **In Progress** | Sync is actively importing identity data |
| **Completed** | Sync finished successfully with a timestamp |
| **Failed** | Sync encountered an error; check system logs for details |

:::note
Identity sync only imports identity metadata (usernames, group names, memberships). It does not import passwords or other credential data.
:::
