---
sidebar_position: 14
---
# PingCastle Pro Installation and Configuration

## Description

PingCastle Pro is a tool that helps you improve and follow your overall Active Directory security level. The software is compatible with most existing configurations and provides reliable data that presents the situation to management for improvement over time.

# Requirements

**System Specifications**

The Operating systems supported are:

- For PingCastle scanning functions:

  - All operating systems starting from Windows 2000 or subsequent

- For PingCastle Pro:

  - All operating systems starting from Windows 10 22H2 / Windows 2012
    (with extended security updates) or subsequent, where the asp.net
    8.0 is supported

  - On demand, you can include any operating systems,
    including Linux, if supported by asp.net core 8.0

See the [Windows Lifecycle Fact Sheet](https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet)
for details regarding each Windows release lifecycle.

See the .NET 8.0 Supported Operating System documentation [here](https://learn.microsoft.com/en-us/dotnet/core/install/windows#supported-versions).

## Database

PingCastle Pro uses a database to store its data.

The current supported databases are:

- Any supported editions of SQL Server (including SQL Server Express)

- Any supported editions of PostGres

1.  Any database supported by \"Entity Framework Core 2\" (SQLite,
 MySQL, \...) may be supported on demand. Contact Netwrix for more
    information.

## External System Dependencies

PingCastle Basic and PingCastle Professional require \"dotnet framework
2.0\" or subsequent versions.

PingCastle Enterprise uses the "asp.net core 8.0 framework" but still relies on "dotnet standard 2.0".

1.  Netwrix recommends not exposing the web application directly. Use a reverse proxy such as IIS, Apache2, or Nginx.

## Third party authentication system

PingCastle relies on the Windows account to perform scans and doesn't
use third party authentication system.

PingCastle Pro requires Microsoft Entra ID or a Windows Active Directory to
perform authentication. If Entra ID is used, the application must be
allowed to get the token from Entra ID (typically `login.microsoftonline.com`).

## License

PingCastle Pro licensing depends on the number of domains you manage, up
to a maximum of five domains. The number of
domains include subdomains of a forest.

2.  Licensing counts only domains, not Domain Controllers.

**Example**

If you have `consto.com` with two subdomains called `uk.consto.com` and
`us.consto.com`, then you would require three licenses.

# Architecture

PingCastle uses a distributed architecture.

PingCastle Basic acts as a standalone agent. The program assesses the Active Directory and produces a report in two forms: an XML file and an HTML file. These two files provide two representations of the same data. By default, PingCastle filters the XML file to remove potential private data such as account names from this collected data. To deactivate this filter, run the program with the `--level Full` flag.

You then push the data contained in the xml file into PingCastle Pro
directly via the API, or indirectly via an import such as
email. In this case, you can encrypt the data to ensure its
confidentiality.

![](/images/pingcastle/proinstall/image3.webp)

PingCastle Pro then provides services around the data and stores it in the database.

# Minimal Entra ID Configuration

At the end of the procedure, you receive a **Tenant ID** and a **Client ID**.

**Connect to \"Azure Portal\" located at https://portal.azure.com**

![](/images/pingcastle/proinstall/image4.webp)

Then authenticate.

Select the App Registrations pane.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image5.webp)

Click **New registration** from the toolbar at the top. A **Register an app** dialog opens.

![](/images/pingcastle/proinstall/image6.webp)

Add a name but also the redirect Uri.

:::note
The redirect URI must point to the fully qualified domain name (FQDN) of the server you are accessing. It must start with HTTPS and end with `/signin-oidc`.
:::

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image7.webp)

Go to authentication and enable "Access tokens (used for implicit
flows".

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image8.webp)

After you create the app, open the app by clicking on its name and copy
ClientID and TenantID and keep it with you.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image9.webp)

:::note
The first user connecting to the application can grant the permission
implicitly.
:::

# SQL Express installation

This chapter describe the installation of SQL Express.

:::note
Any edition of SQL Server is compatible.
:::

Download SQL Express 2019 here:

**https://www.microsoft.com/en-us/Download/details.aspx?id=101064**

Select "Basic"and let the installation proceed.

![](/images/pingcastle/proinstall/image10.webp)

![](/images/pingcastle/proinstall/image11.webp)

![](/images/pingcastle/proinstall/image12.webp)

# Quick Installation

PingCastle Pro supports a setup that minimizes the requirements and
manipulations. Netwrix recommends this scenario for tests but not in
production, because it doesn't support all IIS and SQL Server upgrade
mechanisms.

## Requirements

It requires:

- IIS being installed (it is a Windows component)

- An SQL database such as SQL Express being installed

- The asp.net core 8.0 \"Hosting Bundle\" available at:

```
  https://dotnet.microsoft.com/en-us/download/dotnet/8.0
```

> ![A screenshot of a computer Description automatically generated](/images/pingcastle/proinstall/image13.webp)

1.  Install IIS before the ASP.NET 8.0 Hosting Bundle. If you don't, you
    may need to repair the Hosting Bundle installation.

![A screenshot of a computer Description automatically generated](/images/pingcastle/proinstall/image14.webp)

## API Key and endpoint

Before starting the setup, provide the Tenant ID and Client ID of the application.

The Client Secret, Notification group, and SMTP configuration are
optional; you can modify them later in the appsettings.Production.json
file.

## Procedure

The Windows Installer (MSI) file guides the installation of the software:

![](/images/pingcastle/proinstall/image15.webp)

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image16.webp)

After you accept the license terms, the software requires a license key
that Netwrix distributes alongside the MSI files.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image17.webp)

3.  If the license key is missing, contact PingCastle support.

There are two options to configure the database:

- Using a connection string provided directly by the user

- Using a connection to a database: it implies the software will create
  the database on behalf of the user

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image18.webp)

Option which creates the database:

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image19.webp)

Option with the direct connection string:

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image20.webp)

Then the setup asks for the authentication configuration.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image21.webp)

For Windows, default group which is allowed to PingCastle is everyone.
To change the group, select the browse button. A new dialog appears.

2.  If you select "Domain admins" this group won't work. Windows strips
    the group from the restricted token, so the application doesn't see
    the user as a "Domain admins" member even if the user belongs to the
    group. Run whoami /all in a command prompt to see the groups the
    token presents to the application.

![](/images/pingcastle/proinstall/image22.webp)

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image23.webp)

For Azure, enter the tenant ID and client ID you collected earlier here.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image24.webp)

To send email notifications, you can set the SMTP configuration. Enter
the email addresses that will receive the email notifications here as
"destination email".

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image25.webp)

Then the setup is ready to perform its activity.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image26.webp)

The setup automatically configures the website, the database, and the
application, and if it creates the database, grants the database
permission to IIS (application pool)

4.  When you remove the software, the setup doesn't remove the
    database.

# Post installation

To use Azure authentication, enable HTTPS.

Check that the PingCastlePro website is installed.

Sometimes, the PingCastlePro isn't started because the Default WebSite
is. not the back square at the right of the PingCastlePro
website.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image27.webp)

If this happens, Stop the Default Web Site and Starts the PingCastlePro
website.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image28.webp)

ensure you have a certificate installed. If this isn't the case, you
can create one with the Server Certificates configuration option.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image29.webp)

Select "Create Self Signed Certificate" at the right to do so.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image30.webp)

Then edit the binding of the website:

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image31.webp)

![](/images/pingcastle/proinstall/image32.webp)

Then add a HTTPS binding and be sure to select a SSL certificate, like
the one you create before.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image33.webp)

# Custom installation

You can install PingCastle Pro like a classic asp.net core application.

That means copy all the files in a directory, configure the proxy (IIS,
apache, Nginx), prepare a database and configure the application.

## Hosting

The application does work on any infrastructure supported by the asp.net
core 8.0 middleware.

Microsoft has procedures to install the dotnet core 2 framework:

- Linux installation\
  https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x

- Windows installation\
  https://docs.microsoft.com/en-us/dotnet/core/windows-prerequisites?tabs=netcore2x

The following list references Microsoft's procedures for setting up the
hosting of the application:

> Host ASP.NET Core on Windows with IIS\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?tabs=aspnetcore2x
>
> Host ASP.NET Core on Linux with Nginx\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?tabs=aspnetcore2x
>
> Host ASP.NET Core on Linux with Apache\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache

5.  You can change the upload quota to allow large file uploads in
    Interoperability mode

:::note
IIS installs a \"Default Web Site\" by default, which may conflict with the PingCastle Pro application.
:::

The solution is to stop the default website and configure it to not
start automatically.

![](/images/pingcastle/proinstall/image34.webp)

## Database

Configuring the database backup is the customer's responsibility.

PingCastle Pro requires a user account on this database. By default,
PingCastle Pro creates the tables at the initial run and can add or
modify existing tables when a software update is designed. If you use
this default pattern, the database user MUST be owner of the
database.

PingCastle Pro supports limited privileges on the database (only read /
modify / delete data is required) on demand. In this case, Netwrix
provides a SQL script to apply database changes before you apply a
software update.

On IIS, PingCastle runs in an application pool that needs
privileges on the database.

:::note
The application pool uses a special Windows account that you must create manually.
:::

The following SQL can grant these permissions:

```sql
If not Exists (select loginname from master.dbo.syslogins
where loginname = 'IIS APPPOOL\PingCastlePro')
Begin
CREATE LOGIN [IIS APPPOOL\PingCastlePro] FROM WINDOWS;
End
use PingCastlePro;
exec sp_addrolemember 'db_owner', 'IIS APPPOOL\PingCastlePro';
```

Here is for example some commands for PostGres on Ubuntu 17:

```bash
sudo apt-get install postgresql postgresql-contrib
sudo /etc/init.d/postgresql start
```

:::note
By default no password for the user postgres
:::

```bash
sudo -u postgres createuser pingcastle
sudo -u postgres psql
alter user pingcastle with password 'pingcastle';
sudo -u postgres createdb -O pingcastle pingcastle
```

6.  On PostGres the collation (sort) doesn't take some special
    characters in account, which puts the \[Default\] container at
    different position that the start of the list of entities

## Using a Database hosted on another server

**Configure SQL Server with a local DB account**

You first need to create a local account inside Sql Server.

![](/images/pingcastle/proinstall/image35.webp)

Select SQL Server authentication.

Be sure to uncheck "user must change password at the next login" as
PingCastleEnterprise doesn't support password rotation. (you can change
the password later inside the application.Production.json file)

![Une image contenant texte, capture d'écran, logiciel, Icône d'ordinateur Description générée automatiquement](/images/pingcastle/proinstall/image36.webp)

Then create a database.

![](/images/pingcastle/proinstall/image37.webp)

**Then create a database**

![](/images/pingcastle/proinstall/image38.webp)

Set the owner as the user you created earlier.

Verify that the credentials are correct and that the server is available
before continuing.

![Une image contenant texte, capture d'écran, nombre, affichage Description générée automatiquement](/images/pingcastle/proinstall/image39.webp)

In SQL Server configuration, a typical mistake is to use tcp connection.
You must enable TCP/IP manually in SQL Server because it is disabled by
default.

![Une image contenant texte, capture d'écran, Police, logiciel Description générée automatiquement](/images/pingcastle/proinstall/image40.webp)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/images/pingcastle/proinstall/image41.webp)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;User Id=pingcastle;password=pingcastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

The server doesn't create the database at installation time. Any issues appear on first run. Check the event log for the full error message. You can
change the connection string after installation by editing `appsettings.production.json`. You must escape special characters in the connection string because the value is inside a JSON string.

![Une image contenant texte, capture d'écran, Police Description générée automatiquement](/images/pingcastle/proinstall/image42.webp)

![Une image contenant texte, Police, nombre, logiciel Description générée automatiquement](/images/pingcastle/proinstall/image43.webp)

**Configure SQL Server with an Active Directory user**

You need to first create this Windows user.

![](/images/pingcastle/proinstall/image35.webp)

You have to create a new Windows login. Go to create a new login.

Then select the Windows user you created.

![Une image contenant texte, capture d'écran, logiciel, nombre Description générée automatiquement](/images/pingcastle/proinstall/image44.webp)

You can then create a database with the Windows user as the owner of the
database:

![Une image contenant texte, logiciel, capture d'écran, nombre Description générée automatiquement](/images/pingcastle/proinstall/image45.webp)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/images/pingcastle/proinstall/image41.webp)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

The installation continues.

After the installation, you need to
change the Application Pool identity.\
Go to IIS and select the application pool. Go to the advanced settings

![Une image contenant texte, Appareils électroniques, capture d'écran, logiciel Description générée automatiquement](/images/pingcastle/proinstall/image46.webp)

Go to Identity and select the custom user account:

![Une image contenant texte, capture d'écran, affichage, logiciel Description générée automatiquement](/images/pingcastle/proinstall/image47.webp)

Restart IIS.

## Configuration of PingCastle Pro

The settings are in the appsettings.Production.json file at
the root of the application folder.

![](/images/pingcastle/proinstall/image48.webp)

The application needs two settings: the database and the
license information.

To change the database type, change the \"database\" settings. 
PingCastle Pro supports the following values:

- sqlserver

- postgres

To connect to the database, provide a \"connection string\" in the
\"DefaultConnection\" parameter.

7.  PingCastle Pro stores the connection string in json, so you must
    escape it properly, like \"\\\" into \"\\\\\". The same applies to
    double quotes.

For the license, the parameter is stored in the \"License\" setting.

Here are some connection string examples:

**Sql Local DB**

```json
"Server=(localdb)\\mssqllocaldb;Database=aspnet-PingCastlePro-9521AD04-BA3A-41DC-A454-F2BD464E9391;Trusted_Connection=True;MultipleActiveResultSets=true"
```

**PostGres**

```json
"DefaultConnection": "Server=localhost;username=pingcastle;password=pingcastle;database=pingcastle"
```

**Email**

PingCastle requires configuration to send emails.

This configuration is in the appsettings.Production.json file.

![](/images/pingcastle/proinstall/image49.webp)

The Email is the address PingCastle uses to send email.

The login and password are the credentials PingCastle uses to connect to
the smtp server. These aren't mandatory.

The host and port is the address of the smtp server.

The email functionality sends notifications such as weekly
reports.

## Azure hosting

PingCastle Pro is known to work with Azure. In that case, you must
create a managed application and a database.

Then you must replicate the application configuration into
the Azure Configuration page.

The minimal required fields are: database, license, and
the connection string, named "DefaultConnection".

![](/images/pingcastle/proinstall/image50.webp)

# Initial startup

At the first run, the application creates the database. If there
is an error with the database (missing right, invalid connection string)
or hosting, the next screen doesn't appear.

For Azure configuration, the application asks you to connect using
Azure.

![](/images/pingcastle/proinstall/image51.webp)

**It then display the welcome screen**

![](/images/pingcastle/proinstall/image52.webp)

# Initial configuration

For more details see the user documentation.

## Encryption

PingCastle Pro comes by default with the PingCastle default encryption
key.

If you decided to add a custom ciphering key, you can add it in Advanced
-\> Decryption

## Bulk Import of existing reports

You can import existing report using the bulk import functionality. It
is a feature of the command line client. You need to create an API key
(Agents page) and use the application URL to use this feature.

## Agents

You can configure PingCastle program to send their report to the
program.

You need to set up an API key for an agent using the Advanced -\> Agent
feature.

Then use the command switches `--api-endpoint <endpoint>` and
`--api-key <key>` in the health check mode.

You can upload existing reports stored in the current directory with the
command:

```bash
pingcastle.exe --upload-all-reports --api-endpoint https://endpoint.com --api-key abdsnhvdsklLksf
```

# Post Installation - Scheduler

**Quick installation**

PingCastle lets the application administrator schedule scans. It is
useful when you install the solution in a central forest and need to
scan all child domains.

By default, PingCastle runs as a limited user. It can't access
the network nor modify system settings. To use the scheduler, you
must change permissions.

One approach is to change the user from Application to LocalSystem.

Open the IIS console and go to the application pools settings. Go to
advanced settings.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image53.webp)

Find the Identity setting and change ApplicationPoolIdentity to
LocalSystem.

![](/images/pingcastle/proinstall/image54.webp)

![Une image contenant texte Description générée automatiquement](/images/pingcastle/proinstall/image55.webp)

Then restart the application pool.

If you are using a custom identity for the application pool (to access a
database hosted in another server), you have to promote this user as
local admin. This is a Windows restriction of the permission model, and
you can't delegate access to the task scheduler.

## Custom installation

:::note
PingCastle uses a folder named "PingCastle" in the task scheduler. The COM API exposes the security descriptor, which the native PowerShell API doesn't.
:::

If you want PingCastle to start or stop tasks but not edit them (which
requires the account to be local admin), you need to delegate the
permission to start and run tasks. You can perform
the following actions as admin in powershell:

```powershell
# connect to the task scheduler service
$scheduleObject = New-Object -ComObject schedule.service
$scheduleObject.connect()
$rootFolder = $scheduleObject.GetFolder("")
$PingCastleFolder = $rootFolder.GetFolder("PingCastle")
$PingCastleFolder.GetTasks(1) | Foreach-Object {
    $sddl = $_.GetSecurityDescriptor(1+2+4+8)
    # add full control to the task
    $sddl += "(A;S-1-XXX-XXX-XXX;FA;;;SY)"
    $_.SetSecurityDescriptor($sddl, 0)
}
```

8.  Replace ;S-1-XXX-XXX-XXX with the SID of the account
    running the PingCastle web application.

## Task edition

You can modify tasks outside of the PingCastle application. For a task to
appear here, the application checks that this is a weekly schedule on
one selected day and that the action matches classical command line
options. That means you can modify \--server or add additional
parameters (for example \--log-console). You can also modify the identity
running the scheduled task (default is system)

However, if you edit the task within the web application, it overwrites
your customizations.

# PingCastle "agent" deployment

To avoid any gap in the security architecture, PingCastle can run scans
outside the web application. That means that in this case the local
domains have to push their information into PingCastle Enterprise.

## Program

Run the latest official version of PingCastle. The
PingCastle.exe program delivered in the same directory than the
PingCastleEnterprise is suitable for use.

:::note
PingCastle Enterprise supports running the PingCastle audit program at a higher or lower version. If a newer version adds features, they won't appear unless you update the PingCastle Enterprise program, but you lose no data meanwhile.
:::

## Schedule

The best way to schedule it is to run your own scheduler. Indeed, you
may have purchased a batch product which is looking for failure or
dependencies.

As an alternative, there is the documentation at the last page of
PingCastle documentation (the audit program) to run it using the Windows
scheduler.

The recommended frequency is every week, using a normal user account
(not privileged) running on a batch server (not a DC).

**Command**

You need to create an API key with the upload right (the \"Agent\" page
as admin).

You need to test the command line before scheduling it.

The typical command line is:

```bash
PingCastle --healthcheck (optional --server <other domain>) --level Full --api-endpoint https://youservername --api-key yourapikey --out run_logs.txt
```

The typical pitfalls are enabling TLS1.2 for the server but not
installing the TLS1.2 client package on the server running the audit.

# Troubleshooting

Netwrix recommends starting the application manually to view any problem such
as:

- TCP port already used

- connection string invalid

The method to run the application manually is to run the command:

```bash
dotnet.exe PingCastlePro.dll
```

**(dotnet.exe is stored by default on c:\\program files\\dotnet)**

Additionnally, you can open the application on the network by
specifying the \--server.urls parameter:

```bash
dotnet.exe PingCastlePro.dll --server.urls=http://*:8080
```

However, if there is a permission problem in the database, this method
won\'t display an error because the database connects under the user
context, not the system context. Typically on Windows, the IIS
service connect under IIS APPPool\\AppName. To grant rights to the application pool account on SQL Server, see [How to add the ApplicationPoolIdentity to a SQL Server login](https://blogs.msdn.microsoft.com/ericparvin/2015/04/14/how-to-add-the-applicationpoolidentity-to-a-sql-server-login).

Then, depending on the platform, PingCastle can store additional logs.

On Windows, you can edit the web.config file at the root to generate
debug logs. The event viewer can also store debugging data.

On Linux, the command `service <name-of-service> status` can indicate if
the service is running or not. If an error prevents the service from
starting, the command shows the log.

![](/images/pingcastle/proinstall/image56.webp)

When no log is available, you can run the program manually outside of the
service scope to get a more detailed error message.

Example:

![](/images/pingcastle/proinstall/image57.webp)

Here are a couple of well-known errors, their description and their
solution

## Incorrect version of the asp.net core middleware

Here are the messages that appear when the application runs under a service:

![](/images/pingcastle/proinstall/image58.webp)

![](/images/pingcastle/proinstall/image59.webp)

![](/images/pingcastle/proinstall/image60.webp)

And the message when running on the command line:

![C:\Users\Adiant\AppData\Local\Temp\dotnet_pingastleenterprise.dll.webp](/images/pingcastle/proinstall/image61.webp)

![](/images/pingcastle/proinstall/image62.webp)Solution:

identify the correct version of the framework and install it. Install
the IIS middleware if you are installing on IIS.

:::note
The last error was related to the missing KB KB2533623
:::

## Error at the application startup

When the application is unable to start, the following messages
appear:

![C:\Users\Adiant\AppData\Local\Temp\brower_error.webp](/images/pingcastle/proinstall/image63.webp)

![C:\Users\Adiant\AppData\Local\Temp\event1000.webp](/images/pingcastle/proinstall/image64.webp)

A more detailed message appears in the event log or directly on the
command line:

![C:\Users\Adiant\AppData\Local\Temp\event1026.webp](/images/pingcastle/proinstall/image65.webp)

In this case, the license was invalid and you must replace it in the
file appsettings.Production.json.

## Accurate permissions on the database

When the database doesn\'t contain the table needed, the application
tries to create them. If you haven't granted the permissions, PingCastle
generates a message and the application can't start.

![C:\Users\Adiant\AppData\Local\Temp\sql_auth_error.webp](/images/pingcastle/proinstall/image66.webp)

Solution:

Grant the right to create tables in the database or run a SQL script to
create this table. This script is available on demand.

The inability to create tables is a symptom of insufficient permissions. If the application pool identity can't add or remove records in the database, the application can't start.

If you're running PingCastle from another SQL Server, the default
identity the application pool uses won't have access.

Be sure you can connect from another computer than your SQL
database server. Indeed, by default you have a firewall preventing
remote connection and that the database may not be exposed. Be sure that
it is available through TCP. (in the following case, remote access is
forbidden because TCP/IP is disabled)

![](/images/pingcastle/proinstall/image67.webp)

You have 2 solutions to grant PingCastle an identity allowed on SQL
Server:

- Changing the application pool identity to match an Active Directory
  user that has permissions to the database

![](/images/pingcastle/proinstall/image68.webp)

![](/images/pingcastle/proinstall/image69.webp)

![](/images/pingcastle/proinstall/image70.webp)

- You can use a SQL Server local account and specify its login password
  in the connection string

Edit the application.setting file and locate the connection string. Then
add `;User ID=sa;Password=pass123`

![](/images/pingcastle/proinstall/image71.webp)

![](/images/pingcastle/proinstall/image72.webp)

## Enable Debug Logging

1.  Log in to the PingCastle Pro Server.

2.  Locate the appsettings.json file.

3.  This is usually located at: C:\\PingCastlePro

4.  Edit the **Appsettings.json** file so the Logging section matches the following:

```json
"Logging": {
    "IncludeScopes": false,
    "LogLevel": {
        "Default": "Debug",
        "System": "Information",
        "Microsoft": "Information"
    }
}
```

5.  From the same directory, open the **web.config** file and edit the
    **aspNetCore** tag so **stdoutLogEnabled=true**.

**Example**

```xml
<aspNetCore processPath="dotnet" arguments=".\PingCastlePro.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" />
```

6.  Open PowerShell as Administrator and type in **IISRESET** to restart
    the web services.

7.  Log in and perform actions in the PingCastle Pro web portal. Check
    C:\\PingCastlePro\\logs\\ to ensure PingCastle Pro is writing logs.
