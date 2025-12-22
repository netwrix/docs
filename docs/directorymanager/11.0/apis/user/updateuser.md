---
title: "Update a User"
description: "Update a User"
sidebar_position: 160
---

# Update a User

This API updates a user's information in the specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
  "AttributesToUpdate": {
    "AttributesCollection": {
      "department": [
        {
          "Value": "Engineering",
          "Action": 0
        }
      ]
    }
  },
  "ObjectIdentity": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "IdentityStoreID": "2"
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": "",
            "identityStoreObject": null,
            "name": "department",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
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

- Common Errors
- [User APIs](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
