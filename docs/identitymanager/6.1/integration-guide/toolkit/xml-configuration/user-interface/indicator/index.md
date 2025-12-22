---
title: "Indicator"
description: "Indicator"
sidebar_position: 60
---

# Indicator

An Indicator displays a banner alongside the resource information whenever it meets a specific
criteria.

More precisely, an indicator displays the appropriate banner whenever the _Binding_ matches the
_Item Value_ according to the _Comparison operator_, as can be seen on the example below.

The banner is displayed wherever the associated resource appears.

For example, if we create an indicator pointing out the risk score of a user, the banner will show
on the left-side of the user
[tile](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/tile/index.md)
and the user
[form](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/form/index.md).
If we create an indicator pointing out whether an AD account is unused or disabled, the banner will
show on the left-side of the AD Entries tile and form.

One entity can show several banners, one for several different properties. They appear one above the
other if there are four banners or less, one next to the other if there are more.

One indicator can posess several items, that define the information for the banner to be displayed.
The indicators order is important because the banner will get the information of the first item
matching the observed property.

## Examples

The following example entails the display of a red banner for a user with a high risk score and an
orange banner for a user with a medium risk.

The XML file below states that if the risk score is greater than 75, only the indicator "High risk"
will be displayed and not "Medium risk". If it is lower than 75 and greater than 30, the indicator
will be "Medium risk". If it is lower than 30, there will be no indicator.

```

  <Indicator EntityType="Directory_User" Binding="RiskScore" ComparisonOperator="GreaterThanOrEqual" Order="0">    <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />    <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />  </Indicator>

```

Note that if you write the "Medium risk" item before the "High risk" one, even if the score if
greater than 75, the banner will be orange according to the first item:

```

  <Indicator EntityType="Directory_User" Binding="RiskScore" ComparisonOperator="GreaterThanOrEqual" Order="0">      <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />      <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />  </Indicator>

```

## Properties

| Property                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Binding optional            | **Type** Int64 **Description** Defines the binding path to a scalar property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ComparisonOperator required | **Type** QueryComparisonOperator **Description** Defines how to compare the given binding to an indicator item value. All possible values: - Auto: The SearchOperator is calculated by the engine according to the type of element. - NotEqual: finds the elements that are not equal to the desired value. - Equal: finds the elements that are strictly equal to the desired value. - Contain: finds the elements that contain the desired value. - StartWith: finds the elements that start with the desired value. - EndWith: finds the elements that end with the desired value. - NotContain: finds the elements that do not contain the desired value. - NotStartWith: finds the elements that do not start with the desired value. - NotEndWith: finds the elements that do not end with the desired value. - GreaterThan: finds the elements that are greater than the desired value. - LessThan: finds the elements that are less than the desired value. - GreaterThanOrEqual: finds the elements that are greater than or equal to the desired value. - LessThanOrEqual: finds the elements that are less than or equal to the desired value. - Flexible\*: The Flexible search operators transform the desired value according to the FlexibleComparisonExpression defined in Property then search. The flexible operators are: - FlexibleEqual. - FlexibleContain. - FlexibleStartWith. - FlexibleEndWith. |
| EntityType required         | **Type** Int64 **Description** Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| OptimizedBinding optional   | **Type** Int64 **Description** Optimized Binding allows Indicators to be faster displayed. If it is filled in, it takes priority over the Binding located in the Indicator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Order required              | **Type** Int32 **Description** Defines the order in which the banners are displayed. If there is no order needed, its value is zero for all indicators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Child Element: Item

Defines the banner to be displayed informations. See Indicator for more details.

### Examples

```

        <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />        <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />

```

### Properties

| Property                | Details                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Color required          | **Type** String **Description** Defines the color of the item.                                          |
| DisplayName_L1 optional | **Type** String **Description** Display name of the banner in language 1 (up to 16).                    |
| Value optional          | **Type** String **Description** Defines the value with which the indicator binding will be compared to. |
