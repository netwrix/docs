---
title: "Universe"
description: "Universe"
sidebar_position: 10
---

# Universe

Universes constitute the basis for the configuration of a new model that we will call universe
model. Users can then exploit it, through the Query module and/or Power BI, to generate graphic
reports.

## Examples

##### Basic universe

The following example builds a universe called `Universe1`:

```

**<Universe Identifier="Universe1" DisplayName_L1="Universe 1" >**

    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" /></Universe>

```

![Universe - Basic Example](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexampledisplaynames.webp)

When getting Identity Manager data in
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md),
we see the following:

![Universe (Display Names)](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnamedisplayname.webp)

##### Basic universe with identifiers instead of display names

The following example builds a universe called `Universe1` with identifiers as labels instead of
display names:

```

<Universe Identifier="Universe1" DisplayName_L1="Universe 1" ColumnNamesMode="Identifier" >    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" />    </Universe>

```

![Universe - Basic Example](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexample.webp)

When getting Identity Manager data in
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md),
we see the following:

![Universe (Identifiers)](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnameidentifier.webp)

## Properties

| Property                                   | Details                                                                                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColumnNamesMode default value: DisplayName | **Type** UniverseColumnNamesMode **Description** Type of label to be displayed as the column names in Power BI, for this universe. `0` - DisplayName: display name of entity instances. `1` - Identifier: identifier of entity instances. |
| DisplayName_L1 optional                    | **Type** String **Description** Display name of the universe in language 1 (up to 16).                                                                                                                                                    |
| Identifier required                        | **Type** String **Description** Identifier of the universe.                                                                                                                                                                               |

## Child Element: Association Instance

An association instance represents, within a Universe , the occurrence in the model of an
[Entity Association](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

### Properties

| Property                   | Details                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Association required       | **Type** Int64 **Description** Identifier of the entity association, in Identity Manager's entity model, that corresponds to the association instance.                                                                                                                                      |
| Direction default value: 0 | **Type** Direction **Description** Direction of the association between the two entity instances. It must be the same direction as between the two entity types specified in these entity instances. `0` - Both directions. `1` - From the instance 1 to 2. `2` - From the instance 2 to 1. |
| Instance1 required         | **Type** Int64 **Description** Identifier of the entity instance number one.                                                                                                                                                                                                                |
| Instance2 required         | **Type** Int64 **Description** Identifier of the entity instance number two.                                                                                                                                                                                                                |

## Child Element: Entity Instance

An entity instance represents, within a Universe , the occurrence in the model of an
[Entity Association](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

### Properties

| Property                      | Details                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 optional       | **Type** String **Description** Display name of the entity instance in language 1 (up to 16).                                              |
| EntityType required           | **Type** Int64 **Description** Identifier of the entity type, in Identity Manager's entity model, that corresponds to the entity instance. |
| FilterEntityProperty optional | **Type** Int64 **Description** Entity property used as filter (FilterProperty must be a navigation property to EntityProperty)             |
| FilterEntityType optional     | **Type** Int64 **Description** Entity type used as filter (FilterProperty must be a navigation property to EntityType)                     |
| FilterProperty optional       | **Type** Int64 **Description** Property used to filter entity type's instance.                                                             |
| FilterResourceType optional   | **Type** Int64 **Description** Resource type used as filter (FilterProperty must be a navigation property to ResourceType)                 |
| FilterValue optional          | **Type** String **Description** Constant value used as filter.                                                                             |
| Identifier required           | **Type** String **Description** Identifier of the entity instance.                                                                         |
| IsHidden default value: false | **Type** Boolean **Description** `true` if the entity instance is to be hidden in Power BI.                                                |
