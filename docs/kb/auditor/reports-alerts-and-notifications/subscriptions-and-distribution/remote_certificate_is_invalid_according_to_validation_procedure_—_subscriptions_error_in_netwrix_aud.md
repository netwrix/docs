---
description: >-
  This article addresses the "Remote Certificate Is Invalid According to Validation Procedure" error in Netwrix Auditor, detailing symptoms, causes, and solutions.
keywords:
  - Netwrix Auditor
  - certificate validation
  - SMTP settings
sidebar_label: Remote Certificate Error
tags: []
title: "Remote Certificate Is Invalid According to Validation Procedure — Subscriptions Error in Netwrix Auditor"
knowledge_article_id: kA04u00000110x5CAA
products:
  - auditor
---

# Remote Certificate Is Invalid According to Validation Procedure — Subscriptions Error in Netwrix Auditor

## Symptoms

- Subscription reports are missing.
- Subscription status reads **Failed** with the following error message:

```
The following subscriptions could not be sent to the recipient recipient@domain.com:
Subscription to the %report_name% report
Error: The remote certificate is invalid according to the validation procedure.
```

## Causes

- Certificate validation is enforced for notifications.
- Incorrect SMTP server stated in Notifications SMTP settings.

## Resolution

If enforced certificate validation is intended, refer to the following steps to troubleshoot the issue:

- Ensure your SSL certificate is still valid. Netwrix Auditor stops generating reports once your certificate expires. In case you’re using a self-signed certificate in your environment, you can reboot your Netwrix Auditor server to reissue the certificate.
- If you would like to set up a secure connection between your Netwrix Auditor instance and SQL Server Reporting Services, refer to the following article for additional information: [Set Up Secure Connection Between Auditor and SSRS via SSL/TLS Channel](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/set_up_secure_connection_between_auditor_and_ssrs_via_ssltls_channel).
- Make sure the FQDN of your SMTP server is stated instead of the IP address in **Netwrix Auditor settings** > **Notifications**.

If certificate validation was not intended, refer to the following steps:

1. In the main Netwrix Auditor screen, select **Settings**.
2. In the left pane, select **Notifications**, and click **Modify** under **Default SMTP Settings**.
3. Uncheck the **Use Secure Socket Layer encrypted connection (SSL/TLS)** checkbox and click **OK** to save changes.

### Related Articles

[Set Up Secure Connection Between Auditor and SSRS via SSL/TLS Channel](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/set_up_secure_connection_between_auditor_and_ssrs_via_ssltls_channel)