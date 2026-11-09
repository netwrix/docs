---
description: >-
  Fix the "Invalid MFA code" login error by syncing the system time between the
  Privilege Secure server and clients.
keywords:
  - MFA
  - multi-factor authentication
  - invalid MFA code
  - time synchronization
  - NPS
  - Privilege Secure
  - system time
  - authentication error
products:
  - privilegesecure
sidebar_label: Invalid Multi-Factor Authentication Code Error
tags:
  - kb
  - authentication-and-mfa
title: "Invalid Multi-Factor Authentication Code Error"
knowledge_article_id: kA04u000000wnj6CAA
---

# Invalid Multi-Factor Authentication Code Error

## Symptom

- When a user attempts to log in to the **Netwrix Privilege Secure** console using the multi-factor authentication code, the page refreshes. The user is prompted to provide credentials again.
- A multi-factor authentication (MFA) code is deemed invalid. Login fails with the following error:

```
Invalid MFA code
```

![Authenticator code login page showing the Invalid MFA code error](./../0-images/ka04u000000wvuC_0EM4u000008pS5A.png)

## Cause

The **Netwrix Privilege Secure** server and client have a system time discrepancy.

## Resolution

Review the system time on both the Privilege Secure server and clients in your environment.

> **NOTE:** You can set the system time to sync with the OS time server automatically − in your server settings, select **Time & Language** > **Date & Time** > switch the **Set time automatically** switch on.
