---
title: "Correlate Resources"
description: "Correlate Resources"
sidebar_position: 20
---

# Correlate Resources

How to define
[correlation rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcecorrelationrule/index.md)
to match up resources across systems, usually accounts with their owner.

## Overview

### Correlation purpose

Correlation is the process of establishing an ownership relationship between a source resource
(usually an identity) and a target resource (usually an account). It is the basis of the link
between an identity and their fine-grained entitlements.
[Read more about the purpose of correlation](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md).

Every resource type can be assigned a set of correlation rules.

Correlation rules must be created with caution as an error in the correlated attributes may result
in the unwanted assignment of a given account to an existing user.

Correlation should be based on immutable attributes, for example codes that don't change during the
resource's lifecycle rather than display names that can vary in time. This method prevents
integrators from losing the history of the changes made to a resource after a correction.

> In addition to display names, counter-examples for correlation properties are: positions; marital
> names; locations�

### About the confidence rate

As the aim here is to correlate all resources in a given resource type, correlation rules are going
to rely on the patterns in resources' attributes, such as naming conventions.

Sometimes, the managed system doesn't use rigorous rules and thus data quality isn't enough to allow
the creation of a single infallible correlation/classification rule for all resources. Hence, you
may need to create several correlation/classification rules.

Each rule is configured with a confidence rate to express its reliability, according to data quality
and sensitivity.

In our case, correlation/classification can be based on a first rule applicable to quality data
resources with a high confidence rate, and a second rule applicable to resources with a lower data
quality. This second rule is going to have a lower confidence rate, thus a lower priority, because
the strategy is to apply the first rule as much as possible. But the second rule is essential in
case the first one doesn't apply, though it cannot be trusted as much as the first rule.

Hence correlation/classification rules are configured with a confidence rate:

- from 100 to 150% to correlate resources automatically without a manual validation;
- from 0 to 99% to impose that a resource manager reviews the correlation/classification. See more
  details in the section below.

Usercube considers the rules in descending order of confidence rate. The first matching rule is
applied.

In other words:

- if there is at least one matching rule with a confidence rate above 100%, then the one with the
  highest rate is applied;
- if there isn't and there is at least one matching rule with a confidence rate below 100%, then the
  one with the highest rate is suggested.

There is no predefined priority order between two rules with the same confidence rate.

### Focus on reviews

When the confidence rate is below 100%, correlation and classification reviews are to be done:

- on the **Provisioning Review** page when the owned resource is allowed by the role model, i.e.
  requested manually or assigned automatically by a resource type rule;

    ![Correlation Review - Provisioning Review Screen](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/categorization_reviewsprovisioningreview_v603.webp)

- on the **Resource Reconciliation** page when the owned resource is not allowed by the role model,
  i.e. not requested manually nor assigned by a resource type rule. For example, the creation of a
  correlation rule without a resource type rule triggers unauthorized accounts on the **Resource
  Reconciliation** page.

    ![Correlation Review - Resource Reconciliation Screen](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/categorization_reviewsresourcereconciliation_v603.webp)

Broadly speaking, the **Resource Reconciliation** page displays non-conforming assignments/values
(gaps), i.e. resources and property values from the managed systems that are not allowed by a rule
in Usercube. The **Provisioning Review** page displays the resource and property changes whose
workflows require a manual approval.

### Correlation rule examples

Consider AD accounts (target) and their owners (source). A classic example is to try and correlate
identities and AD accounts based on the first name and last name. We can write a correlation rule
that states that, for a given identity, Usercube looks for all AD accounts that bear the same first
name and the same last name. All AD accounts that match this description are said to be correlated
to the identity. The identity becomes the owner of the accounts.

A set of correlation rules for a resource type could be:

- a rule with 100% confidence on login + name + first name;
- a rule with 90% confidence on login only.

Usual rules can also be made, for example, on:

- name + first name using phonetics to avoid typos;
- first name + name + entry date if the entry date is known in the source systems;
- email address;
- Windows login.

Correlation rules don't have to compare equivalent properties from Usercube and from the managed
system. A rule can compare for example users' `Login` from Usercube with their `sAMAccountName` from
the AD, even using C# expressions if needed.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                                                                                                                             | Output            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [Resource type](/docs/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md) (required) | Correlation rules |

## Create a Correlation Rule

The principle of a correlation rule is to compare the expressions of the source and target objects.

Fill a resource type with a correlation rule by proceeding as follows:

1. On the relevant resource type's page, click on **Correlation Rules** and **+ New**.

    ![New Correlation Rule](/images/identitymanager/6.1/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrule_v602.webp)

    Correlation rules can also be created through the **Access Rules** screen (accessible from the
    home page, in the **Configuration** section), clicking on the **Correlations** tab and the
    addition button at the top right corner.

    ![Home - Access Rules](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/home_rules_v602.webp)

    ![Addition Icon](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/iconadd_v602.svg)

2. Fill in the fields.

    ![New Correlation Rule Fields](/images/identitymanager/6.1/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrulefields_v602.webp)

    - **Source Object**: at least one property from the source system that is going to be linked to
      a given target object. Can be defined by a property path and/or an
      [expression](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/index.md).
    - **Target Object**: one property from the managed system that is going to be linked to a given
      source object. Can be defined by a property path and/or an
      [expression](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/index.md).
    - `Confidence Rate`: rate expressing the rule's reliability, and its priority order. See the
      detailed explanation.
        > In this example, a person via their login and name, is the owner of a nominative AD
        > account via its `sAMAccountName` attribute and display name:
        >
        > ![Correlation Rule Example](/images/identitymanager/6.1/user-guide/set-up/categorization/correlation/correlation_example_v602.webp)

3. Click on **Create** and see a line added on the rules page.
4. On the connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare
   Correlation Keys** to compute the expressions used in the new correlation rule(s), and click on
   **Jobs** > **Compute Role Model** to apply all correlation rules.

![Resource Type Jobs](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Impact of Modifications

An action (addition/modification/deletion) on a correlation rule doesn't trigger a new computation
of correlation for the resources that are already correlated. The new version of said correlation
rule will be applied only to new resources, along with the existing resources whose correlation was
not yet reviewed (as unauthorized accounts on the **Resource Reconciliation** screen).

Thus only non-conforming resources (unauthorized accounts on the **Resource Reconciliation** screen)
can have their correlation and classification re-computed.

Even without selecting an owner, reviewing unauthorized accounts on the **Resource Reconciliation**
screen "blocks" correlation and classification "as is". Neither will be re-computed.

[Simulations](/docs/identitymanager/6.1/user-guide/optimize/simulation/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in
correlation rules.

Any modification in correlation rules is taken into account via the following jobs: on the connector
dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare Correlation Keys**, and
then on **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Verify Correlation

In order to verify the process, check the list of
[orphaned accounts](/docs/identitymanager/6.1/user-guide/administrate/orphan-unused-account-review/index.md)
and analyze them to look for patterns revealing correlation issues. To do so, click on the target
entity type(s) affected by your rule(s) in the left menu of the home page.

![Test Entity Type](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

The entity type's page can be
[configured via XML](/docs/identitymanager/6.1/integration-guide/ui/how-tos/index.md) to
customize all displayed columns and available filters, especially the **Orphan** filter that spots
resources without an owner, and the **Owner / Resource Type** column that shows the owner assigned
to each resource.

![Owner / Resource Type Column](/images/identitymanager/6.1/user-guide/set-up/categorization/correlation/correlation_test_v522.webp)

A knowledgeable person must analyze a few samples to ensure that resources' owners can all
[be justified](/docs/identitymanager/6.1/user-guide/administrate/orphan-unused-account-review/index.md),
meaning that orphaned accounts are supposed to be so, and that correlated resources are matched with
the right owner.

Another possibility of correlation validation is to compare the number of AD accounts to the number
of users. However, keep in mind that several accounts are sometimes assigned to a single user.

## Troubleshooting

#### If a resource is not correlated (or not correctly), then�

![Uncorrelated Resource](/images/identitymanager/6.1/user-guide/set-up/categorization/correlation/correlation_uncorrelated_v600.webp)

- Check the validity of correlation rules.
- Check the resource's data quality.
