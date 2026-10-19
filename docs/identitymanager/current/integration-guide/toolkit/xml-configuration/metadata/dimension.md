---
title: "Dimension"
description: ""
sidebar_position: 3
---

A dimension is an [Entity Type](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype) used to define an organizational filter for the Identity Manager role model.


## Examples
The following XML fragment defines the dimension `Organization0`. The dimension values are of `Directory_Organization` type. The `ColumnMapping` attribute specifies the column (0 to 127) used to store the dimension value in the assignment rule tables.

```xml
<Dimension Identifier="Organization0" DisplayName_L1="Department" EntityType="Directory_Organization" ColumnMapping="0" />
```

Some types of entities can be organized in a hierarchical tree structure. Thus, for example, organizational units form a tree structure modeled by a `Parent` navigation property that links the entity type to itself. It is possible to use the hierarchical aspect of a dimension in an assignment rule criterion. For example, the assignment must be extended to the whole subunits of a department. Such a dimension must be declared as a hierarchical dimension by specifying the attribute `IsHierarchical="true"`.

```xml
<Dimension Identifier="Organization0" DisplayName_L1="Department" EntityType="Directory_Organization" ColumnMapping="0" IsHierarchical="true" ParentProperty="Parent" />

<EntityType Identifier="Directory_Organization" DisplayName_L1="Department">
...
	<Property Identifier="Path" DisplayName_L1="Path" Type="String" TargetColumnIndex="6" />
	<Property Identifier="Parent" DisplayName_L1="Parent Department" Type="ForeignKey" TargetColumnIndex="128" />
...
</EntityType>
```

The attribute `ParentProperty` specifies the navigational property defining the hierarchy (`Parent` is the navigation property that links the `Directory_Organization` type to itself).


## Properties

|Property|Details|
|---|---|
| ColumnMapping required | **Type:** Int32 **Description:** Specifies the corresponding column in the role model rules. |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the dimension in language 1 (up to 16). |
| EntityType required | **Type:** Int64 **Description:** References the linked entity type. |
| Identifier required | **Type:** String **Description:** Unique identifier of the dimension. |
| IsExcludedFromRoleMining <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to exclude the dimension from role mining. It means that the dimension is not used as a criteria in the generated rules. |
| IsHierarchical <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to define a hierarchical dimension. **Note:** Cannot be used without `ParentProperty`. |
| ParentProperty optional | **Type:** Int64 **Description:** Specifies the navigational property defining the hierarchy. |
