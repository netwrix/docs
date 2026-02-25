---
title: "How to Implement a New System"
description: "How to Implement a New System"
sidebar_position: 30
---

# How to Implement a New System

How to add a new system to the solution.

## Overview

When connecting Identity Manager to a new system, several process paths can be taken according to
your strategy. There is no option fundamentally better than the others, your decision must depend on
your needs.

The **option A** leads quickly to the implementation in production environment, i.e. a new
application in Identity Manager's scope. With this, you can
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/user-guide/administrate/orphan-unused-account-review/index.md),
[Provision](/docs/identitymanager/6.2/user-guide/administrate/provisioning/index.md) the AD,
[Reconcile a Property](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md),
and [Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example the list of profiles
assigned to users.

The **option B** takes more time as it goes through the creation of the role model based on the
system's entitlements, but it leads to even more gain as you can also
[Reconcile a Role](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/index.md),
[Perform Access Certification](/docs/identitymanager/6.2/user-guide/administrate/access-certification/index.md)access
certification and
[Request Entitlement Assignment](/docs/identitymanager/6.2/user-guide/administrate/manual-assignment-request/index.md), and also
[Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example the list of assigned single
roles.

The option B is more complicated and time-consuming than the option A, but leads to more gain. Be
aware that you can go through the process options simultaneously.

![Process Schema - How to Implement a New System](/images/identitymanager/user-guide/global-process/howto-newsystem/globalprocess_schemaconnectsyst.webp)

## Process Details

### Common starting steps

1. [Connect to a Managed System](/docs/identitymanager/6.2/user-guide/set-up/connect-system/index.md): create the appropriate
   connector with its connections and entity types.
2. [Synchronize Data](/docs/identitymanager/6.2/user-guide/set-up/synchronization/index.md) into Identity Manager.

    Based on this, you can [Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example
    the list of resources in the system. A few predefined reports are available from the start, you
    can generate any report from this list as soon as it makes sense according to the integration
    progress.

3. [Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) in order to classify them
   according to their intent, and correlate these resources with their owners.
4. [Create a Provisioning Rule](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/index.md) to write to the
   system in order to update the resources' properties directly in the system.
5. Adjust the rules by
   [Reconcile a Property](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md)
   resources, i.e. analyze the differences spotted between the reality of resources' properties and
   those computed by the previously established rules. Especially, verify that accounts are
   correlated to the right owners and that their properties have the right values.

    Either the integrator handles the customization of the rules and the review of non-conforming
    resources, or they can assign an application administrator profile to a given user to perform
    it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Identity Manager to an external system, two process options are available according
to your needs: either aim directly to the implementation in production environment, or first build
the role model in order to enable more administration activities. Both options can be started
simultaneously.

### Option A: Straight to production implementation

Go directly to the common final steps (step 8).

### Option B: First build the role model

6. [Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md) for
   applications managed by the system.
7. [Automate Assignments](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/index.md) if needed: use Role
   Mining to create single role rules in bulk; adjust the generated rules individually and manually.

### Common final steps

8. Perform tests.
9. Deploy the pre-production configuration to the production environment.
