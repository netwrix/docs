---
title: "Delete Users"
description: "Delete Users"
sidebar_position: 30
---

# Delete Users

This API deletes multiple users from the identity store given in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Method

DELETE

#### Sample Request Syntax

```
[
  "4ecb2fea-bf6a-412b-8df4-b72691904cc4",
  "c50c2235-00fa-4069-8f0d-f69bf48d7ca6"
]
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
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
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
