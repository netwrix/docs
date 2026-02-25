---
title: "Create an Entity Type"
description: "Create an Entity Type"
sidebar_position: 40
---

# Create an Entity Type

How to create an [Entity Type](../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype) that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated resources (instances of said model) and not the intent (that would be a resource type). See the [Create a Resource Type](../../../../user-guide/set-up/categorization/resource-type-creation) topic for additional information. It defines a set of properties describing said resources and linking them together.

In other words, an entity type is supposed to model the representation of a certain group of resources inside Identity Manager. It is a relational model, made of properties ([Define Scalar Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition)) and links between entity types ([Define Navigation Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition)), both described later.

![Entity Type - Schema](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

The configuration of entity types depends entirely on the previously established by [Model the Data](../../../../user-guide/set-up/connect-system/connector-modeling).

Entity types will impact the import of the managed system's resources, and the way said resources are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the purpose of the application.

 | Input | Output | 
 | --- | --- | 
 | Connection (required) Refreshed schemas (required) Connector's data [Model the Data](../../../../user-guide/set-up/connect-system/connector-modeling) (required) | Entity type | 

See the [Create a Connection](../../../../user-guide/set-up/connect-system/connection-creation) and [Model the Data](../../../../user-guide/set-up/connect-system/connector-modeling) topics for additional information.

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [Create the Entity Type](../../../../user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration).
2. [Define Scalar Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition)to be used in the entity type.
3. Choose the [Select Primary Keys](../../../../user-guide/set-up/connect-system/entity-type-creation/key-selection) and key properties which will identify resources.
4. Define [Define Navigation Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition)if applicable.
5. Customize the [Set Resources' Display Names](../../../../user-guide/set-up/connect-system/entity-type-creation/display-name-setting) for the entity type's resources.
6. Organize the [Organize Resources' Datasheets](../../../../user-guide/set-up/connect-system/entity-type-creation/datasheet-organization) for the entity type's resources in Identity Manager.

For some connectors, Identity Manager provides a template to automatically create a basic configuration. See below this note.

> For example, the Active Directory template automatically creates an AD entity type and two
> resource types for a standard AD connector. The template is available for a connector with an AD
> connection but no entity types.
>
> ![Entity Type - AD Template](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytype_template_v602.webp)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the process, follow the verification procedure indicated to [Synchronize Data](../../../../user-guide/set-up/synchronization).

