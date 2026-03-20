---
title: "Active Directory"
description: "LDAP connectivity, service account permissions, and network ports"
sidebar_position: 30
---

# Active Directory

The Active Directory connector synchronizes users, groups, and group memberships from Active Directory into Access Analyzer. It uses the LDAP protocol for communication.

## Network Requirements

| Port | Protocol | Direction | Description |
| --- | --- | --- | --- |
| 389 | TCP | Access Analyzer → Domain Controller | LDAP |
| 636 | TCP | Access Analyzer → Domain Controller | LDAPS (LDAP over SSL) |

## Service Account Requirements

The connector requires a domain service account with the following:

| Requirement | Details |
| --- | --- |
| **Account type** | Domain user account |
| **Authentication** | Username and password |
| **Minimum permissions** | Read access to directory objects (users, groups, OUs) |
| **Recommended group** | Domain Users (or equivalent read-only access) |

:::note
The service account does not require Domain Admin or any write permissions. Read-only access to directory objects is sufficient for identity synchronization.
:::

## Credential Type

| Field | Value |
| --- | --- |
| **Type** | Username / Password |
| **Username format** | `DOMAIN\username` or `username@domain.com` |

## Connector Capabilities

| Operation | Description |
| --- | --- |
| **Test connection** | Validates LDAP connectivity and credential authentication |
| **Sync** | Full synchronization of users, groups, and group memberships |
