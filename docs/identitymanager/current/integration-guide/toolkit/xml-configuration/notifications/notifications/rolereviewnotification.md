---
title: "RoleReviewNotification"
description: "Reminder notification concerning role review."
sidebar_position: 5
---

Reminder notification concerning role review.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified by the native notification for role review (on resources from `Directory_User`) and have not yet performed the action.

```xml
<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" ReminderInterval="2880" />
```

The following example sends the exact same notification as the previous example, but with different templates for the content and the styles.

```xml
<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/RoleReview_Reminder.cshtml" CssTemplate="./Templates/RoleReview_Reminder.css" ReminderInterval="2880" />
```

:::note
The `TitleExpression` property on typed notifications is not used. To customize notification subject and body, use [`RazorTemplate` and `CssTemplate`](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate) instead, or use the [`NotificationTemplate`](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate) configuration element.
:::

## Properties

|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Unique identifier of the notification. |
| OwnerEntityType required | **Type:** String **Description:** Identifier of the entity type that represents the population affected by the notification. |
| CssTemplate optional | **Type:** String **Description:** Path to the css file that defines the styles for the email.**Note:** the path must be relative to the configuration folder, and the file must be inside it.**Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| RazorTemplate optional | **Type:** String **Description:** Path to the Razor cshtml file that defines the email's body template.**Note:** the path must be relative to the configuration folder, and the file must be inside it.**Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Time period (in minutes) after which a reminder of the original notification should be sent.**Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded. |
