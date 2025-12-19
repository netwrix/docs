---
title: "Context Rule"
description: "Context Rule"
sidebar_position: 60
---

# Context Rule

A context rule configures, for the identities of a given entity type, the generation of contexts
which are used in provisioning to simplify the application of the role model's rules.

A context rule should be created for each entity type for which we want to assign entitlements
automatically based on users' attributes.

Without a context rule, automatic entitlements (assigned via the role model's rules):

- cannot be assigned based on users' attributes;
- don't have specific start and end dates, so they are valid from the resource creation until its
  deletion.

See the
[Identity Lifecycle: Joiners, Movers and Leavers](/docs/identitymanager/6.2/integration-guide/identity-management/joiners-movers-leavers/index.md)
for additional information about context generation.

A context rule can be configured with [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) in situations
where a user needs to be modeled by several contexts over time or simultaneously.

Without record sections, a context rule can generate only one context per user. This means that
users cannot have more than one contract, or position, at a time, and that data changes cannot be
anticipated.

## Examples

The following example generates contexts, i.e. sets of dimension-value pairs, for users from
`Directory_User` as resources of `Directory_User:Records`.

Both the start and end dates of the future contexts are defined with C# expressions based on users'
contract and position start/end dates.

All contexts are to be made of the properties specified by the bindings `B0` to `B7`.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### ExcludeExpression

The following example is similar to the previous one, except that we choose to exclude users
declared as "draft" from the role model and provisioning calculations.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

This option can exclude workers who are not validated yet, or who have left the company, for
example.

### RiskFactorType

The following example is similar to the previous one, except that we force the final risk score of a
user to be the maximum value of all their risk scores.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" RiskFactorType="Max"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### Role mining

Context rules also contain some parameters for
[Perform Role Mining](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/role-mining/index.md).

Users are distributed in a hypercube made of all dimensions, like in the following table (left) when
we have only 2 dimensions, where for example `1`, `2`, `3`, etc. are users' possible locations, and
`A`, `B`, `C`, etc. are users' possible departments in the company. When considering one dimension
and sorting the dimension values per user percentage, we get the following table (right).

![Role Mining Tables](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/contextrule/contextrules_rolemining.webp)

The tables here represent a simple situation with few dimensions. But the higher the number of
dimensions, the more complex are role mining's computations. This is known as the curse of
dimensionality.

The following example is similar to the first one, except that we customize some role mining
parameters which help tackle the curse of dimensionality:

- `MinIdentitiesCount` establishes that the role mining's engine will generate a role assignment
  rule only when the rule is applicable to at least 5 users;
- `ReductionOutlierPercentage` establishes that the role mining's engine will consider the last 2.0%
  dimension values (from `Y` to `Z` in the table above) to be grouped together in a single category
  "Others".

    The definition of the outlier percentage is particularly useful when managing, for example a
    services company with thousands of distinct organizations, where many organizations contain only
    one or two users. We can safely choose to group into a single fictitious organization the 2% of
    all users that involve the smallest organizations.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" MinIdentitiesCount="5" ReductionOutlierPercentage="2.0"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### Certification items

Unlike `ResourcesStartBinding` and `ResourcesEndBinding`, `ResourcesStartExpression` and
`ResourcesEndExpression` cannot be used to define the resources to include in the related
certification campaigns. Thus, when needing to define which resources to include with more than
start/end bindings, add a comparison based on `ResourceCertificationComparisonBinding`,
`ResourceCertificationComparisonOperator` and `ResourceCertificationComparisonValue`.

The following example includes in certification campaigns only the resources that have their
`IsActivePosition` property set to `1`.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" SourceEntityType="Directory_User" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" RiskFactorType="Max" ResourceCertificationComparisonBinding="Directory_UserRecord:IsActivePosition" ResourceCertificationComparisonOperator="Equal" ResourceCertificationComparisonValue="1"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

:::note
must be configured together with the other `ResourceCertificationComparison` properties.
:::


:::note
when not specified, certification items are defined by `ResourcesStartBinding` and
`ResourcesStartBinding`.
:::


## Properties

| Property                                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B0 optional                                      | **Type** Int64 **Description** Binding of the dimension 0 (up to 3V in [Base32 Parameter Names](/docs/identitymanager/6.2/integration-guide/toolkit/parameter-names/index.md)). The dimension can then be used in rules to filter the rules' targets.                                                                                                                                                                                                                                                                                                                                                                                       |
| DisplayName_L1 required                          | **Type** String **Description** Display name of the context rule in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ExcludeExpression optional                       | **Type** String **Description** C# expression that defines the resources to exclude from context generation, because they should not be part of the role model and provisioning calculations. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                               |
| Identifier required                              | **Type** String **Description** Unique identifier of the context rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MinIdentitiesCount default value: 0              | **Type** Int32 **Description** Minimum number of identities to take into account to generate a rule by the role mining engine.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Policy required                                  | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ReductionOutlierPercentage default value: 0.0    | **Type** Float **Description** Proportion of identities that are grouped together by role mining to aggregate all the small entities in one "other" category. This is used to speed up the mining process as the number of groups can be greatly reduced.                                                                                                                                                                                                                                                                                                                                          |
| ResourceCertificationComparisonBinding optional  | **Type** Int64 **Description** Binding of the property whose value is to be compared to `ResourceCertificationComparisonValue` in order to specify the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included. |
| ResourceCertificationComparisonOperator optional | **Type** QueryComparisonOperator **Description** Operator of the comparison that specifies the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included.                                                         |
| ResourceCertificationComparisonValue optional    | **Type** String **Description** Value to be compared to the value of `ResourcesCertificationComparisonBinding` in order to specify the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included.                 |
| ResourcesBinding optional                        | **Type** Int64 **Description** Binding that represents the entity type of the contexts to be created from the `SourceEntityType`. It can also be defined via `ResourcesExpression`.                                                                                                                                                                                                                                                                                                                                                                                                                |
| ResourcesEndBinding optional                     | **Type** Int64 **Description** Binding of the date property among those from `ResourcesBinding` which specifies the end of validity for all [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) properties of the context. It can also be defined via `ResourcesEndExpression`. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md).                                                                                                                                                           |
| ResourcesEndExpression optional                  | **Type** String **Description** Expression based on the `ResourcesBinding` entity type that defines the end of validity for all [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) properties of the context. It can also be defined via `ResourcesEndBinding`. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md).                                                                                   |
| ResourcesExpression optional                     | **Type** String **Description** Expression based on `SourceEntityType` that defines the entity type of the contexts to be created. It can also be defined via `ResourcesBinding`. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                           |
| ResourcesStartBinding optional                   | **Type** Int64 **Description** Binding of the date property among those from `ResourcesBinding` which specifies the beginning of validity for all [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) properties of the context. It can also be defined via `ResourcesStartExpression`. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md).                                                                                                                                                   |
| ResourcesStartExpression optional                | **Type** String **Description** Expression based on the `ResourcesBinding` entity type that defines the beginning of validity for all [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) properties of the context. It can also be defined via `ResourcesStartBinding`. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [Record Section](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md).                                                                           |
| RiskFactorType optional                          | **Type** RiskFactorType **Description** Operator used to aggregate a user's risk scores together to compute the user's global risk score. `0` - **None**. `1` - **Max**: a user's final risk score is the maximum value among all their risk scores. `2` - **Average**: a user's final risk score is the average value of all their risk scores.                                                                                                                                                                                                                                                   |
| SourceEntityType required                        | **Type** Int64 **Description** Identifier of the entity type of the parent resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
