---
title: "User Login After First Launch"
description: "User Login After First Launch"
sidebar_position: 10
---

# User Login After First Launch

After you install Threat Manager, users with access can log into the console using either of the
following methods:

Log into Threat Manager locally on the default port using default credentials. For example

- http://localhost:8080
- http://[MACHINENAME.DOMAIN.COM]:8080

These addresses apply when you didn't select HTTPS in the installer. When you select HTTPS, the Dashboard
shortcuts and the launch after installation open `https://<fully qualified host name>:<port>`. The port is the
`WebService:Port` value, 5000 by default.

The login, multifactor authentication (MFA) login, and MFA registration pages show error messages in red.

You can also access Threat Manager through the Web Console. Open this console using the
desktop icon that the Netwrix Access Analyzer (formerly Enterprise Auditor) installer places on its
server.

- http://[MACHINENAME.DOMAIN.COM]:8082
