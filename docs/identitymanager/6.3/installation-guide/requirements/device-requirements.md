---
title: "Integration Device"
description: "Integration Device"
sidebar_position: 10
---

# Integration Device

This section identifies the requirements for the Saas installation of Identity Manager. For the requirements of on premise installation see the Integration Device topic in the Identity Manager 6.0 or 6.1 [Netwrix Identity Manager (formerly Usercube) Help Center](https://helpcenter.netwrix.com/category/identitymanager) for additional information.

## Hardware

No matter whether the machine is virtual or physical, running a Identity Manager server or agent requires at least **8 GB** of RAM, **20 GB** of disk storage, and a **dual-core CPU**.

:::note
 Netwrix Identity Manager (formerly Usercube) recommends a 4-core CPU if SQL server is installed on this device. 
:::
## Software

[.NET version 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime) or higher must be installed.

**Microsoft Excel** must be installed.

A **web browser** must be accessible to test the future installation. Identity Manager's UI supports all popular browsers:

- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Apple Safari (latest 2 versions)
- Microsoft Edge Chromium

## Administrator Account

A **Windows local administrator account** is required to install the server and agent on the target Windows Server workstation.

## Additional Recommendations

A not-so-minimalist text editor such as [Notepad++](https://notepad-plus-plus.org/downloads/) can be useful to comfortably edit network configuration files. See the [Network Configuration](../../integration-guide/network-configuration)topic for additional information.

## What's Next?

Let's move on to the requirements for Identity Manager's database. See the[Database](../../installation-guide/requirements/database-requirements)topic for additional information.

