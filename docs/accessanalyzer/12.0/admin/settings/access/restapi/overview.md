---
title: "Web Service REST API for Applications Accessing Data Remotely"
description: "Web Service REST API for Applications Accessing Data Remotely"
sidebar_position: 20
---

# Web Service REST API for Applications Accessing Data Remotely

The Access Analyzer REST API is integrated into the Web Service as an endpoint using an OAuth 2.0
client credentials grant for authentication and providing the following access role:

- Read-Only – Read data only

See the [Use the Client Credentials Grant to Obtain an Access Token](/docs/accessanalyzer/12.0/admin/settings/access/restapi/obtaintoken.md) topic for
additional information.

The client provides the access token in the HTTP header in the following format:

```
GET /api/v1/data/SA_ADInventory_UsersView/rows HTTP/1.1
Host: accessgovernance.company.com 
Authorization: Bearer N4ahquT7rXuiEEeUiNfKD0TjUq7JB9DS
```

See the MDN Web Docs
[The general HTTP authentication framework](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
article for additional information.
