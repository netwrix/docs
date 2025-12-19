---
title: "Create Roles in Bulk"
description: "Create Roles in Bulk"
sidebar_position: 10
---

# Create Roles in Bulk

How to create role naming rules, which create single roles using existing naming conventions from
the managed system. See the
[Role Mapping](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md)
topic for additional information.

## Overview

A role naming rule automatically creates single roles and the corresponding navigation rules based
on the name of the corresponding entitlements in the managed system.

Role naming rules replace the tedious process of manual role creation. Instead of creating roles
individually with their navigation rules, you can use role naming rules to generate roles in bulk
and thus faster create the single role catalog.

> For example, consider a naming convention in our organization that states that AD groups have
> their cn: `SG_APP_<applicationName>`. Then, we can create a naming rule that indicates that for
> all AD groups starting with `SG_APP_`, we create a role that gives the adequate user the
> corresponding group membership, with `<applicationName>` as a name. For example, we have the
> application Contoso and the group `SG_APP_Contoso`.

Roles created via role naming rules can still be modified later in the UI, if needed.

A role naming rule, for a given resource type, creates roles and rules only for resources which are
not yet linked to a role, nor a navigation rule of this resource type. This implies that:

- role naming rules do not overwrite manual changes;
- role naming rules cannot link more than one resource (so one entitlement) to one role.

If a role naming rule is supposed to create a role that already exists, then a corresponding
navigation rule is created only if the existing role has the same policy and category as specified
in the role naming rule.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                                | Output                                                    |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| [Create a Provisioning Rule](/docs/identitymanager/saas/user-guide/set-up/provisioning-rule-creation/index.md) (required) | Role naming rule Single roles Navigation rules Categories |

## Create a Role Naming Rule

Create a role naming rule by proceeding as follows:

1. On the home page, click on **Access Rules** in the **Configuration** section.

    ![Home Page - Access Rules](/images/identitymanager/saas/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the entity type to which the future naming rule will
   be applied.

    ![Entity Type Choice](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Role Naming Conventions** tab and on the addition button at the top right corner.

    ![Addition Icon](/images/identitymanager/saas/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

    ![Create a Naming Rule](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_newrule_v602.webp)

    - `Policy`:
      [Policy](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md)
      in which the rule exists.
    - `Property`: navigation property which will define the actual entitlement in the future
      navigation rule.
    - `Identifier`: must be unique among rules and without any whitespace.
    - **+ New Rule**: a naming rule is based on the union of rules, themselves based on the
      intersection of rule items. A rule item specifies one of the conditions that will trigger the
      enforcement of the naming rule. See the
      [Role Mapping](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md)
      topic for additional information.
    - `Where Expression`: C# expression returning a boolean to condition the application of the
      rule.

        Netwrix Identity Manager (formerly Usercube) recommends using this option only when the
        options available in the rule items do not suffice.

    - **Single Role**: single role(s) to be created. See the
      [Create a Role Manually](/docs/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/index.md) topic for additional information.

        - `Identifier`: must be unique among roles and without any whitespace. If the defined
          identifier is already used, then neither the role nor the rule is created. Can be defined
          by a property path and/or
          [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) (mandatory).
        - `Name`: will be displayed in the UI to identify the future single role. Can be defined by
          a property path and/or an
          [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md).

    - **Category**: the
      [Category](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/category/index.md)
      for the future role(s).

        - `Identifier`: either matches an existing category and selects it, or doesn't match and
          therefore a new category is created. Can be defined by a property path and/or an
          expression.
        - `Name`: will be displayed in the UI to identify the category. Ignored if the `Identifier`
          attribute matches an existing category's identifier. Can be defined by a property path
          and/or an expression.
        - ` Parent Identifier`: for a potential parent category. Must match an existing category's
          identifier. Can be defined by a property path and/or an expression.
        - `Default Category`: category for the future role(s) if the category's `Identifier`
          attribute isn't filled in or doesn't compute.

    - `Role Policy`: policy in which the future roles exist.
    - `Approval Workflow`: represents the number of validations required to assign the future
      role(s).
    - `Approve Role Implicitly`: needs at least a simple approval workflow. `Implicit` mode bypasses
      the approval step(s) if the person who issues the role request is also the role officer.
      `Explicit` refuses said bypass. `Inherited` follows the policy decision to approve roles
      implicitly or not.
    - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
      Permissions** dialog. This setting does not apply to roles which are either inferred or have
      workflow states which require manual action.
    - `Comment Management on Permission Review`: to change if different from the role policy.
        > Our example would look like:
        >
        > ![Example - Naming Rule](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_example_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

As naming rules are applied only to resources that aren't already linked to a role or a navigation
rule, neither deletion nor modification in a naming rule can affect the previously created roles and
rules.

## Verify Naming Convention

In order to verify the process:

1. to take the changes into account, on the appropriate connector's overview page click on
   **Jobs** > **Apply Naming Conventions**;

    ![Resource Type Jobs](/images/identitymanager/saas/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. check that the correct roles and rules were created.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/images/identitymanager/saas/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select single roles and find the role(s) you created inside the right category and with the right
parameters.

![Access Single Roles](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.webp)

> Our example would look like:
>
> ![Example - Generated Role](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.webp)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](/images/identitymanager/saas/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select navigation rules and find the rule(s) you created with the right parameters.

![Access Navigation Rules](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.webp)

> Our example would look like:
>
> ![Example - Generated Rule](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.webp)
