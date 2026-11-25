---
title: "Get My Expired Groups with the Directory Manager API"
description: "Retrieve the groups of the authenticated user that have expired, with paging and sorting options."
keywords:
  - Directory Manager API
  - expired groups
  - Groups/Expired endpoint
  - GET request
sidebar_position: 60
unlisted: true
---

# Get My Expired Groups with the Directory Manager API

This API retrieves the expired groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expired?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

### Sample Response Syntax

```
{
  "total": 1,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Expired_demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
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
      "objectIdFromIdentityStore": "4ba9f608-8011-4a1d-80eb-777d605ac19e",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Expired_demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs in Directory Manager](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
