---
title: "Login to EPE REST Service APIs"
description: "Login to EPE REST Service APIs"
sidebar_position: 20
---

# Login to EPE REST Service APIs

You can use APIs to login to the EPE REST Service:

- POST api/account/login (Digest)
- POST api/account/logoff (Digest)
- POST Token (Bearer)

## POST api/account/login (Digest)

This API is used to login under a specified account.

This operation returns a session hash value in the body of the response, that can be used for
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

![POST api/account/login (Digest)](/images/threatprevention/7.4/eperestsite/login.webp)

## POST api/account/logoff (Digest)

This API is used to log off from a specified session.

This operation makes session for the specified account and the hash value is not valid anymore.

**Authentication required – Digest**

Required Header Input Parameters

```
"User”: <username>
"Authorization”:”Hash”
"Hash": <hashvalue>
```

**Example**

![POST api/account/logoff (Digest)](/images/threatprevention/7.4/eperestsite/logoff.webp)

## POST Token (Bearer)

This API is used to login under a specified account.

This operation returns an access_token value in the body of the response, that can be used for
api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in
the header of the request.

**Authentication required – Bearer**

Required Input Parameters (TEXT Format)

```
userName=<username>&password=<password>&grant_type=password&client_Id=self
```

**Example**

![POST Token (Bearer)](/images/threatprevention/7.4/eperestsite/token.webp)
