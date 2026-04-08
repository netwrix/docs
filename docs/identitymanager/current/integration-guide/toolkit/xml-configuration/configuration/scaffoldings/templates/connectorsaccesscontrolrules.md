---
title: "ConnectorsAccessControlRules"
description: "Gives the permissions to manage the connector pages."
sidebar_position: 1
---

Gives the permissions to manage the connector pages.

Generates the permissions to access the connectors pages, the policies page, the access roles page, the access rules page and the job execution page.

Gives access to shortcuts on the dashboard to access these pages.

![Connectors](/images/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)


The scaffolding generates the following scaffoldings:

- [Connector Resource Type Access Control](../accesscontrolrules/connectors/connectorresourcetypeaccesscontrol)

Gives the rights to create and update resource types, generate provisioning orders and fulfill from the connector screen.
- [Job View Access Control Rules](../templates/jobviewaccesscontrolrules)

Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
- [Resource Type Mapping Control Rules](../accesscontrolrules/jobs/resourcetypemappingcontrolrules)

Generate rights to launch agent fulfillment.
- [Role Administration Access Control Rules](../accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules)

Generates the permissions to access the configuration pages and create, update, delete the elements of the role model.
- [Run Job Repair Administration Access Control Rules](../accesscontrolrules/jobs/runjobrepairadministrationaccesscontrolrules)

Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or a synchronization for a given profile.
- [Task Administration Access Control Rules](../accesscontrolrules/jobs/taskadministrationaccesscontrolrules)

Generates all rights to have the access to job administration page.


## Examples


```xml
  <ConnectorsAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="ConnectorConnection_Administrator_ActivityTemplateTransition" DisplayName_L1="Administrator - Connection Configuration - ActivityTemplateTransition" DisplayName_L2="Administrator - Configuration d'une connexion - ActivityTemplateTransition" EntityType="ActivityTemplateTransition" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_Connection" DisplayName_L1="Administrator - Connection Configuration - Connection" DisplayName_L2="Administrator - Configuration d'une connexion - Connection" EntityType="Connection" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_ConnectionPackage" DisplayName_L1="Administrator - Connection Configuration - ConnectionPackage" DisplayName_L2="Administrator - Configuration d'une connexion - ConnectionPackage" EntityType="ConnectionPackage" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_Connector" DisplayName_L1="Administrator - Connection Configuration - Connector" DisplayName_L2="Administrator - Configuration d'une connexion - Connector" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_EntityAssociation" DisplayName_L1="Administrator - Connection Configuration - EntityAssociation" DisplayName_L2="Administrator - Configuration d'une connexion - EntityAssociation" EntityType="EntityAssociation" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_EntityProperty" DisplayName_L1="Administrator - Connection Configuration - EntityProperty" DisplayName_L2="Administrator - Configuration d'une connexion - EntityProperty" EntityType="EntityProperty" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorConnection_Administrator_Workflow" DisplayName_L1="Administrator - Connection Configuration - Workflow" DisplayName_L2="Administrator - Configuration d'une connexion - Workflow" EntityType="Workflow" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorDashboard_Administrator_Agent" DisplayName_L1="Administrator - Connector Dashboard - Agent" DisplayName_L2="Administrator - Dashboard d'un connecteur - Agent" EntityType="Agent" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connector/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorDashboard_Administrator_Job" DisplayName_L1="Administrator - Connector Dashboard - Job" DisplayName_L2="Administrator - Dashboard d'un connecteur - Job" EntityType="Job" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Jobs/Job/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorDashboard_Administrator_ResourceType" DisplayName_L1="Administrator - Connector Dashboard - ResourceType" DisplayName_L2="Administrator - Dashboard d'un connecteur - ResourceType" EntityType="ResourceType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_ConnectionColumn" DisplayName_L1="Administrator - Entity Type Configuration - ConnectionColumn" DisplayName_L2="Administrator - Configuration d'un type d'entité - ConnectionColumn" EntityType="ConnectionColumn" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_ConnectionTable" DisplayName_L1="Administrator - Entity Type Configuration - ConnectionTable" DisplayName_L2="Administrator - Configuration d'un type d'entité - ConnectionTable" EntityType="ConnectionTable" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_Connector" DisplayName_L1="Administrator - Entity Type Configuration - Connector" DisplayName_L2="Administrator - Configuration d'un type d'entité - Connector" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_DisplayEntityProperty" DisplayName_L1="Administrator - Entity Type Configuration - DisplayEntityProperty" DisplayName_L2="Administrator - Configuration d'un type d'entité - DisplayEntityProperty" EntityType="DisplayEntityProperty" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_DisplayEntityType" DisplayName_L1="Administrator - Entity Type Configuration - DisplayEntityType" DisplayName_L2="Administrator - Configuration d'un type d'entité - DisplayEntityType" EntityType="DisplayEntityType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityAssociation" DisplayName_L1="Administrator - Entity Type Configuration - EntityAssociation" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityAssociation" EntityType="EntityAssociation" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityAssociationMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityAssociationMapping" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityAssociationMapping" EntityType="EntityAssociationMapping" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityProperty" DisplayName_L1="Administrator - Entity Type Configuration - EntityProperty" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityProperty" EntityType="EntityProperty" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityPropertyMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityPropertyMapping" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityPropertyMapping" EntityType="EntityPropertyMapping" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityType" DisplayName_L1="Administrator - Entity Type Configuration - EntityType" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityType" EntityType="EntityType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityTypeMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityTypeMapping" DisplayName_L2="Administrator - Configuration d'un type d'entité - EntityTypeMapping" EntityType="EntityTypeMapping" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />
  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" />
</AccessControlRule>
<AccessControlRule Identifier="ConnectorsList_Administrator_Connector" DisplayName_L1="Administrator - Connector List - Connector" DisplayName_L2="Administrator - Liste des connecteurs - Connector" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connector/Create" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Delete" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Reload" />
  <Entry CanExecute="true" Permission="/Connectors/Connector/Update" />
</AccessControlRule>
<JobViewAccessControlRules Id="6" Profile="Administrator" />
<RunJobRepairAdministrationAccessControlRules Id="12" Profile="Administrator" />

```