---
title: "Search an Object By a Single Value Attribute"
description: "Search an Object By a Single Value Attribute"
sidebar_position: 10
---

# Search an Object By a Single Value Attribute

Use this API to search a directory object in an identity store based on the specified attribute. For
example, search a group based on the displayname attribute.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Searches**

## HTTP Method

**POST**

#### Sample Request Syntax

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

#### Sample Response Syntax

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
