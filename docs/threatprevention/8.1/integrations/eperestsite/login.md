---
title: "Login to EPE REST Service"
description: "Login to EPE REST Service APIs"
sidebar_position: 20
---

# log in to EPE REST Service APIs

You can use APIs to log in to the EPE REST Service:

- POST api/account/login (Digest)
- POST api/account/logoff (Digest)
- POST Token (Bearer)

## POST api/account/login (Digest)

Use this API to log in under a specified account.

This operation returns a session hash value in the body of the response, which you can use for
api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in
the header of the request.

**Authentication required – No**

Required Input Parameters

```
{
"username":"username",
"password":"password"
}
```

**Example**

![POST api/account/login (Digest)](/images/threatprevention/8.1/eperestsite/login.webp)

## POST api/account/logoff (Digest)

Use this API to log off from a specified session.

After this operation, the session for the specified account and the hash value are no longer valid.

**Authentication required – Digest**

Required Header Input Parameters

```
"User”: <username>
"Authorization”:”Hash”
"Hash": <hashvalue>
```

**Example**

![POST api/account/logoff (Digest)](/images/threatprevention/8.1/eperestsite/logoff.webp)

## POST Token (Bearer)

Use this API to log in under a specified account.

This operation returns an access_token value in the body of the response, which you can use for
api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in
the header of the request.

**Authentication required – Bearer**

Required Input Parameters (TEXT Format)

```
userName=<username>&password=<password>&grant_type=password&client_Id=self
```

**Example**

![POST Token (Bearer)](/images/threatprevention/8.1/eperestsite/token.webp)
