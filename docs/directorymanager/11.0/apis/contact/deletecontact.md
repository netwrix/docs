---
title: "Delete a Contact with the Directory Manager API"
description: "Delete a single contact from an identity store by sending a DELETE request with the contact identity."
keywords:
  - delete contact API
  - DELETE Contacts
  - contact identity
  - Directory Manager API
sidebar_position: 20
unlisted: true
---

# Delete a Contact with the Directory Manager API

Use this API to delete a specified contact from the specified identity store.

:::note
The contact object type isn't supported in a Microsoft Entra ID-based identity store.
:::

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts/{userIdentity}

## HTTP Method

DELETE

### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
