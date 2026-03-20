---
title: "Authentication"
description: "Login workflow and session lifecycle"
sidebar_position: 10
---

# Authentication

Access Analyzer uses session-based authentication backed by Redis for secure, server-side session storage. All API endpoints under `/api/v1/` require a valid session, except for the login endpoint.

## Login Workflow

1. The user submits their **username** and **password** via the login form.
2. The server validates the credentials against the stored Argon2id password hash.
3. On success, a new session is created in Redis and a session cookie is returned to the client.
4. The client includes the session cookie with all subsequent API requests.

## Session Lifecycle

Each session progresses through the following states:

- **Active** -- The session is valid and the user is authenticated.
- **Refreshed** -- The session token has been refreshed before expiration. See [Token Refresh and Expiration](/docs/accessanalyzer/1_0/admin/authentication/tokenrefresh).
- **Expired** -- The session TTL has elapsed and the user must re-authenticate.
- **Revoked** -- An administrator has manually terminated the session.

## IP Validation

Access Analyzer validates the client IP address on each request. If a request originates from an IP that does not match the session's originating IP, the session is invalidated and the user must log in again.

## Related Topics

- [Token Refresh and Expiration](/docs/accessanalyzer/1_0/admin/authentication/tokenrefresh)
- [Session Monitoring and Revocation](/docs/accessanalyzer/1_0/admin/authentication/sessionmonitoring)
