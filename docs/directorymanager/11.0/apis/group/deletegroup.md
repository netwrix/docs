---
title: "Delete a Group with the Directory Manager API"
description: "Use the Delete Group API to remove a single group from an identity store by its identity, with the endpoint, HTTP method, and sample response."
keywords:
  - Directory Manager API
  - delete group API
  - DELETE group
  - identity store group
sidebar_position: 30
unlisted: true
---

# Delete a Group with the Directory Manager API

Use this API to delete a group from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

DELETE

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
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
