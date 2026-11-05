---
title: "Installation"
description: "Install IIS, the ASP.NET Core 10.0 Hosting Bundle, and the PingCastle Pro MSI to set up PingCastle Pro."
sidebar_position: 20
---

# Installation

Install PingCastle Pro on a Windows server in four parts: IIS, the ASP.NET Core 10.0 Hosting Bundle, a SQL Server database, and the PingCastle Pro Windows Installer (MSI). This installation is suitable for production.

:::note
PingCastle Pro needs a SQL Server database. Have one available before you run the MSI. See [Database requirements](../requirements/database.md). If you don't have a SQL Server instance, [get SQL Server Express](#get-sql-server-express).
:::

## Install IIS

Internet Information Services (IIS) is a Windows component that hosts the PingCastle Pro website.

1. On the server, open **Server Manager** and select **Add roles and features**.
2. Select **Web Server (IIS)** and complete the wizard.

Alternatively, run the following command in an elevated PowerShell window:

```powershell
Install-WindowsFeature Web-Server -IncludeManagementTools
```

:::warning
Install IIS before the ASP.NET Core 10.0 Hosting Bundle. If you don't, you may need to repair the Hosting Bundle installation.
:::

## Install the ASP.NET Core 10.0 Hosting Bundle

1. On the [.NET 10.0 download page](https://dotnet.microsoft.com/en-us/download/dotnet/10.0), find the Windows installers for **ASP.NET Core Runtime** and select **Hosting Bundle**.

   ![The ASP.NET Core Runtime download page with the Hosting Bundle link highlighted](/images/pingcastlepro/4.1/proinstall/image13.webp)

2. Run the installer and let it finish.

   ![The Windows Server Hosting setup showing installation progress](/images/pingcastlepro/4.1/proinstall/image14.webp)

## Get SQL Server Express

Skip this step if you already have a SQL Server instance. PingCastle Pro works with any edition of SQL Server.

1. Download SQL Server Express from the [Microsoft SQL Server downloads page](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
2. Run the installer and select **Basic**.
3. Let the installation finish.

## Install the PingCastle Pro MSI

Before you start, have the following ready:

- The license key that Netwrix distributes alongside the MSI file. If it's missing, contact PingCastle support.
- If you use Entra ID authentication, the Tenant ID and Client ID of the application. The Client Secret, notification group, and SMTP configuration are optional. You can change them later in the `appsettings.Production.json` file.

Run the MSI file and follow the installer.

1. On the welcome screen, select **Next**.

   ![PingCastle Pro installer welcome screen](/images/pingcastlepro/4.1/proinstall/image15.webp)

2. Accept the license terms.

   ![License agreement screen in the PingCastle Pro installer](/images/pingcastlepro/4.1/proinstall/image16.webp)

3. Enter the license key.

   ![License key entry screen in the PingCastle Pro installer](/images/pingcastlepro/4.1/proinstall/image17.webp)

4. Configure the database. Choose one of two options:

   - **Create the database**: Enter a connection to the database server. The installer creates the database for you.
   - **Use a connection string**: Enter the connection string of an existing database.

   ![Database configuration options screen in the installer](/images/pingcastlepro/4.1/proinstall/image18.webp)

   The option that creates the database:

   ![Installer option to create a new database](/images/pingcastlepro/4.1/proinstall/image19.webp)

   The option with the direct connection string:

   ![Installer option to use a direct connection string](/images/pingcastlepro/4.1/proinstall/image20.webp)

5. Configure authentication.

   ![Authentication configuration screen in the installer](/images/pingcastlepro/4.1/proinstall/image21.webp)

   - **Windows**: PingCastle Pro allows the Everyone group by default. To change the group, select the browse button, then select the group in the **Select Group** dialog.

     ![Browse button for selecting the allowed group in the installer](/images/pingcastlepro/4.1/proinstall/image22.webp)

     ![Select Group dialog for choosing the group allowed to access PingCastle](/images/pingcastlepro/4.1/proinstall/image23.webp)

     :::note
     The **Domain Admins** group doesn't work. Windows strips the group from the restricted token, so the application doesn't see the user as a member even if the user belongs to the group. Run `whoami /all` in a command prompt to see the groups the token presents to the application.
     :::

   - **Entra ID**: Enter the Tenant ID and Client ID of the application.

     ![Entra ID authentication configuration screen showing tenant ID and client ID fields](/images/pingcastlepro/4.1/proinstall/image24.webp)

6. Optional: To send email notifications, configure SMTP. In **Destination email**, enter the addresses that receive the notifications.

   ![SMTP configuration screen showing destination email field](/images/pingcastlepro/4.1/proinstall/image25.webp)

7. Select **Install**.

   ![Installer summary screen ready to begin installation](/images/pingcastlepro/4.1/proinstall/image26.webp)

The installer configures the website, the database, and the application. If it creates the database, it also grants the IIS application pool permission to the database.

:::note
When you remove PingCastle Pro, the uninstaller doesn't remove the database.
:::
