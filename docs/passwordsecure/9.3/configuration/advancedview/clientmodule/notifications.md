---
title: "Notifications"
description: "Notifications"
sidebar_position: 30
---

# Notifications

## What are notifications?

With the notification system, you are always up-to-date on all events that you consider important.
Almost all modules allow users to configure notifications. All configured messages are only created
for the currently registered Netwrix Password Secure user. It is not possible to create a
notification for another user. Each user can and should define himself which passwords, which
triggers as well as changes are important and informative for him. The configuration of visibility
is explained in a similar way to the other modules in one place
[Visibility](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/visibility.md)

![Notifications modul](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/rdp_and_ssh_applications/recording_a_session/notifications_1-en.webp)

NOTE: The reading pane is deactivated in this module by default. It can be activated in the
"Display" tab in the ribbon.

## Module-specific ribbon functions

There are also some ribbon functionalities that are exclusively available for the notification
module. In particular, the function **Forward important notifications to email addresses** enables
administrators and users to maintain control and transparency independent of the location.

![Ribbon notifications](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/notifications/notifications_2-en.webp)

### Mark notifications as read

The two buttons on the ribbon enable you to mark notifications as read/unread. In particular, the
filter criterion available in this context (see following screenshot) enables fast sorting according
to current and also historical notifications.

![filter notifications](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/notifications/notifications_3-en.webp)

It is possible to mark the notifications as read/unread via the ribbon and also via the context menu
that is accessed using the right mouse button. If the corresponding setting has been activated,
opening a notification will also mean that it is marked as read.

## Manual configuration of notifications

Irrespective of the selected module, permissions can be configured manually for objects. The
following dialogue can be opened via the ribbon in the "Actions" tab:

![Manual configuration of notifications](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/notifications/notifications_5-en.webp)

- **Notification**: Definition for the trigger
- **Value**: Defines whether a notification should be created for the previously defined trigger. In
  the example for the "Apple" record, this only occurs when the record is edited.
- **Event type**: The event type for the generated notifications can be either "Info", "Warning" or
  "Error". This information can also be used e.g. as an additional filter criterion.

In contrast to previous editions, it is best to configure the notifications manually. This ensures
that a notification is really only triggered for relevant events.

## Other triggers for notifications

As well as manually configurable notifications, there are other triggers in Netwrix Password Secure
which will result in notifications.

- [Seals](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seals.md): Requests
  to release sealed records are handled via the notification system
- [System tasks](/docs/passwordsecure/9.3/configuration/advancedview/mainmenufc/extras/systemtasks/system_tasks.md)s: If reports are automatically
  created via the system tasks, these are also made available in the form of a notification. If this
  type of notification is selected, it can be directly opened via the corresponding button that
  appears on the ribbon.

![Ribbon functions notifications](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/notifications/notifications_6-en.webp)

## Automatic deletion of old notifications

If desired, notifications can be automatically cleaned up. This option can be configured on the
**Server Manager**. Further information can be found in the section
[Managing databases](/docs/passwordsecure/9.3/configuration/servermanger/managingdatabases/managing_databases.md).
