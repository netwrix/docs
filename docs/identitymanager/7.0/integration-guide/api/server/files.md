---
title: "Files"
sidebar_position: 4
---

### /files/Report/FromQuery/\{rootEntityType\}

#### Get
##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| rootEntityType |  | True |  |  |
| squery |  | False |  |  |
| format |  | False |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | OK |  |

### /files/Report/FromQueryId/\{reportQueryId\}

#### Get
##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| reportQueryId |  | True |  |  |
| format |  | False |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | OK |  |

### /files/ResourceFile/\{type\}/\{property\}/\{id\}

#### Get
##### Summary:

Returns a resource file.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| property | Entity type property. | True |  |  |
| tag | Defines a tag. | False |  |  |
| id | Identifier of the resource. | True |  |  |
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

### /api/files/ResourceFile/filename/\{type\}/\{property\}/\{id\}

#### Get
##### Summary:

Returns a resource file name.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| type | Entity type identifier. | True |  |  |
| property | Entity type property. | True |  |  |
| tag | Defines a tag. | False |  |  |
| id | Identifier of the resource. | True |  |  |
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

