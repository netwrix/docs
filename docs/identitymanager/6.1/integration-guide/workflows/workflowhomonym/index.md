---
title: "Workflow Homonym"
description: "Workflow Homonym"
sidebar_position: 40
---

# Workflow Homonym

In this section we configure the homonym detection that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A
[homonym entity link](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/homonymentitylink/index.md)
defines a new homonym detection to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the detection for homonyms is performed
according to the homonym control form. See section below.

### With customized filters

[Homonym entity link filters](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/homonymentitylink/index.md)
allow to define customized filters for a homonym detection.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the detection for homonyms is performed by comparing
the values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Filters on several entities

A homonym entity link can contain filters on the properties from several distinct entity types.

> The following example searches for homonyms among usual workers (from `Directory_UserRecord`) but
> also the guests (from `Directory_Guest`):
>
> ```
>
> <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord">  <Filter
>       Property1="LastName"
>       Property2="FirstName"
>   />
>   <Filter
>       Property1="LastName" ComparisonProperty1="Directory_Guest:LastName"
>       Property2="FirstName" ComparisonProperty2="Directory_Guest:FirstName"
>    />
> </HomonymEntityLink>
>
> ```

In this case, a display table is required for the additional entity. See the section below.

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input detection value is retrieved directly from the property value

    ```
    <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
            Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
            Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
        /></HomonymEntityLink>

    ```

Here, `Property1` is set, so the detection for homonyms is performed by comparing the `LastName`
value, entered by the user in the workflow form, with the phonetic value of existing resources
stored as the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input detection value is deducted

    ```
    <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
            ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
        />    <Filter
            ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
        /></HomonymEntityLink>

    ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the detection value is computed
  by applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + ' ' + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the detection value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The detection for homonyms is performed by comparing the detection values computed based on each
filter with the values stored in the database and retrieves all resources that match any of the
filters.

#### Filter on a language property

If a filter is set on a language property, the detection for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym">    <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the detection for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A
[display table](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md)
is used to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

## Define the Homonym Control in the Workflow Form

The
[form](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/user-interface/form/index.md)
where the homonyms are to be checked must contain a layout fieldset control where:

- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.
- the properties to check (defined in the homonym filters) are represented in the control bindings.
- the bindings are all represented in the homonym filters.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties, see
[filter definition](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/homonymentitylink/index.md).

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```

If a filter is declared with a `ComparisonProperty` attribute (and so without a `Property`), then
the properties used in the `Expression` (whether defined in the filter or elsewhere in the
configuration) to compute the `ComparisonProperty` must also be represented in the control bindings.

In the example below, the properties used in the `Expression1` attribute that must be represented in
the control bindings are `LastName` and `FirstName`.

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
    /></HomonymEntityLink>

```
