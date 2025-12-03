---
description: >-
  You receive this error when configuring SMTP Notifications if the Microsoft
  365 account used for SMTP has multi-factor authentication (MFA) enabled. This
  article explains the cause and shows how to resolve it by using the direct
  send method.
keywords:
  - SMTP
  - Microsoft 365
  - MFA
  - Authentication unsuccessful
  - 535 5.7.139
  - 530 5.7.57
  - Direct send
  - Notifications
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Authentication Unsuccessful − Request Did Not Meet
tags: []
title: "Authentication Unsuccessful − Request Did Not Meet Authentication Criteria Error"
knowledge_article_id: kA0Qk0000000XDhKAM
---

# Authentication Unsuccessful − Request Did Not Meet Authentication Criteria Error

## Symptom

Netwrix Auditor (v10.6 and earlier) prompts the following error when configuring SMTP settings for **Notifications**:

```text
Cannot send an email: SMTP Exception:
Cannot send message: 530 5.7.57 Client not authenticated to send mail.
Error: 535 5.7.139 Authentication unsuccessful, the request did not meet the criteria to be authenticated successfully.
Contact your administrator.
```

## Cause

The Microsoft 365 account used for SMTP has multi-factor authentication (MFA) enabled.

## Resolution

Set up the direct send method for Netwrix Auditor. Refer to the following article for more detailed instructions: Set Up Direct Send for Netwrix Auditor and Netwrix Data Classification.

## Related articles

- Set Up Direct Send for Netwrix Auditor and Netwrix Data Classification
