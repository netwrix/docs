---
title: "Quick installation"
description: "Install PingCastle Pro with the quick installation procedure."
sidebar_position: 20
---

# Quick Installation

:::note
PingCastle Pro 4.0 isn't yet released. This documentation describes the planned 4.0 behavior and can change before release. For the current release, see the 3.5 version of this documentation.
:::

PingCastle Pro supports a setup that minimizes the requirements and
manipulations. Netwrix recommends this scenario for tests but not in
production, because it doesn't support all IIS and SQL Server upgrade
mechanisms.

## Requirements

It requires:

- IIS installed (it is a Windows component)

- An SQL database such as SQL Express installed

- The asp.net core 8.0 \"Hosting Bundle\" available at:

```
  https://dotnet.microsoft.com/en-us/download/dotnet/8.0
```

> ![A screenshot of a computer Description automatically generated](/images/pingcastlepro/4.0/proinstall/image13.webp)

:::note
Install IIS before the ASP.NET 8.0 Hosting Bundle. If you don't, you may need to repair the Hosting Bundle installation.
:::

![A screenshot of a computer Description automatically generated](/images/pingcastlepro/4.0/proinstall/image14.webp)

## API Key and endpoint

Before starting the setup, provide the Tenant ID and Client ID of the application.

The Client Secret, Notification group, and SMTP configuration are
optional; you can modify them later in the appsettings.Production.json
file.

## Procedure

The Windows Installer (MSI) file guides the installation of the software:

![PingCastle Pro installer welcome screen](/images/pingcastlepro/4.0/proinstall/image15.webp)

![License agreement screen in the PingCastle Pro installer](/images/pingcastlepro/4.0/proinstall/image16.webp)

After you accept the license terms, the software requires a license key
that Netwrix distributes alongside the MSI files.

![License key entry screen in the PingCastle Pro installer](/images/pingcastlepro/4.0/proinstall/image17.webp)

:::note
If the license key is missing, contact PingCastle support.
:::

You can configure the database in two ways:

- Using a connection string you provide directly

- Using a connection to a database: the software then creates
  the database on your behalf

![Database configuration options screen in the installer](/images/pingcastlepro/4.0/proinstall/image18.webp)

Option which creates the database:

![Installer option to create a new database](/images/pingcastlepro/4.0/proinstall/image19.webp)

Option with the direct connection string:

![Installer option to use a direct connection string](/images/pingcastlepro/4.0/proinstall/image20.webp)

Then the setup asks for the authentication configuration.

![Authentication configuration screen in the installer](/images/pingcastlepro/4.0/proinstall/image21.webp)

For Windows, PingCastle allows the Everyone group by default.
To change the group, select the browse button. A new dialog appears.

:::note
If you select "Domain admins" this group won't work. Windows strips
the group from the restricted token, so the application doesn't see
the user as a "Domain admins" member even if the user belongs to the
group. Run whoami /all in a command prompt to see the groups the
token presents to the application.
:::

![Browse button for selecting the allowed group in the installer](/images/pingcastlepro/4.0/proinstall/image22.webp)

![Select Group dialog for choosing the group allowed to access PingCastle](/images/pingcastlepro/4.0/proinstall/image23.webp)

For Azure, enter the tenant ID and client ID you collected earlier here.

![Azure authentication configuration screen showing tenant ID and client ID fields](/images/pingcastlepro/4.0/proinstall/image24.webp)

To send email notifications, you can set the SMTP configuration. Enter
the email addresses that will receive the email notifications here as
"destination email".

![SMTP configuration screen showing destination email field](/images/pingcastlepro/4.0/proinstall/image25.webp)

Then the setup is ready to perform its activity.

![Installer summary screen ready to begin installation](/images/pingcastlepro/4.0/proinstall/image26.webp)

The setup automatically configures the website, the database, and the
application, and if it creates the database, grants the database
permission to IIS (application pool)

:::note
When you remove the software, the setup doesn't remove the database.
:::
