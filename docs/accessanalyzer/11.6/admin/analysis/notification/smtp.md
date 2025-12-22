---
title: "Notification: SMTP"
description: "Notification: SMTP"
sidebar_position: 70
---

# Notification: SMTP

The SMTP properties page is available when the Email notification type is selected on the Type page.
Use this page to specify SMTP notification properties, including recipients, subject line, and email
body.

![Notification Data Analysis Module wizard SMTP properties page](/images/accessanalyzer/11.6/admin/analysis/notification/smtp.webp)

The following options are available:

- E-mail – Enter an email address to add to the notification list

    - Add – Add an email address to the E-mail field
    - Remove – Remove an email address from the Recipients list
    - Combine multiple messages into single message – Sends one email for all objects in the record
      set instead of one email per object to all recipients

- Subject – Specify a subject for the email. The subject can include field variables.

    :::info
    If configuring a Notification analysis module for a pre-configured job, it is
    recommended not to change the existing field variables.
    :::


- Insert Field – Select a source data column to add to the message body or subject line. Click the
  drop-down to see a list of columns. Once the column displays in the field, click an arrow to
  insert the field.

    - Down arrow – Adds the selected source column to the message text
    - Up arrow – Adds the selected source column to the subject text

- Embed HTML Report – Embed a HTML report in the notification email. Click the Embed HTML Report
  button to navigate to the HTML file.
- Show sample input source data – Opens the Sample Source Data window, containing sample input
  source data as it currently exists in the database
- Show dialog to set SMTP options – Opens the SMTP Options window, where SMTP global settings can be
  overwritten through manual configuration
- Preview – Displays a preview of the email.

    :::note
    The preview may not show any or all of the filters applied in previous steps.
    :::


- Clear Template – Clears all data from the subject and message boxes. Does not clear e-mail
  addresses.
- Text Box – Specify the text of the email message. The toolbar above the text box contains various
  icons providing access to text editing and formatting tools. To insert fields from Enterprise
  Auditor, choose a field from the drop-down menu and click the Down arrow. Block tag formatting is
  supported.
