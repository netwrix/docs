---
title: "Customize Forms"
description: "Customize Forms"
sidebar_position: 50
---

# Customize Forms

This guide shows how to define a custom way to display the input fields to be filled in a given workflow.

See the [Form](../../integration-guide/toolkit/xml-configuration/user-interface/form) topic for additional information.

## Create a View Template for Entities Using Scaffoldings

Two scaffoldings generate the view, the display table and the rights to access the entity's resources.

- [View Template](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/viewtemplate):
Creates the display table, the default view and access rights to the entity.
- [View Template Adaptable](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/viewtemplateadaptable):
Creates the entity view (designElement = ResourceTable), the report and the rights for a given profile.

These scaffoldings are not enough to access resources. You must add a menu item to define the navigation in the view in the user interface.

## Create an Entity View

To create the entity view, you must manipulate a [Form](../../integration-guide/toolkit/xml-configuration/user-interface/form).

The view form doesn't give access to the view in the interface or the rights to access the interface.

The following elements must be in place:

- [Create Menu Items](../../integration-guide/ui/create-menu-items)
- [View Access Control Rules](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules)

To create the view, you can manipulate one or more forms. The example below shows how to create a view from several different forms. This will allow you to reuse some forms in workflows.

```text
    <Form Identifier="View_Referentiel_Guest_PersonnalData_Base" EntityType="Referentiel_Guest">        <Control DisplayName_L1="Perosnnal Data" OutputType="LayoutFieldset">            <Control DisplayName_L1="Complete Name" OutputType="LayoutRowset">                <Control Binding="LastName" IsRequired="true"/>                <Control Binding="FirstName" IsRequired="true"/>            </Control>            <Control Binding="Mail" ColumnSize="8" IsRequired="true"/>            <Control Binding="PhoneNumber" ColumnSize="8" />        </Control>    </Form>    <Form Identifier="View_Referentiel_Guest_AdditionalData_Base" EntityType="Referentiel_Guest">        <Control DisplayName_L1="Additional information" OutputType="LayoutFieldset">            <Control Binding="Contact" />            <Control Binding="StartDate" />            <Control Binding="EndDate" />        </Control>    </Form>    <Form Identifier="View_Referentiel_Guest_Base" EntityType="Referentiel_Guest" FormType="ResourceViewEntity" Menu="View_Referentiel_Guest"
        IsDefaultViewForm="true">        <Control OutputType="TransformImport" EmbeddedForm="View_Referentiel_Guest_PersonnalData_Base" />        <Control OutputType="TransformImport" EmbeddedForm="View_Referentiel_Guest_AdditionalData_Base" />    </Form>
```

It is also possible to create only one form that contains all the information:

```text
  <Form Identifier="View_Directory_Guest" EntityType="Directory_Guest" FormType="ResourceViewEntity" Menu="View_Directory_Guest" IsDefaultViewForm="true">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset">      <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">        <Control Binding="LastName" />        <Control Binding="FirstName" />      </Control>      <Control Binding="Mail" ColumnSize="8" />      <Control Binding="PhoneNumber" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Additional Data" DisplayName_L2="Informations complï¿½mentaires" OutputType="LayoutFieldset">      <Control Binding="Contact" />      <Control Binding="Company" />      <Control Binding="StartDate" />      <Control Binding="EndDate" />      <Control Binding="Comments" />    </Control>  </Form>
```

### Create an Entity View Using Records

Some entities may have entity records. To view the entity in question with all the records attached to it, it is necessary to fill in forms that will load the record data as well as forms for the parent entity.

The view form doesn't give access to the view in the interface or the rights to access it.

The following elements must be in place:

- [Create Menu Items](../../integration-guide/ui/create-menu-items)
- [View Access Control Rules](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules)

In the example below, the view form will display all records. To change the filter on the record display, you must change the [Form](../../integration-guide/toolkit/xml-configuration/user-interface/form).

```text
    <Form Identifier="Referentiel_UserRecord_View" EntityType="Referentiel_UserRecord">        <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">            <Control Binding="LastName" IsReadOnly="true"/>            <Control Binding="FirstName" IsReadOnly="true"/>        </Control>        <Control DisplayName_L1="Country" OutputType="LayoutFieldset">            <Control Binding="Country" IsReadOnly="true"/>        </Control>        <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">            <Control Binding="Supervisor" IsReadOnly="true" />            <Control Binding="Category" IsReadOnly="true"/>            <Control Binding="ContractStartDate" IsReadOnly="true"/>            <Control Binding="ContractEndDate" IsReadOnly="true"/>        </Control>    </Form>    <Form Identifier="Referentiel_UserRecord_ViewPosition" EntityType="Referentiel_UserRecord">        <Control DisplayName_L1="Poste" OutputType="LayoutFieldset">            <Control Binding="Site" />            <Control Binding="Service" />            <Control Binding="StartDate" />            <Control Binding="EndDate" />        </Control>    </Form>    <Form Identifier="Referentiel_User_ViewManagement" EntityType="Referentiel_User">        <Control DisplayName_L1="Management" OutputType="LayoutFieldset">            <Control Binding="Guests" />            <Control Binding="ManagedPeople" />        </Control>    </Form>    <Form Identifier="Referentiel_User_View" EntityType="Referentiel_User" FormType="ResourceViewRecordEntity"
      Menu="Menu_Referentiel_User" RecordProperty="Referentiel_User:Records" IsDefaultViewForm="true"
      RecordStartProperty="Referentiel_UserRecord:StartDate" RecordEndProperty="Referentiel_UserRecord:EndDate" RecordFilter="All" >        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_User_ViewManagement" />        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_UserRecord_View" />        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_UserRecord_ViewPosition" />    </Form>
```

The record filter not only changes the display options of the record, but also changes the display of the rights associated with this record.

