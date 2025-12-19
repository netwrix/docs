---
description: >-
  Explains why email notifications and reports from Netwrix Password Reset may
  be missing and how to fix it by disabling the custom From address option or
  granting proper mailbox permissions to the service account.
keywords:
  - Netwrix Password Reset
  - email notifications
  - missing emails
  - Send As
  - Send on Behalf
  - service account
  - notifications
  - mailbox permissions
  - password expiration
products:
  - auditor
sidebar_label: Emails Are Missing in Netwrix Password Reset
tags: []
title: "Emails Are Missing in Netwrix Password Reset"
knowledge_article_id: kA0Qk0000000XATKA2
---

# Emails Are Missing in Netwrix Password Reset

## Symptom

Email notifications and reports from Netwrix Password Reset (PEN) are missing.

## Cause

The **Display the following From address in email notifications** option is enabled for a service account with insufficient permissions.

## Resolutions

- Disable the **Display the following From address in email notifications** option in Netwrix Password Reset:

  1. Launch **Netwrix Password Reset**, select the affected monitoring plan, and click **Edit**.
  2. In the **Notifications** tab, uncheck the **Display the following From address in email notifications** checkbox, and click **Save**.

- Grant the appropriate **Send As** or **Send on Behalf** permissions to the service account sending emails in Netwrix Password Reset.
