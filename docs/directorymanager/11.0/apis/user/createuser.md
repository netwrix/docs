---
title: "Create a User with the Directory Manager API"
description: "Create a user in an identity store by sending a POST request with the container, name, and other required attributes."
keywords:
  - Directory Manager API
  - create user
  - POST Users endpoint
  - identity store
sidebar_position: 10
unlisted: true
---

# Create a User with the Directory Manager API

This API creates a user in the identity store specified in the endpoint URL. Provide mandatory
information for the user being created in the request syntax, such as the container in which the user is
created, given name, and display name.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Methods

POST

### Sample Request Syntax

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

### Sample Response Syntax

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

## See Also

- Common Errors
- [User APIs in Directory Manager](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
