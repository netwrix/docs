---
title: "Define Navigation Properties"
description: "Define Navigation Properties"
sidebar_position: 40
---

# Define Navigation Properties

How to define the properties which describe the
[Entity Type](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
relationships to other entity types.

## Overview

Here you will learn to define navigation properties, which contain scalar values just like scalar
properties, but which are also linked to and point to other properties—from the same entity type or
to another entity type.
See the [Define Scalar Properties](/docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md) topic for additional
information.

> For example, `memberOf` can contain a list of groups, thus linking a user to groups, and a group
> to other groups. In the UI, `memberOf` is displayed just like scalar properties, but you can click
> its values to access each group in the list. Here for the AD entry `ADM Vidal Pierre`:
>
> ![Navigation Property - memberOf](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_memberof_v600.webp)
>
> Clicking on one of these groups will display the group’s properties, including the other side of
> the `memberOf` property—called `member`—which contains the list of users and groups who are
> members. Example: `SG_APP_RAY_0_LDAP_READLDSFEDE`:
>
> ![Navigation Property - member](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_member_v600.webp)

> As another example, a department is linked to a manager who is an existing user. The user
> identifier is used in the `Manager` property to create the link between department and manager. In
> the UI, `Manager` is displayed like scalar properties, but you can click it to access the
> manager’s page:
>
> ![Navigation Property - Manager](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_manager_v600.webp)
>
> Clicking the manager displays their properties, including the `Department` property, which points
> back to the managed department:
>
> ![Navigation Property - Managed Department](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_managerof_v600.webp)

Navigation properties can create a link:

- inside an entity type;
- between two entity types from the same connector;
- between two entity types from different connectors.

Inside Identity Manager, a navigation property has a flip side—one for each linked element.

For example, in AD:

- `member`: for groups (contains a list of users)
- `memberOf`: for users (contains a list of groups)

Some systems only expose one side.
For example, AD only exposes `member` on groups. Users don’t have `memberOf`.
But Identity Manager links both sides, translating the info to simulate bidirectionality.

When importing from AD, `member` updates Identity Manager's `member`, which then updates `memberOf`.

Most properties in Identity Manager are linked to those in the managed system so data can be
imported and stored correctly. These mappings are configured in Step 3 below.

If a property doesn’t exist in the source system, you can still create it using **+ Add a navigation
property**.
This is useful for storing internal-use data that the connected system can’t read or write.

**---**

## Define the Entity Type's Navigation Properties

Define navigation properties by following these steps:

1. Start by declaring an [Entity Type](/docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/index.md).
2. In the entity type's **Properties** section, click on the **Navigation Properties** tab.
3. Click **Map a navigation property** to display existing columns from the external source, then
   select the ones to use.
4. Fill in the information fields:

    ![Navigation Properties](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_navigationproperties_v602.webp)

    If you map a column from the source, the first line is for the source column, and the second is
    the new navigation property in Identity Manager (always in the entity type).

### Application Metadata Fields

- `Identifier`: Unique, no whitespace, must be C#-compatible.
  [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure)
- `Entity Type`: Always refers to the entity type of the second property.
- `Storage Indicator`: Describes the association:

    - **Mono-valued** (1:1 or many:1)
    - **Multi-valued** (1:many or many:many)

    Identity Manager can store up to 25 optimized mono-valued nav properties. Prioritize:

    1. Properties used in forms/search bars
    2. Properties used in expressions/role models
    3. Others

- `Name`: Displayed in the UI.

    **Conventions:**

    - Mono-valued → singular
    - Multi-valued → plural
    - Names/IDs cannot be "Id"

### External System Fields

- `Source`: Source connection for the data.

    - Auto-select from the mapped source
    - Choose from other entity types in the same connector
    - Use the search icon to select across connectors

- `Source Column`: Column where data comes from
- `Column Content`: Which attribute (e.g. `dn`, `id`) to use for matching resources

> Example: If the source column `manager` contains user `dn`s, select `dn` as source content.

> Common AD navigation properties:
> `Entries`, `assistant`, `assistantOf`, `manager`, `directReports`, `memberOf`, `member`,
> `parentdn`, `children`

**> ![AD Entity Type - Navigation Properties](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_examplead3_v603.webp)**

5. Click the gear icon to access advanced settings:

    ![Advanced Settings](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

    - `Icon`: Choose from [Microsoft icon set](https://uifabricicons.azurewebsites.net/)
    - **Source Expression**: Define using a property path or
      [expression](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md)

        > Example: Scalar `isUnused` created by combining `accountExpires` and `lastLogonTimestamp`
        >
        > ![Source Expression Example](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

    - `Flexible Comparison Expression`: Adds advanced search matching
    - `History Precision`: Set how often property history is recorded

        > Example: `lastLogonTimestamp` changes often. Without limiting historization, the database
        > fills quickly.
        > Set `History Precision` to 1 week (10080 min) to only record weekly changes.

Clicking **Continue** closes the window but **does not save** the configuration.

**---**

## Reload

After saving, a green banner reminds you to reload the schema.
It’s not necessary after every step—but is **required after the final step** to apply changes.

![Reload](/images/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button ensures updates appear in the menu links on the UI home page.
You’ll find it either in the banner or on the connector dashboard.

**---**

## Next Steps

Once the entity type is defined—with scalar properties, keys, and navigation properties—you can
[Set Resources' Display Names](/docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md).
