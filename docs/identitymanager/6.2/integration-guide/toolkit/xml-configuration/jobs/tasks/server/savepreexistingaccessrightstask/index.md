---
title: "Save Pre-Existing Access Rights Task"
description: "Save Pre-Existing Access Rights Task"
sidebar_position: 150
---

# Save Pre-Existing Access Rights Task

During an initial installation of Identity Manager, data normally provided by Identity Manager or
through a derogation in the User Interface is already present in the application system. Loaded
during initialization, this data has the automatic flag and is all with provisioningstate to blocked
or to pending. This Tool updates the data that are in this case and that are in the present or in
the past. This update affects the following properties:

- Workflowstate
- consolidatedworkflowfoundstate
- consolidatedworkflowblockedstate
- consolidatedworkflowblockedcount
- consolidatedworkflowfoundcount
- provisioningState

## Examples

```

**<SavePreExistingAccessRightsTask DisplayName_L1="Pre Existing Assignment Default" Identifier="Pre_Existing_Assignment_Default" />**

```

## Properties

| Property                               | Details                                                                                                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                       |
| AssignedResourceNavigationSQL optional | **Type** String **Description** The sql to find all AssignedResourceNavigation for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Database provider                   |
| AssignedResourceScalarSQL optional     | **Type** String **Description** The sql to find all AssignedResourceScalar for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: SQL Command to execute                  |
| AssignedResourceTypeSQL optional       | **Type** String **Description** The sql to find all AssignedResourceType for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Database provider assembly qualified name |
| Identifier optional                    | **Type** String **Description** Unique identifier of the task.                                                                                                                           |
