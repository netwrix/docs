---
title: "Linux Lightweight Directory Bridging - JWT and Passwords"
description: "Linux and  Lightweight Directory Bridging - JWT and Passwords"
sidebar_position: 10
---

# Linux and  Lightweight Directory Bridging - JWT and Passwords

Linux and Lightweight Directory Bridging - JWT and Passwords

# Linux and Lightweight Directory Bridging - JWT and Passwords

This purpose of this article is to walk through the underpinnings for Linux endpoints in
regards to storing passwords in the JWT access token.

**NOTE:** This is farily technical and any questions or concerns can be addressed with the Support
Team.

## Granting Access to Linux systems

When the user requests access to a system:

An API call is made using the JWT. The encrypted password is extracted from the JWT and
(temporarily) stored in the database in the `queue` collection, along with information about the
computer being accessed and the user making the request.

- When the Privilege Secure worker service picks up the `queue` item for processing, it now has
  access to the user’s active directory username and password. If the bridging mode for the system
  is “Privilege Secure” (lightweight directory bridging), it creates or updates a local user on the
  system with the username and password to match Active Directory. It also adds the user to the
  sudoers file.
- When the worker finishes, it removes the encrypted password from the database `queue` record.
- When the access session ends:

    - The worker or scanner service removes the user’s sudoers permission from the system. In
      certain cases, the user’s password is also scrambled. The created local user and associated
      files are left on the system.

## User’s Active Directory Password is Stored In JWT Access Token

Privilege Secure uses JWT tokens for API authentication. Part of the information embedded in the JWT
may include an encrypted password. The embedded password is encrypted using the key from Docker
secrets.

There are two ways for the user to provide this password:

- If the login method includes submitting an Active Directory domain/ username/ password to
  Privilege Secure, that password is stored when the JWT is first issued.
- Otherwise, when the user performs an action in the Web UI that might require their password, a
  dialog appears prompting for a password. The Web UI then sends the password to the API and obtains
  a new JWT token, which now includes the password. The new JWT can then be used to perform the
  action.

In either case, Privilege Secure does not store this password after issuing / updating the JWT.

## JWT access tokens in Privilege Secure

**CAUTION:** This is just a brief overview. For more information on how the JWT works, see
[jwt.io](https://jwt.io/).

- A obtains an access token by calling an API endpoint on the Privilege Secure API:

    - Example: `/api/v1/login`
    - Example: `/api/v1/login/sso`

- Privilege Secure responds with a signed access token ([JWT](https://jwt.io/introduction)) with
  some embedded information about the user.

    - Privilege Secure does NOT store the access token after the login request finishes.

- The Web UI (or API client) sends the JWT with every API request going forward.
- The JWT remains valid until the expiration date encoded in the JWT.
- The JWT can be decoded by anyone that has access to the user’s browser storage. They might see a
  payload such as:

```
{
"access": {
"date_added": "2019-06-17T22:21:24.395Z",
"ga_enabled": false,
"role": "admin"
},
"distinguishedName": "CN=Admin Integration-Test,CN=Users,DC=rtest,DC=com",
"encpass": "p9wolaWb3BYa5QFIK0FEowmjaWZIaCp1c/ryoWap7RhC6tHX2ZhWHbBEq2hcG49kRTPIH702jybMlT+bQd7cKu",
"exp": "2025-10-21T21:08:13.887746",
"iat": "2023-01-25T21:08:13.888887",
"id": "5d08122657b096e79c12c4cf",
"jti": "7ce3123f-e963-4635-ac90-fef5a80f313f",
"objectSid": "S-1-5-21-1366766991-2637077591-3940904154-210946",
"sAMAccountName": "adminintegrationtest",
"type": "access"
}
```
