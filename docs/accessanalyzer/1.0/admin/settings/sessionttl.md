---
title: "Session and Token TTL"
description: "Configuring session duration and token refresh intervals"
sidebar_position: 30
---

# Session and Token TTL

Session and token TTL (time-to-live) settings control how long user sessions remain valid and when tokens are refreshed. These settings balance security requirements with user convenience.

## Configuration

To configure session TTL:

1. Navigate to **Settings** in the sidebar.
2. Locate the **Session Configuration** section.
3. Adjust the values and click **Save**.

## Available Settings

| Setting | Description | Default |
|---|---|---|
| **Session TTL** | Maximum lifetime of a session, in minutes | 480 (8 hours) |
| **Idle Timeout** | Time of inactivity before a session expires, in minutes | 60 |
| **Token Refresh Threshold** | Percentage of TTL elapsed before automatic token refresh occurs | 50% |

## How TTL Affects Users

- When the **Session TTL** expires, the user is logged out regardless of activity.
- When the **Idle Timeout** elapses without any API requests, the session expires.
- Active sessions are automatically refreshed when the elapsed time exceeds the **Token Refresh Threshold**, extending the session without user intervention.

See [Token Refresh and Expiration](/docs/accessanalyzer/1_0/admin/authentication/tokenrefresh) for details on the refresh mechanism.

:::warning
Setting very long session TTLs increases the window of exposure if a session token is compromised. Follow your organization's security policies when configuring these values.
:::

## Session Storage

Sessions are stored in Redis. Ensure the Redis instance has sufficient memory to accommodate all active sessions, especially in environments with many concurrent users.
