---
title: "SendRoleModelNotificationsTask"
description: "Task that sends a notification to all users who have pending roles to review, only for roles with a simple approval workflow, i.e. pending the validation 1 out of 1."
sidebar_position: 18
---

# Migration Guide: SendRoleModelNotificationsTask to SendNotificationsTask

:::warning Deprecated
The `SendRoleModelNotificationsTask` is deprecated and will be removed in a future version. This guide explains how to migrate to the new approach using `SendNotificationsTask` with notification configuration elements.
:::

## Overview

The `SendRoleModelNotificationsTask` should been replaced by `SendNotificationsTask` combined with `RolePolicyNotification` and `RoleReviewNotification` XML configuration elements. The new implementation introduces:

- Reminder interval control to prevent duplicate notifications when multiple jobs execute
- Unified notification system for all notification types
- Notification sending logic that respects the configured reminder interval

## What Changed

### Before (Deprecated)

```xml
<SendRoleModelNotificationsTask DisplayName_L1="Send reminder notifications for role review 1/1">
  <TaskEntityType EntityType="Directory_User"/>
</SendRoleModelNotificationsTask>
```

**Limitations:**
- Sent notifications every time the task ran, without reminder interval control
- Only handled roles with simple approval workflows (1 out of 1 validation)
- Could result in duplicate emails when multiple jobs in complete mode were executed

### After (Current Implementation)

```xml
<!-- Define notification configuration -->
<RolePolicyNotification
  Identifier="RolePolicy_Directory_User"
  OwnerEntityType="Directory_User"
  ReminderInterval="2880" />

<RoleReviewNotification
  Identifier="RoleReview_Directory_User"
  OwnerEntityType="Directory_User"
  ReminderInterval="2880" />

<!-- Use SendNotificationsTask in your job -->
<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">
  <TaskEntityType EntityType="Directory_User" />
</SendNotificationsTask>
```

**Technical Changes:**
- The `ReminderInterval` property (in minutes) controls notification frequency
- Notification types are handled through a single task implementation
- Duplicate notification issue resolved through interval tracking

## Scaffolding Changes

If possible, the following scaffoldings now automatically generate `SendNotificationsTask` instead of `SendRoleModelNotificationsTask`:

- **CreateAgentSynchroComplete**: Complete synchronization job for all connectors in an agent.  See [CreateAgentSynchroComplete](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete).
- **CreateConnectorSynchroComplete**: Complete synchronization job for a specific connector. See [CreateConnectorSynchroComplete](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete).

### Scaffolding Behavior

The scaffolding determines which task to generate based on configuration:

**Generates SendNotificationsTask** when:
- `RolePolicyNotification` and/or `RoleReviewNotification` elements are present in the configuration
- AND the corresponding mail settings are enabled (see note below)

**Generates SendRoleModelNotificationsTask (deprecated)** when:
- These notification elements are NOT present in the configuration
- Displays a deprecation warning during deployment

:::note Mail Settings
The `RolePolicyNotification` and `RoleReviewNotification` attributes on the `MailSetting` element are **enabled by default** (`true`). You typically don't need to configure these unless you want to disable them:

```xml
<MailSetting RolePolicyNotification="true" RoleReviewNotification="false" />
```
:::

## What Happens If You Don't Migrate

### Functional Impact

Continuing to use `SendRoleModelNotificationsTask` without migrating results in:

**Configuration Deployment:**
- Deployment completes successfully without errors
- Deprecation warning is logged:
  ```
  The Task 'SendRoleModelNotification' is deprecated and will be removed in a future version.
  Please use 'SendNotificationsTask' instead.
  ```

**Runtime Behavior:**
- Duplicate emails sent when multiple complete-mode jobs execute
- No reminder interval control (notifications sent on every task execution)
- Limited to simple approval workflows (1/1 validation only)

**Future Compatibility:**
- `SendRoleModelNotificationsTask` scheduled for removal in a future release

### After Migration

**Configuration Deployment:**
- No deprecation warnings logged

**Runtime Behavior:**
- Duplicate notification issue resolved
- ReminderInterval property controls notification frequency
- Compatible with all approval workflow types

**Future Compatibility:**
- Uses current task implementation

## Migration Steps

### Step 1: Add Notification Configuration Elements

Add `RolePolicyNotification` and/or `RoleReviewNotification` elements to your configuration:

```xml
<!-- For role review notifications -->
<RoleReviewNotification
  Identifier="RoleReview_Directory_User"
  OwnerEntityType="Directory_User"
  ReminderInterval="2880" />

<!-- For role model policy notifications -->
<RolePolicyNotification
  Identifier="RolePolicy_Directory_User"
  OwnerEntityType="Directory_User"
  ReminderInterval="2880" />

```
See the [RoleReviewNotification](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notifications/rolereviewnotification) and [RolePolicyNotification](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notifications/rolepolicynotification) documentation for complete property details.

### Step 2: Replace Task in Manually Defined Job Definitions

If you have manually defined `SendRoleModelNotificationsTask` instances in your jobs (not generated by scaffolding), replace them with `SendNotificationsTask`:

**Before:**
```xml
<SendRoleModelNotificationsTask DisplayName_L1="Send reminder notifications for role review 1/1">
  <TaskEntityType EntityType="Directory_User"/>
</SendRoleModelNotificationsTask>
```

**After:**
```xml
<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">
  <TaskEntityType EntityType="Directory_User" />
</SendNotificationsTask>
```

:::note
**For Scaffolded Jobs:**
If your job is generated by `CreateAgentSynchroComplete` or `CreateConnectorSynchroComplete`, manual job definition edits are not required. Add the notification elements (Step 1) and the scaffolding will automatically generate `SendNotificationsTask`.
:::

### Step 3: Deploy and Verify

Deploy your configuration. After deployment:

1. **Check job structure**: Use `Usercube-Get-JobSteps.exe` to verify that `SendNotificationsTask` appears in your jobs (not `SendRoleModelNotificationsTask`)

2. **Verify notification behavior**:
   - Trigger scenarios that should send notifications (e.g., pending role reviews)
   - Confirm notifications are sent
   - Re-run the job immediately and verify that duplicate notifications are NOT sent (ReminderInterval is working)

3. **Check deployment logs**: Verify no deprecation warnings appear

4. **Monitor notification timing**: After the ReminderInterval elapses, verify reminder notifications are sent as expected

## Additional Resources

- [SendNotificationsTask](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/jobs/tasks/server/sendnotificationstask) - Documentation for the replacement task
- [RolePolicyNotification](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notifications/rolepolicynotification) - Configuration element for role policy notifications
- [RoleReviewNotification](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notifications/rolereviewnotification) - Configuration element for role review notifications
- [Notification](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/notifications/notification) - General notification configuration
- [CreateAgentSynchroComplete](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete) - Scaffolding documentation
- [CreateConnectorSynchroComplete](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete) - Scaffolding documentation


Task that sends a notification to all users who have pending roles to review, only for roles with a simple approval workflow, i.e. pending the validation 1 out of 1.


## Examples
The following example sends a notification to all users who have pending roles to review, whose owners are part of `Directory_User`. This is only about roles that need one (and only one) validation.

```xml
<SendRoleModelNotificationsTask DisplayName_L1="Send reminder notifications for role review 1/1">
  <TaskEntityType EntityType="Directory_User"/>
</SendRoleModelNotificationsTask>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
