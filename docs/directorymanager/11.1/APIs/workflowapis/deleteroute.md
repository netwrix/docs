---
title: "Delete a Route"
description: "Delete a Route"
sidebar_position: 50
---

# Delete a Route

You can use this API to delete a user-defined workflow route.

:::note
You cannot delete a system workflow.
:::


## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes?ids=1**

## HTTP Methods

**DELETE**

#### Sample Response Syntax

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
