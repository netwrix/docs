---
title: "WorkflowEntityTypeDisplayTable"
description: "WorkflowEntityTypeDisplayTable"
sidebar_position: 80
---

# WorkflowEntityTypeDisplayTable

Creates the display table of the workflow entity of the starting entity.

The starting entity must have a Display table and create the workflow entity type to be able to
launch this scaffolding.

## Examples

```

**<WorkflowEntityTypeDisplayTable EntityType="Directory_User"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<Tile Identifier="Workflow_Directory_User_Tile1" DisplayName_L1="User: first/last name" EntityType="Workflow_Directory_User" TileDesignElement="picture-text">  <Item Binding="Directory_User.MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />  <Item Binding="Directory_User.MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />  <Item Binding="Directory_User.MainRecord.Title.DisplayName" LineNumber="3" />  <Item Binding="Directory_User.Id" LineNumber="5" />  <Item Binding="Directory_User.PhotoTag" LineNumber="6" /></Tile><Tile Identifier="Workflow_Directory_User_Tile2" DisplayName_L1="User: dep/loc" EntityType="Workflow_Directory_User" TileDesignElement="inline data-icon">  <Item Binding="Directory_User.MainRecord.Organization.DisplayName" LineNumber="1" />  <Item Binding="Directory_User.MainRecord.Site.DisplayName" LineNumber="2" /></Tile><DisplayTable Identifier="Workflow_Directory_User" DisplayTableDesignElement="list" EntityType="Workflow_Directory_User" IsEntityTypeDefault="true">  <Column ColumnSize="6" DefaultSortPriority="1" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.LastName" Tile="Workflow_Directory_User_Tile1" />  <Column ColumnSize="3" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.FirstName" Tile="Workflow_Directory_User_Tile2" /></DisplayTable>

```
