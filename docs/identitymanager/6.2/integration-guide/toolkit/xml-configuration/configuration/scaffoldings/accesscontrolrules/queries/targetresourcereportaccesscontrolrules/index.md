---
title: "Target Resource Report Access Control Rules"
description: "Target Resource Report Access Control Rules"
sidebar_position: 30
---

# Target Resource Report Access Control Rules

Generates the right to apply a report for a profile on a given entity.

The existence of a report for this entity must exist in order to use this scaffolding. A scaffolding
allows to generate a default report for an entity:
[Target Resource Report Menus](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/targetresourcereportmenus/index.md)

## Examples

```

**<TargetResourceReportAccessControlRules EntityType="LDAP_Entry" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ReportQuery_Custom_Reports_Resources_Resources_LDAP_Entry" DisplayName_L1="Administrator_ReportQuery_Custom_Reports_Resources_Resources_LDAP_Entry" EntityType="LDAP_Entry" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Reports/Resources_LDAP_Entry/View" /></AccessControlRule>

```
