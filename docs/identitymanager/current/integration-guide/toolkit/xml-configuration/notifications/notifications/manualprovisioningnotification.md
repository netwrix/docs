---
title: "ManualProvisioningNotification"
description: "Reminder notification concerning manual provisioning."
sidebar_position: 2
---

Reminder notification concerning manual provisioning.


## Examples
The following example sends after 2 days a reminder notification to users who were already notified by the native notification for manual provisioning (on resources from `Directory_User`) and have not yet performed the action.

```xml
<ManualProvisioningNotification Identifier="ManualProvisioning_Directory_User_Reminder" OwnerEntityType="Directory_User" ReminderInterval="2880" />
```

:::note
The `TitleExpression`, `RazorTemplate` and `CssTemplate` properties on typed notifications aren't used. To customize the notification subject and body, declare a [`NotificationTemplate`](../notificationtemplate) element with `Identifier="PerformManualProvisioningSummary"`.
:::


## Properties

|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Unique identifier of the notification. |
| OwnerEntityType required | **Type:** String **Description:** Identifier of the entity type that represents the population affected by the notification. |
| ReminderInterval <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Time period (in minutes) after which a reminder of the original notification should be sent.**Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded. |

