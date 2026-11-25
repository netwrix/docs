---
title: "Update a User with the Directory Manager API"
description: "Update the attributes of a user in an identity store with a PATCH request."
keywords:
  - Directory Manager API
  - update user
  - PATCH Users endpoint
  - AttributesToUpdate
sidebar_position: 170
---

# Update a User with the Directory Manager API

This API updates a user's information in the specified identity store.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users**

## HTTP Method

**PATCH**

### Sample Request Syntax

```
{
  "AttributesToUpdate": {
    "AttributesCollection": {
      "department": [
        {
          "Value": "Engineering",
          "Action": 0
        }
      ]
    }
  },
  "ObjectIdentity": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "IdentityStoreID": "2"
}
```

### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": "",
            "identityStoreObject": null,
            "name": "department",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```
