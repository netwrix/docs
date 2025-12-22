---
title: "AccessCertification"
description: "AccessCertification"
sidebar_position: 10
---

# AccessCertification

### /api/AccessCertification/AccessCertificationCampaign

#### Get

##### Summary:

Returns all the access certification campaigns according to the provided query.

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

| Code | Description                             | Reference |
| ---- | --------------------------------------- | --------- |
| 200  | The access certification campaign list. |           |

#### Post

##### Summary:

Creates an access certification campaign.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                                               | Reference |
| ---- | --------------------------------------------------------- | --------- |
| 200  | The result of the access certification campaign creation. |           |

### /api/AccessCertification/AccessCertificationCampaign/`{id}`

#### Get

##### Summary:

Returns an access certification campaign corresponding to the provided identifier and its
information according to the provided query.

##### Parameters:

| Name                | Description                                      | Required | Type | Reference |
| ------------------- | ------------------------------------------------ | -------- | ---- | --------- |
| id                  | Identifier of the access certification campaign. | True     |      |           |
| squery              | Query compliant to the API query grammar.        | False    |      |           |
| Path                | Represents the permission path.                  | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.              | False    |      |           |
| QueryBinding        | Defines the query binding.                       | False    |      |           |
| api-version         | The requested API version                        | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The access certification campaign. |           |

#### Put

##### Summary:

Updates an access certification campaign.

##### Parameters:

| Name        | Description                                                | Required | Type | Reference |
| ----------- | ---------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the access certification campaign to update. | True     |      |           |
| api-version | The requested API version                                  | True     |      |           |

##### Responses:

| Code | Description                                             | Reference |
| ---- | ------------------------------------------------------- | --------- |
| 200  | The result of the access certification campaign update. |           |

#### Delete

##### Summary:

Deletes an access certification campaign.

##### Parameters:

| Name        | Description                                                | Required | Type | Reference |
| ----------- | ---------------------------------------------------------- | -------- | ---- | --------- |
| id          | Identifier of the access certification campaign to delete. | True     |      |           |
| api-version | The requested API version                                  | True     |      |           |

##### Responses:

| Code | Description                                             | Reference |
| ---- | ------------------------------------------------------- | --------- |
| 200  | The result of the access certification campaign delete. |           |

### /api/AccessCertification/AccessCertificationCampaignPolicy

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

| Code | Description                                              | Reference |
| ---- | -------------------------------------------------------- | --------- |
| 200  | The policy list.                                         |           |
| 400  | No access certification policy can be found in database. |           |

### /api/AccessCertification/AccessCertificationItem

#### Get

##### Summary:

Returns all the access certification items of the campaignId campaign according to the provided
squery.

##### Parameters:

| Name              | Description                                          | Required | Type | Reference |
| ----------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| squery            | Query compliant to the API query grammar.            | False    |      |           |
| campaignId        | Recertification campaign Id.                         | False    |      |           |
| PageSize          | Page size.                                           | False    |      |           |
| ContinuationToken | ContinuationToken returned by previous page request. | False    |      |           |
| api-version       | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                         | Reference |
| ---- | ----------------------------------- | --------- |
| 200  | The access certification item list. |           |
