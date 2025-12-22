---
title: "Inheriting permissions"
description: "Inheriting permissions"
sidebar_position: 10
---

# Inheriting permissions

## What is inherited in organisational structures?

If you open the permissions for an organisational structure, the currently configured permissions
will be visible. In the following example, there are a total of four roles with varying permissions
for the organisational structure.

![inheriting permission](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/inheriting_permissions_1-en.webp)

## Relevant rights

The following options are required to view "**inherit**" and "**overwrite**" icons.

### User right

- Can overwrite permissions
- Can inherit permissions

The two highlighted options are now available on the ribbon.

- **Inherit**: This means that all of the configurations defined in the current permissions mask are
  inherited by underlying organisational structures when it is saved. The permissions are added to
  existing ones
- **Overwrite**: This means that all of the configurations defined are applied to underlying
  organisational structures when it is saved. The previous permissions are lost.

Both mechanisms are protected by a confirmation prompt. If both "inherit" and also "overwrite" are
selected, "overwrite" is considered the overriding function.

:::warning
Both mechanisms are not protected by user rights. The **authorize** right for the
organisational structure is required to activate the inheritance or overwrite functions.

:::
