---
title: "Get Users"
description: "Get Users"
sidebar_position: 160
---

# Get Users

Use this API to retrieve information of multiple users from the specified identity store.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users**

## HTTP Method

**GET**

#### Sample Request Syntax

```
{
  "identityStoreID": 2,
  "objectIdentities": [
    "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
    "3130b400-45bf-4ed2-b4bd-a461fe4ae949"
  ],
  "addAndResolveAdditionalDirectReports": true,
  "attributesToLoad": [
    "displayName",
    "department"
  ]
}
```

#### Sample Response Syntax

```
[
    {
        "country": null,
        "passwordNeverExpires": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Users,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayName": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
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
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
                ],
                "department": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "Engineering",
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
        "postalCode": null,
        "samAccountName": null,
        "office": null,
        "serverSetting": null,
        "logonName": null,
        "identityStoreName": null,
        "objectType": "user",
        "password": null,
        "homeDataBase": null,
        "familyName": null,
        "action": 0,
        "state": null,
        "fax": null,
        "identityStore": null,
        "upnSuffix": null,
        "primaryEmail": null,
        "initials": null,
        "telephone": null,
        "linkedIdentities": null,
        "firstName": null,
        "objectDisplayName": "AbbeyCrawford",
        "stopNotification": false,
        "objectSid": null,
        "lastName": null,
        "preferredLanguage": null,
        "objectIdFromIdentityStore": "3130b400-45bf-4ed2-b4bd-a461fe4ae949",
        "city": null,
        "displayName": "AbbeyCrawford",
        "passwordNoChange": null,
        "roles": null,
        "title": null,
        "useras": null,
        "company": null,
        "department": null,
        "applicationName": null,
        "accountLocked": false,
        "passwordLastSet": null,
        "userClassName": null,
        "storeType": null,
        "mobile": null,
        "passwordForceChange": false,
        "streetAddress": null,
        "elasticHitScore": 0.0,
        "accountDisabled": null,
        "objectName": null,
        "usageLocation": null,
        "dc": null,
        "identityStoreId": 2
    },
    {
        "country": null,
        "passwordNeverExpires": null,
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
                "displayName": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "user,demo",
                        "identityStoreId": 0
                    }
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
                        "value": "demo user",
                        "identityStoreId": 0
                    }
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "demo user",
                        "identityStoreId": 0
                    }
                ],
                "department": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "QA",
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
        "postalCode": null,
        "samAccountName": null,
        "office": null,
        "serverSetting": null,
        "logonName": null,
        "identityStoreName": null,
        "objectType": "user",
        "password": null,
        "homeDataBase": null,
        "familyName": null,
        "action": 0,
        "state": null,
        "fax": null,
        "identityStore": null,
        "upnSuffix": null,
        "primaryEmail": null,
        "initials": null,
        "telephone": null,
        "linkedIdentities": null,
        "firstName": null,
        "objectDisplayName": "user,demo",
        "stopNotification": false,
        "objectSid": null,
        "lastName": null,
        "preferredLanguage": null,
        "objectIdFromIdentityStore": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
        "city": null,
        "displayName": "user,demo",
        "passwordNoChange": null,
        "roles": null,
        "title": null,
        "alias": null,
        "company": null,
        "department": null,
        "applicationName": null,
        "accountLocked": false,
        "passwordLastSet": null,
        "userClassName": null,
        "storeType": null,
        "mobile": null,
        "passwordForceChange": false,
        "streetAddress": null,
        "elasticHitScore": 0.0,
        "accountDisabled": null,
        "objectName": null,
        "usageLocation": null,
        "dc": null,
        "identityStoreId": 2
    }
]
```
