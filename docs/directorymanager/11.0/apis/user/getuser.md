---
title: "Get a User"
description: "Get a User"
sidebar_position: 140
---

# Get a User

Use this API to get information of a single user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users/{userIdentity}

## HTTP Method

GET

#### Sample Response Syntax

```
{
  "country": null,
  "passwordNeverExpires": null,
  "attributesBusinessObject": {
    "attributesCollection": {
      "proxyAddresses": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "SMTP:demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "container": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "CN=Users,DC=demo,DC=local",
          "identityStoreId": 0
        }
      ],
      "mail": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "displayName": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demo,demouser1",
          "identityStoreId": 0
        }
      ],
      "objectClass": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "user",
          "identityStoreId": 0
        }
      ],
      "name": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1 demo",
          "identityStoreId": 0
        }
      ],
      "CN": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1 demo",
          "identityStoreId": 0
        }
      ],
      "userPrincipalName": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "objectCategory": [
      ]
    },
    "type": null,
    "filePermissionCollection": {
    }
  },
  "postalCode": null,
  "samAccountName": null,
  "office": null,
  "serverSetting": null,
  "logonName": null,
  "identityStoreName": null,
  "objectType": "user",
  "password": null,
  "homeDataBase": null,
  "familyName": null,
  "action": 0,
  "state": null,
  "fax": null,
  "identityStore": null,
  "upnSuffix": null,
  "primaryEmail": null,
  "initials": null,
  "telephone": null,
  "linkedIdentities": null,
  "firstName": null,
  "objectDisplayName": "demo,demouser1",
  "stopNotification": false,
  "objectSid": null,
  "lastName": null,
  "preferredLanguage": null,
  "objectIdFromIdentityStore": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "city": null,
  "displayName": "demo,demouser1",
  "passwordNoChange": null,
  "roles": null,
  "title": null,
  "alias": null,
  "company": null,
  "department": null,
  "applicationName": null,
  "accountLocked": false,
  "passwordLastSet": null,
  "userClassName": null,
  "storeType": null,
  "mobile": null,
  "passwordForceChange": false,
  "streetAddress": null,
  "elasticHitScore": 0.0,
  "accountDisabled": null,
  "objectName": null,
  "usageLocation": null,
  "dc": null,
  "identityStoreId": 2
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
