---
title: "Connector Resource Type Access Control"
description: "Connector Resource Type Access Control"
sidebar_position: 10
---

# Connector Resource Type Access Control

Generates the access control rules which give to a profile the permission to create and update
resource types, and launch generate provisioning orders and fulfillment from the connector screen.

## Examples

```

**<ConnectorResourceTypeAccessControl Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrateur_Category" EntityType="Category" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Connection" DisplayName_L1="Administrator_Connection" DisplayName_L2="Administrateur_Connection" EntityType="Connection" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_EntityProperty" DisplayName_L1="Administrator_EntityProperty" DisplayName_L2="Administrateur_EntityProperty" EntityType="EntityProperty" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_PasswordResetSetting" DisplayName_L1="Administrator_PasswordResetSetting" DisplayName_L2="Administrateur_PasswordResetSetting" EntityType="PasswordResetSetting" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrateur_Policy" EntityType="Policy" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourcePropertyMapping" DisplayName_L1="Administrator_ResourcePropertyMapping" DisplayName_L2="Administrateur_ResourcePropertyMapping" EntityType="ResourcePropertyMapping" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourceType" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrateur_ResourceType" EntityType="ResourceType" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourceTypeMapping" DisplayName_L1="Administrator_ResourceTypeMapping" DisplayName_L2="Administrateur_ResourceTypeMapping" EntityType="ResourceTypeMapping" Profile="Administrator">    <Entry Permission="/Connectors/ResourceTypeMapping/Query" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>

```
