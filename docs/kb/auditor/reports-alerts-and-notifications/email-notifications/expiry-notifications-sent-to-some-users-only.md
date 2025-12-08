---
description: >-
  Explains why expiry notifications are received by some users only and how
  Netwrix Password Reset notification options determine which users get
  notifications.
keywords:
  - expiry
  - password expiration
  - notifications
  - Netwrix Password Reset
  - admin report
  - reminders
  - 14
  - 7
  - 3
products:
  - auditor
sidebar_label: Expiry notifications sent to some users only
tags: []
title: "Expiry notifications sent to some users only"
knowledge_article_id: kA00g000000H9bICAS
---

# Expiry notifications sent to some users only

You might see that the expiry notifications are received by some users but not all. Some users from the administrative report do not receive any notification.

---

## How Netwrix Password Reset notifies users

Netwrix Password Reset has two options for user notifications:

- Notify a user whose password is going to expire in `X` days **every day** during `X` days. In this case all people listed in the admin report will receive a notification every day.
- Notify a user **only 3 times** on certain days, i.e., when the specified number of days is left until password expiration. By default it is `14, 7 and 3` days. In this case the admin report will still be sent every day, but only people with exactly `14, 7 or 3` days until password expiration will receive a notification.

---

## Resolution

Please make sure Netwrix Password Reset is configured correctly. Also please make sure that notifications are not considered as spam.
