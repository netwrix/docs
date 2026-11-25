---
title: "Get Multiple Groups API in Directory Manager"
description: "Fetch several groups from an identity store in one request by specifying their identities and the attributes to return."
sidebar_position: 80
keywords:
  - Directory Manager API
  - get groups
  - group identities
  - identity store
  - REST API
---

# Get Multiple Groups API in Directory Manager

Use this API to fetch multiple groups from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

GET

### Sample Request Syntax

```
{
  "attributes": [
    "displayname",
    "description"
  ],
  "groupIdentities": [
    "24bda903-2afd-408a-a55c-c18adcfb543e",
    "124b2528-a08a-41a1-9e8e-b1d5e6434153"    
  ]
}
```

### Sample Response Syntax

```
[
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
                "displayname": [
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
                        "value": "DemoGroup1",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup1",
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
        "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
        "displayName": "DemoGroup1",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup1",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    },
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
                "displayname": [
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
                        "value": "DemoGroup2",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup2",
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
        "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
        "displayName": "DemoGroup2",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup2",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    }
]
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
- [Directory Manager Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
