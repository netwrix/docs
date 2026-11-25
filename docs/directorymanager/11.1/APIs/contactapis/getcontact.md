---
title: "Get a Contact with the Directory Manager API"
description: "Retrieve the attributes of a contact in an identity store by sending a GET request with the contact identity."
keywords:
  - get contact API
  - GET Contacts
  - contact attributes
  - Directory Manager API
sidebar_position: 40
---

# Get a Contact with the Directory Manager API

Use this API to retrieve information about a contact in a specified identity store.

:::note
The contact object type isn't supported in a Microsoft Entra ID-based identity store.
:::

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts/{userIdentity}**

## HTTP Method

**GET**

### Sample Request Syntax

```
[
    "displayName"
  ]
```

### Sample Response Syntax

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
}
```
