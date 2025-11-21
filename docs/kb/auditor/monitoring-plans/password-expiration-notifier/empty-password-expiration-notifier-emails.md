---
description: >-
  Netwrix Password Reset (PEN) sends empty notification emails. This article
  describes possible causes and step-by-step resolutions, including TLS 1.2
  configuration and disabling implicit SSL mode.
keywords:
  - password expiration
  - PEN
  - Netwrix Password Reset
  - TLS 1.2
  - SMTP
  - implicit SSL
  - notification emails
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Empty Password Expiration Notifier Emails
tags: []
title: "Empty Password Expiration Notifier Emails"
knowledge_article_id: kA04u0000011109CAA
---

# Empty Password Expiration Notifier Emails

## Symptom

Netwrix Password Reset (PEN) sends empty notification emails.

## Causes

One of the following issues is present in your environment:

1. TLS 1.2 is not configured on the Netwrix Auditor server.
2. The implicit SSL connection mode is not supported by your SMTP server.

## Resolutions

Refer to the respective resolution for the cause in your environment:

1. Verify that TLS 1.2 is correctly configured on your Netwrix Auditor server. Refer to the following article for additional information: Сonnection Issue when TLS 1.2 Is Required.
2. Disable the implicit SSL connection mode in Netwrix Password Reset.

   1. Run PEN. Select the affected monitoring plan and click **Edit**.
   2. In the **Notifications** tab, uncheck the **Use the Implicit SSL Connection Mode** checkbox. Click **Save** to save changes.

## Related Articles

- Сonnection Issue when TLS 1.2 Is Required
