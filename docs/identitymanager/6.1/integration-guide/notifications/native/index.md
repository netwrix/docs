---
title: "Native Notifications"
description: "Native Notifications"
sidebar_position: 10
---

# Native Notifications

Usercube provides native notifications for usual cases, for example role review, provisioning
review, access certification, manual provisioning, etc.

## Overview

Usercube natively sends notifications for:

- password reset to the users whose passwords are reset;
- access certification to the users selected as reviewers;
- [manual provisioning](/docs/identitymanager/6.1/integration-guide/notifications/native/manual-provisioning/index.md)
  , provisioning review and role review to the users who own a profile with the permissions to
  perform the corresponding actions;
- jobs that finished in state completed/errored/aborted/blocked/warning to the users who own a
  profile with the corresponding permissions.

**Concerning the notifications sent via permissions:**

In order to receive the notifications, a profile must have the full permission path. Having a
(great-)parent permission will not enable notifications for all child entities.

For example, the permission `/ProvisioningPolicy/PerformManualProvisioning/Directory_User` allows a
profile to perform manual provisioning with `Directory_User` as the source entity type, and receive
the corresponding notifications. On the contrary, the permission
`/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for
all entity types, but not receive the corresponding notifications.  
[See the list of all permissions](/docs/identitymanager/6.1/integration-guide/profiles-permissions/permissions/index.md).

Each permission can be configured in an
[access control entry](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md)
so that the corresponding notification is disabled.

All notifications are built based on cshtml templates. The templates for native notifications can be
found in `/Runtime/NotificationTemplates`.

The templates for native notifications can be adjusted to specific needs through the XML tag
[`NotificationTemplate`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate/index.md).

[See how to customize native notifications](/docs/identitymanager/6.1/integration-guide/notifications/how-tos/customize-native-notification/index.md).
