---
title: "Get All Groups of a User with the GroupID API"
description: "Retrieve all groups for a specified user in an identity store, with paging and sorting options."
keywords:
  - GroupID API
  - get user groups
  - GET Groups All endpoint
  - user groups API
sidebar_position: 40
unlisted: true
---

# Get All Groups of a User with the GroupID API

Use this API to retrieve all groups in the directory for the user specified in the endpoint.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/All?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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
  "total": 1896,
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
              "value": "CN=Builtin,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
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
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
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
      "objectIdFromIdentityStore": "6791c6ed-3e1b-4516-9c67-c72b64f6beeb",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Administrators",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Builtin,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Users",
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
              "value": "Users",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Users",
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
      "objectIdFromIdentityStore": "9480dd41-384e-4bf5-a9f5-98866c49142f",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Users",
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
- [User APIs in GroupID](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
