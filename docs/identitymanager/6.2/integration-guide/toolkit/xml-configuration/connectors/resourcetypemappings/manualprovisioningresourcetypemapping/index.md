---
title: "Manual Provisioning Resource Type Mapping"
description: "Manual Provisioning Resource Type Mapping"
sidebar_position: 40
---

# Manual Provisioning Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ManualProvisioningResourceTypeMapping Identifier="Access_Badge_Nominative" Connection="AccessManual" TicketSynchroIsNotAvailable="true"/>
```

## Properties

| Property                             | Type    | Description                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                  | String  | Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                               |
| TicketSynchroIsNotAvailable optional | Boolean | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified. Only used with the package for tickets. See the [ServiceNow Ticket](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/servicenow-ticket/index.md) topic for additional information. |
