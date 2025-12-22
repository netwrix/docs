---
title: "ProvisioningPolicy"
description: "ProvisioningPolicy"
sidebar_position: 80
---

# ProvisioningPolicy

### /api/ProvisioningPolicy/AssignedCompositeRole

#### Get

##### Summary:

Returns all the assigned composite roles according to the provided query.

##### Parameters:

| Name                | Description                                                                       | Required | Type | Reference |
| ------------------- | --------------------------------------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.                                         | False    |      |           |
| Path                | Represents the permission path.                                                   | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                                               | False    |      |           |
| QueryBinding        | Defines the query binding.                                                        | False    |      |           |
| PageSize            | Page size.                                                                        | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request.                              | False    |      |           |
| forExecution        | If true, return only the items for which the user has the right to do the action. | False    |      |           |
| api-version         | The requested API version                                                         | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The assigned composite role list. |           |

#### Post

##### Summary:

Creates an assigned composite role.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                         | Reference |
| ---- | --------------------------------------------------- | --------- |
| 200  | The result of the assigned composite role creation. |           |

### /api/ProvisioningPolicy/AssignedCompositeRole/`{id}`

#### Get

##### Summary:

Returns an assigned composite role corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                | Required | Type | Reference |
| ------------------- | ------------------------------------------ | -------- | ---- | --------- |
| id                  | Identifier of the assigned composite role. | True     |      |           |
| squery              | Query compliant to the API query grammar.  | False    |      |           |
| Path                | Represents the permission path.            | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.        | False    |      |           |
| QueryBinding        | Defines the query binding.                 | False    |      |           |
| api-version         | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                  | Reference |
| ---- | ---------------------------- | --------- |
| 200  | The assigned composite role. |           |

#### Put

##### Summary:

Updates an assigned composite role.

##### Parameters:

| Name        | Description                                          | Required | Type | Reference |
| ----------- | ---------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned composite role to update. | True     |      |           |
| api-version | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                                       | Reference |
| ---- | ------------------------------------------------- | --------- |
| 200  | The result of the assigned composite role update. |           |

#### Delete

##### Summary:

Deletes an assigned composite role.

##### Parameters:

| Name        | Description                                          | Required | Type | Reference |
| ----------- | ---------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned composite role to delete. | True     |      |           |
| api-version | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                                       | Reference |
| ---- | ------------------------------------------------- | --------- |
| 200  | The result of the assigned composite role delete. |           |

### /api/ProvisioningPolicy/AssignedResourceBinary

#### Get

##### Summary:

Returns all the assigned resource binarys according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| getCurrentValues    |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The assigned resource binary list. |           |

#### Post

##### Summary:

Creates an assigned resource binary.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                          | Reference |
| ---- | ---------------------------------------------------- | --------- |
| 200  | The result of the assigned resource binary creation. |           |

### /api/ProvisioningPolicy/AssignedResourceBinary/`{id}`

#### Get

##### Summary:

Returns an assigned resource binary corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                 | Required | Type | Reference |
| ------------------- | ------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned resource binary. | True     |      |           |
| squery              | Query compliant to the API query grammar.   | False    |      |           |
| Path                | Represents the permission path.             | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.         | False    |      |           |
| QueryBinding        | Defines the query binding.                  | False    |      |           |
| api-version         | The requested API version                   | True     |      |           |

##### Responses:

| Code | Description                   | Reference |
| ---- | ----------------------------- | --------- |
| 200  | The assigned resource binary. |           |

#### Put

##### Summary:

Updates an assigned resource binary.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource binary to update. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the assigned resource binary update. |           |

#### Delete

##### Summary:

Deletes an assigned resource binary.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource binary to delete. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the assigned resource binary delete. |           |

### /api/ProvisioningPolicy/AssignedResourceNavigation

#### Get

##### Summary:

Returns all the assigned resource navigations according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| getCurrentValues    |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The assigned resource navigation list. |           |

#### Post

##### Summary:

Creates an assigned resource navigation.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                              | Reference |
| ---- | -------------------------------------------------------- | --------- |
| 200  | The result of the assigned resource navigation creation. |           |

### /api/ProvisioningPolicy/AssignedResourceNavigation/`{id}`

#### Get

##### Summary:

Returns an assigned resource navigation corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                     | Required | Type | Reference |
| ------------------- | ----------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned resource navigation. | True     |      |           |
| squery              | Query compliant to the API query grammar.       | False    |      |           |
| Path                | Represents the permission path.                 | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.             | False    |      |           |
| QueryBinding        | Defines the query binding.                      | False    |      |           |
| api-version         | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The assigned resource navigation. |           |

#### Put

##### Summary:

Updates an assigned resource navigation.

##### Parameters:

| Name        | Description                                               | Required | Type | Reference |
| ----------- | --------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource navigation to update. | True     |      |           |
| api-version | The requested API version                                 | True     |      |           |

##### Responses:

| Code | Description                                            | Reference |
| ---- | ------------------------------------------------------ | --------- |
| 200  | The result of the assigned resource navigation update. |           |

#### Delete

##### Summary:

Deletes an assigned resource navigation.

##### Parameters:

| Name        | Description                                               | Required | Type | Reference |
| ----------- | --------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource navigation to delete. | True     |      |           |
| api-version | The requested API version                                 | True     |      |           |

##### Responses:

| Code | Description                                            | Reference |
| ---- | ------------------------------------------------------ | --------- |
| 200  | The result of the assigned resource navigation delete. |           |

### /api/ProvisioningPolicy/AssignedResourceScalar

#### Get

##### Summary:

Returns all the assigned resource scalars according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| getCurrentValues    |                                                      | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The assigned resource scalar list. |           |

#### Post

##### Summary:

Creates an assigned resource scalar.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                          | Reference |
| ---- | ---------------------------------------------------- | --------- |
| 200  | The result of the assigned resource scalar creation. |           |

### /api/ProvisioningPolicy/AssignedResourceScalar/`{id}`

#### Get

##### Summary:

Returns an assigned resource scalar corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                 | Required | Type | Reference |
| ------------------- | ------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned resource scalar. | True     |      |           |
| squery              | Query compliant to the API query grammar.   | False    |      |           |
| Path                | Represents the permission path.             | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.         | False    |      |           |
| QueryBinding        | Defines the query binding.                  | False    |      |           |
| api-version         | The requested API version                   | True     |      |           |

##### Responses:

| Code | Description                   | Reference |
| ---- | ----------------------------- | --------- |
| 200  | The assigned resource scalar. |           |

#### Put

##### Summary:

Updates an assigned resource scalar.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource scalar to update. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the assigned resource scalar update. |           |

#### Delete

##### Summary:

Deletes an assigned resource scalar.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource scalar to delete. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the assigned resource scalar delete. |           |

### /api/ProvisioningPolicy/AssignedResourceType

#### Get

##### Summary:

Returns all the assigned resource types according to the provided query.

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

| Code | Description                      | Reference |
| ---- | -------------------------------- | --------- |
| 200  | The assigned resource type list. |           |

#### Post

##### Summary:

Creates an assigned resource type.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the assigned resource type creation. |           |

### /api/ProvisioningPolicy/AssignedResourceType/`{id}`

#### Get

##### Summary:

Returns an assigned resource type corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned resource type. | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                 | Reference |
| ---- | --------------------------- | --------- |
| 200  | The assigned resource type. |           |

#### Put

##### Summary:

Updates an assigned resource type.

##### Parameters:

| Name        | Description                                         | Required | Type | Reference |
| ----------- | --------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource type to update. | True     |      |           |
| api-version | The requested API version                           | True     |      |           |

##### Responses:

| Code | Description                                      | Reference |
| ---- | ------------------------------------------------ | --------- |
| 200  | The result of the assigned resource type update. |           |

#### Delete

##### Summary:

Deletes an assigned resource type.

##### Parameters:

| Name        | Description                                         | Required | Type | Reference |
| ----------- | --------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned resource type to delete. | True     |      |           |
| api-version | The requested API version                           | True     |      |           |

##### Responses:

| Code | Description                                      | Reference |
| ---- | ------------------------------------------------ | --------- |
| 200  | The result of the assigned resource type delete. |           |

### /api/ProvisioningPolicy/AssignedSingleRole

#### Get

##### Summary:

Returns all the assigned single roles according to the provided query.

##### Parameters:

| Name                | Description                                                                       | Required | Type | Reference |
| ------------------- | --------------------------------------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.                                         | False    |      |           |
| Path                | Represents the permission path.                                                   | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                                               | False    |      |           |
| QueryBinding        | Defines the query binding.                                                        | False    |      |           |
| PageSize            | Page size.                                                                        | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request.                              | False    |      |           |
| forExecution        | If true, return only the items for which the user has the right to do the action. | False    |      |           |
| api-version         | The requested API version                                                         | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The assigned single role list. |           |

#### Post

##### Summary:

Creates an assigned single role.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                      | Reference |
| ---- | ------------------------------------------------ | --------- |
| 200  | The result of the assigned single role creation. |           |

### /api/ProvisioningPolicy/AssignedSingleRole/`{id}`

#### Get

##### Summary:

Returns an assigned single role corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned single role.   | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The assigned single role. |           |

#### Put

##### Summary:

Updates an assigned single role.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned single role to update. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the assigned single role update. |           |

#### Delete

##### Summary:

Deletes an assigned single role.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned single role to delete. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the assigned single role delete. |           |

### /api/ProvisioningPolicy/Category

#### Get

##### Summary:

Returns all the categories according to the provided query.

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
| 200  | The category list. |           |

#### Post

##### Summary:

Creates a category.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The result of the category creation. |           |

### /api/ProvisioningPolicy/Category/`{id}`

#### Get

##### Summary:

Returns a category corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the category.               | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The category. |           |

#### Put

##### Summary:

Updates a category.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the category to update. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the category update. |           |

#### Delete

##### Summary:

Deletes a category.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the category to delete. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the category delete. |           |

### /api/ProvisioningPolicy/CompositeRole

#### Get

##### Summary:

Returns all the composite roles according to the provided query.

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

| Code | Description              | Reference |
| ---- | ------------------------ | --------- |
| 200  | The composite role list. |           |

#### Post

##### Summary:

Creates a composite role.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the composite role creation. |           |

### /api/ProvisioningPolicy/CompositeRole/`{id}`

#### Get

##### Summary:

Returns a composite role corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the composite role.         | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description         | Reference |
| ---- | ------------------- | --------- |
| 200  | The composite role. |           |

#### Put

##### Summary:

Updates a composite role.

##### Parameters:

| Name        | Description                                 | Required | Type | Reference |
| ----------- | ------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the composite role to update. | True     |      |           |
| api-version | The requested API version                   | True     |      |           |

##### Responses:

| Code | Description                              | Reference |
| ---- | ---------------------------------------- | --------- |
| 200  | The result of the composite role update. |           |

#### Delete

##### Summary:

Deletes a composite role.

##### Parameters:

| Name        | Description                                 | Required | Type | Reference |
| ----------- | ------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the composite role to delete. | True     |      |           |
| api-version | The requested API version                   | True     |      |           |

##### Responses:

| Code | Description                              | Reference |
| ---- | ---------------------------------------- | --------- |
| 200  | The result of the composite role delete. |           |

### /api/ProvisioningPolicy/CompositeRoleRule

#### Get

##### Summary:

Returns all the composite role rules according to the provided query.

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

| Code | Description                   | Reference |
| ---- | ----------------------------- | --------- |
| 200  | The composite role rule list. |           |

#### Post

##### Summary:

Creates a composite role rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                     | Reference |
| ---- | ----------------------------------------------- | --------- |
| 200  | The result of the composite role rule creation. |           |

### /api/ProvisioningPolicy/CompositeRoleRule/`{id}`

#### Get

##### Summary:

Returns a composite role rule corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the composite role rule.    | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description              | Reference |
| ---- | ------------------------ | --------- |
| 200  | The composite role rule. |           |

#### Put

##### Summary:

Updates a composite role rule.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the composite role rule to update. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the composite role rule update. |           |

#### Delete

##### Summary:

Deletes a composite role rule.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the composite role rule to delete. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the composite role rule delete. |           |

### /api/ProvisioningPolicy/ContextRule

#### Get

##### Summary:

Returns all the context rules according to the provided query.

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
| 200  | The context rule list. |           |

#### Post

##### Summary:

Creates a context rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                              | Reference |
| ---- | ---------------------------------------- | --------- |
| 200  | The result of the context rule creation. |           |

### /api/ProvisioningPolicy/ContextRule/`{id}`

#### Get

##### Summary:

Returns a context rule corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the context rule.           | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description       | Reference |
| ---- | ----------------- | --------- |
| 200  | The context rule. |           |

#### Put

##### Summary:

Updates a context rule.

##### Parameters:

| Name        | Description                               | Required | Type | Reference |
| ----------- | ----------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the context rule to update. | True     |      |           |
| api-version | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The result of the context rule update. |           |

#### Delete

##### Summary:

Deletes a context rule.

##### Parameters:

| Name        | Description                               | Required | Type | Reference |
| ----------- | ----------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the context rule to delete. | True     |      |           |
| api-version | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The result of the context rule delete. |           |

### /api/ProvisioningPolicy/IdentifiedRisk

#### Get

##### Summary:

Returns all the identified risks according to the provided query.

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
| 200  | The identified risks list. |           |

### /api/ProvisioningPolicy/MiningRule

#### Get

##### Summary:

Returns all the context rules according to the provided query.

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
| 200  | The context rule list. |           |

#### Post

##### Summary:

Creates a context rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                              | Reference |
| ---- | ---------------------------------------- | --------- |
| 200  | The result of the context rule creation. |           |

### /api/ProvisioningPolicy/MiningRule/`{id}`

#### Get

##### Summary:

Returns a context rule corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the context rule.           | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description       | Reference |
| ---- | ----------------- | --------- |
| 200  | The context rule. |           |

#### Delete

##### Summary:

Deletes a context rule.

##### Parameters:

| Name        | Description                               | Required | Type | Reference |
| ----------- | ----------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the context rule to delete. | True     |      |           |
| api-version | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The result of the context rule delete. |           |

### /api/ProvisioningPolicy/PendingApprovalRule

#### Get

##### Summary:

Returns all the Pending Approval rules according to the provided query.

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
| 200  | The Pending Approval rule list. |           |

#### Post

##### Summary:

Creates a Pending Approval rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                       | Reference |
| ---- | ------------------------------------------------- | --------- |
| 200  | The result of the Pending Approval rule creation. |           |

### /api/ProvisioningPolicy/PendingApprovalRule/`{id}`

#### Get

##### Summary:

Returns a Pending Approval rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the Pending Approval rule.  | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The Pending Approval rule. |           |

#### Put

##### Summary:

Updates a Pending Approval rule.

##### Parameters:

| Name        | Description                                        | Required | Type | Reference |
| ----------- | -------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the Pending Approval rule to update. | True     |      |           |
| api-version | The requested API version                          | True     |      |           |

##### Responses:

| Code | Description                                     | Reference |
| ---- | ----------------------------------------------- | --------- |
| 200  | The result of the Pending Approval rule update. |           |

#### Delete

##### Summary:

Deletes a Pending Approval rule.

##### Parameters:

| Name        | Description                                        | Required | Type | Reference |
| ----------- | -------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the Pending Approval rule to delete. | True     |      |           |
| api-version | The requested API version                          | True     |      |           |

##### Responses:

| Code | Description                                     | Reference |
| ---- | ----------------------------------------------- | --------- |
| 200  | The result of the Pending Approval rule delete. |           |

### /api/ProvisioningPolicy/Policy

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

#### Post

##### Summary:

Creates a policy.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the policy creation. |           |

### /api/ProvisioningPolicy/Policy/`{id}`

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

#### Put

##### Summary:

Updates a policy.

##### Parameters:

| Name        | Description                         | Required | Type | Reference |
| ----------- | ----------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the policy to update. | True     |      |           |
| api-version | The requested API version           | True     |      |           |

##### Responses:

| Code | Description                      | Reference |
| ---- | -------------------------------- | --------- |
| 200  | The result of the policy update. |           |

#### Delete

##### Summary:

Deletes a policy.

##### Parameters:

| Name        | Description                         | Required | Type | Reference |
| ----------- | ----------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the policy to delete. | True     |      |           |
| api-version | The requested API version           | True     |      |           |

##### Responses:

| Code | Description                      | Reference |
| ---- | -------------------------------- | --------- |
| 200  | The result of the policy delete. |           |

### /api/ProvisioningPolicy/Policy/ApproveSimulation/`{id}`

#### Put

##### Summary:

Approves the simulation policies and applies modifications to all elements related to the policy.

##### Parameters:

| Name        | Description                                                       | Required | Type | Reference |
| ----------- | ----------------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the base policy to which the simulation is applied. | True     |      |           |
| api-version | The requested API version                                         | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the policy simulation approval. |           |

### /api/ProvisioningPolicy/Policy/CancelSimulation/`{id}`

#### Put

##### Summary:

Cancels the simulation policies and reverts modifications to all elements related to the policy.

##### Parameters:

| Name        | Description                                                       | Required | Type | Reference |
| ----------- | ----------------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the base policy to which the simulation is applied. | True     |      |           |
| api-version | The requested API version                                         | True     |      |           |

##### Responses:

| Code | Description                                       | Reference |
| ---- | ------------------------------------------------- | --------- |
| 200  | The result of the policy simulation cancellation. |           |

### /api/ProvisioningPolicy/PolicySimulation

#### Get

##### Summary:

Returns all the simulations according to the provided query.

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
| 200  | The simulations list. |           |

#### Post

##### Summary:

Creates a simulation with status "new".

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of simulation creation. |           |

### /api/ProvisioningPolicy/PolicySimulation/`{id}`

#### Get

##### Summary:

Returns the simulation matching the provided identifier and squery.

##### Parameters:

| Name                | Description                                | Required | Type | Reference |
| ------------------- | ------------------------------------------ | -------- | ---- | --------- |
| id                  | Identifier of the relevant simulation.     | True     |      |           |
| squery              | Squery compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.            | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.        | False    |      |           |
| QueryBinding        | Defines the query binding.                 | False    |      |           |
| api-version         | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description     | Reference |
| ---- | --------------- | --------- |
| 200  | The simulation. |           |

#### Put

##### Summary:

Starts a simulation, the status becomes "Running".

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| id          |                           | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                     | Reference |
| ---- | ------------------------------- | --------- |
| 200  | The result of simulation start. |           |

#### Delete

##### Summary:

Deletes a context rule.

##### Parameters:

| Name        | Description                               | Required | Type | Reference |
| ----------- | ----------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the context rule to delete. | True     |      |           |
| api-version | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The result of the context rule delete. |           |

### /api/ProvisioningPolicy/ResourceBinaryRule

#### Get

##### Summary:

Returns all the resource binary rules according to the provided query.

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

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The resource binary rule list. |           |

#### Post

##### Summary:

Creates a resource binary rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                      | Reference |
| ---- | ------------------------------------------------ | --------- |
| 200  | The result of the resource binary rule creation. |           |

### /api/ProvisioningPolicy/ResourceBinaryRule/`{id}`

#### Get

##### Summary:

Returns a resource binary rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource binary rule.   | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The resource binary rule. |           |

#### Put

##### Summary:

Updates a resource binary rule.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource binary rule to update. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the resource binary rule update. |           |

#### Delete

##### Summary:

Deletes a resource binary rule.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource binary rule to delete. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the resource binary rule delete. |           |

### /api/ProvisioningPolicy/ResourceClassificationRule

#### Get

##### Summary:

Returns all the resource classification rules according to the provided query.

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

| Code | Description                            | Reference |
| ---- | -------------------------------------- | --------- |
| 200  | The resource classification rule list. |           |

#### Post

##### Summary:

Creates a resource classification rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                              | Reference |
| ---- | -------------------------------------------------------- | --------- |
| 200  | The result of the resource classification rule creation. |           |

### /api/ProvisioningPolicy/ResourceClassificationRule/`{id}`

#### Get

##### Summary:

Returns a resource classification rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                     | Required | Type | Reference |
| ------------------- | ----------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource classification rule. | True     |      |           |
| squery              | Query compliant to the API query grammar.       | False    |      |           |
| Path                | Represents the permission path.                 | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.             | False    |      |           |
| QueryBinding        | Defines the query binding.                      | False    |      |           |
| api-version         | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The resource classification rule. |           |

#### Put

##### Summary:

Updates a resource classification rule.

##### Parameters:

| Name        | Description                                               | Required | Type | Reference |
| ----------- | --------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource classification rule to update. | True     |      |           |
| api-version | The requested API version                                 | True     |      |           |

##### Responses:

| Code | Description                                            | Reference |
| ---- | ------------------------------------------------------ | --------- |
| 200  | The result of the resource classification rule update. |           |

#### Delete

##### Summary:

Deletes a resource classification rule.

##### Parameters:

| Name        | Description                                               | Required | Type | Reference |
| ----------- | --------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource classification rule to delete. | True     |      |           |
| api-version | The requested API version                                 | True     |      |           |

##### Responses:

| Code | Description                                            | Reference |
| ---- | ------------------------------------------------------ | --------- |
| 200  | The result of the resource classification rule delete. |           |

### /api/ProvisioningPolicy/ResourceCorrelationRule

#### Get

##### Summary:

Returns all the resource correlation rules according to the provided query.

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

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The resource correlation rule list. |           |

#### Post

##### Summary:

Creates a resource correlation rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                           | Reference |
| ---- | ----------------------------------------------------- | --------- |
| 200  | The result of the resource correlation rule creation. |           |

### /api/ProvisioningPolicy/ResourceCorrelationRule/`{id}`

#### Get

##### Summary:

Returns a resource correlation rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                  | Required | Type | Reference |
| ------------------- | -------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource correlation rule. | True     |      |           |
| squery              | Query compliant to the API query grammar.    | False    |      |           |
| Path                | Represents the permission path.              | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.          | False    |      |           |
| QueryBinding        | Defines the query binding.                   | False    |      |           |
| api-version         | The requested API version                    | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The resource correlation rule. |           |

#### Put

##### Summary:

Updates a resource correlation rule.

##### Parameters:

| Name        | Description                                            | Required | Type | Reference |
| ----------- | ------------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource correlation rule to update. | True     |      |           |
| api-version | The requested API version                              | True     |      |           |

##### Responses:

| Code | Description                                         | Reference |
| ---- | --------------------------------------------------- | --------- |
| 200  | The result of the resource correlation rule update. |           |

#### Delete

##### Summary:

Deletes a resource correlation rule.

##### Parameters:

| Name        | Description                                            | Required | Type | Reference |
| ----------- | ------------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource correlation rule to delete. | True     |      |           |
| api-version | The requested API version                              | True     |      |           |

##### Responses:

| Code | Description                                         | Reference |
| ---- | --------------------------------------------------- | --------- |
| 200  | The result of the resource correlation rule delete. |           |

### /api/ProvisioningPolicy/ResourceNavigationRule

#### Get

##### Summary:

Returns all the resource navigation rules according to the provided query.

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

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The resource navigation rule list. |           |

#### Post

##### Summary:

Creates a resource navigation rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                          | Reference |
| ---- | ---------------------------------------------------- | --------- |
| 200  | The result of the resource navigation rule creation. |           |

### /api/ProvisioningPolicy/ResourceNavigationRule/`{id}`

#### Get

##### Summary:

Returns a resource navigation rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                 | Required | Type | Reference |
| ------------------- | ------------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource navigation rule. | True     |      |           |
| squery              | Query compliant to the API query grammar.   | False    |      |           |
| Path                | Represents the permission path.             | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.         | False    |      |           |
| QueryBinding        | Defines the query binding.                  | False    |      |           |
| api-version         | The requested API version                   | True     |      |           |

##### Responses:

| Code | Description                   | Reference |
| ---- | ----------------------------- | --------- |
| 200  | The resource navigation rule. |           |

#### Put

##### Summary:

Updates a resource navigation rule.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource navigation rule to update. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the resource navigation rule update. |           |

#### Delete

##### Summary:

Deletes a resource navigation rule.

##### Parameters:

| Name        | Description                                           | Required | Type | Reference |
| ----------- | ----------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource navigation rule to delete. | True     |      |           |
| api-version | The requested API version                             | True     |      |           |

##### Responses:

| Code | Description                                        | Reference |
| ---- | -------------------------------------------------- | --------- |
| 200  | The result of the resource navigation rule delete. |           |

### /api/ProvisioningPolicy/ResourceQueryRule

#### Get

##### Summary:

Returns all the resource query rules according to the provided query.

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

| Code | Description                   | Reference |
| ---- | ----------------------------- | --------- |
| 200  | The resource query rule list. |           |

#### Post

##### Summary:

Creates a resource query rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                     | Reference |
| ---- | ----------------------------------------------- | --------- |
| 200  | The result of the resource query rule creation. |           |

### /api/ProvisioningPolicy/ResourceQueryRule/`{id}`

#### Get

##### Summary:

Returns a resource query rule corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource query rule.    | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description              | Reference |
| ---- | ------------------------ | --------- |
| 200  | The resource query rule. |           |

#### Put

##### Summary:

Updates a resource query rule.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource query rule to update. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the resource query rule update. |           |

#### Delete

##### Summary:

Deletes a resource query rule.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource query rule to delete. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the resource query rule delete. |           |

### /api/ProvisioningPolicy/ResourceScalarRule

#### Get

##### Summary:

Returns all the resource scalar rules according to the provided query.

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

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The resource scalar rule list. |           |

#### Post

##### Summary:

Creates a resource scalar rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                      | Reference |
| ---- | ------------------------------------------------ | --------- |
| 200  | The result of the resource scalar rule creation. |           |

### /api/ProvisioningPolicy/ResourceScalarRule/`{id}`

#### Get

##### Summary:

Returns a resource scalar rule corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource scalar rule.   | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The resource scalar rule. |           |

#### Put

##### Summary:

Updates a resource scalar rule.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource scalar rule to update. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the resource scalar rule update. |           |

#### Delete

##### Summary:

Deletes a resource scalar rule.

##### Parameters:

| Name        | Description                                       | Required | Type | Reference |
| ----------- | ------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource scalar rule to delete. | True     |      |           |
| api-version | The requested API version                         | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the resource scalar rule delete. |           |

### /api/ProvisioningPolicy/ResourceType

#### Get

##### Summary:

Returns all the resource types according to the provided query.

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

| Code | Description             | Reference |
| ---- | ----------------------- | --------- |
| 200  | The resource type list. |           |

#### Post

##### Summary:

Creates a resource type.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                               | Reference |
| ---- | ----------------------------------------- | --------- |
| 200  | The result of the resource type creation. |           |

### /api/ProvisioningPolicy/ResourceType/`{id}`

#### Get

##### Summary:

Returns a resource type corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource type.          | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description        | Reference |
| ---- | ------------------ | --------- |
| 200  | The resource type. |           |

#### Put

##### Summary:

Updates a resource type.

##### Parameters:

| Name        | Description                                | Required | Type | Reference |
| ----------- | ------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource type to update. | True     |      |           |
| api-version | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the resource type update. |           |

#### Delete

##### Summary:

Deletes a resource type.

##### Parameters:

| Name        | Description                                | Required | Type | Reference |
| ----------- | ------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the resource type to delete. | True     |      |           |
| force       |                                            | False    |      |           |
| api-version | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the resource type delete. |           |

### /api/ProvisioningPolicy/ResourceTypeRule

#### Get

##### Summary:

Returns all the resource type rules according to the provided query.

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
| 200  | The resource type rule list. |           |

#### Post

##### Summary:

Creates a resource type rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the resource type rule creation. |           |

### /api/ProvisioningPolicy/ResourceTypeRule/`{id}`

#### Get

##### Summary:

Returns a resource type rule corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the resource type rule.     | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description             | Reference |
| ---- | ----------------------- | --------- |
| 200  | The resource type rule. |           |

#### Put

##### Summary:

Updates a resource type rule.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource type rule to update. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the resource type rule update. |           |

#### Delete

##### Summary:

Deletes a resource type rule.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the resource type rule to delete. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the resource type rule delete. |           |

### /api/ProvisioningPolicy/Risk

#### Get

##### Summary:

Returns all the risks according to the provided query.

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

| Code | Description    | Reference |
| ---- | -------------- | --------- |
| 200  | The risk list. |           |

#### Post

##### Summary:

Creates a risk.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                      | Reference |
| ---- | -------------------------------- | --------- |
| 200  | The result of the risk creation. |           |

### /api/ProvisioningPolicy/Risk/`{id}`

#### Get

##### Summary:

Returns a risk corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the risk.                   | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | The risk.   |           |

#### Put

##### Summary:

Updates a risk.

##### Parameters:

| Name        | Description                       | Required | Type | Reference |
| ----------- | --------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the risk to update. | True     |      |           |
| api-version | The requested API version         | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The result of the risk update. |           |

#### Delete

##### Summary:

Deletes a risk.

##### Parameters:

| Name        | Description                       | Required | Type | Reference |
| ----------- | --------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the risk to delete. | True     |      |           |
| api-version | The requested API version         | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The result of the risk delete. |           |

### /api/ProvisioningPolicy/RoleMapping

#### Get

##### Summary:

Returns all the risks according to the provided query.

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

| Code | Description    | Reference |
| ---- | -------------- | --------- |
| 200  | The risk list. |           |

#### Post

##### Summary:

Creates a risk.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                      | Reference |
| ---- | -------------------------------- | --------- |
| 200  | The result of the risk creation. |           |

### /api/ProvisioningPolicy/RoleMapping/`{id}`

#### Get

##### Summary:

Returns a risk corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the risk.                   | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | The risk.   |           |

#### Put

##### Summary:

Updates a risk.

##### Parameters:

| Name        | Description                       | Required | Type | Reference |
| ----------- | --------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the risk to update. | True     |      |           |
| api-version | The requested API version         | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The result of the risk update. |           |

#### Delete

##### Summary:

Deletes a risk.

##### Parameters:

| Name        | Description                       | Required | Type | Reference |
| ----------- | --------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the risk to delete. | True     |      |           |
| api-version | The requested API version         | True     |      |           |

##### Responses:

| Code | Description                    | Reference |
| ---- | ------------------------------ | --------- |
| 200  | The result of the risk delete. |           |

### /api/ProvisioningPolicy/SingleRole

#### Get

##### Summary:

Returns all the single roles according to the provided query.

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

### /api/ProvisioningPolicy/SingleRole/`{id}`

#### Get

##### Summary:

Returns a single role corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the single role.            | True     |      |           |
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

Updates a single role.

##### Parameters:

| Name        | Description                              | Required | Type | Reference |
| ----------- | ---------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the single role to update. | True     |      |           |
| api-version | The requested API version                | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | The result of the single role update. |           |

#### Delete

##### Summary:

Deletes a single role.

##### Parameters:

| Name        | Description                              | Required | Type | Reference |
| ----------- | ---------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the single role to delete. | True     |      |           |
| api-version | The requested API version                | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | The result of the single role delete. |           |

### /api/ProvisioningPolicy/SingleRoleRule

#### Get

##### Summary:

Returns all the single role rules according to the provided query.

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
| 200  | The single role rule list. |           |

#### Post

##### Summary:

Creates a single role rule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the single role rule creation. |           |

### /api/ProvisioningPolicy/SingleRoleRule/`{id}`

#### Get

##### Summary:

Returns a single role rule corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the single role rule.       | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The single role rule. |           |

#### Put

##### Summary:

Updates a single role rule.

##### Parameters:

| Name        | Description                                   | Required | Type | Reference |
| ----------- | --------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the single role rule to update. | True     |      |           |
| api-version | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the single role rule update. |           |

#### Delete

##### Summary:

Deletes a single role rule.

##### Parameters:

| Name        | Description                                   | Required | Type | Reference |
| ----------- | --------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the single role rule to delete. | True     |      |           |
| api-version | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the single role rule delete. |           |
