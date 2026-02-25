---
title: "Workflows"
description: "Workflows"
sidebar_position: 140
---

# Workflows

In software business, a [Workflow](../../integration-guide/toolkit/xml-configuration/workflows/workflow) is a series of specific actions taken by specific people to accomplish specific tasks. For Identity Manager, workflows are models of business workflows, processes or procedures.

## Overview

Workflows model business processes and update data within Identity Manager, they handle managed systems only indirectly through Identity Manager. They are engaged in order to complete a task, assigning rights for instance. It is a way of getting work done, a series of steps that are required to be completed sequentially. Most of the time, Identity Manager's workflows are made for:

1. manual entitlement requests = request / send notification(s) / approve / assign entitlement.
2. addition/update/deletion of resources (used in practice for identities) = create / give basic
entitlements / review / apply changes.

Workflows are very configurable objects with many available options. However, the most efficient way to use workflows in IGA is to keep them simple. Identity Manager's demo workflows constitute effective examples.

A workflow is made of several elements:

- a series of activities that constitutes the workflow;
- a form that collects input data;
- permissions required to realize the workflow's activities;
- menu items that make the workflow and its activities accessible;
- aspects that allow specific actions to be performed;
- a summary (optional) of the workflow's results;
- a homonym detection (optional) that prevents duplicates in resources;
- a display table (optional) that replaces Identity Manager's default table displaying the data of
the created/modified resource.

### Technical principles

- A workflow is linked to
one[Entity Type](../../integration-guide/toolkit/xml-configuration/metadata/entitytype) and concerns only resources from said entity type. For example, a workflow can be linked to `Directory_User` or `Directory_Department` according to the workflow's purpose, but not both together.
- The aim of a workflow is to get input data (either a form or just an approval) from users involved
in the workflow, then build a change set, and finally apply said change set to the relevant resource.
- Starting a workflow means starting its first activity.

## Activities

A workflow is made of successive activities, each of which is assigned an [Activity Templates](../../integration-guide/workflows/activity-templates)that defines how transitions occur from a workflow step to another.

Activities never run in parallel in a workflow. Each activity can start once the previous one reached its final state.

## Forms

Workflows use [Form](../../integration-guide/toolkit/xml-configuration/user-interface/form) to collect input data through the UI.

A form is a set of fields, configured with controls. A control can define a field to fill, a fields set, call an existing form, etc. depending on its output type. To be displayed in the UI, and potentially filled by a given user with the appropriate data, a form must have a type.

Forms without a type can be created in order to be called in other forms with a type. It can be useful to structure your forms, and to avoid rewriting a part of form that is needed in most forms for example.

### Form types

Identity Manager provides a few form types. Each form type implies the necessity of specific controls as child elements with specific purposes.

The following table presents the required child controls required for each form type applicable to a workflow's input form:

- **M** for `MainControl`(required) groups resource data apart from record data;
- **Su** for `SummaryControl`(optional when no/mono record) sums up resource data, mostly computed
properties, after the workflow's execution;
- **R** for `RecordControl`(required when handling records) groups the record data shared with all
records;
- **RUI** for `RecordUniqueItemControl`(recommended when handling records) groups the record data
specific to each record individually;
- **RSUI** for `RecordSlaveUniqueItemControl`(optional when updating multi records) appoints an
existing record to be the base of the fields' pre-filling, before the update of the record data shared with all records;
- **RS** for `RecordSlaveControl`(recommended when updating multi records) appoints an existing
record to be the base of the fields' pre-filling, before the update of the record data specific to each record individually;
- **RSu** for `RecordSummaryControl`(optional when handling mono record) sums up record data, mostly
computed properties, after the workflow's execution.

 | Form Type | M | Su | R | RUI | RSUI | RS | RSu |
 | --- | --- | --- | --- | --- | --- | --- | --- |
 | Workflow**Create**Entity Form | Req. | Opt. |  |  |  |  |  |
 | Workflow**Edit**Entity Form | Req. | Opt. |  |  |  |  |  |
 | Workflow**UpdateRecord**Entity Form | Req. | Opt. | Req. | Reco. |  |  | Opt. |
 | Workflow**AddRecord**Entity Form | Req. | Opt. | Req. | Reco. |  |  | Opt. |
 | Workflow**AddAndEndRecord**Entity Form | Req. | Opt. | Req. | Reco. |  |  | Opt. |
 | Workflow**CreateRecord**Entity Form | Req. | Opt. | Req. |  |  |  | Opt. |
 | Workflow**CreateSeveralRecord**Entity Form | Req. |  | Req. | Reco. |  |  |  |
 | Workflow**UpdateSeveralRecord**Entity Form | Req. |  | Req. | Reco. | Reco. | Opt. |  |
 | Workflow**UpdateRecord**Entities Form | Req. | Opt. | Req. | Reco. |  |  | Opt. |

## Permissions

For each workflow, some permissions must be assigned to specific [Profile](../../integration-guide/toolkit/xml-configuration/access-control/profile) so that said profiles are entitled to realize the workflow's actions.

While assigning the specific permissions of a workflow, it is necessary to assign the involved profiles a few essential rights via the [Workflow Access Control Rules](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/workflowaccesscontrolrules) scaffolding.

A workflow needs a permission for each of all its activity states involving user interaction. This means that, for example, the activities following the templates `Persist` and `Persist Only Resources` do not require any permission. This also means that, in the example of the `Action` template, a workflow would need permissions for the states `ActionPending`, `Aborted` and `Purged` (because deletion requires an authorization), but not for the state `Executed` that does not involve user interaction or special authorization. See the [Activity Templates](../../integration-guide/workflows/activity-templates) topic for additional information.

All these permissions can be shared and distributed among several profiles, according to the purpose of the workflow.

Identity Manager's permissions are assigned through [Access Control Rule](../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule) and follow the naming rule: `/Custom/workflows/{workflow_identifier}/{activity_identifier}/{activityTemplateState_shortIdentifier}`.

> For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request/ActionPending"`
> gives the right to act from the state `ActionPending` (so save, execute, etc.), inside a
> previously created activity `Request`, inside the workflow `Directory_User_StartInternal`.

A permission specifying the activity without the activity state gives the permissions for all activity states in this activity.

For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request"` **Caution**: this way of writing permissions is unsafe in case of a modification in the activity. So use it only for a "super admin" kind of profile if you are certain you want to give all rights.

## Menu Items

[Menu Item](../../integration-guide/toolkit/xml-configuration/user-interface/menuitem) make workflows accessible from the UI.

Identity Manager's UI is configured so that workflows are accesible from:

- the list of users accessible from the **Directory** section on the home page;
- the view page of a given user. In this case, the workflows manipulate the selected user.

## Aspects

An [Aspects](../../integration-guide/toolkit/xml-configuration/workflows/aspects) definition allows an action to be performed at a specific point in a workflow. Identity Manager provides a few [Aspects](../../integration-guide/toolkit/xml-configuration/workflows/aspects) templates that give the opportunity to delegate administration, to notify people of a request's progress and to compute special values like unique logins or email addresses.

## Summaries (Optional)

A summary can be displayed at the end of a workflow to sum up the collected information. The displayed data is configured through the `SummaryControl` or `RecordSummaryControl` introduced previously. A summary is particularly useful for workflows that compute properties like the `EmployeeId` or the email address. Thus calculated fields can be displayed after the workflow's execution.

## Homonym Detections (Optional)

A homonym search checks if a resource already exists in the system before creating/modifying it, preventing duplicates. It is configured through a [Homonym Entity Link](../../integration-guide/toolkit/xml-configuration/workflows/homonymentitylink).

See the [Configure a Homonym Detection](../../integration-guide/workflows/create-workflow/configure-homonym-test) topic for additional information.

## Display Tables (Optional)

Identity Manager provides a default display table to show the created/modified resource's data, but you can configure your own.

See the [Display Table](../../integration-guide/toolkit/xml-configuration/user-interface/displaytable) topic for additional informatrion.

