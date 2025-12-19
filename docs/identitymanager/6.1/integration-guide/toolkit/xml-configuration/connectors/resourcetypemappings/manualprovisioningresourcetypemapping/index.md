---
title: "ManualProvisioningResourceTypeMapping"
description: "ManualProvisioningResourceTypeMapping"
sidebar_position: 40
---

# ManualProvisioningResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

**<ManualProvisioningResourceTypeMapping Identifier="Access_Badge_Nominative" Connection="AccessManual" TicketSynchroIsNotAvailable="true"/>**

```

## Properties

| Property                             | Details                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                  | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                         |
| TicketSynchroIsNotAvailable optional | **Type** Boolean **Description** `true` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to `Verified`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
