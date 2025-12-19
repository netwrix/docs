---
title: "Create an Entity Type"
description: "Create an Entity Type"
sidebar_position: 40
---

# Create an Entity Type

How to create an
[entity type](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated
resources (instances of said model) and not the intent (that would be a
[resource type](/docs/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/index.md)).
It defines a set of
[properties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md#properties)
describing said resources and linking them together.

In other words, an entity type is supposed to model the representation of a certain group of
resources inside Usercube. It is a relational model, made of properties
([scalar properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md))
and links between entity types
([navigation properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/index.md)),
both described later.

![Entity Type - Schema](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

The configuration of entity types depends entirely on the
[previously established model](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connector-modeling/index.md).

Entity types will impact the import of the managed system's resources, and the way said resources
are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Connection](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connection-creation/index.md) (required) [Refreshed schemas](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connection-creation/index.md) (required) [Connector's data model](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connector-modeling/index.md) (required) | Entity type |

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [Create the entity type](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/index.md).
2. [Define the scalar properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md)
   to be used in the entity type.
3. [Choose the primary key and key properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/key-selection/index.md)
   which will identify resources.
4. [Define navigation properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/index.md)
   if applicable.
5. [Customize the display names](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md)
   for the entity type's resources.
6. [Organize the datasheets](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/index.md)
   for the entity type's resources in Usercube.

For some connectors, Usercube provides a template to automatically create a basic configuration. See
below this note.

> For example, the Active Directory template automatically creates an AD entity type and two
> resource types for a standard AD connector. The template is available for a connector with an AD
> connection but no entity types.
>
> ![Entity Type - AD Template](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/entitytype_template_v602.webp)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the
process, follow the
[verification procedure indicated for a synchronization](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md).
