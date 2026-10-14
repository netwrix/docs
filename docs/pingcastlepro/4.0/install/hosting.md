---
title: "Hosting"
description: "Choose and configure the infrastructure that hosts PingCastle Pro."
sidebar_position: 50
---

# Hosting

The application works on any infrastructure that the asp.net
core 8.0 middleware supports.

Microsoft has procedures to install the .NET 8.0 runtime:

- Linux installation\
  https://learn.microsoft.com/en-us/dotnet/core/install/linux

- Windows installation\
  https://learn.microsoft.com/en-us/dotnet/core/install/windows

The following list references Microsoft's procedures for setting up the
hosting of the application:

> Host ASP.NET Core on Windows with IIS\
> https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0
>
> Host ASP.NET Core on Linux with Nginx\
> https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-8.0
>
> Host ASP.NET Core on Linux with Apache\
> https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache

:::note
You can change the upload quota to allow large file uploads in Interoperability mode.
:::

:::note
IIS installs a \"Default Web Site\" by default, which may conflict with the PingCastle Pro application.
:::

The solution is to stop the default website and configure it to not
start automatically.

![](/images/pingcastlepro/4.0/proinstall/image34.webp)
