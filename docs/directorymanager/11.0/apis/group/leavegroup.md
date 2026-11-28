---
title: "Leave a Group API in GroupID"
description: "Leave a group by specifying the membership type, start date, and end date in the request body."
sidebar_position: 110
keywords:
  - leave group API
  - group membership
  - GroupID API
  - membership type
unlisted: true
---

# Leave a Group API in GroupID

Use this API to leave a group according to the parameters specified in the body, such as
membership type, start date, and end date.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/Leave

## HTTP Method

POST

### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "leaveType": {
    "MembershipType": 1,
    "StartDate": "0001-01-01T00:00:00",
    "EndDate": "0001-01-01T00:00:00",
    "Reason": "test"
  }
}
```

### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [GroupID Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
