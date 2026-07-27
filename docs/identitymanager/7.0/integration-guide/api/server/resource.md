---
title: "Resource"
sidebar_position: 10
---

### /api/Resource/\{type\}

#### Get
##### Summary:

Returns all the resources according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| squery | Query compliant to the API query grammar. | False |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| PageSize | Page size. | False |  |  |
| ContinuationToken | ContinuationToken returned by previous page request. | False |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The assigned composite role list. | List of UntypedResource |

#### Post
##### Summary:

Creates a resource.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the resource creation. | ResourceCreatedResult |

### /api/Resource/\{type\}/\{id\}

#### Get
##### Summary:

Returns a resource corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| id | Identifier of the resource role. | True |  |  |
| squery | Query compliant to the API query grammar. | False |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The resource. |  |

#### Put
##### Summary:

Updates a resource.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| id | Identifier of the resource to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the resource update. | ResourceUpdatedResult |

#### Delete
##### Summary:

Deletes a resource.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| id | Identifier of the resource to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the resource delete. | ResourceDeletedResult |

