---
title: "Built-in Alerts"
description: "Reference for the defaults, severities, categories, and themes of the built-in alerts in Netwrix 1Secure."
sidebar_position: 20
---

# Built-in Alerts

This page lists the default settings, severity values, categories, and themes of the built-in
alerts. For how to view and manage alerts, see the [Alerts](/docs/1secure/admin/alerts/alerts.md) topic.

## Default Settings

Most built-in activity alerts default to a threshold of 1, a threshold period of 5 minutes, and a
batching period of 20 minutes. They are grouped on Who. For example, Account Deleted has severity
Medium, category Identity, theme Account lifecycle, and source Active Directory.

Some built-in alerts use different defaults:

| Alert | Threshold | Threshold period | Batching period | Severity |
| ----- | --------- | ---------------- | --------------- | -------- |
| Multiple Failed Logons | 5 | 5 minutes | 10 minutes | Medium |
| Audit Log Clearing | 1 | 1 minute | 0 minutes | High |
| Mass Modifications and Deletions of Sensitive Documents | 10 | 10 minutes | 10 minutes | High |
| Excessive External Activity With Sensitive Data | 10 | 10 minutes | 10 minutes | High |

Multiple Failed Logons has no grouping and category Identity.

The default threshold period of Audit Log Clearing is below the 5-minute minimum that the
interface accepts.

The Admin Group Membership alerts have different severities:

| Alert | Severity |
| ----- | -------- |
| Admin Group Membership Addition | Critical |
| Admin Group Membership Changes | High |
| Admin Group Membership Removal | Medium |

## Severity Values

The severity values are Low, Medium, High, and Critical.

## Categories

The categories shown for built-in alerts are Identity, Data, AI, and System.

## Themes

Built-in alert definitions are grouped by the following themes:

- Account lifecycle
- Authentication
- Directory structure
- Privileged access
- Account security settings
- App / service principal permissions
- External collaboration
- Sharing exposure
- Permission exposure
- Sensitive data
- Defense evasion
- Local accounts
- AI data access
- Platform health
