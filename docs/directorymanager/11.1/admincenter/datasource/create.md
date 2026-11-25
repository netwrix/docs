---
title: "Create Data Sources in Directory Manager"
description: "Create data sources for Excel, Access, Oracle, SQL Server, text/CSV, ODBC, and SCIM providers, including OneDrive-hosted files, for Synchronize jobs."
keywords:
  - create data source
  - Synchronize job data source
  - Excel data source
  - OneDrive data source
  - SQL Server data source
  - SCIM data source
sidebar_position: 10
---

# Create Data Sources in Directory Manager

To synchronize data across different providers, create a data source for each provider before you
create a Synchronize job. Data sources are mainly used in Synchronize jobs. You can also use them in
queries that search for directory objects and in queries for group membership update.

You can create data sources for these providers:

- [Microsoft Excel](#create-a-data-source-for-ms-excel)
- [Microsoft Access](#create-a-data-source-for-ms-access)
- [Text/CSV](#create-a-data-source-for-a-textcsv-file)
- [Oracle](#create-a-data-source-for-oracle)
- [SQL Server](#create-a-data-source-for-sql-server)
- [ODBC](#create-a-data-source-for-odbc)
- [SCIM](#create-a-data-source-for-scim)

## OneDrive configuration

Excel, Access, and Text/CSV data sources can use a file hosted on OneDrive. Before you create a data
source for a OneDrive file, complete these requirements.

### App registration permissions

The application you registered for Directory Manager in Microsoft Entra admin center must have this
application API permission. For registration steps, see
[Registration and Permissions Assignment](/docs/directorymanager/11.1/configureentraid/register/appregister.md).

| API | Permission | Type | Description |
| --- | --- | --- | --- |
| Microsoft Graph | `Files.Read.All` | Application | Read files in all site collections |

To add the permission:

1. In Microsoft Entra admin center, go to **Identity** > **Applications** > **App registrations** and select the Directory Manager application.
2. On the **API permissions** page, click **Add a permission** > **Microsoft Graph** > **Application permissions**.
3. Select `Files.Read.All` and click **Add permissions**.
4. Click **Grant admin consent**. The permission isn't valid until an administrator grants consent.

### Find the application ID and tenant ID

The **Create Data Source** page asks for the application ID and tenant ID of the app registration.
Both appear on the **Overview** page of the app registration:

- **Application (client) ID**: Enter this value in the **Registered Application ID on Azure Active Directory** box.
- **Directory (tenant) ID**: Enter this value in the **Registered Tenant ID on Azure Active Directory** box.

### Generate a client secret

Directory Manager authenticates to OneDrive through the app registration, so the **Create Data
Source** page requires a client secret for it. To generate the secret:

1. In Microsoft Entra admin center, open the Directory Manager app registration and click **Certificates & secrets** in the left pane.
2. On the **Client secrets** tab, click **New client secret**.
3. Enter a description and select an expiration period, then click **Add**.
4. Copy the value in the **Value** column. Don't copy the **Secret ID**.

:::warning
Entra displays the secret value only once. Copy it before you leave the page. When the secret
expires, generate a new one and update each OneDrive data source with it. See
[Update a data source](/docs/directorymanager/11.1/admincenter/datasource/manage.md#update-a-data-source).
:::

### Service account license

The account you enter in the **Service Account** box when you create the data source must have a
Microsoft license that includes OneDrive, such as a Microsoft 365 license.

### File location

The service account must own the file, and the file must reside in the service account's **My
files** folder in OneDrive. Directory Manager can't access files that other users share with the
service account or files that reside in another user's OneDrive.

{/* TODO: Confirm whether the file can reside in a subfolder of My files, and if so, how to enter
   the path in the File Name box. Until testing confirms it, the docs state only the My files folder. */}

## Create a data source for MS Excel

Create a data source for an Excel file to establish a connection before you use the file as a source
or destination in Synchronize jobs or in queries. You can connect to an Excel file on a local server
or on OneDrive.

Synchronize supports Microsoft Excel (\*.xls | xlsx) as both a source and a destination provider. As
a destination in a Synchronize job, it exports data from a source to a new Excel worksheet. The
schema of the new worksheet is built automatically from the fields that you select from the source
to map to the destination.

The Directory Manager Installer installs the components that the MS Excel provider requires. If you
experience any issue, ensure the following are installed on the Directory Manager server:

- Microsoft Office 2007 or later
- Data connectivity components from
  [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

Follow the steps for the location of your Excel file.

### Create the data source when the Excel file is on a local server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Microsoft Excel**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **Local Server**.
6. In the **File Path** box, enter the path to the MS Excel file you want to create the data source for. Include the file name and extension.
   For example: `D:\Employee Records\Sheets\Employee Medical Records.xlsx`

   :::note
   The MS Excel file must be on the machine that Data service is installed on, or in a location that Data service can access.
   :::
7. If the file is on a network path, enter the network domain or hostname in the **Domain/Hostname** box.
8. In the **User Account** and **Password** boxes, enter the username and password of an account that can access the file on the network path.
9. Click **Create Data Source**. The data source appears on the **Excel** tab of the **Data Sources** page.

### Create the data source when the Excel file is on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Microsoft Excel**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **OneDrive**.
6. In the **Service Account** box, enter the username of the service account that owns the file on OneDrive.
7. In the **Registered Application ID on Azure Active Directory** box, enter the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
8. In the **Secret** box, enter the client secret you generated for the app registration. See [Generate a client secret](#generate-a-client-secret).
9. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
10. In the **File Name** box, enter the name of the file, including the file extension. For example, `Employee Contact Details.xlsx`.
11. Click **Create Data Source**. The data source appears on the **Excel** tab of the **Data Sources** page.

## Create a data source for MS Access

Create a data source for an Access database to establish a connection before you use it as a source
or destination in Synchronize jobs or in queries. You can connect to an Access file on a local server
or on OneDrive.

Synchronize supports Microsoft Access (.mdb | .accdb) as both a source and a destination provider.

The MS Access provider supports automatic schema detection. For Synchronize to communicate with this
provider, install data connectivity components on the Directory Manager server. Download them from
[Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

Follow the steps for the location of your Access file.

### Create the data source when the Access file is on a local server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Microsoft Access**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **Local Server**.
6. In the **File Path** box, enter the path to the MS Access database you want to create the data source for. Include the file name and extension.
   For example: `D:\Employee Records\Databases\Employee Medical Records.accdb`

   :::note
   The Access database must be on the machine that Data service is installed on, or in a location that Data service can access.
   :::
7. If the database file is password protected, enter the password in the **File Password** box.
8. If the file is on a network path, enter the network domain or hostname in the **Domain/Hostname** box.
9. In the **User Account** and **Password** boxes, enter the username and password of an account that can access the file on the network path.
10. Click **Create Data Source**. The data source appears on the **Access** tab of the **Data Sources** page.

### Create the data source when the Access file is on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Microsoft Access**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **OneDrive**.
6. In the **Service Account** box, enter the username of the service account that owns the file on OneDrive.
7. If the database file is password protected, enter the password in the **File Password** box.
8. In the **Registered Application ID on Azure Active Directory** box, enter the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
9. In the **Secret** box, enter the client secret you generated for the app registration. See [Generate a client secret](#generate-a-client-secret).
10. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
11. In the **File Name** box, enter the name of the file, including the file extension. For example, `Employee Medical Records.accdb`.
12. Click **Create Data Source**. The data source appears on the **Access** tab of the **Data Sources** page.

## Create a data source for a text/CSV file

Create a data source for a comma-separated values (.csv) file or a text (.txt) file. You must also
specify the delimiter that separates values in the file.

You can use this data source in queries and only as a source in Synchronize jobs.

You can connect to a text file on a local server or on OneDrive. Follow the steps for the location of
your file.

### Create the data source when the text file is on a local server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Text/CSV**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **Local Server**.
6. In the **File Path** box, enter the path to the text file you want to create the data source for. Include the file name and extension.
   For example: `D:\Employee Records\Sheets\Employee Medical Records.csv`

   :::note
   The text file must be on the machine that Data service is installed on, or in a location that Data service can access.
   :::
7. In the **Delimiter** box, specify the character that separates values in the file. You can also enter a space.
8. If the file is on a network path, enter the network domain or hostname in the **Domain/Hostname** box.
9. In the **User Account** and **Password** boxes, enter the username and password of an account that can access the file on the network path.
10. Click **Create Data Source**. The data source appears on the **Text/CSV** tab of the **Data Sources** page.

### Create the data source when the text file is on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Text/CSV**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. From the **File Server** dropdown list, select **OneDrive**.
6. In the **Service Account** box, enter the username of the service account that owns the file on OneDrive.
7. In the **Delimiter** box, specify the character that separates values in the file. You can also enter a space.
8. In the **Registered Application ID on Azure Active Directory** box, enter the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
9. In the **Secret** box, enter the client secret you generated for the app registration. See [Generate a client secret](#generate-a-client-secret).
10. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to the Directory Manager application when you registered it in Microsoft Entra admin center.
11. In the **File Name** box, enter the name of the file, including the file extension. For example, `Employee Contact Details.csv`.
12. Click **Create Data Source**. The data source appears on the **Text/CSV** tab of the **Data Sources** page.

## Create a data source for Oracle

Create a data source for an Oracle server or a specific database on a server. You can use this data
source in queries and as a source and destination provider in Synchronize jobs. This provider
supports dynamic schema detection.

:::note
Oracle client must be installed to use this provider. Reboot your computer after you install the
Oracle client.
:::

To create the data source:

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **Oracle**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. In the **Oracle Server or Service Name** box, enter the name of the Oracle service or the server you want to create the data source for.
6. In the **Service Account** and **Service Account Password** boxes, enter the username and password of a service account to connect to the Oracle server.
   When you use this data source in a Synchronize job, users can select the databases that are accessible with these credentials.
7. In the **Protocol** box, specify the protocol to use for connecting to the databases on the Oracle server. Examples are TCP and TCP/IP.
8. In the **HostName** box, enter the name of the machine that hosts the Oracle server.
9. In the **Port Number** box, enter the port configured for the Oracle server. Directory Manager uses this port to communicate with the Oracle server.
10. In the **Database or Schema (optional)** box, specify the name of the database you want to create the data source for.
   If you leave this box blank, a Synchronize job displays all databases on the specified server. The user can select a database as needed.
11. Click **Create Data Source**. The data source appears on the **Oracle** tab of the **Data Sources** page.

## Create a data source for SQL Server

Create a data source for an SQL database. You can use this data source in queries and as a source
and destination in Synchronize jobs. This provider supports dynamic schema detection.

To create the data source:

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **SQL Server**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. In the **SQL Server Name** box, enter the name or IP address of the SQL server that hosts the SQL database you want to create a data source for.
6. To use SQL authentication, enter the username and password of an SQL server account in the **Service Account** and **Service Account Password** boxes.
   SQL authentication is the default mode, so these boxes are enabled by default.
7. To use Windows authentication with a Windows account, select the **Windows Authentication** checkbox.
   With Windows authentication, users are already signed in to Windows and don't have to sign in separately to SQL Server.
8. In the **SQL Server Database Name** box, specify the SQL database to create a data source for.
9. Click **Create Data Source**. The data source appears on the **MS SQL Server** tab of the **Data Sources** page.

## Create a data source for ODBC

Use an Open Database Connectivity (ODBC) data source to connect to an ODBC-compatible provider, such as a database, directory, or
file. Examples include SQL Server, MS Access files, and Oracle.

Create a separate data source for each ODBC-compatible file, database, or directory you want to use
in queries or as a source or destination in Synchronize jobs.

To create the data source:

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **ODBC**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. In the **DSN** box, enter the data source name (DSN). Directory Manager uses this name to request a connection to the ODBC data source.
   - For a system DSN, enter the name of the DSN.
   - For a file DSN, enter the file path with the file name and extension.
6. Select the **System DSN** or **File DSN** option button to specify the DSN type to use for connecting to the data source.
7. If the data source is password protected, enter a username and password in the **Service Account** and **Service Account Password** boxes.
   Depending on the data source, you may not need to provide both. For example, an MS Access database may need only a password, while an SQL server may require both a username and a password.
8. Click **Create Data Source**. The data source appears on the **ODBC** tab of the **Data Sources** page.

## Create a data source for SCIM

Directory Manager supports the identity providers Active Directory, Microsoft Entra ID, and Google
Workspace. It doesn't support Slack, AWS, JumpCloud, and GitHub. You can create a System for Cross-domain Identity Management (SCIM) data
source for these and other providers to use them in queries and as sources or destinations in
Synchronize jobs.

As a prerequisite, the provider must support SCIM and expose an endpoint URL that Directory Manager
can consume.

To create the data source:

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create Data Source** page opens.
3. In the **Data Source Type** dropdown list, select **SCIM**. The list shows the supported providers.
4. In the **Name** box, enter a name for the data source.
5. In the **SCIM Endpoint** box, enter the SCIM endpoint URL that the provider exposes.
6. In the **Bearer Token** box, enter the authentication token you generated in the provider.
7. Click **Create Data Source**. The data source appears on the **SCIM** tab of the **Data Sources** page.
