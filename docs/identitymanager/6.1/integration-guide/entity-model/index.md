---
title: "Entity Model"
description: "Entity Model"
sidebar_position: 30
---

# Entity Model

At the heart of any successful IGA project, dwells an efficient data model.

The data involved in the project, be it reference data, identities, or from the managed systems',
needs to be modeled in a way that is both relevant to the organization and to Usercube.

Usercube allows integrators to adapt the data model to the target organization, instead of forcing
the organization to fit in a pre-conceived hardwired model. This philosophy has proven successful by
Usercube's field experience and project feedback.

## Entity-Relationship model

The model for all resources (that means data from the managed system, reference data and identities)
is written in the
[applicative configuration](/docs/identitymanager/6.1/integration-guide/toolkit/index.md)
in the form of an
[Entity-Relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model), called
the **entity model**.

The model is organized into cohesive **connectors**, one for each managed system, and one for the
reference data/identity repository.

An **entity model** describes the shape of resources (the **metadata**) and how they are built from
real world sources of truth (the **mapping**).

### Metadata

The **metadata** of a resource is the description of the resources' shape. Using the
_Entity-Relationship_ vocabulary, it's a list of property names and types for a resource.

The metadata is written using
[EntityTypes](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md),
[EntityProperties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
and
[EntityAssociations](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

#### Entity types

Every resource is assigned an
[EntityType](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
that describes its shape.

It's a description of the resource: it can be a managed system's resource or a real world entity
such as an identity or a department.

An
[EntityType](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
includes:

- one or more
  [EntityProperties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
- zero or more
  [EntityAssociations](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)

#### Entity properties

Properties are key-value pairs, with a name and type that describes the nature of the value held by
the property. They are described by
[EntityProperties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

There are two kind of properties: **Scalar Properties** and **Navigation Properties**.

**Scalar Properties** simply hold a value: a string, a number, a date for example.

Available types include:

- `String`
- `Bytes`
- `Int32` (32 bits integer)
- `Int64` (64 bits integer)
- `DateTime`
- `Bool` (boolean)
- `Guid`
- `Double`
- `Binary` (binary file like an image)

For these types, the UI and binding system transforms the value retrieved from the database into the
corresponding type for display.

**Navigation Properties** properties hold links between the parent resource and another resource.

**Navigation Properties** type is `ForeignKey`.

**Navigation Properties** are completed by an
[EntityAssociation](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)
that explicitly describe the nature of the link.

#### Entity association

An
[Entity Association](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)
describes a link between entity types. It connects a pair of navigation properties, from two
**Entity Types**.

There are two types of navigational properties:

- _mono-valued_, that link to a [single](https://en.wikipedia.org/wiki/One-to-one_(data_model))
  entity;
- _multi-valued_, that link to a
  [collection](https://en.wikipedia.org/wiki/many-to-many_(data_model)) of entities.

Given a navigation property A of EntityType 1, linking EntityType 1 to navigation properties B of
EntityType 2, then navigation property B is called the reverse property of navigation property A and
navigation property A is called the reverse property of navigation property B.

**For example,**

- The _User_ entity type has the navigational property _Positions_ (a link to **zero or
  more_**Position_ entities);
- The _Position_ entity type has the navigational property _Person_ (a link to **zero or
  one_**User_ entity);
- The navigational property _Person_ is the reverse link of the navigational property _Positions;_
- The _User_ entity type has the navigational property _Manager_ (a link to **zero or one_**User_
  entity);
- The _User_ entity type has the navigational property _Subordinates_ (a link to **zero or
  more_**User_ entities);
- The navigational property _Subordinates_ is the reverse link of the navigational property
  _Manager_.

#### Locatable property

Some property values must be available in several languages. In this case, we define a **neutral
property** and as many corresponding properties as languages.

The built-in _InternalDisplayName_ property is a neutral property. Its associated properties are
named _InternalDisplayName_L`{Index}`_ where _Index_ reference the
[languages list](/docs/identitymanager/6.1/integration-guide/toolkit/languages/index.md).

#### Computed property

A property can be calculated from other properties. The
[EntityPropertyExpression](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
element allows the expression of a computed property. It references the property (specifying the
entity type's identifier and the property's identifier) and expresses the calculation based on a
given entity using the
[calculation expression syntax](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/index.md).

An element `<EntityPropertyExpression>` can be used to calculate a scalar property or a mono-valued
navigation property. In the latter case, the expression must return an integer that corresponds to
the primary key of the target entity.

#### Display name

Every declared **EntityType** automatically has the `InternalDisplayName` property even if it is not
explicitly declared in the applicative configuration.

It represents a user-friendly name for **EntityType** that is used in the UI if needed.

Its value can be explicitly computed by an
[EntityPropertyExpression](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).
Otherwise, a default value is automatically computed by Usercube using the first property of the
**EntityType** where `identifier` contains the string _"name"_. If no such property is found, the
first declared property of the **EntityType** is used instead.

The _InternalDisplayName_ property will be used as a default label of the entity in the UI.

#### Database mapping

Resources from the **resource repository** are stored in the generic UR_Resources table.

This table has:

- 128 columns to store scalar properties (index 0 to 127). The first four are reserved for big
  scalar properties values (as many as 4000 unicode char). he other columns are limited to 442
  unicode char. These columns are named C0 to C3V following a base-32 convention for naming.

- 25 columns to store mono-valued navigational properties values (index 128 to 152). These columns
  are named `I0` to `I4N` following a base-32 convention for naming.

_Multi-valued navigation property_ values are stored in the UR_ResourceLinks junction table.

Binary property values (such as pictures or files) are stored in the UR_ResourceFiles table.

### Mapping

Usercube's Entity Model also contains **a mapping** between the external data and
[EntityProperties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
or
[EntityAssociations](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).
That's why entity types are organized into **connectors**. The **mapping_**connects_ entity types
to external sources of truth.

This information is provided by the
[EntityTypeMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md),
their
[EntityPropertyMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
and
[EntityAssociationMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)

To build Usercube resources from external data found in the managed system, the entity model
provides a mapping between the external data (often in the form of CSV files, see
[Synchronization](/docs/identitymanager/6.1/integration-guide/synchronization/upward-data-sync/index.md))
and entity properties. This information is provided by the
[EntityTypeMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md),
their
[EntityPropertyMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
and
[EntityAssociationMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md).

Every
[EntityPropertyMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
maps a CSV column to a scalar
[EntityProperty](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

Every
[EntityAssociationMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)
maps a CSV column to a navigation
[EntityProperty](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

#### Format

When exporting entries from an external system, the results are usually retrieved as simple strings,
written in a CSV file, and imported into the Usercube Database as-is. But an external system will
rarely uses the same format as Usercube to store objects such as dates.

Let's take, for example, a case where we want to store an employee's start date:

- In the external system, the date is stored as a string with the format `2020-09-29 22:00:00`.
- In Usercube, dates are stored as strings in the format `20200929220000`

We need to transform the input data, from the export, into something readable by Usercube and, when
writing to the external system, transform Usercube's data back into something readable by the
external system.

![Export and Fulfill Data transformation](/images/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/entitypropertymapping-format-flowchart.webp)

The format used in the external system can be provided through the
[EntityPropertyMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
using the
[Format attribute](/docs/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/index.md)
to help Usercube to convert data appropriately.

If the field in the external system is not forced to a specific value type, but is free-form
(example: a string field in which date values are stored but which can sometimes hold other values),
we strongly recommend not using the `Format` attribute to prevent inconsistent user input in the
external system.

#### Primary key

When writing an
[EntityTypeMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md),
one of the _scalar properties_ should be chosen as
[primary key](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md).
This property will be used by Usercube to
[uniquely identify a resource](https://en.wikipedia.org/wiki/Primary_key). It is hence crucial to
choose carefully as many of Usercube's processes and optimizations depend on this choice.

### SQL views

The `UR_Resource` table contains resources from all the connectors, for all the Entity Types.
Columns names are not semantically meaningful because they have generic I\*/C\* names. For this
reason, Usercube provides SQL views to help the user explore the resource repository from the
database. The views are useful to understand how Usercube works or to debug a faulty configuration.

SQL Views are built by the
[CreateDatabaseViews tool](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/createdatabaseviewstask/index.md).

SQL Views created by this tool are identified in the database by a `zz_` prefix.

Created views are not used by the Usercube engine directly. Usercube's engine always creates, reads,
updates and deletes from the `UR_*` tables.

## Records

The **entity model** is enhanced with **records** to handle positions and movements of staff.
Details can be found
[here](/docs/identitymanager/6.1/integration-guide/identity-management/index.md).
