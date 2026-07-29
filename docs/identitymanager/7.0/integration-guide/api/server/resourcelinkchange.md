---
title: "ResourceLinkChange"
sidebar_position: 13
---

### /api/ResourceLinkChange/\{type\}/\{property\}/\{id\}

#### Get
##### Summary:

Returns all the resource link changes according to the provided job instance id.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| property | Navigation property identifier. | True |  |  |
| id | Identifier of the job instance. | True |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| PageSize | Page size. | False |  |  |
| ContinuationToken | ContinuationToken returned by previous page request. | False |  |  |
| changeOperationType | Filter on change operation type. | False |  | ChangeOperation |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The resource link changes. | List of ResourceLinkChange |

