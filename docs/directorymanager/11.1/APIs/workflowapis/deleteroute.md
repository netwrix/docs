---
title: "Delete a Workflow Route Using the API"
description: "Delete a user-defined workflow route from an identity store by sending a DELETE request to the Directory Manager API."
keywords:
  - delete workflow route
  - workflow route API
  - DELETE request
  - Directory Manager REST API
sidebar_position: 50
---

# Delete a Workflow Route Using the API

Use this API to delete a user-defined workflow route.

:::note
You can't delete a system workflow.
:::

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes?ids=1**

## HTTP Methods

**DELETE**

### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
