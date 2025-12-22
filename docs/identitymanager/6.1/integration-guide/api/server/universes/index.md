---
title: "Universes"
description: "Universes"
sidebar_position: 150
---

# Universes

### /api/Universes/PowerBI/Model

#### Get

##### Summary:

PowerBI model.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Model.      |           |

### /api/Universes/PowerBI/Data/`{universeIdentifier}`/`{tableIdentifier}`

#### Get

##### Summary:

PowerBI table data.

##### Parameters:

| Name               | Description                                          | Required | Type | Reference |
| ------------------ | ---------------------------------------------------- | -------- | ---- | --------- |
| universeIdentifier |                                                      | True     |      |           |
| tableIdentifier    |                                                      | True     |      |           |
| PageSize           | Page size.                                           | False    |      |           |
| ContinuationToken  | ContinuationToken returned by previous page request. | False    |      |           |
| api-version        | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Data.       |           |

### /api/Universes/Universe

#### Get

##### Summary:

Returns all the policies according to the provided query.

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

| Code | Description      | Reference |
| ---- | ---------------- | --------- |
| 200  | The policy list. |           |

### /api/Universes/Universe/`{id}`

#### Get

##### Summary:

Returns a policy corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the policy.                 | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | The policy. |           |
