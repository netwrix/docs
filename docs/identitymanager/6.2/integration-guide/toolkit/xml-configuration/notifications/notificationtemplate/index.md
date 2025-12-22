---
title: "Notification Template"
description: "Notification Template"
sidebar_position: 30
---

# Notification Template

A notification template is used to overwrite the subject and/or body of a native notification with
personalized templates.

Identity Manager natively sends notifications for usual cases.

These native notifications are based on cshtml templates available inside the `Runtime` folder. If
the provided templates do not meet your exact needs, then they can be replaced by personalized
notification templates. See the
[Native Notifications](/docs/identitymanager/6.2/integration-guide/notifications/native/index.md)topic for additional information.

## Examples

The following example overwrites the template of the notification provided by Identity Manager for
role review.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<NotificationTemplate Identifier="WorkflowReviewRolesSummary" SubjectTemplate_L1="./Templates/Notification_RoleReview_Subject.cshtml" BodyTemplate_L1="./Templates/Notification_RoleReview_Body.cshtml" />
```

The following example defines a template for the notification's subject.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
// WorkflowReviewRolesSummary_Subject.cshtml
@using Usercube.Application.DeltaProvisioning.Notification
@model WorkflowReviewRolesSummary
Review Roles - @(@Model.AssignedCompositeRoles.Any() ? @Model.AssignedCompositeRoles.FirstOrDefault().Owner.FullName : @Model.AssignedSingleRoles.FirstOrDefault().Owner.FullName)
```

## Properties

| Property                    | Type   | Description                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BodyTemplate_L1 optional    | String | Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                        |
| Identifier required         | String | Identifier of the native notification to adjust, among: - `BlockedProvisioningInformations` - `OneWayPasswordReset` - `PendingAccessCertificationModel` - `PerformManualProvisioningSummary` - `RolePolicySummary` - `RunJobNotification` - `TwoWayPasswordReset` - `WorkflowReviewProvisioningSummary` - `WorkflowReviewRolesSummary` |
| SubjectTemplate_L1 optional | String | Path to the Razor cshtml file that defines the email's subject template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                     |
