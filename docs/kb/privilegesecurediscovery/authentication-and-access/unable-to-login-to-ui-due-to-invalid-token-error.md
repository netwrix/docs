---
title: "Invalid Token Error When Signing In to the UI"
description: "Resolve the Invalid Token message at sign-in, which occurs when the Google Authenticator token is incorrect or out of sync, by resetting the MFA token."
sidebar_label: "Invalid Token Error When Signing In to the UI"
keywords:
- Invalid Token
- invalid token error
- TOTP
- Google Authenticator
- MFA
- reset MFA token
- time sync
- NPS-D
- SecureONE
- Remediant SecureONE
- unable to log in
- Users & Groups
products:
- privilegesecurediscovery
tags:
- kb
- authentication-and-access
knowledge_article_id: kA04u00000110pDCAQ
---

## Symptom

When you sign in to the web interface, the following message is displayed:

```text
Invalid Token
```

## Cause

The Google Authenticator time-based one-time password (TOTP) token that you supplied is incorrect or is out of sync with the time server.

## Resolution

> **IMPORTANT:** To perform these troubleshooting steps, you must have the Administrator role.

1. Verify that the time on your device matches Coordinated Universal Time (UTC). Compare it with a reference such as [timeanddate.com](https://www.timeanddate.com/worldclock/timezone/utc) or [time.gov](https://www.time.gov/).
2. Confirm that you used the correct Google Authenticator token when you signed in.
3. Sign in with the local account.
4. Go to **Configure** > **Users & Groups**.
5. Reset the token, and then sign in again. For details, see [Reset a user's MFA token](/docs/privilegesecurediscovery/configuration/authentication-and-sso/reset-mfa-tokens).
