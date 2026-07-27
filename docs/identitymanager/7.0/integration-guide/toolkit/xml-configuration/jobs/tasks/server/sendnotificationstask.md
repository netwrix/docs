---
title: "SendNotificationsTask"
description: "Task that sends a notification to each configured recipient."
sidebar_position: 17
---

Task that sends all the custom notifications defined by the [`Notification`](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notification) XML tag.


## Examples
The following example, included in a job potentially scheduled periodically, will send all custom notifications defined via `Notification` such as the example below. The task will send the notifications concerning the `Directory_User` entity type.

```xml
<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">
	<TaskEntityType EntityType="Directory_User" />
</SendNotificationsTask>

Knowing that we have for example:
<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &amp;quot;New Employee&amp;quot;;" QueryFilterExpression="C#:user:return $&amp;quot;join MainRecord r where r.ContractStartDate > \&amp;quot;{DateTime.UtcNow.ToString(&amp;quot;yyyy-MM-ddTHH:mm:ssZ&amp;quot;)}\&amp;quot;&amp;quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| BatchSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Block size for batch calculation. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
