---
title: "Delete Old Directory Manager Workflow Requests by Status"
description: "Use this DELETE endpoint to remove workflow requests that have had a given status for longer than a set number of days."
keywords:
  - delete workflow requests
  - request status cleanup
  - RequestsOlderThanInDays
  - DELETE Status endpoint
sidebar_position: 70
unlisted: true
---

# Delete Old Directory Manager Workflow Requests by Status

Use this API to delete requests that have had the specified status for more than the specified number of days. For
example, if a request has the approved status and is more than 60 days old, you can delete it by using
this API.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Status/{RequestStatus}?RequestsOlderThanInDays=1**

## HTTP Methods

**DELETE**

### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": 1,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
