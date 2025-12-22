---
title: "AccessControlPermission"
description: "AccessControlPermission"
sidebar_position: 10
---

# AccessControlPermission

AccessControlPermission identifies the access permissions to a specific Identity Manager feature.

The permissions have a filesystem like structure. The **/** is the root permission. There can be
nested permissions like _/a/b/c_. Like for files, access rights can be inherited from the parent
permissions.

The available permissions are built automatically by the product. There are predefined permissions
for all the features provided with the product. The other permissions are generated from the
configured Entity Types, Workflows and Reports.

Each connected user has access to all the permissions from the Profile Rules he belongs to.

## Properties

| Property                              | Details                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| BlockInheritance default value: false | **Type** Boolean **Description** Disable the possibility to inherit descendants permissions. |
| Identifier required                   | **Type** String **Description** Identifier of the permission.                                |
