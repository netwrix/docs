---
title: "AccessControl"
description: "AccessControl"
sidebar_position: 20
---

# AccessControl

### /api/AccessControl/AccessControlEntry

#### Get

##### Summary:

Returns all the accessControlEntrys according to the provided query.

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
| 200  | The accessControlEntry list. |           |

#### Post

##### Summary:

Creates a accessControlEntry.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                    | Reference |
| ---- | ---------------------------------------------- | --------- |
| 200  | The result of the accessControlEntry creation. |           |

### /api/AccessControl/AccessControlEntry/`{id}`

#### Get

##### Summary:

Returns a accessControlEntry corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the accessControlEntry.     | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description             | Reference |
| ---- | ----------------------- | --------- |
| 200  | The accessControlEntry. |           |

#### Put

##### Summary:

Updates a accessControlEntry.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the accessControlEntry to update. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the accessControlEntry update. |           |

#### Delete

##### Summary:

Deletes a accessControlEntry.

##### Parameters:

| Name        | Description                                     | Required | Type | Reference |
| ----------- | ----------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the accessControlEntry to delete. | True     |      |           |
| api-version | The requested API version                       | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the accessControlEntry delete. |           |

### /api/AccessControl/AccessControlFilter

#### Get

##### Summary:

Returns all the accessControlFilters according to the provided query.

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
| 200  | The accessControlFilter list. |           |

#### Post

##### Summary:

Creates a accessControlFilter.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                     | Reference |
| ---- | ----------------------------------------------- | --------- |
| 200  | The result of the accessControlFilter creation. |           |

### /api/AccessControl/AccessControlFilter/`{id}`

#### Get

##### Summary:

Returns a accessControlFilter corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the accessControlFilter.    | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description              | Reference |
| ---- | ------------------------ | --------- |
| 200  | The accessControlFilter. |           |

#### Put

##### Summary:

Updates a accessControlFilter.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the accessControlFilter to update. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the accessControlFilter update. |           |

#### Delete

##### Summary:

Deletes a accessControlFilter.

##### Parameters:

| Name        | Description                                      | Required | Type | Reference |
| ----------- | ------------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the accessControlFilter to delete. | True     |      |           |
| api-version | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the accessControlFilter delete. |           |

### /api/AccessControl/AccessControlPermission

#### Get

##### Summary:

Returns all the accessControlPermissions according to the provided query.

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

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The accessControlPermission list. |           |

### /api/AccessControl/AccessControlPermission/`{id}`

#### Get

##### Summary:

Returns a accessControlPermission corresponding to the provided identifier and its information
according to the provided query.

##### Parameters:

| Name                | Description                                | Required | Type | Reference |
| ------------------- | ------------------------------------------ | -------- | ---- | --------- |
| id                  | Identifier of the accessControlPermission. | True     |      |           |
| squery              | Query compliant to the API query grammar.  | False    |      |           |
| Path                | Represents the permission path.            | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.        | False    |      |           |
| QueryBinding        | Defines the query binding.                 | False    |      |           |
| api-version         | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                  | Reference |
| ---- | ---------------------------- | --------- |
| 200  | The accessControlPermission. |           |

### /api/AccessControl/AccessControlRule

#### Get

##### Summary:

Returns all the accessControlRules according to the provided query.

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
| 200  | The accessControlRule list. |           |

#### Post

##### Summary:

Creates a accessControlRule.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                   | Reference |
| ---- | --------------------------------------------- | --------- |
| 200  | The result of the accessControlRule creation. |           |

### /api/AccessControl/AccessControlRule/`{id}`

#### Get

##### Summary:

Returns a accessControlRule corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the accessControlRule.      | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description            | Reference |
| ---- | ---------------------- | --------- |
| 200  | The accessControlRule. |           |

#### Put

##### Summary:

Updates a accessControlRule.

##### Parameters:

| Name        | Description                                    | Required | Type | Reference |
| ----------- | ---------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the accessControlRule to update. | True     |      |           |
| api-version | The requested API version                      | True     |      |           |

##### Responses:

| Code | Description                                 | Reference |
| ---- | ------------------------------------------- | --------- |
| 200  | The result of the accessControlRule update. |           |

#### Delete

##### Summary:

Deletes a accessControlRule.

##### Parameters:

| Name        | Description                                    | Required | Type | Reference |
| ----------- | ---------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the accessControlRule to delete. | True     |      |           |
| api-version | The requested API version                      | True     |      |           |

##### Responses:

| Code | Description                                 | Reference |
| ---- | ------------------------------------------- | --------- |
| 200  | The result of the accessControlRule delete. |           |

### /api/AccessControl/AssignedProfile

#### Get

##### Summary:

Returns all the assigned profiles according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The assigned profile list. |           |

#### Post

##### Summary:

Creates an assigned profile.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                  | Reference |
| ---- | -------------------------------------------- | --------- |
| 200  | The result of the assigned profile creation. |           |

### /api/AccessControl/AssignedProfile/`{id}`

#### Get

##### Summary:

Returns an assigned profile corresponding to the provided identifier and its information according
to the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the assigned profile.       | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description           | Reference |
| ---- | --------------------- | --------- |
| 200  | The assigned profile. |           |

#### Put

##### Summary:

Updates an assigned profile.

##### Parameters:

| Name        | Description                                   | Required | Type | Reference |
| ----------- | --------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned profile to update. | True     |      |           |
| api-version | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the assigned profile update. |           |

#### Delete

##### Summary:

Deletes an assigned profile.

##### Parameters:

| Name        | Description                                   | Required | Type | Reference |
| ----------- | --------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the assigned profile to delete. | True     |      |           |
| api-version | The requested API version                     | True     |      |           |

##### Responses:

| Code | Description                                | Reference |
| ---- | ------------------------------------------ | --------- |
| 200  | The result of the assigned profile delete. |           |

### /api/AccessControl/OpenIdClient

#### Get

##### Summary:

Returns all the openId clients according to the provided query.

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
| 200  | The clients list. |           |

#### Post

##### Summary:

Creates an openId client.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                               | Reference |
| ---- | ----------------------------------------- | --------- |
| 200  | The result of the openId client creation. |           |

### /api/AccessControl/OpenIdClient/`{id}`

#### Get

##### Summary:

Returns an openId client corresponding to the provided identifier and its information according to
the provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the openId client.          | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description         | Reference |
| ---- | ------------------- | --------- |
| 200  | The open id client. |           |

#### Put

##### Summary:

Updates an openId client.

##### Parameters:

| Name        | Description                                | Required | Type | Reference |
| ----------- | ------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the openId client to update. | True     |      |           |
| api-version | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the openId client update. |           |

#### Delete

##### Summary:

Deletes an openId client.

##### Parameters:

| Name        | Description                                | Required | Type | Reference |
| ----------- | ------------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the openId client to delete. | True     |      |           |
| api-version | The requested API version                  | True     |      |           |

##### Responses:

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The result of the openId client delete. |           |

### /api/AccessControl/Profile

#### Get

##### Summary:

Returns all the profiles according to the provided query.

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
| 200  | The profile list. |           |

#### Post

##### Summary:

Creates a profile.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The result of the profile creation. |           |

### /api/AccessControl/Profile/`{id}`

#### Get

##### Summary:

Returns a profile corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| id                  | Identifier of the profile.                | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description  | Reference |
| ---- | ------------ | --------- |
| 200  | The profile. |           |

#### Put

##### Summary:

Updates a profile.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the profile to update. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the profile update. |           |

#### Delete

##### Summary:

Deletes a profile.

##### Parameters:

| Name        | Description                          | Required | Type | Reference |
| ----------- | ------------------------------------ | -------- | ---- | --------- |
| id          | Identifier of the profile to delete. | True     |      |           |
| api-version | The requested API version            | True     |      |           |

##### Responses:

| Code | Description                       | Reference |
| ---- | --------------------------------- | --------- |
| 200  | The result of the profile delete. |           |
