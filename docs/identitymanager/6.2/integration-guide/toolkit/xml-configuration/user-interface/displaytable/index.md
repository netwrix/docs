---
title: "Display Table"
description: "Display Table"
sidebar_position: 40
---

# Display Table

A table displays a collections of entity type data grouped into rows.

See the [Customize Display Tables](/docs/identitymanager/6.2/integration-guide/ui/custom-display-table/index.md)topic for
additional information.

## Examples

Below there are a few examples of display tables.

**DisplayTableDesignElement table**

The following example displays sites as a table.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="Directory_Site" EntityType="Directory_Site" DisplayTableDesignElement="table" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="Country" />    <Column DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="State" />    <Column DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="8" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to Table](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_table_v602.webp)

**DisplayTableDesignElement list**

The following example displays users as a list.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="Directory_User" EntityType="Directory_User" DisplayTableDesignElement="list" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" ColumnSize="6" IsDisplayInSummaryView="true" SortBinding="MainRecord.LastName" Tile="Directory_User_Tile1" />    <Column ColumnSize="3" IsDisplayInSummaryView="true" Tile="Directory_User_Tile2" SortBinding="MainRecord.FirstName" />    <Column ColumnSize="3" Tile="Directory_User_Tile3" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to List](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_list_v602.webp)

:::tip
Remember, for resources to be displayed as a list, the display table must also be configured with
tiles.
:::


**DisplayTableDesignElement resourcetable**

The following example displays AD entries as a table, with an "Owner/Type" column.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="AD_Entry" EntityType="AD_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="5" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to ResourceTable](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_resourcetable_v602.webp)

## Properties

Here is a list of properties of display tables.

| Property                                 | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayTableDesignElement required       | Enumeration | Design of the display table. -1 - table: resources are displayed in a table. -2 - list: resources are displayed in a list. -3 - resourcetable: resources are displayed in a table containing an "Owner/Type" column. -4 - adaptable: resources are displayed in a table with an "Owner/Type" column only if the entity type is the target of a resource type, otherwise the table is without said column. |
| EntityType required                      | Int64       | Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                        |
| HomonymEntityLink optional               | Int64       | Defines the homonym display table.                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                      | String      | Unique identifier of the table.                                                                                                                                                                                                                                                                                                                                                                           |
| IsEntityTypeDefault default value: false | Boolean     | Default display table used in the application.                                                                                                                                                                                                                                                                                                                                                            |
| LinesPerPage default value: 15           | Int32       | Defines the maximum lines per page.                                                                                                                                                                                                                                                                                                                                                                       |
| ParentProperty optional                  | Int64       | Property to navigate to the parent level when the table displays a tree of values (for example Organization.ParentOrganization).                                                                                                                                                                                                                                                                          |

## Child Element: Column

Contains all the display table columns.

### Example

Here is an example of a column child element.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userAccountControl" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />    <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
```

### Properties

Here is a list of properties of column child element.

| Property                                     | Type                    | Description                                                                                                                                                              |
| -------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AddedMinutes optional                        | Int32                   | Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property.          |
| CanBeFiltered default value: false           | Boolean                 | Can filter the column data.                                                                                                                                              |
| ColumnSize default value: 1                  | Int32                   | Defines the column size.                                                                                                                                                 |
| DefaultSortPriority optional                 | Int32                   | Defines the default sort priority.                                                                                                                                       |
| DisplayBinding optional                      | Int64                   | Represents the linked binding path to a scalar property.                                                                                                                 |
| DisplayName_L1 optional                      | String                  | Display name of the column in language 1 (up to 16).                                                                                                                     |
| IsDisplayInDropDownList default value: false | Boolean                 | Is a drop down list column.                                                                                                                                              |
| IsDisplayInSummaryView default value: false  | Boolean                 | Is a summary view column.                                                                                                                                                |
| IsResizable default value: false             | Boolean                 | Is resizable column.                                                                                                                                                     |
| IsSortable default value: false              | Boolean                 | Is sortable column.                                                                                                                                                      |
| OptimizedDisplayBinding optional             | Int64                   | Optimized Binding allows DisplayTables to be faster displayed. If it is filled in, it takes priority over the DisplayBinding located in the DisplayTableColumn.          |
| OptimizedSortBinding optional                | Int64                   | An optimized sort binding allows display tables to be faster displayed. If it is filled in, it takes priority over the sort binding located in the display table column. |
| SearchOperator default value: 0              | QueryComparisonOperator | Defines the search operator (Equal, NotEqual, Contain, StartWith).                                                                                                       |
| SortBinding optional                         | Int64                   | Represents the sort binding path to a scalar property.                                                                                                                   |
| Tile optional                                | Int64                   | Identifier of the tile.                                                                                                                                                  |
