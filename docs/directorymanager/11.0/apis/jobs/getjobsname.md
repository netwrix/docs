---
title: "Get Jobs Names"
description: "Get Jobs Names"
sidebar_position: 100
---

# Get Jobs Names

Using this API you can get a list of job names both predefined and user created.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Names

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "name": "Move and Disable Objects In Active Directory",
        "type": "3"
    },
    {
        "name": "Linked Mailbox Creation In Active Directory",
        "type": "3"
    },
    {
        "name": "Move Objects in Active Directory",
        "type": "3"
    },
    {
        "name": "Sync GAL In Active Directory",
        "type": "3"
    },
    {
        "name": "NewJob",
        "type": "1"
    },
    {
        "name": "Sync_API",
        "type": "1"
    }
]
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Synchronize Jobs APIs](/docs/directorymanager/11.0/apis/jobs/jobsapis.md)
