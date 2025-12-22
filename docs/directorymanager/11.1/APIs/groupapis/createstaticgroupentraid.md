---
title: "Create an Entra ID Static Group"
description: "Create an Entra ID Static Group"
sidebar_position: 20
---

# Create an Entra ID Static Group

Using this API you can create a Static Group in a Microsoft Entra ID identity store. The following
table lists the types of Static Groups you can create using this API.

| Group Type             | Value |
| ---------------------- | ----- |
| Security Groups        | 4     |
| Distribution Groups    | 8     |
| Microsoft Office Group | 16    |
| Teams                  | 32    |

Each group type has its associated value. To create a Static Group of a specific type, provide its
value in the Value attribute of the GroupType parameter.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/StaticGroup**

## HTTP Method

**POST**

## Sample Request Syntax

```
{
    "IdentityStoreID": 3,
    "GroupName": "apiSecAzure",
    "Container": "DC=5cjshm,DC=onmicrosoft,DC=com",
    "AttributesCollection": {
        "AttributesCollection": {
            "IMSGManagedGroupType": [
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
            "displayname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiSecAzure",
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
            "XGroupSecurity": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Private",
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
            "GroupType": [
                {
                    "IdentityStoreId": 0,
                    "Value": "4",
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
            "description": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiSecAzure",
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
            "enableofficefeatures": [
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
            "members": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {
                        "XMembershipType": ""
                    },
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "owners": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {},
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
            "commonname": [
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
            "objectclass": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Group",
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
                    "Value": "group",
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
    }
}
```

#### Sample Response Syntax

```
{
  "name": null,
  "type": 6,
  "status": 0,
  "message": null,
  "data": "a9eec7fb-8027-4671-99c4-b6a55f8a2db5",
  "identityStoreObject": {
    "groupClassName": null,
    "name": null,
    "displayName": null,
    "samAccountName": null,
    "groupType": null,
    "groupScope": null,
    "msExchRequireAuthToSendTo": null,
    "hiddenFromAddressListsEnabled": false,
    "emailAddress": null,
    "alias": null,
    "isGroupInExludedContainer": false,
    "dc": null,
    "objectIdFromIdentityStore": "a9eec7fb-8027-4671-99c4-b6a55f8a2db5",
    "identityStoreId": 6,
    "identityStore": {
      "identityStoreId": 6,
      "storeTypeId": 0,
      "identityStoreName": null,
      "description": null,
      "connectionString": null,
      "serviceAccountUser": null,
      "serviceAccountPassword": null,
      "isEnabled": false,
      "shouldReplicate": false,
      "isNotificationEnabled": false,
      "loginText": null,
      "imageURL": null,
      "storeType": null,
      "clusterConfigurations": null,
      "configurations": null,
      "roles": null,
      "clients": null,
      "links": null,
      "hasChildrenLoaded": false,
      "isMessagingSystemConfigured": false,
      "notification": null,
      "questions": null,
      "schemaBasedQuestions": null,
      "smsConfiguration": null,
      "identityStoreConfigurationValues": {},
      "preventDefaultQuestionCreation": false,
      "profileVerificationCriteria": null,
      "authenticationPolicy": null,
      "currentConnection": null,
      "preferredDomains": null,
      "excludedDomains": null,
      "domainPriortiesList": null,
      "preferredDCFallbackEnabled": null,
      "indexMappingVersion": null,
      "creationDate": 0,
      "qrCodeAuthentication": false
    },
    "objectType": "Group",
    "objectName": "apiEntraIDNet",
    "objectDisplayName": "apiEntraIDNet",
    "stopNotification": false,
    "attributesBusinessObject": {
      "attributesCollection": {
        "IMSGManagedGroupType": [
          {
            "identityStoreId": 0,
            "value": "1",
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
        "displayname": [
          {
            "identityStoreId": 0,
            "value": "apiEntraIDNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupSecurity": [
          {
            "identityStoreId": 0,
            "value": "Private",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "GroupType": [
          {
            "identityStoreId": 0,
            "value": "4",
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
        "description": [
          {
            "identityStoreId": 0,
            "value": "apiEntraIDNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "enableofficefeatures": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "members": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "owners": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "userprincipalname": [
          {
            "identityStoreId": 0,
            "value": "",
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
        "commonname": [
          {
            "identityStoreId": 0,
            "value": "",
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
            "value": "Group",
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
        "objecttype": [
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
        "ContainerDistinguishedName": [
          {
            "identityStoreId": 0,
            "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupExpirationPolicy": [
          {
            "identityStoreId": 0,
            "value": "0",
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
        "XGroupExpirationDate": [
          {
            "identityStoreId": 0,
            "value": "9999 December 31 00:00:00",
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
        "ismailbox": [
          {
            "identityStoreId": 0,
            "value": "False",
            "dn": null,
            "action": 3,
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
            "value": "False",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsExpired": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsDeleted": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGGroupIDVersion": [
          {
            "identityStoreId": 0,
            "value": "11.0",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGCreatedInVersion": [
          {
            "identityStoreId": 0,
            "value": "11.1.25059.04",
            "dn": null,
            "action": 3,
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
  },
  "details": [
    {
      "name": null,
      "type": 0,
      "status": 0,
      "message": "",
      "data": null,
      "identityStoreObject": null,
      "details": [],
      "currentDirectoryServer": null,
      "errorCode": null,
      "exceptionMessagesAttributeWise": null,
      "isResyncAble": true
    }
  ],
  "currentDirectoryServer": null,
  "errorCode": null,
  "exceptionMessagesAttributeWise": {},
  "isResyncAble": true
}
```
