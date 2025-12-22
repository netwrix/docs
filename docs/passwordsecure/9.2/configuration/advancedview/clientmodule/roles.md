---
title: "Roles"
description: "Roles"
sidebar_position: 50
---

# Roles

## What are roles?

Each employee in a company is ultimately a member of a department and / or part of a particular
function level. These departments or groups are mapped within Netwrix Password Secure using the role
concept. The authorizations can be configured and inherited in a role-based manner. The **Roles
module** should only be made available to administrators. Accordingly, it is recommended to limit
the visibility of the role management. It is also possible to delegate the management of departments
or separate areas completely to third parties via the role concept. The authorization concept
ensures that users are only granted access to those roles to which they are entitled.

![Roles module](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/roles/roles_1-en.webp)

## Relevant rights

The following options are required.

### User right

- Can add new roles
- Display role module

## Roles in focus

The configuration of roles is the basis for the authorization concept. The permissions for data
could also be set at a user level. However, the use of roles can dramatically reduce the
administrative workload, and it helps to keep an overview. In addition to the authorizations for
data, user rights are also mapped in the best case via roles.

![Permissions meaning for Roles](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/roles/roles_2-en.webp)

Roles are the central objects within Netwrix Password Secure. They form the indispensable bridge
between users and authorizations of any kind.

## Creating and granting permissions for new roles

If you are in the **roles module**, the process for creating new roles is the same as for
[Creating new passwords](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/passwords/creating_new_passwords.md). Roles can be created via the
ribbon and also via the context menu that is accessed using the right mouse button.

![creating new role](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/roles/roles_3-en.webp)

## Planning phase

Just like the [Organisational structure](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md),
you should also familiarize yourself with the intended role concepts. The mapping of structures
present in a company is the starting point for the success of Netwrix Password Secure. You should
design the roles in Netwrix Password Secure only once a detailed design has been drawn up, and all
the requirements of all project participants have been met.

## Why are there no groups?

Netwrix Password Secure enforces the avoidance of unnecessary structures through the role concept. A
group-in-group nesting is not supported – and is not necessary at all. The resultant increase in
performance as well as increased overview promotes efficiency and effectiveness. The elegant
interplay of organisational structures, roles, and granular filter options can cover all
customer-specific scenarios.

NOTE: This architecture makes nesting of roles obsolete.

## Overview of members for a role

As well as being able to view the **members** in the permissions dialogue, a list of all members for
a role is already made available in the
[Reading pane](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/reading_pane.md). All of the other users with
permissions but without membership of the role are not taken into account.

![role overview](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/roles/roles_4-en.webp)

NOTE: The roles module is based on the
[Roles module](/docs/passwordsecure/9.2/configuration/webapplication/functionalscope/roles_module.md) of the Web
Application. Both modules have a different scope and design but are almost identical to use.
