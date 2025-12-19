---
title: "Files"
description: "Files"
sidebar_position: 40
---

# Files

### /files/Report/FromQuery/`{rootEntityType}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| rootEntityType      |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /files/Report/FromQueryId/`{reportQueryId}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| reportQueryId       |                                     | True     |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /files/ResourceFile/`{type}`/`{property}`/`{id}`

#### Get

##### Summary:

Returns a resource file.

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.             | True     |      |           |
| property            | Entity type property.               | True     |      |           |
| tag                 | Defines a tag.                      | False    |      |           |
| id                  | Identifier of the resource.         | True     |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The resource. |           |
