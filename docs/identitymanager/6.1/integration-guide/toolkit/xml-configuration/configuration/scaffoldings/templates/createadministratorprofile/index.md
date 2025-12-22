---
title: "CreateAdministratorProfile"
description: "CreateAdministratorProfile"
sidebar_position: 20
---

# CreateAdministratorProfile

This scaffolding creates the administrator profile with a predefined set of rights.

To create the rights for this profile, a scaffolding list is launched inside the creation of the
administrator profile.

The scaffolding generates the following scaffoldings:

- [AccessReviewAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/accessreviews/accessreviewadministrationaccesscontrolrules/index.md):
  Generates the permissions to administrate campaign creation.
- [AssignProfileAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/assignprofileaccesscontrolrules/index.md):
  Gives to a given profile the rights to create, update, delete and query any assigned profile.
- [BasketRulesControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/basketrulescontrolrules/index.md):
  Generates the permissions to execute the different requests to display the information in the
  rights basket.
- [ConnectorResourceTypeAccessControl](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/connectors/connectorresourcetypeaccesscontrol/index.md):
  Gives the rights to create and update resource types, generate provisioning orders and fulfill
  from the connector screen.
- [ConnectorsAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/connectorsaccesscontrolrules/index.md):
  Gives the permissions to manage the connector pages.
- [CreateConnectorsJobs](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsjobs/index.md):
  Creates all jobs by connector to launched task in the connector page.
- [CreateResourceIncrementalAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/createresourceincrementalaccesscontrolrules/index.md):
  Generates the access control rule which gives to a profile the permission to query the resources
  modified incrementally
- [JobExecutionAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobexecutionaccesscontrolrules/index.md):
  Assigns a set of rights to a given profile to execute any job, and view all job instances, task
  instances and logs.
- [ManageAccounts](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/userinterfaces/manageaccounts/index.md):
- [ManageSettingAccessControlRule](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/managesettingaccesscontrolrule/index.md):
  Generates the access control rule which gives to a profile the permission to query, create, update
  and delete settings from the UM_Settings table.
- [MonitoringAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/monitoring/monitoringadministrationaccesscontrolrules/index.md):
  Generates the access control rule which gives to a profile the permission to query the monitoring
  screen.
- [PerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/performmanualprovisioningaccesscontrolrules/index.md):
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.
- [ProfileAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/profileadministrationaccesscontrolrules/index.md):
  Gives to a given profile the rights to create, update and delete profiles.
- [ProvisioningAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/provisioningaccesscontrolrules/index.md):
  Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.
- [ReconciliateResourcesAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reconciliateresourcesaccesscontrolrules/index.md):
  Generates the permissions to access the resource reconciliation pages for a given entity type and
  profile.
- [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reconciliaterolesaccesscontrolrules/index.md):
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.
- [RedundantAssignmentAccessControlRule](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/redundantassignmentaccesscontrolrule/index.md):
  Generates the permissions to access the **Redundant Assignment** page, to analyze and remove
  redundant assignments.
- [ReportAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/reportaccesscontrolrules/index.md):
  Generates the permissions to access the report view.
- [ResourceApiAdministration](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/resourceapiadministration/index.md):
  Generates the permissions to create/update/delete/query resources from a given entity type, for a
  given profile.
- [ResourcePickerControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/resourcepickercontrolrules/index.md):
  Creates the reading right of the resource picker.
- [ResourceTypeMappingControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/resourcetypemappingcontrolrules/index.md):
  Generate rights to launch agent fulfillment.
- [ReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reviewprovisioningaccesscontrolrules/index.md):
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.
- [ReviewRolesAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reviewrolesaccesscontrolrules/index.md):
  Generates the permissions to access the role review pages for a given entity type and profile.
- [RisksAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/risksadministrationaccesscontrolrules/index.md):
- [RoleAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules/index.md):
  Generates the permissions to access the configuration pages and create, update, delete the
  elements of the role model.
- [RoleNamingAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/rolenamingaccesscontrolrules/index.md):
  Generates the permissions to configure and launch the automatic creation of roles and rules based
  on naming conventions.
- [SettingsAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/connectors/settingsaccesscontrolrules/index.md):
  Generates the permissions to configure the Workforce Core Solution module and connector settings.
- [SimulationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/simulationaccesscontrolrules/index.md):
  Generates the permissions to configure and launch simulations.
- [SynchronizationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/synchronizationaccesscontrolrules/index.md):
  Generates rights to launch synchronization task.
- [TaskAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/taskadministrationaccesscontrolrules/index.md):
  Generates all rights to have the access to job administration page.
- [UniverseAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/queries/universeaccesscontrolrules/index.md):
  Generates an access control rule which gives a profile the permission to access the query page and
  run queries.
- [ViewHistoryResourceTemplate](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewhistoryresourcetemplate/index.md):
  Generates an access control rule giving to the specified profile the permission to browse the
  resources history of the specified entity type.
- [WorkflowConfigurationControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/workflowconfigurationcontrolrules/index.md):
- [WorkflowFulfillmentControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/workflowfulfillmentcontrolrules/index.md):
  Generates the execution rights to launch Fulfillment workflow for a given profile.
- [WorkflowOverviewControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/workflowoverviewcontrolrules/index.md):
  Generates the permissions to access the workflow supervision page.

## Examples

```

    <CreateAdministratorProfile EntityType="Directory_Guest">        <DisplayNameProfile Identifier="en-EN" Value="Administrator" />        <DisplayNameProfile Identifier="fr-FR" Value="Administrateur" />    </CreateAdministratorProfile>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Child Elements

- [DisplayNameProfile](#displaynameprofile) (optional) defines a display name for the administrator
  profile for a given language.

### DisplayNameProfile

| Property             | Details                                                                              |
| -------------------- | ------------------------------------------------------------------------------------ |
| DisplayName required | **Type** String **Description** Display name of the profile in the related language. |
| Identifier required  | **Type** String **Description** Code of the language for the display name.           |

## Generated XML

Our example generates the following configuration:

```

<Profile Identifier="Administrator" DisplayName_L1="Administrator" DisplayName_L2="Administrateur" /><AccessReviewAdministrationAccessControlRules Id="46" Profile="Administrator" /><AssignProfileAccessControlRules Id="47" Profile="Administrator" /><BasketRulesControlRules Id="48" Profile="Administrator" /><ConnectorResourceTypeAccessControl Id="5" Profile="Administrator" /><ConnectorsAccessControlRules Id="49" Profile="Administrator" /><CreateResourceIncrementalAccessControlRules Id="51" Profile="Administrator" /><JobExecutionAccessControlRules Id="212" Profile="Administrator" /><MonitoringAdministrationAccessControlRules Id="215" Profile="Administrator" /><PerformManualProvisioningAccessControlRules Id="216" EntityType="Directory_Guest" Profile="Administrator" /><ProfileAdministrationAccessControlRules Id="218" Profile="Administrator" /><ProvisioningAccessControlRules Id="219" Profile="Administrator" /><ReconciliateResourcesAccessControlRules Id="220" EntityType="Directory_Guest" Profile="Administrator" /><ReconciliateRolesAccessControlRules Id="222" EntityType="Directory_Guest" Profile="Administrator" /><ReportAccessControlRules Id="224" Profile="Administrator" /><ResourceApiAdministration Id="225" EntityType="Directory_Guest" Profile="Administrator" /><ResourcePickerControlRules Id="227" Profile="Administrator" /><ResourceTypeMappingControlRules Id="228" Profile="Administrator" /><ReviewProvisioningAccessControlRules Id="229" EntityType="Directory_Guest" Profile="Administrator" /><ReviewRolesAccessControlRules Id="231" EntityType="Directory_Guest" Profile="Administrator" /><RisksAdministrationAccessControlRules Id="233" Profile="Administrator" /><RoleAdministrationAccessControlRules Id="8" Profile="Administrator" /><RoleNamingAccessControlRules Id="234" Profile="Administrator" /><SimulationAccessControlRules Id="235" Profile="Administrator" /><SynchronizationAccessControlRules Id="236" Profile="Administrator" /><TaskAdministrationAccessControlRules Id="14" Profile="Administrator" /><ViewHistoryResourceTemplate Id="314" EntityType="Directory_Guest" Profile="Administrator" /><WorkflowAspect Id="316" Profile="Administrator" /><WorkflowConfigurationControlRules Id="317" Profile="Administrator" /><WorkflowFulfillmentControlRules Id="335" Profile="Administrator" /><WorkflowOverviewControlRules Id="336" EntityType="Directory_Guest" Profile="Administrator" />

```
