---
title: "Access Control"
description: "Access Control"
sidebar_position: 30
---

# Access Control

You can add a single-sign-on (SSO) connection to an organization, using Entra ID or OpenID Connect (Okta
is handled as an OpenID Connect connection). Each organization can have at most one SSO connection,
and at sign-in the user's email domain must match the domain of the connection, otherwise login is
refused. For Entra ID, the connection needs a Client ID, a Client secret, and a Client Secret Expiry
Date. For OpenID Connect, it needs a Client ID and a Discovery URL. The Domain field is read-only
and must match your domain. SSO configuration is available only when the SSOConfiguration feature
flag is on. When you change the strategy, 1Secure creates the new connection before it deletes the
old one.

Multi-factor authentication (MFA) is required at login for every user who has access to any
organization other than a Self-Service Trial. Users whose organizations are all Self-Service Trial
skip it. A user with no active organization is treated as MFA-required.
