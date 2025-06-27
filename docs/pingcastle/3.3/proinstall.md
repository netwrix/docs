# PingCastle Pro Installation and Configuration

## Description

PingCastle Pro is a tool designed to improve and follow the Active
Directory overall security level. This software has been developed to be
compatible with most of the possible existing configurations. The goal
(when the tool was created) was not to aim for perfection, but to
provide reliable data to present the situation to the management, thus
improving over time.

# Requirements

System Specifications

The Operating systems supported are:

- For PingCastle scanning functions:

  - All operating systems starting from Windows 2000 or subsequent

- For PingCastle Pro:

  - All operating systems starting from Windows 10 22H2 / Windows 2012
    (with extended security updates) or subsequent, where the asp.net
    8.0 is supported

  - On demand, it is possible to include any operating systems,
    including Linux, if it is supported by asp.net core 8.0

See the [Windows Lifecycle Fact Sheet](https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet)
for details regarding each Windows release lifecycle.

See the .NET 8.0 Supported Operating System documentation [here](https://learn.microsoft.com/en-us/dotnet/core/install/windows#supported-versions).

## Database

PingCastle Pro is using a database to store its data.

The current supported databases are:

- Any supported editions of SQL Server (including SQL Server Express)

- Any supported editions of PostGres

1.  Any database supported by \"Entity Framework Core 2\" (SQLite,
    MySQL, \...) may be supported on demand. Please contact us for more
    information.

## External System Dependencies

PingCastle Basic and PingCastle Professional require \"dotnet framework
2.0\" or subsequent versions.

PingCastle Enterprise is using the \"asp.net core 8.0 framework\" still
relying on \"dotnet standard 2.0\".

1.  It is recommended to not expose web application but to use reverse
    proxy like IIS, Apache2 or Nginx.

## Third party authentication system

PingCastle relies on the Windows account to perform scans and does not
use third party authentication system.

PingCastle Pro requires Azure AD or a Windows Active Directory to
perform authentication. If AzureAD is used, the application must be
allowed to get the token from AAD (typically login.microsoftonline.com).

## License

PingCastle Pro is licensed based on the number of domains managed and
allows up to a maximum of five domains to be managed. The number of
domains include subdomains of a forest.

2.  The number of Domain Controllers are not used for licensing, only
    domains.

Example

If you have consto.com with two subdomains called uk.consto.com and
us.consto.com, then you would require three licenses.

# Architecture

PingCastle is using a distributed architecture.

The PingCastle Basic can be considered as a stand alone agent. The
program executes an assessment of the Active Directory and produces a
report. This report is in two forms: a xml file and a html file. These
two files provide two representations of the same data. By default the
.xml file is being filtered to remove potential private data such as
account name from this collected data. This filter can be deactivated by
running the program with the flag \--level Full.

Then the data contained in the xml file is pushed into PingCastle Pro
directly via the API, or indirectly via an indirect import such as
email. In this case the data may be encrypted to ensure the
confidentiality of the data.

![](/img/product_docs/pingcastle/proinstall/image3.webp)

Then the PingCastle Pro provide the services around the data and store
it in the database.

# Minimal AzureAD Configuration

Add the end of the procedure, you will get "Tenant ID" and "Client ID".

Connect to \"Azure Portal\" located at https://portal.azure.com

![](/img/product_docs/pingcastle/proinstall/image4.png)

Then authenticate.

Select the App Registrations pane.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image5.png)

And then click on New registration from the toolbar in the top. That
will open a dialog "Register and app".

![](/img/product_docs/pingcastle/proinstall/image6.png)

Add a name but also the redirect Uri. Please note that the redirect URI
must point to the FQDN of the server that will be accessed. It MUST
starts with HTTPS and MUST ends with /signin-oidc

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image7.png)

Go to authentication and enable "Access tokens (used for implicit
flows".

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image8.png)

After the app is created, open the app by clicking on its name and copy
ClientID and TenantID and keep it with you.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image9.png)

Note: the permission can be granted implicitly by the first user
connecting to the application.

# SQL Express installation

This chapter describe the installation of SQL Express. Please note that
any edition of SQL Server is working.

Download SQL Express 2019 here:

https://www.microsoft.com/en-us/Download/details.aspx?id=101064

Select "Basic"and let the installation proceed.

![](/img/product_docs/pingcastle/proinstall/image10.png)

![](/img/product_docs/pingcastle/proinstall/image11.png)

![](/img/product_docs/pingcastle/proinstall/image12.png)

# Quick Installation

PingCastle Pro supports a setup where the requirements and manipulations
have been minimized. This scenario is recommended for tests but not in
production because all IIS and SQL Server upgrade mechanisms are not
supported.

## Requirements

It requires:

- IIS being installed (it is a Windows component)

- An SQL database such as SQL Express being installed

- The asp.net core 8.0 \"Hosting Bundle\" available at:

```
  https://dotnet.microsoft.com/en-us/download/dotnet/8.0
```

> ![A screenshot of a computer Description automatically generated](/img/product_docs/pingcastle/proinstall/image13.png)

1.  IIS should be installed before the ASP.NET 8.0 Hosting Bundle. If
    not, then the Hosting Bundle installation may be required to be
    repaired.

![A screenshot of a computer Description automatically generated](/img/product_docs/pingcastle/proinstall/image14.png)

## API Key and endpoint

Before starting the setup, the admin is required to provide the Tenant
ID, the Client ID of the application.

The Client Secret, Notification group, and SMTP configuration is
optional and can be modified later in the appsettings.Production.json
file.

## Procedure

The MSI file guides the installation of the software:

![](/img/product_docs/pingcastle/proinstall/image15.png)

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image16.png)

Once the license terms are accepted, the software requires a license key
which should have been distributed alongside the MSI files.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image17.png)

3.  If the license key is missing, reach out PingCastle support.

There are two options to configure the database:

- Using a connection string provided directly by the user

- Using a connection to a database: it implies the software will create
  the database on behalf of the user

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image18.png)

Option which creates the database:

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image19.png)

Option with the direct connection string:

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image20.png)

Then the authentication configuration is asked.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image21.png)

For Windows, default group which is allowed to PingCastle is everyone.
To change the group, select the browse button. A new dialog is shown.

2.  If you select "Domain admins" this group won't work. Indeed, it will
    be stripped in the restricted token and the user won't be seen as
    "Domain admins" even if it belongs to the group. Run whoami /all in
    a command prompt to see the groups presented to the application.

![](/img/product_docs/pingcastle/proinstall/image22.png)

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image23.png)

For Azure, the tenantID and the client ID collected before has to be
entered here.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image24.png)

To send email notification, the SMTP configuration can be set. The email
addresses that will received the email notifications has to be entered
here as "destination email".

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image25.png)

Then the setup is ready to perform its activity.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image26.png)

The setup configures automatically the website, the database, the
application and if the database is being created, grant the permission
to the database to IIS (application pool)

4.  When the software is removed, the setup DOES NOT remove the
    database.

# Post installation

In order to have the Azure authentication working, HTTPS must be
enabled.

Check that the PingCastlePro website is installed.

Sometimes, the PingCastlePro is not started because the Default WebSite
is. Please not the back square at the right of the PingCastlePro
website.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image27.png)

If this happens, Stop the Default Web Site and Starts the PingCastlePro
website.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image28.png)

Make sure you have a certificate installed. If this is not the case, you
can create one with the Server Certificates configuration option.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image29.png)

Select "Create Self Signed Certificate" at the right to do so.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image30.png)

Then edit the binding of the website:

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image31.png)

![](/img/product_docs/pingcastle/proinstall/image32.png)

Then add a HTTPS binding and be sure to select a SSL certificate, like
the one you create before.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image33.png)

# Custom installation

PingCastle Pro can be installed like a classic asp.net core application.

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

Microsoft has procedures to setup the hosting of the application that
are referenced bellow:

> Host ASP.NET Core on Windows with IIS\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?tabs=aspnetcore2x
>
> Host ASP.NET Core on Linux with Nginx\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?tabs=aspnetcore2x
>
> Host ASP.NET Core on Linux with Apache\
> https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache

5.  Upload quota may be changed to allow large file upload in the
    Interoperability mode

For IIS, please note that by default a \"Default Web Site\" is installed
and may conflict with the PingCastle Pro application.

The solution is to stop the default website and configure it to not
start automatically.

![](/img/product_docs/pingcastle/proinstall/image34.png)

## Database

Configuring the backup of the database is under the responsibility of
the customer.

PingCastle Pro requires a user account on this database. By default,
PingCastle Pro creates the tables at the initial run and can add or
modify existing tables when a software update is designed. If this
default pattern is used, the database user MUST be owner of the
database.

PingCastle Pro supports limited privileges on the database (only read /
modify / delete data is required) on demand. In this case, a Sql script
is provided to apply database change before a software update is
applied.

When run on IIS, PingCastle run in an application pool which needs to be
granted privileges on the database. Note that the application pool is
using a special Windows account which needs to be created manually.

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

Note: by default no password for the user postgres

```bash
sudo -u postgres createuser pingcastle
sudo -u postgres psql
alter user pingcastle with password 'pingcastle';
sudo -u postgres createdb -O pingcastle pingcastle
```

6.  On PostGres the collation (sort) does not take some special
    characters in account, which puts the \[Default\] container at
    different position that the start of the list of entities

## Using a Database hosted on another server

Configure SQL Server with a local DB account

You first need to create a local account inside Sql Server.

![](/img/product_docs/pingcastle/proinstall/image35.png)

Select SQL Server authentication.

Be sure to uncheck "user must change password at the next login" as
PingCastleEnterprise does not support password rotation. (you can change
later the password inside the application.Production.json file)

![Une image contenant texte, capture d'écran, logiciel, Icône d'ordinateur Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image36.png)

Then create a database.

![](/img/product_docs/pingcastle/proinstall/image37.png)

Then create a database

![](/img/product_docs/pingcastle/proinstall/image38.png)

Do not forget to set the owner as the user you created before.

You should verify that the credentials and that the server is available
before going further.

![Une image contenant texte, capture d'écran, nombre, affichage Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image39.png)

In SQL Server configuration, a typical mistake is to use tcp connection.
TCP/IP needs to be enabled manually in SQL Server as it is disabled by
default.

![Une image contenant texte, capture d'écran, Police, logiciel Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image40.png)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/img/product_docs/pingcastle/proinstall/image41.png)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;User Id=pingcastle;password=pingcastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

Unfortunately, the server will not create the database at the
installation time. You will discover any issue at the first run. Dont
forget to check the event log to have the full error message. You can
change the connection string after the installation by editing the file
appsettings.production.json. Do not forget that special characters may
need to be escaped as they are located inside a json string.

![Une image contenant texte, capture d'écran, Police Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image42.png)

![Une image contenant texte, Police, nombre, logiciel Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image43.png)

Configure SQL Server with an Active Directory user

You need to first create this Windows user.

![](/img/product_docs/pingcastle/proinstall/image35.png)

You have to create a new Windows login. Go to create a new login.

Then select the Windows user you created.

![Une image contenant texte, capture d'écran, logiciel, nombre Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image44.png)

You can then create a database with the Windows user as the owner of the
database:

![Une image contenant texte, logiciel, capture d'écran, nombre Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image45.png)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/img/product_docs/pingcastle/proinstall/image41.png)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

The installation will continue.

After the installation, another steep need to be done: you need to
change the Application Pool identity.\
Go to IIS and select the application pool. Go to the advanced settings

![Une image contenant texte, Appareils électroniques, capture d'écran, logiciel Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image46.png)

Go to Identity and select the custom user account:

![Une image contenant texte, capture d'écran, affichage, logiciel Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image47.png)

Restart IIS.

## Configuration of PingCastle Pro

The settings are located in the appsettings.Production.json located at
the root of the application folder.

![](/img/product_docs/pingcastle/proinstall/image48.png)

Two settings are needed for the application: the database and the
license information.

To change the database type, change the \"database\" settings. Currently
the following values are supported:

- sqlserver

- postgres

To connect to the database a \"connection string\" must be used and
provided in the \"DefaultConnection\" parameter.

7.  The connection string are stored in json and must be properly
    escaped like \"\\\" into \"\\\\\". Same for double quotes.

For the license, the parameter is stored in the \"License\" setting.

Here are some connection string examples:

Sql Local DB

```json
"Server=(localdb)\\mssqllocaldb;Database=aspnet-PingCastlePro-9521AD04-BA3A-41DC-A454-F2BD464E9391;Trusted_Connection=True;MultipleActiveResultSets=true"
```

PostGres

```json
"DefaultConnection": "Server=localhost;username=pingcastle;password=pingcastle;database=pingcastle"
```

**Email**

PingCastle requires a configuration to be able to send emails.

It is located in the appsettings.Production.json file.

![](/img/product_docs/pingcastle/proinstall/image49.png)

The Email is the address used to send email,.

The login and password is the credential use to connect to the smtp
server. This is not mandatory.

The host and port is the address of the smtp server.

The email functionality is used send notification such as weekly
reports.

## Azure hosting

PingCastle Pro is known to work with Azure. In that case a managed
application has to be created and a database.

Then the configuration of the application needs to be replicated into
the Azure Configuration page.

The minimal required fields to be configured are: database, license and
the connection string, named as "DefaultConnection".

![](/img/product_docs/pingcastle/proinstall/image50.png)

# Initial startup

At the first run of the application, the database is created. If there
is an error with the database (missing right, invalid connection string)
or hosting, the next screen will not be displayed.

For Azure configuration, the application asks you to connect using
Azure.

![](/img/product_docs/pingcastle/proinstall/image51.png)

It then display the welcome screen

![](/img/product_docs/pingcastle/proinstall/image52.png)

# Initial configuration

For more details please see the user documentation.

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

You need to setup an API key for an agent using the Advanced -\> Agent
feature.

Then use the command switches `--api-endpoint <endpoint>` and
`--api-key <key>` in the health check mode.

You can upload existing reports stored in the current directory with the
command:

```bash
pingcastle.exe --upload-all-reports --api-endpoint https://endpoint.com --api-key abdsnhvdsklLksf
```

# Post Installation - Scheduler

Quick installation

PingCastle allows the possibility to the administrator of the
application to schedule scans. It is useful when the solution is
installed in a central forest and the need is to scan all child domains.

By default, PingCastle is running as a limited user. It cannot access
the network nor modify system settings. To use the scheduler,
permissions need to be changed.

The easiest way is to change the user from Application to LocalSystem.

Open the IIS console and go to the application pools settings. Go to
advanced settings.

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image53.png)

Find the Identity setting and change ApplicationPoolIdentity to
LocalSystem.

![](/img/product_docs/pingcastle/proinstall/image54.png)

![Une image contenant texte Description générée automatiquement](/img/product_docs/pingcastle/proinstall/image55.png)

Then restart the application pool.

If you are using a custom identity for the application pool (to access a
database hosted in another server), you have to promote this user as
local admin. This is a Windows restriction of the permission model and
the access to the task scheduler cannot be delegated.

## Custom installation

Note: PingCastle is using behing the hood a folder named "PingCastle" in
the task scheduler. We will use the COM api as it exposes the security
descriptor -- which is not the case of the native PowerShell APIL

If you want PingCastle to be able to start or stop tasks but not being
able to edit them (it requires that the account is local admin), you
need to delegate the permission to start and run tasks. You can perform
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

8.  ;S-1-XXX-XXX-XXX need to be replaced by the SID of the account
    running the PingCastle web application.

## Task edition

Tasks can be modified outside of the PingCastle application. To be
listed here, the application checks that this is a weekly schedule on
one selected day and that the action is matching classical command line
options. That means that \--server can be modified, or additional
parameters added (for example \--log-console). The identity running the
scheduled task can also be modified (default is system)

However if the task is edited within the web application, customization
will be overwritten.

# PingCastle "agent" deployment

To avoid any hole in security architecture, it was chosen to allow
PingCastle to run scans outside the web application. That means that in
this case the local domains have to push their information into
PingCastle Enterprise.

## Program

It is recommended to run the latest official version of PingCastle. The
PingCastle.exe program delivered in the same directory than the
PingCastleEnterprise is suitable for use.

Please note that PingCastle Enterprise support to run the PingCastle
audit program at a higher or lower version. If new features have been
added, they will not be visible unless the PingCastle Enterprise program
is updated, but no data will be lost in the mean time.

## Schedule

The best way to schedule it is to run your own scheduler. Indeed, you
may have purchased a batch product which is looking for failure or
dependencies.

As an alternative, there is the documentation at the last page of
PingCastle documentation (the audit program) to run it using the Windows
scheduler.

The recommended frequency is every week, using a normal user account
(not privileged) running on a batch server (not a DC).

Command

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

We recommend starting the application manually to view any problem such
as:

- TCP port already used

- connection string invalid

The method to run the application manually is to run the command:

```bash
dotnet.exe PingCastlePro.dll
```

(dotnet.exe is stored by default on c:\\program files\\dotnet)

Additionnally, you can choose to open the application on the network by
specifying the \--server.urls parameter:

```bash
dotnet.exe PingCastlePro.dll --server.urls=http://*:8080
```

However, if there is a permission problem in the database, this method
won\'t display an error because the database will be connected under the
user context and not the system context. Typically on Windows, the IIS
service connect under IIS APPPool\\AppName. We recommend to look at the
following page to grant right to the application pool account on Sql
Server:

https://blogs.msdn.microsoft.com/ericparvin/2015/04/14/how-to-add-the-applicationpoolidentity-to-a-sql-server-login

Then depending on the platform additional logs can be stored.

On Windows, the web.config file at the root can be edited to generate
debug logs. The event viewer is also a place where debugging data can be
stored.

On Linux, the command `service <name-of-service> status` can indicate if
the service is running or not. If an error prohibit the start of the
service, the log is shown.

![](/img/product_docs/pingcastle/proinstall/image56.png)

When no log is available, the program can be run manually outside of the
service scope to have a more detailed error message.

Example:

![](/img/product_docs/pingcastle/proinstall/image57.png)

Here are a couple of well-known errors, their description and their
solution

## Incorrect version of the asp.net core middleware

Here are the messages displayed when running under a service:

![](/img/product_docs/pingcastle/proinstall/image58.png)

![](/img/product_docs/pingcastle/proinstall/image59.png)

![](/img/product_docs/pingcastle/proinstall/image60.png)

And the message when running on the command line:

![C:\Users\Adiant\AppData\Local\Temp\dotnet_pingastleenterprise.dll.png](/img/product_docs/pingcastle/proinstall/image61.png)

![](/img/product_docs/pingcastle/proinstall/image62.png)Solution:

identify the correct version of the framework and install it. Do not
forget to install the IIS middleware is you are installing on IIS.

Note: the last error was related to the missing KB KB2533623

## Error at the application startup

When the application is unable to start, the following message are
shown:

![C:\Users\Adiant\AppData\Local\Temp\brower_error.png](/img/product_docs/pingcastle/proinstall/image63.png)

![C:\Users\Adiant\AppData\Local\Temp\event1000.png](/img/product_docs/pingcastle/proinstall/image64.png)

A more detailed message are shown in the event log or directly on the
command line:

![C:\Users\Adiant\AppData\Local\Temp\event1026.png](/img/product_docs/pingcastle/proinstall/image65.png)

In this case, the license was invalid and need to be replaced in the
file appsettings.Production.json.

## Accurate permissions on the database

When the database doesn\'t contain the table needed, the application
tries to create them. If the permissions are not granted, a message will
be generated and the application will not be able to start.

![C:\Users\Adiant\AppData\Local\Temp\sql_auth_error.png](/img/product_docs/pingcastle/proinstall/image66.png)

Solution:

Grant the right to create tables in the database or run a SQL script to
create this table. This script is available on demand.

Do not forget that the inability to create table can be seen of a
symptom of a lack of permissions. The inability to add or remove records
in the database will prohibit the use of the application.

If you are running PingCastle from another SQL Server, the default
identity used by the application pool will not be granted access.

Be sure you are able to connect from another computer than your SQL
database server. Indeed, by default you have a firewall preventing
remote connection and that the database may not be exposed. Be sure that
it is available through TCP. (in the following case, remote access is
forbidden because TCP/IP is disabled)

![](/img/product_docs/pingcastle/proinstall/image67.png)

You have 2 solutions to grant PingCastle an identity allowed on SQL
Server:

- Changing the application pool identity to match an active directory
  user which are granted permissions to the database

![](/img/product_docs/pingcastle/proinstall/image68.png)

![](/img/product_docs/pingcastle/proinstall/image69.png)

![](/img/product_docs/pingcastle/proinstall/image70.png)

- You can use a SQL Server local account and specify its login password
  in the connection string

Edit the application.setting file and locate the connection string. Then
add `;User ID=sa;Password=pass123`

![](/img/product_docs/pingcastle/proinstall/image71.png)

![](/img/product_docs/pingcastle/proinstall/image72.png)

## Enable Debug Logging

Follow the steps to enable debug logging.

1.  Log in to the PingCastle Pro Server.

2.  Locate the appsettings.json file.

3.  This is usually located at: C:\\PingCastlePro

4.  Edit the **Appsettings.json** file so the Logging Section looks like
    the example below:

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

Example

```xml
<aspNetCore processPath="dotnet" arguments=".\PingCastlePro.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" />
```

6.  Open PowerShell as Administrator and type in **IISRESET** to restart
    the web services.

7.  Log in and perform actions in the PingCastle Pro web portal. Check
    C:\\PingCastlePro\\logs\\ to ensure logs are being written.
