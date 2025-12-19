---
title: "SettingsAccessControlRules"
description: "SettingsAccessControlRules"
sidebar_position: 20
---

# SettingsAccessControlRules

Generates the permissions to configure the Workforce Core Solution module and connector settings.

## Examples

```

**<SettingsAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Settings_ConnectionPackage_Manage" DisplayName_L1="Administrator_ConnectionPackage" DisplayName_L2="Administrator_ConnectionPackage" EntityType="ConnectionPackage" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Connection_Manage" DisplayName_L1="Administrator_Connection" DisplayName_L2="Administrator_Connection" EntityType="Connection" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Connector_Manage" DisplayName_L1="Administrator_Connector" DisplayName_L2="Administrator_Connector" EntityType="Connector" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Setting_Manage" DisplayName_L1="Administrator_Setting" DisplayName_L2="Administrator_Setting" EntityType="Setting" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule>

```
