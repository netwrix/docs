---
title: "Create Database Views Task"
description: "Create Database Views Task"
sidebar_position: 20
---

# Create Database Views Task

Generates entity model SQL views in the Identity Manager database. All views are prefixed by `zz_`.
This tool deletes all views starting by `zz_` and creates views from the entity model described in
the running configuration.

For every **EntityType**, a matching SQL view is created from the UR_Resource table.

## Examples

```

**<CreateDatabaseViewsTask Identifier="Create_Database_Views" Agent="Local" OpenIdClient="Job" DisplayName_L1="Create Database Views"/>**

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |
