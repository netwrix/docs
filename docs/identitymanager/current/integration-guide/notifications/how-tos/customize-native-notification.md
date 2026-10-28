# Customize a Native Notification

This guide shows how to set a template other than the default one for native notifications.

## Overview

Identity Manager natively sends notifications for usual cases. See the [Native Notifications](../../../integration-guide/notifications/native) topic for additional information.

These native notifications are based on cshtml templates available inside the `Runtime` folder. If the provided templates don't meet your exact needs, then they can be replaced by personalized templates.

## Customize a Native Notification

Customize a native notification by proceeding as follows:

1. Among the
[Notification Template](../../../integration-guide/toolkit/xml-configuration/notifications/notificationtemplate), get the identifier of the notification whose templates are to be replaced.

    > For example, to customize the notification for one-way password reset: `OneWayPasswordReset`.

2. In `Runtime/NotificationTemplates`, copy to the configuration folder the cshtml templates
associated to the notification that need to be overridden.

    > For example, we can copy the template for the email's body but keep the provided template for
    > the subject. Then we have: `Conf/Templates/MyOneWayPasswordReset.cshtml`.
>
    > Let's say that we also need to customize the email's subject in French which is the language
    > 2: `Conf/Templates/MyOneWayPasswordReset_Subject.fr.cshtml`

3. Customize the templates previously copied to the configuration folder.
4. Configure an XML element
[Notification Template](../../../integration-guide/toolkit/xml-configuration/notifications/notificationtemplate) with the identifier collected at step 1, and the relative paths to the customized templates.

    > For example:
>
    > ```
>
    > <NotificationTemplate Identifier="OneWayPasswordReset" BodyTemplate_L1="./Templates/MyOneWayPasswordReset.cshtml" SubjectTemplate_L2="./Templates/MyOneWayPasswordReset_Subject.fr.cshtml" />
>
    > ```

## Migration from `RazorTemplate` on typed notifications

The `RazorTemplate`, `CssTemplate` and `TitleExpression` properties on typed notifications (`AccessCertificationNotification`, `ManualProvisioningNotification`, `RoleReviewNotification`, `ProvisioningReviewNotification`, `RolePolicyNotification`) aren't used and are silently ignored at runtime. Any customization must go through `<NotificationTemplate>` with the identifier matching the typed model.

Identifier mapping:

| Typed notification element | `<NotificationTemplate Identifier=...>` |
|---|---|
| `<AccessCertificationNotification>` | `PendingAccessCertificationModel` |
| `<RoleReviewNotification>` | `WorkflowReviewRolesSummary` |
| `<ProvisioningReviewNotification>` | `WorkflowReviewProvisioningSummary` |
| `<ManualProvisioningNotification>` | `PerformManualProvisioningSummary` |
| `<RolePolicyNotification>` | `RolePolicySummary` |

Before:

```xml
<AccessCertificationNotification
    Identifier="AccessCertification_Directory_User_Reminder"
    OwnerEntityType="Directory_User"
    RazorTemplate="./Templates/AccessCertification/Reminder.cshtml"
    CssTemplate="./Templates/AccessCertification/Reminder.css"
    TitleExpression="C#:user:return &quot;Reminder...&quot;;" />
```

After:

```xml
<AccessCertificationNotification
    Identifier="AccessCertification_Directory_User"
    OwnerEntityType="Directory_User"
    ReminderInterval="2880" />

<NotificationTemplate Identifier="PendingAccessCertificationModel"
    BodyTemplate_L1="./Templates/AccessCertification/Reminder.cshtml"
    SubjectTemplate_L1="./Templates/AccessCertification/Reminder_Subject.cshtml" />
```

The body template is rendered against the business model (`PendingAccessCertificationModel`), which exposes `@Model.Count`, `@Model.Campaign.DisplayName`, `@Model.Campaign.EndDate` and `@Model.ApplicationUrl` — data that the raw entity row (e.g. `Directory_User`) doesn't provide.

