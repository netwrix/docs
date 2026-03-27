---
title: "NotificationTemplate"
description: ""
sidebar_position: 2
---

A notification template is used to overwrite the subject and/or body of a [native notification](/docs/identitymanager/current/integration-guide/notifications/native) with personalized templates.


## Examples
The following example overwrites the template of the notification provided by Identity Manager for role review.

```xml
<NotificationTemplate Identifier="WorkflowReviewRolesSummary" SubjectTemplate_L1="./Templates/Notification_RoleReview_Subject.cshtml" BodyTemplate_L1="./Templates/Notification_RoleReview_Body.cshtml" />
```

The following example defines a template for the notification's subject.

```
// WorkflowReviewRolesSummary_Subject.cshtml
@using Usercube.Application.DeltaProvisioning.Notification
@model WorkflowReviewRolesSummary

Review Roles - @(@Model.AssignedCompositeRoles.Any() ? @Model.AssignedCompositeRoles.FirstOrDefault().Owner.FullName : @Model.AssignedSingleRoles.FirstOrDefault().Owner.FullName)
```


## Properties

|Property|Details|
|---|---|
| BodyTemplate_L1 optional | **Type:** String **Description:** Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **Note:** the path must be relative to the configuration folder, and the file must be inside it. |
| Identifier required | **Type:** String **Description:** Identifier of the native notification to adjust, among: - `BlockedProvisioningInformations` - `OneWayPasswordReset` - `PendingAccessCertificationModel` - `PerformManualProvisioningSummary` - `RolePolicySummary` - `RunJobNotification` - `TwoWayPasswordReset` - `WorkflowReviewProvisioningSummary` - `WorkflowReviewRolesSummary` |
| SubjectTemplate_L1 optional | **Type:** String **Description:** Path to the Razor cshtml file that defines the email's subject template in language 1 (up to 16). **Note:** the path must be relative to the configuration folder, and the file must be inside it. |
