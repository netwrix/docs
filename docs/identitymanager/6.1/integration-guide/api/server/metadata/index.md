---
title: "Metadata"
description: "Metadata"
sidebar_position: 60
---

# Metadata

### /api/Metadata/Binding

#### Get

##### Summary:

Returns all the bindings according to the provided query.

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

| Code | Description       | Reference |
| ---- | ----------------- | --------- |
| 200  | The binding list. |           |

#### Post

##### Summary:

Creates a Binding.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The result of the binding creation. |           |

### /api/Metadata/Binding/`{id}`

#### Get

##### Summary:

Returns a binding corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the binding.                | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description  | Reference |
| ---- | ------------ | --------- |
| 200  | The binding. |           |

#### Put

##### Summary:

Updates a binding.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the binding to update. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the binding update. |           |

#### Delete

##### Summary:

Deletes a binding.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the binding to delete. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the binding delete. |           |

### /api/Metadata/BindingItem

#### Get

##### Summary:

Returns all the binding items according to the provided query.

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

| Code | Description            | Reference |
| ---- | ---------------------- | --------- |
| 200  | The binding item list. |           |

### /api/Metadata/BindingItem/`{id}`

#### Get

##### Summary:

Returns a binding item corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the binding item.           | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description       | Reference |
| ---- | ----------------- | --------- |
| 200  | The binding item. |           |

### /api/Metadata/Dimension

#### Get

##### Summary:

Returns all the dimensions according to the provided query.

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

| Code | Description         | Reference |
| ---- | ------------------- | --------- |
| 200  | The dimension list. |           |

#### Post

##### Summary:

Creates a dimension.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | The result of the dimension creation. |           |

### /api/Metadata/Dimension/`{id}`

#### Get

##### Summary:

Returns a dimension corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the dimension.              | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description    | Reference |
| ---- | -------------- | --------- |
| 200  | The dimension. |           |

#### Put

##### Summary:

Updates a dimension.

##### Parameters:

| Name        | Description                            | Required | Type | Reference |
| ----------- | -------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the dimension to update. | True     |      |           |
| api-version | The requested API version              | True     |      |           |

##### Responses:

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The result of the dimension update. |           |

#### Delete

##### Summary:

Deletes a dimension.

##### Parameters:

| Name        | Description                            | Required | Type | Reference |
| ----------- | -------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the dimension to delete. | True     |      |           |
| api-version | The requested API version              | True     |      |           |

##### Responses:

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The result of the dimension delete. |           |

### /api/Metadata/EntityAssociation

#### Get

##### Summary:

Returns all the entity associations according to the provided query.

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

| Code | Description                  | Reference |
| ---- | ---------------------------- | --------- |
| 200  | The entity association list. |           |

#### Post

##### Summary:

Creates a entity association.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the entity association creation. |           |

### /api/Metadata/EntityAssociation/`{id}`

#### Get

##### Summary:

Returns a entity association corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the entity association.     | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description             | Reference |
| ---- | ----------------------- | --------- |
| 200  | The entity association. |           |

#### Put

##### Summary:

Updates a entity association.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity association to update. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the entity association update. |           |

#### Delete

##### Summary:

Deletes a entity association.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity association to delete. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the entity association delete. |           |

### /api/Metadata/EntityProperty

#### Get

##### Summary:

Returns all the entity properties according to the provided query.

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

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The entity property list. |           |

#### Post

##### Summary:

Creates a entity property.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                 | Reference |
| ---- | ------------------------------------------- | --------- |
| 200  | The result of the entity property creation. |           |

### /api/Metadata/EntityProperty/`{id}`

#### Get

##### Summary:

Returns a entity property corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the entity property.        | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description          | Reference |
| ---- | -------------------- | --------- |
| 200  | The entity property. |           |

#### Put

##### Summary:

Updates a entity property.

##### Parameters:

| Name        | Description                                  | Required | Type | Reference |
| ----------- | -------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity property to update. | True     |      |           |
| api-version | The requested API version                    | True     |      |           |

##### Responses:

| Code | Description                               | Reference |
| ---- | ----------------------------------------- | --------- |
| 200  | The result of the entity property update. |           |

#### Delete

##### Summary:

Deletes a entity property.

##### Parameters:

| Name        | Description                                  | Required | Type | Reference |
| ----------- | -------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity property to delete. | True     |      |           |
| force       |                                              | False    |      |           |
| api-version | The requested API version                    | True     |      |           |

##### Responses:

| Code | Description                               | Reference |
| ---- | ----------------------------------------- | --------- |
| 200  | The result of the entity property delete. |           |

### /api/Metadata/EntityType

#### Get

##### Summary:

Returns all the entity types according to the provided query.

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

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The entity type list. |           |

#### Post

##### Summary:

Creates a entity type.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the entity type creation. |           |

### /api/Metadata/EntityType/`{id}`

#### Get

##### Summary:

Returns a entity type corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the entity type.            | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description      | Reference |
| ---- | ---------------- | --------- |
| 200  | The entity type. |           |

#### Put

##### Summary:

Updates a entity type.

##### Parameters:

| Name        | Description                              | Required | Type | Reference |
| ----------- | ---------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity type to update. | True     |      |           |
| api-version | The requested API version                | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | The result of the entity type update. |           |

#### Delete

##### Summary:

Deletes a entity type.

##### Parameters:

| Name        | Description                              | Required | Type | Reference |
| ----------- | ---------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the entity type to delete. | True     |      |           |
| force       |                                          | False    |      |           |
| api-version | The requested API version                | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | The result of the entity type delete. |           |

### /api/Metadata/Language

#### Get

##### Summary:

Returns all the languages.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The single role list. |           |

### /api/Metadata/Setting

#### Get

##### Summary:

Returns all the settings according to the provided query.

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

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The single role list. |           |

#### Post

##### Summary:

Creates a single role.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the single role creation. |           |

### /api/Metadata/Setting/`{id}`

#### Get

##### Summary:

Returns a setting corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the setting.                | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description      | Reference |
| ---- | ---------------- | --------- |
| 200  | The single role. |           |

#### Put

##### Summary:

Updates a setting.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the setting to update. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the setting update. |           |

#### Delete

##### Summary:

Deletes a setting.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the setting to delete. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the setting delete. |           |
