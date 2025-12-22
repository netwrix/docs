---
title: "ProvisioningEntityInstance"
description: "ProvisioningEntityInstance"
sidebar_position: 70
---

# ProvisioningEntityInstance

### /api/ProvisioningEntityInstance/EntityInstance

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

### /api/ProvisioningEntityInstance/EntityInstance/`{id}`

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
