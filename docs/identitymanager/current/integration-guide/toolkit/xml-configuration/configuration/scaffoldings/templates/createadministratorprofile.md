---
title: "CreateAdministratorProfile"
description: "Creates the profile administrator and all default access control rules."
sidebar_position: 2
---

This scaffolding creates the administrator profile with a predefined set of rights.

To create the rights for this profile, a scaffolding list is launched inside the creation of the administrator profile.

The scaffolding generates the following scaffoldings:

- [Access Review Administration Access Control Rules](../accesscontrolrules/accessreviews/accessreviewadministrationaccesscontrolrules)

Generates the permissions to administrate campaign creation.
- [Assigned Roles Access Control Rules](../accesscontrolrules/rolemodels/assignedrolesaccesscontrolrules)

Generates the permissions to access the assigned roles page for a given entity type and profile.
- [Assign Profile Access Control Rules](../accesscontrolrules/profiles/assignprofileaccesscontrolrules)

Gives to a given profile the rights to create, update, delete and query any assigned profile.
- [Basket Rules Control Rules](../accesscontrolrules/rolemodels/basketrulescontrolrules)

Generates the permissions to execute the different requests to display the information in the rights basket.
- [Connector Resource Type Access Control](../accesscontrolrules/connectors/connectorresourcetypeaccesscontrol)

Gives the rights to create and update resource types, generate provisioning orders and fulfill from the connector screen.
- [Connectors Access Control Rules](../templates/connectorsaccesscontrolrules)

Gives the permissions to manage the connector pages.
- [Create Connectors Jobs](../jobs/createconnectorsjobs)

Creates all jobs by connector to launched task in the connector page.
- [Create Resource Incremental Access Control Rules](../accesscontrolrules/resources/createresourceincrementalaccesscontrolrules)

Generates the access control rule which gives to a profile the permission to query the resources modified incrementally
- [Job Execution Access Control Rules](../templates/jobexecutionaccesscontrolrules)

Assigns a set of rights to a given profile to execute any job, and view all job instances, task instances and logs.
- [Manage Accounts](../accesscontrolrules/userinterfaces/manageaccounts)

 
- [Manage Setting Access Control Rule](../accesscontrolrules/queries/managesettingaccesscontrolrule)

Generates the access control rule which gives to a profile the permission to query, create, update and delete settings from the UM_Settings table.
- [Monitoring Administration Access Control Rules](../accesscontrolrules/monitoring/monitoringadministrationaccesscontrolrules)

Generates the access control rule which gives to a profile the permission to query the monitoring screen.
- [Perform Manual Provisioning Access Control Rules](../accesscontrolrules/rolemodels/performmanualprovisioningaccesscontrolrules)

Generates the permissions to access the manual provisioning pages for a given entity type and profile.
- [Profile Administration Access Control Rules](../accesscontrolrules/profiles/profileadministrationaccesscontrolrules)

Gives to a given profile the rights to create, update and delete profiles.
- [Provisioning Access Control Rules](../accesscontrolrules/jobs/provisioningaccesscontrolrules)

Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.
- [Reconciliate Resources Access Control Rules](../accesscontrolrules/rolemodels/reconciliateresourcesaccesscontrolrules)

Generates the permissions to access the resource reconciliation pages for a given entity type and profile.
- [Reconciliate Roles Access Control Rules](../accesscontrolrules/rolemodels/reconciliaterolesaccesscontrolrules)

Generates the permissions to access the role reconciliation pages for a given entity type and profile.
- [Redundant Assignment Access Control Rule](../accesscontrolrules/rolemodels/redundantassignmentaccesscontrolrule)

Generates the permissions to access the **Redundant Assignment** page, to analyze and remove redundant assignments.
- [Report Access Control Rules](../accesscontrolrules/queries/reportaccesscontrolrules)

Generates the permissions to access the report view.
- [Resource Api Administration](../accesscontrolrules/resources/resourceapiadministration)

Generates the permissions to create/update/delete/query resources from a given entity type, for a given profile.
- [Resource Picker Control Rules](../accesscontrolrules/resources/resourcepickercontrolrules)

Creates the reading right of the resource picker.
- [Resource Type Mapping Control Rules](../accesscontrolrules/jobs/resourcetypemappingcontrolrules)

Generate rights to launch agent fulfillment.
- [Review Provisioning Access Control Rules](../accesscontrolrules/rolemodels/reviewprovisioningaccesscontrolrules)

Generates the permissions to access the provisioning review pages for a given entity type and profile.
- [Review Roles Access Control Rules](../accesscontrolrules/rolemodels/reviewrolesaccesscontrolrules)

Generates the permissions to access the role review pages for a given entity type and profile.
- [Risks Administration Access Control Rules](../accesscontrolrules/rolemodels/risksadministrationaccesscontrolrules)

 
- [Role Administration Access Control Rules](../accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules)

Generates the permissions to access the configuration pages and create, update, delete the elements of the role model.
- [Role Naming Access Control Rules](../accesscontrolrules/rolemodels/rolenamingaccesscontrolrules)

Generates the permissions to configure and launch the automatic creation of roles and rules based on naming conventions.
- [Settings Access Control Rules](../accesscontrolrules/connectors/settingsaccesscontrolrules)

Generates the permissions to configure the Workforce Core Solution module and connector settings.
- [Simulation Access Control Rules](../templates/simulationaccesscontrolrules)

Generates the permissions to configure and launch simulations.
- [Synchronization Access Control Rules](../accesscontrolrules/jobs/synchronizationaccesscontrolrules)

Generates rights to launch synchronization task.
- [Task Administration Access Control Rules](../accesscontrolrules/jobs/taskadministrationaccesscontrolrules)

Generates all rights to have the access to job administration page.
- [Universe Access Control Rules](../accesscontrolrules/queries/universeaccesscontrolrules)

Generates an access control rule which gives a profile the permission to access the query page and run queries.
- [View History Resource Template](../accesscontrolrules/resources/viewhistoryresourcetemplate)

Generates an access control rule giving to the specified profile the permission to browse the resources history of the specified entity type.
- [Workflow Aspect](../accesscontrolrules/workflows/workflowaspect)

 
- [Workflow Configuration Control Rules](../accesscontrolrules/workflows/workflowconfigurationcontrolrules)

 
- [Workflow Fulfillment Control Rules](../accesscontrolrules/jobs/workflowfulfillmentcontrolrules)

Generates the execution rights to launch Fulfillment workflow for a given profile.
- [Workflow Overview Control Rules](../accesscontrolrules/workflows/workflowoverviewcontrolrules)

Generates the permissions to access the workflow supervision page.


## Examples


```xml
    <CreateAdministratorProfile EntityType="Directory_Guest">
        <DisplayNameProfile Identifier="en-EN" Value="Administrator" />
        <DisplayNameProfile Identifier="fr-FR" Value="Administrateur" />
    </CreateAdministratorProfile>
```


## Properties

|Property|Details|
|---|---|
| EntityType optional | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Child Elements
* [DisplayNameProfile](#displaynameprofile) (optional) defines a display name for the administrator profile for a given language.

### DisplayNameProfile


|Property|Details|
|---|---|
| DisplayName required | **Type:** String **Description:** Display name of the profile in the related language. |
| Identifier required | **Type:** String **Description:** Code of the language for the display name. |




## Generated XML

Our example generates the following configuration:

```xml
<Profile Identifier="Administrator" DisplayName_L1="Administrator" DisplayName_L2="Administrateur" />
<AccessReviewAdministrationAccessControlRules Id="46" Profile="Administrator" />
<AssignProfileAccessControlRules Id="47" Profile="Administrator" />
<BasketRulesControlRules Id="48" Profile="Administrator" />
<ConnectorResourceTypeAccessControl Id="5" Profile="Administrator" />
<ConnectorsAccessControlRules Id="49" Profile="Administrator" />
<CreateResourceIncrementalAccessControlRules Id="51" Profile="Administrator" />
<JobExecutionAccessControlRules Id="212" Profile="Administrator" />
<MonitoringAdministrationAccessControlRules Id="215" Profile="Administrator" />
<PerformManualProvisioningAccessControlRules Id="216" EntityType="Directory_Guest" Profile="Administrator" />
<ProfileAdministrationAccessControlRules Id="218" Profile="Administrator" />
<ProvisioningAccessControlRules Id="219" Profile="Administrator" />
<ReconciliateResourcesAccessControlRules Id="220" EntityType="Directory_Guest" Profile="Administrator" />
<ReconciliateRolesAccessControlRules Id="222" EntityType="Directory_Guest" Profile="Administrator" />
<ReportAccessControlRules Id="224" Profile="Administrator" />
<ResourceApiAdministration Id="225" EntityType="Directory_Guest" Profile="Administrator" />
<ResourcePickerControlRules Id="227" Profile="Administrator" />
<ResourceTypeMappingControlRules Id="228" Profile="Administrator" />
<ReviewProvisioningAccessControlRules Id="229" EntityType="Directory_Guest" Profile="Administrator" />
<ReviewRolesAccessControlRules Id="231" EntityType="Directory_Guest" Profile="Administrator" />
<RisksAdministrationAccessControlRules Id="233" Profile="Administrator" />
<RoleAdministrationAccessControlRules Id="8" Profile="Administrator" />
<RoleNamingAccessControlRules Id="234" Profile="Administrator" />
<SimulationAccessControlRules Id="235" Profile="Administrator" />
<SynchronizationAccessControlRules Id="236" Profile="Administrator" />
<TaskAdministrationAccessControlRules Id="14" Profile="Administrator" />
<ViewHistoryResourceTemplate Id="314" EntityType="Directory_Guest" Profile="Administrator" />
<WorkflowAspect Id="316" Profile="Administrator" />
<WorkflowConfigurationControlRules Id="317" Profile="Administrator" />
<WorkflowFulfillmentControlRules Id="335" Profile="Administrator" />
<WorkflowOverviewControlRules Id="336" EntityType="Directory_Guest" Profile="Administrator" />

```