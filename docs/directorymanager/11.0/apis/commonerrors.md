---
title: "GroupID API Common Errors"
description: "Look up the HTTP error codes that every GroupID API can return and what each one means."
keywords:
  - API error codes
  - HTTP status codes
  - GroupID API
  - troubleshooting API requests
sidebar_position: 90
unlisted: true
---

# GroupID API Common Errors

This section lists the errors common to all APIs. For errors specific to an API, see the topic for
that API.

| Sr. # | Error Code | Error                 | Description                                 |
| ----- | ---------- | --------------------- | ------------------------------------------- |
| 1.    | 400        | Bad request           | Wrong parameters                            |
| 2.    | 401        | Unauthorized          | Wrong or expired token                      |
| 3.    | 404        | Not found             | The URL is incorrect or the object isn't found |
| 4.    | 405        | Method not allowed    | Wrong HTTP verb is used in the request      |
| 5.    | 500        | Internal server error | An exception or error occurred in the API   |
| 6.    | 501        | Not implemented       | The API doesn't implement the required function |
| 7.    | 503        | Service unavailable   | The API service isn't available            |

See Also

- GroupID APIs
- [User APIs in GroupID](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
