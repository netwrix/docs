---
title: "Usercube-Login"
description: "Usercube-Login"
sidebar_position: 240
---

# Usercube-Login

Delegates the authentication process to a third-party Identity Provider which will provide an
authentication token required to allow the remote deployment/export of Identity
Manager configuration.

The provided authentication token is meant to be sent to the Identity Manager administrator.

## Examples

The following example launches the authentication to Identity Manager's in-house Identity Provider
(IDP). It will open your default browser to `http://localhost:5005` where you will be redirected to
Identity Manager's IDP that will provide you with the authentication token.

```

**./identitymanager-Login.exe**

```

The following example launches the authentication to a specific Identity Provider whose
authentication URL and Client Id are respectively `https://my_oidc_authentication_server.com` and
`34b3c-fb45da-3ed32`. It will open your default browser to `http://localhost:5005` where you will be
redirected to the IDP that will provide you with the authentication token.

```

**./identitymanager-Login.exe --authority https://my_oidc_authentication_server.com --client-id 34b3c-fb45da-3ed32**

```

The following example launches the authentication to Identity Manager's Identity Provider, but using
a specific port `5050`. It will open your default browser to `http://localhost:5050` where you will
be redirected to Identity Manager's IDP. that will provide you with the authentication token.

```

**./identitymanager-Login.exe --port 5050**

```

## Arguments

| Argument Name              | Details                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --authority optional       | **Type** String **Description** Base URL of the Identity Provider used for authentication. When not specified, Identity Manager provides an in-house Identity Provider.                                                                                                                              |
| --client-id optional       | **Type** String **Description** Client Id of the application authorized to delegate the authentication to the specified Identity Provider. When not specified, Identity Manager provides the Client Id for the in-house Identity Provider. **Note:** ask for this id to your internal administrator. |
| --port default value: 5005 | **Type** Int64 **Description** Port used to run the local web page.                                                                                                                                                                                                                                  |
