---
title: "Application Server Install"
description: "Application Server Install"
sidebar_position: 10
---

# Application Server Install

Follow the steps to install Threat Prevention.

**Step 1 –** From the Threat Prevention Installer package, run the server executable
(threatprevention-server-7.4.0.xxx.msi). The Threat Prevention Server Setup wizard opens.

:::note
Run the msi via the command prompt with elevated privileges (domain admin rights) on a
domain-joined machine. Else the installer runs and completes without errors, though no components
are installed.
:::


![Threat Prevention Server Setup wizard - Welcome page](/images/threatprevention/7.4/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation. One of the following
happens:

- If the installer detects .NET Framework 4.7 or later version installed on the machine, it proceeds
  with the installation.
- If it does not detect .NET Framework 4.7 or later version, a message is displayed to inform you to
  install it. You can either exit the wizard and install it manually or walk through the wizard
  until its last page and install it as part of the Threat Prevention installation process.

![Threat Prevention Server Setup wizard - End-User License Agreement page](/images/threatprevention/7.4/install/licenseagreement.webp)

**Step 3 –** On the End-User License Agreement page, check the **I accept the terms in the License
Agreement** box and click **Next**.

![Threat Prevention Server Setup wizard - Custom Setup page](/images/threatprevention/7.4/install/customsetup_1.webp)

**Step 4 –** The Custom Setup page displays the components that are installed by default. These
components require the following hard drive space for installation:

- Enterprise Manager – 116 MB
- Administration Console – 145 MB
- EPE Rest Site – 32 MB

Optionally, you can change the installation directory location for Threat Prevention.

**Step 5 –** By default, the Threat Prevention infrastructure components are installed to the
`C:\Program Files\Netwrix\Netwrix Threat Prevention\` directory.

_(Optional)_ Click **Browse…** to change the installation location. The Change destination folder
page opens.

![Threat Prevention Server Setup wizard - Change Destination Folder page](/images/threatprevention/7.4/install/changedestinationfolder.webp)

> - Use the Look in field to select the desired installation folder.
> - When the Folder name box is set as desired, click **OK**.

The wizard returns to the Custom Setup page. You can use the **Reset** button to revert to the
default settings on the Custom Setup page. Click **Next** to proceed.

![Threat Prevention Server Setup wizard - Enterprise Manager Location Information page](/images/threatprevention/7.4/install/emlocationinfo.webp)

**Step 6 –** On the Enterprise Manager Location Information page, the host name or IP address for
the Enterprise Manager server is pre-populated. Enter the ports for the Enterprise Manager service
to communicate with the other Threat Prevention components.

- Enterprise Manager port for Agent Communications – 3741
- Enterprise Manager port for Console and PowerShell API Communications – 3740

:::note
As a prerequisite for using custom managed certificates, you must provide the Enterprise
Manager server DNS name, hostname, or FQDN (instead of the IP address) when installing Threat
Prevention server, remote instance of the Administration Console, and the Agent. See the
[Administration Console and Agent Not Communicating with the Enterprise Manager ](/docs/threatprevention/7.4/troubleshooting/enterprisemanagercommunication.md)topics
for additional information.
:::


Checking the **Create Windows Firewall Rules** box automatically sets the Windows firewall rules
needed to open these ports on the server during the installation process. If using a third party
firewall, uncheck this option and manually create the necessary firewall rules. See the
[Firewall Ports](/docs/threatprevention/7.4/requirements/ports.md) topic
for additional information.

When the settings are configured, click **Next**.

![Threat Prevention Server Setup wizard - Database Login Information page](/images/threatprevention/7.4/install/databselogininfor.webp)

**Step 7 –** On the Database Login Information page, provide the SQL Server information for database
connection.

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


![Threat Prevention Server Setup wizard – Logon page](/images/threatprevention/7.4/install/logon.webp)

**Step 8 –** If Windows authentication is selected, the Logon page is displayed.

- Provide the username (Domain\User format) and password that the Threat Prevention Enterprise
  Manager service will impersonate when connecting to the database. These credentials must have
  elevated privileges with rights to create and modify the database.

  :::note
  Windows authentication uses an Active Directory account. Local Windows accounts are
  not supported.
  :::


- Click **Next**.

  :::note
  For Windows authentication, the credentials are tested on clicking **Next**. If the
  credential authentication fails, the setup does not proceed and a pop-up window displays failure
  details.
  :::


![Threat Prevention Server Setup wizard - Ready to Install page](/images/threatprevention/7.4/install/readytoinstall.webp)

**Step 9 –** On the Ready to Install Netwrix Threat Prevention Server page, click **Install**. When
finished, the Completed the Netwrix Threat Prevention Server Setup Wizard page is displayed.

![Threat Prevention Server Setup wizard – Completed page](/images/threatprevention/7.4/install/complete.webp)

If .NET Framework 4.7 is not installed, the Completed the Netwrix Threat Prevention Server Setup
Wizard page displays the **Run .NET 4.7 installation package** checkbox. Check it and click
**Finish** to install it.

You can also cancel the built-in download of .NET Framework 4.7 and install it manually.

:::note
If the .NET Framework installation does not complete, run the installer through an
Administrative command prompt.
:::


**Step 10 –** The installation process begins and the wizard displays the installation status. When
installation is complete, click **Finish**.

![Threat Prevention Admin Console desktop icon](/images/threatprevention/7.4/install/desktopicon.webp)

The selected components have been installed, and the Threat Prevention Console icon is now on the
desktop. See the
[First Launch](/docs/threatprevention/7.4/install/firstlaunch/firstlaunch.md) topic
for the next steps.
