---
title: "ViewTargetResourceTemplate"
description: "ViewTargetResourceTemplate"
sidebar_position: 100
---

# ViewTargetResourceTemplate

Creates the entity view (designElement = resourceTable), the report and the rights for a given
profile.

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplayname/index.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTargetResourceTable](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplaytargetresourcetable/index.md):
  Creates a displaytable for the given entity.
- [TargetResourceReport](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/targetresourcereport/index.md):
  Creates a ReportQuery with default Query taking all the properties of the entity.
- [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/targetresourcereportaccesscontrolrules/index.md):
  Generates the permissions to apply a report for a profile on a given entity.
- [TargetResourceReportMenus](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/targetresourcereportmenus/index.md):
  Creates the Item menu for the entity's report so that it is displayed in the report view.
- [ViewAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index.md):
  Generates the permissions to view an entity type's resources.

## Examples

```

**<ViewTargetResourceTemplate EntityType="SAB_User Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="303" EntityType="SAB_User" /><EntityTypeDisplayTargetResourceTable Id="345" EntityType="SAB_User" /><TargetResourceReportAccessControlRules Id="369" EntityType="SAB_User" Profile="Administrator" /><TargetResourceReportMenus Id="378" EntityType="SAB_User" /><TargetResourceReport Id="385" EntityType="SAB_User" /><ViewAccessControlRules Id="393" EntityType="SAB_User" Profile="Administrator" />

```
