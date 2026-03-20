---
title: "Session Monitoring and Revocation"
description: "Monitoring active sessions and revoking access"
sidebar_position: 30
---

# Session Monitoring and Revocation

Administrators can monitor all active sessions across the application and revoke access when needed. This is useful for responding to security incidents or enforcing access policies.

## Monitoring Active Sessions

The session monitoring view is accessible from **Users** > **Sessions**. It provides a real-time view of all authenticated sessions, including:

- **Username** and assigned role
- **Client IP address** and geographic context
- **Session start time** and **last activity** timestamp
- **Remaining TTL** before automatic expiration

Use the table's filter and sort controls to locate specific sessions by user, IP address, or activity time.

## Revoking Sessions

To revoke one or more sessions:

1. Select the target sessions using the row checkboxes.
2. Click **Revoke Selected**.
3. Confirm the action in the dialog.

Revocation is immediate. The affected sessions are removed from Redis and all subsequent requests using those session tokens return `401 Unauthorized`.

## Bulk Revocation

To revoke all sessions for a specific user, navigate to the user's detail page and click **Revoke All Sessions**. This is recommended when a user account may be compromised.

:::warning
Session revocation cannot be undone. Affected users must log in again to regain access.
:::
