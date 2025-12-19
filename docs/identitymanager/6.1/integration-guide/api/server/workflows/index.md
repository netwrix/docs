---
title: "Workflows"
description: "Workflows"
sidebar_position: 160
---

# Workflows

### /api/Workflows/Activity

#### Get

##### Summary:

Returns all the activities according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description        | Reference |
| ---- | ------------------ | --------- |
| 200  | The activity list. |           |

#### Post

##### Summary:

Creates an activity.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The result of the activity creation. |           |

### /api/Workflows/Activity/`{id}`

#### Get

##### Summary:

Returns an activity corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the activity.               | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The activity. |           |

#### Put

##### Summary:

Updates an activity.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the activity to update. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the activity update. |           |

#### Delete

##### Summary:

Deletes a activity.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the activity to delete. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the activity delete. |           |

### /api/Workflows/ActivityInstance

#### Get

##### Summary:

Returns all the activity instances according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                 | Reference |
| ---- | --------------------------- | --------- |
| 200  | The activity instance list. |           |

### /api/Workflows/ActivityInstance/`{id}`

#### Get

##### Summary:

Returns the activity instances corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the ActivityInstance.       | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description             | Reference |
| ---- | ----------------------- | --------- |
| 200  | The activity instances. |           |

### /api/Workflows/ActivityTemplate

#### Get

##### Summary:

Returns all the activityTemplates according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The activityTemplate list. |           |

### /api/Workflows/ActivityTemplate/`{id}`

#### Get

##### Summary:

Returns a activityTemplate corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the activityTemplate.       | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The activityTemplate. |           |

### /api/Workflows/ActivityTemplateState

#### Get

##### Summary:

Returns all the activityTemplateStates according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                     | Reference |
| ---- | ------------------------------- | --------- |
| 200  | The activityTemplateState list. |           |

### /api/Workflows/ActivityTemplateState/`{id}`

#### Get

##### Summary:

Returns a activityTemplateState corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the activityTemplateState.  | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The activityTemplateState. |           |

### /api/Workflows/ActivityTemplateTransition

#### Get

##### Summary:

Returns all the activityTemplateTransitions according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The activityTemplateTransition list. |           |

### /api/Workflows/ActivityTemplateTransition/`{id}`

#### Get

##### Summary:

Returns a activityTemplateTransition corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                   | Required | Type | Reference |
| ------------------- | --------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the activityTemplateTransition. | True     |      |           |
| squery              | Query compliant to the API query grammar.     | False    |      |           |
| Path                | Represents the permission path.               | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.           | False    |      |           |
| QueryBinding        | Defines the query binding.                    | False    |      |           |
| api-version         | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                     | Reference |
| ---- | ------------------------------- | --------- |
| 200  | The activityTemplateTransition. |           |

### /api/Workflows/Workflow

#### Get

##### Summary:

Returns all the workflows according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description        | Reference |
| ---- | ------------------ | --------- |
| 200  | The workflow list. |           |

#### Post

##### Summary:

Creates a workflow.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The result of the workflow creation. |           |

### /api/Workflows/Workflow/`{id}`

#### Get

##### Summary:

Returns a workflow corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the workflow.               | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The workflow. |           |

#### Put

##### Summary:

Updates a workflow.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the workflow to update. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the workflow update. |           |

#### Delete

##### Summary:

Deletes a workflow.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the workflow to delete. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the workflow delete. |           |

### /api/Workflows/WorkflowInstance

#### Get

##### Summary:

Returns all the activities according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The workflowInstance list. |           |

#### Post

##### Summary:

Starts a new workflow instance.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the workflowInstance creation. |           |

### /api/Workflows/WorkflowInstance/`{id}`

#### Get

##### Summary:

Returns a workflowInstance corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the workflowInstance.       | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The workflowInstance. |           |

#### Put

##### Summary:

Resume an running workflow instance.

##### Parameters:

| Name        | Description                                   | Required | Type | Reference |
| ----------- | --------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the workflowInstance to update. | True     |      |           |
| api-version | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the workflowInstance update. |           |

#### Delete

##### Summary:

Purges an aborted workflow instance.

##### Parameters:

| Name        | Description                                  | Required | Type | Reference |
| ----------- | -------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the workflowInstance to purge. | True     |      |           |
| api-version | The requested API version                    | True     |      |           |

##### Responses:

| Code | Description                               | Reference |
| ---- | ----------------------------------------- | --------- |
| 200  | The result of the workflowInstance purge. |           |
