---
title: "Update a Group"
description: "Update a Group"
sidebar_position: 180
---

# Update a Group

Using this API, you can update a group's details.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}**

## HTTP Method

**PATCH**

#### Sample Request Syntax

```
{
  "AttributesCollection": {
    "AttributesCollection": {
      "description": [
        {
          "Value": "Its a demo group!",
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
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "description",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "company",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "IMSGManagedGroupType",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```
