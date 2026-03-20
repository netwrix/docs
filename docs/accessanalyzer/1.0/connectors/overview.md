---
title: "Connectors"
description: "Connector architecture, types, and lifecycle"
sidebar_position: 1
---

# Connectors

Connectors are the components that communicate with external data sources and identity providers on behalf of Access Analyzer. Each connector handles authentication, data collection, and state management for its target system.

## Connector Types

| Category | Purpose | Connectors |
| --- | --- | --- |
| **IAM Connectors** | Synchronize identities (users, groups, memberships) from identity providers | [Active Directory](/docs/accessanalyzer/1_0/connectors/iam/activedirectory/connectionsetup), [Entra ID](/docs/accessanalyzer/1_0/connectors/iam/entraid/appregistration), [Local Groups](/docs/accessanalyzer/1_0/connectors/iam/localgroups/powershellsetup) |
| **Source Connectors** | Scan data repositories for files, permissions, and content | [CIFS/SMB](/docs/accessanalyzer/1_0/connectors/source/cifs/connectionconfig), [SharePoint Online](/docs/accessanalyzer/1_0/connectors/source/sharepointonline/connectionconfig) |

## Connector Operations

| Operation | Description |
| --- | --- |
| **Test connection** | Validates credentials and network connectivity |
| **Access scan** | Enumerates files, folders, and permissions on a data source |
| **Sync** | Synchronizes users, groups, and memberships from an identity provider |
| **Get object** | Retrieves specific objects or metadata from the target system |

## Connector Execution

Connectors run as Kubernetes Jobs managed by the Connector API. When a scan or sync is triggered:

1. The Core API creates a scan execution record
2. The Connector API launches a Kubernetes Job with the appropriate connector
3. The connector authenticates using the associated service account
4. Data is collected and sent back to the Core API for processing
5. The job completes and reports its final status

## State Management

| Connector | Pause/Resume |
| --- | --- |
| CIFS/SMB | Supported |
| All others | Not supported |
