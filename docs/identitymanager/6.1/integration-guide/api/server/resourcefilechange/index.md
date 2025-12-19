---
title: "ResourceFileChange"
description: "ResourceFileChange"
sidebar_position: 120
---

# ResourceFileChange

### /api/ResourceFileChange/`{type}`/`{id}`

#### Get

##### Summary:

Returns all the resource file changes according to the provided job instance id.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference                                                                                      |
| ------------------- | ---------------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------------- |
| type                | Entity type identifier.                              | True     |      |                                                                                                |
| id                  | Identifier of the job instance.                      | True     |      |                                                                                                |
| Path                | Represents the permission path.                      | False    |      |                                                                                                |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |                                                                                                |
| QueryBinding        | Defines the query binding.                           | False    |      |                                                                                                |
| PageSize            | Page size.                                           | False    |      |                                                                                                |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |                                                                                                |
| changeOperationType | Filter on change operation type.                     | False    |      | [ChangeOperation](/docs/identitymanager/6.1/integration-guide/api/server/index.md) |
| api-version         | The requested API version                            | True     |      |                                                                                                |

##### Responses:

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The resource file change. |           |
