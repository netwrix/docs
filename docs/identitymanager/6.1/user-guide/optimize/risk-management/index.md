---
title: "Manage Risks"
description: "Manage Risks"
sidebar_position: 30
---

# Manage Risks

How to use the
[risk management](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md)
module to identify entitlement assignments that pose a security risk, especially about segregation
of duties and high privileges.

## Overview

A
[risk](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/risk/index.md)
describes a sensitive situation in which entitlement assignments need to be monitored for security
purposes. Examples include:

- Segregation of duties: a situation where at least two entitlements pose a risk when assigned to
  the same identity.
- High privilege: a particularly sensitive entitlement.

[Risk management](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md)
is essential to auditing. Among other things, it allows auditors to:

- Identify the identities representing the highest security risk.
- Compute the corresponding
  [risk score](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md#risk-score).
- Schedule
  [access certification campaigns](/docs/identitymanager/6.1/user-guide/administrate/access-certification/index.md)
  accordingly.

Using risks involves three steps:

1. Create a risk: declare the nature of the risk.
2. Create risk rules: create the rules that assign risks to identities, depending on identities'
   entitlement assignments.
3. Monitor risks: via the **Identified Risks** screen or certification campaigns.

## Participants and Artifacts

Integrators may need the help of the application owner, security manager and role model officers to
assess risks inherent to entitlements.

| Input                                                                                                                                                                                                                                                   | Output        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [Role catalog](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md) (required) | Risks catalog |

## Create a Risk

Create a risk by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Risks**.

    ![Home Page - Risks](/images/identitymanager/6.1/user-guide/optimize/risk-management/home_risks_v602.webp)

2. On the risks page, click on the addition button at the top right corner.

    ![Addition Icon](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the fields.

    ![New Risk](/images/identitymanager/6.1/user-guide/optimize/risk-management/riskmanagement_newrisk_v602.webp)

    - `Identifier`: must be unique among risks and without any whitespace.
    - `Name`: will be displayed in the UI to identify the risk.
    - `Policy`:
      [policy](/docs/identitymanager/6.1/user-guide/optimize/policy-creation/index.md)
      in which the risk exists.
    - `Entity Type`:
      [entity type](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/index.md)
      targetted by the risk.
    - `Description`: explanation of the risk that will be displayed with the exemption policy
      message.
    - `Remediation`: potential alternative solutions that will be displayed with the exemption
      policy message.
    - [`Exemption Policy`](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md)
    - [`Type`](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md)
    - `Level`: risk level that is used to compute
      [risk scores](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md).
    - `Rules`: a risk is based on the union of
      [rules](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md),
      themselves based on the intersection of rule items. A rule item specifies the risk-triggering
      resource(s). A high-privilege risk must contain at least one rule with one rule item. A
      segregation-of-duties risk must contain at least two rule items in the same rule. Read below
      how to write risk rules.

    When risks are based on the exemption policy called **Approval required**, the corresponding
    role requests appear on the
    [**Role Review**](/docs/identitymanager/6.1/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/index.md)
    screen with a specific workflow state. See below this note.

    ![Risk Icon](/images/identitymanager/6.1/user-guide/optimize/risk-management/riskmanagement_workflowstate_v523.webp)

    ### Write risk rules

    A risk rule is simply the condition that triggers the assignment of a risk to an identity,
    depending on the identity's entitlements.

    Within Usercube, an entitlement assigned to an identity is represented by the value of a given
    [navigation property](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/index.md),
    in a resource owned by said identity.

    > For example, imagine that we want to grant unlimited Internet access to the administrator
    > profile of an identity. This entitlement won't be assigned directly to the identity but to
    > their AD administration account. In our Active Directory, there is a resource called
    > `DL-INTERNET-Restricted` identified from among AD entries as a group. Therefore, we need to
    > add this group membership to the properties of the identity's AD account, using
    > `DL-INTERNET-Restricted` as a value of the `memberOf` property.

4. Choose the
   [resource type](/docs/identitymanager/6.1/user-guide/set-up/categorization/index.md)
   to be targetted by the risk.

    > We choose `AD User (administration)` to prevent this situation from happening in our example.

5. Choose the navigation property that corresponds to the situation.

    > `memberOf` in our example.

6. Choose a value for this navigation property. The value would be a resource from the unified
   [resource repository](/docs/identitymanager/6.1/introduction-guide/overview/identity-management/index.md).

    > The group `DL-INTERNET-Restricted` in our example.

    ![Risk Item Example](/images/identitymanager/6.1/user-guide/optimize/risk-management/riskmanagement_newriskitem_v602.webp)

    This final value is an entitlement, linked to the owner identity through the navigation property
    and the ownership relationship.

    This final value is an entitlement, linked to the owner identity through the navigation property
    and the ownership relationship.

    > In our example, a risk is identified for a person as soon as their administration AD account
    > is part of the `DL-INTERNET-Restricted` group.

7. Click on **Create**.

    Risks are taken into account from the moment the `Compute Resource Risk Scores` task runs (or
    the
    [complete job](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md)
    which contains said task).

    The `Compute Resource Risk Scores` task doesn't need to be launched right away, but new risks
    can't be identified before it runs at least once.

## Monitor Identified Risks

After creating at least one risk and computing risk scores, identified risks are listed on the
**Identified Risks** screen, accessible from the home page in the **Administration** section.

![Home Page - Identified Risks](/images/identitymanager/6.1/user-guide/optimize/risk-management/home_identifiedrisks_v602.webp)

![Identified Risks](/images/identitymanager/6.1/user-guide/optimize/risk-management/riskmanagement_identifiedrisks_v522.webp)

For a given identity in the list, user information can be viewed and accessed by clicking
respectively on the eye and arrow buttons on the right-hand side.

## Impact of Modifications

Modifications in a risk are taken into account only after running the `Compute Risk Scores` task.
Therefore, risk scores are computed according to the new parameters.

**After a modification:** while risk scores are computed for all identities and assignments
(pre-existing and newly created), a modified
[exemption policy](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md)
is applied only to future entitlement assignments. For example, changing the exemption policy of a
risk from warning to blocking won't remove entitlements from the identities who already have them.
But future assignments are going to be blocked.

The deletion of a risk simply triggers the computation of risk scores during the next
`Compute Risk Scores` task, and removes any exemption policy steps in an assignment request.

## Verify Risk Management

In order to verify the process, assign to a fake identity a permission that is supposed to trigger
the created risk, and check the consequences:

- The message displayed at the end of the entitlement request must correspond to the configuration
  of the
  [exemption policy](/docs/identitymanager/6.1/integration-guide/governance/risks/index.md).
- Once the entitlement is assigned, a line must appear on the **Identified Risks** page.
