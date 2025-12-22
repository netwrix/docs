---
title: "Survey: Mail – Properties"
description: "Survey: Mail – Properties"
sidebar_position: 60
---

# Survey: Mail – Properties

Use this page to specify the email recipients.

![Survey Action Module Wizard Mail – Properties page](/images/accessanalyzer/12.0/admin/action/survey/mailproperties.webp)

Use the following fields to specify the recipient information:

- Recipient column – Specify the data table columns containing intended recipient information

    - For example, a column containing email addresses. The drop-down menu displays a list of
      possible column types.

- Recipient type – Specify the data type of the Recipient column. The drop-down menu displays a list
  of recipient types, for example **SMTP email address**.
- Carbon copy (CC) – (Optional) Specify one or more additional email addresses to receive a
  carbon-copy of the SendMail message, for example an address not included in the source table.
  Separate multiple address with a semi-colon and a space.
- Combine multiple messages to a recipient into one message when all recipients are the same –
  Select this option to send only one message to each recipient as a result of this action (even
  recipients who appear more than once in the job results)
