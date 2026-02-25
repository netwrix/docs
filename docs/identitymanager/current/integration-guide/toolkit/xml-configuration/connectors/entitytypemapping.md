---
title: "EntityTypeMapping"
description: ""
sidebar_position: 6
---

An entity type mapping links a given [entity type](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype)'s properties with the source columns of the corresponding managed system. The entity type mapping specifies the related [connector](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/connectors/connector) and the path to the CSV source file which contains, or will contain, the data exported from the managed system. Each of its [properties](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping#child-element-property) will define the corresponding source column and specific options.

:::info
An entity type mapping shares the same identifier as its related entity type.
:::

[See the example of a whole connector containing an entity type mapping](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/connectors/connector).

## Properties

|Property|Details|
|---|---|
| C0 optional | **Type:** String **Description:** In a Microsoft Entra ID connector (formerly Azure Active Directory), generic column used to map the entities to be exported. By default, Identity Manager exports: `user`; `group`; `directoryRole`; `servicePrincipal`. |
| ConnectionTable optional | **Type:** String **Description:** Name of the CSV file which contains, or will contain, the exported data from the corresponding entity type. |
| Connector optional | **Type:** Int64 **Description:** Identifier of the related connector. |
| MaximumDeletedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Deleted lines threshold. Sets the maximum number of resources that can be removed from the entity type when running the synchronization job. |
| MaximumInsertedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Inserted lines threshold. Sets the maximum number of resources that can be added into the entity type when running the synchronization job. |
| MaximumUpdatedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Updated lines threshold. Sets the maximum number of resources that can be modified within the entity type when running the synchronization job. |
| MaxPercentageDeletedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Deleted lines threshold in percent. |
| MaxPercentageInsertedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Inserted lines threshold in percent. |
| MaxPercentageUpdatedLines <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Updated lines threshold in percent. |

## Child Element: Property
Contains all the [entity properties](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype#child-element-property) of an [entity type](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype) that can be synchronized into Identity Manager physical model. Each mapping share the same id as its corresponding property in the entity type.

### Properties

|Property|Details|
|---|---|
| ConnectionColumn optional | **Type:** String **Description:** Specifies the corresponding column in the entity type data source. |
| Format optional | **Type:** String **Description:** The format of the attribute in the external system. Ex: 1601date for LDAP Date. |
| IsPrimaryKey <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` if the property is designated to be the unique and immutable key that uniquely identifies any resource from the entity type, during synchronization. Each entity type mapping must have a primary key. It prevents duplicates and null resources. |
| IsUniqueKey <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` if the property is designated to be one of the unique keys that uniquely identify any resource from the entity type in an association/navigation, during synchronization. Each entity type mapping can have up to three unique keys, in addition to the mapping key that already acts as such. **Note:** AD synchronization requires the `dn` property to have either `IsUniqueKey` or `EntityType` > `Property` > `IsKey` set to `true` (key property in the UI). |
