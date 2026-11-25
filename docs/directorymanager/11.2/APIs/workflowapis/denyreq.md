---
title: "Deny a Workflow Request Using the API"
description: "Deny a pending workflow request and record a reason by sending a POST request to the Directory Manager API."
keywords:
  - deny workflow request
  - workflow denial reason
  - workflow approval API
  - Directory Manager REST API
sidebar_position: 80
unlisted: true
---

# Deny a Workflow Request Using the API

Use this API to deny a workflow request in a specified identity store.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Deny**

## HTTP Methods

**POST**

### Sample Request Syntax

```
{
    "workflowRequestID": 4,
    "reason": "Denied From API"
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
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
