---
title: "Categorize Resources"
description: "Categorize Resources"
sidebar_position: 70
---

# Categorize Resources

How to correlate managed systems' resources with identities, classifying resources into
[resource types](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).

## Overview

Managing resources can quickly become chaotic when the number of resources increases significantly.
You will need to manage orphaned (without an owner) and unused accounts through resource reviews,
and make sure that all accounts follow their owner's lifecycle. To do so, resources can be
categorized, which for our purposes means two things. They are:

- correlated with their owners, so that accounts follow the corresponding identity's lifecycle.
    > For example, if a user leaves the company, then their account is deactivated accordingly.
- classified according to their intents, in other words you need to specify resources' functions or
  goals within the managed system, especially in terms of security;
    > For example, a basic user account (low-privileged) and an administrator account
    > (high-privileged) have different intents. These two distinct account types are handled in
    > different ways security-wise, and they represent different entitlements with different
    > security measures applied.

Categorization is designed to help resource managers to easily identify a resource's owner and
purpose.

> For example, when Usercube spots an orphaned account, resource managers must be able to determine
> whether the account should have an owner, or if it is a service/technical account and thus does
> not need an owner.

### Technical principles

Technically, Usercube uses the notion of resource types to categorize resources. A resource type is,
in fact, a way to gather similar resources under one meaningful name, because they have the same
intent.

> Our example above would use a resource type `AD User (administration)` to group all AD
> administrator accounts, and `AD User (nominative)` to group all AD basic user accounts.

Thus, a resource type is a name that informs users about the intent of a resource. As stated above,
it serves to implement our two elements of categorization. This happens with two distinct sets of
rules, one for correlation, and the other for classification.

[**Classification**](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md)
is a process that simply aims to assign a resource type to specific resources. A specific resource
can only be assigned a single resource type.

![Classification Schema](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_classifschema.webp)

Any resource that is unclassified will not be available for review.

[**Correlation**](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md)
is a process that aims to establish an ownership relationship between two resources. In most cases,
an identity resource that becomes the owner of an account resource.

![Correlation Schema](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_correlschema.webp)

While an owner can possess several resources, a resource can have only one owner.

Some resources are orphaned (without an owner) for good reasons. For example service/technical
accounts are often used by applications to access data held in Usercube or other managed systems and
don't belong to a specific user.

As stated previously, both classification and correlation work through sets of rules.

> For basic users, we have in Usercube:
>
> ![Example - Basic Users in Usercube](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_examplebasicuser.webp)
>
> For basic users, we have in the AD:
>
> ![Example - Basic Users in AD](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_examplebasicad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Users | 1. mail (from AD) = user's email
> franck.antoine@acme.com = franck.antoine@acme.com 2. displayName = user's last name + user's first
> name Antoine Franck = Antoine + Franck |

> For administrators, we have in Usercube:
>
> ![Example - Basic Users in Usercube](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_exampleadminuser.webp)
>
> For administrators, we have in the AD:
>
> ![Example - Admin Users in AD](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_exampleadminad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Administrators | 1. sAMAccountName = "A" + user's employee id
> A28022 = A + 28022 2. displayName = "ADM" + user's last name + user's first name ADM Colin Jean =
> ADM + Colin + Jean |

Sometimes you may not know if your rules are always going to apply. Therefore, each rule expresses a
certain level of confidence. Usercube will establish a priority order between rules based on the
confidence rate, and will also act differently depending on whether the confidence rate is above or
below 100%.
[Find more details](/docs/identitymanager/6.1/user-guide/set-up/categorization/correlation/index.md).

A resource type can have zero correlation rules, since accounts can be without owners. But a
resource type with neither correlation nor classification rules serves no purpose.

**Correlation triggers classification:** a matching correlation rule for a given resource type will
perform both actions of categorization: both correlating a resource with its owner, and classifying
the resource at the same time.

See below this note.

Hence, integrators should start with correlation rules, and then write classification rules for any
remaining uncorrelated resources.

In the same way, Usercube will apply correlation rules before classification rules.

![Categorization Schema](/images/identitymanager/6.1/user-guide/set-up/categorization/categorization_categschema.webp)

Now that you have created resource types and their correlation/classification rules, you have
created the first elements for your
[role model](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md).
The role model contains all the roles and rules which drive the entitlement assignment logic inside
Usercube.

A role model is made up of
[policies](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md)
which contain roles, rules and resource types. Most often the default policy is enough. However, in
more complex situations,
[additional policies can be created](/docs/identitymanager/6.1/user-guide/optimize/policy-creation/index.md)
to separate groups of roles, rules and resource types.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                                                                                                  | Output                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [Connector](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md) (required) | Categorized resources Correlated accounts Orphaned account list |

## Categorize Resources

Categorize resources by proceeding as follows:

1. Create at least one
   [resource type](/docs/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/index.md);
2. Create the appropriate
   [correlation rules](/docs/identitymanager/6.1/user-guide/set-up/categorization/correlation/index.md);
3. Create the appropriate
   [classification rules](/docs/identitymanager/6.1/user-guide/set-up/categorization/classification/index.md)
   for accounts that do not have an owner.

NETWRIX recommends creating/modifying/deleting correlation and classification rules using
[simulations](/docs/identitymanager/6.1/user-guide/optimize/simulation/index.md) in
order to previsualize changes.

## Next Steps

Once accounts are categorized, integrators can start
[creating provisioning rules](/docs/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/index.md).

Categorization also enables the
[review of orphaned and unused accounts](/docs/identitymanager/6.1/user-guide/administrate/orphan-unused-account-review/index.md).
