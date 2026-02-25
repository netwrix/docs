---
title: "WorkflowEditEntityForm"
description: "Displays a form to update or delete an existing resource, without a record."
sidebar_position: 6
---

Displays a form to update or delete an existing resource, without a record.


## Examples
The following example is a form to request a computer.

```xml
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
![Form Example - Computer Request](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/FormExample_WorkflowEditEntityForm_V603.webp)

The content of `SummaryControl` is visible after the workflow's execution:
![Formexample Workfloweditentityform V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_v603.webp)


## Properties

|Property|Details|
|---|---|


## Child Element: MainControl
Set of fields to collect data about the main resource.


|Property|Details|
|---|---|


## Child Element: SummaryControl
Set of fields to sum up the collected data after the workflow's execution.


|Property|Details|
|---|---|

