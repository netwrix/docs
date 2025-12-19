---
title: "SendMail Action: Properties"
description: "SendMail Action: Properties"
sidebar_position: 10
---

# SendMail Action: Properties

Use the Properties page to specify the recipients of the email.

![Send Mail Action Module Wizard Properties page](/images/accessanalyzer/11.6/admin/action/sendmail/properties.webp)

Use the following fields to specify the recipient information:

- Recipient column – Use the drop-down menu to specify the column from the data table containing
  intended recipients, for example a column containing email addresses
- Recipient type – Use the drop-down menu to specify the data type of the Recipient column, for
  example SMTP mail address
- Carbon copy (CC) – Optionally, specify one or more additional email addresses to receive a
  carbon-copy of the SendMail message, for example an address not included in the source table.

    - Use the following email address – Enter one or more additional email addresses. Separate
      multiple addresses with a semi-colon and a space.
    - Use a column from the table – Use the drop-down menu to specify a column from the data table

- Combine multiple messages into a single message when all recipients are the same – Select this
  checkbox to send only one message to each recipient as a result of this action (even recipients
  who appear more than once in the job results)
