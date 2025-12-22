---
title: "ResourceLink"
description: "ResourceLink"
sidebar_position: 130
---

# ResourceLink

### /api/ResourceLink/Incremental/`{type}`/`{property}`/`{date}`

#### Get

##### Summary:

Returns all the non optimized resource navigation links that have been modified (created, deleted,
updated) after a given date.

Note: If no page size is specified, the default value of 1,000 is taken into consideration. Maximum
allowed value for the page size is of 10,000.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| property            | Identifier of non optimized navigation property.     | True     |      |           |
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
