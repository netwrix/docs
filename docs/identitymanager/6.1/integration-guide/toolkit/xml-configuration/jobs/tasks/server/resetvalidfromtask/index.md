---
title: "ResetValidFromTask"
description: "ResetValidFromTask"
sidebar_position: 140
---

# ResetValidFromTask

Initialize historization tables by setting each entity's first record `ValidFrom` value to
0001-01-01 00:00:00.00.

## Examples

```

**<ResetValidFromTask Identifier="ResetValidFrom" DisplayName_L1="Initialize historization" />**

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |
