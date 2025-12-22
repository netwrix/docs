---
title: "JobViewAccessControlRules"
description: "JobViewAccessControlRules"
sidebar_position: 60
---

# JobViewAccessControlRules

Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs. This
Scaffolding performs a set of scaffolding rights for Jobs and Tasks.

The scaffolding generates the following scaffoldings:

- [GetJobLogAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/getjoblogadministrationaccesscontrolrules/index.md):
  Generates the permissions to read task and job instances logs in UI for a given profile.
- [JobAdministrationAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/jobadministrationaccesscontrolrules/index.md):
  Scaffolding to access the job administration page.
- [PendingAssignedResourceTypesAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/pendingassignedresourcetypesaccesscontrolrules/index.md):
  Generates the access control rules which give to a profile the permissions to call the API Pending
  AssignedResourceTypes.
- [ResourceChangesViewAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/resourcechangesviewaccesscontrolrules/index.md):
  Generates the access control rules which gives to a profile the permissions to call the API
  ResourceChange, ResourceFileChange and ResourceLinkChange.

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_JobViews_Job" DisplayName_L1="Administrator - Management for Job" DisplayName_L2="Administrator - Gestion des Job" EntityType="Job" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_JobInstance" DisplayName_L1="Administrator - Management for JobInstance" DisplayName_L2="Administrator - Gestion des JobInstance" EntityType="JobInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Query" />  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_Task" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" />  <Entry CanExecute="true" Permission="/Jobs/Task/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskEntityType" DisplayName_L1="Administrator - Management for TaskEntityType" DisplayName_L2="Administrator - Gestion des TaskEntityType" EntityType="TaskEntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskInstance" DisplayName_L1="Administrator - Management for TaskInstance" DisplayName_L2="Administrator - Gestion des TaskInstance" EntityType="TaskInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskResourceType" DisplayName_L1="Administrator - Management for TaskResourceType" DisplayName_L2="Administrator - Gestion des TaskResourceType" EntityType="TaskResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Query" /></AccessControlRule><GetJobLogAdministrationAccessControlRules Id="1" Profile="Administrator" /><JobAdministrationAccessControlRules Id="2" Profile="Administrator" /><PendingAssignedResourceTypesAccessControlRules Id="3" Profile="Administrator" /><ResourceChangesViewAccessControlRules Id="4" Profile="Administrator" />

```
