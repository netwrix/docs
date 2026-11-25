---
title: "Expire a Group with the Directory Manager API"
description: "Use the Expire Group API to expire a single group, identified in the endpoint URL, with the endpoint, HTTP method, and sample response."
keywords:
  - Directory Manager API
  - expire group API
  - group expiration
  - POST Expire
sidebar_position: 50
unlisted: true
---

# Expire a Group with the Directory Manager API

This API expires the group whose identity is provided in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Expire?ReplicationRequired=true

## HTTP Method

POST

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
