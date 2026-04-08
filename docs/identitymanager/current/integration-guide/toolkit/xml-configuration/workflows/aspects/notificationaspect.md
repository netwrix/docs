---
title: "NotificationAspect"
description: "Sends a notification email to one or several users."
sidebar_position: 7
---

Sends a notification email to one or several users.


## Examples
The following example sends a notification email based on the template `Notification_Directory_Guest.cshtml` and the subject computed by `SubjectExpression_L1`, which both use data from `Workflow_Directory_Guest:Directory_Guest`, and on the styles from `Notification_Directory_Guest.css`.

```xml
<NotificationAspect Identifier="Notification_Directory_Guest" ExpressionBinding="Workflow_Directory_Guest:Directory_Guest" RazorFile_L1="./Templates/Notification_Directory_Guest.cshtml" CssFile="./Templates/Notification_Directory_Guest.css" SubjectExpression_L1="C#:guest:return &amp;quot;Validating data for guest: &amp;quot; + guest.FirstName + guest.LastName;">
    <PointCut Activity="Directory_Guest_AdvancedStart:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
    <Recipient Type="Binding" Binding="Directory_Guest:Mail" />
</NotificationAspect>
```

:::info
The notification will be sent after the `Request` activity of the `Directory_Guest_AdvancedStart` workflow is executed. See pointcuts for more details.

The notification will be sent to all email addresses defined by `Directory_Guest:Mail`. See recipients for more details.
:::


## Properties

|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Unique identifier of the aspect. |
| Binding optional | **Type:** String **Description:** Binding whose difference with `ExpressionBinding` defines the property that corresponds to identities' email addresses, when `Type` is set to `Binding`. |
| CssFile optional | **Type:** String **Description:** Path to the css file that defines the styles for the email.**Note:** the path must be relative to the configuration folder, and the file must be inside it. |
| ExpressionBinding optional | **Type:** String **Description:** Binding:- that defines the variable type used in the potential expressions specified in the aspect;- whose difference with `Binding` defines the property involved in the aspect.**Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| Priority <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.**Note:** the priority can be a negative value. |
| RazorFile_L1 optional | **Type:** String **Description:** Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16).**Note:** the path must be relative to the configuration folder, and the file must be inside it. |
| SubjectExpression_L1 optional | **Type:** String **Description:** C# expression that defines the email's subject in language 1 (up to 16). The expression's variable type is defined in `ExpressionBinding`. |


## Child Element: PointCut
A pointcut is a mechanism telling Identity Manager when to execute the linked [aspect](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/workflows/aspects).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)


|Property|Details|
|---|---|
|Activity<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the activity whose specified state triggers the aspect.</p>|
|ActivityState<br/>required|<p>**Type**<br />Enumeration<br /><br />**Description**<br />Identifier of the activity state that triggers the aspect.</p>|
|Mode<br/><span class="optionalAttribute">default value: 0</span>|<p>**Type**<br />PointCutMode<br /><br />**Description**<br />Mode defining when exactly the aspect is triggered around the specified workflow's activity state.<br/>`0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used.<br/>`1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used.</p>|

## Child Element: Recipient
A recipient defines one or several identities who will receive a notification from `NotificationAspect`.


### Examples
The following example sends a notification email to the actors of the next step of the workflow.

```xml
<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">
  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Actor" />
</NotificationAspect>
```

The following example sends a notification email to the performers of the `Request` activity of the `Directory_User_StartInternal` workflow when the state is `Executed`.

```xml
<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">
  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Performer" Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" />
</NotificationAspect>
```

The following example sends a notification email to the email address, stored in `Mail`, of the user(s) from `Directory_User` targeted by the workflow, so here the new user created by the `Directory_User_StartInternal` workflow.

```xml
<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">
  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Binding" Binding="Directory_User:Mail" />
</NotificationAspect>
```

The following example sends a notification email to all identities whose email addresses are defined as `{lastName}@company.com`.

```xml
<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">
  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Expression" Expression="C#:user:return user.LastName+&quot;@company.com&quot;;" />
</NotificationAspect>
```

The following example sends a notification to all identities with a profile that includes the right permission.

```xml
<NotificationAspect Identifier="Directory_User_New" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Directory/User/Directory-User-Notification-New.cshtml" CssFile="Notifications.css">
  <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
  <PointCut Activity="Directory_User_NewExternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
  <Recipient Type="Profile" />
</NotificationAspect>

Knowing that we also have:
<Profile Identifier="Workforce/Notifications/Directory_User_New" DisplayName_L1="Workforce/Notifications/New User" IsComponent="true" />

<AccessControlRule Profile="Workforce/Notifications/Directory_User_New" EntityType="Directory_User" Identifier="Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*">
  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
</AccessControlRule>
```



|Property|Details|
|---|---|
|Activity<br/>optional|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the activity whose last performers are to be notified, when `Type` is set to `Performer`.<br/><br/>**Note:** must be set together with `ActivityState`.</p>|
|ActivityState<br/>optional|<p>**Type**<br />Enumeration<br /><br />**Description**<br />Identifier of the activity state whose last performers are to be notified, when `Type` is set to `Performer`.<br/><br/>**Note:** must be set together with `Activity`.</p>|
|Binding<br/>optional|<p>**Type**<br />Int64<br /><br />**Description**<br />Binding of the property that represents the notification's recipients, when `Type` is set to `Binding`.</p>|
|EmailAddresses<br/>optional|<p>**Type**<br />String<br /><br />**Description**<br />Email addresses of the notification's recipients, when `Type` is set to `Hardcoded`.</p>|
|Expression<br/>optional|<p>**Type**<br />String<br /><br />**Description**<br />C# expression that returns the email addresses of the notification's recipients, as strings or IEnumerable\<string>, when `Type` is set to `Expression`. The expression's variable type is defined in `ExpressionBinding` in the associated `NotificationAspect`. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions).</p>|
|IsCC<br/><span class="optionalAttribute">default value: false</span>|<p>**Type**<br />Boolean<br /><br />**Description**<br />`true` to send the notification email to the recipient(s) as a carbon copy (CC).</p>|
|Type<br/>required|<p>**Type**<br />RecipientType<br /><br />**Description**<br />Type of recipients for the email notification.<br/><br/>**Actor**: the identities with the permissions to act on the next step of the workflow specified in the pointcut.<br/>**Performer**: the actors of a past workflow step specified in `Activity` and `ActivityState`.<br/>**Binding**: the identities whose email addresses are designated by the property specified in `Binding`.<br/>**Hardcoded**: the identities whose email addresses are specified explicitly in `EmailAddresses`.<br/>**Expression**: the identities whose email addresses match the C# expression specified in `Expression`.<br/>**Profile**: the identities with the permission `/Custom/WorkflowsNotifications/{workflow_identifier}/`<br/>`{activity_identifier}/{activityTemplateState_shortIdentifier}`.</p>|
