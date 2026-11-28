---
title: "Delete Multiple Groups with the GroupID API"
description: "Use the Delete Groups API to remove several groups from an identity store in one request by passing their identities in the request body."
keywords:
  - GroupID API
  - delete groups API
  - bulk delete groups
  - identity store groups
sidebar_position: 40
unlisted: true
---

# Delete Multiple Groups with the GroupID API

The Delete Groups API deletes multiple groups from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

DELETE

### Sample Request Syntax

```
[
  "24bda903-2afd-408a-a55c-c18adcfb543e",
  "124b2528-a08a-41a1-9e8e-b1d5e6434153"
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
