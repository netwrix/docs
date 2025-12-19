---
title: "Update a Contact"
description: "Update a Contact"
sidebar_position: 60
---

# Update a Contact

Use this API if you want to update a contact's attribute(s) and their value(s) in a specified
identity store.

:::note
The contact object type is not supported in a Microsoft Entra ID based identity store.
:::


## Endpoint

**https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts**

## HTTP Method

**PATCH**

#### Sample Request Syntax

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

#### Sample Response Syntax

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
