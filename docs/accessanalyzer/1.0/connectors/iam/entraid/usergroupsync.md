---
title: "User and Group Sync"
description: "Synchronizing users, groups, and roles from Entra ID"
sidebar_position: 20
---

# User and Group Sync

The Entra ID connector synchronizes users, groups, and roles from your Azure AD tenant into Access Analyzer. This data is used for identity mapping and entitlement analysis across your data sources.

## What Gets Synchronized

| Data | Description |
| --- | --- |
| **Users** | All user accounts in the tenant, including display name, UPN, and account status |
| **Groups** | Security groups and Microsoft 365 groups, including membership |
| **Roles** | Directory roles assigned to users and groups |
| **Sensitivity Labels** | Microsoft Purview sensitivity labels (optional — see [Sync Options](#sync-options) below) |

## How It Works

When you create an Entra ID source group through the [Connect Source wizard](/docs/accessanalyzer/1_0/gettingstarted/firstscan/addingsource), a **Users, Groups and Roles** scan is automatically configured. This scan is always enabled and cannot be disabled — it runs every time the Entra ID source is scanned.

The connector authenticates using OAuth2 client credentials and calls the Microsoft Graph API to retrieve identity data from the specified tenant.

## Sync Options

During scan setup (Step 3 of the wizard), additional sync options may be available depending on the source type metadata configured on the backend. For example:

- **Sync Sensitivity Labels** — When enabled, the connector also retrieves Microsoft Purview sensitivity labels assigned to users and groups

These options appear as toggle switches below the scan type selector on the scan setup page.

## Scan Scheduling

The Users, Groups and Roles scan supports three scheduling modes:

| Mode | Description |
| --- | --- |
| **Run scan now** | Execute immediately after setup completes |
| **Run scan at** | Schedule for a specific date and time |
| **Advanced scheduling** | Configure a recurring cron schedule |

## Related Topics

- [App Registration and Permissions](/docs/accessanalyzer/1_0/connectors/iam/entraid/appregistration) — Azure AD setup requirements
- [Entra ID Requirements](/docs/accessanalyzer/1_0/requirements/connectors/entraid) — Permissions and prerequisites
