---
title: "Preview Smart Group Membership Changes API"
description: "Preview the membership changes a Smart Group query would make, using a GET request to the Directory Manager data service."
keywords:
  - Smart Group preview API
  - Smart Group membership preview
  - membership query preview
  - IMSGCriteria
sidebar_position: 150
unlisted: true
---

# Preview Smart Group Membership Changes API

Use this API to preview the membership changes that would occur in a Smart Group according to the query in the request body.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/SmartGroups/Members?sortOrder=1&pageNo=1&pageSize=2**

## HTTP Method

**GET**

### Sample Request Syntax

```
{
  "ExtensionDataAttributes": {
    "AttributesCollection": {
      "IMSGObjectTypes": [
        {
          "IdentityStoreId": 0,
          "Value": "6",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
          }
        }
      ],
      "IMSGCriteria": [
        {
          "IdentityStoreId": 0,
          "Value": "(department contains \"eng\"",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
          }
        }
      ],
      "IMSGStartPath": [
        {
          "IdentityStoreId": 0,
          "Value": "GC=DC.demo.local",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
            "Scope": "2"
          }
        }
      ]
    }
  },
  "AttributesToLoad": [
    "displayName",
    "description",
    "IMSGManagedGroupType",
    "isdisabled",
    "ismailbox"
  ]
}
```

### Sample Response Syntax

```
{
  "total": 5528,
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
              "value": "CN=Users,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "isdisabled": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "True",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "",
              "identityStoreId": 0
            }
          ],
          "IMSGManagedGroupType": [
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
              "value": "DefaultAccount",
              "identityStoreId": 0
            }
          ],
          "description": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "A user account managed by the system.",
              "identityStoreId": 0
            }
          ],
          "ismailbox": [
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DefaultAccount",
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
      "objectIdFromIdentityStore": "75c037f8-83ea-4036-86ff-e5c23af839a0",
      "elasticHitScore": 1.0,
      "objectDisplayName": "DefaultAccount",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "user"
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
              "value": "CN=Users,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "isdisabled": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "True",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "",
              "identityStoreId": 0
            }
          ],
          "IMSGManagedGroupType": [
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
              "value": "Exchange Online-ApplicationAccount",
              "identityStoreId": 0
            }
          ],
          "description": [
          ],
          "ismailbox": [
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Exchange Online-ApplicationAccount",
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
      "objectIdFromIdentityStore": "2b1b1353-cd78-4e76-b372-7debbd71229f",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Exchange Online-ApplicationAccount",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "user"
    }
  ]
}
```
