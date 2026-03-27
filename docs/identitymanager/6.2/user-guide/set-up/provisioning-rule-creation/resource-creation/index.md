---
title: "Create Resources"
description: "Create Resources"
sidebar_position: 10
---

# Create Resources

How to define
[Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
rules to create new (target) resources for given users, computing and provisioning their properties
based on source resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to create target resources and assign them to given users. We are going to
[Provision](/docs/identitymanager/6.2/user-guide/administrate/provisioning/index.md) these resources, i.e. write them to the
managed system.

The right tools for the job are resource type rules.

The application of a resource type rule can depend on the assignment of a single role, and/or user
dimensions.

> A resource type rule could assign a SAP account to users working in Germany, and who already have
> the role `SAP: manager access`.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                     | Output              |
| ------------------------- | ------------------- |
| Categorization (required) | Resource type rules |

See the [Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) topic for additional information.

## Create a Resource Type Rule

Create a resource type rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

    ![Home - Access Rules](/images/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future scalar rule.

    ![Entity Type Choice](/images/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Resource Types** tab and on the addition button at the top right corner.

    ![Addition Icon](/images/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

    ![Create a Resource Type Rule](/images/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_typerule_v602.webp)

    - `Resource Type`: resource type to be automatically assigned.
    - `Type`: assignment type that can be: `Suggested` so that the resource type is listed among
      suggested permissions in the permission basket of users matching the criteria during an
      entitlement request, suggested assignments must be selected manually to be requested; or
      `Automatic` so that the resource type is automatically assigned to users matching the
      criteria; or `Automatic but with validation` so that the resource type is listed in the
      permission basket of new workers, these assignments can still be modified.
    - `Resource type denied`: option that forbids the assignment.
    - `Offset of effective date`: time period that defines the actual effective date for resource
      creation/deletion according to the value's start and/or end date.
    - **Criteria**: conditions that, if met, trigger the resource creation.
        > Our example would look like:
        >
        > ![Resource Type Rule Example](/images/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_exampletype_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a resource type rule is taken into account when launching the role model
computation task, in the **Resource Types** frame of the corresponding connector's overview page,
via **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new assignments. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity by a resource type rule, and if the user's criteria do not comply with
the new version of the rule, then the corresponding resource is automatically deleted.

A modification in a resource type rule can trigger the removal of a resource only on the Identity
Manager side. There are several barriers to cross before said resource is removed from the managed
system: first before the creation of an Assigned Resource Type in Identity Manager's database, and
again before the actual action in the managed system.

> In our example, let's say that we replace the country criterion `Germany` with `France`. Consider
> a user who had a SAP account assigned through this rule. Now that the country criterion has
> changed, our user working in Germany would be deprived of their account.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in resource type rules.

## Verify Rule Creation

In order to verify the process, start by checking the rule's details on the **Access Rules** page.
Then, you can:

1. Select a test user in the directory, accessible from the home page.

    ![Home Page - Directory User](/images/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Create a resource type rule involving an account that said user doesn't already have, based on
   criteria which the selected user satisfies.
3. Trigger the computation of the role model by clicking, on the corresponding connector's overview
   page, in the **Resource Types** frame, on **Jobs** > **Compute Role Model** to apply all rules.

    ![Resource Type Jobs](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

4. See the new account in the user's **View Permissions** tab.

    ![View Permissions Tab](/images/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

    If the type rule uses a single role as a criterion, and the user has said role, then both the
    resource type and the role will be displayed in the user's permissions, but only if the role is
    related to a [Compute a Navigation Property](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/index.md).
    Otherwise, only the resource type will be visible.
