---
title: "Configure a Homonym Detection"
description: "Configure a Homonym Detection"
sidebar_position: 60
---

# Configure a Homonym Detection

In this section we configure the homonym search that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A [Homonym Entity Link](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/homonymentitylink/index.md)
defines a new homonym search to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the search for homonyms is performed
according to the homonym control form. See the Configure a Homonym Detection topic for additional
information.

### With customized filters

[Homonym Entity Link](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/homonymentitylink/index.md)filters
allow to define customized filters for a homonym search.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the search for homonyms is performed by comparing the
values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input search value is retrieved directly from the property value

    ```
    <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
            Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
            Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
        /></HomonymEntityLink>

    ```

Here, `Property1` is set, so the search for homonyms is performed by comparing the `LastName` value,
entered by the user in the workflow form, with the phonetic value of existing resources stored as
the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input search value is deducted

    ```
    <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
            ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
        />    <Filter
            ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
        /></HomonymEntityLink>

    ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the search value is computed by
  applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + &#x27; &#x27; + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the search value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The search for homonyms is performed by comparing the search values computed based on each filter
with the values stored in the database and retrieves all resources that match any of the filters.

#### Filter on a language property

If a filter is set on a language property, the search for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym">    <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the search for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A [Display Table](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md) is used
to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

See the [Customize Display Tables](/docs/identitymanager/saas/integration-guide/ui/custom-display-table/index.md) for additional
information.

## Define the Homonym Control in the Workflow Form

The [Form](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/form/index.md) where the homonyms are
to be checked must contain a layout fieldset control where:

- the properties to check are represented;
- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties.

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```
