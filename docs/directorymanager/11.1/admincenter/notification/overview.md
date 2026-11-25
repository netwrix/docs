---
title: "How Directory Manager Email Notifications Work"
description: "Learn how Directory Manager generates, queues, and sends email notifications, and how notification templates apply across identity stores."
keywords:
  - email notifications
  - notification queue
  - SMTP server
  - notification templates
sidebar_position: 90
---

# How Directory Manager Email Notifications Work

Directory Manager generates email notifications when certain events occur. It sends the notifications
to administrators, object owners, and other specified recipients.

To enable notifications, define an SMTP server for an identity store. Admin Center and the Directory
Manager portal use the SMTP server of the respective identity store to send email notifications.

Directory Manager predefines templates for all kinds of email notifications. The templates are
available in different languages, so you can customize a notification template for any language.

Notification templates are global and work for all identity stores. Any customization to a template
changes that notification for all identity stores.

Directory Manager also has an email service that keeps a queue of all notification requests from
different identity stores and sends them one by one. This is especially helpful when the SMTP server
for an identity store is down. Notifications stay in the queue until the SMTP server is up again,
and then they're delivered.
