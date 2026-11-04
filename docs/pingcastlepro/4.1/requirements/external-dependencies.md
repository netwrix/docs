---
title: "External system dependencies"
description: "Identify the external systems that PingCastle Pro depends on."
sidebar_position: 30
---

# External system dependencies

PingCastle Pro requires:

- **ASP.NET Core 8.0 Hosting Bundle**: Hosts the web application
- **IIS (Internet Information Services)**: Hosts the web server, with Windows Authentication available as a sign-in method

`PingCastle.exe` is self-contained and has no .NET dependency to install.

:::note
Install IIS before the ASP.NET Core 8.0 Hosting Bundle. If you don't, you may need to repair the Hosting Bundle installation.
:::

:::note
Netwrix recommends not exposing the web application directly. Use a reverse proxy such as IIS, Apache2, or Nginx.
:::
