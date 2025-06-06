# Quick Start - Adding and Removing Features

__NOTE:__ For some video overviews of Netwrix Endpoint Policy Manager (formerly PolicyPak) Feature Manager for Windows, see [https://www.policypak.com/products/feature-manager-for-windows.html](https://www.policypak.com/products/feature-manager-for-windows.html).

In this example we will uninstall and install the following:

- __Features__:

  - Uninstall the Microsoft XPS Document Writer
  - Uninstall SMB 1.0
  - Install .Net 3.5 (including .Net 2.0 and 3.0) Framework
  - Install Telnet Client
- __Optional Features__:

  - Uninstall the XPS Viewer
  - Install the Graphics Tools
  - Install the GPMC RSAT tools (Optional RSAT Feature; works only with Windows 1809+)

To begin, log on as a local admin on an test computer and verify that none of the items in the bullet lists above are currently installed. Then, create and link a group policy object (GPO) to a location that contains computers. In the example below, created a GPO and linked it to the East Sales Desktops.

![quickstart_adding_and_removing](/static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing.png)

Then click __Edit__ to edit the GPO.

__NOTE:__ Even if you're using Endpoint Policy Manager Cloud or MDM edition, you still need to create the policies within a GPO first.
