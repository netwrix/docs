---
title: "Manage the Notification Queue"
description: "Manage the Notification Queue"
sidebar_position: 10
---

# Manage the Notification Queue

GroupID maintains a queue of the email notification generated on events that occur in the identity
stores, and sends them one by one through the SMTP server configured for the respective identity
store. Each new email notification is stacked at the top of the queue.

When the SMTP server for an identity store is down and notifications in the queue cannot be
delivered, GroupID attempts to re-send them until they are successfully delivered. Successfully
delivered notifications move out of the queue.

The Email service is responsible for queuing and sending notifications. You can also manually send
notifications as well as delete notifications. Both actions are tracked in Admin Center history.

GroupID also features a Notification Editor that lists the notification templates for all
notifications that GroupID generates on various events. See the
[Customize Notifications](/docs/directorymanager/11.0/signin/notification/customize.md)
topic for details.

What do you want to do?

- [View the Notification Queue](#view-the-notification-queue)
- [Send a Notification Urgently](#send-a-notification-urgently)
- [Delete a Notification](#delete-a-notification)

## View the Notification Queue

In Admin Center, click **Notifications** in the left pane. On the **Notification Queue** page, the
following is displayed for a notification:

- **Subject:** the subject line of the email notification
- **Date:** the date and time the notification was generated
- **To:** the notification recipients specified in the _To_ line
- **From:** the email ID of the sender
- **CC:** the notification recipients specified in the _CC_ line
- **Last Retry:** the date and time of the most recent attempt to send the notification
- **Retry Count:** the total number of attempts to send the notification
- **In Progress:** displays one of the following statuses for a notification:

    - **True:** indicates that the notification is currently being processed for sending
    - **False:** indicates that the notification is not under process

    As GroupID processes notifications in batches, all notifications in a batch have the same
    status.

### Filter Notifications

Click **Filter** to filter the notifications based on their status as either _pending_ or _failed_.

In the **Categories** list on the **Filter** dialog box, select one of the following and click
**Apply**:

- **Pending:** to view notifications that are queued for sending and the Email service has not yet
  attempted to send them.
- **Failed:** to view notifications the Email service attempted to send but failed. The retry count
  for such notifications is incremented by ‘1’ on every failed attempt.
- **All:** to view all pending and failed notifications in the queue.

### Available Actions

- Click **Send** for a notification in the **Actions** column to send it urgently, without waiting
  for the Email service to send it on its turn.
- Click **Delete** for a notification in the **Actions** column to delete it.
- Click **Refresh** to refresh the notification queue.
- Click **Notification Editor** to launch the Notification Editor, where you can view and modify
  notification templates. See the
  [Customize Notifications](/docs/directorymanager/11.0/signin/notification/customize.md)
  topic for details.

## Send a Notification Urgently

1. In Admin Center, click **Notifications** in the left pane.
2. On the **Notification Queue** page, you can send a single notification or multiple notifications
   urgently, rather than waiting for the Email service to send them in their order of sending. All
   attempts to send notifications manually are tracked in Admin Center history.

    - Click **Send** for a notification in the **Actions** column to send it urgently.
    - To send multiple notifications, select the check boxes for those notifications. To select all
      notifications, select the check box in the header row. This displays the following icons:

        ![send_refresh](/images/directorymanager/11.0/admincenter/notification/send_refresh.webp)

        Click the **Send** icon to send the selected notifications urgently.

## Delete a Notification

You can delete a notification in the queue to prevent GroupID from sending it. Deletion events are
logged in Admin Center history.

To delete a notification:

1. In Admin Center, click **Notifications** in the left pane.
2. On the **Notification Queue** page, you can delete a single notification or multiple
   notifications together.

    - Click **Delete** for a notification in the **Actions** column to delete it.
    - To delete multiple notifications, select the check boxes for those notifications. To select
      all notifications, select the check box in the header row. This displays the following icons:

        ![send_refresh](/images/directorymanager/11.0/admincenter/notification/send_refresh.webp)

        Click the **Delete** icon to delete the selected notifications.

**See Also**

- [Notifications](/docs/directorymanager/11.0/signin/notification/overview.md)
- [Email Service](/docs/directorymanager/11.0/signin/service/emailservice.md)
- [Admin Center History](/docs/directorymanager/11.0/signin/concepts/history_1.md)
