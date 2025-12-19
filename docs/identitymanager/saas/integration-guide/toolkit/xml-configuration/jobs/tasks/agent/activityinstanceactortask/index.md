---
title: "Activity Instance Actor Task"
description: "Activity Instance Actor Task"
sidebar_position: 10
---

# Activity Instance Actor Task

Update all the actors of the workflows instances.

An activity Instance can have at most 20 actors.

## Examples

```

**<ActivityInstanceActorTask Agent="Local" OpenIdClient="Job" DisplayName_L1="Update Actors for workflows instances"/>**

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |
