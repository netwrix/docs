---
title: "WorkflowCreateRecordEntityForm"
description: "WorkflowCreateRecordEntityForm"
sidebar_position: 40
---

# WorkflowCreateRecordEntityForm

Displays a form to create a new resource with a record.

## Examples

The following example is a form to create a new user from HR.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_CreateFromHR" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_CreateFromHR:Request" FormTitle_L1="New Employee (from HR)">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_HR_Base" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_User_HR_Base"/>
</WorkflowCreateRecordEntityForm>
With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">
    <Control DisplayName_L1="Resource Data" OutputType="LayoutFieldset" Name="ResourceData">
        <Control Binding="Identifier" />
    </Control>
</Form>
And with the following form for the workflow's content about record data:
<Form Identifier="Workflow_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control Binding="LastName" />
    <Control Binding="FirstName" />
    <Control Binding="BirthDate" />
    <Control Binding="ContractStartDate"/>
    <Control Binding="ContractEndDate" />
    <Control Binding="Title" />
    <Control Binding="UserType" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
</Form>
And with the following form for the workflow's summary on record data:
<Form Identifier="Summary_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Record Data" OutputType="LayoutFieldset" Name="RecordData">
        <Control Binding="LastName" />
        <Control Binding="FirstName" />
        <Control Binding="ContractStartDate"/>
        <Control Binding="ContractEndDate" />
        <Control Binding="UserType" />
    </Control>
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - New User from HR](/images/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreaterecordentityform/formexample_workflowcreaterecordentityform_v603.webp)

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution.

## Properties

| Property                            | Description                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Child Element: MainControl          | Set of fields to collect data about the main resource.                                        |
| Child Element: RecordControl        | Set of fields to collect data about the resource's record.                                    |
| Child Element: MainSummaryControl   | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.   |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |
