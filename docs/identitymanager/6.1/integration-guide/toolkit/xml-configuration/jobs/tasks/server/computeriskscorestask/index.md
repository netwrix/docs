---
title: "ComputeRiskScoresTask"
description: "ComputeRiskScoresTask"
sidebar_position: 30
---

# ComputeRiskScoresTask

Update risk score with the risk settings.

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Dirty default value: false | **Type** Boolean **Description** Initiate use only dirty resources.                |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
