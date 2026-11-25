---
title: "Search for Objects by Attribute in Directory Manager"
description: "Search an identity store for a directory object by a single-valued attribute, such as finding a group by its displayName."
keywords:
  - search by attribute
  - Searches endpoint
  - identity store search
  - displayName search
sidebar_position: 10
unlisted: true
---

# Search for Objects by Attribute in Directory Manager

Use this API to search for a directory object in an identity store based on the specified attribute. For
example, search for a group based on the displayName attribute.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Searches**

## HTTP Method

**POST**

### Sample Request Syntax

```
{
    "identityStoreId": 3,
    "searchType": 0,
    "SortBy": "displayName",
    "sortOrder": "Assending",
    "pageNo": 1,
    "pageSize": 10,
    "calculateTotal": true,
    "criteria": {
        "operator": "Is Exactly",
        "attribute": "displayName",
        "value": "apiDisAzure",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "operator": null,
                "attribute": null,
                "value": null
            }
        ]
    },
    "startInContainerWithScopes": {},
    "attributesToLoad": [
        "displayName",
        "memberOf",
        "CN",
        "mail"
    ]
}
```

### Sample Response Syntax

```
{
  "total": 1,
  "data": [
    {
      "objectIdFromIdentityStore": "6f0e0c3a-ef84-40a7-8dff-6cf5a87b2d83",
      "identityStoreId": 3,
      "identityStore": null,
      "objectType": "group",
      "objectName": null,
      "objectDisplayName": "apiDisAzure",
      "stopNotification": false,
      "attributesBusinessObject": {
        "attributesCollection": {
          "displayName": [
            {
              "identityStoreId": 0,
              "value": "apiDisAzure",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ],
          "memberOf": [],
          "CN": [],
          "mail": [
            {
              "identityStoreId": 0,
              "value": "apiDisAzure@5cjshm.onmicrosoft.com",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ],
          "objecttype": [],
          "commonname": [
            {
              "identityStoreId": 0,
              "value": "apiDisAzure",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ],
          "Container": [
            {
              "identityStoreId": 0,
              "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ],
          "objectclass": [
            {
              "identityStoreId": 0,
              "value": "group",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ],
          "name": [
            {
              "identityStoreId": 0,
              "value": "apiDisAzure",
              "dn": null,
              "action": 0,
              "attributeCollection": {},
              "nestedAttributes": {
                "attributesCollection": {},
                "filePermissionCollection": {},
                "type": null
              }
            }
          ]
        },
        "filePermissionCollection": {},
        "type": null
      },
      "elasticHitScore": 0
    }
  ]
}
```
