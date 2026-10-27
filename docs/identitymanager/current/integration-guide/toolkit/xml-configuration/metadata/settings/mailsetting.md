---
title: "MailSetting"
description: " "
sidebar_position: 6
---

 


## Examples
The following example indicates that notifications for users from `Directory_User` are to be sent to the email addresses contained by the `Email` property.

```xml
<MailSetting MailProperty="Directory_User:Email"/>
```


## Properties

|Property|Details|
|---|---|
| AccessCertificationNotification <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to enable the sending of email notifications during access certification. |
| Identifier <span class="optionalAttribute">default value: MailSettings</span> | **Type:** String **Description:** Unique identifier of the setting. |
| LanguageCode optional | **Type:** String **Description:** Language code for the notifications sent by server-side tasks, using the ISO 639-1 standard. For example, "en-US" represents American English. |
| MailProperty optional | **Type:** String **Description:** Property whose values are to be used by Usercube to send emails. |
| ManualProvisioningNotification <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to enable the sending of email notifications during manual provisioning. |
| ProvisioningReviewNotification <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to enable the sending of email notifications during provisioning review. |
| RolePolicyNotification <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to enable the sending of email notifications during role model tasks. |
| RoleReviewNotification <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to enable the sending of email notifications during role review. |

