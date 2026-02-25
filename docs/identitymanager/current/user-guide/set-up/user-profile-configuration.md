---
title: "Configure a User Profile"
description: "Configure a User Profile"
sidebar_position: 50
---

# Configure a User Profile

How to tweak the [References: Permissions](../../integration-guide/content/integration-guide/profiles-permissions/permissions) for actions **within** Identity Manager, for a set of basic [Assigned Profile](../../integration-guide/toolkit/xml-configuration/access-control/assignedprofile).

## Overview

All the permissions for accessing items and performing actions in Identity Manager are managed by assigning profiles to users and permissions to profiles.

![Schema - Profile Assignment](/images/identitymanager/user-guide/set-up/user-profile-configuration/profiles_schema.webp)

> For example, access to user lists with personal data is usually restricted to HR staff, and the
> modification of personal data would be restricted to HR managers.

We define here a permission as an entitlement **within** Identity Manager.

Permissions can be about:

- **administration**, which gives access to [Administrate](../../user-guide/administrate) actions,
accessible in the ****administration**** section on the home page;
- **directory**, which gives access to users' data (with several available levels of access), and also
any other data accessible in the ****directory**** section on the home page;
- **workflows**, which gives access to actions for users' lifecycle (onboarding-movement-offboarding),
through the **workflows** provided by Identity Manager **within** the ****directory**** pages;
- **reports**, which gives access to Identity Manager's predefined **reports** about workforce. See the
[Generate **reports**](../../user-guide/administrate/reporting) topic for additional information.
- **notifications**, which enables notification reception when specific **workflows** are launched.

Netwrix Identity Manager (formerly Usercube) recommends creating and using the following profiles:

- `Administrator` for requesting entitlements, performing potential additional role reviews, and
updating user data, the role model and the settings;
- `Helpdesk` for requesting entitlements and updating user data only, not for updating the role
model or other settings;
- `HR` for managing internal users, i.e. creating, updating and deleting them;
- `Manager` for requesting their teams' entitlements and managing their external users, like
contractors;
- `RoleOfficer` for reviewing and approving roles;
- `User` for basic viewing of user and organizational information.

A user can have up to 10 assigned profiles.

The goal here is to create profiles and link specific permissions to the profiles, in order to build a set of typical profiles that will later be assigned to users. See the [Assign Users a Profile](../../user-guide/set-up/user-profile-assignment) topic for additional information. Instead of assigning permissions one by one to users, you will assign them sets of permissions (i.e. profiles).

### Responsibility scopes

Each permission can be assigned a responsibility scope, which represents the scope of action of users with said permission.

> For example, managers can be assigned the `View Requests` and `Manage Accounts` permissions, but
> only for the teams in which they have the manager title. In this case they will handle the
> entitlement requests **within** the team they manage, having their scope of responsibility defined as
> their team. It means that the manager cannot see or do anything outside the identities included in
> their team.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the IGA project.

 | Input | Output | 
 | --- | --- | 
 | [Create the Workforce Repository](../../user-guide/set-up/initial-identities-loading) (required) | User profiles | 

## Configure a User Profile

Configure a user profile by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **General** >
**Profiles** in the left menu.

    ![Home - Configuration](/images/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. Check whether the profile to configure is part of the provided list. If not, create it by
clicking on the addition button at the top right and fill in the fields.

    ![Addition Icon](/images/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![New Profile](/images/identitymanager/user-guide/set-up/user-profile-configuration/profiles_creation_v602.webp)

    - `Identifier`: must be unique among profiles and without any whitespace.
    - `Name`: will be displayed in the UI to identify the profile.

Click on **Create**.

3. Access the page for profile configuration by clicking on **Workforce** > **Profiles &
Permissions** in the left menu.
4. Follow Identity Manager's instructions for assigning permissions to the profile by clicking on
the appropriate permissions, one by one, selecting if needed their responsibility scope.

    ![Profile Configuration Example](/images/identitymanager/user-guide/set-up/user-profile-configuration/profiles_example_v603.webp)

5. Click on **Save** at the top of the page.

    ![Save Icon](/images/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Profile Configuration

Before you can see the profile in action, it needs to be assigned to a user.

See the [Assign Users a Profile](../../user-guide/set-up/user-profile-assignment) topic for additional information.

## Next Steps

Once user profiles are configured, integrators can start configuring onboarding **workflows**. See the [Create the Workforce Repository](../../user-guide/set-up/initial-identities-loading) topic for additional information.

