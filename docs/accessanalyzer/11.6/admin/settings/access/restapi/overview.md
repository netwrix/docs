---
title: "Web Service REST API for Applications Accessing Data Remotely"
description: "Web Service REST API for Applications Accessing Data Remotely"
sidebar_position: 20
---

# Web Service REST API for Applications Accessing Data Remotely

The Web Service integrates the Enterprise Auditor REST API as an endpoint that uses an OAuth 2.0
client credentials grant for authentication and provides the following access role:

- Read-Only – Read data only

See the
[Use the Client Credentials Grant to Obtain an Access Token](/docs/accessanalyzer/11.6/admin/settings/access/restapi/obtaintoken.md)
topic for additional information.

The client provides the access token in the HTTP header in the following format:

```
GET /api/v1/data/SA_ADInventory_UsersView/rows HTTP/1.1
Host: accessgovernance.company.com 
Authorization: Bearer N4ahquT7rXuiEEeUiNfKD0TjUq7JB9DS
```

See the MDN Web Docs
[The general HTTP authentication framework](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
article for additional information.
