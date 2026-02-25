---
title: "For Resource Creation (Mono Record)"
description: "For Resource Creation (Mono Record)"
sidebar_position: 10
---

# For Resource Creation (Mono Record)

This section guides you through the procedure for the creation of a [Workflow](../../../integration-guide/toolkit/xml-configuration/workflows/workflow) to create a new resource with a unique record.

## Declare a Workflow

This [Workflow](../../../integration-guide/toolkit/xml-configuration/workflows/workflow) is made of four activities:

1. `Action With Refine`: sends the creation request with a possibility of delegation.
2. `Persist Only Resources`: saves the collected data to the repository without triggering
provisioning.
3. `Review With Feedback`: reviews the creation request with the possibility of getting feedback
from another user.
4. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../../integration-guide/workflows/activity-templates) topic for additional information.

The example below creates a workflow to create a new worker.

```
<Workflow Identifier="Directory_User_NewInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" />  <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />  <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>
```

## Create Forms

The XML configuration below represents the creation of a [Form](../../../integration-guide/toolkit/xml-configuration/user-interface/form) that defines the elements to display in the workflow.

Here we create two structured forms: the preliminary one is called inside the main one, and the main one is to be called in our final workflow form.

```
Preliminary form for user data:
<Form Identifier="Workflow_Directory_User_NewInternal_PersonalData" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">      <Control Binding="LastName" IsRequired="true" />      <Control Binding="FirstName" IsRequired="true" />    </Control>    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset">      <Control Binding="PhoneNumber" />      <Control Binding="MobileNumber" />    </Control>    <Control DisplayName_L1="Photo" OutputType="LayoutRowset">      <Control Binding="User.Photo" InputType="Image" />    </Control>  </Control>

Preliminary form for user's contract data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Contract" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">    <Control Binding="UserType" IsRequired="true" />    <Control Binding="ContractStartDate" IsRequired="true" />    <Control Binding="ContractEndDate" InputType="Date" AddedMinutes="1440" />  </Control></Form>

Preliminary form for user's position data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Position" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Position" OutputType="LayoutFieldset">    <Control Binding="Title" />    <Control Binding="Organization" />    <Control Binding="Site" />    <Control Binding="PositionStartDate" />    <Control Binding="PositionEndDate" />  </Control></Form>

Main form for all data:
<Form Identifier="Workflow_Directory_User_NewInternal" EntityType="Directory_UserRecord">
  Section calling the preliminary form for user data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_PersonalData" />
  Section calling the preliminary form for contract data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Contract" />
  Section calling the preliminary form for position data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Position" /></Form>
```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a resource's creation with one record, i.e. `WorkflowCreateRecordEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>
```

A `WorkflowCreateRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>
  <MainControl OutputType="LayoutContainer"></MainControl>
</WorkflowCreateRecordEntityForm>
```

The `MainControl` attribute is here an empty container because we configure all personal data, contracts and positions as records to be able to anticipate changes for example. The line with the empty `MainControl` is not mandatory. See the [Position Change via Records](../../../integration-guide/identity-management/joiners-movers-leavers/position-change)topic for additional information.

- `RecordControl` that defines record data, and calls the form created previously. See the For
Resource Creation (Mono Record) topic for additional information.

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee">  <MainControl OutputType="LayoutContainer" />
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal" />
</WorkflowCreateRecordEntityForm>
```

![UI Form](/images/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_form_v602.webp)

### Add a summary (Optional)

Another child element `RecordSummaryControl` can be added to insert a summary part, i.e. the form used after the workflow execution to show some values, most of the time those affected by the workflow, typically the properties editable in the workflow or generated properties. So in our situation, it displays the `EmployeeId` and `Mail` attributes that the workflow just computed:

```
Summary form:
<Form Identifier="Workflow_Directory_User_New_Summary" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Important Information" OutputType="LayoutFieldset">    <Control Binding="UserIdentifier" />    <Control Binding="Email" />    <Control Binding="Login" />  </Control></Form><WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee">  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_Base" />
  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_New_Summary">
</WorkflowCreateRecordEntityForm>
```

![UI Summary](/images/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_summary_v602.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right users. See the [Workflows](../../../integration-guide/workflows) topic for additional information.

Below is an example of an access control rule where the `Administrator` profile gets the permissions for the whole creation request and review from the previously created workflow:

```
**<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*">**

  Permissions for the Request activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" CanExecute="true" />

  Permissions for the Review activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" CanExecute="true" /></AccessControlRule>
```

## Create Menu Items in the UI

[Menu Item](../../../integration-guide/toolkit/xml-configuration/user-interface/menuitem)must be defined to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](/images/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the existing menu items list:

```
<MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">  ...
  <MenuItem Identifier="Menu_Search_Directory_User_NewInternal" DisplayName_L1="New Employee" IconCode="AddFriend" Workflow="Directory_User_NewInternal" /></MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">
```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates see the [Configure a Homonym Detection](../../../integration-guide/workflows/create-workflow/workflow-update-multi) topic for additional information.

When using records, the homonym detection displays the list of records and not just the list of users.

Below is an example where a homonym entity link, based on the user's name, is called in the workflow form:

```
Homonym detection:
<HomonymEntityLink Identifier="Homonym_Directory_UserRecord" FormEntityType="Directory_UserRecord">
  <Filter
    Property1="FirstName"
    Property2="LastName"
  />  <Filter
    Property1="FirstName" ComparisonProperty1="LastName"
    Property2="LastName" ComparisonProperty2="FirstName"
  />  <Filter
    Property1="FirstName"
    Property2="LastName" ComparisonProperty2="BirthName"
  /></HomonymEntityLink>

Partial form for user data:
...
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Directory_UserRecord">  <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">    <Control Binding="LastName" IsRequired="true" />    <Control Binding="FirstName" IsRequired="true" />  </Control></Control>...
```

![UI Homonym Detection](/images/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmono_homonym_v603.webp)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the [Customize Display Tables](../../../integration-guide/ui/custom-display-table) topic for additional information.

