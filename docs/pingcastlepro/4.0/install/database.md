---
title: "Database setup for custom installation"
description: "Prepare a local or remote database for a custom PingCastle Pro installation."
sidebar_position: 60
---

# Database

Configuring the database backup is the customer's responsibility.

PingCastle Pro requires a user account on this database. By default,
PingCastle Pro creates the tables at the initial run and can add or
modify existing tables when a software update requires it. If you use
this default pattern, the database user MUST be owner of the
database.

PingCastle Pro supports limited privileges on the database (it needs only
read, modify, and delete data) on demand. In this case, Netwrix
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

For example, here are some commands for PostGres on Ubuntu 17:

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

:::note
On PostGres, the collation (sort order) doesn't account for some special characters, which puts the `[Default]` container in a different position than the start of the list of entities.
:::

## Using a Database hosted on another server

**Configure SQL Server with a local DB account**

You first need to create a local account inside Sql Server.

![](/images/pingcastlepro/4.0/proinstall/image35.webp)

Select SQL Server authentication.

Be sure to uncheck "user must change password at the next login" as
PingCastleEnterprise doesn't support password rotation. (you can change
the password later inside the application.Production.json file)

![SQL Server login properties dialog with the change-password-at-next-login option unchecked](/images/pingcastlepro/4.0/proinstall/image36.webp)

Then create a database.

![](/images/pingcastlepro/4.0/proinstall/image37.webp)

**Then create a database**

![](/images/pingcastlepro/4.0/proinstall/image38.webp)

Set the owner as the user you created earlier.

Verify that the credentials are correct and that the server is available
before continuing.

![Database properties dialog confirming the owner and server availability](/images/pingcastlepro/4.0/proinstall/image39.webp)

In SQL Server configuration, a typical mistake is to use tcp connection.
You must enable TCP/IP manually in SQL Server because SQL Server disables
it by default.

![SQL Server Configuration Manager showing TCP/IP enabled for the SQL Server instance](/images/pingcastlepro/4.0/proinstall/image40.webp)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/images/pingcastlepro/4.0/proinstall/image41.webp)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;User Id=pingcastle;password=pingcastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

The server doesn't create the database at installation time. Any issues appear on first run. Check the event log for the full error message. You can
change the connection string after installation by editing `appsettings.production.json`. You must escape special characters in the connection string because the value is inside a JSON string.

![Installer step for entering an ad-hoc connection string](/images/pingcastlepro/4.0/proinstall/image42.webp)

![appsettings.production.json file showing the escaped connection string](/images/pingcastlepro/4.0/proinstall/image43.webp)

**Configure SQL Server with an Active Directory user**

You need to first create this Windows user.

![](/images/pingcastlepro/4.0/proinstall/image35.webp)

You have to create a new Windows login. Go to create a new login.

Then select the Windows user you created.

![New Login dialog with the Windows user selected](/images/pingcastlepro/4.0/proinstall/image44.webp)

You can then create a database with the Windows user as the owner of the
database:

![New Database dialog with the Windows user set as owner](/images/pingcastlepro/4.0/proinstall/image45.webp)

At the installation step, indicate that you want to use an ad-hoc
connection string.

![](/images/pingcastlepro/4.0/proinstall/image41.webp)

Specify the following:

```
Server=tcp:server.fqdn.com;Database=PingCastle;Trusted_Connection=True;MultipleActiveResultSets=true
```

The installation continues.

After the installation, you need to
change the Application Pool identity.\
Go to IIS and select the application pool. Go to the advanced settings

![Advanced Settings dialog for the application pool in IIS](/images/pingcastlepro/4.0/proinstall/image46.webp)

Go to Identity and select the custom user account:

![Application Pool Identity dialog with the custom user account selected](/images/pingcastlepro/4.0/proinstall/image47.webp)

Restart IIS.
