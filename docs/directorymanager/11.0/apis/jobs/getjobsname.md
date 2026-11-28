---
title: "Get Job Names API in GroupID"
description: "Retrieve the names and types of all predefined and user-created Synchronize jobs with a GET request."
keywords:
  - "get job names API"
  - "Synchronize jobs"
  - "DataSyncJobs endpoint"
sidebar_position: 100
unlisted: true
---

# Get Job Names API in GroupID

Use this API to get a list of job names, both predefined and user-created.

## Endpoint

`https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Names`

## HTTP Method

GET

### Sample Response Syntax

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

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Synchronize Jobs APIs in GroupID](/docs/directorymanager/11.0/apis/jobs/jobsapis.md)
