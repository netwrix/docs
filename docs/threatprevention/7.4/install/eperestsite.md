---
title: "EPE Rest Site Install"
description: "EPE Rest Site Install"
sidebar_position: 70
---

# EPE Rest Site Install

The EPE Rest Site is an optional web server that third parties can use to integrate with the Threat
Prevention Enterprise Password Enforcer (EPE) solution. It allows third-party applications to submit
a candidate password to check whether it complies with the current EPE rules defined on the
[EPE Settings Window](/docs/threatprevention/7.4/admin/configuration/epesettings.md).

:::note
This interface does not change the password; it only validates it against the EPE rules.
:::


When you install the EPE Rest Site, the following happens:

- The installer copies the EPE Rest Site files to the Threat Prevention file system on the physical
  machine
- It creates the "EPE_REST" site in IIS

Follow the steps to install the EPE Rest Site.

:::note
Install the EPE Rest Site on a server with IIS installed, which is accessible to
third-party applications that have to use the REST API.
:::


**Step 1 –** From the Threat Prevention Installer package, run the server executable
(threatprevention-server-7.4.0.xxx.msi). The Threat Prevention Server Setup wizard opens.

![Threat Prevention Server Setup wizard - Welcome page](/images/threatprevention/7.4/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![Threat Prevention Server Setup wizard - End-User License Agreement page](/images/threatprevention/7.4/install/licenseagreement.webp)

**Step 3 –** On the End-User License Agreement page, check the **I accept the terms in the License
Agreement** box and click **Next**.

![Threat Prevention Server Setup wizard - Custom Setup page](/images/threatprevention/7.4/install/customsetup.webp)

**Step 4 –** By default, all three components are selected for installation. However, as you only
have to install the EPE Rest Site component, do the following to deselect the Enterprise Manager and
Win Console components:

- Click on the icon next to a component name and select the **Entire feature will be unavailable**
  option. A red cross appears for the component.

**Step 5 –** On selecting the EPE Rest Site option, the page displays the location where the EPE
Rest Site will be installed. By default, the Threat Prevention infrastructure components are
installed to the `C:\Program Files\Netwrix\Netwrix Threat Prevention\` directory.

_(Optional)_ Click **Browse…** to change the installation location. The Change destination folder
page opens.

![Threat Prevention Server Setup wizard - Change Destination Folder page](/images/threatprevention/7.4/install/changedestinationfolder.webp)

> - Use the Look in field to select the desired installation folder.
> - When the Folder name box is set as desired, click **OK**.

The wizard returns to the Custom Setup page. You can use the **Reset** button to revert to the
default settings on the Custom Setup page. Click **Next** to proceed.

![Threat Prevention Server Setup wizard - Enterprise Manager Location Information page](/images/threatprevention/7.4/install/emlocationforremoteconsole.webp)

**Step 6 –** On the Enterprise Manager Location Information page, the host name or IP address for
the Enterprise Manager server is pre-populated. Enter the ports for the Enterprise Manager service
to communicate with the other Threat Prevention components.

- Enterprise Manager port for Console and PowerShell API Communications – 3740

Checking the **Create Windows Firewall Rules** box automatically sets the Windows firewall rules
needed to open these ports on the server during the installation process. If using a third party
firewall, uncheck this option and manually create the necessary firewall rules. See the
[Firewall Ports](/docs/threatprevention/7.4/requirements/ports.md) topic
for additional information.

When the settings are configured, click **Next**.

![Netwrix Threat Prevention EPE Rest Setup wizard - Database Login Information page](/images/threatprevention/7.4/install/database.webp)

**Step 7 –** On the Database Login Information page, provide information for the SQL Server where
the installer will create a database for the EPE Rest Site.

- In the first box, enter the IP address (may need instance port number, e.g. 192.168.189.152,1433)
  or the server name (Server\Instance) of the SQL server where the Threat Prevention database
  resides. Click Browse to select the server.
- Select the **Windows authentication** or **SQL Server Credentials** option button (for SQL Server
  authentication) and enter the credentials:

  - Windows authentication uses the credentials provided on the Logon page, which is displayed if
    this option is selected.
  - For SQL Server authentication, provide SQL credentials in the **Login ID** and **Password**
    boxes.

  :::note
  The account used for authentication, either a Windows or SQL account, requires a
  minimum of the following permissions on the SQL Server:
  :::


  - Create schema
  - Read
  - Write

- Click **Next**.

  - If using Windows authentication, continue with the next step.
  - If using SQL Server authentication, skip the next step.

    :::note
    In case of SQL Server authentication, the credentials are tested on clicking
    **Next**. If the credential authentication fails, the setup does not proceed and a pop-up
    window displays failure details.
    :::


![Netwrix Threat Prevention EPE Rest Setup wizard - Logon page](/images/threatprevention/7.4/install/windowsauthentication.webp)

**Step 8 –** If Windows authentication is selected, the Logon page is displayed.

- Provide the username (Domain\User format) and password. The EPE Rest website would run under this
  account and the credentials will also be used to connect to the EPE Rest Site database. These
  credentials must have elevated privileges with rights to create and modify the database.
- Click **Next**.

  :::note
  For Windows authentication,the credentials are tested on clicking **Next**. If the
  credential authentication fails, the setup does not proceed and a pop-up window displays failure
  details.
  :::


![Threat Prevention Server Setup wizard - Ready to Install page](/images/threatprevention/7.4/install/readytoinstall.webp)

**Step 9 –** On the Ready to Install Netwrix Threat Prevention Server page, click **Install**. When
finished, the Completed the Netwrix Threat Prevention Server Setup Wizard page is displayed.

![Threat Prevention Server Setup wizard – Completed page](/images/threatprevention/7.4/install/complete.webp)

**Step 10 –** Click **Finish**.

EPE Rest Site components have been installed. See the
[EPE Rest Site](/docs/threatprevention/7.4/eperestsite/overview.md) topic
for additional information.
