---
title: "WorkflowCreateEntityForm"
description: "Displays a form to create a new resource, without a record."
sidebar_position: 3
---

Displays a form to create a new resource, without a record.


## Examples
The following example is a form to create a new site.

```xml
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Site_Create" EntityType="Workflow_Directory_Site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self" Activity="Directory_Site_Create:Request" FormTitle_L1="New Site">
    <MainControl OutputType="TransformImport" EmbeddedForm="Base_Directory_Site" />
    <SummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_Site"/>
</WorkflowCreateEntityForm>

With the following form for the workflow's content:
<Form Identifier="Base_Directory_Site" EntityType="Directory_Site">
    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">
        <Control Binding="Name" />
        <Control Binding="StreetNumber" />
        <Control Binding="StreetName" />
        <Control Binding="StreetType" />
        <Control Binding="Floor" />
        <Control Binding="PostalCode" />
        <Control Binding="City" />
        <Control Binding="Region" />
        <Control Binding="Region.Country" IsReadOnly="true" />
        <Control Binding="Photo" OutputType="Image" />
    </Control>

    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">
        <Control Binding="Identifier" />
        <Control Binding="DisplayName" />
        <Control Binding="TimeZone" />
    </Control>
</Form>

And with the following form for the workflow's summary:
<Form Identifier="Summary_Directory_Site" EntityType="Directory_Site">
    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">
        <Control Binding="Name" />
        <Control Binding="StreetNumber" />
        <Control Binding="StreetName" />
        <Control Binding="StreetType" />
    </Control>

    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">
        <Control Binding="Identifier" />
        <Control Binding="DisplayName" />
    </Control>
</Form>
```

The content of `MainControl` is visible during the workflow's execution:
![Form Example - Site Creation]

The content of `SummaryControl` is visible after the workflow's execution:
![Formexample Workflowcreateentityform V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateentityform/formexample_workflowcreateentityform_v603.webp)


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

