---
title: "Email Delivery Options"
description: "Email Delivery Options"
sidebar_position: 10
---

# Email Delivery Options

You must configure the email delivery options in the PPS Properties page before the Password Policy
Enforcer Mailer will send email notification to users.

Follow the steps below to configure the email delivery options.

**Step 1 –** Click the **Password Policy Server** item to display the Password Policy Server view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

**Step 3 –** Click the **Email** tab.

![the_ppe_mailer](/images/passwordpolicyenforcer/10.2/administration/the_ppe_mailer.webp)

**Step 4 –** Select the **Disable email reminders** option to disable email delivery.

Select the **Send email to an SMTP server** option to have the Password Policy Enforcer Mailer send
email notification directly to an SMTP server. Type the name or IP address of an SMTP server in the
**Server** text box, and the SMTP port number in the **Port** text box. Enter credentials for the
SMTP server in the Username and Password fields.

Select the **Use TLS** checkbox to enable TLS encryption when using SMTP for email notification
delivery.

Select the **Save email to a pickup folder** option to have the Password Policy Enforcer Mailer save
emails to a folder for later delivery by a mail server. Click the **Browse** button to select a
folder. The mail server must monitor this folder for new email.

:::note
Saving email to a pickup folder is the fastest and most reliable delivery method. Use this
option if your mail server supports pickup folders.
:::


The Password Policy Enforcer Mailer sends emails at 2:00 AM every day. Check the Windows Application
Event Log to monitor its progress. You can also run the Password Policy Enforcer Mailer from the
command line to send email immediately, or to troubleshoot problems.
