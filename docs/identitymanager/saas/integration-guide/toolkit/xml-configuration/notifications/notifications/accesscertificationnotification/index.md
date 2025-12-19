---
title: "Access Certification Notification"
description: "Access Certification Notification"
sidebar_position: 10
---

# Access Certification Notification

Reminder notification concerning access certification.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for access certification (on resources from `Directory_User`) and have
not yet performed the action. The email's content and styles are those from the original
notification, but the subject is overridden by `TitleExpression` here.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/AccessCertification_Reminder.cshtml" CssTemplate="./Templates/AccessCertification_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                          |
