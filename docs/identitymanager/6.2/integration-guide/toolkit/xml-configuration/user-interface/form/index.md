---
title: "Form"
description: "Form"
sidebar_position: 50
---

# Form

A form contains a set of input fields (called controls) to be filled by a user, in a structured way.
A form must have a form type to be displayed and used in the UI. A form without a type can be called
in another form.

## Examples

The following example shows a form called `Directory_UserRecord_View` that involves resources from
the entity type `Directory_UserRecord` to collect personal data and contract information via some
structured fields to fill.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">        <Control Binding="EmployeeId" />        <Control Binding="ContractStartDate" />        <Control Binding="ContractEndDate" />        ...
    </Control>
</Form>
```

### Display settings

The display settings allow you to adjust the display.

**Hide the "Access Permissions" tab**

When `HideRoles` is set to `true`, then the **Access Permissions** tab is not accessible.

![Access Permissions](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_hideroles_v603.webp)

**Adjust the request type**

When `WorkflowRequestType` is set to `Self`, then the finalization step looks like:

![WorkflowRequestType = Self](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypeself_v603.webp)

When `WorkflowRequestType` is set to `Helpdesk`, then the finalization step looks like:

![WorkflowRequestType = Helpdesk](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypehelpdesk_v603.webp)

**Display records in a table**

![RecordTable Example](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_recordtable_v603.webp)

**InputType display**

The InputType represents the type of research property, attribute which supports only a predefined
set of values listed below:

![inputtypeattachment](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypeattachment.webp)

- Attachment — represents a control for adding an attachment
- Auto — takes by default the type of the EntityType property

    ![inputtypecheckbox](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecheckbox.webp)

- Checkbox — a boolean control which supports one of the two states

    ![inputtypecombobox](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecombobox.webp)

- Combobox — a dropdown which supports single selection

    ![inputtypecomboboxmultiselection](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecomboboxmultiselection.webp)

- ComboboxMultiSelection — a dropdown which supports multiple selection

    ![inputtypedate](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypedate.webp)

- Date — Date control
- Hidden — Hides the input

    ![inputtypeimage](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypeimage.webp)

- Image - Control to show / upload image
- Inherited —Control to get the InputType of the associated display entity property (when nothing is
  specified in a Control of a Form, it's the default value).

    ![inputtypepicker](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypepicker.webp)

- Picker — Opens a grid to select a resource

    ![inputtypetext](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypetext.webp)

- Text — Displays a single-line of text

    ![inputtypetextarea](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypetextarea.webp)

- TextArea — A textbox which supports carriage return character.

## Properties

| Property                                     | Type                | Description                                                                                                                                                                                                                            |
| -------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity optional                            | Int64               | Defines the linked activity template.                                                                                                                                                                                                  |
| ActivityState optional                       | Enumeration         | Defines the linked activity state template.                                                                                                                                                                                            |
| AddRowLabel_L1 optional                      | String              | Defines the "add row" button label when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                                  |
| EntityType required                          | Int64               | Represents the linked entity type.                                                                                                                                                                                                     |
| FormTitle_L1 optional                        | String              | Title of the form in language 1 (up to 16).                                                                                                                                                                                            |
| FormType default value: Auto                 | FormType            | Represents the linked form type.                                                                                                                                                                                                       |
| HideRecordAddButton default value: false     | Boolean             | True to hide the button used to add a new record.                                                                                                                                                                                      |
| HideRecordRemoveButton default value: false  | Boolean             | True to hide the button used to remove an existing record.                                                                                                                                                                             |
| HideRoles default value: false               | Boolean             | True to hide the **Access Permissions** tab.                                                                                                                                                                                           |
| Identifier required                          | String              | Unique identifier of the form.                                                                                                                                                                                                         |
| IsDefaultSelfForm default value: false       | Boolean             | Entity type default self form.                                                                                                                                                                                                         |
| IsDefaultViewForm default value: false       | Boolean             | Entity type default view form.                                                                                                                                                                                                         |
| IsDeleteForm default value: false            | Boolean             | Is a delete form.                                                                                                                                                                                                                      |
| MainProperty optional                        | Int64               | Represents the form main property.                                                                                                                                                                                                     |
| MainPropertyLabel_L1 optional                | String              | Defines the main property label text.                                                                                                                                                                                                  |
| Menu optional                                | Int64               | Defines the linked menu item.                                                                                                                                                                                                          |
| RecordEndProperty optional                   | Int64               | Defines the workflow end date property. If not specified, the property EndDate of the record entity type is considered as RecordEndProperty.                                                                                           |
| RecordFilter default value: CurrentAndFuture | RecordFilter        | Defines the record display option. 0 - Current: shows current positions. 1 - CurrentAndFuture: shows current and future positions. Recommended. 2 - All: shows past, present and future positions. Not recommended for clarity issues. |
| RecordProperty optional                      | Int64               | Defines the workflow record property.                                                                                                                                                                                                  |
| RecordSortProperty optional                  | Int64               | Defines the workflow sort property.                                                                                                                                                                                                    |
| RecordStartProperty optional                 | Int64               | Defines the workflow start date property. If not specified, the property StartDate of the record entity type is considered as RecordStartProperty.                                                                                     |
| RecordTable optional                         | Int64               | Identifier of the display table to be used to display resources' records in a workflow.                                                                                                                                                |
| RemoveRowLabel_L1 optional                   | String              | Defines the "remove row" button label when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                               |
| TableTitle_L1 optional                       | String              | Defines the table title when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                                             |
| WorkflowRequestType default value: 0         | WorkflowRequestType | Type of the request of the related workflow. 0 - None. 1 - Self. 2 - Helpdesk. 3 - Administration.                                                                                                                                     |

## Child Element: Control

A form control is an input field to be filled by a user. Controls can be inserted in other controls
in order to display the form fields in a structured way.

### Examples

The following example shows a form called `Directory_UserRecord_View` that collects first personal
data via some controls, and then calls another form `Workflow_Directory_User_AddRecord_Base` to
collect record information. In this example is a tree control which defines the relationships
between a worker and their managers (N+1 to N+3). The aim is to display in the form (in the UI) the
organization chart made of the worker and their managers.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddRecord_Base" />    </Control>
    </Form>
```

### Properties

| Property                            | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedMinutes optional               | Int32       | Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property.                                                                                                                                                                                                                                                                                                      |
| Binding optional                    | Int64       | Identifier of the binding property. **NOTE:** When displaying an organization chart, this binding is meant to represent the first manager level (N+1). In this case, it must be a mono-valued navigation.                                                                                                                                                                                                                                                            |
| Binding2 optional                   | Int64       | Identifier of the binding property used to represent the second manager level (N+2) in the organization chart. It must be a mono-valued navigation. Cannot be used when Binding is not defined.                                                                                                                                                                                                                                                                      |
| Binding3 optional                   | Int64       | Identifier of the binding property used to represent the third manager level (N+3) in the organization chart. It must be a mono-valued navigation. Cannot be used when Binding2 is not defined.                                                                                                                                                                                                                                                                      |
| ColumnSize optional                 | Int32       | Defines the control column size.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| DefaultValueBinding optional        | Int64       | Automatically sets the value in the control depending on this binding and the selected value in another corresponding picker. It's only available for controls with picker. For example: `<Control Binding="Location" DefaultValueBinding="Organization.Manager.MainLocation" />` After a selection of an organization in another picker in the form, the field location will be automatically set by the main location of the manager of the selected organization. |
| DisplayName_L1 optional             | String      | Display name of the control in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                |
| DisplayTable optional               | Int64       | Identifier of the table.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| EmbeddedForm optional               | Int64       | Identifier of the form to insert in the control. With this method, one form can be imported to several forms. _Remember,_ it can be used only with `OutputType` set to `TransformImport`.                                                                                                                                                                                                                                                                            |
| EntityType optional                 | Int64       | Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ExtensionIdentifier optional        | String      | This property is used to extend the Identity Manager UI.                                                                                                                                                                                                                                                                                                                                                                                                             |
| FilterBinding1 optional             | Int64       | Coupled with LinkedBinding1, it allows filtering on a list of items. FilterBinding1 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                                |
| FilterBinding2 optional             | Int64       | Coupled with LinkedBinding2, it allows filtering on a list of items. FilterBinding2 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker`InputType.                                                                                                                                                                                                                                                 |
| HomonymEntityLink optional          | Int64       | Defines the homonym form control.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| InputType default value: Inherited  | Enumeration | Input type of the control.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| IsReadOnly optional                 | Boolean     | Is a read only form control.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| IsRequired optional                 | Boolean     | Is a required form control.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| LinkedBinding1 optional             | Int64       | Coupled with FilterBinding1, it allows filtering on a list of items. LinkedBinding1 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                         |
| LinkedBinding2 optional             | Int64       | Coupled with FilterBinding2, it allows filtering a list of items. LinkedBinding2 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                            |
| Name optional                       | String      | Identifies the control inside the Form. This is used for translation files when a control cannot be identified by its binding such as for FieldSet.                                                                                                                                                                                                                                                                                                                  |
| NavigationBinding optional          | Int64       | Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection. If not defined, the one defined in DisplayEntityProperty is used.                                                                                                                                                                                                                                                                        |
| OutputType default value: Inherited | Enumeration | Output type of the control.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ParentControl optional              | Int64       | Defines the parent form control.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| PlaceHolderText_L1 optional         | String      | Defines the place holder text.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tile optional                       | Int64       | Identifier of the tile.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
