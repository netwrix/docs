---
title: "EasyVistaResourceTypeMapping"
description: "EasyVistaResourceTypeMapping"
sidebar_position: 20
---

# EasyVistaResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<EasyVistaResourceTypeMapping Identifier="Badge_User_NominativeUser" Connection="EasyVistaManual" TicketSynchroIsNotAvailable="true" RecipientId="EVEmployeeId" CatalogCode="42" UrgencyId="1" ImpactId="2" SeverityId="3" Title="C:/identitymanagerDemo/Conf/EasyVista/TitleTemplate.txt" Description="C:/identitymanagerDemo/Conf/EasyVista/DescriptionTemplate.txt" />

```

## Properties

| Property                                         | Details                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CatalogCode required                             | **Type** String **Description** Code of the catalog. It is possible to define three catalog codes, one for each provisioning action (add, modify, delete) by separating them with `�`, for example `42�25�43`.                                                                                                                                                                                                      |
| Connection required                              | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                         |
| RecipientId required                             | **Type** String **Description** Identifier of the ticket's recipient.                                                                                                                                                                                                                                                                                                                                               |
| Description optional                             | **Type** String **Description** File path of the template used for the generation of the ticket description.                                                                                                                                                                                                                                                                                                        |
| ImpactId optional                                | **Type** String **Description** [Impact](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#impact) of the ticket.                                                                                                                                                                                                                                    |
| SeverityId optional                              | **Type** String **Description** [Severity level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#severity-level) of the ticket.                                                                                                                                                                                                                    |
| TicketSynchroIsNotAvailable default value: false | **Type** Boolean **Description** `true` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to `Verified`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| Title optional                                   | **Type** String **Description** File path of the template used for the generation of the ticket title.                                                                                                                                                                                                                                                                                                              |
| UrgencyId optional                               | **Type** String **Description** [Urgency level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#urgency-level) of the ticket.                                                                                                                                                                                                                      |
