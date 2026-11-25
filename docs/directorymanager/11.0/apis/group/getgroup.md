---
title: "Get a Group with the Directory Manager API"
description: "Use the Get Group API to retrieve the details and requested attributes of a single group in an identity store."
sidebar_position: 70
keywords:
  - Directory Manager API
  - get group API
  - GET group
  - group attributes
---

# Get a Group with the Directory Manager API

This API retrieves details of a specified group.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

GET

### Sample Request Syntax

```
[
    "displayName",
    "ObjectGuid"
  ]
```

### Sample Response Syntax

```
{
    "groupType": null,
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
                    "value": "",
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
                    "value": "DemoGroup",
                    "identityStoreId": 0
                }
            ],
            "ObjectGuid": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
                    "identityStoreId": 0
                }
            ],
            "CN": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "DemoGroup",
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
    "hiddenFromAddressListsEnabled": false,
    "objectIdFromIdentityStore": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "displayName": "DemoGroup",
    "samAccountName": null,
    "isGroupInExludedContainer": false,
    "msExchRequireAuthToSendTo": null,
    "objectType": "group",
    "emailAddress": null,
    "groupScope": null,
    "elasticHitScore": 0.0,
    "objectDisplayName": "DemoGroup",
    "name": null,
    "stopNotification": false,
    "alias": "",
    "objectName": null,
    "groupClassName": null,
    "identityStore": null,
    "dc": null,
    "identityStoreId": 2
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
