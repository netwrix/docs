---
title: "For Resource Update (Multi Records)"
description: "For Resource Update (Multi Records)"
sidebar_position: 50
---

# For Resource Update (Multi Records)

This section guides you through the procedure for the creation of a workflow to update an existing
resource through its several records.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/workflow/index.md)
is made of three activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/integration-guide/workflows/activity-templates/index.md#actionwithrefine):
   sends the resource's records update request with a possibility of delegation.
2. [`ReviewWithFeedback`](/docs/identitymanager/6.1/integration-guide/workflows/activity-templates/index.md#reviewwithfeedback):
   reviews the update request with the possibility of getting feedback from another user.
3. [`Persist`](/docs/identitymanager/6.1/integration-guide/workflows/activity-templates/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to update the records of an existing user:

```

<Workflow Identifier="Directory_User_UpdateSeveralRecords" DisplayName_L1="User - Manage positions" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request"  DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="Review"  DisplayName_L1="Review" Template="ReviewWithFeedback" />  <Activity Identifier="Persist"  DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/form/index.md)
that defines the elements to display in the workflow.

Here we create three structured forms, all to be called in our final workflow form:

```

First form for the user's record data, shared with all records:
<Form Identifier="Directory_User_UpdateSeveralRecords_Shared" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">    <Control Binding="ContractStartDate" />    <Control Binding="ContractEndDate" AddedMinutes="1440" />  </Control></Form>

Second form for the user's record data, specific to each record individually:
<Form Identifier="Directory_User_UpdateSeveralRecords_Base" EntityType="Workflow_Directory_User">  <Control OutputType="LayoutContainer" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Position" OutputType="LayoutFieldset">      <Control Binding="Title" IsRequired="true" />      <Control Binding="Department" />      <Control Binding="Site" DefaultValueBinding="Department.Manager.MainRecord.Site" />      <Control Binding="StartDate" />      <Control Binding="EndDate" />    </Control>  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update with several
records, i.e. `WorkflowUpdateSeveralRecordEntityForm` and it must specify the workflow's context
(the entity type of the involved resources, the main property, the activity when the form is called,
etc.
[see more details](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/form/index.md)):

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"></WorkflowUpdateSeveralRecordsEntityForm>

```

`WorkflowUpdateSeveralRecordEntityForm` displays a date picker for the end of transition, to
schedule the record replacement.

A `WorkflowUpdateSeveralRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">
  <MainControl OutputType="LayoutContainer" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `MainControl` attribute is here an empty container, because it is a mandatory attribute that is
not involved in the changes of this workflow.

- `RecordControl` that defines the record data shared with all records and calls the firstform
  created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordUniqueItemControl` that defines the record data specific to each record individually, and
  calls the secondform created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveControl` that copies an existing record to be the base, i.e. pre-fill the fields, for
  the update of record data specific to each record individually. Thus it calls the same form as
  `RecordUniqueItemControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveUniqueItemControl` that copies an existing record to be the base, i.e. pre-fill the
  fields, for the update of record data shared with all records. Thus it calls the same form as
  `RecordControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />  <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `RecordSlaveControl` attribute calls here the same form as `RecordUniqueControl`, because it
copies part of the main record to pre-fill the fields of `RecordUniqueControl`.

![UI Form](/images/identitymanager/6.1/integration-guide/workflows/how-to/workflow-update-multi/howto_resourceupdatemulti_form_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/integration-guide/workflows/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_*" DisplayName_L1="Administrator_Workflows_Directory_User_*">  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Purged" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/ReviewPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/menuitem/index.md)
must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/images/identitymanager/6.1/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/integration-guide/ui/how-tos/create-menu-items/index.md):

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">  <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions">    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">      ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ManagePositions" DisplayName_L1="Manage Positions" IconCode="Edit" Workflow="Directory_User_UpdateSeveralRecords" />
    </MenuItem>  </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/integration-guide/workflows/index.md#aspects)
according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, read
[how to configure a homonym detection](/docs/identitymanager/6.1/integration-guide/workflows/how-to/configure-homonym-test/index.md).

When using records, the homonym detection displays the list of records and not just the list of
users.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/integration-guide/ui/how-tos/custom-display-table/index.md).
