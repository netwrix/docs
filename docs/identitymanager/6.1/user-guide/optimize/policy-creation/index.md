---
title: "Create a Policy"
description: "Create a Policy"
sidebar_position: 40
---

# Create a Policy

How to define
[policies](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md)
to organize roles and rules.

## Overview

A
[policy](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md)
is a subgroup of the role model. It defines an ensemble of
[roles](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md)
and
[assignment rules](/docs/identitymanager/6.1/user-guide/optimize/assignment-automation/index.md)
that apply to specific identities. So policies are used to handle separately several sets of
identities, based on
[dimensions](/docs/identitymanager/6.1/integration-guide/role-assignment/conformingassignmentcomputation/index.md#dimensions)
with different permissions and workflows.

Integrators must minimize the number of policies because it segments identities, and segmentation
implies high maintenance. NETWRIX recommends using one policy per population. A population is a
group of people that can be managed following the same rules, role model, workflows, etc. This
means, for example, one policy for workers (meaning employees and contractors), another one for
partners, another one for clients. But sometimes partners are included in the same policy as
workers, it depends on the organization.

Usercube provides a default policy. Only when the project is mature enough should integrators think
about creating additional policies.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards identity management.

| Input                                                                                                                              | Output |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [Resource type](/docs/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/index.md) (optional) | Policy |

## Create a Policy

Create a policy by proceeding as follows:

1. Access the policies screen by clicking on **Access Policies** on the home page in the
   **Configuration** section.

![Home - Access Policies](/images/identitymanager/6.1/user-guide/optimize/policy-creation/home_accesspolicies_v602.webp)

2. Click on **+ New policy** at the top right corner.

![New Policy](/images/identitymanager/6.1/user-guide/optimize/policy-creation/policycreation_policies_v602.webp)

3. Fill in the information fields.

    ![New Policy Fields](/images/identitymanager/6.1/user-guide/optimize/policy-creation/policycreation_newpolicy_v602.webp)

    - `Identifier`: must be unique among policies and without any whitespace.
    - `Name`: will be displayed in the UI to identify the resource type.
    - `Provisioning`: allows
      [provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md)
      for the policy.
    - `Simulation`: allows
      [simulation](/docs/identitymanager/6.1/user-guide/optimize/simulation/index.md)
      creation for the policy.
    - `Approve Roles Implicitly`: can be enabled to bypass approval steps if the person who issues a
      given role request is also the
      [role officer](/docs/identitymanager/6.1/user-guide/set-up/role-officer-management/index.md).
    - `Roles can be prolonged without a new approval workflow`: enables the policy's roles and
      resource types to have their assignment's end dates postponed without any validation.
    - `Is Managed by External Source`: can be enabled only during policy creation to indicate that
      its permissions are managed by another IGA tool and are to be ignored by Usercube's role model
      computation.
    - `Maximum Duration`: duration (in minutes) after which the policy's roles and resource types
      will be automatically revoked, if no earlier end date is specified. It impacts only the roles
      and resource types which are manually assigned after the maximum duration is set. Pre-assigned
      items are not impacted.
    - `Grace Period`: duration (in minutes) for which a lost automatic role or resource type is
      prolonged. A review will be required to validate or decline the entitlement prolongation.
      Inferred entitlements won't be lost unless the end of the grace period is reached or the
      prolongation is declined.
    - **Dimensions**: criteria that, if met, trigger the membership of given identities to the
      policy.

    What we call _another IGA tool_ can be another application or even another version of Usercube.

4. Click on **Create**.

## Verify Policy Creation

In order to verify the process, check that the policy has been added with the right options to the
list on the **Access Policies** page.
