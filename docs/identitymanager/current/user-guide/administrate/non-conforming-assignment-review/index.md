---
title: "Review Non-conforming Assignments"
description: "Review Non-conforming Assignments"
sidebar_position: 40
---

# Review Non-conforming Assignments

How to review non-conforming assignments, i.e. approve or decline the suggestions made by Identity Manager after every synchronization. The aim is to handle the differences between the values from the managed systems and those computed by Identity Manager's role model.

## Overview

Integrators must review three main types of non-conforming entitlement assignments:

- **Non-conforming roles**: Identity Manager finds roles assigned to users in the managed systems that
no rule in the role model can justify.
- **Unreconciled properties**: Identity Manager's role model computes property values that are different
from the values in the managed systems.
- **Unauthorized accounts**: no rule from the role model can justify their actual assignment to an
identity.

**Unreconciled properties**, **Unauthorized accounts** and **Non-conforming roles** are part of [Non-Conforming Assignments](../../../integration-guide/role-assignment/nonconformingdetection). The global aim of the review is to handle the gaps between the [Existing Assignments](../../../integration-guide/role-assignment/existingassignmentsdeduction) (real values) and the [Conforming Assignments](../../../integration-guide/role-assignment/conformingassignmentcomputation) (theoretical values computed by Identity Manager from the role model rules).

A high number of non-conforming assignments can come from an issue in configuration rules.

**Non-conforming roles** and **Unauthorized accounts** can be mass reviewed through [Automate the Review of Non-conforming Assignments](../../../user-guide/optimize/non-conforming-assignment-review-automation). See the [Automate the Review of Non-conforming Assignments](../../../user-guide/optimize/non-conforming-assignment-review-automation) topic for additional information.

## Participants and Artifacts

This operation should be performed in cooperation with application owners who are in charge of applications' entitlements (technical side), and/or managers who know their team's entitlements (functional side).

 | Input | Output | 
 | --- | --- | 
 | [Provision](../../../user-guide/administrate/provisioning) (required) | Complying assignments | 

### **pre-existing** assignments vs. non-conforming assignments

The assignments specified as non-conforming during the very first execution of the role model are called **pre-existing** assignments. **pre-existing** assignments are tagged differently from other non-conforming assignments by the [Save **pre-existing** Access Rights Task](../../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/savepreexistingaccessrightstask) because they can indicate that:

- The rules are not optimal yet.
- Data in the managed system needs more cleanup.

Obviously, **pre-existing** assignments can also prove to be exceptions to the rules, like non-conforming assignments, and need to be validated as such.

## Review Non-conforming Assignments

While there can be dependencies between the review of **Non-conforming roles** and **Unreconciled properties**, there are no absolute requirements regarding the sequential order of the non-conforming assignment review:

- Review [Reconcile a Role](../../../user-guide/administrate/non-conforming-assignment-review/role-reconciliation).
- Review [Reconcile a Property](../../../user-guide/administrate/non-conforming-assignment-review/property-reconciliation).
- [Review an Unauthorized Account](../../../user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review).

[Manage Risks](../../../user-guide/optimize/risk-management) can be defined to highlight the most sensitive accounts/permissions, in order to establish a priority order in the review of non-conforming assignments.

