---
title: "DisplayTable"
description: ""
sidebar_position: 4
---

A table displays a collections of entity type data grouped into rows.

[Read more about how to customize display tables](/docs/identitymanager/current/integration-guide/ui/how-tos/custom-display-table).


## Examples
### DisplayTableDesignElement

#### table

The following example displays sites as a table.

```xml
<DisplayTable Identifier="Directory_Site" EntityType="Directory_Site" DisplayTableDesignElement="table" IsEntityTypeDefault="true">
    <Column DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="Country" />
    <Column DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="State" />
    <Column DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="8" />
</DisplayTable>
```

![Example - DisplayTableDesignElement Set to Table](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/DisplayTableDesignElement_table_V602.webp)

#### list

The following example displays users as a list.

![DisplayTableDesignElement_table_V602](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/DisplayTableDesignElement_table_V602.webp)

:::note
For resources to be displayed as a list, the display table must also be configured with **tiles**.
:::

#### resourcetable

The following example displays AD entries as a table, with an "Owner/Type" column.

```xml
<DisplayTable Identifier="AD_Entry" EntityType="AD_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="5" />
    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />
</DisplayTable>
```

![Example - DisplayTableDesignElement Set to ResourceTable](/images/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_resourcetable_v602.webp)


## Properties

|Property|Details|
|---|---|
| DisplayTableDesignElement required | **Type:** Enumeration **Description:** Design of the display table. `-1` - **table**: resources are displayed in a table. `-2` - **list**: resources are displayed in a list. `-3` - **resourcetable**: resources are displayed in a table containing an "Owner/Type" column. `-4` - **adaptable**: resources are displayed in a table with an "Owner/Type" column only if the entity type is the target of a resource type, otherwise the table is without said column. |
| EntityType required | **Type:** Int64 **Description:** Represents the linked entity type. |
| HomonymEntityLink optional | **Type:** Int64 **Description:** Defines the homonym display table. |
| Identifier required | **Type:** String **Description:** Unique identifier of the table. |
| IsEntityTypeDefault <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Default display table used in the application. |
| LinesPerPage <span class="optionalAttribute">default value: 15</span> | **Type:** Int32 **Description:** Defines the maximum lines per page. |
| ParentProperty optional | **Type:** Int64 **Description:** Property to navigate to the parent level when the table displays a tree of values (for example `Organization.ParentOrganization`). |

## Child Element: Column
Contains all the display table columns.


### Examples
```xml
    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="userAccountControl" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />
    <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
```


### Properties

|Property|Details|
|---|---|
| AddedMinutes optional | **Type:** Int32 **Description:** Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property. |
| CanBeFiltered <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Can filter the column data. |
| ColumnSize <span class="optionalAttribute">default value: 1</span> | **Type:** Int32 **Description:** Defines the column size. |
| DefaultSortPriority optional | **Type:** Int32 **Description:** Defines the default sort priority. |
| DisplayBinding optional | **Type:** Int64 **Description:** Represents the linked binding path to a scalar property. |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the column in language 1 (up to 16). |
| IsDisplayInDropDownList <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Is a drop down list column. |
| IsDisplayInSummaryView <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Is a summary view column. |
| IsResizable <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Is resizable column. |
| IsSortable <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Is sortable column. |
| OptimizedDisplayBinding optional | **Type:** Int64 **Description:** Optimized Binding allows DisplayTables to be faster displayed. If it is filled in, it takes priority over the DisplayBinding located in the DisplayTableColumn. |
| OptimizedSortBinding optional | **Type:** Int64 **Description:** An optimized sort binding allows display tables to be faster displayed. If it is filled in, it takes priority over the sort binding located in the display table column. |
| SearchOperator <span class="optionalAttribute">default value: 0</span> | **Type:** QueryComparisonOperator **Description:** Defines the search operator (Equal, NotEqual, Contain, StartWith...). |
| SortBinding optional | **Type:** Int64 **Description:** Represents the sort binding path to a scalar property. |
| Tile optional | **Type:** Int64 **Description:** Identifier of the tile. |
