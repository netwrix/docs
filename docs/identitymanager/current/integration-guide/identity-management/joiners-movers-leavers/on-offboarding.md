---
title: "Onboarding and Offboarding"
description: "Onboarding and Offboarding"
sidebar_position: 10
---

# Onboarding and Offboarding

In Identity Manager, onboarding and offboarding are done through workflows or through synchronization to the HR system.

## Onboarding

The onboarding process for a new employee or contractor is materialized by the **creation of a new resource** in the identity repository. This creation triggers the fulfillment of the entitlements required by the user to perform their duties and be productive on day one.

The entitlement fulfillment can be performed in different ways:

- Identity Manager suggests the entitlements needed by the new user, prepares the provisioning
procedures, and wait for the manual trigger of a manager or security officer.
- Identity Manager automatically triggers the provisioning of the entitlements needed by the new
user, without any more human input.

See the [Role Assignment](../../../integration-guide/role-assignment) topic for additional information on entitlement assignment.

The automation of the entitlement assignment processes can be really helpful. However, you should not be looking for a full automation, but rather the smart automation of basic assignments such as "birthrights", while the sensitive ones keep a manual process.

See the [Automate Assignments](../../../user-guide/optimize/assignment-automation) topic for additional information about the assignment automation.

## Offboarding

The offboarding process doesn't necessarily mean the deletion of the resource from the identity repository because, for legal and/or security purposes, the company may need to be able to access a person's history in the company for a certain time, even after their departure.

This is why the departure triggers the **removal of all entitlements** for the departing identity. Hence, Identity Manager knows all the past and present entitlements of any identity.

## **period of validity**

The joining and leaving of an identity are materialized by the identity's **period of validity**. This way, the resource is valid from the start date until the end date.

These start and end dates can be configured to be different from the actual start and end dates of the user's contract in the company.

These dates should then be part of entity types' properties (for example as `StartDate` and `EndDate`), in order to be used in [Record Section](../../../integration-guide/toolkit/xml-configuration/provisioning/recordsection) and [Context Rule](../../../integration-guide/toolkit/xml-configuration/provisioning/contextrule).

![Identities - Validity Period](/images/identitymanager/integration-guide/identity-management/joiners-movers-leavers/on-offboarding/validityperiod.webp)

At the start date, the resource is created and a few entitlements are assigned to the identity.

Between the start and end dates, the identity is part of all of Identity Manager's calculations (role model, etc.).

At the end date, all the entitlements previously assigned to the identity are removed.

After the end date and until its explicit deletion, the resource is still in the identity repository, but it is not part of any calculation anymore.

Keeping track of former employees usually helps solve issues involving orphan accounts.

A resource is deleted either via a resource-deletion workflow, or via the synchronization of HR files if the user was removed from HR lists.

