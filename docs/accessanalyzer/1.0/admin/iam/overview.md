---
title: "IAM Services"
description: "Configuring identity and access management integrations"
sidebar_position: 10
---

# IAM Services

The IAM section provides tools for synchronizing identities from external directories and analyzing access entitlements across your environment. This enables centralized visibility into who has access to what resources and how that access was granted.

## Supported IAM Providers

Access Analyzer synchronizes identity data from the following sources:

| Provider | Identity Data |
|---|---|
| **Active Directory** | Users, groups, group memberships, organizational units |
| **Entra ID** | Users, groups, application role assignments |
| **Local Groups** | Local users and group memberships on Windows servers |

## Key Capabilities

- **Identity Synchronization** -- Import users and groups from configured IAM providers. See [Identity Sync Process](/docs/accessanalyzer/1_0/admin/iam/identitysync).
- **Identities and Entitlements** -- Browse synced identities and view their effective permissions across sources. See [Viewing Identities and Entitlements](/docs/accessanalyzer/1_0/admin/iam/identitiesentitlements).
- **Permission Path Analysis** -- Trace the path from a user to a resource to understand how access was granted. See [Permission Path Analysis](/docs/accessanalyzer/1_0/admin/iam/permissionpaths).

## Prerequisites

Before using IAM features, ensure that:

- At least one Active Directory, Entra ID, or Local Groups source is configured with valid credentials.
- An access scan has been completed for the target sources.
