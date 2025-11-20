---
title: "Quick Start - Adding and Removing Features"
description: "Quick Start - Adding and Removing Features"
sidebar_position: 20
---

# Quick Start - Adding and Removing Features

:::note
For some video overviews of Netwrix Endpoint Policy Manager (formerly PolicyPak) Feature
Manager for Windows, see
[https://www.policypak.com/products/feature-manager-for-windows.html](https://www.policypak.com/products/feature-manager-for-windows.html).
:::


In this example we will uninstall and install the following:

- **Features**:

  - Uninstall the Microsoft XPS Document Writer
  - Uninstall SMB 1.0
  - Install .Net 3.5 (including .Net 2.0 and 3.0) Framework
  - Install Telnet Client

- **Optional Features**:

  - Uninstall the XPS Viewer
  - Install the Graphics Tools
  - Install the GPMC RSAT tools (Optional RSAT Feature; works only with Windows 1809+)

To begin, log on as a local admin on an test computer and verify that none of the items in the
bullet lists above are currently installed. Then, create and link a group policy object (GPO) to a
location that contains computers. In the example below, created a GPO and linked it to the East
Sales Desktops.

![quickstart_adding_and_removing](/images/endpointpolicymanager/feature/addremove/quickstart_adding_and_removing.webp)

Then click **Edit** to edit the GPO.

:::note
Even if you're using Endpoint Policy Manager Cloud or MDM edition, you still need to
create the policies within a GPO first.

:::


