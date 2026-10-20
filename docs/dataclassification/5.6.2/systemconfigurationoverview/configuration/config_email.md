---
title: "Communication Settings"
description: "Communication Settings"
sidebar_position: 20
---

# Communication Settings

This section contains information on how to configure settings for external communication, including
configuring email groups and health service notifications. Review the following for details:

- [Email Servers](#email-servers)
- [Email Groups](#email-groups)
- [Health Service Notifications](#health-service-notifications)

## Email Servers

Configure email servers to enable external communication. For example, when the health
service identifies an issue.

Edit existing servers by selecting **Edit**, or add new SMTP servers by
selecting **Add Email Server Configuration**.

![configemailservers](/images/dataclassification/5.6.2/configuration/configemailservers.webp)

The SMTP details should be entered based on the values provided by your network team. Each
configuration supports both SSL enabled SMTP servers, and those without SSL enabled.

Optionally, supply a test email address to test the configuration
settings.

![configemailserveradd](/images/dataclassification/5.6.2/configuration/configemailserveradd.webp)

## Email Groups

Email groups define a logical group of people to email — essentially a mailing list.

Each email group is linked to an SMTP server, so, before configuring an email group, you must
configure your Email Servers.

To add a new group, select Add Email Server Group, or select Edit on each row to configure the group
members.

![configaddemailgroup](/images/dataclassification/5.6.2/configuration/configaddemailgroup.webp)

Each group can have one or more members and a friendly name. The system displays this name when you select an email group.

## Health Service Notifications

Configure Health Service Notifications to email a specific group of people when an issue
occurs in the product. Each notification configuration links to an email group, so
configure your Email Groups before configuring notifications.

To add a new notification configuration select Add Notification Configuration, or select Edit on
each row to change the configuration.

![confighealthnotifications_thumb_0_0](/images/dataclassification/5.6.2/configuration/confighealthnotifications_thumb_0_0.webp)

Set notifications to trigger on warnings or errors. By default, the system reports problems at any
level.

You can enable or disable the Daily Summary. When enabled, this feature sends a summary email of
outstanding problems each morning.

![configaddhealthnotification](/images/dataclassification/5.6.2/configuration/configaddhealthnotification.webp)
