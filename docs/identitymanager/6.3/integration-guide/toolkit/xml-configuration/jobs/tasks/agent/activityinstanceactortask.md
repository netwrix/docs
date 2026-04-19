---
title: "ActivityInstanceActorTask"
description: "Update the Actors for the workflows instances"
sidebar_position: 1
---

Update all the actors of the workflows instances.

:::warning
An activity Instance can have at most 20 actors.
:::

## Examples
```xml
<ActivityInstanceActorTask Agent="Local" OpenIdClient="Job" DisplayName_L1="Update Actors for workflows instances"/>
```


## Properties

|Property|Details|
|---|---|
| Agent required | **Type:** String **Description:** Identifier of the agent on which the job will be launched.**Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| OpenIdClient required | **Type:** String **Description:** Connection client for the task. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |

