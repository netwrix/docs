---
title: "Directory Manager API Common Errors"
description: "Look up the HTTP error codes that every Directory Manager API can return and what each one means."
keywords:
  - API error codes
  - HTTP status codes
  - Directory Manager API
  - troubleshooting API requests
sidebar_position: 100
unlisted: true
---

# Directory Manager API Common Errors

This section lists the errors common to all APIs.

| Sr. # | Error Code | Error       | Description           |
| ----- | ---------- | -------------- | --------- |
| 1.    | 400        | Bad request         | Wrong parameters     |
| 2.    | 401        | Unauthorized        | Wrong or expired token   |
| 3.    | 404        | Not found           | The URL is incorrect or the object isn't found |
| 4.    | 405        | Method not allowed    | Wrong HTTP verb is used in the request      |
| 5.    | 500        | Internal server error | An exception or error occurred in the API      |
| 6.    | 501        | Not implemented       | The API doesn't implement the required function |
| 7.    | 503        | Service unavailable   | The API service isn't available      |
