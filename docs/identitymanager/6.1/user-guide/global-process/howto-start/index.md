---
title: "How to Start"
description: "How to Start"
sidebar_position: 10
---

# How to Start

How to start integrating Usercube with your own needs.

## Overview

When starting with Usercube, several process paths can be taken according to your strategy. There is
no option fundamentally better than the others, your decision must depend on your needs.

The **option 1** leads quickly to
[identity management](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/index.md),
i.e. users' on-boarding/movement/off-boarding without needing a periodic synchronization.

The **option 2A** takes more time as it requires the installation of an agent on your network in
order to connect Usercube to the system and use the AD's data, but it leads to more gain as you can
also
[review orphan and unused accounts](/docs/identitymanager/6.1/user-guide/administrate/orphan-unused-account-review/index.md),
[provision the AD](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md),
[reconcile properties](/docs/identitymanager/6.1/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md),
and
[generate reports](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md),
for example the list of profiles assigned to users.

The **option 2B** takes even more time as it goes through the creation of the role model based on
the system's entitlements, but it leads to even more gain as you can also
[reconcile roles](/docs/identitymanager/6.1/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/index.md),
perform
[access certification](/docs/identitymanager/6.1/user-guide/administrate/access-certification/index.md)
and
[request entitlement assignment](/docs/identitymanager/6.1/user-guide/administrate/manual-assignment-request/index.md),
and also
[generate reports](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md),
for example the list of assigned single roles.

The options 2A and 2B are more complicated and time-consuming than the option 1, but lead to more
gain. Be aware that you can go through the process options simultaneously.

NETWRIX recommends the option 1 to be able to start IGA without waiting for the installation of an
agent in your network, and go through the option 2 simultaneously.

![Process Schema - How to Start with Usercube](/images/identitymanager/6.1/user-guide/global-process/howto-start/globalprocess_schemastart.webp)

## Process Details

### Common starting steps

1. [Install the development environment](/docs/identitymanager/6.1/user-guide/set-up/development-environment-installation/index.md).
2. [Create the workforce directory](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md):
   configure the generation of unique properties; load workforce identities to Usercube; adjust the
   data model.

After these first steps, two process options are available according to your needs: either aim
directly to identity management and the opening of Usercube to end-users, or first connect Usercube
to an external system in order to enable more administration activities. Both options can be started
simultaneously.

### Option 1: Based on the workforce directory

Starting with the workforce directory does not require the installation of a local agent.

Go directly to the common final steps (step 10).

### Option 2: Based on an external system

Starting with an external system requires the installation of a local agent.

3. [Connect Usercube to the system by creating a connector](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md).
4. [Synchronize the system's data](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md)
   into Usercube.

    Based on this, you can
    [generate reports](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md),
    for example the list of resources in the system. A few predefined reports are available from the
    start, you can generate any report from this list as soon as it makes sense according to the
    integration progress.

5. [Categorize resources](/docs/identitymanager/6.1/user-guide/set-up/categorization/index.md)
   in order to classify them according to their intent, and correlate these resources with their
   owners.
6. [Create provisioning rules](/docs/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/index.md)
   to write to the system in order to update the resources' properties directly in the system.
7. [Adjust the rules by reconciling resources](/docs/identitymanager/6.1/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md),
   i.e. analyze the differences spotted between the reality of resources' properties and those
   computed by the previously established rules. Especially, verify that accounts are correlated to
   the right owners and that their properties have the right values.

    Either the integrator handles the customization of the rules and the review of non-conforming
    resources, or they can assign an application administrator profile to a given user to perform
    it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Usercube to an external system, two process options are available according to your
needs: either aim directly to identity management and the opening of Usercube to end-users, or first
build the role model in order to enable more administration activities. Both options can be started
simultaneously.

### Option 2A: Straight to identity management

Go directly to the common final steps (step 10).

### Option 2B: First build the role model

8. [Create roles in the role catalog](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md)
   for applications managed by the system.
9. [Automate role assignments](/docs/identitymanager/6.1/user-guide/optimize/assignment-automation/index.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

10. Adjust HR workflows to keep the workforce directory updated (only in XML configuration).
11. [Define the permissions for your user profiles](/docs/identitymanager/6.1/user-guide/set-up/user-profile-configuration/index.md).
12. Define the authentication mode by configuring `SelectUserByIdentityQueryHandlerSetting` (only in
    XML configuration), and
    [assign profiles to users](/docs/identitymanager/6.1/user-guide/set-up/user-profile-assignment/index.md)
    to open the application to end-users.
