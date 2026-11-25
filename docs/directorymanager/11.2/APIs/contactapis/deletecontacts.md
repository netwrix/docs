---
title: "Delete Multiple Contacts with the Directory Manager API"
description: "Delete several contacts from an identity store in one DELETE request by passing a list of contact IDs."
keywords:
  - bulk delete contacts
  - delete multiple contacts API
  - contact IDs
  - Directory Manager API
sidebar_position: 30
unlisted: true
---

# Delete Multiple Contacts with the Directory Manager API

Use this API to delete multiple contacts from a specified identity store.

:::note
The contact object type isn't supported in a Microsoft Entra ID-based identity store.
:::

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts**

## HTTP Method

**DELETE**

### Sample Request Syntax

```
[
    "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "bee3ae99-d1d6-4480-a271-65d567784cca"
]
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
        },
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
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
