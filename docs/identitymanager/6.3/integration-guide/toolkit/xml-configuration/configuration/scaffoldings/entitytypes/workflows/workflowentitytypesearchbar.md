---
title: "WorkflowEntityTypeSearchBar"
description: "Creates the search bar of the workflow entity of the starting entity."
sidebar_position: 9
---

Creates the search bar of the workflow entity of the starting entity.

:::warning
The starting entity must have a search bar and create the workflow entity type to be able to launch this scaffolding.
:::


## Examples


```xml
  <WorkflowEntityTypeSearchBar EntityType="Directory_User"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<SearchBar EntityType="Workflow_Directory_User" SearchBarDesignElement="Inline">
  <Criterion Binding1="Directory_User.Identifier" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Identifier" PlaceHolderText_L2="Identifier" />
  <Criterion Binding1="Directory_User.PhoneticFirstLastName" Binding2="Directory_User.PhoneticLastFirstName" Binding3="Directory_User.MainRecord.LastName" ColumnSize="2" InputType="Auto" Operator="FlexibleStartWith" PlaceHolderText_L1="Name" PlaceHolderText_L2="Nom" />
  <Criterion Binding1="Directory_User.MainRecord.Organization" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Department" PlaceHolderText_L2="Département" />
  <Criterion Binding1="Directory_User.PresenceState" ColumnSize="2" DefaultValue="-101;-102" InputType="ComboboxMultiSelection" Operator="Equal" />
  <Criterion Binding1="Directory_User.MainRecord.Site" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Site" PlaceHolderText_L2="Site" />
  <Criterion Binding1="Directory_User.MainRecord.Subsidiary" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Subsidiary" PlaceHolderText_L2="Filiale" />
  <Criterion Binding1="Directory_User.MainRecord.Title" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Title" PlaceHolderText_L2="Fonction" />
  <Criterion Binding1="Directory_User.MainRecord.UserType" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="User Type" PlaceHolderText_L2="Type de collaborateur" />
</SearchBar>

```