---
description: >-
  This article explains why the "The transport failed to connect to the server"
  error appears when testing Notifications in Netwrix Password Reset and
  provides step-by-step resolutions to restore email notifications.
keywords:
  - transport failed to connect
  - SMTP
  - TLS 1.2
  - implicit SSL
  - Netwrix Password Reset
  - notifications
  - monitoring plan
  - SMTP port
products:
  - auditor
sidebar_label: Transport Failed to Connect to Server
tags: []
title: "Transport Failed to Connect to Server"
knowledge_article_id: kA0Qk0000000Jc9KAE
---

# Transport Failed to Connect to Server

## Symptom

When verifying **Notifications** settings in Netwrix Password Reset, the following error is prompted:

```text
Test failed: The transport failed to connect to the server.
Exception has been thrown by the target of an invocation.
```

## Causes

- `TLS 1.2` is misconfigured in the Netwrix server.
- The implicit SSL connection mode is enabled.
- SMTP settings are misconfigured.
- The monitoring plan is corrupted.

## Resolution

1. Review the TLS protocol versions enabled in your environment − refer to the following article for additional information: Сonnection Issue when TLS 1.2 Is Required.
2. Uncheck the **Use the Implicit SSL connection mode** checkbox in the **Notifications** tab in Netwrix Password Reset (PEN), and verify the SMTP settings.
3. Verify the SMTP settings − make sure the specified port corresponds to the server port. Learn more in [How to set up a multifunction device or application to send email using Microsoft 365 or Office 365 ⸱ Microsoft 🫝](https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365).
4. Review the list of ports and protocols required for Netwrix Password Reset (PEN) to operate − refer to the following article for additional information: Tools − Netwrix Password Reset ⸱ v10.6.
5. Recreate your Netwrix Password Reset (PEN) monitoring plan − it is required to perform the setup manually as there's no option to copy the existing plan automatically.

## Related articles

- Сonnection Issue when TLS 1.2 Is Required
- [How to set up a multifunction device or application to send email using Microsoft 365 or Office 365 ⸱ Microsoft 🫝](https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)
- Tools − Netwrix Password Reset ⸱ v10.6
