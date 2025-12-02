---
title: "Mail Setting"
description: "Mail Setting"
sidebar_position: 60
---

# Mail Setting

## Examples

The following example indicates that notifications for users from `Directory_User` are to be sent to
the email addresses contained by the `Email` property.

```

**<MailSetting MailProperty="Directory_User:Email"/>**

```

## Properties

| Property                               | Details                                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier default value: MailSettings | **Type** String **Description** Unique identifier of the setting.                                                                                                              |
| LanguageCode optional                  | **Type** String **Description** Language code for the notifications sent by server-side tasks, using the ISO 639-1 standard. For example, "en-US" represents American English. |
| MailProperty optional                  | **Type** String **Description** Property whose values are to be used by Identity Manager to send emails.                                                                       |
| RolePolicyNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during role model tasks. **Default value** `true`                                                                       |
| ProvisioningReviewNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during access certification. **Default value** `true`                                                                       |
| ProvisioningReviewNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during provisioning review. **Default value** `true`                                                                       |
| AccessCertificationNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during access certification. **Default value** `true`                                                                       |
| ManualProvisioningNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during manual provisioning. **Default value** `true`                                                                       |
| RoleReviewNotification optional                  | **Type** Boolean **Description** `true` to enable the sending of email notifications during role review. **Default value** `true`                                                                       |
