---
title: "Create a Smart Group"
description: "Create a Smart Group"
sidebar_position: 30
---

# Create a Smart Group

Using this API, you can create a Smart Group in the identity store specified in the endpoint URL.
You have to provide the mandatory information for creating a Smart Group in the request syntax.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/DynamicGroup**

## HTTP Method

**POST**

#### Sample Request Syntax

```
{
  "UpdateOption":0,
  "IdentityStoreID": 2,
  "GroupName": "DemoSmartGroup1",
  "Container": "OU=Groups,DC=demo,DC=local",
  "AttributesCollection": {
    "AttributesCollection": {
      "name": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "sAMAccountName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "GroupType": [
        {
          "Value": "8",
          "Action": 0
        }
      ],
      "IMSGManagedGroupType": [
        {
          "Value": "2",
          "Action": 0
        }
      ],
      "XGroupSecurity": [
        {
          "Value": "Semi_Private",
          "Action": 1
        }
      ],
      "description": [
        {
          "Value": "Its the description!",
          "Action": 1
        }
      ],
      "UpdateOptions": [
        {
          "Value": "false",
          "Action": 1
        }
      ],
      "managedBy": [
        {
          "Value": "19a1822e-e7ef-4206-af75-1c2d8b1d15eb",
          "Action": 1
        }
      ],
      "identityStoreId": [
        {
          "Value": "2",
          "Action": 1
        }
      ],
      "IMSGObjectTypes": [
        {
          "Value": "6",
          "Action": 1
        }
      ],
      "IMSGCriteria": [
        {
          "Value": "(department Contains \"engineering\")",
          "Action": 1
        }
      ],
      "IMSGStartPath": [
        {
          "Value": "DC=demo,DC=local",
          "Action": 1,
          "AttributeCollection": {
            "Scope": "2"
          }
        }
      ],
      "SmartGroupMainType": [
        {
          "Value": "X.SmartGroup",
          "Action": 0
        }
      ],
      "info": [
        {
          "Value": "This is an automated group, please do not modify membership. Membership is controlled by GroupID.",
          "Action": 0
        }
      ],
      "mailNickname": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "displayName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "CN": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "objectClass": [
        {
          "Value": "MailEnabledGroup",
          "Action": 0
        }
      ],
      "objectCategory": [
        {
          "Value": "group",
          "Action": 0
        }
      ],
      "ContainerDistinguishedName": [
        {
          "Value": "OU=Groups,DC=demo,DC=local",
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
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "f8bc4524-fdcb-4b85-9f3f-d6c0af7c58ae",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```
