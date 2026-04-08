---
title: "WorkflowUpdateRecordEntityForm"
description: "Displays a form to select an existing record and update it."
sidebar_position: 8
---

Displays a form to select an existing record and update it.


## Examples
The following example is a form to update a user's record from helpdesk.

```xml
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Helpdesk_Directory_User_FixRecord" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_FixRecord:Request" FormTitle_L1="Repair Data (helpdesk)" >
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" />
  <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />
  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />
</WorkflowUpdateRecordEntityForm>

With the following form for the resource's data and summary:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">
  <Control Binding="Identifier" />
  <Control Binding="IsDraft" />
</Form>

And with the following form for the data shared with all records and for the summary:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">
  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" Name="Personal Data">
    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" Name="Full Name">
      <Control Binding="LastName" />
      <Control Binding="FirstName" />
    </Control>
    <Control Binding="BirthDate" />
    <Control Binding="Gender" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset" Name="Phone Numbers">
      <Control Binding="PhoneNumber" />
      <Control Binding="MobileNumber" />
    </Control>
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="StartDate" />
    <Control Binding="EndDate" InputType="Date" />
  </Control>

  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset" Name="Contract">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="ContractIdentifier" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
  </Control>

  <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="JobTitle" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
  </Control>
</Form>

And with the following form for the data that groups records together:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">
  <Control Binding="Id" />
</Form>
```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:
![Form Example - Update Data](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/FormExample_WorkflowUpdateRecordEntityForm_V603.webp)

:::note
The content of `RecordUniqueItemControl` is not visible. The user's records that have the same values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially modified, as one.
:::

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution:
![Formexample Workflowupdaterecordentityform V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_v603.webp)


## Properties

|Property|Details|
|---|---|


## Child Element: MainControl
Set of fields to collect data about the main resource.


|Property|Details|
|---|---|


## Child Element: RecordControl
Set of fields to collect data about the resource's record.


|Property|Details|
|---|---|


## Child Element: RecordUniqueItemControl
Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`.


|Property|Details|
|---|---|


## Child Element: MainSummaryControl
Set of fields to sum up the data collected by `MainControl` after the workflow's execution.


|Property|Details|
|---|---|


## Child Element: RecordSummaryControl
Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.


|Property|Details|
|---|---|

