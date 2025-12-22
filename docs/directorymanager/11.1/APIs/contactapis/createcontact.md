---
title: "Create a Contact"
description: "Create a Contact"
sidebar_position: 10
---

# Create a Contact

Using this API you can create a contact in the specified identity store.

:::note
The contact object type is not supported in a Microsoft Entra ID based identity store.
:::


## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts**

## HTTP Method

**POST**

#### Sample Request Syntax

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

#### Sample Response Syntax

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
