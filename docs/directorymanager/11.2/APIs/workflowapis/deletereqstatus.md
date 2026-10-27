---
title: "Delete Request Status"
description: "Delete Request Status"
sidebar_position: 70
---

# Delete Request Status

Use this API to delete a request which has the specified status for more than specified days. For
example, if a request has approved status and is 60 days older, you can delete such requests using
this API.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Status/{RequestStatus}?RequestsOlderThanInDays=1**

## HTTP Methods

**DELETE**

#### Sample Response Syntax

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
