---
description: >-
  Describes how to notify users who do not have an email address in the audited
  domain by using the `mail` LDAP attribute or by specifying an external address
  in Netwrix Password Reset. Includes steps to configure the target email and
  notes about SMTP relay requirements.
keywords:
  - password expiration
  - notify users
  - LDAP
  - mail attribute
  - SMTP relay
  - Netwrix Password Reset
  - PEN
  - monitoring plan
  - Send reports to administrators
products:
  - auditor
sidebar_label: How to Notify Users Without Email in Password Expi
tags: []
title: "How to Notify Users Without Email in Password Expiration Notifier"
knowledge_article_id: kA00g000000PbdDCAS
---

# How to Notify Users Without Email in Password Expiration Notifier

## Question

How does Netwrix Password Reset (Password Expiration Notifier, PEN) notify a user with no associated account in the audited domain?

## Answer

To notify the user, PEN uses the `mail` LDAP attribute assigned to the target account. If there is no associated email, you can specify the target email manually. Refer to the following steps:

1. Run PEN. Select the correct monitoring plan and click **Edit**.  
2. In the **Send reports to administrators** field, specify the target email separated by a comma. Save the changes.

The specified email should now receive reports on expiring passwords.

> **IMPORTANT:** In the described scenario, PEN uses the SMTP server specified in the **Notifications** tab to send notifications to external email addresses. The SMTP server must have a correctly configured relay service to send emails to external mailboxes.
