---
description: >-
  Explains how to customize the text of email notifications by editing the
  template .txt files in the Templates subfolder of the Netwrix Password Reset
  installation directory.
keywords:
  - email templates
  - notifications
  - Netwrix Password Reset
  - templates
  - localization
  - change_body_template
  - enroll_template
  - unlock_template
products:
  - general
sidebar_label: How to change the text of email notifications
tags: [configuration-and-customization]
title: "How to change the text of email notifications"
knowledge_article_id: kA00g000000H9TICA0
---

# How to change the text of email notifications

Is there a way for me to change the text in these emails that come out when a users signs up to Netwrix Password Reset?

There is a way to change the text of notifications.

## Where templates are stored

E-mail templates are stored in the **Templates** subfolder of the Netwrix Password Reset installation directory. There are a lot of text files for different languages there.

## Some useful tips

1. We use clear titles for template text files. For example, the file `change_body_template.txt` contains the body text of the email sent as a change password notification.
2. There are 2 files for each type of notification: one for the subject of an email and one for the body.
3. Files with `_adm` in the filename are templates for emails sent to administrators (specified on **Admin portal/Settings/Alerts**), while files without `_adm` are sent to the user(s).
4. Languages are specified as additional postfix (for example `_de`, `_fr`).

## Available languages

| File   | Language            |
|--------|---------------------|
| cn.asp | Chinese             |
| de.asp | German              |
| en.asp | English             |
| es.asp | Spanish             |
| fr.asp | French              |
| he.asp | Hebrew              |
| it.asp | Italian             |
| jp.asp | Japanese            |
| ko.asp | Korean              |
| pt.asp | Portuguese          |
| ru.asp | Russian             |
| sk.asp | Slovak              |
| zh.asp | Traditional Chinese |

However Netwrix Password Reset uses only files without postfix in the name (for example `action_body_template.txt`, not `action_body_template_ko.txt`) to send notification. Here is the full list of files used:

- `action_body_template.txt`
- `action_subject_template.txt`
- `change_body_template.txt`
- `change_body_template_adm.txt`
- `change_subject_template.txt`
- `change_subject_template_adm.txt`
- `enroll_body_template.txt`
- `enroll_body_template_adm.txt`
- `enroll_subject_template.txt`
- `enroll_subject_template_adm.txt`
- `reset_body_template.txt`
- `reset_body_template_adm.txt`
- `reset_subject_template.txt`
- `reset_subject_template_adm.txt`
- `unlock_body_template.txt`
- `unlock_body_template_adm.txt`
- `unlock_subject_template.txt`
- `unlock_subject_template_adm.txt`
- `verification_body_template.txt`
- `verification_body_template_adm.txt`
- `verification_subject_template.txt`
- `verification_subject_template_adm.txt`

## How to change language or edit templates

- To change the language of a template, rename the respective localized template file to the default name.

  Example: to switch the text of the notification about a password change to German, rename `change_body_template_de.txt` to `change_body_template.txt`.

- Alternatively, edit the existing default English templates.

To do this, edit the `.txt` files located in the **Templates** subfolder of the Netwrix Password Reset installation directory.
