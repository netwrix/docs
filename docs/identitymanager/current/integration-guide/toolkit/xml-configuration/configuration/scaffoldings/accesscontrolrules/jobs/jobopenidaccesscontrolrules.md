---
title: "JobOpenIdAccessControlRules"
description: "Generates the minimal access control rules required to launch jobs for a profile linked to an OpenID client, except for rights on FulfillInternalWorkflows and custom API calls (to be added separately as needed)."
sidebar_position: 3
---

Generates the minimal access control rules required to launch jobs for a profile linked to an OpenID client, except for rights on FulfillInternalWorkflows and custom API calls (to be added separately as needed). No rule is generated if the profile is not linked to an OpenID client.


The scaffolding generates the following scaffoldings:

- [Provisioning Access Control Rules](../../accesscontrolrules/jobs/provisioningaccesscontrolrules)

Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.
- [Run Job Notification Access Control Rules](../../accesscontrolrules/jobs/runjobnotificationaccesscontrolrules)

Generates access control to send notification when job finish with an error state.
- [Run Job Repair Notification Access Control Rules](../../accesscontrolrules/jobs/runjobrepairnotificationaccesscontrolrules)

Generates access control to send notification when a relaunch job finish with an error state.
- [Synchronization Access Control Rules](../../accesscontrolrules/jobs/synchronizationaccesscontrolrules)

Generates rights to launch synchronization task.


## Examples


```xml
  <JobOpenIdAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Connector_ConnectorMapping_Query" DisplayName_L1="Administrator - SynchronizeSessionConnector" DisplayName_L2="Administrator - SynchronisationConnector" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Connector_Connectors_SynchronizeSession" DisplayName_L1="Administrator - SynchronizeSessionConnector" DisplayName_L2="Administrator - SynchronisationConnector" EntityType="Connector" Profile="Administrator">
  <Entry Permission="/Connectors/SynchronizeSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Resource_Connectors_SynchronizeSession" DisplayName_L1="Administrator - SynchronizeSessionResource" DisplayName_L2="Administrator - SynchronisationResource" EntityType="Resource" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/SynchronizeSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Connector_Connectors_ProvisioningSession" DisplayName_L1="Administrator - Provisioning Launch" DisplayName_L2="Administrator - Lancement du Provisioning" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/ProvisioningSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityTypeMapping_Connectors_ProvisioningSession" DisplayName_L1="Administrator - Provisioning Launch" DisplayName_L2="Administrator - Lancement du Provisioning" EntityType="EntityTypeMapping" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/ProvisioningSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityType_Connectors_ProvisioningSession" DisplayName_L1="Administrator - Provisioning Launch" DisplayName_L2="Administrator - Lancement du Provisioning" EntityType="EntityType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/ProvisioningSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceType_Connectors_ProvisioningSession" DisplayName_L1="Administrator - Provisioning Launch" DisplayName_L2="Administrator - Lancement du Provisioning" EntityType="ResourceType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/ProvisioningSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Resource_Connectors_ProvisioningSession" DisplayName_L1="Administrator - Provisioning Launch" DisplayName_L2="Administrator - Lancement du Provisioning" EntityType="Resource" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/ProvisioningSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Job_RunJobLaunch_Notification_Errored" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Jobs/RunJob/Launch/Errored" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Job_RunJobRepair_Notification_Errored" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Jobs/RunJob/Repair/Errored" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Job" DisplayName_L1="Administrator_Job" EntityType="Job" Profile="Administrator">
  <Entry Permission="/Jobs/RunJob/Launch" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_TaskInstance" DisplayName_L1="Administrator_TaskInstance" EntityType="TaskInstance" Profile="Administrator">
  <Entry Permission="/Jobs/TaskInstance/Create" CanExecute="true" />
  <Entry Permission="/Jobs/TaskInstance/Query" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Task" DisplayName_L1="Administrator_Task" EntityType="Task" Profile="Administrator">
  <Entry Permission="/Jobs/Task/Query" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_JobInstance" DisplayName_L1="Administrator_JobInstance" EntityType="JobInstance" Profile="Administrator">
  <Entry Permission="/Jobs/JobInstance/Query" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Connection" DisplayName_L1="Administrator_Connection" EntityType="Connection" Profile="Administrator">
  <Entry Permission="/Connectors/Connection/Query" CanExecute="true" />
  <Entry Permission="/Connectors/Connection/Update" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceTypeMapping" DisplayName_L1="Administrator_ResourceTypeMapping" EntityType="ResourceTypeMapping" Profile="Administrator">
  <Entry Permission="/Connectors/ProvisionerResourceTypeMapping/Query" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Setting" DisplayName_L1="Administrator_Setting" EntityType="Setting" Profile="Administrator">
  <Entry Permission="/Metadata/Setting/Query" CanExecute="true" />
</AccessControlRule>

```