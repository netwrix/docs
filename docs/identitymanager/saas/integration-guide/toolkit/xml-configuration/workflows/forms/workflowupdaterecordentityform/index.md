---
title: "WorkflowUpdateRecordEntityForm"
description: "WorkflowUpdateRecordEntityForm"
sidebar_position: 80
---

# WorkflowUpdateRecordEntityForm

Displays a form to select an existing record and update it.

## Examples

The following example is a form to update a user's record from helpdesk:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

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

:::note
`WorkflowUpdateRecordEntity` used in config Delete mode (`IsDelete=True`) will delete
systematically the main resource and all the associated records.
:::


The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Data](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Update Data](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_summary_v603.webp)

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |
