---
title: "Token Refresh and Expiration"
description: "How access tokens are refreshed and session expiration"
sidebar_position: 20
---

# Token Refresh and Expiration

Access Analyzer sessions have a configurable time-to-live (TTL). To prevent unnecessary re-authentication, sessions are automatically refreshed during active use.

## How Token Refresh Works

When a user makes an API request and the session is past the halfway point of its TTL, the server automatically issues a new session token. This process is transparent to the user:

1. The client sends a request with the current session cookie.
2. The server detects that the session has passed 50% of its TTL.
3. A new session token is generated and the old token is invalidated.
4. The response includes the updated session cookie.

## Session Expiration

Sessions expire when the full TTL elapses without any qualifying refresh. When a session expires:

- All subsequent API requests return a `401 Unauthorized` response.
- The user is redirected to the login page.
- The expired session record is automatically purged from Redis.

## Configuration

Session TTL and refresh behavior are configured in the application settings. See [Session and Token TTL](/docs/accessanalyzer/1_0/admin/settings/sessionttl) for configuration details.

:::note
Token refresh only occurs during active requests. Background tabs or idle browser windows do not trigger a refresh.
:::
