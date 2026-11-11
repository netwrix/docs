---
title: "Update Groups"
description: "Update Groups"
sidebar_position: 190
---

# Update Groups

Using this API, you can update multiple groups.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/**

## HTTP Method

**PATCH**

#### Sample Request Syntax

```
[
  {
    "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup1 description"
          }
        ]
      }
    }
  },
  {
    "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup2 description"
          }
        ]
      }
    }
  }
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "24bda903-2afd-408a-a55c-c18adcfb543e",
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
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
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
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```
