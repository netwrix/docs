---
title: "Get Contacts"
description: "Get Contacts"
sidebar_position: 50
---

# Get Contacts

Use this API to retrieve information of multiple contacts from a specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "userIdentities": [
    "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "bee3ae99-d1d6-4480-a271-65d567784cca"
  ],
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
        "contactClassName": null,
        "displayName": "Contact1,Demo",
        "emailAddress": null,
        "firstName": null,
        "initials": null,
        "lastName": null,
        "alias": null,
        "title": null,
        "department": null,
        "companyName": null,
        "dc": null,
        "city": null,
        "country": null,
        "fax": null,
        "mobilePhone": null,
        "office": null,
        "phoneNumber": null,
        "postalCode": null,
        "state": null,
        "streetAddress": null,
        "objectIdFromIdentityStore": "aaa92db4-b912-49a8-9f85-56da5f33daaf",
        "identityStoreId": 2,
        "identityStore": null,
        "objectType": "contact",
        "objectName": null,
        "objectDisplayName": "Contact1,Demo",
        "stopNotification": false,
        "attributesBusinessObject": {
            "attributesCollection": {
                "displayName": [
                    {
                        "identityStoreId": 0,
                        "value": "Contact1,Demo",
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
                "objectCategory": [],
                "CN": [
                    {
                        "identityStoreId": 0,
                        "value": "Demo Contact1",
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
                        "value": "contact",
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
                        "value": "Demo Contact1",
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
        "elasticHitScore": 0.0
    },
    {
        "contactClassName": null,
        "displayName": "Demo2,Contact",
        "emailAddress": null,
        "firstName": null,
        "initials": null,
        "lastName": null,
        "alias": null,
        "title": null,
        "department": null,
        "companyName": null,
        "dc": null,
        "city": null,
        "country": null,
        "fax": null,
        "mobilePhone": null,
        "office": null,
        "phoneNumber": null,
        "postalCode": null,
        "state": null,
        "streetAddress": null,
        "objectIdFromIdentityStore": "bee3ae99-d1d6-4480-a271-65d567784cca",
        "identityStoreId": 2,
        "identityStore": null,
        "objectType": "contact",
        "objectName": null,
        "objectDisplayName": "Demo2,Contact",
        "stopNotification": false,
        "attributesBusinessObject": {
            "attributesCollection": {
                "displayName": [
                    {
                        "identityStoreId": 0,
                        "value": "Demo2,Contact",
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
                "objectCategory": [],
                "CN": [
                    {
                        "identityStoreId": 0,
                        "value": "Contact Demo2",
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
                        "value": "contact",
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
                        "value": "Contact Demo2",
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
        "elasticHitScore": 0.0
    }
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Contact APIs](/docs/directorymanager/11.0/apis/contact/contactapis.md)
