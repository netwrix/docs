---
title: "AccessControl"
sidebar_position: 2
---

### /api/AccessControl/AccessControlEntry

#### Get
##### Summary:

Returns all the accessControlEntrys according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The accessControlEntry list. | List of AccessControlEntry |

#### Post
##### Summary:

Creates a accessControlEntry.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlEntry creation. | AccessControlEntryCreatedResult |

### /api/AccessControl/AccessControlEntry/\{id\}

#### Get
##### Summary:

Returns a accessControlEntry corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlEntry. | True |  |  |
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
| 200 | The accessControlEntry. | AccessControlEntry |

#### Put
##### Summary:

Updates a accessControlEntry.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlEntry to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlEntry update. | AccessControlEntryUpdatedResult |

#### Delete
##### Summary:

Deletes a accessControlEntry.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlEntry to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlEntry delete. | AccessControlEntryDeletedResult |

### /api/AccessControl/AccessControlFilter

#### Get
##### Summary:

Returns all the accessControlFilters according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The accessControlFilter list. | List of AccessControlFilter |

#### Post
##### Summary:

Creates a accessControlFilter.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlFilter creation. | AccessControlFilterCreatedResult |

### /api/AccessControl/AccessControlFilter/\{id\}

#### Get
##### Summary:

Returns a accessControlFilter corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlFilter. | True |  |  |
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
| 200 | The accessControlFilter. | AccessControlFilter |

#### Put
##### Summary:

Updates a accessControlFilter.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlFilter to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlFilter update. | AccessControlFilterUpdatedResult |

#### Delete
##### Summary:

Deletes a accessControlFilter.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlFilter to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlFilter delete. | AccessControlFilterDeletedResult |

### /api/AccessControl/AccessControlPermission

#### Get
##### Summary:

Returns all the accessControlPermissions according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The accessControlPermission list. | List of AccessControlPermission |

### /api/AccessControl/AccessControlPermission/\{id\}

#### Get
##### Summary:

Returns a accessControlPermission corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlPermission. | True |  |  |
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
| 200 | The accessControlPermission. | AccessControlPermission |

### /api/AccessControl/AccessControlRule

#### Get
##### Summary:

Returns all the accessControlRules according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The accessControlRule list. | List of AccessControlRule |

#### Post
##### Summary:

Creates a accessControlRule.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlRule creation. | AccessControlRuleCreatedResult |

### /api/AccessControl/AccessControlRule/\{id\}

#### Get
##### Summary:

Returns a accessControlRule corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlRule. | True |  |  |
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
| 200 | The accessControlRule. | AccessControlRule |

#### Put
##### Summary:

Updates a accessControlRule.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlRule to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlRule update. | AccessControlRuleUpdatedResult |

#### Delete
##### Summary:

Deletes a accessControlRule.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the accessControlRule to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the accessControlRule delete. | AccessControlRuleDeletedResult |

### /api/AccessControl/AssignedProfile

#### Get
##### Summary:

Returns all the assigned profiles according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| squery | Query compliant to the API query grammar. | False |  |  |
| PageSize | Page size. | False |  |  |
| ContinuationToken | ContinuationToken returned by previous page request. | False |  |  |
| Path | Represents the permission path. | False |  |  |
| QueryRootEntityType | Defines the query root entity type. | False |  |  |
| QueryBinding | Defines the query binding. | False |  |  |
| ApplyPostCondition | If true, use PostCondition access control rules. | False |  |  |
| AllowedAllJoinQuery |  | False |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The assigned profile list. | List of AssignedProfile |

#### Post
##### Summary:

Creates an assigned profile.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the assigned profile creation. | AssignedProfileCreatedResult |

### /api/AccessControl/AssignedProfile/\{id\}

#### Get
##### Summary:

Returns an assigned profile corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the assigned profile. | True |  |  |
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
| 200 | The assigned profile. | AssignedProfile |

#### Put
##### Summary:

Updates an assigned profile with support for both full and incremental profile context updates.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the assigned profile to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the assigned profile update. | AssignedProfileUpdatedResult |

#### Delete
##### Summary:

Deletes an assigned profile.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the assigned profile to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the assigned profile delete. | AssignedProfileDeletedResult |

### /api/AccessControl/OpenIdClient

#### Get
##### Summary:

Returns all the openId clients according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The clients list. | List of OpenIdClient |

#### Post
##### Summary:

Creates an openId client.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the openId client creation. | OpenIdClientCreatedResult |

### /api/AccessControl/OpenIdClient/\{id\}

#### Get
##### Summary:

Returns an openId client corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the openId client. | True |  |  |
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
| 200 | The open id client. | OpenIdClient |

#### Put
##### Summary:

Updates an openId client.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the openId client to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the openId client update. | OpenIdClientUpdatedResult |

#### Delete
##### Summary:

Deletes an openId client.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the openId client to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the openId client delete. | OpenIdClientDeletedResult |

### /api/AccessControl/Profile

#### Get
##### Summary:

Returns all the profiles according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
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
| 200 | The profile list. | List of Profile |

#### Post
##### Summary:

Creates a profile.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the profile creation. | ProfileCreatedResult |

### /api/AccessControl/Profile/\{id\}

#### Get
##### Summary:

Returns a profile corresponding to the provided identifier and its information according to the provided query.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the profile. | True |  |  |
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
| 200 | The profile. | Profile |

#### Put
##### Summary:

Updates a profile.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the profile to update. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the profile update. | ProfileUpdatedResult |

#### Delete
##### Summary:

Deletes a profile.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the profile to delete. | True |  |  |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the profile delete. | ProfileDeletedResult |

### /api/AccessControl/ProfileRuleContext

#### Get
##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| squery |  | False |  |  |
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
| 200 | OK | List of ProfileRuleContext |

