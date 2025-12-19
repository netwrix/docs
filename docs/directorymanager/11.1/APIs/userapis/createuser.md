---
title: "Create a User"
description: "Create a User"
sidebar_position: 10
---

# Create a User

This API creates a user in the identity store specified in the endpoint URL. Provide mandatory
information for the to be created user in the request syntax such as container in which user will be
created, given name, display name and so on.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users**

## HTTP Methods

**POST**

#### Sample Request Syntax

```
{
  "Container": "OU=Users,DC=demo,DC=local",
  "Attributes": {
    "attributesCollection": {
      "givenName": [
        {
          "value": "Demo",
          "action": 0
        }
      ],
      "displayName": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "sn": [
        {
          "value": "User1",
          "action": 0
        }
      ],
      "samAccountName": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "userPrincipalName": [
        {
          "value": "DemoUser1@demo.local",
          "action": 0
        }
      ],
      "mail": [
        {
          "value": "DemoUser1@demo.local",
          "action": 0
        }
      ],
      "proxyAddresses": [
        {
          "value": "SMTP:DemoUser1@demo.local",
          "action": 0
        }
      ],
      "CN": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "objectClass": [
        {
          "value": "user",
          "action": 0
        }
      ]
    }
  },
  "IdentityStoreID": "2"
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "SAMSUNG-DC.askari.local",
    "exceptionMessagesAttributeWise": null,
    "data": "2c49fc27-dbe8-4c86-9c9e-f1a52b9d95f8",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```
