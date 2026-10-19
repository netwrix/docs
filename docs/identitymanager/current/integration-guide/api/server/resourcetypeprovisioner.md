---
title: "ResourceTypeProvisioner"
description: "Get the provisioning orders for one or more resource types with the Server API."
sidebar_position: 13.5
---

### /api/ResourceTypeProvisioner/ResourceTypeProvisioningData

#### Get
##### Summary:

Get provisioning orders from the server for one or more resource types.

:::note
This endpoint requires `api-version=2.0`. Requests with `api-version=1.0` fail.
:::

The caller must be an agent authenticated with a JWT.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| ResourceTypes | Identifiers of the resource types to get provisioning orders for. Repeat the parameter to request several resource types. | False | Array of identifiers |  |
| api-version | The requested API version. Must be `2.0`. | True |  |  |

##### Example:

```
GET <URL IdentityManager>/api/ResourceTypeProvisioner/ResourceTypeProvisioningData?ResourceTypes=<RESOURCE_TYPE_ID>&api-version=2.0
```

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The provisioning orders file, as JSON. |  |
| 204 | No provisioning orders are available for the requested resource types. |  |
