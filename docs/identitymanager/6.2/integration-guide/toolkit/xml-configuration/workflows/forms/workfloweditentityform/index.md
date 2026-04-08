---
title: "WorkflowEditEntityForm"
description: "WorkflowEditEntityForm"
sidebar_position: 60
---

# WorkflowEditEntityForm

Displays a form to update or delete an existing resource, without a record.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ComputerRequest" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ComputerRequest:Request" FormTitle_L1="Computer Request" RecordProperty="Directory_User:PC_Requested" HideRoles="true">
    <MainControl OutputType="TransformImport" EmbeddedForm="PC_Request" />
    <SummaryControl OutputType="TransformImport" EmbeddedForm="PC_Request" />
</WorkflowEditEntityForm>
With the following form for the workflow's content and summary:
<Form Identifier="PC_Request" EntityType="Directory_User">
    <Control Binding="PC_Modele" DisplayName_L1="Model if already known" />
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - Computer Request](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_v603.webp)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Computer Request](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_summary_v603.webp)

## Properties

| Property                      | Description                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| Child Element: MainControl    | Set of fields to collect data about the main resource.                     |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |
