---
title: "Resources"
description: "Resources"
sidebar_position: 20
---

# Resources

Identity Manager stores managed systems' data and identities as resources within a resource repository.

## Resource Repository

The source of truth for the engine is the data from external sources that are copied into Identity Manager's database. This persisted set of data, called _resources_, is stored in the **Resource Repository**. See the [Upward Data Synchronization](../integration-guide/synchronization/upward-data-sync) topic for additional information.

The repository keeps a full history of all the changes performed to the resources. It is hence possible to retrieve a resource's value at a given date or what has been changed over a period.

Resources can be added to the resource repository from one of four ways:

1. Input data directly from the applicative configuration. This is useful for a very limited amount
of data. This is very often used for debugging or testing, less often in production. See the [Toolkit for XML Configuration](../integration-guide/toolkit) topic for additional information.
2. Input data from the UI. This requires configuring the UI and is the most straightforward way for
a reasonable amount of data. This is often used to input reference data that is not in the managed systems, or for which no source of truth exists.
3. Load data from a CSV file. This is how data from managed systems are loaded most of the time. See
the [Upward Data Synchronization](../integration-guide/synchronization/upward-data-sync) topic for additional information. Any reference of identity data can be loaded into Identity Manager using CSV files. This is useful if the target organization already possess such files or can produce them easily.
4. Compute new resources from existing resources. This can be achieved by using the provisioning
tools in a very specific way that is called _internal_ provisioning. This is often used to create the reference data from managed systems.
5. Insert data directly in the `UR_Resource` table from SQL queries. This is not very safe and
requires a great deal of expertise.

When using methods 1. and 5., make sure to choose, for new resources, an `Id` that is not yet used for another resource in the database. Only use positive integer `Id`s for resource-identity (that is, the resource to which you plan on assigning roles). See the [Entitlement Assignment](../integration-guide/role-assignment/assignments-of-entitlements) topic for additional information.

Resources need a model: the entity model.

