---
title: "Enable Notifications via SMTP"
description: "Enable Notifications via SMTP"
sidebar_position: 30
---

# Enable Notifications via SMTP

To enable notifications via SMTP, go to **Settings > Notifications**, select **SMTP** in the
**Method** column, and click **Modify** next to **Default SMTP settings** to review and adjust
the settings Netwrix Auditor uses to deliver email notifications, reports, and other messages.

| Option                                                  | Description                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SMTP server                                             | Enter your SMTP server address. It can be your company's Exchange server or any public mail server (e.g., Gmail, Yahoo).                                                                                                                                                                      |
| Port number                                             | Specify your SMTP server port number. Valid range is 1–65535.                                                                                                                                                                                                                                 |
| Sender address                                          | Enter the address that will appear in the "From" field. **_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified email address and inform you if it detects any problems.                                                                          |
| SMTP authentication                                     | Select this checkbox if your mail server requires SMTP authentication. When you select it, specify the **User name** and **Password**.                                                                                                                                                      |
| User name                                               | Enter a user name for SMTP authentication. Available only when you select **SMTP authentication**.                                                                                                                                                                                           |
| Password                                                | Enter a password for SMTP authentication. Available only when you select **SMTP authentication**.                                                                                                                                                                                            |
| Use Secure Sockets Layer encrypted connection (SSL/TLS) | Select this checkbox if your SMTP server requires SSL/TLS.                                                                                                                                                                                                                                    |
| Use implicit SSL authentication                         | Select this checkbox if your server uses implicit SSL mode, meaning it establishes an SSL connection before sending any meaningful data. Available only when you select **Use Secure Sockets Layer encrypted connection (SSL/TLS)**.                                                        |
| Enforce certificate validation to ensure security       | Select this checkbox to verify the security certificate on every email transmission. Selected by default. This option isn't available for User Activity auditing or Netwrix Auditor tools.                                                                                                 |

You can configure Activity Summary frequency, format, and delivery time for each monitoring plan
individually. See the [Fine-Tune Your Plan and Edit Settings](/docs/auditor/10.9/admin/monitoringplans/finetune.md)
topic for more information.
