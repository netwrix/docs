---
title: "Job"
description: "Job"
sidebar_position: 50
---

# Job

### /api/Job/Job/RunJob/`{id}`

#### Post

##### Summary:

Runs Job.

##### Parameters:

| Name        | Description                             | Required | Type | Reference                                                                               |
| ----------- | --------------------------------------- | -------- | ---- | --------------------------------------------------------------------------------------- |
| id          | Identifier of the Job to run automaton. | True     |      |                                                                                         |
| jobLogLevel | Override the serilog LogLevel.          | False    |      | [LogLevel](/docs/identitymanager/6.1/integration-guide/api/server/index.md) |
| api-version | The requested API version               | True     |      |                                                                                         |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the job to run automaton. |           |

### /api/Job/Job

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/Job/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/Job/Notification

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/JobInstance

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/JobInstance/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/JobStep

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/JobStep/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/Task

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/Task/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskDependOnTask

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskDependOnTask/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskDimension

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskDimension/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskEntityType

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskEntityType/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskInstance

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskInstance/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskResourceType

#### Get

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Post

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /api/Job/TaskResourceType/`{id}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| id                  |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Put

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

#### Delete

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |
