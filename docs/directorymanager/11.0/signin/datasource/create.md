---
title: "Create a Data Source"
description: "Create a Data Source"
sidebar_position: 10
---

# Create a Data Source

You can create Synchronize jobs to synchronize data across different providers. As a prerequisite,
you must create data sources for those providers.

Data sources are primarily used in Synchronize jobs, but you can also use them in queries to search
for directory objects and in queries for group membership update.

What do you want to do?

- [Create a Data Source for MS Excel](#create-a-data-source-for-ms-excel)
- [Create a Data Source for MS Access](#create-a-data-source-for-ms-access)
- [Create a Data Source for Oracle](#create-a-data-source-for-oracle)
- [Create a Data Source for SQL Server](#create-a-data-source-for-sql-server)
- [Create a Data Source for a Text/CSV File](#create-a-data-source-for-a-textcsv-file)
- [Create a Data Source for ODBC](#create-a-data-source-for-odbc)
- [Create a Data Source for SCIM](#create-a-data-source-for-scim)

## Create a Data Source for MS Excel

Create a data source for an Excel file to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. GroupID enables you to connect to an Excel file that
is placed on a local server or on OneDrive.

Synchronize supports Microsoft Excel (\*.xls | xlsx) to serve as both a source and destination
provider. Use it as destination in a Synchronize job to export data from a source to a new Excel
worksheet. The schema of the new Excel worksheet is automatically built according to fields that you
select from the source to map to the destination.

The GroupID Installer installs the required components for the MS Excel provider while installing
GroupID. However, if you experience any issue, make sure the following are installed on the GroupID
server:

- Microsoft Office 2007 or later
- Data connectivity components found at
  [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

The Excel file for creating a data source can be placed on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- [When the Excel File is Located on a Local Server ](#when-the-excel-file-is-located-on-a-local-server)
- [When the Excel file is located on OneDrive](#when-the-excel-file-is-located-on-onedrive)

### When the Excel File is Located on a Local Server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _Microsoft Excel_.
4. Enter a name for the data source in the **Name** box.
5. From the **File Server** drop-down list, select _Local Server_.
6. In the **File Path** box, provide the path to the MS Excel file you want to create the data
   source for. This path should be complete with the file name and extension. For example:
   D:\Employee Records\Sheets\EmployeeMedical Records.xlsx

    NOTE: The MS Excel file must be placed either on the machine that Data service is installed on,
    or a location that Data service can access.

7. In case the file is placed on a network path, enter the network domain or hostname in the
   **Domain/Hostname** box.
8. In the **User Account** and **Password** boxes, enter the username and password of an account to
   access the file on the network path.
9. Click **Create Data Source**.
   The data source is available on the **Excel** tab of the **Data Sources** page.

### When the Excel file is located on OneDrive

1. Start by following steps 1-4 in the
   [When the Excel File is Located on a Local Server ](#when-the-excel-file-is-located-on-a-local-server)topic.
2. From the **File Server** drop-down list, select _OneDrive_.
3. In the **Service Account** and **Service Account Password** boxes, enter the username and
   password of a service account to access the file on OneDrive.
4. In the **Registered Application ID on Azure Active Directory** box, enter the application ID
   assigned to the GroupID application when you registered it in Microsoft Entra Admin Center.

    NOTE: The registered app must have the following API permissions to access files on OneDrive:
     ![excel_-_one_drive](/images/directorymanager/11.0/admincenter/datasource/excel_-_one_drive.webp)

5. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to
   the GroupID application when you registered it in Microsoft Entra Admin Center.
6. Enter the name of the file in the **File Name** box. This name should be complete with the file
   extension, for example, Employee Contact Details.xlsx
7. Click **Create Data Source**.
   The data source is available on the **Excel** tab of the **Data Sources** page.

## Create a Data Source for MS Access

Create a data source for an Access database to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. GroupID enables you to connect to an Access file
that is placed on a local server or on OneDrive.

Synchronize supports Microsoft Access (.mdb | .accdb) to serve as both a source and destination
provider.

The MS Access provider supports automatic schema detection. For Synchronize to communicate with this
provider, data connectivity components must be installed on the GroupID server. These components can
be found at
[Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

The Access file for creating a data source can be placed on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- [When the Access File is Located on a Local Server](#when-the-access-file-is-located-on-a-local-server)
- [When the Access File is Located on OneDrive](#when-the-access-file-is-located-on-onedrive)

### When the Access File is Located on a Local Server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _Microsoft Access_.
4. Enter a name for the data source in the **Name** box.
5. From the **File Server** drop-down list, select _Local Server_.
6. In the **File Path** box, provide the path to the MS Access database you want to create the data
   source for. This path should be complete with the file name and extension. For example:
   D:\Employee Records\Databases\Employee Medical Records.accdb

    NOTE: The Access database must be located either on the machine that Data service is installed
    on, or a location that Data service can access.

7. If the database file is password protected, then enter the password in the **File Password** box.
8. In case the database file is placed on a network path, enter the network domain or hostname in
   the **Domain/Hostname** box.
9. In the **User Account** and **Account Password** boxes, enter the username and password of an
   account to access the database file on the network path.
10. Click **Create Data Source**.
    The data source is available on the **Access** tab of the **Data Sources** page.

### When the Access File is Located on OneDrive

1. Start by following steps 1-4 in the
   [When the Access File is Located on a Local Server](#when-the-access-file-is-located-on-a-local-server)[When the Access File is Located on a Local Server](#when-the-access-file-is-located-on-a-local-server)topic.
2. From the **File Server** drop-down list, select _OneDrive_.
3. In the **Service Account** and **Service Account Password** boxes, enter the username and
   password of a service account to access the file on OneDrive.
4. If the database file is password protected, then enter the password in the **File Password** box.
5. In the **Registered Application ID on Azure Active Directory** box, enter the application ID
   assigned to the GroupID application when you registered it in Microsoft Entra Admin Center.

    NOTE: The registered app must have the following API permissions to access files on OneDrive:
     ![access](/images/directorymanager/11.0/admincenter/datasource/excel_-_one_drive.webp)

6. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to
   the GroupID application when you registered it in Microsoft Entra Admin Center.
7. Enter the name of the file in the **File Name** box. This name should be complete with the file
   extension, for example, Employee Medical Records.accdb.
8. Click **Create Data Source**.
   The data source is available on the **Access** tab of the **Data Sources** page.

## Create a Data Source for Oracle

You can create a data source for an Oracle server or a specific database on a server. This data
source can be used in queries and as source and destination provider in Synchronize jobs. This
provider supports dynamic schema detection.

NOTE: Oracle client must be installed to use this provider. Make sure you reboot your computer after
installing the Oracle client.

**To create a data store:**

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _Oracle_.
4. Enter a name for the data source in the **Name** box.
5. In the **Oracle Server or Service Name** box, enter the name of the Oracle service or the server
   you want to create the data source for.
6. In the **Service Account** and **Service Account Password** boxes, provide the username and
   password of a service account to connect to the Oracle server.
   When using this data source in a Synchronize job, the user will be able to select the databases
   that are accessible with these credentials.
7. In the **Protocol** box, specify the protocol to use for connecting to the database(s) on the
   Oracle server. For example, TCP or TCP/IP.
8. In the **HostName** box, enter the name of the machine that hosts the Oracle server.
9. In the **Port Number** box, enter the port configured for the Oracle server. This port is used to
   communicate with the oracle server.
10. In the **Database or Schema (optional)** box, specify the name of the database you want to
    create the data source for. You may also leave this field blank. In that case, all databases on
    the specified server will be displayed to the user in a Synchronize job. The user can select a
    database as needed.
11. Click **Create Data Source**.
    The data source is available on the **Oracle** tab of the **Data Sources** page.

## Create a Data Source for SQL Server

GroupID enables you to create a data source for an SQL database. This data source can be used in
queries and as source and destination in Synchronize jobs. This provider supports dynamic schema
detection.

**To create a data source:**

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _SQL Server_.
4. Enter a name for the data source in the **Name** box.
5. The SQL database for which you want to create a data source resides on an SQL server. Enter the
   name or IP address of this SQL server in the **SQL Server Name** box.
6. By default, SQL authentication is used as an authentication mode to connect to the SQL server. In
   this case, the **Service Account** and **Service Account Password** boxes are enabled. Enter the
   username and password of an SQL server account to connect to the SQL server in the respective
   boxes.
7. To use Windows authentication to connect to the SQL server using a Windows account, select the
   **Windows Authentication** check box. With Windows authentication, users are already logged onto
   Windows and do not have to log on separately to SQL Server.
8. In the **SQL Server Database Name** box, specify the SQL database to create a data source for.
9. Click **Create Data Source**.
   The data source is available on the **MS SQL Server** tab of the **Data Sources** page.

## Create a Data Source for a Text/CSV File

You can create a data source for a comma-separated values (.csv) file or a text (.txt) file. You
must also specify the delimiter used in the file to separate values.

This data source can be used in queries and only as a source in Synchronize jobs.

GroupID enables you to connect to a text file that is placed on a local server or on OneDrive.
Follow the steps in the respective section to create a data source.

- [When the Text File is Located on a Local Server](#when-the-text-file-is-located-on-a-local-server)
- [When the Text File is Located on OneDrive](#when-the-text-file-is-located-on-onedrive)

### When the Text File is Located on a Local Server

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _Text/CSV_.
4. Enter a name for the data source in the **Name** box.
5. From the **File Server** drop-down list, select _Local Server_.
6. In the **File Path** box, provide the path to the text file you want to create the data source
   for. This path should be complete with the file name and extension. For example:
   D:\Employee Records\Sheets\Employee Medical Records.csv

    NOTE: The text file must be placed either on the machine that Data service is installed on, or a
    location that Data service can access.

7. In the **Delimiter** box, specify the character that is used to separate values in the file. You
   can also enter a space as a character.
8. In case the file is placed on a network path, enter the network domain or hostname in the
   **Domain/Hostname (Optional)** box.
9. In the **Username (Optional)** and **Password (Optional)** boxes, enter the username and password
   of an account to access the file on the network path.
10. Click **Create Data Source**.
    The data source is available on the **Text/CSV** tab of the **Data Sources** page.

### When the Text File is Located on OneDrive

1. Start by following steps 1-4 in the
   [When the Text File is Located on a Local Server](#when-the-text-file-is-located-on-a-local-server)[When the Text File is Located on a Local Server](#when-the-text-file-is-located-on-a-local-server)topic.
2. From the **File Server** drop-down list, select _OneDrive_.
3. In the **Service Account** and **Service Account Password** boxes, enter the username and
   password of a service account to access the file on OneDrive.
4. In the **Delimiter** box, specify the character that is used to separate values in the file. You
   can also enter a space as a character.
5. In the **Registered Application ID on Azure Active Directory** box, enter the application ID
   assigned to the GroupID application when you registered it in Microsoft Entra Admin Center.

    NOTE: The registered app must have the following API permissions to access files on OneDrive:
     ![textcsv-onedrive](/images/directorymanager/11.0/admincenter/datasource/excel_-_one_drive.webp)

6. In the **Registered Tenant ID on Azure Active Directory** box, enter the tenant ID assigned to
   the GroupID application when you registered it in Microsoft Entra Admin Center.
7. Enter the name of the file in the **File Name** box. This name should be complete with the file
   extension, for example, “Employee Contact Details.csv”.
8. Click **Create Data Source**.
   The data source is available on the **Text/CSV** tab of the **Data Sources** page.

## Create a Data Source for ODBC

Use an ODBC data source to connect to an ODBC-compatible provider, such as databases, directories,
or even files. Examples include SQL server, MS Access files, and Oracle.

A separate data source should be created for each ODBC-compatible file, database, or directory you
want to use in queries or as source/destination in Synchronize jobs.

**To create a data source:**

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _ODBC_.
4. Enter a name for the data source in the **Name** box.
5. Enter the DSN name in the **DSN** box. GroupID uses this name to request a connection to the ODBC
   data source. Note the following:

    - For a system DSN, simply provide the name of the DSN.
    - For a file DSN, provide the file path with file name and extension.

6. Select the **System DSN** or **File DSN** option button to specify the DSN type to use for
   connecting to the data source.
7. In case the data source is password protected, provide a username and password in the **Service
   Account** and **Service Account Password** boxes to access it.
   Depending on the data source, you may not necessarily have to provide both a username and
   password. For example, an MS Access database may need a password only while an SQL server may
   require both username and password.
8. Click **Create Data Source**.
   The data source is available on the **ODBC** tab of the **Data Sources** page.

## Create a Data Source for SCIM

GroupID supports identity providers, namely Active Directory, Microsoft Entra ID, and Google
Workspace, but it does not support Slack, AWS, JumpCloud, and GitHub. You can create a SCIM-based
data source for these and other providers to use them in queries and as source/destinations in
Synchronize jobs. As a prerequisite, the provider must support SCIM and expose an endpoint URL that
GroupID can consume.

**To create a data source:**

1. In Admin Center, click **Data Sources** in the left pane.
2. On the **Data Sources** page, click **Create Data Source** in the top right corner. The **Create
   Data Source** page is displayed.
3. In the **Data Source Type** drop-down list, select a provider type to create a data source for.
   This list displays the supported providers. Select _SCIM_.
4. Enter a name for the data source in the **Name** box.
5. In the **SCIM Endpoint** box, enter the SCIM endpoint URL exposed by the provider for which you
   want to create a data source.
6. In the **Bearer Token** box, enter the authentication token you generated in the provider.
7. Click **Create Data Source**.
   The data source is available on the **SCIM** tab of the **Data Sources** page.

See Also

- [ Data Sources](/docs/directorymanager/11.0/signin/datasource/overview.md)
- [Manage a Data Source](/docs/directorymanager/11.0/signin/datasource/manage.md)
- [Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md)
