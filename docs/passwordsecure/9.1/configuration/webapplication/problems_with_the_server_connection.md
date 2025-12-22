---
title: "Problems with the server connection"
description: "Problems with the server connection"
sidebar_position: 40
---

# Problems with the server connection

If no connection can be established from the Web Application, there are several possible causes:

**Server not started**

First, you should check whether the application server is running.

**Service not started**

The Windows service administration should be used to check whether the **Netwrix Password Secure
Service** has been started.

**Port not released**

Port 11016 TCP must be released on the application server.

**CORS not configured**

Make sure that the CORS configuration has been implemented. Further information can be found in
chapter Installation Web Application
