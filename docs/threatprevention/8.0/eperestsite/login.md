---
title: "Log in to EPE REST Service"
description: "Log in to EPE REST Service APIs"
sidebar_position: 20
---

# log in to EPE REST Service APIs

You can use APIs to log in to the EPE REST Service:

- POST api/account/login (Digest)
- POST api/account/logoff (Digest)
- POST Token (Bearer)

## POST api/account/login (Digest)

This API is used to login under a specified account.

This operation returns a session hash value in the response body. Use this value in api/Epe/CheckPassword requests by providing it in the request header.

**Authentication required – No**

Required Input Parameters

```
{
"username":"username",
"password":"password"
}
```

**Example**

![POST api/account/login (Digest)](/images/threatprevention/8.0/eperestsite/login.webp)

## POST api/account/logoff (Digest)

This API is used to log off from a specified session.

This operation makes session for the specified account and the hash value isn't valid anymore.

**Authentication required – Digest**

Required Header Input Parameters

```
"User”: <username>
"Authorization”:”Hash”
"Hash": <hashvalue>
```

**Example**

![POST api/account/logoff (Digest)](/images/threatprevention/8.0/eperestsite/logoff.webp)

## POST Token (Bearer)

This API is used to login under a specified account.

This operation returns an access_token value in the response body. Use this value in api/Epe/CheckPassword requests by providing it in the request header.

**Authentication required – Bearer**

Required Input Parameters (TEXT Format)

```
userName=<username>&password=<password>&grant_type=password&client_Id=self
```

**Example**

![POST Token (Bearer)](/images/threatprevention/8.0/eperestsite/token.webp)
