---
title: "HomonymEntityLink"
description: ""
sidebar_position: 1
---

This entity is used to configure the homonym workflow.


## Examples
```xml
<HomonymEntityLink FormEntityType="Referentiel_UserRecord" Identifier="Homonym_Referentiel_UserRecord"/>
```

In this example the homonym is linked to a [Control](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/user-interface/form#child-element-control) and it will be applied for the [Binding]( included in the [Control](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/user-interface/form#child-element-control) where the homonym is located. For details, see [how to configure homonym filters](.
```xml
<Form Identifier="Workflow_Referentiel_User_AdvancedStartInternal_Base" EntityType="Referentiel_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Referentiel_UserRecord">
        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">
            <Control Binding="LastName" IsRequired="true" />
            <Control Binding="FirstName" IsRequired="true" />
        </Control>
    </Control>
</Form>
```


## Properties

|Property|Details|
|---|---|
| FormEntityType required | **Type:** Int64 **Description:** In a [Form](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/user-interface/form), an [EntityType](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/entitytype) is defined and the [Binding](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/metadata/binding) of this Form will be loaded from this EntityType. The FormEntityType property represents this EntityType. |
| Identifier required | **Type:** String **Description:** Unique identifier of the HomonymEntityLink. |

## Child Element: Filter
Defines combination of property comparison to use to find homonyms.

### Properties

|Property|Details|
|---|---|
| ComparisonProperty1 optional | **Type:** Int64 **Description:** Defines the property used to compare with the form control `Property`. It shouldn't be defined if it the same as the property in the attribute `Property`. Going from 1 to 5. |
| Expression1 optional | **Type:** String **Description:** Defines the C# expression to apply on the homonymy form controls. The result of the expression evaluation will be compared with the corresponding `ComparisonProperty` using the defined `Operator`. If the `ComparisonProperty` is a computed property, no need to define the expression if it is the same as the one for the computed property. It will be automatically used when finding homonyms. Going from 1 to 5. [Learn about C# expression syntax](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| Operator1 <span class="optionalAttribute">default value: 2</span> | **Type:** QueryComparisonOperator **Description:** Defines the operator to use to compare between the `ComparisonProperty` and the `Property` or the `Expression` evaluation result. By default the `Equal` operator is used. Going from 1 to 5. All possible values: `0` - Auto: The `Operator` is calculated by the engine according to the type of element. `1` - NotEqual: finds the elements that aren't equal to the value you specify. `2` - Equal: finds the elements that are strictly equal to the value you specify. `3` - Contain: finds the elements that contain the value you specify. `4` - StartWith: finds the elements that start with the value you specify. `5` - EndWith: finds the elements that end with the value you specify. `6` - NotContain: finds the elements that don't contain the value you specify. `7` - NotStartWith: finds the elements that don't start with the value you specify. `8` - NotEndWith: finds the elements that don't end with the value you specify. `9` - GreaterThan: finds the elements that are greater than the value you specify. `10` - LessThan: finds the elements that are less than the value you specify. `11` - GreaterThanOrEqual: finds the elements that are greater than or equal to the value you specify. `12` - LessThanOrEqual: finds the elements that are less than or equal to the value you specify. `*`- Flexible: The `Flexible` operators transform the value you specify according to the `FlexibleComparisonExpression` defined in the `EntityProperty` then search. The flexible operators are: `13` - FlexibleEqual `14` - FlexibleContain `15` - FlexibleStartWith `16` - FlexibleEndWith |
| Property1 optional | **Type:** Int64 **Description:** Defines the form control property to use to compare with `ComparisonOperator` using the defined `Operator`. Going from 1 to 5. |
