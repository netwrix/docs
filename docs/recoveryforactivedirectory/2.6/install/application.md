---
title: "Install the Application"
description: "Install the Application"
sidebar_position: 10
---

# Install the Application

The following components are installed by the Recovery for Active Directory installation package:

- Netwrix Recovery Server
- Netwrix Recovery Web Console – Installed on the Recovery Application Server and used to perform
  the operations the application offers
- RSAT Extension – Installed on the Recovery Application Server automatically. You can manually
  install it on a remote machine to add the object rollback and restore functions to the Active
  Directory Users and Computers console on that machine.
- Recovery Configuration Utility – Installed on the Recovery Application Server and used to register
  the RSAT Extension on the server. It also provides the option to update the SQL database password.

During a fresh installation, it is possible to modify both or either the application installation
directory and the SQL Server database location. The application installation directory can be
modified through the Destination Folder page in the Recovery for Active Directory Setup Wizard.

:::note
The `msoledbsql.msi` must be installed on the machine the Recovery Application Server will
be installed on, prior to installing the Recovery Application Server. This allows the Recovery
Application Server to connect with the SQL Server. If it is not installed, the installer fails on
the SQL Server Configuration page. The
[Microsoft OLE DB Driver for SQL Server](https://www.microsoft.com/en-us/download/details.aspx?id=56730)
can be downloaded directly from Microsoft.
:::


Follow the steps to install Recovery for Active Directory.

**Step 1 –** Run the `NetwrixRecovery_Setup.exe` executable as an administrator to launch the
Recovery for Active Directory Setup wizard.

![Recovery for Active Directory Setup wizard - Initial EULA page](/images/recoveryforactivedirectory/2.6/install/eula.webp)

**Step 2 –** On the Netwrix Recovery for Active Directory page, read the End User License Agreement.
Then check the **I agree to the license terms and conditions** checkbox and click **Install**.

The Setup Progress page displays the setup progress bar and then the Welcome page is displayed.

![Installation Welcome Page](/images/recoveryforactivedirectory/2.6/install/welcome.webp)

**Step 3 –** On the Welcome page of the Recovery for Active Directory Setup wizard, click Next to
begin the installation.

![Installation Destination Folder Page](/images/recoveryforactivedirectory/2.6/install/destinationfolder.webp)

**Step 4 –** On the Destination Folder page, confirm the destination path where the wizard will
install Recovery for Active Directory. The default installation location is:

C:\Program Files\Netwrix\Recovery for Active Directory\

- (Optional) Click Change… to change the installation location. The Change destination folder page
  opens.

![Recovery for Active Directory Setup wizard - Change destination folder page](/images/recoveryforactivedirectory/2.6/install/changedestinationfolder.webp)

> - Use the Look in field to select the desired installation folder.
> - When the Folder name box is set as desired, click **OK**.

The wizard returns to the Destination Folder page. Click **Next** to continue.

![Installation License File Page](/images/recoveryforactivedirectory/2.6/install/licensefile.webp)

**Step 5 –** On the License File page, select the licensing option for your installation.

- Trial license – Use the 14-day license key that comes packaged with the Recovery for Active
  Directory installation
- License file – Map to a customer license key file by clicking **Browse** and selecting the license
  file with the name ending in **.key**

Click Next.

![Installation SQL Server Configuration](/images/recoveryforactivedirectory/2.6/install/sqlserverconfiguration.webp)

**Step 6 –** On the SQL Server Configuration page, specify the SQL server and credentials to use for
database communication.

- SQL Server – Enter the SQL Server fully-qualified DNS location name or IP address of the SQL
  Server machine.
- Choose between Windows Authentication or SQL Server Authentication credentials. If SQL Server
  Authentication is selected, provide the login credentials for the provisioned account. Ensure that
  this account has access to read and write to the tables with permissions to execute stored
  procedures.

:::note
Windows authentication will use the credentials of the account running the installer. Once
the database is created, Windows authentication will use the credentials of the account used for the
Recovery for Active Directory service., specified on the Netwrix Recovery Server Configuration page
of the wizard.
:::


Click **Next**.

![Installation SQL Server Database Name](/images/recoveryforactivedirectory/2.6/install/sqlserverdatabase.webp)

**Step 7 –** On the SQL Server Database page, specify the SQL Server database to use. Use the
default database name or provide a unique, descriptive name in the box. Click **Next** to continue.

![serverconfiguration](/images/recoveryforactivedirectory/2.6/install/serverconfiguration.webp)

**Step 8 –** On the Netwrix Recovery Server Configuration page, enter the port and credentials to be
used for running the application server.

- Port – The default port number for the Netwrix Recovery server is 9001. This port is used to
  communicate from the Netwrix Recovery server and the domain. Modify the port, if needed.

- Service Account – Enter the service account [DOMAIN\USERNAME] and password credentials used to
  start and run the Recovery Console service. Ensure that this service account has the Log On As A
  Service right in the Local Security Policies on the server where the console is installed.

Click **Next**.

![Installation Admin Role Page](/images/recoveryforactivedirectory/2.6/install/administratorrole.webp)

**Step 9 –** On the Administrator Role page, specify the administrator account to use. By default,
this is set to the Domain Admins account from the domain the product is being installed into.

- Account – Enter a user account or group [DOMAIN\ACCOUNT] that will be the default Recovery for
  Active Directory administrator. Use the Browse option to search for a specific account. This
  account will be locked and cannot be modified after installation.

    The specified user or group will be responsible for configuring the applcation and managing
    users' access to the console.

Click **Next**.

![Installation Web Host Configuration](/images/recoveryforactivedirectory/2.6/install/webhost.webp)

**Step 10 –** On the Web Host page, specify the web host configuration for the Recovery for Active
Directory Console.

- Port – Use the default port number or provide a unique one.
- Use HTTPS – To enable HTTPS encryption, select the Use HTTPS checkbox. This displays the
  Certificate section on the page. Click **Select certificate...**. The Certificates window is
  displayed.

![Installation Certificates Window](/images/recoveryforactivedirectory/2.6/install/certificates.webp)

- The Certificates window displays installed certificates on either the local machine or the current
  user. Select the desired certificate and click **Use Selected Certificate**. This automatically
  fills in the information for the Certificate section of the Web Host page.

Click **Next**. Recovery for Active Directory is ready to install.

![Installation Ready to Install](/images/recoveryforactivedirectory/2.6/install/ready.webp)

**Step 11 –** Click **Install** to begin the installation process.

![completed](/images/recoveryforactivedirectory/2.6/install/completed.webp)

**Step 12 –** The installation process begins and the Setup wizard displays the installation
progress. Depending on the Active Directory size, installation may take time to complete. When
installation is complete, click Finish to exit the wizard.

The installer does not automatically open the Recovery Console web page after installation. The
Recovery Console icon is located on the desktop. See the [First Launch](/docs/recoveryforactivedirectory/2.6/install/firstlaunch.md) topic for
the next step.
