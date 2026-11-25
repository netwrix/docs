---
title: "Renew Multiple Groups API"
description: "Renew several groups at once by sending their identities in a POST request body to the Directory Manager data service."
sidebar_position: 150
keywords:
  - renew multiple groups
  - bulk group renewal
  - renew groups in bulk API
  - POST Groups/Renew request body
---

# Renew Multiple Groups API

This API renews multiple groups. Provide the group identities in the request body.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/Renew

## HTTP Method

POST

### Sample Request Syntax

```
[
"eef9c2ae-32db-401b-b844-6ea6e5f21307",
"8b13bcc7-c51a-4840-a9f5-f1c03bba85d4",
"4ba9f608-8011-4a1d-80eb-777d605ac19e"
]
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
        },
        null,
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
        },
        null,
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
        },
        null
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
