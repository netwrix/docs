---
title: "SendNotificationsTask"
description: "SendNotificationsTask"
sidebar_position: 170
---

# SendNotificationsTask

Task that sends all the custom notifications defined by the
[`Notification`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/notifications/notification/index.md)
XML tag.

## Examples

The following example, included in a job potentially scheduled periodically, will send all custom
notifications defined via `Notification` such as the example below. The task will send the
notifications concerning the `Directory_User` entity type.

```

**<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">	<TaskEntityType EntityType="Directory_User" /></SendNotificationsTask>**

Knowing that we have for example:
<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
