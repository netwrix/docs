---
title: "Display Entity Type"
description: "Display Entity Type"
sidebar_position: 20
---

# Display Entity Type

The `<DisplayEntityType>` element sets information about how an entity type is to be displayed by
the UI.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <DisplayEntityType PluralDisplayName_L1="Companies" IconCode="Suitcase" Identifier="Directory_Company">        <Property DisplayOrder="-1" IsRequired="true" Identifier="Identifier" />        <Property IsRequired="true" Identifier="DisplayName" />        <Property OutputType="BasicCollection" Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" />        <Property OutputType="BasicCollection" Identifier="Guests" />    </DisplayEntityType>
```

### Zoom on Priority

The Priority property controls the order in which entity types are displayed in the entity type
selection dropdown of the following administration screens:

- Role Review
- Provisioning Review
- Role Reconciliation
- Resource Reconciliation
- My Tasks (also known as Workflow Management)
- Workflow Overview
- Access Rules

By default, the entity type with the highest priority is selected first. The end user can later
change the selection using the top-left dropdown.

![Change Selection](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displayentitytype/ui_displaypriorities_changeselection_v521beta.webp)

Priorities are integer values, positive or negative. The most important priority is assigned to the
lowest value.

Entity Types with the same priority are sorted by `Identifier`, in the alphabetical order, where
relevant.

Entity Types for which a priority isn't set by a `<DisplayEntityType>` configuration element are
assigned an equally less important priority than the least important priority set by a
`<DisplayEntityType>` element.

**Example**

This example shows how to define priorities between the main Entity Types of the organizational
model. The highest priority is assigned to `Directory_User` and the lowest priority to
`Directory_Application`. All other entity types are assigned an equally low priority, below
`Directory_Application`. In the dropdown they will be sorted by alphabetical order.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Guest" Priority="1" />  <DisplayEntityType Identifier="Directory_Bot" Priority="2" />  <DisplayEntityType Identifier="Directory_Application" Priority="3" />

```

#### Priorities for workflows

The dropdown in My Tasks (also known as Workflow Management) and Workflow Overview screens is
related to workflows, not to entity types per se.

In Identity Manager, each workflow is associated with a workflow-entity type.

To configure the priority order for elements in the dropdown in these screens, the user should
remember to take the workflow-entity types in the `<DisplayEntityType` elements, not just the
entities themselves.

**Example**

Let's take the following organizational model:

- A Directory_User entity type for employee
- A Directory_Guest entity type for contractors and the like

When workflows are defined to handle resources for these entity types, the following workflow-entity
types are created too:

- Workflow_Directory_User
- Workflow_Directory_Guest

The order in which Directory_User and Directory_Guest appear in the role review dropdown is
configured like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Guest" Priority="1" />

```

But the order in which "Workflow for Directory_User" and "Workflow for Directory_Guest" appear in
the My Tasks screen is configured like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_Workflow_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Workflow_Guest" Priority="1" />

```

## Properties

| Property                            | Type    | Description                                                                                                                                                                                                                                         |
| ----------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutocompleteBinding optional        | Int64   | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker).                                                                                                                          |
| Color optional                      | String  | Defines the color used when displaying this entity type (it must be a 6 digit hexadecimal value, preceded by a #).                                                                                                                                  |
| D0IsActive default value: false     | Boolean | Is dimension0 active for this entity type (D0IsActive to D3VIsActive following the base32hex convention.                                                                                                                                            |
| HideRoles default value: false      | Boolean | True to skip the **Access Permissions** step (the one containing the roles) in the default forms for this entity type.                                                                                                                              |
| IconCode optional                   | String  | Defines the icode code ("People", "MapPin", "Suitcase"...).                                                                                                                                                                                         |
| IsHierarchical default value: false | Boolean | Is hierarchical entity type.                                                                                                                                                                                                                        |
| MinSearchLength optional            | Int32   | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the AutocompleteBinding must be defined).                                                                               |
| PluralDisplayName_L1 optional       | String  | Display name of the entity type in plural in language 1 (up to 16).                                                                                                                                                                                 |
| Priority default value: 2147483647  | Int32   | Sets the display priority of the Entity Type in the administration screens dropdown and the dashboard. A priority is an integer value, positive or negative. The highest priority is assigned to the lowest number. See the Priority section above. |

## Child Element: Property

Entity referencing the Entity properties (with which it share the same ID) that can be displayed in
the Identity Manager interface.

### Properties

| Property                        | Type        | Description                                                                                                                                                                                                                       |
| ------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedMinutes optional           | Int32       | Add minutes to the date field with this property. Can be overwritten in every form control, display table column or tile item that displays the property.                                                                         |
| AutocompleteBinding optional    | Int64       | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker if the input type of the display property is a picker).                                                  |
| DisplayOrder default value: 0   | Int32       | Defines the property display order.                                                                                                                                                                                               |
| DisplayTable optional           | Int64       | Identifier of the display table.                                                                                                                                                                                                  |
| Format optional                 | String      | Defines a formatting method on the property values (`ParseSince1601Date`, `ToStringUserAccountControl`, `FormatDate` and `ParseBoolean`).                                                                                         |
| Group optional                  | Int64       | Identifier of the display property group, i.e. the fieldset, that the property is part of in the default UI form.                                                                                                                 |
| IconCode optional               | String      | Defines the icon code.                                                                                                                                                                                                            |
| InputType default value: Auto   | Enumeration | Identifier of the input type. See the [Form](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/form/index.md) topic for additional information.                                                                                                                                  |
| IsHidden default value: false   | Boolean     | Property is hidden.                                                                                                                                                                                                               |
| IsReadOnly default value: false | Boolean     | Property is ReadOnly.                                                                                                                                                                                                             |
| IsRequired default value: false | Boolean     | Property is required.                                                                                                                                                                                                             |
| MinSearchLength optional        | Int32       | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the input type of the display property must be a picker and the AutocompleteBinding must be defined). |
| NavigationBinding optional      | Int64       | Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection.                                                                                                       |
| OutputType default value: Auto  | Enumeration | Identifier of the output type.                                                                                                                                                                                                    |
| PlaceHolderText_L1 optional     | String      | Property place holder text.                                                                                                                                                                                                       |
| Tile optional                   | Int64       | Identifier of the tile.                                                                                                                                                                                                           |
| ToolTipText_L1 optional         | String      | Property tool tip text.                                                                                                                                                                                                           |
