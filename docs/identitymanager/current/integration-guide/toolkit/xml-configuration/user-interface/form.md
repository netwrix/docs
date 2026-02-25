---
title: "Form"
description: ""
sidebar_position: 5
---

A form contains a set of input fields (called [controls](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/user-interface/form)) to be filled by a user, in a structured way. A form must have a form type to be displayed and used in the UI. A form without a type can be called in another form.


## Examples
The following example shows a form called `Directory_UserRecord_View` that involves resources from the entity type `Directory_UserRecord` to collect personal data and contract information via some structured fields to fill.

```xml
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">
        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">
            <Control Binding="LastName" />
            <Control Binding="FirstName" />
        </Control>
        <Control Binding="Mail" ColumnSize="8" />
    </Control>

    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">
        <Control Binding="EmployeeId" />
        <Control Binding="ContractStartDate" />
        <Control Binding="ContractEndDate" />
        ...
    </Control>

</Form>
```

### Display settings

#### Hide the "Access Permissions" tab

When `HideRoles` is set to `true`, then the **Access Permissions** tab is not accessible.

![Access Permissions](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/Form_hideRoles_V603.webp)

#### Adjust the request type

When `WorkflowRequestType` is set to `Self`, then the finalization step looks like:
![Form Hideroles V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_hideroles_v603.webp)

When `WorkflowRequestType` is set to `Helpdesk`, then the finalization step looks like:
![WorkflowRequestType = Helpdesk](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/Form_requestTypeHelpdesk_V603.webp)

#### Display records in a table

![Form Requesttypehelpdesk V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypehelpdesk_v603.webp)


## Properties

|Property|Details|
|---|---|
| Activity optional | **Type:** Int64 **Description:** Defines the linked activity template. |
| ActivityState optional | **Type:** Enumeration **Description:** Defines the linked activity state template. |
| AddRowLabel_L1 optional | **Type:** String **Description:** Defines the "add row" button label when using WorkflowUpdateSeveralRecordsEntityForm. |
| EntityType required | **Type:** Int64 **Description:** Represents the linked entity type. |
| FormTitle_L1 optional | **Type:** String **Description:** Title of the form in language 1 (up to 16). |
| FormType <span class="optionalAttribute">default value: Auto</span> | **Type:** FormType **Description:** Represents the linked form type. |
| HideRecordAddButton <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to hide the button used to add a new record. |
| HideRecordRemoveButton <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to hide the button used to remove an existing record. |
| HideRoles <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to hide the **Access Permissions** tab. |
| Identifier required | **Type:** String **Description:** Unique identifier of the form. |
| IsDefaultSelfForm <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Entity type default self form. |
| IsDefaultViewForm <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Entity type default view form. |
| IsDeleteForm <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Is a delete form. |
| MainProperty optional | **Type:** Int64 **Description:** Represents the form main property. |
| MainPropertyLabel_L1 optional | **Type:** String **Description:** Defines the main property label text. |
| Menu optional | **Type:** Int64 **Description:** Defines the linked menu item. |
| RecordEndProperty optional | **Type:** Int64 **Description:** Defines the workflow end date property. If not specified, the property 'EndDate' of the record entity type is considered as RecordEndProperty. |
| RecordFilter <span class="optionalAttribute">default value: CurrentAndFuture</span> | **Type:** RecordFilter **Description:** Defines the record display option. `0` - Current: shows current positions. `1` - CurrentAndFuture: shows current and future positions. Recommended. `2` - All: shows past, present and future positions. Not recommended for clarity issues. |
| RecordProperty optional | **Type:** Int64 **Description:** Defines the workflow record property. |
| RecordSortProperty optional | **Type:** Int64 **Description:** Defines the workflow sort property. |
| RecordStartProperty optional | **Type:** Int64 **Description:** Defines the workflow start date property. If not specified, the property 'StartDate' of the record entity type is considered as RecordStartProperty. |
| RecordTable optional | **Type:** Int64 **Description:** Identifier of the display table to be used to display resources' records in a workflow. |
| RemoveRowLabel_L1 optional | **Type:** String **Description:** Defines the "remove row" button label when using WorkflowUpdateSeveralRecordsEntityForm. |
| TableTitle_L1 optional | **Type:** String **Description:** Defines the table title when using WorkflowUpdateSeveralRecordsEntityForm. |
| WorkflowRequestType <span class="optionalAttribute">default value: 0</span> | **Type:** WorkflowRequestType **Description:** Type of the request of the related workflow. `0` - None. `1` - Self. `2` - Helpdesk. `3` - Administration. |

## Child Element: Control
A form control is an input field to be filled by a user. Controls can be inserted in other controls in order to display the form fields in a structured way.


### Examples
The following example shows a form called `Directory_UserRecord_View` that collects first personal data via some controls, and then calls another form `Workflow_Directory_User_AddRecord_Base` to collect record information.
In this example is a tree control which defines the relationships between a worker and their managers (N+1 to N+3). The aim is to display in the form (in the UI) the organization chart made of the worker and their managers.

```xml
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">
        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">
            <Control Binding="LastName" />
            <Control Binding="FirstName" />
        </Control>
        <Control Binding="Mail" ColumnSize="8" />
    </Control>

    <Control DisplayName_L1="Contract" OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddRecord_Base" />
    </Control>
    <!--<Control DisplayName_L1="OrgChart" OutputType="Tree"
             Binding="Manager"
             Binding2="Manager.MainRecord.Manager"
             Binding3="Manager.MainRecord.Manager.MainRecord.Manager"
    />-->
</Form>
```


### Properties

|Property|Details|
|---|---|
| AddedMinutes optional | **Type:** Int32 **Description:** Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property. |
| Binding optional | **Type:** Int64 **Description:** Identifier of the binding property. **Note:** when displaying an organization chart, this binding is meant to represent the first manager level (N+1). In this case, it must be a mono-valued navigation. |
| Binding2 optional | **Type:** Int64 **Description:** Identifier of the binding property used to represent the second manager level (N+2) in the organization chart. It must be a mono-valued navigation. Cannot be used when `Binding` is not defined. |
| Binding3 optional | **Type:** Int64 **Description:** Identifier of the binding property used to represent the third manager level (N+3) in the organization chart. It must be a mono-valued navigation. Cannot be used when `Binding2` is not defined. |
| ColumnSize optional | **Type:** Int32 **Description:** Defines the control column size. |
| DefaultValueBinding optional | **Type:** Int64 **Description:** Automatically sets the value in the control depending on this binding and the selected value in another corresponding picker. It's only available for controls with picker. _For example: `` After a selection of an organization in another picker in the form, the field location will be automatically set by the main location of the manager of the selected organization._ |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the control in language 1 (up to 16). |
| DisplayTable optional | **Type:** Int64 **Description:** Identifier of the table. |
| EmbeddedForm optional | **Type:** Int64 **Description:** Identifier of the form to insert in the control. With this method, one form can be imported to several forms. **Warning:** can be used only with `OutputType` set to `TransformImport`. |
| EntityType optional | **Type:** Int64 **Description:** Represents the linked entity type. |
| ExtensionIdentifier optional | **Type:** String **Description:** This property is used to extend the Identity Manager UI. |
| FilterBinding1 optional | **Type:** Int64 **Description:** Coupled with LinkedBinding1, it allows filtering on a list of items. FilterBinding1 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker` InputType. |
| FilterBinding2 optional | **Type:** Int64 **Description:** Coupled with LinkedBinding2, it allows filtering on a list of items. FilterBinding2 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker` InputType. |
| HomonymEntityLink optional | **Type:** Int64 **Description:** Defines the homonym form control. |
| InputType <span class="optionalAttribute">default value: Inherited</span> | **Type:** Enumeration **Description:** Input type of the control. |
| IsReadOnly optional | **Type:** Boolean **Description:** Is a readonly form control. |
| IsRequired optional | **Type:** Boolean **Description:** Is a required form control. |
| LinkedBinding1 optional | **Type:** Int64 **Description:** Coupled with FilterBinding1, it allows filtering on a list of items. LinkedBinding1 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType. |
| LinkedBinding2 optional | **Type:** Int64 **Description:** Coupled with FilterBinding2, it allows filtering a list of items. LinkedBinding2 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType. |
| Name optional | **Type:** String **Description:** Identifies the control inside the Form. This is used for translation files when a control cannot be identified by its binding such as for FieldSet. |
| NavigationBinding optional | **Type:** Int64 **Description:** Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection. If not defined, the one defined in DisplayEntityProperty is used. |
| OutputType <span class="optionalAttribute">default value: Inherited</span> | **Type:** Enumeration **Description:** Output type of the control. |
| ParentControl optional | **Type:** Int64 **Description:** Defines the parent form control. |
| PlaceHolderText_L1 optional | **Type:** String **Description:** Defines the place holder text. |
| Tile optional | **Type:** Int64 **Description:** Identifier of the tile. |
