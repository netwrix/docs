---
description: >-
  Learn how to customize the email notification template for Account Lockout
  Examiner by editing the notification_template.txt file and using AD attributes
  and internal variables.
keywords:
  - account lockout
  - notification template
  - notification_template.txt
  - AD attributes
  - lockout notification
  - Netwrix Account Lockout Examiner
  - email template
  - remote control
  - help-desk link
products:
  - auditor
sidebar_label: How to customize email notification template
tags: []
title: "How to customize email notification template"
knowledge_article_id: kA00g000000H9dbCAC
---

# How to customize email notification template

## Overview
Account Lockout Examiner can send a notification when a lockout occurs. You can edit the notification text or title by modifying the notification template.

## Template location
The template file `notification_template.txt` is stored in the product installation folder. The default path is:
`C:\Program Files (x86)\NetWrix Account Lockout Examiner`

## Template sections
The notification template consists of four sections:

- The `SUBJECT` section contains the text reflected in the message subject.
- The `BODY`, `WEB` and `REMOTE_CONTROL` sections contain the text reflected in the message body.
- The `BODY` section contains the main text of the notification.
- The `WEB` section contains a link to the Help-Desk portal and related text, and is shown only if a Link is enabled in Account Lockout Examiner settings.
- The `REMOTE_CONTROL` section contains text providing Remote control instructions, and is shown only if Remote control is enabled in Account Lockout Examiner settings.

## Modifying the template
You can modify the template in the following ways:

- Edit any text within the template sections.
- Add any AD attribute name. The attribute name should be in the following format: ` %AD.[attribute]%`.  
  - For example, with the ` %AD.Displayname%` attribute added into the template, the notification message will show the Display name of the locked out user account.
- Add any internal variable name:
  - ` %NTAccount%` - shows the name of the locked out account.
  - ` %WorkStation%` - shows the name of the workstation where an account was locked out.
  - ` %LockoutTime%` - shows the lockout time.
  - ` %Link%` - shows the link to the web portal.

## Example
[![User-added image]./../0-images/ka04u000000HcWM_0EM700000004wyA.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAdA&feoid=00N700000032Pj2&refid=0EM700000004wyA)

