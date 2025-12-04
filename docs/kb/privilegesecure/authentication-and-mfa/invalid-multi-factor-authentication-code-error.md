---
description: >-
  Users see an "Invalid MFA code" error when multi-factor authentication fails
  due to a system time discrepancy between the Privilege Secure server and
  clients. This article explains the symptoms, cause, and how to resolve the
  issue by syncing system time.
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
  - privilege-secure-access-management
sidebar_label: Invalid Multi-Factor Authentication Code Error
tags: []
title: "Invalid Multi-Factor Authentication Code Error"
knowledge_article_id: kA04u000000wnj6CAA
---

# Invalid Multi-Factor Authentication Code Error

## Symptoms

- When a user attempts to log in the **Netwrix Privilege Secure** console using the multi-factor authentication code, the page refreshes. The user is prompted to provide credentials again.
- A multi-factor authentication (MFA) code is deemed invalid. Login fails with the following error prompted:

```
Invalid MFA code
```

## Causes

The **Netwrix Privilege Secure** server and client have a system time discrepancy.

## Resolution

Review the system time in both NPS server and clients in your environment.

> **NOTE:** You can set the system time to sync with the OS time server automatically − in your server settings, select **Time & Language** > **Date & Time** > switch the **Set time automatically** switch on.

## Reference

![Capture.png](./../0-images/ka04u000000wvuC_0EM4u000008pS5A.png)
