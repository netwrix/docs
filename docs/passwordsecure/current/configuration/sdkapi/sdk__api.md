---
title: "SDK / API"
description: "SDK / API"
sidebar_position: 80
---

# SDK / API

API: This interface can be used to "address Netwrix Password Secure externally" in order to, for
example, read data for other programs. The API can only be accessed via our wrappers (SDK) using C#
and JavaScript.

In the JavaScript version of the API, all enums can be found under the global object "PsrApiEnums".

## Requirements and download

The SDK can be downloaded from the Customer Information System.

## Using the API

The central object is "PsrApi". It contains various "managers" that contain the entire business
logic. First a "PsrApi" object must be created. The only transfer parameter of this class is the
endpoint of the Netwrix Password Secure WebServices. If the Web Application is in use,
`https://Web Application-url/api` can be used as the endpoint. Otherwise the Netwrix Password Secure
Server, i.e. `app-server01:11016`, must be used directly.

## Login

If you do not log in to the system in advance, it is not possible to use the API. The first
parameter for the login method is the desired database, followed by the user name and password. It
is important to note that all methods for running the API that initiate a server call are
implemented asynchronously. “Task” objects are returned in C# and “Promise” objects are returned in
JavaScript.

## Technical documentation

You can find the complete technical documentation for the SDK
[here](https://help.passwordsafe.de/api/v9/).
