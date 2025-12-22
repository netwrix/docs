---
title: "Notifications"
description: "Notifications"
sidebar_position: 90
---

# Notifications

GroupID generates email notifications whenever certain events are triggered. The notifications are
sent to administrators, object owners and other specified recipients.

To enable notifications, you must define an SMTP server for an identity store. Admin Center, GroupID
portal, and the GroupID mobile app use the SMTP server for the respective identity store to send
email notifications.

Templates for all kinds of email notifications are predefined in GroupID. These are available in
different languages, enabling you to customize a notification template for any language.

Since notification templates are global and work for all identity stores, any customization to a
template would change that notification for all identity stores.

GroupID also features an email service that maintains a queue of all notification requests generated
by different identity stores, and sends them one by one. This is especially helpful when the SMTP
server for an identity store is down, as notifications stay in the queue until they are delivered
when the SMTP server is up again.

## Localization

By default, notifications are sent to users in the English language. However, a user can opt to
receive notifications in a different language by personalizing the language settings from the
**Settings** panel in the portal. This setting applies to all GroupID notifications, except in the
following cases, where users continue to receive notifications in English:

- Users whose email addresses are specified in the **To** and **CC** boxes on the **Notifications**
  page. See the
  [Specify Notification Recipients](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md#specify-notification-recipients)
  topic.
- Users whose email addresses are specified in the **Send Notification to the following email IDs**
  box in the notification settings of a Smart Group Update schedule. See step 12 in the
  [Create a Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md#create-a-smart-group-update-schedule)
  topic.
- Users whose email addresses are specified in the **Send notification to the following email IDs**
  box in the notification settings of a Reports schedule. See step 11 in the
  [Create a Reports Schedule](/docs/directorymanager/11.0/signin/schedule/reports.md#create-a-reports-schedule)
  topic.

**See Also**

- [Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
- [Customize Notifications](/docs/directorymanager/11.0/signin/notification/customize.md)
