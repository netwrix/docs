---
title: "Password handling in Linux lightweight directory bridging"
description: "Learn how Privilege Secure for Discovery stores and uses a user's Active Directory password in a JWT access token for Linux directory bridging."
sidebar_position: 60
---

This page describes how Netwrix Privilege Secure for Discovery handles a user's Active Directory (AD) password when it grants access to Linux systems that use lightweight directory bridging. The content is technical. For questions or concerns, contact Netwrix Support.

## Grant access to Linux systems

When a user requests access to a system, the following process takes place:

1. An API call is made with the user's JSON Web Token (JWT). The product extracts the encrypted password from the JWT and temporarily stores it in the database `queue` collection, together with information about the computer and the requesting user.
2. The Privilege Secure for Discovery worker service picks up the `queue` item. It now has access to the user's AD user name and password. If the bridging mode for the system is `secureone` (lightweight directory bridging), the worker creates or updates a local user on the system with the user name and password that match AD. It also adds the user to the sudoers file.
3. When the worker finishes, it removes the encrypted password from the `queue` record.
4. When the access session ends, the worker or scanner service removes the user's sudoers permission from the system. In certain cases, it also scrambles the user's password. The local user and its associated files remain on the system.

## How the AD password reaches the JWT

Privilege Secure for Discovery uses JWTs for API authentication. A JWT can include an encrypted password. The product encrypts the embedded password with the key from the Docker secrets.

A user can provide the password in one of two ways:

- If the sign-in method submits an AD domain, user name, and password to Privilege Secure for Discovery, the product stores that password when it first issues the JWT.
- Otherwise, when the user performs an action in the web UI that might require the password, a dialog box prompts for it. The web UI sends the password to the API and obtains a new JWT that includes the password. The user then uses the new JWT to perform the action.

In either case, Privilege Secure for Discovery doesn't store the password after it issues or updates the JWT.

## JWT access tokens

This section is a brief overview. For more information about how a JWT works, see [jwt.io](https://jwt.io/).

1. A client obtains an access token by calling an endpoint on the API, for example `/api/v1/login` or `/api/v1/login/sso`.
2. Privilege Secure for Discovery responds with a signed access token ([JWT](https://jwt.io/introduction)) that has some embedded information about the user. The product doesn't store the access token after the sign-in request finishes.
3. The web UI or API client sends the JWT with every API request.
4. The JWT remains valid until the expiration date that is encoded in it.

Anyone who has access to the user's browser storage can decode the JWT. The payload can look like the following example. All values are placeholders:

```json
{
  "access": {
    "date_added": "<timestamp>",
    "ga_enabled": false,
    "role": "admin"
  },
  "distinguishedName": "CN=Example Admin,CN=Users,DC=example,DC=com",
  "encpass": "<encrypted-password>",
  "exp": "<expiration-timestamp>",
  "iat": "<issued-at-timestamp>",
  "id": "<user-id>",
  "jti": "<token-id>",
  "objectSid": "<user-sid>",
  "sAMAccountName": "<sam-account-name>",
  "type": "access"
}
```

:::warning
Treat a JWT as a secret. Anyone who has the token can use it until it expires.
:::
