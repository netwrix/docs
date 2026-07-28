---
title: "Notification"
description: ""
sidebar_position: 1
---

A notification can be configured to be sent to a given user on a regular basis at specified times, through the [`SendNotificationsTask`](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/jobs/tasks/server/sendnotificationstask) as part of a job.


## Examples
The following example defines a notification to inform/remind managers of the arrival of new employees in their team.

The notification is built based on:
* the template `Notification.cshtml`;
* the styles `Notification.css`;
* the subject defined by `TitleExpression`.

The notification is sent for each new user, i.e. each user whose contract start date is in the future. The notification is sent to the new user's manager(s).

The notification will be sent again as a reminder after 7 days, by the next `SendNotificationsTask`.

```xml
<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &amp;quot;New Employee&amp;quot;;" QueryFilterExpression="C#:user:return $&amp;quot;join MainRecord r where r.ContractStartDate > \&amp;quot;{DateTime.UtcNow.ToString(&amp;quot;yyyy-MM-ddTHH:mm:ssZ&amp;quot;)}\&amp;quot;&amp;quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />
```


## Properties

|Property|Details|
|---|---|
| CssTemplate optional | **Type:** String **Description:** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with ``. |
| Identifier required | **Type:** String **Description:** Unique identifier of the notification. |
| OwnerEntityType required | **Type:** Int64 **Description:** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression` and `QueryFilterExpression`. |
| QueryFilterExpression optional | **Type:** String **Description:** C# expression that returns a Identity Manager Squery in order to define the sending condition of the notification. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| RazorTemplate optional | **Type:** String **Description:** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with ``. |
| RecipientMailBinding optional | **Type:** Int64 **Description:** Binding of the property that corresponds to the email addresses that will receive the notification. |
| ReminderInterval <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded. |
| TitleExpression optional | **Type:** String **Description:** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. **Note:** This property is only supported for custom notifications. Typed notifications (such as AccessCertificationNotification, RoleReviewNotification, ProvisioningReviewNotification, and ManualProvisioningNotification) use predefined templates and do not support title customization via this property. Use [`NotificationTemplate`](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate) for customizing typed notifications instead. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
