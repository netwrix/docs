---
title: "SearchBar"
description: ""
sidebar_position: 8
---

The SearchBar is an element of the user interface that allows you to search from a list of properties of an EntityType.


## Examples
```xml
<SearchBar EntityType="Directory_User" Menu="Menu_Search_Directory_User" SearchBarDesignElement="Inline">
    <Criterion Binding1="MainRecord.EmployeeId" PlaceHolderText_L1="Employee Id"  InputType="Auto" ColumnSize="2" />
    <Criterion Binding1="MainRecord.LastName" InputType="Auto" ColumnSize="2" />
    <Criterion Binding1="MainRecord.FirstName" InputType="Auto" ColumnSize="2" />
    <Criterion Binding1="MainRecord.Organization" PlaceHolderText_L1="Department"  InputType="Auto" ColumnSize="2" />
</SearchBar>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** Int64 **Description:** References the linked entity type. |
| Menu optional | **Type:** Int64 **Description:** References the linked Menu. Each MenuItem of this Menu is a link to an entity's workflow displayed under the search bar on the visualization page of the entity's resource list. |
| SearchBarDesignElement required | **Type:** Enumeration **Description:** Defines the type of the searchBar(Block,Inline). |
| SearchedBinding optional | **Type:** Int64 **Description:** Defines the binding on which the search will be applied. |
| SearchedEntityType required | **Type:** Int64 **Description:** Defines the entity type on which the search will be applied. |

## Child Element: Criterion
A SearchBarCriteria defines a search criterion on a given property.
See SearchBar for more details.

### Properties

|Property|Details|
|---|---|
| ColumnSize required | **Type:** Int32 **Description:** Size of the insertion or selection element of the property. |
| DefaultValue optional | **Type:** String **Description:** Basic filter on the properties on the value or values entered in parameters. |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the criteria in language 1 (up to 16). |
| InputType required | **Type:** Enumeration **Description:** Type of the research property. (Auto: takes by default the type of the EntityType property.) |
| IsVisibleInAdvancedView <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to make the property visible in the advanced search but not in the main search properties. |
| Operator <span class="optionalAttribute">default value: 0</span> | **Type:** QueryComparisonOperator **Description:** Defines how to do the research. All possible values: - Auto: The SearchOperator is calculated by the engine according to the type of element - NotEqual: finds the elements that are not equal to the desired value - Equal: finds the elements that are strictly equal to the desired value - Contain: finds the elements that contain the desired value - StartWith: finds the elements that start with the desired value - EndWith: finds the elements that end with the desired value - NotContain: finds the elements that do not contain the desired value - NotStartWith: finds the elements that do not start with the desired value - NotEndWith: finds the elements that do not end with the desired value - GreaterThan: finds the elements that are greater than the desired value - LessThan: finds the elements that are less than the desired value - GreaterThanOrEqual: finds the elements that are greater than or equal to the desired value - LessThanOrEqual: finds the elements that are less than or equal to the desired value - Flexible*: The Flexible search operators transform the desired value according to the FlexibleComparisonExpression defined in Property then search. The flexible operators are: - FlexibleEqual - FlexibleContain - FlexibleStartWith - FlexibleEndWith |
| OptimizedBinding1 optional | **Type:** Int64 **Description:** Represents the first optimized binding definition. An optimized binding allows searches to be faster displayed. If it is filled in, it takes priority over the binding located in the search bar criterion column. |
| PlaceHolderText_L1 optional | **Type:** String **Description:** Overloads the DisplayName of the search property with this string. |
| ToolTipText_L1 optional | **Type:** String **Description:** Text displayed in the tool tip. |
