---
title: "Email Message Options"
description: "Email Message Options"
sidebar_position: 20
---

# Email Message Options

Email message options are set for each password policy from the
[Maximum Age Rule](/docs/passwordpolicyenforcer/10.2/administration/rules/maximum_age_rule.md)
rule properties page. Follow the steps below to configure the email message options for a policy.

**Step 1 –** Click the **Polices** item to display the Polices view.

**Step 2 –** Double-click the desired policy in the right pane of the management console.

**Step 3 –** Double-click the **Age (Max)** rule.

**Step 4 –** Select the **Enabled** check box to enable the Maximum Age rule.

**Step 5 –** Choose a value from the Days and Mode dropdown lists.

**Step 6 –** Click the **Email** tab.

![the_ppe_mailer_1](/images/passwordpolicyenforcer/10.2/administration/the_ppe_mailer_1.webp)

Choose values from the days drop-down lists to specify when emails will be sent. By default, emails
are sent 14, 7, and 2 days before a user's password expires.

Choose the first item in a list (blank) to send fewer than three emails.

Type the name and email address you wish to appear in the email's From field in the **From** text
box. The correct format is `"Display Name" <mailbox@domain.com>`

Type the text for the email's Subject field in the **Subject** text box.

Type the body of the email in the large text box. The email is sent as plain text unless the body
includes the `<html>` tag. If sending email as HTML, you must include the complete HTML document
starting with `<html>` and ending with `</html>`. If the body is too long to fit in the text box,
type a path to a file like this:

`file:C:\path\filename.ext`

The path can contain environment variables like %SystemRoot%. Do not use quotes for long filenames
and do not include any other text. The Password Policy Enforcer Mailer will read the email body from
the specified file.

The email's subject and body can contain various macros. Use these macros to personalize the email.

| Macro               | Replaced with                         |
| ------------------- | ------------------------------------- |
| [LOGON_NAME]        | User's logon name                     |
| [FIRST_NAME]        | User's first name                     |
| [LAST_NAME]         | User's last name                      |
| [DAYS_TO_EXPIRY]    | Days until password expires           |
| [EXPIRY_DATE]       | Expiry date in short format           |
| [EXPIRY_DATE_LONG]  | Expiry date in long format            |
| [EXPIRY_DAY]        | Expiry day (1 to 31)                  |
| [EXPIRY_DAY_NAME]   | Expiry day (Monday, Tuesday, ...)     |
| [EXPIRY_MONTH]      | Expiry month (1 to 12)                |
| [EXPIRY_MONTH_NAME] | Expiry month (January, February, ...) |
| [EXPIRY_YEAR]       | Expiry year (2021, 2022, ...)         |
