---
title: "Resource"
description: "Resource"
sidebar_position: 100
---

# Resource

### /api/Resource/`{type}`

#### Get

##### Summary:

Returns all the resources according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | True     |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                 | Reference |
| ---- | --------------------------- | --------- |
| 200  | The assigned resource list. |           |

#### Post

##### Summary:

Creates a resource.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.   | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The result of the resource creation. |           |

### /api/Resource/Incremental/`{type}`/`{date}`

#### Get

##### Summary:

Returns all the resources that have been modified (created, deleted, updated) after a given date.

Note: If no page size is specified, the default value of 1,000 is taken into consideration. Maximum
allowed value for the page size is of 10,000.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| date                | Date from which to get resources.                    | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | Resources modified from a given date. |           |

### /api/Resource/`{type}`/`{id}`

#### Get

##### Summary:

Returns a resource corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                   | True     |      |           |
| id                  | Identifier of the resource role.          | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The resource. |           |

#### Put

##### Summary:

Updates a resource.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.               | True     |      |           |
| id          | Identifier of the resource to update. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the resource update. |           |

#### Delete

##### Summary:

Deletes a resource.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.               | True     |      |           |
| id          | Identifier of the resource to delete. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the resource delete. |           |
