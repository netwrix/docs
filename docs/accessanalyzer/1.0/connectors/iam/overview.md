---
title: "IAM Connectors"
description: "Identity and access management connectors"
sidebar_position: 1
---

# IAM Connectors

IAM (Identity and Access Management) connectors synchronize identity data — users, groups, and group memberships — from identity providers into Access Analyzer. This data is used to map who has access to what across your data sources.

## Available IAM Connectors

| Connector | Identity Provider | Operations | Credential Type |
| --- | --- | --- | --- |
| [Active Directory](/docs/accessanalyzer/1_0/connectors/iam/activedirectory/connectionsetup) | On-premises AD | Test connection, Full sync | Username / Password |
| [Entra ID](/docs/accessanalyzer/1_0/connectors/iam/entraid/appregistration) | Microsoft Entra ID | Test connection only | OAuth2 Client Credentials |
| [Local Groups](/docs/accessanalyzer/1_0/connectors/iam/localgroups/powershellsetup) | Windows local accounts | Test connection, Sync | Username / Password |

:::note
The Entra ID connector in v1.0 supports test connection only. Full identity synchronization will be available in a future release.
:::
