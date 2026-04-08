---
title: "Native Notifications"
description: "Native Notifications"
sidebar_position: 10
---

# Native Notifications

Identity Manager provides native notifications for usual cases, for example role review, provisioning review, access certification, manual provisioning, etc.

## Overview

Identity Manager natively sends notifications for:

- Password reset to the users whose passwords are reset;
- Access certification to the users selected as reviewers;
- [Manual Provisioning](../../../integration-guide/notifications/native/manual-provisioning), provisioning review and role review to the
users who own a profile with the permissions to perform the corresponding actions;
- Jobs that finished in state completed/errored/aborted/blocked/warning to the users who own a
profile with the corresponding permissions.

Concerning the notifications sent via permissions: In order to receive the notifications, a profile must have the full permission path. Having a (great-)parent permission will not enable notifications for all child entities.

For example, the permission /ProvisioningPolicy/PerformManualProvisioning/Directory_User allows a profile to perform manual provisioning with Directory_User as the source entity type, and receive the corresponding notifications. On the contrary, the permission `/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for all entity types, but not receive the corresponding notifications.

See the [References: Permissions](../../content/integration-guide/profiles-permissions/permissions) topic for additional information.

Each permission can be configured in an [Access Control Rule](../../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule) so that the corresponding notification is disabled.

All notifications are built based on cshtml templates. The templates for native notifications can be found in `/Runtime/NotificationTemplates`.

The templates for native notifications can be adjusted to specific needs through the XML tag [Notification Template](../../../integration-guide/toolkit/xml-configuration/notifications/notificationtemplate).

See the [Customize a Native Notification](../../../integration-guide/notifications/native/customize-native-notification) for additional information on how to customize native notifications.

