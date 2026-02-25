---
title: "Workflow Overview Control Rules"
description: "Workflow Overview Control Rules"
sidebar_position: 50
---

# Workflow Overview Control Rules

Generates the rights to access the workflow supervision page.

Gives access to a shortcut on the dashboard to access this page.

![Workflow Overview](/images/identitymanager/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

## Examples

```

**<WorkflowOverviewControlRules Profile="Administrator" EntityType="Directory_User"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="HR_ActivityTemplateState" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="ActivityTemplateState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateState/Query" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Application_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Bot_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Guest_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Organization_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_PresenceState_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_UserRecord_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedCompositeRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedCompositeRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedCompositeRole" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceNavigation" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceNavigation" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceScalar" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceScalar" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceType" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceType" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedSingleRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedSingleRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedSingleRole" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Category" DisplayName_L1="Main/Administrator - Workflow SupervisionCategory" DisplayName_L2="M�tier/RH - Supervision des WorkflowsCategory" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Workflow_Directory_User" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/Supervise/Workflow_Directory_User" />  <Entry CanExecute="true" Permission="/Workflows/HistorizedResourceFileByWorkflowInstanceIdQuery/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Workflow_Directory_User_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule>

```
