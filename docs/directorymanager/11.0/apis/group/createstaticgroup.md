---
title: "Create a Static Group with the GroupID API"
description: "Create a normal directory group, also called an unmanaged or static group, in an identity store by sending a POST request to the GroupID API."
keywords:
  - GroupID API
  - create static group
  - unmanaged group
  - StaticGroup endpoint
  - identity store group
sidebar_position: 20
unlisted: true
---

# Create a Static Group with the GroupID API

Use this API to create a normal directory group, also called an unmanaged or static group, in the
given identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/StaticGroup

## HTTP Method

POST

### Sample Request Syntax

```
{
    "GroupName": "DemoGroup",
    "Container": "OU=Groups,DC=demo,DC=local",
    "AttributesCollection": {
        "AttributesCollection": {
            "sAMAccountName": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "name": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "CN": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "objectClass": [{
                "Value": "group",
                "Action": 0
            }],
            "groupType": [{
                "Value": "-2147483640",
                "Action": 0
            }],
            "XGroupScope": [{
                "Value": "Universal Group",
                "Action": 0
            }],
            "XGroupSecurity": [{
                "Value": "Semi_Private",
                "Action": 0
            }],
            "managedBy": [{
                "Value": "CN=Administrator,CN=Users,DC=demo,DC=local",
                "Action": 0
            }]
        }
    }
}
```

### Sample Response Syntax

```
{
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [GroupID Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
