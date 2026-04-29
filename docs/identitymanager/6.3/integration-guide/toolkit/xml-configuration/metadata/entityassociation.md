---
title: "EntityAssociation"
description: ""
sidebar_position: 4
---

An entity association is used to model an association in Identity Manager's metadata. See the [example of a whole connector](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/connectors/connector) with its entity properties and associations.


## Examples
The following example associates one title (as a property from the entity type `Directory_UserRecord`) with several user records (as a property from the entity type `Directory_Title`).

```xml
<EntityAssociation Identifier="Directory_UserRecord_Title_User_Records" IsProperty2Collection="true"
    Property1="Directory_UserRecord:Title" Property2="Directory_Title:UserRecords" />
```

### Many-to-many association

The following example associates SAB users with groups, with the possibility to link one group to several users, and one user to several groups.

```xml
<EntityAssociation Identifier="SAB_Group_User" DisplayName_L1="User" IsProperty1Collection="true" IsProperty2Collection="true" Property1="SAB_Group:User" Property2="SAB_User:Group" />
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the association in language 1 (up to 16). |
| Identifier required | **Type:** String **Description:** Unique identifier of the association. It must be unique to the entity model scope. |
| IsProperty1Collection <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to define a many-to-one association. |
| IsProperty2Collection <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to define a one-to-many association. |
| Property1 required | **Type:** Int64 **Description:** Defines the first navigation property. A navigation property can be mono-valued or multi-valued (with its corresponding `IsPropertyCollection` set to `true`). Mono-valued navigation properties may be optimized (with a `TargetColumnIndex`) or not (without `TargetColumnIndex`). See more details under the TargetColumnIndex section of the [entity type property](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype#properties-1)'s page. |
| Property2 required | **Type:** Int64 **Description:** Defines the second navigation property. |
