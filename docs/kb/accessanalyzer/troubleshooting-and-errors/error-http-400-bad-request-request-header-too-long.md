---
description: >-
  When using SSO for the Published Reports web console (port 8082), you may
  receive an HTTP 400 Bad Request (Request Header too long). This article
  explains the cause and how to adjust the IIS HTTP registry limits
  (`MaxFieldLength`, `MaxRequestBytes`) to resolve the issue.
keywords:
  - HTTP 400
  - Request Header Too Long
  - MaxFieldLength
  - MaxRequestBytes
  - IIS
  - SSO
  - Kerberos
  - WWW-Authenticate
  - registry
  - Published Reports
products:
  - access-analyzer
sidebar_label: 'Error: HTTP 400 Bad Request: Request Header Too Lo'
tags:
  - troubleshooting-and-errors
title: 'Error: HTTP 400 Bad Request: Request Header Too Long'
knowledge_article_id: kA0Qk00000020ITKAY
---

# Error: HTTP 400 Bad Request: Request Header Too Long

## Symptom

When attempting to use SSO for the **Published Reports** web console (port 8082), you encounter the following error:

```
HTTP 400 Bad Request (Request Header too long) responses to HTTP requests
```

## Cause

This issue may occur if the user is a member of many Active Directory user groups.

The HTTP request to the server contains the Kerberos token in the `WWW-Authenticate` header. The header size increases together with the number of user groups. If the HTTP header or packet size increases past the limits configured on the server, the server may reject the request and send an error message as the response.

## Resolution

To resolve this error, follow the steps below:

1. For IIS 6.0 and later, the `MaxFieldLength` and `MaxRequestBytes` registry keys are located at the following subkey:

   - `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\HTTP\Parameters`

2. Set the key values as shown in the following table:

   | Name           | Value Type | Value Data                    |
   | -------------- | ---------- | ----------------------------- |
   | `MaxFieldLength` | DWORD      | `(4/3 * T bytes) + 200`        |
   | `MaxRequestBytes` | DWORD      | `(4/3 * T bytes) + 200`        |

3. You can also set the registry keys to their maximum values, as shown in the table below. Consider all potential security ramifications before making any changes to the registry settings:

   | Name           | Value Type | Value Data                                   |
   | -------------- | ---------- | --------------------------------------------- |
   | `MaxFieldLength` | DWORD      | `65536 (Decimal) or 10000 (Hexadecimal)`       |
   | `MaxRequestBytes` | DWORD      | `16777216 (Decimal) or 1000000 (Hexadecimal)` |

For detailed information on this error message, refer to the full Microsoft documentation: [Troubleshooting HTTP 400 Bad Request Responses — Microsoft 🤥](https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/www-authentication-authorization/http-bad-request-response-kerberos#workaround-1-decrease-the-number-of-active-directory-groups).

## Related Article

- [Troubleshooting HTTP 400 Bad Request Responses — Microsoft 🤥](https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/www-authentication-authorization/http-bad-request-response-kerberos#workaround-1-decrease-the-number-of-active-directory-groups)
