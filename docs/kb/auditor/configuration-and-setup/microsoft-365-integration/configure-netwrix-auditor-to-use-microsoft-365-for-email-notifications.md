---
description: >-
  This article explains how to configure Netwrix Auditor to send email
  notifications through Microsoft 365 by configuring SMTP settings in Outlook
  and in the product settings.
keywords:
  - Microsoft 365
  - SMTP
  - email notifications
  - Outlook
  - Netwrix Auditor
  - SSL/TLS
  - SMTP authentication
  - Office 365
  - MFA
products:
  - auditor
sidebar_label: Configure Netwrix Auditor to Use Microsoft 365 for
tags: []
title: "Configure Netwrix Auditor to Use Microsoft 365 for Email Notifications"
knowledge_article_id: kA00g000000PbdOCAS
---

# Configure Netwrix Auditor to Use Microsoft 365 for Email Notifications

## Question

How to configure Netwrix Auditor to use Microsoft 365 for email notifications?

## Answer

Refer to the following steps to configure Netwrix products to use Microsoft 365 for email notifications:

1. Open the main Microsoft 365 page — [Microsoft 365 ⸱ Microsoft](https://www.microsoft365.com/).
2. In the left pane, click the **Outlook** logo to proceed to the main Outlook page.
3. Once the main Outlook page opens, click the **Settings** icon in the top right corner.
4. In the left pane, select **Mail** > **Sync email**.
5. Copy the SMTP settings (for example, server name: `outlook.office365.com`, port: `587`).
6. Open Netwrix Auditor. Click **Settings** in the top right corner, select **Notifications** in the left pane, then click **Modify** under **Default SMTP Settings**.
7. Specify the SMTP settings you copied from the Microsoft 365 Outlook page.
8. Specify your Microsoft 365 email address as the **Sender** address.
9. Check the **SMTP authentication** checkbox, and specify your Microsoft 365 account credentials.

> **NOTE:** The email address specified in the **User name** field must match the email address specified in the **Sender address** field.

10. Check the **Use Secure Sockets Layer encrypted connection (SSL/TLS)** checkbox.
    - Uncheck the **Use implicit SSL authentication** checkbox.

> **IMPORTANT:** Multi-Factor Authorization is incompatible with this functionality. Learn more in [Fix Issues when Sending Email Using Microsoft 365 ⸱ Microsoft](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/fix-issues-with-printers-scanners-and-lob-applications-that-send-email-using-off#error-authentication-unsuccessful).

### Related articles

- https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/fix-issues-with-printers-scanners-and-lob-applications-that-send-email-using-off#error-authentication-unsuccessful (Fix Issues when Sending Email Using Microsoft 365 ⸱ Microsoft)
