---
title: "WorkflowUpdateRecordEntitiesForm"
description: "WorkflowUpdateRecordEntitiesForm"
sidebar_position: 70
---

# WorkflowUpdateRecordEntitiesForm

Displays a form to update data for several resources simultaneously.

## Examples

The following example is a form to update users' positions in bulk.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowUpdateRecordEntitiesForm Identifier="Workflow_Directory_User_MassUpdate" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_MassUpdate:Request" HideRoles="false" FormTitle_L1="Update Users" >
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" />
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Unique" />
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" />
</WorkflowUpdateRecordEntitiesForm>
With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Main" EntityType="Directory_User">
    <Control Binding="IsDraft" />
</Form>
And with the following form for the workflow's content and summary about record data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Base" EntityType="Directory_UserRecord">
        <Control Binding="ContractEndDate" InputType="Date" />
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="Title" />
        <Control Binding="Manager" />
        <Control Binding="Organization" />
        <Control Binding="Site" />
        <Control Binding="PositionStartDate" />
        <Control Binding="PositionEndDate" InputType="Date" />
    </Control>
</Form>
And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_User_AddPosition_Unique" EntityType="Directory_UserRecord">
    <Control Binding="PositionIdentifier" />
</Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Mass Update](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentitiesform/formexample_workflowupdaterecordentitiesform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be modified as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |
