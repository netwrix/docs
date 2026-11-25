---
title: "Create a Contact with the Directory Manager API"
description: "Create a contact in an identity store by sending a POST request to the Contacts endpoint."
keywords:
  - create contact API
  - POST Contacts
  - identity store contact
  - Directory Manager API
sidebar_position: 10
unlisted: true
---

# Create a Contact with the Directory Manager API

Use this API to create a contact in the specified identity store.

:::note
The contact object type isn't supported in a Microsoft Entra ID-based identity store.
:::

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts**

## HTTP Method

**POST**

### Sample Request Syntax

```
{
    "container": "OU=API,DC=groupid,DC=lab",
    "attributes": {
        "attributesCollection": {
            "CN": [
                {
                    "value": "Demo Contact 4",
                    "action": 0
                }
            ],
            "objectClass": [
                {
                    "value": "contact",
                    "action": 0
                }
            ]
        }
    }
}
```

### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "bf1c9efb-5e60-4d42-9899-5d33fe70d818",
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": "dc.directorymanager.lab",
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
