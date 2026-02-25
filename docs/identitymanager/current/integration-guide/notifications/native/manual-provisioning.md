---
title: "Manual Provisioning"
description: "Manual Provisioning"
sidebar_position: 30
---

# Manual Provisioning

Identity Manager natively sends notifications concerning manual provisioning.

## Overview

### Notification Trigger

The notifications are sent after a `FulfillTask` with a connection based on the [Manual Ticket](../../../integration-guide/connectors/references-packages/manual-ticket) package.

### Notification Recipients

The notifications are sent to the users who own a profile with the following permission: `/Custom/ProvisioningPolicy/PerformManualProvisioning/{entityType_identifier}` where `{entityType_identifier}` is the **source** entity type. :::note
 In order to receive the notifications, a profile must have the full permission path. Having a (great-)parent permission will not enable notifications for all child entities.

For example, the permission `/ProvisioningPolicy/PerformManualProvisioning/Directory_User` allows a profile to perform manual provisioning with `Directory_User` as the **source** entity type, **and receive the corresponding notifications**. On the contrary, the permission `/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for all entity types, **but not receive the corresponding notifications**. 
:::
The permission can be configured in an [Access Control Rule](../../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule) so that notifications are disabled.

