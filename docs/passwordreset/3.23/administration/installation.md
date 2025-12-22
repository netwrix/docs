---
title: "Installation"
description: "Installation"
sidebar_position: 20
---

# Installation

Netwrix Password Reset V3.23 is designed to run on Windows 2008 to 2019. Users access Password Reset
from a web browser, or from the Password Reset console.

## System Requirements

- Windows 2008\*, 2008 R2, 2012, 2012 R2, 2016, or 2019.

    \*x64 only for APR Server and Web Interface.

- 20 Megabytes free disk space.
- 20 Megabytes free RAM.

## System Components

Password Reset has two server components, and an optional client. Both server components can be
installed on one server, or they may be installed on separate servers if your web server is in a
DMZ.

### The Web Interface

The Web Interface is the component that users interact with. It accepts user requests, encrypts
them, and sends them to the Password Reset Server. The Web Interface must be installed on a server
running IIS 7 or later.

### The Netwrix Password Reset Server

The Password Reset Server is the component that performs requests on behalf of users. It receives
requests from the Web Interface, checks the user's credentials, and performs the requested task if
the credentials are valid.

![installing_apr](/images/passwordreset/3.23/evaluation/installing_apr_1.webp)

:::note
Microsoft SQL Server Compact is installed with the Password Reset Server. SQL Server
Compact is free to use, and should only be removed if you move the database to SQL Server. SQL
Server Compact is an embedded database. Unlike SQL Server, you do not need to configure or manage
it. See the
[Working with the Database](/docs/passwordreset/3.23/administration/working_with_the_database.md)
topic for additional information.
:::


## Installation Types

A single server installation is recommended where users will only access Password Reset from a
trusted network, including a VPN. In this installation type, the Web Interface and Password Reset
Server are both installed on the same server. The server must have access to a domain controller in
each managed domain.

If Password Reset will be accessible from the Internet without a VPN, then it is likely that you
will want to run the Web Interface in a DMZ. A multiple server installation is recommended for this
scenario. In this installation type, the Web Interface is installed on an server in the DMZ and the
Password Reset Server is installed on another server in the internal network. A firewall rule allows
the two servers to communicate.

You choose the installation type when installing Password Reset, but you can change it later.

:::note
An Password Reset Server can accept requests from more than one Web Interface. Having
multiple Web Interfaces allows for load balancing and failover, but you should only consider this
option if you already have redundant web servers. Most organizations only need one Web Interface.
:::


Password Reset can share server resources with other applications. It is normally not necessary to
dedicate a server exclusively to Password Reset. The Web Interface can be installed on an existing
web server as long as it is well secured and not overloaded. The Password Reset Server can run on an
existing member server or domain controller.

### Single Server Installation

Follow the steps below to install the Web Interface and Password Reset Server on a single server.

**Step 1 –** Start the Password Reset Setup wizard (APR323.exe).

**Step 2 –** The Setup wizard may ask you to backup some files if an older version of Password Reset
is detected. Backup the files, and then click **Next**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the License Agreement. Click **I accept the terms of the license agreement**, and
then click **Next** if you accept all the terms.

**Step 5 –** Select the **All Components** option, and then click **Next**.

**Step 6 –** The Setup wizard may offer to install IIS. Click **OK** to install IIS.

**Step 7 –** Enter a **User Name**, **Domain**, and **Password** for the Password Reset service
account. The account will be created and added to the Domain Admins group if it does not exist.

:::note
You can remove the account from the Domain Admins group later. If using an existing
account, make sure it has the required permissions. See the
[Securing Password Reset](/docs/passwordreset/3.23/administration/securing_password_reset.md)
topic for additional information.
:::


**Step 8 –** Click **Next**.

**Step 9 –** Select an **IIS Web Site** from the drop-down list, and optionally change the default
**Virtual Directory** for the Web Interface.

:::note
The Web Interface should be installed in its own virtual directory.
:::


**Step 10 –** Click **Next** twice.

**Step 11 –** Wait for Password Reset to install, and then click **Finish**.

:::note
The Password Reset Setup wizard installs the Password Reset Server and associated files
into the `\Program Files\ANIXIS Password Reset\` folder by default. Use the SERVERDIR parameter to
install the Password Reset Server to a different folder. For example, APR323.exe
SERVERDIR="D:\Programs\APR\"
:::


### Multiple Server Installation

Create firewall rules to allow the Web Interface and Password Reset Server to communicate if there
is a DMZ firewall between them. The Web Interface initiates a request by sending a datagram with the
following properties:

| Web Interface Datagram |                                    |
| ---------------------- | ---------------------------------- |
| Protocol               | UDP                                |
| Source Address         | Web Interface server's IP address  |
| Source Port            | Any                                |
| Destination address    | Password Reset Server's IP address |
| Destination Port       | 5100                               |

The Password Reset Server responds with a datagram that has the following properties:

| APR Server Datagram |                                    |
| ------------------- | ---------------------------------- |
| Protocol            | UDP                                |
| Source Address      | Password Reset Server's IP address |
| Source Port         | 5100                               |
| Destination address | Web Interface server's IP address  |
| Destination Port    | Any                                |

Install Password Reset Server on an Internal Network

Follow the steps below to install the Password Reset Server on a server in the internal network.

**Step 1 –** Start the Password Reset Setup wizard (APR323.exe).

**Step 2 –** The Setup wizard may ask you to backup some files if an older version of Password Reset
is detected. Backup the files, and then click **Next**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the License Agreement. Click **I accept the terms of the license agreement**, and
then click **Next** if you accept all the terms.

**Step 5 –** Select the Server **Only option**, and then click **Next**.

**Step 6 –** Type a **User Name**, **Domain**, and **Password** for the Password Reset service
account. The account will be created and added to the Domain Admins group if it does not exist.

:::note
You can remove the account from the Domain Admins group later. If using an existing
account, make sure it has the required permissions. See the
[Securing Password Reset](/docs/passwordreset/3.23/administration/securing_password_reset.md)
topic for additional information.
:::


**Step 7 –** Make sure the **Create Windows Firewall Exception for the APR Server service** check
box is selected, and then click **Next** twice.

**Step 8 –** Wait for the Password Reset Server to install, and then click **Finish**.

:::note
Open UDP port 5100 on the Password Reset Server computer if a host-based firewall other
than the Windows Firewall is installed. This is needed in addition to the DMZ firewall rules
above.
The Password Reset Setup wizard installs the Password Reset Server and associated files into the
`\Program Files\ANIXIS Password Reset\` folder by default. Use the SERVERDIR parameter to install
the Password Reset Server to a different folder. For example, APR323.exe
SERVERDIR="D:\Programs\APR\"
:::


Install Web Interface Server in DMZ

Follow the steps below to install the Web Interface on a server in the DMZ.

**Step 1 –** Start the Password Reset Setup wizard (APR323.exe).

**Step 2 –** The Setup wizard may ask you to backup some files if an older version of Password Reset
is detected. Backup the files, and then click **Next**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the License Agreement. Click **I accept the terms of the license agreement**, and
then click **Next** if you accept all the terms.

**Step 5 –** Select the **Web Interface Only** option, and then click **Next**.

**Step 6 –** The Setup wizard may offer to install IIS. Click **OK** to install IIS.

**Step 7 –** Select an **IIS Web Site** from the drop-down list, and optionally change the default
**Virtual Directory** for the Web Interface. The Web Interface should be installed in its own
virtual directory.

**Step 8 –** Click **Next** twice.

**Step 9 –** Wait for the Web Interface to install, and then click **Finish**.

**Step 10 –** Start the Registry Editor (regedit.exe).

**Step 11 –** Expand the **HKEY_LOCAL_MACHINE**, **SOFTWARE**, **ANIXIS**, **ANIXIS Password
Reset**, and **3.0** registry keys.

**Step 12 –** Set the **ServerIP** registry value to the IP address of the computer that you
installed the Password Reset Server onto.

![RegistryEditor](/images/passwordreset/3.23/administration/registryeditor.webp)

The Password Reset Setup wizard only installs one Web Interface on each server, but you can copy the
files to another directory and publish several Web Interfaces from one server. This allows you to
present different user interfaces from each directory. The Web Interfaces all communicate with the
same APR Server because there is only one ServerIP value.

Follow the steps below to configure the Web Interfaces to communicate with different Password Reset
Servers.

**Step 1 –** Start the Registry Editor (regedit.exe).

**Step 2 –** Expand the **HKEY_LOCAL_MACHINE**, **SOFTWARE**, **ANIXIS**, **ANIXIS Password Reset**,
and **3.0** registry keys.

**Step 3 –** Clear the data in the **ServerIP** registry value.

**Step 4 –** Create a REG_SZ value for each Web Interface called ServerIP_VDIR where VDIR is the
name of the virtual directory.

For example, if the virtual directory is called Finance, then the registry value should be called
ServerIP_Finance.

**Step 5 –** Set each ServerIP_VDIR value to the IP address of the Password Reset Server.

## Upgrading From APR V3.x

Some planning is needed to ensure a smooth upgrade from APR V3.x. A trial run on a lab network is
recommended if you have not installed APR before.

### Before You Begin

The database files are not overwritten during an upgrade, but you should still create a backup
before upgrading. See the
[Backing up the Database](/docs/passwordreset/3.23/administration/working_with_the_database.md#backing-up-the-database)
topic for additional information.

**The Web Interface files are overwritten during an upgrade. You must backup any customized Web
Interface files before upgrading**. The Web Interface files are installed in the
`\Inetpub\wwwroot\pwreset\` folder by default.

:::note
A full backup of the APR server(s) is recommended. This allows you to roll back to the
previous version if the upgrade cannot be completed.
You may need to restart Windows after upgrading.
:::


If Password Reset was originally installed by someone else and you do not have their installation
notes, then read this Installation topic before you begin. Also make sure you know the password for
the Password Reset Server service account as you will need it during the upgrade.

### Upgrading to V3.23

Start the Password Reset Setup wizard (APR323.exe) and follow the prompts. The Setup wizard
uninstalls the previous version, so there is no need to manually uninstall it.

If the Password Reset Server and Web Interface are installed on different servers, then upgrade all
servers before using the new version. The Password Reset Server and Web Interface are only tested
with matching versions.

Restore any customized Web Interface files after upgrading. Do not restore APR.dll from the backup
as it belongs to the previous version. You should keep a copy of the original Web Interface files
and compare them with the files from the previous version using a file comparison tool. Any changes
between versions should be merged into your customized files.

The Password Reset V3.23 data console does not read the VerificationCode or EnrollRecord columns
from the User table on SQL Server. Access to these columns can be denied for Data Console users
after upgrading all instances of the Data Console. See the
[Using the Data Console](/docs/passwordreset/3.23/administration/using_the_data_console.md)
topic for additional information.

## Upgrading From APR V2.x

As this is a major upgrade with many changes, some planning is needed to ensure a smooth upgrade. A
trial run on a lab network is recommended, especially if you are customizing the user interface. See
the
[Editing the HTML Templates](/docs/passwordreset/3.23/administration/editing_the_html_templates.md)
topic for additional information.

:::warning
APR V3.23 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade PPE
to a compatible version if you have enabled Password Policy Enforcer integration. See the
[Configuring Password Reset](/docs/passwordreset/3.23/administration/configuring_password_reset.md)
topic for additional information.
APR V3.23 does not include a 32-bit APR Server or Web Interface. The computer(s) running the APR
server components must be running Windows 64-bit. This does not apply to the client computers.
APR V3.23 uses HTML5 and CSS3 features that are not supported by Internet Explorer 8 and earlier.
The
[Password Reset Client](/docs/passwordreset/3.23/evaluation/password_reset_client.md)
uses Internet Explorer for page rendering, so the default HTML templates do not display correctly in
the Password Reset Client on Windows XP and Server 2003. Send an e-mail to
[support@netwrix.com ](mailto:support@anixis.com)before upgrading if you still have computers
running Internet Explorer 8.
APR V3.23 server components have not been tested on, and are not supported on Windows 2003.
:::


### Before You Begin

**Step 1 –** Backup the APR V2.x server(s).

**Step 2 –** Close the Data Console if it is open.

**Step 3 –** Stop the Netwrix Password Reset service and backing up the database. See the
[Backing up the Database](/docs/passwordreset/3.23/administration/working_with_the_database.md#backing-up-the-database)
topic for additional information.

### Upgrading to V3.23

**Step 1 –** Follow the steps for either [Single Server Installation](#single-server-installation)
or [Multiple Server Installation](#multiple-server-installation). If the Web Interface is on a
different server, then upgrade it as well.

**Step 2 –** Open the Data Console, and check the Audit Log and User tabs to make sure the data was
imported.

**Step 3 –** Open APR in a web browser and test the Enroll, Reset, and Change features.

**Step 4 –** Install your new license key if you have a perpetual license.

**Step 5 –** Update the Client license key if you have a perpetual license.

## Other Tasks

Move Database files

The database files are created in the installation folder when APR is first installed. The default
installation folder for APR V2.x was below the Program Files (x86) folder, but in APR V3.23 it is
below the Program Files folder. The database files are not moved automatically during an upgrade, so
you should move them to the new installation folder (or a different folder) after upgrading.

Follow the steps below to move the database files to the `\Program Files\ANIXIS Password Reset\`
folder.

**Step 1 –** Close the Data Console if it is open.

**Step 2 –** Stop the Netwrix Password Reset service.

**Step 3 –** Move apr.sdf and aprlog.sdf from the \Program Files (x86)\ANIXIS Password Reset\ folder
to the \Program Files\ANIXIS Password Reset\ folder.

**Step 4 –** Open the Configuration Console.

**Step 5 –** Click the **General** tab.

**Step 6 –** Click **Change...**

**Step 7 –** Click **Browse...** and then browse to the \Program Files\ANIXIS Password Reset\
folder.

**Step 8 –** Click **OK** twice, and then click **Apply**.

**Step 9 –** Start the Netwrix Password Reset service.

**Step 10 –** Update the backup script to copy from the new folder. See the
[Backing up the Database](/docs/passwordreset/3.23/administration/working_with_the_database.md#backing-up-the-database)
topic for additional information.

Configure Password Reset Client to use IE7 emulation mode

Older versions of the Password Reset Client display pages in Internet Explorer 7 emulation mode.
This mode cannot display the new HTML templates correctly. You can upgrade the Password Reset Client
to the latest version, or configure existing installations to use IE 11 mode. This only works on
Windows Vista and later with IE 9 or later.

Follow the steps below to configure the Password Reset Client to use IE 11 mode.

**Step 1 –** Start the Registry Editor (regedit.exe).

**Step 2 –** Expand the **HKEY_LOCAL_MACHINE**, **SOFTWARE**, **Microsoft**, **Internet Explorer**,
**MAIN**, **FeatureControl**, and **FEATURE_BROWSER_EMULATION** registry keys.

**Step 3 –** Create a new DWORD value called **LogonUI.exe**, and set it to 2AF8 (hex).

Create this registry value on all the Password Reset Client computers. IE 11 mode can be requested
even if the computer is running an older version of IE.
