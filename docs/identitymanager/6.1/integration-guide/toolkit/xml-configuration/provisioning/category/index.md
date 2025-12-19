---
title: "Category"
description: "Category"
sidebar_position: 20
---

# Category

A category is a classification of Composite Roles, Single Roles or/and
[Resource Types](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).
It can be used to group multiple roles of the same context.

## Examples

The following example declares a new category called "Shares - Public".

```

    <Category Policy="Default" Identifier="Shares - Public" DisplayName_L1="Shares - Public" />

```

## Properties

| Property                         | Details                                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description_L1 optional          | **Type** String **Description** Describe this category in detail.                                                                                                     |
| DisplayName_L1 required          | **Type** String **Description** Display name of the category in language 1 (up to 16).                                                                                |
| Identifier required              | **Type** String **Description** Unique identifier of the category.                                                                                                    |
| IsCollapsed default value: false | **Type** Boolean **Description** Defines if the category must be collapsed by default in the permission list of a resource (View Permissions popup and roles basket). |
| Parent optional                  | **Type** Int64 **Description** Represents the parent category definition.                                                                                             |
| Policy required                  | **Type** Int64 **Description** Identifier of the policy that the category is part of.                                                                                 |
