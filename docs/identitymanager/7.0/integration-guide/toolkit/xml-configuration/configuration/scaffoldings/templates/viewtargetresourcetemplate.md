---
title: "ViewTargetResourceTemplate"
description: "Creates the entity view (designElement = resourceTable), the report and the rights for a given profile."
sidebar_position: 10
---

Creates the entity view (designElement = resourceTable), the report and the rights for a given profile.


The scaffolding generates the following scaffoldings:

- [Entity Type Display Name](../entitytypes/entitytypes/entitytypedisplayname)

Computes a default value for resources' internal display names.
- [Entity Type Display Target Resource Table](../entitytypes/entitytypes/entitytypedisplaytargetresourcetable)

Creates a displaytable for the given entity.
- [Target Resource Report](../queries/targetresourcereport)

Creates a ReportQuery with default Query taking all the properties of the entity.
- [Target Resource Report Access Control Rules](../accesscontrolrules/queries/targetresourcereportaccesscontrolrules)

Generates the permissions to apply a report for a profile on a given entity.
- [Target Resource Report Menus](../entitytypes/entitytypes/targetresourcereportmenus)

Creates the Item menu for the entity's report so that it is displayed in the report view.
- [View Access Control Rules](../accesscontrolrules/resources/viewaccesscontrolrules)

Generates the permissions to view an entity type's resources.


## Examples


```xml
  <ViewTargetResourceTemplate EntityType="SAB_User Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType optional | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile optional | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |
| Property optional | **Type:** String **Description:** Identifier of the property involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<EntityTypeDisplayName Id="303" EntityType="SAB_User" />
<EntityTypeDisplayTargetResourceTable Id="345" EntityType="SAB_User" />
<TargetResourceReportAccessControlRules Id="369" EntityType="SAB_User" Profile="Administrator" />
<TargetResourceReportMenus Id="378" EntityType="SAB_User" />
<TargetResourceReport Id="385" EntityType="SAB_User" />
<ViewAccessControlRules Id="393" EntityType="SAB_User" Profile="Administrator" />

```