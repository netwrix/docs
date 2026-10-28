---
title: "Create an Entra ID User"
description: "Create an Entra ID User"
sidebar_position: 20
---

# Create an Entra ID User

Use this API to create a user in a Microsoft Entra ID based identity store.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users**

## HTTP Methods

**POST**

#### Sample Request Syntax

```
{
    "Container": "DC=5cjshm,DC=onmicrosoft,DC=com",
    "Attributes": {
        "AttributesCollection": {
            "givenname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Conway",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "surname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Latham",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "displayname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Conway,Latham",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "LogonName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "lathamconway",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "UPNSuffix": [
                {
                    "IdentityStoreId": 0,
                    "Value": "5cjshm.onmicrosoft.com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "Password": [
                {
                    "IdentityStoreId": 0,
                    "Value": "password123",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "PasswordForceChange": [
                {
                    "IdentityStoreId": 0,
                    "Value": "false",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "accountenabled": [
                {
                    "IdentityStoreId": 0,
                    "Value": "true",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "directoryrole": [
                {
                    "IdentityStoreId": 0,
                    "Value": "User",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {
                        "id": "a0b1b346-4d3e-4e8b-98f8-753987be4970"
                    },
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "userprincipalname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "lathamconway",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "mailnickname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objecttype": [
                {
                    "IdentityStoreId": 0,
                    "Value": "user",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objectclass": [
                {
                    "IdentityStoreId": 0,
                    "Value": "1",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "ContainerDistinguishedName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ]
        },
        "FilePermissionCollection": {},
        "Type": null
    },
    "ObjectIdentity": "",
    "IdentityStoreID": 3,
    "IdentityStoreMode": 0
}
```

#### Sample Response Syntax

```
{
  "name": null,
  "type": 6,
  "status": 0,
  "message": null,
  "data": "a7d65335-0164-4545-a093-080fd52ae870",
  "identityStoreObject": null,
  "details": [],
  "currentDirectoryServer": null,
  "errorCode": null,
  "exceptionMessagesAttributeWise": {},
  "isResyncAble": true
}
```
