---
title: "Survey: Mail – Message"
description: "Survey: Mail – Message"
sidebar_position: 70
---

# Survey: Mail – Message

Use this page to specify the text of the email. When first accessing this page, the cursor appears
in the **Load from template** field. Survey templates are a legacy feature and Netwrix recommends
not using them.

![Survey Action Module Wizard Mail – Message page](/images/accessanalyzer/12.0/admin/action/survey/mailmessage.webp)

Placeholder text displays in the Message box. This text includes a hyperlink to the web page hosting
the survey. Placeholder text can be modified but the link cannot be removed. The link does not
activate until the message is sent.

Use the following fields to specify the text of the email:

- Subject – Specify subject text for the email. The contents of this field displays as the Subject
  line of the delivered email. Enter text directly and use the **Insert field** to insert one or
  more data fields. This is a required field.
- Insert Field – Inserts a data field into the subject or body of the email. The drop-down menu
  displays a list of available fields. Once a selection displays in the field, click on the blue
  Down and Up arrows to insert the field into the body or the subject, respectively. This field is
  optional.
- The following are buttons appearing on a bar below the Subject field:

    - Show sample input source data – To display a table of sample source data, click the icon next
      to the blue arrows
    - Show dialog to set SMTP options – To override the global SMTP settings, click the icon next to
      the blue arrows to display the SMTP Options dialog box
    - Preview – Displays the Messages Preview window containing a preview of the current email
      message. Click **Send** to send a single message to the addresses in the Recipient field in
      the Message Preview window. The Preview button is active only if the Recipients field is
      populated. See the [Messages Preview Window](#messages-preview-window) topic for additional
      information.
    - Clear Template – Clears any content from the Subject and Text Entry box

- Load from template – Survey templates are a legacy feature. It is strongly recommended not use
  templates when creating surveys.
- Save to template – Saves the current email subject and content to a template. If an existing
  template name appears in the **Load from template** field, clicking this button updates that
  template. If the **Load from template** field is empty or contains a name other than one of the
  existing templates, clicking this button accesses the Save SendMail Template window and changes
  can be saved to a new template. Templates reside locally on the host computer as XML files, in the
  `Actions/SM_Templates` folder.

## Messages Preview Window

The Messages preview window opens when you click **Preview** on the Mail – Message page of the
Survey Action Module Wizard. This window displays a preview of the email, including any dynamic
fields.

![Messages preview window](/images/accessanalyzer/12.0/admin/action/survey/messagespreview.webp)

The window has the following options:

- Blue arrow buttons – Click to view other recipients
- Send – Sends a single message to the addresses in the **Recipients** field
