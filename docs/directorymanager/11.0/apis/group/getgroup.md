---
title: "Get a Group"
description: "Get a Group"
sidebar_position: 70
---

# Get a Group

This Get Group API retrieves details of a specified group.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

GET

#### Sample Request Syntax

```
[
    "displayName",
    "ObjectGuid"
  ]
```

#### Sample Response Syntax

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

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
