---
title: "Deny a Request"
description: "Deny a Request"
sidebar_position: 80
---

# Deny a Request

If you want to deny a workflow request in a specified identity store, you can use this API.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Deny**

## HTTP Methods

**POST**

#### Sample Request Syntax

```
{
    "workflowRequestID": 4,
    "reason": "Denied From API"
}
```

#### Sample Response Syntax

```
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
```
