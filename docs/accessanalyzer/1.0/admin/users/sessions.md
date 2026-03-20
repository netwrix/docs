---
title: "Session Management"
description: "Viewing and managing active user sessions"
sidebar_position: 30
---

# Session Management

Access Analyzer maintains session state for all authenticated users using Redis-backed server-side sessions. Administrators can view and manage active sessions from the **Users** section.

## Viewing Active Sessions

Navigate to **Users** > **Sessions** to see a list of all active sessions. The table displays:

| Column | Description |
|---|---|
| **User** | The username associated with the session |
| **IP Address** | The client IP from which the session was created |
| **Created At** | Timestamp when the session was initiated |
| **Last Active** | Timestamp of the most recent request |
| **Expires At** | When the session will automatically expire based on the configured TTL |

## Revoking Sessions

To revoke a session, select the target row and click **Revoke**. The user will be immediately logged out and must re-authenticate. Administrators can also revoke all sessions for a specific user from the user detail page.

## Session Security

- Sessions are validated against the originating IP address. If the client IP changes, the session is invalidated.
- Session TTL is configurable in [Settings](/docs/accessanalyzer/1_0/admin/settings/sessionttl).
- Idle sessions expire automatically after the configured timeout period.

:::warning
Revoking a session takes effect immediately. The affected user will lose access to any in-progress work that has not been saved.
:::
