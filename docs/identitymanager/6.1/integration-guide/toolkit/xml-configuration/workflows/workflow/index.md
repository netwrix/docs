---
title: "Workflow"
description: "Workflow"
sidebar_position: 40
---

# Workflow

In Usercube, a workflow is a set of elemental units called activities that are stored as a model to
describe a real-world process. A workflow provides a mechanism for automating multi-step processes
across the application. It can be depicted as a sequence of operations, declared as work of a person
or group, an organization of staff, or one or more simple or complex mechanisms.

## Examples

The following example declares a simple workflow called `Directory_User_StartInternal` that involves
resources from the entity type `Directory_User`.

```

    <Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
        <Activity ... />        ...
    </Workflow>

```

## Properties

| Property                  | Details                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required   | **Type** String **Description** Workflow' name displayed in the UI. This column is used for the first language.                                  |
| Identifier required       | **Type** String **Description** Unique identifier of the workflow.                                                                               |
| IdentifierPrefix optional | **Type** String **Description** Workflow's identifier prefix, used to prefix the workflow's activity instances.                                  |
| VariablesType required    | **Type** Int64 **Description** Entity type of the resources involved by the workflow. Must follow the naming convention `Workflow_<EntityType>`. |

## Child Element: Activity

In Usercube, an activity is a elemental unit used to model a workflow's steps, such as the request
of new records, the mailing of notifications to users about pending approvals, or the
approval/decline of modifications. A workflow is made of a series of successive activities.

### Examples

The following workflow is made of four activities to add a new worker in the system.

```

<Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
    <Activity Identifier="Request"  DisplayName_L1="Request" Template="ActionWithRefine" />
    <Activity Identifier="PersistDraft"  DisplayName_L1="Draft Creation" Template="PersistOnlyResources" WorkflowOverviewDisable="1"/>
    <Activity Identifier="Review"  DisplayName_L1="Review" Template="ReviewWithFeedback" />
    <Activity Identifier="Persist"  DisplayName_L1="Commit" Template="Persist" WorkflowOverviewDisable="1"/>  </Workflow>

```

### Properties

| Property                                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ArgumentBlockProvisioning default value: false | **Type** Boolean **Description** `true` to block provisioning orders (argument used only for an activity following the template `Persist` or `PersistOnlyResources`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ArgumentCalledWorkflow optional                | **Type** Int64 **Description** Workflow to call (argument used only for an activity following the template `ContinueWith`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| DisplayName_L1 required                        | **Type** String **Description** Activity's name to display in the UI. This column is used for the first language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                            | **Type** String **Description** Unique identifier of the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Template required                              | **Type** Enumeration **Description** Identifier of the activity template. All possible values: - `Action`: awaits user modifications without another user's intervention. - `ActionWithRefine`: awaits user modifications with the possibility to delegate the action to another user. - `Review`: awaits user approval without another user's intervention. - `ReviewWithFeedback`: awaits user approval with the possibility of getting feedback from another user before taking the action. - `Persist`: saves the workflow's collected data to the repository and triggers dependant processes (i.e. provisioning). - `PersistOnlyResources`: saves the workflow's collected data to the repository and without triggering dependant processes (i.e. provisioning). - `ContinueWith`: Gets the previous activities of the workflow and continues starting from a given activity of another workflow. |
| WorkflowOverviewDisable default value: false   | **Type** Boolean **Description** `true` to disable the activity's appearance on the **Workflow Overview** screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
