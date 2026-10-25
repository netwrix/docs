---
title: "REST API overview"
description: "Learn how the Privilege Secure REST API is addressed, authenticated, paged, and secured, and where Swagger fits, before you automate the product."
sidebar_position: 10
---

# REST API overview

Netwrix Privilege Secure has a REST API. Every operation that the console performs goes through this API, so a script or an external tool can do the same work that an administrator does in the console.

The API returns JSON and uses standard HTTP methods. This page describes the conventions that apply to every endpoint. To get a token, see [Authenticate to the API](api-authentication.md).

## Base URL

The API listens on the same server and port as the console.

```text
https://<nps-server>:6500/api/v1/
```

Each resource group is a controller name appended to the base URL, for example `https://<nps-server>:6500/api/v1/ActivitySession`. A few sign-in endpoints sit at the root of the site instead, such as `https://<nps-server>:6500/signinBody`. See [Authenticate to the API](api-authentication.md).

:::note
Use port 6500, the default console port, for API calls. {/* TODO verify: whether changing the web port is supported. The installer binds the site to port 6500, and code and public sources don't state a support position. */}
:::

Two endpoints report on the server itself:

| Endpoint | Returns |
|---|---|
| `GET /api/v1/health` | The health of the web service. |
| `GET /api/v1/Version` | The product version. |

## Authentication

Every request, except the sign-in requests, carries a bearer token in the `Authorization` header.

```text
Authorization: Bearer <token>
```

A token is valid for 15 minutes by default. The token lifetime is a server setting, separate from the console's **UI Idle Timeout**. A script that runs longer renews the token before it expires. Two kinds of account can request a token:

| Account | Use it for | Credentials |
|---|---|---|
| User | Interactive scripts that run as a person. | User name and password, plus a second factor if the user's authentication connector requires one. |
| Application user | Unattended automation. | Client certificate serial number and API key. |

For the steps, see [Authenticate to the API](api-authentication.md). To create an application user, see [Add application users](../../admin/users-groups/application-users.md).

## Roles and permissions

The role of the account that owns the token decides what each endpoint allows. A user token carries the roles of that user. An application user token is built the same way: it carries the roles that the application user has through console access and the roles assigned to it. An application user without a role can't call endpoints that require one. Give an application user only the roles that its tool needs, and give the API key and client certificate only to tools that you trust with those roles. For the roles that exist in the console, see [Roles and permissions](/docs/privilegesecure/26.07/admin/roles/roles.md). To assign roles, see [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).

## Searching and paging

List endpoints are named `Search` and page their results with query parameters.

| Parameter | Description |
|---|---|
| `skip` | The number of records to skip. |
| `take` | The number of records to return. |
| `filterText` | Text to match. Many endpoints add their own filters, for example a date range or a credential type. |

The following request returns the first 30 records of the activity session search.

```text
GET https://<nps-server>:6500/api/v1/ActivitySession/Search?skip=0&take=30&filterText=
```

The response holds the records in a `data` property and the total number of matching records in `recordsTotal`. Some endpoints add properties to this envelope. The activity session search adds `topUsers` and `summary`. To read all records, repeat the request and raise `skip` by the `take` value until a page returns fewer records than `take`.

The default value of `take` differs between endpoints, for example 10 for activity sessions and 100 for users and groups. Some endpoints cap `take`. The search for group and role candidates accepts at most 1000.

## Resource groups

The API groups its endpoints by the areas of the console.

| Area | Examples of what you can do |
|---|---|
| Authentication and sessions | Sign in, renew a token, sign out. |
| Users, groups, and roles | Create users and application users, assign roles. |
| Resources and discovery | Manage resources, resource groups, platforms, and host scans. |
| Credentials and rotation | Search credentials, view passwords, and rotate passwords. |
| Access policies and activities | Manage policies, activities, approval workflows, and command restrictions. |
| Session recording and audit | Read activity sessions and replay data, run reports. |
| Integrations and notifications | Manage integration connectors, SIEM servers and templates, and email. |
| Platform administration | Read and change system settings, license information, and configuration export and import. |

{/* TODO: add an example of a complete call, such as rotating a credential, after a generated 26.07.3 reference exists */}

## Errors

The API reports most errors as an HTTP status code with a JSON body in the standard problem details format. Some sign-in failures return a plain text message instead, for example "Invalid Username or Password". The message for a failed application user sign-in is intentionally vague.

## Swagger

The API can publish a Swagger page that lists its endpoints. Swagger is off by default.

To turn it on, add `"SwaggerEnable": true` to `C:\ProgramData\Stealthbits\PAM\WebService\appsettings.json`, and restart the web application. The server reads the setting at startup. If the file doesn't exist, create it with this setting inside a JSON object.

{/* TODO verify: whether the Swagger page and specification load with SwaggerEnable set to true, and their URLs. Release code (SbPAM.Web.UI Startup.cs, 26.07.3, lines 622-629) maps /swagger/v1/swagger.json to a 404 "Swagger is disabled" response when the setting is on, so a dev instance must confirm before the URLs are documented. */}

## Calling the API from a script

Use PowerShell 7 or `curl`. `Invoke-RestMethod` in Windows PowerShell 5.1 can fail to open the TLS connection to the Privilege Secure server, with the error "The underlying connection was closed".

{/* TODO verify: the cause of the Windows PowerShell 5.1 failure and whether setting [Net.ServicePointManager]::SecurityProtocol fixes it. Microsoft documents how .NET Framework picks TLS versions, but no public source ties this error to the Privilege Secure server, and it needs a 5.1 client to reproduce. */}

Trust the certificate authority (CA) that issued the server certificate instead of turning certificate checks off. With `curl`, point the client at the CA certificate file with `--cacert <ca-certificate-file>`.

:::note
The `SbPAMPowerShellModules` installer in the installer `Extras` folder installs the `SbPAMAPI` PowerShell module, which wraps these calls with cmdlets such as `Get-SbPAMToken` and `Invoke-SbPAMRest`. The Knowledge Base articles that use it call for PowerShell 7. This guide doesn't document the full cmdlet list.
:::

{/* TODO verify: the full cmdlet list for the SbPAMAPI module and its supported PowerShell versions for 26.07. The Knowledge Base articles name PowerShell 7.1 and warn against 7.2 and later, so the shipped installer package must settle it. */}

## Next steps

- [Authenticate to the API](api-authentication.md)
- [Add application users](../../admin/users-groups/application-users.md)
