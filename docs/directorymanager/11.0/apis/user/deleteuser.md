---
title: "Delete a User with the Directory Manager API"
description: "Delete a single user from an identity store by sending a DELETE request with the user identity."
keywords:
  - Directory Manager API
  - delete user
  - DELETE Users endpoint
  - identity store
sidebar_position: 20
---

# Delete a User with the Directory Manager API

Using this API, you can delete a single user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}

## HTTP Method

DELETE

### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

## See Also

- Common Errors
- [User APIs in Directory Manager](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
