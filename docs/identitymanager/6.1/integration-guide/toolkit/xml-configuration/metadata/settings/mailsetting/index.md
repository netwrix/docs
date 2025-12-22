---
title: "MailSetting"
description: "MailSetting"
sidebar_position: 60
---

# MailSetting

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
| MailProperty optional                  | **Type** String **Description** Property whose values are to be used by Usercube to send emails.                                                                               |
