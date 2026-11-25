---
title: "Approve a Directory Manager Workflow Request"
description: "Use this POST endpoint to approve a pending workflow request by its request ID."
keywords:
  - approve workflow request
  - workflowRequestID
  - workflow approval API
  - POST Approve endpoint
sidebar_position: 20
---

# Approve a Directory Manager Workflow Request

Use this API to approve a specified workflow request.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Approve**

## HTTP Methods

**POST**

### Sample Request Syntax

```
{
    "workflowRequestID": 3
}
```

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
            "name": "department",
            "type": 8,
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
