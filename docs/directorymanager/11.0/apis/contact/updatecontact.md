---
title: "Update a Contact API in Directory Manager"
description: "Change a contact's attributes and values in an identity store with a PATCH request to the Directory Manager Contacts endpoint."
keywords:
  - Directory Manager API
  - update contact
  - contact attributes
  - PATCH request
  - identity store
sidebar_position: 60
---

# Update a Contact API in Directory Manager

Use this API to update a contact's attributes and their values in a specified identity store.

:::note
The contact object type isn't supported in a Microsoft Entra ID-based identity store.
:::

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

PATCH

### Sample Request Syntax

```
{
    "objectIdentity": "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "attributesToUpdate": {
        "AttributesCollection": {
            "department": [
                {
                    "Value": "Operation",
                    "Action": 0
                }
            ],
            "company": [
                {
                    "Value": "Imanami - Now part of Netwrix",
                    "Action": 0
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
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": "department",
            "type": 8,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        },
        {
            "name": "company",
            "type": 8,
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
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
