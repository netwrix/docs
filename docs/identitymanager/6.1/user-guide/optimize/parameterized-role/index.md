---
title: "Configure a Parameterized Role"
description: "Configure a Parameterized Role"
sidebar_position: 80
---

# Configure a Parameterized Role

How to reduce the number of roles in the model by configuring roles with parameters.

## Overview

The assignment of a role to a user gives them an entitlement, usually a group membership, thanks to
a navigation rule.
[See more details on roles and navigation rules](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md).

![Simple Role](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedroles_simplerole.webp)

To enable the assignment of all existing entitlements, the role model usually contains numerous
roles.

> For example, the SAP role can be given with slight differences according to the users'
> subsidiaries:
>
> ![Role Matrix](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedroles_numerousroles.webp)

In order to reduce the number of roles, we can configure roles with parameters by inserting a
criterion in the navigation rules. Thus, instead of having as many roles as entitlements (left on
the schema), we can have way fewer roles (right on the schema).

![With/Without Parameters](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedroles_parameters.webp)

> In the previous example, with a parameter on the subsidiary, the number of roles would be divided
> by three.

By extension, a composite role that assigns a parameterized single role is parameterized too.

This way, when assigning a parameterized role, a popup window is displayed where the parameter must
be specified.

The same thing goes with type rules instead of navigation rules when we want to assign resource
types instead of entitlements.

## Configure a Parameterized Role

Configure a parameterized role by proceeding as follows:

1. Create in XML a
   [dimension](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md)
   corresponding to the parameter that will affect the role.

    > For example, let's consider that we have many roles available on three different time slots: 8
    > hours a day, 12 hours a day, or 24 hours a day. We create a dimension for these time slots.
    >
    > ```
    >
    > <Dimension Identifier="TimeSlot" DisplayName_L1="Time Slot" EntityType="Access_TimeSlot" ColumnMapping="10" IsExcludedFromRoleMining="true" />
    >
    > ```

2. In the UI,
   [create a single role](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/index.md#create-a-single-role).

    > For example:
    >
    > ![Example - Role](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedrole_examplerole_v603.webp)

3. [Create one navigation rule](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/index.md)
   linked to the role for each available value of the parameter.

    > Here we have three navigation rules, one for each distinct time slot (dimension A). For
    > example:
    >
    > ![Example - Rule](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedrole_examplerule_v603.webp)

    Make sure that the corresponding dimension is specified in the right `DisplayEntityType` in XML
    to be displayed in the UI.

4. Go back to the roles page to edit the single role from step 2, if needing to set the parameter
   required.

    > For example:
    >
    > ![Example - Role Parameter Required](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedrole_exampleroleparameter_v603.webp)

5. If you want Usercube to provide suggestions to set the parameter's value, then make sure that
   users'
   [context rule](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/contextrule/index.md)
   specifies the dimension.

    > For example, with the `Title` dimension:
    >
    > ```
    >
    > <ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" B0="Directory_UserRecord:Organization" B1="Directory_UserRecord:Title" B2="Directory_UserRecord:Site" B3="Directory_UserRecord:Site.Region.Country" B4="Directory_UserRecord:UserType.Category" ... Policy="Default" SourceEntityType="Directory_User" />
    >
    > ```

## Verify the Parameterized Role

In order to verify the process,
[request manually](/docs/identitymanager/6.1/user-guide/administrate/manual-assignment-request/index.md)
the parameterized role for a test user. Some additional pop-ups are displayed to set a value for the
role's parameter.

> In our example:
>
> ![Example - Step 1](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep1_v603.webp)
>
> ![Example - Step 2](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep2_v603.webp)

If the dimension is specified in the users' context rule, then Usercube will provide suggestions.

> For example, concerning the `Title` dimension mentioned above:
>
> ![Example - Suggestion](/images/identitymanager/6.1/user-guide/optimize/parameterized-role/parameterizedrole_examplerolesuggestion_v603.webp)
