---
title: "Entity Type"
description: "Entity Type"
sidebar_position: 60
---

# Entity Type

Represents a conceptual model of a business object, such as a person entity or an organization
entity. See the [Connector](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)topic for additional information
on how to configure define an EntityType.

## Properties

| Property                | Details                                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | **Type** String **Description** Display name of the entity type in language 1 (up to 16).                                                                                                                                                                       |
| Identifier required     | **Type** String **Description** Unique identifier of the entity type. It must is be unique to the _entity model_ scope. Cannot be [Reserved identifiers](/docs/identitymanager/saas/integration-guide/toolkit/reservedidentifiers/index.md).                                                              |
| LicenseTag optional     | **Type** String **Description** Value of the `Tag` parameter of the license key (in `appsettings.json`) linked to the entity type. All the features allowed by the license key are enabled for this entity type, otherwise only default features are available. |
| TableName optional      | **Type** String **Description** Represents the table name of hard coded entity types. Exclusively reserved to Identity Manager connector for Power BI.                                                                                                          |

## Child Element: Property

An entity property represents a property of an Entity Type . See the
[Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information on how to
configure/define an EntityProperty.

### Examples

#### Populate navigational property from non primary key

Some configuration elements will be linked to an entity whose id is not known at configuration time.
In this case, another key must be used. On each entity type property, the `IsKey` attribute
specifies that the property can be used as a key during configuration import.

For example, the _Code_ property of the _Title_ entity type is marked as a key.

```

<EntityType Identifier="Title" DisplayName_L1="Title">    <Property Identifier="Code" Type="String" IsKey="true" TargetColumnIndex="4" />    ...
</EntityType>

```

All _Title_ instances will be replicated from a managed system. So, at configuration time, Identity
Manager's internal primary key for this _Title_ is not known.

We hence cannot write a _SingleRoleRule_ with a Dimension criteria based on _Title_ as the primary
key.

We can however, use a non-primary key, that is known in advance, because it depends on the managed
system's data and not on Identity Manager.

For example, the below `Dimension1` attribute references a _Title_ entity by its _Code_ value.

```

**<SingleRoleRule Role="InternetAccess" Dimension1="TITLE0000" Policy="Default" />**

```

#### Changing the multiplicity of a property

It is sometimes necessary to change the multiplicity of a property (Scalar property to Navigation
property or vice-versa). As long as the property was not used in any workflow, this can be properly
handled by `Deploy-Configuration.exe`. If it _was_ used in one or more workflows, foreign key
conflicts (in UW_Changes database table) may occur, preventing the configuration from being
deployed. To solve this problem, references to this property must be manually cleaned up with SQL
queries directly in the database before deploying the configuration.

### Properties

| Property                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional               | **Type** String **Description** Display name of the property in language 1 (up to 16). **Note:** cannot be "Id".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FlexibleComparisonExpression optional | **Type** String **Description** Expression used to transform the query input value for comparison using a flexible operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| GroupByProperty optional              | **Type** Int64 **Description** Property used to regroup navigation resources (resources used in navigation rules) by value. When defined, the Evaluate policy will enforce that one and only one item of a group can be assigned to an identity on a given date range. **Warning:** whenever the value of this property changes for a resource used in the defined navigation rules, the server needs to be restarted in order for the changes to be taken into account.                                                                                                                                                                                                                                                                                                                                                                                                   |
| HistoryPrecision default value: 0     | **Type** Int32 **Description** Defines the number of minutes to wait, after a property change, before triggering the record history mechanism.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Identifier required                   | **Type** String **Description** Unique identifier of the property. It must be unique to the parent entity type scope. Cannot be a [Reserved identifiers](/docs/identitymanager/saas/integration-guide/toolkit/reservedidentifiers/index.md) and can only contain numbers (except the first character) and letters without accents. **Note:** cannot be "Id".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| IsKey default value: false            | **Type** Boolean **Description** `true` if the property is designated to be one of the keys that uniquely identify any resource from the entity type in the configuration. Each entity type must have at least one key. **Note:** AD synchronization requires the `dn` property to have either `IsKey` or `EntityTypeMapping` > `Property` > `IsUniqueKey` set to `true` (key property in the UI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Language optional                     | **Type** Int64 **Description** Language associated to the property if it is localized (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| NeutralProperty optional              | **Type** Int64 **Description** Neutral property associated to the property if it is localized (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| TargetColumnIndex default value: -1   | **Type** Int32 **Description** Specifies the corresponding column in the resource entity. `0` to `3`: scalar property whose value exceeds 443 characters. `4` to `127`: scalar property whose value does not exceed 443 characters (or optimized mono-valued navigation property : see note). `128` to `152`: optimized mono-valued navigation property only. `-1`: non-optimized mono or multi-valued navigation property (stored in `UR_ResourceLink`), or binary (stored in `UR_ResourceLink`). **Note:** optimized mono-valued navigation properties should have their `TargetColumnIndex` between 128 and 152 included to be fully optimized. However, if all are already taken, `TargetColumnIndex` from 0 to 127 included (usually for scalar properties) may also be used. In this case the first available `TargetColumnIndex` in ascending order should be used. |
| Type default value: 0                 | **Type** EntityPropertyType **Description** Property type. `0` - **String**. `1` - **Bytes**. `2` - **Int32**. `3` - **Int64**. `4` - **DateTime**. `5` - **Bool**. `6` - **Guid**. `7` - **Double**. `8` - **Binary**. `9` - **Byte**. `10` - **Int16**. `12` - **ForeignKey**: indicates a navigation property, i.e. a property related to an association between entities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
