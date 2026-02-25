---
title: "How to Start"
description: "How to Start"
sidebar_position: 10
---

# How to Start

How to start integrating Identity Manager with your own needs.

## Overview

When starting with Identity Manager, several process paths can be taken according to your strategy.
There is no option fundamentally better than the others, your decision must depend on your needs.

The **option 1** leads quickly to identity management, i.e. users' on-boarding/movement/off-boarding
without needing a periodic synchronization. See the
[Update Identity Data](/docs/identitymanager/6.2/user-guide/maintain/identity-data-modification/index.md) topic for additional
information.

The **option 2A** takes more time as it requires the installation of an agent on your network in
order to connect Identity Manager to the system and use the AD's data, but it leads to more gain as
you can also
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/user-guide/administrate/orphan-unused-account-review/index.md),
[Provision](/docs/identitymanager/6.2/user-guide/administrate/provisioning/index.md) the AD,
[Reconcile a Property](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md)properties,
and [Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example the list of profiles
assigned to users.

The **option 2B** takes even more time as it goes through the creation of the role model based on
the system's entitlements, but it leads to even more gain as you can also
[Reconcile a Role](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/index.md),
[Perform Access Certification](/docs/identitymanager/6.2/user-guide/administrate/access-certification/index.md) and
[Request Entitlement Assignment](/docs/identitymanager/6.2/user-guide/administrate/manual-assignment-request/index.md), and also
[Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example the list of assigned single
roles.

The options 2A and 2B are more complicated and time-consuming than the option 1, but lead to more
gain. Be aware that you can go through the process options simultaneously.

Netwrix Identity Manager (formerly Usercube) recommends the option 1 to be able to start IGA without
waiting for the installation of an agent in your network, and go through the option 2
simultaneously.

![Process Schema - How to Start with Usercube](/images/identitymanager/user-guide/global-process/howto-start/globalprocess_schemastart.webp)

## Process Details

### Common starting steps

1. [Install the Development Environment](/docs/identitymanager/6.2/user-guide/set-up/development-environment-installation/index.md).
2. [Create the Workforce Repository](/docs/identitymanager/6.2/user-guide/set-up/initial-identities-loading/index.md): configure
   the generation of unique properties; load workforce identities to Identity Manager; adjust the
   data model.

After these first steps, two process options are available according to your needs: either aim
directly to identity management and the opening of Identity Manager to end-users, or first connect
Identity Manager to an external system in order to enable more administration activities. Both
options can be started simultaneously.

### Option 1: Based on the workforce directory

Starting with the workforce directory does not require the installation of a local agent.

Go directly to the common final steps (step 10).

### Option 2: Based on an external system

Starting with an external system requires the installation of a local agent.

3. Connect Identity Manager to the system by creating a connector. See the
   [Connect to a Managed System](/docs/identitymanager/6.2/user-guide/set-up/connect-system/index.md) topic for additional
   information.
4. [Synchronize Data](/docs/identitymanager/6.2/user-guide/set-up/synchronization/index.md)the system's data into Identity
   Manager.

    Based on this, you can [Generate Reports](/docs/identitymanager/6.2/user-guide/administrate/reporting/index.md), for example
    the list of resources in the system. A few predefined reports are available from the start, you
    can generate any report from this list as soon as it makes sense according to the integration
    progress.

5. [Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) in order to classify them
   according to their intent, and correlate these resources with their owners.
6. [Create a Provisioning Rule](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/index.md) to write to the
   system in order to update the resources' properties directly in the system.
7. Adjust the rules by reconciling resources, i.e. analyze the differences spotted between the
   reality of resources' properties and those computed by the previously established rules.
   Especially, verify that accounts are correlated to the right owners and that their properties
   have the right values. See the
   [Reconcile a Property](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md)
   topic for additional information.

    Either the integrator handles the customization of the rules and the review of non-conforming
    resources, or they can assign an application administrator profile to a given user to perform
    it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Identity Manager to an external system, two process options are available according
to your needs: either aim directly to identity management and the opening of Identity Manager to
end-users, or first build the role model in order to enable more administration activities. Both
options can be started simultaneously.

### Option 2A: Straight to identity management

Go directly to the common final steps (step 10).

### Option 2B: First build the role model

8. [Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md) for
   applications managed by the system.
9. [Automate Role Assignments](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/automate-role-assignment/index.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

10. Adjust HR workflows to keep the workforce directory updated (only in XML configuration).
11. Define the permissions for your user profiles. See the
    [Configure a User Profile](/docs/identitymanager/6.2/user-guide/set-up/user-profile-configuration/index.md) topic for
    additional information.
12. Define the authentication mode by configuring `SelectUserByIdentityQueryHandlerSetting` (only in
    XML configuration), and [Assign Users a Profile](/docs/identitymanager/6.2/user-guide/set-up/user-profile-assignment/index.md)
    to open the application to end-users.
