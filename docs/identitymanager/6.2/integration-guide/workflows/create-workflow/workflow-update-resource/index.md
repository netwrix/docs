---
title: "For Resource Update (No Record)"
description: "For Resource Update (No Record)"
sidebar_position: 30
---

# For Resource Update (No Record)

This section guides you through the procedure for the creation of a workflow to update a simple
resource, i.e. to update, within a given resource, properties that do not involve records.

## Declare a Workflow

This [Workflow](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/workflow/index.md) is made of two
activities:

1. `Action With Refine`: sends the resource's update request with a possibility of delegation.
2. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](/docs/identitymanager/6.2/integration-guide/workflows/activity-templates/index.md) topic for additional information.

The example below creates a workflow to update only the user's `IsDraft` attribute.

```

<Workflow Identifier="Directory_User_ChangeIsDraft" DisplayName_L1="User - Update IsDraft" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/form/index.md) that defines the elements to
display in the workflow.

Here we just have one field called `IsDraft` to update the corresponding boolean attribute for a
given user:

```

<Form Identifier="Workflow_Directory_User_ChangeIsDraft_Base" EntityType="Workflow_Directory_User">  <Control DisplayName_L1="IsDraft" OutputType="LayoutRowset" EntityType="Directory_User">    <Control Binding="IsDraft" />  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update, i.e.
`WorkflowEditEntityForm` and it must specify the workflow's context (the entity type of the involved
resources, the main property, the activity when the form is called, etc):

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft"/>

```

A `WorkflowEditEntityForm` requires one child element `MainControl` that defines the actual content
of the workflow's form and calls the form created previously:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft">
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
</WorkflowEditEntityForm>

```

![UI Form](/images/identitymanager/saas/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_form_v603.webp)

### Add a summary (Optional)

Another child element `SummaryControl` can be added to insert a summary part, i.e. the form used
after the workflow execution to show some values, most of the time those affected by the workflow,
typically the properties editable in the workflow or generated properties. So in our situation, it
displays the `IsDraft` attribute that the user just changed:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft">  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
  <SummaryControl OutputType="LayoutContainer" EntityType="Directory_User">    <Control Binding="IsDraft" />  </SummaryControl>
</WorkflowEditEntityForm>

```

![UI Summary](/images/identitymanager/saas/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_summary_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about the [Workflow](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/workflow/index.md)
permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*">  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu Item](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/menuitem/index.md) must be defined
to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/images/identitymanager/saas/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">  <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions">    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">      ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ChangeIsDraft" DisplayName_L1="Change IsDraft" IconCode="Edit" Workflow="Directory_User_ChangeIsDraft" />
    </MenuItem>  </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/integration-guide/ui/custom-display-table/index.md) topic for additional
information.
