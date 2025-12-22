---
title: "Delete a Contact"
description: "Delete a Contact"
sidebar_position: 20
---

# Delete a Contact

Using this API you can delete a specified contact from the specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts/{userIdentity}

## HTTP Method

DELETE

#### Sample Response Syntax

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

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
