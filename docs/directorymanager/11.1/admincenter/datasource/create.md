---
title: "Create a Data Source"
description: "Create a Data Source"
sidebar_position: 10
---

# Create a Data Source

You can create Synchronize jobs to synchronize data across different providers. As a prerequisite,
you must create data sources for those providers.

You primarily use data sources in Synchronize jobs, but you can also use them in queries to search
for directory objects and in queries for group membership update.

You can create data sources for the following providers:

- [Microsoft Excel](#create-a-data-source-for-ms-excel)
- [Microsoft Access](#create-a-data-source-for-ms-access)
- [Text/CSV](#create-a-data-source-for-a-textcsv-file)
- [Oracle](#create-a-data-source-for-oracle)
- [SQL Server](#create-a-data-source-for-sql-server)
- [ODBC](#create-a-data-source-for-odbc)
- [SCIM](#create-a-data-source-for-scim)

## OneDrive configuration

Excel, Access, and Text/CSV data sources can use a file hosted on OneDrive. Before you create a
data source for a OneDrive file, complete the following requirements.

### App registration permissions

The application you registered for Directory Manager in Microsoft Entra Admin Center must have the
following application API permission. For registration steps, see
[Registration and Permissions Assignment](../../configureentraid/register/appregister.md).

| API | Permission | Type | Description |
| --- | --- | --- | --- |
| Microsoft Graph | `Files.Read.All` | Application | Read files in all site collections |

To add the permission:

Step 1 – In Microsoft Entra Admin Center, go to **Identity** > **Applications** > **App
registrations** and select the Directory Manager application.

Step 2 – On the **API permissions** page, click **Add a permission** > **Microsoft Graph** >
**Application permissions**.

Step 3 – Select `Files.Read.All` and click **Add permissions**.

Step 4 – Click **Grant admin consent**. The permission isn't valid until an administrator grants
consent.

### Find the application ID and tenant ID

The Create Data Source page asks for the application ID and tenant ID of the app registration. Both
appear on the **Overview** page of the app registration:

- **Application (client) ID** – Enter this value in the Registered Application ID on Azure Active
  Directory box.
- **Directory (tenant) ID** – Enter this value in the Registered Tenant ID on Azure Active Directory
  box.

### Generate a client secret

Directory Manager authenticates to OneDrive through the app registration, so the Create Data Source
page requires a client secret for it. To generate the secret:

Step 1 – In Microsoft Entra Admin Center, open the Directory Manager app registration and click
**Certificates & secrets** in the left pane.

Step 2 – On the **Client secrets** tab, click **New client secret**.

Step 3 – Enter a description and select an expiration period, then click **Add**.

Step 4 – Copy the value in the **Value** column. Don't copy the **Secret ID**.

:::warning
Entra displays the secret value only once. Copy it before you leave the page. When the secret
expires, generate a new one and update each OneDrive data source with it. See
[Update a Data Source](manage.md#update-a-data-source).
:::

### Service account license

The account you enter in the Service Account box when you create the data source must have a
Microsoft license that includes OneDrive, such as a Microsoft 365 license.

### File location

The service account must own the file, and the file must reside in the service account's
**My files** folder in OneDrive. Directory Manager can't access files that other users share with the
service account or files that reside in another user's OneDrive.

{/* TODO: Confirm whether the file can reside in a subfolder of My files, and if so, how to enter
   the path in the File Name box. Until testing confirms it, the docs state only the My files folder. */}

## Create a Data Source for MS Excel

Create a data source for an Excel file to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. With Directory Manager, you can connect to an Excel
file located on a local server or on OneDrive.

Synchronize supports Microsoft Excel (\*.xls | xlsx) as both a source and destination
provider. Use it as destination in a Synchronize job to export data from a source to a new Excel
worksheet. Synchronize automatically builds the schema of the new Excel worksheet from the fields
that you select from the source to map to the destination.

The Directory Manager Installer installs the required components for the MS Excel provider while
installing Directory Manager. However, if you experience any issue, install the following on
the Directory Manager server:

- Microsoft Office 2007 or later
- Data connectivity components found at
  [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

You can place the Excel file for creating a data source on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- [When the Excel File is Located on a Local Server](#when-the-excel-file-is-located-on-a-local-server)
- [When the Excel file is located on OneDrive](#when-the-excel-file-is-located-on-onedrive)

### When the Excel File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Excel_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the MS Excel file you want to create the data
source for. Include the file name and extension in the path. For example:
D:\Employee Records\Sheets\EmployeeMedical Records.xlsx

:::note
Place the MS Excel file either on the Data service machine or in a location that Data service can
access.
:::


Step 7 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 8 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 9 – Click **Create Data Source**.
The data source is available on the Excel tab of the Data Sources page.

### When the Excel file is located on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Excel_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account box, enter the username of the service account that owns the file on
OneDrive.

Step 7 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 8 – In the Secret box, enter the client secret you generated for the app registration. See
[Generate a client secret](#generate-a-client-secret).

Step 9 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 10 – Enter the name of the file in the **File Name** box. Include the file extension in the
name, for example, `Employee Contact Details.xlsx`.

Step 11 – Click **Create Data Source**.
The data source is available on the Excel tab of the Data Sources page.

## Create a Data Source for MS Access

Create a data source for an Access database to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. Directory Manager lets you connect to an
Access file located on a local server or on OneDrive.

Synchronize supports Microsoft Access (.mdb | .accdb) as both a source and destination
provider.

The MS Access provider supports automatic schema detection. For Synchronize to communicate with this
provider, you must install data connectivity components on the Directory Manager server. These
components are available at
[Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

You can place the Access file for creating a data source on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- [When the Access File is Located on a Local Server](#when-the-access-file-is-located-on-a-local-server)
- [When the Access File is Located on OneDrive](#when-the-access-file-is-located-on-onedrive)

### When the Access File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Access_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the MS Access database you want to create the
data source for. Include the file name and extension in the path. For example:
D:\Employee Records\Databases\Employee Medical Records.accdb

:::note
Place the Access database either on the Data service machine or in a location that Data service
can access.
:::


Step 7 – If the database file is password protected, enter the password in the File Password box.

Step 8 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 9 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 10 – Click **Create Data Source**.
The data source is available on the Access tab of the Data Sources page.

### When the Access File is Located on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Access_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account box, enter the username of the service account that owns the file on
OneDrive.

Step 7 – If the database file is password protected, enter the password in the File Password box.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 9 – In the Secret box, enter the client secret you generated for the app registration. See
[Generate a client secret](#generate-a-client-secret).

Step 10 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 11 – Enter the name of the file in the File Name box. Include the file extension in the name,
for example, `Employee Medical Records.accdb`.

Step 12 – Click **Create Data Source**.
The data source is available on the Access tab of the Data Sources page.

## Create a Data Source for a Text/CSV File

You can create a data source for a comma-separated values (.csv) file or a text (.txt) file. You
must also specify the delimiter used in the file to separate values.

You can use this data source in queries and as a source in Synchronize jobs. You can't use it as a
destination.

With Directory Manager, you can connect to a text file located on a local server or on
OneDrive. Follow the steps in the respective section to create a data source.

- [When the Text File is Located on a Local Server](#when-the-text-file-is-located-on-a-local-server)
- [When the Text File is Located on OneDrive](#when-the-text-file-is-located-on-onedrive)

### When the Text File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Text/CSV_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the text file you want to create the data source
for. Include the file name and extension in the path. For example:
D:\Employee Records\Sheets\Employee Medical Records.csv

:::note
Place the text file either on the Data service machine or in a location that Data service can
access.
:::


Step 7 – In the Delimiter box, specify the character that separates values in the file.
You can also enter a space as a character.

Step 8 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 9 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 10 – Click **Create Data Source**.
The data source is available on the Text/CSV tab of the Data Sources page.

### When the Text File is Located on OneDrive

Before you begin, complete the [OneDrive configuration](#onedrive-configuration) requirements.

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Text/CSV_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account box, enter the username of the service account that owns the file on
OneDrive.

Step 7 – In the Delimiter box, specify the character that separates values in the file.
You can also enter a space as a character.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 9 – In the Secret box, enter the client secret you generated for the app registration. See
[Generate a client secret](#generate-a-client-secret).

Step 10 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 11 – Enter the name of the file in the File Name box. Include the file extension in the name,
for example, `Employee Contact Details.csv`.

Step 12 – Click **Create Data Source**.
The data source is available on the Text/CSV tab of the Data Sources page.

## Create a Data Source for Oracle

You can create a data source for an Oracle server or a specific database on a server. You can
use this data source in queries and as source and destination provider in Synchronize jobs. This
provider supports dynamic schema detection.

:::note
Install the Oracle client to use this provider. Ensure you reboot your computer after
installing the Oracle client.
:::


To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Oracle_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – In the Oracle Server or Service Name box, enter the name of the Oracle service or the
server you want to create the data source for.

Step 6 – In the Service Account and Service Account Password boxes, provide the username and
password of a service account to connect to the Oracle server.
When you use this data source in a Synchronize job, you can select the databases that these
credentials can access.

Step 7 – In the Protocol box, specify the protocol to use for connecting to the databases on the
Oracle server. For example, TCP, or TCP/IP.

Step 8 – In the HostName box, enter the name of the machine that hosts the Oracle server.

Step 9 – In the Port Number box, enter the port configured for the Oracle server. Directory Manager uses this port
to communicate with the Oracle server.

Step 10 – In the Database or Schema (optional) box, specify the name of the database you want to
create the data source for. If you leave this box blank, a Synchronize job displays all databases
on the specified server, and the user can select one.

Step 11 – Click **Create Data Source**.
The data source is available on the Oracle tab of the Data Sources page.

## Create a Data Source for SQL Server

Use Directory Manager to create a data source for an SQL database. You can use this data source
in queries and as source and destination in Synchronize jobs. This provider supports dynamic
schema detection.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _SQL Server_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – In the SQL Server Name box, enter the name or IP address of the SQL server that hosts the
SQL database.

Step 6 – By default, Directory Manager uses SQL authentication to connect to the SQL
server. In this case, the Service Account and Service Account Password boxes are active. In these
boxes, enter the username and password of an SQL server account to connect to the SQL server.

Step 7 – To connect to the SQL server with a Windows account, select the **Windows Authentication**
checkbox. With Windows authentication, users have already logged on to
Windows and don't have to log on separately to SQL Server.

Step 8 – In the SQL Server Database Name box, specify the SQL database to create a data source for.

Step 9 – Click **Create Data Source**.
The data source is available on the MS SQL Server tab of the Data Sources page.

## Create a Data Source for ODBC

Use an Open Database Connectivity (ODBC) data source to connect to an ODBC-compatible provider, such as databases, directories,
or even files. Examples include SQL server, MS Access files, and Oracle.

Create a separate data source for each ODBC-compatible file, database, or directory you
want to use in queries or as source/destination in Synchronize jobs.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _ODBC_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – Enter the data source name (DSN) in the DSN box. Directory Manager uses this name to request a connection
to the ODBC data source. Note the following:

- For a system DSN, provide the name of the DSN.
- For a file DSN, provide the file path with file name and extension.

Step 6 – Select the **System DSN** or **File DSN** option button to specify the DSN type to use for
connecting to the data source.

Step 7 – If the data source is password protected, provide a username and password in the
**Service Account** and **Service Account Password** boxes to access it.
Depending on the data source, you might not need to provide both a username and password.
For example, an MS Access database may need a password only while an SQL server may require both
username and password.

Step 8 – Click **Create Data Source**.
The data source is available on the ODBC tab of the Data Sources page.

## Create a Data Source for SCIM

Directory Manager supports identity providers, namely Active Directory, Microsoft Entra ID, and
Google Workspace, but it doesn't support Slack, AWS, JumpCloud, and GitHub. You can create a System
for Cross-domain Identity Management (SCIM) data source for these and other providers to use them in queries and as
source/destinations in Synchronize jobs. As a prerequisite, the provider must support SCIM and
expose an endpoint URL that Directory Manager can consume.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page opens.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _SCIM_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – In the SCIM Endpoint box, enter the SCIM endpoint URL that the provider exposes.

Step 6 – In the Bearer Token box, enter the authentication token you generated in the provider.

Step 7 – Click **Create Data Source**.
The data source is available on the SCIM tab of the Data Sources page.
