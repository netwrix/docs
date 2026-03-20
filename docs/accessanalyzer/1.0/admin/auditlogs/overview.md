---
title: "Audit Logs"
description: "Viewing system activity and audit trail"
sidebar_position: 10
---

# Audit Logs

Access Analyzer maintains a comprehensive audit trail of all user actions. Audit logs capture who performed an action, what was changed, and when the event occurred. This data supports security reviews, compliance audits, and incident investigations.

## Viewing Audit Logs

Navigate to **Audit Logs** in the sidebar to access the log viewer. The audit log table displays:

| Column | Description |
|---|---|
| **Timestamp** | Date and time of the action |
| **User** | The user who performed the action |
| **Action** | The type of operation (e.g., Create, Update, Delete, Login, Logout) |
| **Resource** | The affected resource type and identifier |
| **Details** | Additional context about the change, including before and after values where applicable |
| **IP Address** | The client IP from which the action was performed |

## Filtering and Searching

Use the table controls to filter audit logs by:

- **Date range** -- Specify start and end dates.
- **User** -- Filter by a specific user.
- **Action type** -- Show only specific action types.
- **Resource type** -- Filter by resource category (e.g., Source, Scan, User).

## Log Retention

Audit logs are retained for the duration configured in application settings. By default, logs are retained indefinitely.

## Related Topics

- [Log Export](/docs/accessanalyzer/1_0/admin/auditlogs/export)
