---
title: "Review Prolonged Entitlements"
description: "Review Prolonged Entitlements"
sidebar_position: 10
---

# Review Prolonged Entitlements

This guide shows how to allow a manager to review the permissions prolonged by a grace period.

## Overview

Consider an entitlement given via a role which is defined with a grace period. Consider that this
role is assigned automatically to some users by a rule of the role model. If this rule changes and
the users are supposed to lose the role, then they keep it for the time defined by the
[grace period](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md),
and the role's workflow state switches from `Automatic` to `Prolonged`. Then a manager must access
these entitlements in the **Role Review** screen, to either approve or decline the role
prolongation.

## Assign the Right to Review Prolonged Entitlements

The right to review prolonged entitlements is given by adding the appropriate `AccessControlRule` on
a profile. A profile should get the right to review prolonged entitlements given for both single and
composite roles. Technically speaking, we need to create one access control rule for assigned single
roles, and another one for assigned composite roles. In this case we give access to the workflow
state 27 which is the workfow state `Prolonged` linked with the grace period.

```

 <AccessControlRule Profile="GracePeriodManager" EntityType="AssignedCompositeRole" Identifier="Manager_GracePeriod_CompositeRole" DisplayName_L1="Manager - Review Grace Period">    <Filter Binding="WorkflowState" Value="27"/>    <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User"/> </AccessControlRule> <AccessControlRule Profile="GracePeriodManager" EntityType="AssignedSingleRole" Identifier="Manager_GracePeriod_SingleRole" DisplayName_L1="Manager - Review Grace Period">    <Filter Binding="WorkflowState" Value="27"/>    <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User"/> </AccessControlRule>

```
