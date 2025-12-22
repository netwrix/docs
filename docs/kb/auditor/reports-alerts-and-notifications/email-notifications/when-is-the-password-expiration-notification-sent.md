---
description: >-
  Explains when the password expiration notification is sent and shows the
  calculation used by Netwrix Password Reset to determine the sending date.
keywords:
  - password expiration
  - notification
  - PwdLastset
  - maximum password age
  - Active Directory
  - Netwrix Password Reset
  - expiration notification
  - sending date
products:
  - auditor
sidebar_label: When is the Password Expiration Notification sent?
tags: []
title: "When is the Password Expiration Notification sent?"
knowledge_article_id: kA00g000000PbdACAS
---

# When is the Password Expiration Notification sent?

When is the password expiration notification sent?

---

**Netwrix Password Reset uses the following algorithm to calculate when to send a password expiration notification:**

**Sending date** = *Last password change* (value of the account's `PwdLastset` attribute) + *Maximum password age* (`AD` value) – *Number of days before the upcoming password expiration* (Netwrix Password Reset value).
