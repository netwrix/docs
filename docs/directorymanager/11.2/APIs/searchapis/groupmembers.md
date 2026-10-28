---
title: "Search Group Members"
description: "Search Group Members"
sidebar_position: 20
---

# Search Group Members

Use this API to search members of a specified group using the member attribute.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Searches**

## HTTP Method

**POST**

#### Sample Request Syntax

```
{
    "identityStoreId": 2,
    "objectIdentity": "b95d4b5a-706f-4703-904c-c0112b814ee8",
    "searchType": 0,
    "sortBy": "Assending",
    "sortOrder": 1,
    "pageNo": 1,
    "pageSize": 1,
    "attributeScopeQuery": "member",
    "criteria": {
        "operator": null,
        "attribute": null,
        "value": null,
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
    "attributesToLoad": [
        "displayName",
        "XMembershipType",
        "XBeginningDate",
        "XEndingDate",
        "ismailbox",
        "ismailenabled",
        "isdisabled",
        "identityToken",
        "IMSGManagedGroupType",
        "CN",
        "mail"
    ]
}
```

#### Sample Response Syntax

```
{
  "total": 2,
  "data": [
    {
      "objectIdFromIdentityStore": "c9dec739-42eb-4a57-bc7f-8bb2563794e3",
      "identityStoreId": 2,
      "identityStore": null,
      "objectType": "user",
      "objectName": null,
      "objectDisplayName": "Mem_Alesia Cancino",
      "stopNotification": false,
      "attributesBusinessObject": {
        "attributesCollection": {
          "distinguishedName": [
            {
              "identityStoreId": 0,
              "value": "CN=Mem_Alesia Cancino,OU=API,DC=groupid,DC=lab",
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
          "displayName": [
            {
              "identityStoreId": 0,
              "value": "Mem_Alesia Cancino",
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
          "XMembershipType": [],
          "XBeginningDate": [],
          "XEndingDate": [],
          "ismailbox": [
            {
              "identityStoreId": 0,
              "value": "False",
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
          "ismailenabled": [
            {
              "identityStoreId": 0,
              "value": "True",
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
          "isdisabled": [
            {
              "identityStoreId": 0,
              "value": "False",
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
          "identityToken": [
            {
              "identityStoreId": 0,
              "value": "YzlkZWM3MzktNDJlYi00YTU3LWJjN2YtOGJiMjU2Mzc5NGUzfHVzZXJ8Mg==",
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
          "IMSGManagedGroupType": [],
          "CN": [
            {
              "identityStoreId": 0,
              "value": "Mem_Alesia Cancino",
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
          "mail": [
            {
              "identityStoreId": 0,
              "value": "Mem_AlesiaCancino@directorymanager.lab",
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
          "objectCategory": [
            {
              "identityStoreId": 0,
              "value": "CN=Person,CN=Schema,CN=Configuration,DC=groupid,DC=lab",
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
          "container": [
            {
              "identityStoreId": 0,
              "value": "OU=API,DC=groupid,DC=lab",
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
          "objectClass": [
            {
              "identityStoreId": 0,
              "value": "user",
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
              "value": "Mem_Alesia Cancino",
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
