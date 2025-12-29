---
description: >-
  Use PowerShell to test Microsoft 365 SMTP relay connectivity from your Netwrix
  Password Reset server. This article shows how to sign in to Microsoft 365 and
  send test messages using Send-MailMessage to identify relay issues.
keywords:
  - Microsoft 365
  - SMTP relay
  - Send-MailMessage
  - PowerShell
  - Netwrix Password Reset
  - smtp.office365.com
  - port 587
  - connector
products:
  - password-reset
sidebar_label: Troubleshoot Missing Microsoft 365 Emails Using SM
tags: []
title: "Troubleshoot Missing Microsoft 365 Emails Using SMTP Relay"
knowledge_article_id: kA0Qk0000000LAvKAM
---

# Troubleshoot Missing Microsoft 365 Emails Using SMTP Relay

## Question

When settings up verification emails via Microsoft 365 SMTP relay, emails still do not reach the users. How to troubleshoot the SMTP relay?

## Answer

> **NOTE:** Learn more about setting up a connector in [Set Up Multifunction Device or Application to Send Emails Using Microsoft 365 or Office 365 − Configure Connector to Send Emails Using Microsoft 365 or Office 365 (SMTP Relay) · Microsoft &#129125;](https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365#option-3-configure-a-connector-to-send-emails-using-microsoft-365-or-office-365-smtp-relay).

Refer to the following steps to troubleshoot the setup:

1. In your Netwrix Password Reset server, run the following line in elevated PowerShell to log in Microsoft 365:

```powershell
$msolcred = get-credential
```

Enter the Microsoft 365 credentials to use them when troubleshooting the relay.

2. Once you've logged in, use the following line in the same PowerShell window to send a test email from your server to the relay:

```powershell
Send-MailMessage –From %From_email% –To %To_email% –Subject “Test” –Body “TESTING RELAY” -SmtpServer %Relay_Servername% -Credential $msolcred -UseSsl -Port %port_used%
```

Refer to the following example of the line using the default Microsoft 365 SMTP server and port:

```powershell
Send-MailMessage –From testlab@testdom.com –To testlab@testdom.com –Subject “Test” –Body “TESTING RELAY” -SmtpServer smtp.office365.com -Credential $msolcred -UseSsl -Port 587
```

3. Review the console output for possible errors.

## Related articles

- [Set Up Multifunction Device or Application to Send Emails Using Microsoft 365 or Office 365 − Configure Connector to Send Emails Using Microsoft 365 or Office 365 (SMTP Relay) · Microsoft &#129125;](https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365#option-3-configure-a-connector-to-send-emails-using-microsoft-365-or-office-365-smtp-relay)
