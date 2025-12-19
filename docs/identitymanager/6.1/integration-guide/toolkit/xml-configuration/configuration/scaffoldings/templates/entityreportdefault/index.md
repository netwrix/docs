---
title: "EntityReportDefault"
description: "EntityReportDefault"
sidebar_position: 40
---

# EntityReportDefault

Creates all configuration items to add a ReportQuery for an EntityType and profile.

The scaffolding generates the following scaffoldings:

- [ReportAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/reportaccesscontrolrules/index.md):
  Generates the permissions to access the report view.
- [TargetResourceReport](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/targetresourcereport/index.md):
  Creates a ReportQuery with default Query taking all the properties of the entity.
- [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/targetresourcereportaccesscontrolrules/index.md):
  Generates the permissions to apply a report for a profile on a given entity.
- [TargetResourceReportMenus](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/targetresourcereportmenus/index.md):
  Creates the Item menu for the entity's report so that it is displayed in the report view.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
