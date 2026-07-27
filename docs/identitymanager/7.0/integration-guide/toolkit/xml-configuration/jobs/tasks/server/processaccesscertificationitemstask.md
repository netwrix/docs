---
title: "ProcessAccessCertificationItemsTask"
description: "Process decisions on access certification items."
sidebar_position: 13
---

Launch the deprovisioning of declined entitlement assignments for all AccessCertificationItems having a state of *PendingProcessing* (3). Once completed, the new state of all processed items is *Applied* (4).

## Examples
```xml
  <ProcessAccessCertificationItemsTask Identifier="ProcessAccessCertificationItems" DisplayName_L1="Process access certification items decisions"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |

