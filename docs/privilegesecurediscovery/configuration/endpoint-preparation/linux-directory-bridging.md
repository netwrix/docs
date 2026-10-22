---
title: "Password handling in Linux lightweight directory bridging"
description: "Learn how Privilege Secure for Discovery receives, encrypts, and uses a user's Active Directory password to create a local Linux account for a JITA session."
sidebar_position: 60
---

This page describes how Netwrix Privilege Secure for Discovery handles a user's Active Directory (AD) password when it grants access to a Linux system that uses lightweight directory bridging, which the UI labels **SecureONE**. Security teams can use it to review the flow. For questions, contact Netwrix Support.

Systems that use SSSD, PowerBroker, or Centrify don't need the password. The product doesn't create accounts on them.

## Grant access to a Linux system

When a user requests just-in-time access (JITA) to a system:

1. The web UI sends the request to the API with the user's JSON Web Token (JWT). If the JWT has no password, the UI asks the user for the AD password first. See the next section.
2. The API takes the encrypted password from the JWT and saves it with the access request, together with the computer and the requesting user.
3. The worker service picks up the request, decrypts the password, and creates or updates a local account on the system with the user's AD user name and that password. The product stores the password on the endpoint only as a salted SHA-512 hash.
4. The worker adds the user to the sudoers file.
5. When the session ends, the worker removes the sudoers entry and sets a random 32-character password on the local account. The local account and its files stay on the system.

The product removes the encrypted password from the access request when it writes the request to its logs.

## How the password reaches the JWT

The product uses JWTs to authenticate API calls. A JWT can carry the user's password in the `encpass` claim, encrypted with the key that the product keeps in its Docker secrets. The password reaches the JWT in one of two ways:

- If the sign-in method sends an AD domain, user name, and password to the product, the product encrypts the password into the JWT when it issues it.
- Otherwise, when the user starts an action that needs the password, the UI asks for it. It sends the password to the API and receives a new JWT that includes it. The new JWT has the same expiration time as the old one.

SAML single sign-on (SSO) doesn't supply a password, so SSO users get the prompt.

In both cases, the product doesn't store the password when it issues or updates the JWT.

## JWT access tokens

1. A client gets an access token by calling a sign-in endpoint, for example `/api/v1/login` or `/api/v1/login/sso`.
2. The product replies with a signed JWT that has information about the user. It doesn't keep the token.
3. The UI or API client sends the JWT with every request.
4. The JWT stays valid until its expiration time. The default lifetime is 8 hours.

For more about the format, see [jwt.io](https://jwt.io/introduction).

Anyone with access to the user's browser storage can decode the payload of the JWT. The password in `encpass` stays encrypted. The following example shows a payload with placeholder values:

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
