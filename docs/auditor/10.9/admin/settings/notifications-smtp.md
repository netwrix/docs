---
title: "Enable Notifications via SMTP"
description: "Enable Notifications via SMTP"
sidebar_position: 52
---

# Enable Notifications via SMTP

To enable notifications via SMTP, go to **Settings > Notifications**, select **SMTP** in the
**Method** column, and click **Modify** next to **Default SMTP settings** to review and adjust
the settings used to deliver email notifications, reports, and other messages.

| Option                                                  | Description                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SMTP server                                             | Enter your SMTP server address. It can be your company's Exchange server or any public mail server (e.g., Gmail, Yahoo).                                                                                                                                                                      |
| Port number                                             | Specify your SMTP server port number. Valid range is 1–65535.                                                                                                                                                                                                                                 |
| Sender address                                          | Enter the address that will appear in the "From" field. **_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified email address and inform you if any problems are detected.                                                                          |
| SMTP authentication                                     | Select this checkbox if your mail server requires SMTP authentication. When selected, specify the **User name** and **Password** below.                                                                                                                                                     |
| User name                                               | Enter a user name for SMTP authentication. Available only when **SMTP authentication** is selected.                                                                                                                                                                                          |
| Password                                                | Enter a password for SMTP authentication. Available only when **SMTP authentication** is selected.                                                                                                                                                                                           |
| Use Secure Sockets Layer encrypted connection (SSL/TLS) | Select this checkbox if your SMTP server requires SSL/TLS to be enabled.                                                                                                                                                                                                                      |
| Use implicit SSL authentication                         | Select this checkbox if implicit SSL mode is used, meaning an SSL connection is established before any meaningful data is sent. Available only when **Use Secure Sockets Layer encrypted connection (SSL/TLS)** is selected.                                                                |
| Enforce certificate validation to ensure security       | Select this checkbox to verify the security certificate on every email transmission. Selected by default. This option is not available for User Activity auditing or Netwrix Auditor tools.                                                                                                 |

You can configure Activity Summary frequency, format, and delivery time for each monitoring plan
individually. See the [Fine-Tune Your Plan and Edit Settings](/docs/auditor/10.9/admin/monitoringplans/finetune.md)
topic for more information.
