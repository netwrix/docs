---
title: "Join a Group on Behalf of Another User API"
description: "Join a group for another user by specifying the identity store, the user's identity, and the membership type details."
sidebar_position: 100
keywords:
  - join group on behalf
  - JoinOnBehalf API
  - group membership
  - Directory Manager API
---

# Join a Group on Behalf of Another User API

Use this API to join the group specified in the endpoint URL on behalf of another user. You must
specify the identity store where the group exists, the identity of the user you are joining the
group for, and membership type details.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/JoinOnBehalf

## HTTP Method

POST

### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "joiningUserIdentity": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "joinType": {
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

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
